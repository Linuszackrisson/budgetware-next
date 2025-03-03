import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { SoftwareList } from '@/components/SoftwareList';
import { getSoftware } from './api/api';

export default async function Home() {
  const software = await getSoftware();

  return (
    <>
      <main>
        <Hero />
        <SoftwareList software={software} />
      </main>
    </>
  );
}
