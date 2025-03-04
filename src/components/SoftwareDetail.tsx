import { SoftwareDetailProps } from '@/types/types';
import { SoftwareList } from './SoftwareList';

export function SoftwareDetail({ software, relatedSoftware }: SoftwareDetailProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Huvudkort */}
      <div className="rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Content sektion */}
          <div className="flex flex-col space-y-4">
            <div className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 w-fit">
              {software.category}
            </div>
            <h1 className="text-3xl font-bold text-white">{software.name}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{software.description}</p>
            
            <a
              href={software.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors w-fit mt-auto"
            >
              Visit Website
              
            </a>
          </div>

          {/* Bild sektion */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            {software.image_url ? (
              <img 
                src={software.image_url} 
                alt={`Screenshot of ${software.name}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-emerald-500/20">{software.name[0]}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Relaterad mjukvara */}
      {relatedSoftware.length > 0 && (
        <div className="pt-8">
          <h2 className="text-2xl font-semibold text-white mb-6">More {software.category} Software</h2>
          <SoftwareList software={relatedSoftware} />
        </div>
      )}
    </div>
  );
}
