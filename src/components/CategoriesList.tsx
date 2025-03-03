import { 
    PhotoIcon, 
    VideoCameraIcon, 
    MusicalNoteIcon, 
    DocumentTextIcon,
    CommandLineIcon,
    CubeIcon,
    AcademicCapIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    ChatBubbleLeftRightIcon,
    PaintBrushIcon,
    ComputerDesktopIcon,
    PuzzlePieceIcon,
    ClockIcon
  } from '@heroicons/react/24/outline';
import { CategoryCard } from './CategoryCard';
  
  export const categoryIcons = {
    'Image Editing': PhotoIcon,
    'Video Editing': VideoCameraIcon,
    'Audio Production': MusicalNoteIcon,
    'Office Tools': DocumentTextIcon,
    'Development Tools': CommandLineIcon,
    '3D Graphics': CubeIcon,
    'Education': AcademicCapIcon,
    'Security': ShieldCheckIcon,
    'Utilities': WrenchScrewdriverIcon,
    'Communication': ChatBubbleLeftRightIcon,
    'Design Tools': PaintBrushIcon,
    'System Tools': ComputerDesktopIcon,
    'Gaming': PuzzlePieceIcon,
    'Productivity': ClockIcon
  };
  
  export function CategoriesList() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(categoryIcons).map(([category, Icon]) => (
          <CategoryCard 
            key={category}
            category={category}
            Icon={Icon}
          />
        ))}
      </div>
    );
  }