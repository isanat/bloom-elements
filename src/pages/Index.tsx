import React, { useState } from 'react';
import { EvyraSidebar } from '@/components/evyra/EvyraSidebar';
import { EvyraHeader } from '@/components/evyra/EvyraHeader';

// Existing views
import { MarketplaceView }      from '@/components/evyra/views/MarketplaceView';
import { ProposalsView }        from '@/components/evyra/views/ProposalsView';
import { DatabaseView }         from '@/components/evyra/views/DatabaseView';
import { ChatView }             from '@/components/evyra/views/ChatView';
import { PaymentsView }         from '@/components/evyra/views/PaymentsView';
import { DemandasView }         from '@/components/evyra/views/DemandasView';
import { SearchCuidadoresView } from '@/components/evyra/views/SearchCuidadoresView';
import { EntrevistasView }      from '@/components/evyra/views/EntrevistasView';
import { ContratosView }        from '@/components/evyra/views/ContratosView';
import { VerificacaoView }      from '@/components/evyra/views/VerificacaoView';
import { DashboardView }        from '@/components/evyra/views/DashboardView';
import { ProfileView }          from '@/components/evyra/views/ProfileView';
import { UIButtonsView }        from '@/components/evyra/views/UIButtonsView';
import { UIFormsView }          from '@/components/evyra/views/UIFormsView';
import { UICardsView }          from '@/components/evyra/views/UICardsView';
import { UIFeedbackView }       from '@/components/evyra/views/UIFeedbackView';
import { UIDataView }           from '@/components/evyra/views/UIDataView';
import { UINavigationView }     from '@/components/evyra/views/UINavigationView';
import { UIOverlaysView }       from '@/components/evyra/views/UIOverlaysView';
import { UIMiscView }           from '@/components/evyra/views/UIMiscView';

// ── NEW views (páginas faltantes) ─────────────────────────────
import { LoginView, RegisterView }                  from '@/components/evyra/views/AuthViews';
import { FamilySetupView, KYCView }                 from '@/components/evyra/views/OnboardingViews';
import { WalletView, NotificacoesView, CuidadorDetailView } from '@/components/evyra/views/AppViews';
import { NovaDemandaView, NovoContratoView, ProposalFlowView, AdminDashboardView, HelpCenterView } from '@/components/evyra/views/FlowViews';

