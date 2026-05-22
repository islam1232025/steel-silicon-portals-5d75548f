-- Shared counter table (single row, shared across all users who know the password)
CREATE TABLE public.shared_counter (
  id TEXT PRIMARY KEY DEFAULT 'main',
  value INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

INSERT INTO public.shared_counter (id, value) VALUES ('main', 0);

ALTER TABLE public.shared_counter ENABLE ROW LEVEL SECURITY;

-- Password check happens client-side; allow public read & update for this single-row counter
CREATE POLICY "Anyone can read shared counter"
  ON public.shared_counter FOR SELECT
  USING (true);

CREATE POLICY "Anyone can update shared counter"
  ON public.shared_counter FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Enable realtime
ALTER TABLE public.shared_counter REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.shared_counter;