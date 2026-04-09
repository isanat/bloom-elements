import React from 'react';
import { ShieldCheck, TrendingUp, Activity, Calendar, ChevronRight } from 'lucide-react';
import { SectionHeader, StatBlock, DocCard } from '@/components/evyra/EvyraShared';

export const PaymentsView = () => (
  <div className="animate-scale-in space-y-10">
    <SectionHeader title="Finanças & Escrow" desc="Controlo de fundos seguros e histórico de pagamentos libertados." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <StatBlock label="Em Proteção (Escrow)" value="4.120,00€" icon={ShieldCheck} colorClass="text-primary" />
      <StatBlock label="Pagamentos Libertados" value="12.840,00€" icon={TrendingUp} colorClass="text-success" />
      <StatBlock label="Comissões Acumuladas" value="840,20€" icon={Activity} colorClass="text-foreground" />
    </div>

    <DocCard title="Marcos de Pagamento Recentes">
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center justify-between p-5 bg-secondary rounded-2xl border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-card rounded-xl flex items-center justify-center text-primary shadow-sm border border-border"><Calendar size={18} /></div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">Milestone {i}: Avaliação Inicial</p>
                <p className="text-[10px] font-display font-medium text-muted-foreground uppercase tracking-widest">Projeto: Apoio Continuado Cascais</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-lg font-display font-black text-foreground">250,00€</p>
                <p className="text-[9px] font-display font-bold text-success uppercase">Libertado</p>
              </div>
              <button className="p-2.5 bg-card border border-border text-muted-foreground hover:text-primary rounded-xl transition-all shadow-sm"><ChevronRight size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </DocCard>
  </div>
);

export default PaymentsView;
