import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

export const ProposalsView = () => {
  const proposals = [
    { name: "Mariana Costa", role: "Enfermeira Especialista", status: "Em Análise", price: "450€", project: "Apoio Pós-Operatório" },
    { name: "João Pedro", role: "Auxiliar de Saúde", status: "Aceite", price: "1.200€", project: "Cuidados Mensais" },
    { name: "Ana Ferreira", role: "Fisioterapeuta", status: "Pendente", price: "680€", project: "Reabilitação Motora" },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      <SectionHeader title="As Minhas Propostas" desc="Acompanhe o estado das propostas enviadas e recebidas." />
      <div className="grid grid-cols-1 gap-4">
        {proposals.map((prop, i) => (
          <div key={i} className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group hover:border-primary/30 transition-all">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-secondary overflow-hidden ring-4 ring-secondary shrink-0">
                <img src={`https://i.pravatar.cc/150?u=prop${i}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="text-lg font-display font-black text-foreground uppercase">{prop.name}</h4>
                  <span className={`px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest ${
                    prop.status === 'Aceite' ? 'bg-success/10 text-success' :
                    prop.status === 'Pendente' ? 'bg-warning/10 text-warning' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {prop.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{prop.role} • {prop.project}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] font-display font-bold text-muted-foreground/50 uppercase tracking-widest">Valor</p>
                <p className="text-2xl font-display font-black text-foreground tracking-tighter">{prop.price}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => toast('A abrir chat...')}>
                  <MessageSquare size={20} />
                </Button>
                <Button variant="dark" size="sm">Ver Detalhes</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProposalsView;
