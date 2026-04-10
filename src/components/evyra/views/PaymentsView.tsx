import React from 'react';
import { ShieldCheck, TrendingUp, Activity, Calendar, ChevronRight, Download } from 'lucide-react';
import { SectionHeader, StatBlock, DocCard } from '@/components/evyra/EvyraShared';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const PaymentsView = () => (
  <div className="animate-scale-in space-y-8 sm:space-y-10">
    <SectionHeader title="Finanças & Escrow" desc="Controlo de fundos seguros e histórico de pagamentos libertados." />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
      <StatBlock label="Em Proteção (Escrow)" value="4.120,00€" icon={ShieldCheck} colorClass="text-primary" />
      <StatBlock label="Pagamentos Libertados" value="12.840,00€" icon={TrendingUp} colorClass="text-success" />
      <StatBlock label="Comissões Acumuladas" value="840,20€" icon={Activity} colorClass="text-foreground" />
    </div>

    <DocCard title="Marcos de Pagamento Recentes">
      <div className="space-y-3">
        {[
          { milestone: 'Avaliação Inicial', project: 'Apoio Continuado Cascais', value: '250,00€', status: 'Libertado' },
          { milestone: 'Acompanhamento Semanal', project: 'Cuidados Mensais Porto', value: '180,00€', status: 'Libertado' },
          { milestone: 'Relatório Final', project: 'Reabilitação Motora', value: '320,00€', status: 'Em Escrow' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-secondary rounded-2xl border border-border/50 gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-card rounded-xl flex items-center justify-center text-primary shadow-sm border border-border shrink-0"><Calendar size={18} /></div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">Milestone {i + 1}: {item.milestone}</p>
                <p className="text-[10px] font-display font-medium text-muted-foreground uppercase tracking-widest">{item.project}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-left sm:text-right">
                <p className="text-lg font-display font-black text-foreground">{item.value}</p>
                <p className={`text-[9px] font-display font-bold uppercase ${item.status === 'Libertado' ? 'text-success' : 'text-warning'}`}>{item.status}</p>
              </div>
              <button
                onClick={() => toast.info(`Detalhes: ${item.milestone}`)}
                className="p-2.5 bg-card border border-border text-muted-foreground hover:text-primary rounded-xl transition-all shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={() => toast.success('A exportar relatório...')}>
          <Download size={14} /> Exportar Relatório
        </Button>
      </div>
    </DocCard>
  </div>
);

export default PaymentsView;
