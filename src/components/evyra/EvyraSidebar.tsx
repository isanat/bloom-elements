import React from 'react';
import {
  Search, Menu, X, Users, Wallet, Zap, MessageSquare, CreditCard,
  BookOpen, Settings, LogOut, Briefcase, FileText, Bell, Globe,
  BarChart3, Layers, Key, UserPlus, Heart, Shield, ShieldCheck,
  HelpCircle, LayoutDashboard
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
  icon: Icon, label, desc, active, onClick, isOpen, count, variant = 'default', badge
}: {
  icon: React.ElementType; label: string; desc?: string; active?: boolean;
  onClick?: () => void; isOpen: boolean; count?: string;
  variant?: 'default' | 'danger'; badge?: string;
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
    <div className="flex items-center gap-3 min-w-0">
      <Icon size={18} className={cn(
        "shrink-0",
        active ? "text-primary-foreground" : variant === 'danger' ? "text-destructive" : "text-muted-foreground group-hover:text-primary transition-colors"
      )} />
      {isOpen && (
        <div className="min-w-0 text-left">
          <span className={cn(
            "text-sm font-display font-bold tracking-tight block",
            active ? "text-primary-foreground" : variant === 'danger' ? "text-destructive" : "text-foreground"
          )}>{label}</span>
          {desc && <span className="text-[10px] opacity-60 font-medium block leading-none mt-0.5 truncate">{desc}</span>}
        </div>
      )}
    </div>
    {isOpen && (count || badge) && (
      <span className={cn(
        "px-2 py-0.5 rounded-lg text-[9px] font-bold font-display uppercase tracking-widest shrink-0",
        active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
      )}>
        {count || badge}
      </span>
    )}
  </button>
);

const SectionLabel = ({ label, isOpen }: { label: string; isOpen: boolean }) => (
  <div className="pt-5 pb-1.5 px-3">
    {isOpen ? (
      <p className="text-[9px] font-display font-black text-muted-foreground/50 uppercase tracking-[0.3em]">{label}</p>
    ) : (
      <div className="h-px bg-border mx-auto w-8" />
    )}
  </div>
);

const navItems = {
  main: [
    { id: 'dashboard',         icon: BarChart3,      label: 'Dashboard',          desc: 'Visão geral' },
    { id: 'marketplace',       icon: Search,         label: 'Explorar Talentos',  desc: 'Pesquisar cuidadores' },
    { id: 'demandas',          icon: Briefcase,      label: 'Demandas',           desc: 'Publicar necessidades', count: '3' },
    { id: 'search-cuidadores', icon: Users,          label: 'Procurar Cuidadores',desc: 'Encontrar profissional' },
    { id: 'entrevistas',       icon: Zap,            label: 'Entrevistas',        desc: 'Agendadas e pendentes' },
    { id: 'propostas',         icon: FileText,       label: 'Propostas',          desc: 'Recebidas e enviadas', count: '2' },
    { id: 'chat',              icon: MessageSquare,  label: 'Mensagens',          desc: 'Conversas ativas', count: '5' },
  ],
  recruit: [
    { id: 'contratos',  icon: FileText,   label: 'Contratos',           desc: 'Ativos e histórico', count: '1' },
    { id: 'database',   icon: Users,      label: 'Base de Dados',       desc: 'Pool de candidatos' },
    { id: 'payments',   icon: Wallet,     label: 'Pagamentos & Escrow', desc: 'Transações e saldo' },
    { id: 'verificacao',icon: ShieldCheck,label: 'Verificação KYC',    desc: 'Estado de identidade' },
    { id: 'profile',    icon: Users,      label: 'Meu Perfil',          desc: 'Editar informação' },
    { id: 'wallet',     icon: CreditCard, label: 'Carteira',            desc: 'Saldo detalhado',    badge: 'novo' },
    { id: 'notificacoes',icon: Bell,      label: 'Notificações',        desc: 'Alertas recentes',   badge: 'novo' },
  ],
  flows: [
    { id: 'cuidador-detail', icon: Users,      label: 'Detalhe Cuidador', desc: 'Perfil público',     badge: 'novo' },
    { id: 'nova-demanda',    icon: Briefcase,  label: 'Nova Demanda',     desc: 'Publicar necessidade',badge: 'novo' },
    { id: 'novo-contrato',   icon: FileText,   label: 'Novo Contrato',    desc: 'Criar contrato',     badge: 'novo' },
    { id: 'proposal-flow',   icon: Zap,        label: 'Proposal Flow',    desc: 'Aceitar proposta',   badge: 'novo' },
  ],
  auth: [
    { id: 'login',         icon: Key,        label: 'Login',           desc: 'Página de entrada',   badge: 'novo' },
    { id: 'register',      icon: UserPlus,   label: 'Registro',        desc: 'Criação de conta',    badge: 'novo' },
    { id: 'family-setup',  icon: Heart,      label: 'Family Setup',    desc: 'Wizard família',      badge: 'novo' },
    { id: 'profile-setup', icon: Users,      label: 'Profile Setup',   desc: 'Wizard cuidador',     badge: 'novo' },
    { id: 'kyc',           icon: Shield,     label: 'Verificação KYC', desc: 'Identidade Didit',    badge: 'novo' },
  ],
  admin: [
    { id: 'admin', icon: LayoutDashboard, label: 'Admin Dashboard', desc: 'Painel de gestão', badge: 'novo' },
    { id: 'help',  icon: HelpCircle,      label: 'Centro de Ajuda', desc: 'FAQ & suporte',   badge: 'novo' },
  ],
  uikit: [
    { id: 'ui-buttons',    icon: Layers,    label: 'Botões' },
    { id: 'ui-forms',      icon: FileText,  label: 'Formulários' },
    { id: 'ui-cards',      icon: CreditCard,label: 'Cards & Badges' },
    { id: 'ui-feedback',   icon: Bell,      label: 'Feedback & Alerts' },
    { id: 'ui-data',       icon: BarChart3, label: 'Dados & Tabelas' },
    { id: 'ui-navigation', icon: Globe,     label: 'Navegação' },
    { id: 'ui-overlays',   icon: Layers,    label: 'Overlays & Modais' },
    { id: 'ui-misc',       icon: Zap,       label: 'Utilitários' },
  ],
};

