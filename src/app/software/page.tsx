'use client';

import { useState, useEffect } from 'react';
import { getSoftware } from '../api/api';
import { SoftwareTable } from '@/components/SoftwareTable';
import { categoryIcons } from '@/components/CategoriesList';
import type { Software } from '@/types/types';

export default function SoftwarePage() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    getSoftware().then(setSoftware);
  }, []);

  const filteredSoftware = selectedCategory
    ? software.filter(item => item.category === selectedCategory)
    : software;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">All Software</h1>
        <p className="text-gray-400">Browse our collection of free and open source software</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full border text-sm transition-all ${
            selectedCategory === null
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-[#171717] border-gray-600/40 text-gray-300 hover:border-emerald-500/50 hover:text-emerald-400'
          }`}
        >
          All
        </button>
        {Object.keys(categoryIcons).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              selectedCategory === category
                ? 'bg-emerald-500 border-emerald-500 text-white'
                : 'bg-[#171717] border-gray-600/40 text-gray-300 hover:border-emerald-500/50 hover:text-emerald-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <SoftwareTable software={filteredSoftware} />
    </div>
  );
}

/* Detta är /software sida som visar ALLLAAAAAAA mjukvaror. */