import { SoftwareListProps } from '@/types/types';

export function SoftwareTable({ software }: SoftwareListProps) {
  return (
    <div className="bg-[#171717] border border-gray-500 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="border-b border-gray-500">
          <tr>
            <th className="text-left p-4 text-gray-400 font-medium w-[20%]">Name</th>
            <th className="text-left p-4 text-gray-400 font-medium w-[20%]">Category</th>
            <th className="text-left p-4 text-gray-400 font-medium hidden md:table-cell w-[60%]">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-500">
          {software.map((item) => (
            <tr key={item.id} className="hover:bg-black/20">
              <td className="p-4">
                <a href={`/software/${item.id}`} className="text-white hover:text-emerald-400 font-medium">
                  {item.name}
                </a>
              </td>
              <td className="p-4">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  {item.category}
                </span>
              </td>
              <td className="p-4 text-gray-400 hidden md:table-cell">
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)}...` 
                  : item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}