import { notFound } from 'next/navigation';
import { getSoftwareByCategory } from '@/app/api/api';
import { SoftwareList } from '@/components/SoftwareList';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);

  try {
    const software = await getSoftwareByCategory(categoryName);
    
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
  } catch (error) {
    notFound();
  }
}