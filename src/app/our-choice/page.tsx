import Image from 'next/image';
import { getSoftware } from '../api/api';

export default async function OurChoicePage() {
  // Hämta all mjukvara med en enda query
  const allSoftware = await getSoftware();
  
  // Definiera våra utvalda program med deras quotes
  const staffPicks = {
    'DaVinci Resolve': {
      quote: "Edit like a pro, without spending like one"
    },
    'GIMP': {
      quote: "Your creative vision shouldn't require a subscription"
    },
    'OBS Studio': {
      quote: "Broadcast your creativity to the world"
    },
    'Audacity': {
      quote: "Simple yet powerful - that's all you need"
    }
  };

  // Filtrera ut bara de program vi vill ha och lägg till quotes
  const recommendations = allSoftware
    .filter(software => Object.keys(staffPicks).includes(software.name))
    .map(software => ({
      ...software,
      quote: staffPicks[software.name as keyof typeof staffPicks].quote
    }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header section */}
      <div className="flex gap-12 items-center mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Staff Picks
          </h1>
          <p className="text-2xl font-light text-gray-200">
            "The best things in life are free - including software!"
          </p>
          <p className="text-gray-300">
            We've spent countless hours exploring and testing free software alternatives. 
            Here are our absolute favorites that we use every day and wholeheartedly recommend.
          </p>
        </div>
        
        <div className="relative w-[300px] h-[300px] flex-shrink-0">
          <Image
            src="/staff.jpg"
            alt="Our Staff Recommendations"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-16">
        {recommendations.map((software) => (
          <div key={software.name} className="flex gap-8 items-start">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={software.image_url}
                alt={`${software.name} icon`}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-white">{software.name}</h2>
                  <span className="px-4 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-sm">
                    {software.category}
                  </span>
                </div>
                <p className="text-lg italic text-gray-400">"{software.quote}"</p>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-3xl">
                {software.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}