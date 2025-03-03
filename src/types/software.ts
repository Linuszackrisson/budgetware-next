export type SoftwareCategory =
  | 'Image Editing'
  | 'Video Editing'
  | 'Audio Production'
  | 'Office Tools'
  | 'Development Tools'
  | '3D Graphics'
  | 'Education'
  | 'Security'
  | 'Utilities'
  | 'Communication'
  | 'Design Tools'
  | 'System Tools'
  | 'Gaming'
  | 'Productivity';

export interface Software {
  id: number;
  name: string;
  description: string;
  category: SoftwareCategory;
  website: string;
  image_url: string;
  created_at: string;
} 