import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Minus, Lock } from "lucide-react";
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

const PASSWORD = "01234567899876543210";
const STORAGE_KEY = "counter_value";

const Counter = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState("");
  const [count, setCount] = useState(0);
  const [pending, setPending] = useState<null | "inc" | "dec">(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setCount(parseInt(saved, 10) || 0);
  }, []);

  useEffect(() => {
    if (unlocked) localStorage.setItem(STORAGE_KEY, String(count));
  }, [count, unlocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === PASSWORD) {
      setUnlocked(true);
      toast.success("تم فتح الصفحة");
    } else {
      toast.error("كلمة المرور غير صحيحة");
      setPwd("");
    }
  };

  const confirmChange = () => {
    if (pending === "inc") setCount((c) => c + 1);
    if (pending === "dec") setCount((c) => c - 1);
    setPending(null);
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-center">صفحة محمية</h1>
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
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-lg p-10 space-y-8">
        <h1 className="text-2xl font-bold text-center">العدّاد</h1>
        <div className="flex items-center justify-center gap-8">
          <Button
            size="lg"
            variant="outline"
            className="h-20 w-20 rounded-full"
            onClick={() => setPending("dec")}
          >
            <Minus className="w-8 h-8" />
          </Button>
          <div className="text-7xl font-bold gradient-text min-w-[120px] text-center tabular-nums">
            {count}
          </div>
          <Button
            size="lg"
            variant="outline"
            className="h-20 w-20 rounded-full"
            onClick={() => setPending("inc")}
          >
            <Plus className="w-8 h-8" />
          </Button>
        </div>
      </Card>

      <AlertDialog open={pending !== null} onOpenChange={(o) => !o && setPending(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد من تغييرك للرقم؟</AlertDialogTitle>
            <AlertDialogDescription>
              {pending === "inc"
                ? `سيتم زيادة الرقم إلى ${count + 1}`
                : pending === "dec"
                ? `سيتم إنقاص الرقم إلى ${count - 1}`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={confirmChange}>متأكد</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Counter;
