/*
# Create SMS subscribers table (single-tenant, public opt-in)

1. New Tables
- `sms_subscribers`
  - `id` (uuid, primary key)
  - `name` (text, optional — the name provided by the subscriber)
  - `phone` (text, not null — the mobile number opting into SMS updates)
  - `consent` (boolean, not null, default false — must be explicitly checked to opt in)
  - `created_at` (timestamptz, default now())

2. Security — RLS enabled
- INSERT only, for `anon, authenticated`. The public opt-in form runs as the
  anon key, so anon MUST be able to insert. Consent is required via WITH CHECK.
- No SELECT/UPDATE/DELETE for anon — subscriber data is private and only
  readable by the service role / authenticated event staff.

3. Notes
- This table stores only the information described in the official Privacy
  Policy: mobile phone number and name (if provided).
- No sensitive personal information is collected per the Privacy Policy.
*/

CREATE TABLE IF NOT EXISTS sms_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  phone text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sms_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_sms_subscribers" ON sms_subscribers;
CREATE POLICY "anon_insert_sms_subscribers"
ON sms_subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (consent = true AND phone IS NOT NULL);

-- No SELECT/UPDATE/DELETE policies for anon: subscriber data is private.
