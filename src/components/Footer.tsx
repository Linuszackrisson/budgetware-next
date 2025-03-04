export default function Footer() {
  return (
    <footer className="border-t border-gray-500">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-gray-400">© 2024 BudgetWare</p>
        <a 
          href="https://github.com/linuszackrisson/budgetware-next" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
} 