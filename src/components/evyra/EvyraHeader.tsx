import React from 'react';
import { Search, Activity, Moon, Sun, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface EvyraHeaderProps {
  sidebarOpen: boolean;
  onMobileMenuToggle?: () => void;
}

export const EvyraHeader: React.FC<EvyraHeaderProps> = ({ sidebarOpen, onMobileMenuToggle }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile menu button */}
        <button
          onClick={onMobileMenuToggle}
          className="p-2 text-muted-foreground hover:bg-accent rounded-xl transition-colors md:hidden"
        >
          <Menu size={22} />
        </button>
        <div className="relative w-full max-w-md hidden md:block">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-foreground placeholder:text-muted-foreground"
            placeholder="Pesquisar por especialidade ou localização..."
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 text-muted-foreground hover:bg-accent rounded-xl transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors">
          <Activity size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-card" />
        </button>
        <div className="w-10 h-10 bg-secondary rounded-xl border-2 border-card shadow-card overflow-hidden ring-2 ring-secondary cursor-pointer">
          <img src="https://i.pravatar.cc/100?u=company" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default EvyraHeader;
