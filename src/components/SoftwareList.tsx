import { Software } from '@/types/software';
import { SoftwareCard } from './SoftwareCard';

interface SoftwareListProps {
  software: Software[];
}

export function SoftwareList({ software }: SoftwareListProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {software.map((item) => (
          <SoftwareCard key={item.id} {...item} id={item.id.toString()} />
        ))}
      </div>
    </div>
  );
}