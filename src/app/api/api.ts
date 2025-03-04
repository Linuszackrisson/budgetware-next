import { supabase } from '@/lib/supabase';
import type { Software } from '@/types/types';

// Hämta all mjukvara
export async function getSoftware(): Promise<Software[]> {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Failed to fetch software');
  }

  return data || [];
}

// Hämta specifik mjukvara via ID
export async function getSoftwareById(id: string): Promise<Software> {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    throw new Error('Software not found');
  }

  return data;
}

// Hämta mjukvara per kategori
export async function getSoftwareByCategory(category: string): Promise<Software[]> {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('category', category)
    .order('name');

  if (error) {
    throw new Error('Failed to fetch software by category');
  }

  return data || [];
}

// Hämta relaterad mjukvara
export async function getRelatedSoftware(category: string, currentId: number, limit = 3): Promise<Software[]> {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('category', category)
    .neq('id', currentId)
    .limit(limit);

  if (error) {
    throw new Error('Failed to fetch related software');
  }

  return data || [];
}