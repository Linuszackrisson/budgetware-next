import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-800 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              BudgetWare
            </span>
          </div>
          
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#software-list" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Software
                </a>
              </li>
              <li>
                <a href="#software-list" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Linus Choice
                </a>
              </li>
             
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 