import { Hero } from '@/components/Hero';
import { SoftwareList } from '@/components/SoftwareList';
import { getSoftware } from './api/api';

export default async function Home() {
  const software = await getSoftware();

  return (
    <>
      <Hero />
      
      <section className="pt-12 pb-16">
        <div className="flex items-center justify-between  mb-8">
          <h2 className="text-3xl font-semibold text-white">Recently Added</h2>
          <a href="/software" className="text-emerald-500 hover:text-emerald-400 transition-colors">
            View all software →
          </a>
        </div>
        <SoftwareList software={software.slice(0, 3)} />
      </section>

      <section className="py-10 ">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">Browse Categories</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Image Editing', 'Video Editing', 'Audio Production', 'Office Tools'].map((category) => (
            <a 
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-all group"
            >
              <h3 className="text-lg font-medium text-white group-hover:text-emerald-400">{category}</h3>
              <p className="mt-2 text-sm text-gray-400">Find free alternatives</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