import { cn } from '@/lib/utils';
import { X, ShieldCheck, Trash2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// ── Full-page views (no sidebar/header) ──────────────────────
const FULL_PAGE_VIEWS = new Set(['login', 'register', 'family-setup', 'profile-setup', 'kyc']);

// ── Global modal controller ───────────────────────────────────
const ModalController = ({ type, onClose }: { type: string; onClose: () => void }) => {
  const content: Record<string, { title: string; desc: string; icon: React.ElementType; variant: 'primary' | 'destructive' | 'dark' }> = {
    hire:   { title: 'Propor Recrutamento',  desc: 'Ao confirmar, os fundos serão colocados em Escrow seguro até a conclusão do projeto.', icon: ShieldCheck, variant: 'primary' },
    delete: { title: 'Remover Candidato?',   desc: 'Esta ação irá cancelar o processo de recrutamento em curso. Tem a certeza?',          icon: Trash2,      variant: 'destructive' },
    form:   { title: 'Publicar Nova Vaga',   desc: 'Defina o orçamento e os requisitos para atrair os melhores talentos da rede.',        icon: Briefcase,   variant: 'dark' },
  };
  const c = content[type] || content.hire;
  const Icon = c.icon;
  const bgMap  = { primary: 'bg-primary/10 text-primary', destructive: 'bg-destructive/10 text-destructive', dark: 'bg-secondary text-foreground' };
  const btnMap = { primary: 'default' as const, destructive: 'destructive' as const, dark: 'dark' as const };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-card w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-elevated p-8 sm:p-10 relative border border-border text-center"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all"><X size={20} /></button>
        <div className={`w-16 h-16 ${bgMap[c.variant]} rounded-2xl flex items-center justify-center mb-6 mx-auto`}><Icon size={32} /></div>
        <h2 className="text-2xl font-display font-black text-foreground tracking-tighter mb-2 uppercase">{c.title}</h2>
        <p className="text-muted-foreground font-medium mb-8 leading-relaxed">{c.desc}</p>
        <div className="flex gap-3">
          <Button variant={btnMap[c.variant]} size="lg" className="flex-1" onClick={() => { toast.success('Processo iniciado!'); onClose(); }}>Confirmar</Button>
          <Button variant="outline" size="lg" onClick={onClose}>Cancelar</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Main Index ────────────────────────────────────────────────
const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleAction = (type: string) => setModalType(type);
  const navigate = (view: string) => setCurrentView(view);

  const renderView = () => {
    // Full-page auth/onboarding (no sidebar)
    switch (currentView) {
      case 'login':          return <LoginView onNavigate={navigate} />;
      case 'register':       return <RegisterView onNavigate={navigate} />;
      case 'family-setup':   return <FamilySetupView onNavigate={navigate} />;
      case 'kyc':            return <KYCView onNavigate={navigate} />;

      // App views
      case 'dashboard':          return <DashboardView />;
      case 'marketplace':        return <MarketplaceView onAction={handleAction} />;
      case 'demandas':           return <DemandasView />;
      case 'search-cuidadores':  return <SearchCuidadoresView />;
      case 'entrevistas':        return <EntrevistasView />;
      case 'propostas':          return <ProposalsView />;
      case 'chat':               return <ChatView />;
      case 'payments':           return <PaymentsView />;
      case 'contratos':          return <ContratosView />;
      case 'database':           return <DatabaseView onAction={handleAction} />;
      case 'verificacao':        return <VerificacaoView />;
      case 'profile':            return <ProfileView />;

      // New views
      case 'wallet':             return <WalletView />;
      case 'notificacoes':       return <NotificacoesView />;
      case 'cuidador-detail':    return <CuidadorDetailView onNavigate={navigate} />;
      case 'nova-demanda':       return <NovaDemandaView onNavigate={navigate} />;
      case 'novo-contrato':      return <NovoContratoView onNavigate={navigate} />;
      case 'proposal-flow':      return <ProposalFlowView onNavigate={navigate} />;
      case 'admin':              return <AdminDashboardView />;
      case 'help':               return <HelpCenterView />;

      // UI Kit
      case 'ui-buttons':    return <UIButtonsView />;
      case 'ui-forms':      return <UIFormsView />;
      case 'ui-cards':      return <UICardsView />;
      case 'ui-feedback':   return <UIFeedbackView />;
      case 'ui-data':       return <UIDataView />;
      case 'ui-navigation': return <UINavigationView />;
      case 'ui-overlays':   return <UIOverlaysView />;
      case 'ui-misc':       return <UIMiscView />;

      default: return <DashboardView />;
    }
  };

  // Full-page views skip the shell
  if (FULL_PAGE_VIEWS.has(currentView)) {
    return (
      <div className="min-h-screen bg-background font-body">
        {renderView()}
        <AnimatePresence>
          {modalType && <ModalController type={modalType} onClose={() => setModalType(null)} />}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <EvyraSidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isMobileOpen={mobileMenuOpen}
        setIsMobileOpen={setMobileMenuOpen}
      />

      <main className={cn(
        "transition-all duration-500 min-h-screen",
        sidebarOpen ? 'md:pl-72' : 'md:pl-20',
        "pl-0"
      )}>
        <EvyraHeader
          sidebarOpen={sidebarOpen}
          onMobileMenuToggle={() => setMobileMenuOpen(true)}
        />
        <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {modalType && <ModalController type={modalType} onClose={() => setModalType(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
