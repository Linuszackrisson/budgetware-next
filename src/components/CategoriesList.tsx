import { categoryIcons } from '@/app/config/icons';
import { CategoryCard } from './CategoryCard';

export function CategoriesList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(categoryIcons).map(([category, Icon]) => (
        <CategoryCard 
          key={category}
          category={category}
          Icon={Icon as React.ElementType}
        />
      ))}
    </div>
  );
}