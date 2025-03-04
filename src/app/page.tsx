import { Hero } from '@/components/Hero';
import { SoftwareList } from '@/components/SoftwareList';
import { getSoftware } from './api/api';
import { CategoryCard } from '@/components/CategoryCard';
import { categoryIcons } from '@/app/config/icons';

// Välj ut de kategorier vi vill visa på startsidan
const mainCategories = {
  'Image Editing': categoryIcons['Image Editing'],
  'Video Editing': categoryIcons['Video Editing'],
  'Audio Production': categoryIcons['Audio Production'],
  'Development Tools': categoryIcons['Development Tools'],
  'Office Tools': categoryIcons['Office Tools'],
  '3D Graphics': categoryIcons['3D Graphics'],
  'Security': categoryIcons['Security'],
  'Utilities': categoryIcons['Utilities']
};

export default async function Home() {
  const software = await getSoftware();

  return (
    <>
      <Hero />
      <section className="pt-12 pb-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-semibold text-white">Recently Added</h2>
          <a href="/software" className="text-emerald-500 hover:text-emerald-400 transition-colors">
            View all software →
          </a>
        </div>
        <SoftwareList software={software.slice(0, 3)} />
      </section>

      <section className="py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-white">Browse Categories</h2>
          </div>
          <a href="/categories" className="text-emerald-500 hover:text-emerald-400 transition-colors">
            View all categories →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(mainCategories).map(([category, Icon]) => (
            <CategoryCard 
              key={category}
              category={category}
              Icon={Icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}
