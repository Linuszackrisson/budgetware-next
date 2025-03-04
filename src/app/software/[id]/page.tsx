import { notFound } from 'next/navigation';
import { getSoftwareById } from '../../api/api';
import { SoftwareDetail } from '@/components/SoftwareDetail';
import { supabase } from '@/lib/supabase';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function SoftwarePage({ params }: PageProps) {
  try {
    const software = await getSoftwareById(params.id);
    
    // Hämta relaterad mjukvara från samma kategori
    const { data: relatedSoftware } = await supabase
      .from('software')
      .select('*')
      .eq('category', software.category)
      .neq('id', software.id)
      .limit(3);

    return <SoftwareDetail 
      software={software} 
      relatedSoftware={relatedSoftware || []} 
    />;
  } catch (error) {
    notFound();
  }
}

