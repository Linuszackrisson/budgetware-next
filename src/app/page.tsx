import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Software } from '@/types/software';
import { supabase } from '@/lib/supabase';

async function getSoftware(): Promise<Software[]> {
  try {
    const { data, error } = await supabase
      .from('software')
      .select('*');

    if (error) {
      console.error('Error:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching software:', error);
    return [];
  }
}

export default async function Home() {
  const software = await getSoftware();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Hitta gratis alternativ
              <br />till betalprogramvara
            </h1>
            <p className="text-xl mb-12 text-gray-400">
              Vi hjälper dig att hitta högkvalitativa, gratis alternativ till populära program. 
              Spara pengar utan att kompromissa med funktionalitet.
            </p>
            <a 
              href="#software-list" 
              className="bg-emerald-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-emerald-400 transition-all duration-200 inline-flex items-center gap-2 hover:scale-105"
            >
              Utforska programvaror
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Software List Section */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Programvara
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((item) => (
              <div
                key={item.id}
                className="bg-[#1C1C1C] border border-gray-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-200 flex flex-col h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors mt-auto"
                >
                  Besök webbplats
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
