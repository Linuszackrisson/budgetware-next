import { createClient } from '@supabase/supabase-js';
import type { Software } from '@/types/software';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getSoftware(): Promise<Software[]> {
  const { data, error } = await supabase
    .from('software')
    .select('*');

  if (error) {
    throw new Error('Failed to fetch software');
  }

  return data || [];
}

export async function getSoftwareById(id: string): Promise<Software> {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('Failed to fetch software');
  }

  if (!data) {
    throw new Error('Software not found');
  }

  return data;
}