const SidebarContent: React.FC<{
  currentView: string;
  setCurrentView: (view: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate?: () => void;
}> = ({ currentView, setCurrentView, isOpen, setIsOpen, onNavigate }) => {
  const handleNav = (id: string) => { setCurrentView(id); onNavigate?.(); };

  return (
    <div className="flex flex-col h-full p-4">
      {/* Logo */}
      <div className="flex items-center justify-between mb-6 px-1 pt-1">
        {isOpen ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow">
              <Heart size={20} className="text-primary-foreground" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-base font-display font-black tracking-tighter text-primary leading-none">EVYRA</h1>
              <p className="text-[9px] font-display font-bold text-muted-foreground uppercase tracking-widest mt-0.5">UI Kit</p>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto shadow-glow">
            <Heart size={20} className="text-primary-foreground" fill="currentColor" />
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground hidden md:block">
          <Menu size={18} />
        </button>
      </div>

      {/* New pages badge */}
      {isOpen && (
        <div className="mx-1 mb-4 px-3 py-2.5 bg-primary/5 border border-primary/20 rounded-2xl">
          <p className="text-[9px] font-display font-black uppercase tracking-widest text-primary">13 páginas novas</p>
          <p className="text-xs text-muted-foreground mt-0.5">Prontas para o repositório</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto scrollbar-hide">
        {navItems.main.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} desc={isOpen ? item.desc : undefined}
            active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} count={item.count} />
        ))}

        <SectionLabel label="Recrutamento" isOpen={isOpen} />
        {navItems.recruit.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} desc={isOpen ? item.desc : undefined}
            active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} badge={item.badge} />
        ))}

        <SectionLabel label="Novos Fluxos" isOpen={isOpen} />
        {navItems.flows.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} desc={isOpen ? item.desc : undefined}
            active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} badge={item.badge} />
        ))}

        <SectionLabel label="Auth & Onboarding" isOpen={isOpen} />
        {navItems.auth.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} desc={isOpen ? item.desc : undefined}
            active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} badge={item.badge} />
        ))}

        <SectionLabel label="Admin & Suporte" isOpen={isOpen} />
        {navItems.admin.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} desc={isOpen ? item.desc : undefined}
            active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} badge={item.badge} />
        ))}

        <SectionLabel label="UI Kit" isOpen={isOpen} />
        {navItems.uikit.map(item => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label}
            active={currentView === item.id} onClick={() => handleNav(item.id)} isOpen={isOpen} />
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
      {/* Desktop */}
      <aside className={cn(
        "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-all duration-500 ease-in-out flex-col hidden md:flex",
        isOpen ? 'w-72' : 'w-20'
      )}>
        <SidebarContent currentView={currentView} setCurrentView={setCurrentView} isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 md:hidden" onClick={() => setIsMobileOpen(false)} />
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
        <SidebarContent currentView={currentView} setCurrentView={setCurrentView} isOpen={true}
          setIsOpen={setIsOpen} onNavigate={() => setIsMobileOpen(false)} />
      </aside>
    </>
  );
};

export default EvyraSidebar;
