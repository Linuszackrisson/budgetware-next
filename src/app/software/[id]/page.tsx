import { notFound } from 'next/navigation';
import { getSoftwareById } from '../../api/api';
import { SoftwareDetail } from '@/components/SoftwareDetail';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function SoftwarePage({ params }: PageProps) {
  try {
    const software = await getSoftwareById(params.id);
    return <SoftwareDetail software={software} />;
  } catch (error) {
    notFound();
  }
}

