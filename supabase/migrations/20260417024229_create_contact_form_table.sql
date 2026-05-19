/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `school_name` (text, required) - Nome da Escola
      - `contact_name` (text, required) - Seu Nome
      - `email` (text, required) - Email
      - `whatsapp` (text, optional) - WhatsApp
      - `state` (text, required) - Estado (Brazilian state abbreviation)
      - `adventist_union` (text, optional) - União Adventista
      - `student_count` (integer, optional) - Numero de Alunos no Ensino Médio
      - `message` (text, optional) - Mensagem
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Allow anonymous inserts (public contact form)
    - No read policy for public (data only accessible server-side)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  whatsapp text DEFAULT '',
  state text NOT NULL,
  adventist_union text DEFAULT '',
  student_count integer,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);