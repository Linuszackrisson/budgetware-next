import { getSoftware } from '../api/api';
import { SoftwareList } from '@/components/SoftwareList';

export default async function SoftwarePage() {
  const software = await getSoftware();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">All Software</h1>
        <p className="text-gray-400">Browse our collection of free and open source software</p>
      </div>

      <SoftwareList software={software} />
    </div>
  );
}