'use client';

import Link from 'next/link';
import { Software } from '@/types/software';

type SoftwareCardProps = Omit<Software, 'id'> & { id: string };

export function SoftwareCard(props: SoftwareCardProps) {
  const handleExternalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(props.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link 
      href={`/software/${props.id}`}
      className="block border border-gray-600 rounded-lg p-6 hover:border-emerald-500/50 transition-colors bg-[#171717]"
    >
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-bold text-white mb-2">{props.name}</h2>
        <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 w-fit">
          {props.category}
        </span>
        <p className="mt-4 text-gray-400 flex-grow">
          {props.description.length > 100 
            ? `${props.description.slice(0, 100).trim()}...` 
            : props.description}
        </p>
        
      </div>
    </Link>
  );
}