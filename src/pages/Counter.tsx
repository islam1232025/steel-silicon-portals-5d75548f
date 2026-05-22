import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Minus, Lock, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PASSWORD = "01234567899876543210";
const COUNTER_ID = "main";
const UNLOCK_KEY = "counter_unlocked";

const Counter = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [pending, setPending] = useState<null | "inc" | "dec">(null);
  const [saving, setSaving] = useState(false);

  // Persist unlock for the current browser session
  useEffect(() => {
    if (sessionStorage.getItem(UNLOCK_KEY) === "1") setUnlocked(true);
  }, []);

  // Load initial value + subscribe to realtime changes
  useEffect(() => {
    if (!unlocked) return;

    let active = true;

    const load = async () => {
      const { data, error } = await supabase
        .from("shared_counter")
        .select("value")
        .eq("id", COUNTER_ID)
        .maybeSingle();
      if (!active) return;
      if (error) {
        toast.error("تعذّر تحميل الرقم");
        return;
      }
      setCount(data?.value ?? 0);
    };
    load();

    const channel = supabase
      .channel("shared_counter_changes")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "shared_counter" },
        (payload) => {
          const newVal = (payload.new as { value: number }).value;
          setCount(newVal);
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [unlocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === PASSWORD) {
      sessionStorage.setItem(UNLOCK_KEY, "1");
      setUnlocked(true);
      toast.success("تم فتح الصفحة");
    } else {
      toast.error("كلمة المرور غير صحيحة");
      setPwd("");
    }
  };

  const confirmChange = async () => {
    if (count === null || pending === null) return;
    const newValue = pending === "inc" ? count + 1 : count - 1;
    setSaving(true);
    const { error } = await supabase
      .from("shared_counter")
      .update({ value: newValue, updated_at: new Date().toISOString() })
      .eq("id", COUNTER_ID);
    setSaving(false);
    setPending(null);
    if (error) {
      toast.error("فشل حفظ التغيير");
    } else {
      setCount(newValue);
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
        <Card className="w-full max-w-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-center">صفحة محمية</h1>
            <p className="text-sm text-muted-foreground text-center">
              الرجاء إدخال كلمة المرور للمتابعة
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="كلمة المرور"
              autoFocus
              inputMode="numeric"
              autoComplete="off"
            />
            <Button type="submit" className="w-full" variant="hero">
              دخول
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-lg p-6 sm:p-10 space-y-6 sm:space-y-8">
        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold">العدّاد المشترك</h1>
          <p className="text-xs text-muted-foreground">
            يتم مزامنة الرقم لحظيًا بين جميع المستخدمين
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <Button
            size="lg"
            variant="outline"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full shrink-0"
            onClick={() => setPending("dec")}
            disabled={count === null || saving}
            aria-label="إنقاص"
          >
            <Minus className="w-6 h-6 sm:w-8 sm:h-8" />
          </Button>
          <div className="text-5xl sm:text-7xl font-bold gradient-text min-w-[90px] sm:min-w-[120px] text-center tabular-nums">
            {count === null ? <Loader2 className="w-10 h-10 mx-auto animate-spin" /> : count}
          </div>
          <Button
            size="lg"
            variant="outline"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full shrink-0"
            onClick={() => setPending("inc")}
            disabled={count === null || saving}
            aria-label="زيادة"
          >
            <Plus className="w-6 h-6 sm:w-8 sm:h-8" />
          </Button>
        </div>
      </Card>

      <AlertDialog open={pending !== null} onOpenChange={(o) => !o && !saving && setPending(null)}>
        <AlertDialogContent className="max-w-[92vw] sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد من تغييرك للرقم؟</AlertDialogTitle>
            <AlertDialogDescription>
              {count !== null && pending === "inc"
                ? `سيتم زيادة الرقم إلى ${count + 1}`
                : count !== null && pending === "dec"
                ? `سيتم إنقاص الرقم إلى ${count - 1}`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={saving}>إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={confirmChange} disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "متأكد"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Counter;
