import {
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CubeIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

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
  'Design Tools': PencilSquareIcon,
  'System Tools': ComputerDesktopIcon,
  'Gaming': PuzzlePieceIcon,
  'Productivity': ClipboardDocumentListIcon
} as const;

export type CategoryIcon = typeof categoryIcons[keyof typeof categoryIcons]; 