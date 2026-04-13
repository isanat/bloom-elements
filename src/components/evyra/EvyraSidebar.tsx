import React from 'react';
import {
  Search, Menu, X,
  Users, Wallet, Zap,
  MessageSquare, CreditCard, BookOpen,
  Settings, LogOut, Briefcase, FileText,
  Bell, Globe, BarChart3, Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvyraSidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const SidebarLink = ({
  icon: Icon, label, active, onClick, isOpen, count, variant = 'default'
}: {
  icon: React.ElementType; label: string; active?: boolean; onClick?: () => void;
  isOpen: boolean; count?: string; variant?: 'default' | 'danger';
}) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 relative group",
      active
        ? "bg-primary text-primary-foreground shadow-md"
        : "text-muted-foreground hover:bg-accent hover:text-foreground"
    )}
  >
    <div className="flex items-center gap-3">
      <Icon size={18} className={cn(
        active ? "text-primary-foreground" : variant === 'danger' ? "text-destructive" : "text-muted-foreground group-hover:text-primary transition-colors"
      )} />
      {isOpen && (
        <span className={cn(
          "text-sm font-display font-bold tracking-tight",
          active ? "text-primary-foreground" : variant === 'danger' ? "text-destructive" : "text-foreground"
        )}>
          {label}
        </span>
      )}
    </div>
    {isOpen && count && (
      <span className={cn(
        "px-2 py-0.5 rounded-lg text-[10px] font-bold font-display",
        active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
      )}>
        {count}
      </span>
    )}
  </button>
);

const SectionLabel = ({ label, isOpen }: { label: string; isOpen: boolean }) => (
  <div className="pt-6 pb-2 px-3">
    {isOpen ? (
      <p className="text-[10px] font-display font-black text-muted-foreground/50 uppercase tracking-[0.3em]">{label}</p>
    ) : (
      <div className="h-px bg-border mx-auto w-8" />
    )}
  </div>
);

const navItems = {
  main: [
    { id: 'marketplace', icon: Search, label: 'Explorar Talentos' },
    { id: 'demandas', icon: Briefcase, label: 'Demandas', count: '3' },
    { id: 'search-cuidadores', icon: Users, label: 'Procurar Cuidadores' },
    { id: 'entrevistas', icon: Zap, label: 'Entrevistas' },
    { id: 'propostas', icon: FileText, label: 'Propostas', count: '2' },
    { id: 'chat', icon: MessageSquare, label: 'Mensagens', count: '5' },
  ],
  recruit: [
    { id: 'database', icon: Users, label: 'Base de Dados' },
    { id: 'payments', icon: Wallet, label: 'Pagamentos & Escrow' },
  ],
  uikit: [
    { id: 'ui-buttons', icon: Layers, label: 'Botões' },
    { id: 'ui-forms', icon: FileText, label: 'Formulários' },
    { id: 'ui-cards', icon: CreditCard, label: 'Cards & Badges' },
    { id: 'ui-feedback', icon: Bell, label: 'Feedback & Alerts' },
    { id: 'ui-data', icon: BarChart3, label: 'Dados & Tabelas' },
    { id: 'ui-navigation', icon: Globe, label: 'Navegação' },
    { id: 'ui-overlays', icon: Layers, label: 'Overlays & Modais' },
    { id: 'ui-misc', icon: Zap, label: 'Utilitários' },
  ],
  support: [
    { id: 'help', icon: BookOpen, label: 'Centro de Ajuda' },
  ],
};

const SidebarContent: React.FC<{
  currentView: string;
  setCurrentView: (view: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate?: () => void;
}> = ({ currentView, setCurrentView, isOpen, setIsOpen, onNavigate }) => {
  const handleNav = (id: string) => {
    setCurrentView(id);
    onNavigate?.();
  };

  return (
    <div className="flex flex-col h-full p-4">
      {/* Logo */}
      <div className="flex items-center justify-between mb-8 px-2 pt-2">
        {isOpen ? (
          <h1 className="text-2xl font-display font-black tracking-tighter text-primary flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <Briefcase size={18} className="text-primary-foreground" />
            </div>
            EVYRA
          </h1>
        ) : (
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto shadow-glow">
            <Briefcase size={20} className="text-primary-foreground" />
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground hidden md:block">
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-hide">
        {navItems.main.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} count={item.count} />
        ))}
        <SectionLabel label="Recrutamento" isOpen={isOpen} />
        {navItems.recruit.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} />
        ))}
        <SectionLabel label="UI Kit" isOpen={isOpen} />
        {navItems.uikit.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} />
        ))}
        <SectionLabel label="Suporte" isOpen={isOpen} />
        {navItems.support.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="pt-4 border-t border-border space-y-1">
        <SidebarLink icon={Settings} label="Definições" active={false} isOpen={isOpen} />
        <SidebarLink icon={LogOut} label="Sair" active={false} isOpen={isOpen} variant="danger" />
      </div>
    </div>
  );
};

export const EvyraSidebar: React.FC<EvyraSidebarProps> = ({
  currentView, setCurrentView, isOpen, setIsOpen, isMobileOpen, setIsMobileOpen
}) => {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-all duration-500 ease-in-out flex-col hidden md:flex",
        isOpen ? 'w-72' : 'w-20'
      )}>
        <SidebarContent currentView={currentView} setCurrentView={setCurrentView} isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>

      {/* Mobile drawer overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-[60] transition-transform duration-300 ease-in-out md:hidden",
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground">
            <X size={20} />
          </button>
        </div>
        <SidebarContent
          currentView={currentView}
          setCurrentView={setCurrentView}
          isOpen={true}
          setIsOpen={setIsOpen}
          onNavigate={() => setIsMobileOpen(false)}
        />
      </aside>
    </>
  );
};

export default EvyraSidebar;
