import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/evyra/EvyraShared';
import { ProposalDetailModal } from '@/components/evyra/ProfileModal';
import { toast } from 'sonner';

const proposals = [
  { name: "Mariana Costa", role: "Enfermeira Especialista", status: "Em Análise", price: "450€", project: "Apoio Pós-Operatório" },
  { name: "João Pedro", role: "Auxiliar de Saúde", status: "Aceite", price: "1.200€", project: "Cuidados Mensais" },
  { name: "Ana Ferreira", role: "Fisioterapeuta", status: "Pendente", price: "680€", project: "Reabilitação Motora" },
];

export const ProposalsView = () => {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  return (
    <div className="space-y-6 sm:space-y-8 animate-slide-up">
      <SectionHeader title="As Minhas Propostas" desc="Acompanhe o estado das propostas enviadas e recebidas." />
      <div className="grid grid-cols-1 gap-4">
        {proposals.map((prop, i) => (
          <div key={i} className="bg-card p-4 sm:p-6 md:p-8 rounded-3xl border border-border shadow-card flex flex-col gap-4 group hover:border-primary/30 transition-all">
            {/* Top row: avatar + info */}
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary overflow-hidden ring-4 ring-secondary shrink-0">
                <img src={`https://i.pravatar.cc/150?u=prop${i}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base sm:text-lg font-display font-black text-foreground uppercase truncate">{prop.name}</h4>
                  <span className={`px-2.5 sm:px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest shrink-0 ${
                    prop.status === 'Aceite' ? 'bg-success/10 text-success' :
                    prop.status === 'Pendente' ? 'bg-warning/10 text-warning' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {prop.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{prop.role} • {prop.project}</p>
              </div>
            </div>
            
            {/* Bottom row: price + actions */}
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div>
                <p className="text-[10px] font-display font-bold text-muted-foreground/50 uppercase tracking-widest">Valor</p>
                <p className="text-xl sm:text-2xl font-display font-black text-foreground tracking-tighter">{prop.price}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon-sm" onClick={() => toast('A abrir chat com ' + prop.name + '...')}>
                  <MessageSquare size={18} />
                </Button>
                <Button variant="dark" size="sm" onClick={() => setSelectedProposal(i)}>
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProposal !== null && (
        <ProposalDetailModal
          open={true}
          onClose={() => setSelectedProposal(null)}
          proposal={{
            ...proposals[selectedProposal],
            avatarId: selectedProposal,
          }}
        />
      )}
    </div>
  );
};

export default ProposalsView;
