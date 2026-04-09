import React, { useState } from 'react';
import { Home, Search, Users, MessageSquare, Settings, ChevronRight, ChevronDown, Menu, ArrowLeft, Bell, Globe, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';

export const UINavigationView = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [breadcrumb] = useState(['Dashboard', 'Projetos', 'Apoio Cascais']);
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(0);

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Navegação" desc="Tabs, breadcrumbs, accordions, steps e menus." />

      {/* Tabs */}
      <DocCard title="Tabs">
        <div className="space-y-6">
          {/* Underline tabs */}
          <div>
            <div className="flex border-b border-border">
              {['Visão Geral', 'Propostas', 'Documentos', 'Pagamentos'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-xs font-display font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === i ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                  {activeTab === i && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                </button>
              ))}
            </div>
            <div className="p-6 text-sm text-muted-foreground">
              Conteúdo da tab "{['Visão Geral', 'Propostas', 'Documentos', 'Pagamentos'][activeTab]}"
            </div>
          </div>

          {/* Pill tabs */}
          <div className="flex gap-2 bg-secondary p-1.5 rounded-2xl w-fit">
            {['Tudo', 'Ativo', 'Pendente', 'Arquivado'].map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2.5 text-[10px] font-display font-bold uppercase tracking-widest rounded-xl transition-all ${
                  i === 0 ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </DocCard>

      {/* Breadcrumbs */}
      <DocCard title="Breadcrumbs">
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-sm">
            {breadcrumb.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <ChevronRight size={14} className="text-muted-foreground/50" />}
                <span className={`font-medium ${i === breadcrumb.length - 1 ? 'text-foreground font-display font-bold' : 'text-muted-foreground hover:text-primary cursor-pointer transition-colors'}`}>
                  {item}
                </span>
              </React.Fragment>
            ))}
          </nav>
          <nav className="flex items-center gap-2 text-xs bg-secondary px-4 py-2.5 rounded-xl w-fit">
            <Home size={14} className="text-muted-foreground" />
            {breadcrumb.map((item, i) => (
              <React.Fragment key={item}>
                <ChevronRight size={12} className="text-muted-foreground/30" />
                <span className={`font-display font-medium ${i === breadcrumb.length - 1 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                  {item}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </DocCard>

      {/* Accordion */}
      <DocCard title="Accordion / FAQ">
        <div className="space-y-2 max-w-lg">
          {[
            { q: 'Como funciona o sistema de Escrow?', a: 'Os fundos são retidos em conta segura até a conclusão e aprovação do serviço por ambas as partes.' },
            { q: 'Os cuidadores são verificados?', a: 'Sim, todos os profissionais passam por verificação de identidade, antecedentes e qualificações antes de serem aprovados.' },
            { q: 'Posso cancelar uma proposta?', a: 'Sim, é possível cancelar propostas pendentes a qualquer momento sem custos adicionais.' },
          ].map((item, i) => (
            <div key={i} className="border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedAccordion(expandedAccordion === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-display font-bold text-foreground text-sm">{item.q}</span>
                <ChevronDown size={18} className={`text-muted-foreground transition-transform ${expandedAccordion === i ? 'rotate-180' : ''}`} />
              </button>
              {expandedAccordion === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </DocCard>

      {/* Steps */}
      <DocCard title="Stepper">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {['Conta', 'Perfil', 'Documentos', 'Verificação'].map((step, i) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-display font-bold transition-all ${
                  i <= 1 ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary text-muted-foreground border border-border'
                }`}>
                  {i <= 1 ? '✓' : i + 1}
                </div>
                <span className={`text-[10px] font-display font-bold uppercase tracking-widest ${i <= 1 ? 'text-primary' : 'text-muted-foreground'}`}>{step}</span>
              </div>
              {i < 3 && <div className={`flex-1 h-0.5 mx-2 mb-6 rounded-full ${i < 1 ? 'bg-primary' : 'bg-border'}`} />}
            </React.Fragment>
          ))}
        </div>
      </DocCard>

      {/* Bottom Nav (mobile) */}
      <DocCard title="Bottom Navigation (Mobile)">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-around bg-card border border-border rounded-3xl p-3 shadow-elevated">
            {[
              { icon: Home, label: 'Início', active: true },
              { icon: Search, label: 'Explorar', active: false },
              { icon: MessageSquare, label: 'Chat', active: false },
              { icon: Users, label: 'Perfil', active: false },
            ].map(item => (
              <button key={item.label} className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${item.active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}>
                <item.icon size={20} />
                <span className="text-[9px] font-display font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </DocCard>
    </div>
  );
};

export default UINavigationView;
