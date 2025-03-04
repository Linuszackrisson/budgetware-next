'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Software } from '@/types/types';
import { WindowIcon } from '@heroicons/react/24/outline';

type SoftwareCardProps = Omit<Software, 'id'> & { id: string };

export function SoftwareCard(props: SoftwareCardProps) {
  return (
    <Link 
      href={`/software/${props.id}`}
      className="group block bg-[#171717] rounded-xl overflow-hidden border border-gray-500 hover:border-emerald-500/50 transition-all"
    >
      <div className="p-4 flex items-center gap-4 border-b border-gray-500">
        <div className="relative w-16 h-16 rounded-lg flex items-center justify-center">
          {props.image_url ? (
            <div className="relative w-16 h-16">
              <Image 
                src={props.image_url}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <WindowIcon className="w-5 h-5 text-emerald-500/70" />
          )}
        </div>
        <h2 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
          {props.name}
        </h2>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {props.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            {props.category}
          </span>
          <span className="text-xs text-gray-500">View details →</span>
        </div>
      </div>
    </Link>
  );
}