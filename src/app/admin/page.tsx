'use client';

import { FormEvent, useRef } from 'react';

const categories = [
  'Bildbehandling',
  'Videoredigering',
  'Ljudredigering',
  'Kontorsverktyg',
  'Utvecklingsverktyg',
  'Webbläsare',
  'Säkerhet',
  'Kommunikation',
  'Systemverktyg'
] as const;

export default function AdminPage() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch('/api/software', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          description: formData.get('description'),
          category: formData.get('category'),
          website: formData.get('website'),
          image_url: formData.get('image_url'),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to add software');
      }

      // Reset form using the ref
      formRef.current?.reset();
      alert('Programvaran har lagts till!');
      
    } catch (error) {
      console.error('Error adding software:', error);
      alert('Ett fel uppstod när programvaran skulle läggas till.');
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
          Lägg till ny programvara
        </h1>

        <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Namn
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111111] border border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white"
              placeholder="t.ex. GIMP"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
              Beskrivning
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-[#111111] border border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white"
              placeholder="Beskriv programvaran och dess funktioner..."
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">
              Kategori
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111111] border border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white"
            >
              <option value="">Välj en kategori</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-400 mb-2">
              Webbplats
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111111] border border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-gray-400 mb-2">
              Bild URL
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111111] border border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white"
              placeholder="https://example.com/image.png"
            />
            <p className="mt-1 text-sm text-gray-500">
              Länk till en bild som representerar programvaran (logotyp eller skärmdump)
            </p>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-emerald-400 transition-all duration-200"
          >
            Lägg till programvara
          </button>
        </form>
      </div>
    </div>
  );
} 