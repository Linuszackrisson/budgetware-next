-- Skapa enum för programvarukategorier
CREATE TYPE software_category AS ENUM (
  'Bildbehandling',
  'Videoredigering',
  'Ljudredigering',
  'Kontorsverktyg',
  'Utvecklingsverktyg',
  'Webbläsare',
  'Säkerhet',
  'Kommunikation',
  'Systemverktyg'
);

-- Skapa software tabell
CREATE TABLE IF NOT EXISTS public.software (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category software_category NOT NULL,
  website TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Aktivera Row Level Security (RLS)
ALTER TABLE public.software ENABLE ROW LEVEL SECURITY;

-- Skapa policy för publik läsning
CREATE POLICY "Allow public read access" ON public.software
  FOR SELECT
  USING (true);

-- Skapa policy för att lägga till programvara
CREATE POLICY "Allow insert access" ON public.software
  FOR INSERT
  WITH CHECK (true);

