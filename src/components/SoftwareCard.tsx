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
      className="block border border-gray-800 rounded-lg p-6 hover:border-emerald-500/50 transition-colors"
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
        <button
          onClick={handleExternalClick}
          className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors mt-auto"
        >
          Besök webbplats
          <svg 
            className="ml-2 w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </Link>
  );
}