export type SoftwareCategory =
  | 'Bildbehandling'
  | 'Videoredigering'
  | 'Ljudredigering'
  | 'Kontorsverktyg'
  | 'Utvecklingsverktyg'
  | 'Webbläsare'
  | 'Säkerhet'
  | 'Kommunikation'
  | 'Systemverktyg';

export interface Software {
  id: number;
  name: string;
  description: string;
  category: SoftwareCategory;
  website: string;
  image_url: string;
  created_at: string;
} 