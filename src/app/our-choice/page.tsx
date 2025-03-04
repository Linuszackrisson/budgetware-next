import Image from 'next/image';
import { getSoftware } from '../api/api';

export default async function OurChoicePage() {
  const allSoftware = await getSoftware();
  
  // Våra utvalda program med custom beskrivningar
  const ourChoices = [
    {
      name: "DaVinci Resolve",
      customDescription: "I used this software to edit countless of hours of epic gaming videos. It's a beast and a total powerhouse.",
      software: allSoftware.find(s => s.name === 'DaVinci Resolve')
    },
    {
      name: "GIMP",
      customDescription: "I used GIMP to create over 300 gaming related memes and grew a facebook page to 40000 followers back in 2012, thank you GIMP!",
      software: allSoftware.find(s => s.name === 'GIMP')
    },
    {
      name: "OBS Studio",
      customDescription: "Used this software daily during 2012-2017 to stream and record my gaming sessions. There is literally no other software that comes close to it.",
      software: allSoftware.find(s => s.name === 'OBS Studio')
    },
    {
      name: "Audacity",
      customDescription: "The perfect tool for quick audio recordings and edits. As a musician, i used it to record my own music.",
      software: allSoftware.find(s => s.name === 'Audacity')
    }
  ].filter(choice => choice.software); // Filter out any programs not found in database

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header section */}
      <div className="flex gap-12 items-center mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-emerald-400">
            Our Choice
          </h1>
          <p className="text-2xl font-light text-gray-200">
            "The best things in life are free - including software!"
          </p>
          <p className="text-gray-300">
            I've spent countless hours exploring and testing free software alternatives. 
            Here are my absolute favorites that i use every day and wholeheartedly recommend.
          </p>
        </div>
        
        <div className="relative w-[300px] h-[300px] flex-shrink-0 border-2 border-emerald-400 rounded-full">
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
        {ourChoices.map(({ software, customDescription }) => (
          <div key={software!.name} className="flex gap-8 items-start">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={software!.image_url}
                alt={`${software!.name} icon`}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-white">{software!.name}</h2>
                  <span className="px-4 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-sm">
                    {software!.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-3xl">
                {customDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}