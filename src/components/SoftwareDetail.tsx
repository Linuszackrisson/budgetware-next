import { Software } from '@/types/software';

interface SoftwareDetailProps {
  software: Software;
}

export function SoftwareDetail({ software }: SoftwareDetailProps) {
  return (
    <div className="max-w-4xl mx-auto bg-[#1C1C1C] border border-gray-800 rounded-lg p-8">
      <h1 className="text-3xl font-bold text-white mb-4">{software.name}</h1>
      <div className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 w-fit mb-4">
        {software.category}
      </div>
      {software.image_url && (
        <div className="relative w-full max-h-[400px] rounded-lg overflow-hidden bg-black/50 mb-4">
          <img 
            src={software.image_url} 
            alt={`Skärmdump av ${software.name}`}
            className="object-contain w-full h-full"
          />
        </div>
      )}
      <p className="text-gray-300 mb-4">{software.description}</p>
      <a
        href={software.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors"
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
      </a>
    </div>
  );
}
