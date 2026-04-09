import React, { useState } from 'react';
import { EvyraSidebar } from '@/components/evyra/EvyraSidebar';
import { EvyraHeader } from '@/components/evyra/EvyraHeader';
import { MarketplaceView } from '@/components/evyra/views/MarketplaceView';
import { ProposalsView } from '@/components/evyra/views/ProposalsView';
import { DatabaseView } from '@/components/evyra/views/DatabaseView';
import { ChatView } from '@/components/evyra/views/ChatView';
import { PaymentsView } from '@/components/evyra/views/PaymentsView';
import { UIButtonsView } from '@/components/evyra/views/UIButtonsView';
import { UIFormsView } from '@/components/evyra/views/UIFormsView';
import { UICardsView } from '@/components/evyra/views/UICardsView';
import { UIFeedbackView } from '@/components/evyra/views/UIFeedbackView';
import { UIDataView } from '@/components/evyra/views/UIDataView';
import { UINavigationView } from '@/components/evyra/views/UINavigationView';
import { UIOverlaysView } from '@/components/evyra/views/UIOverlaysView';
import { UIMiscView } from '@/components/evyra/views/UIMiscView';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Index = () => {
  const [currentView, setCurrentView] = useState('marketplace');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleAction = (type: string) => {
    setModalType(type);
  };

  const renderView = () => {
    switch (currentView) {
      case 'marketplace': return <MarketplaceView onAction={handleAction} />;
      case 'propostas': return <ProposalsView />;
      case 'database': return <DatabaseView onAction={handleAction} />;
      case 'chat': return <ChatView />;
      case 'payments': return <PaymentsView />;
      case 'ui-buttons': return <UIButtonsView />;
      case 'ui-forms': return <UIFormsView />;
      case 'ui-cards': return <UICardsView />;
      case 'ui-feedback': return <UIFeedbackView />;
      case 'ui-data': return <UIDataView />;
      case 'ui-navigation': return <UINavigationView />;
      case 'ui-overlays': return <UIOverlaysView />;
      case 'ui-misc': return <UIMiscView />;
      default: return <MarketplaceView onAction={handleAction} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <EvyraSidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className={cn(
        "transition-all duration-500 min-h-screen",
        sidebarOpen ? 'pl-72' : 'pl-20'
      )}>
        <EvyraHeader sidebarOpen={sidebarOpen} />
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default Index;
