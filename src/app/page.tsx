import { Hero } from '@/components/Hero';
import { SoftwareList } from '@/components/SoftwareList';
import { getSoftware } from './api/api';

export default async function Home() {
  const software = await getSoftware();

  return (
    <>
      <Hero />
      <div className='mx-auto text-4xl font-semibold text-white sm:text-6xl'>
      <h2 className='recently-added'>Recently Added</h2>
      </div>
      <SoftwareList software={software.slice(0, 3)} /> 
    </>
  );
}
