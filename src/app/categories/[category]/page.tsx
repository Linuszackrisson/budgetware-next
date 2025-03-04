import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { SoftwareList } from '@/components/SoftwareList';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  // Decode the URL parameter to get the original category name
  const categoryName = decodeURIComponent(params.category);

  // Fetch software for this specific category
  const { data: software } = await supabase
    .from('software')
    .select('*')
    .eq('category', categoryName);

  // If no software found, show 404
  if (!software || software.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-semibold text-white">{categoryName}</h1>
        <a href="/categories" className="text-emerald-500 hover:text-emerald-400 transition-colors">
          ← Back to categories
        </a>
      </div>
      <SoftwareList software={software} />
    </div>
  );
}