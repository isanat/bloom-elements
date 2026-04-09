import React, { useState } from 'react';
import { X, ShieldCheck, Trash2, Briefcase, AlertTriangle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

const DemoModal = ({ open, onClose, config }: { open: boolean; onClose: () => void; config: { title: string; desc: string; icon: React.ElementType; variant: 'primary' | 'destructive' | 'dark' } }) => {
  if (!open) return null;
  const Icon = config.icon;
  const bgMap = { primary: 'bg-primary/10 text-primary', destructive: 'bg-destructive/10 text-destructive', dark: 'bg-secondary text-foreground' };
  const btnMap = { primary: 'default' as const, destructive: 'destructive' as const, dark: 'dark' as const };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card w-full max-w-md rounded-3xl shadow-elevated p-10 relative animate-scale-in border border-border text-center">
        <button onClick={onClose} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all"><X size={20} /></button>
        <div className={`w-16 h-16 ${bgMap[config.variant]} rounded-2xl flex items-center justify-center mb-6 mx-auto`}><Icon size={32} /></div>
        <h2 className="text-2xl font-display font-black text-foreground tracking-tighter mb-2 uppercase">{config.title}</h2>
        <p className="text-muted-foreground font-medium mb-8 leading-relaxed">{config.desc}</p>
        <div className="flex gap-3">
          <Button variant={btnMap[config.variant]} size="lg" className="flex-1" onClick={() => { toast.success('Ação confirmada'); onClose(); }}>Confirmar</Button>
          <Button variant="outline" size="lg" onClick={onClose}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
};

export const UIOverlaysView = () => {
  const [modal, setModal] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const modals = {
    hire: { title: 'Propor Recrutamento', desc: 'Ao confirmar, os fundos serão colocados em Escrow seguro.', icon: ShieldCheck, variant: 'primary' as const },
    delete: { title: 'Remover Candidato?', desc: 'Esta ação irá cancelar o processo em curso.', icon: Trash2, variant: 'destructive' as const },
    form: { title: 'Nova Vaga', desc: 'Defina o orçamento e os requisitos para a vaga.', icon: Briefcase, variant: 'dark' as const },
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Overlays & Modais" desc="Modais, drawers, tooltips e popovers." />

      <DocCard title="Modais">
        <div className="flex flex-wrap gap-4">
          <Button variant="default" onClick={() => setModal('hire')}>Modal Recrutamento</Button>
          <Button variant="destructive" onClick={() => setModal('delete')}>Modal Eliminar</Button>
          <Button variant="dark" onClick={() => setModal('form')}>Modal Nova Vaga</Button>
        </div>
      </DocCard>

      <DocCard title="Side Sheet / Drawer">
        <Button variant="outline" onClick={() => setSheet(true)}>Abrir Side Sheet →</Button>
      </DocCard>

      <DocCard title="Tooltip">
        <div className="flex gap-6">
          <div className="relative inline-block">
            <Button
              variant="outline"
              size="sm"
              onMouseEnter={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}
            >
              Hover para tooltip
            </Button>
            {tooltip && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs font-medium rounded-xl whitespace-nowrap animate-fade-in shadow-md">
                Informação adicional aqui
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
              </div>
            )}
          </div>
        </div>
      </DocCard>

      <DocCard title="Confirmation Inline">
        <div className="bg-warning/5 border border-warning/20 rounded-2xl p-6 flex items-start gap-4 max-w-lg">
          <div className="w-10 h-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center shrink-0">
            <AlertTriangle size={20} />
          </div>
          <div className="flex-1">
            <p className="font-display font-bold text-foreground text-sm mb-1">Tem a certeza?</p>
            <p className="text-xs text-muted-foreground mb-4">Esta ação não pode ser revertida.</p>
            <div className="flex gap-2">
              <Button variant="warning" size="sm">Sim, confirmar</Button>
              <Button variant="ghost" size="sm">Cancelar</Button>
            </div>
          </div>
        </div>
      </DocCard>

      {/* Modal Render */}
      {modal && <DemoModal open={!!modal} onClose={() => setModal(null)} config={modals[modal as keyof typeof modals]} />}

      {/* Side Sheet */}
      {sheet && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-foreground/50 backdrop-blur-sm animate-fade-in" onClick={() => setSheet(false)}>
          <div className="w-full max-w-sm bg-card h-full shadow-elevated border-l border-border p-8 animate-slide-right" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display font-black text-foreground text-xl uppercase">Detalhes</h3>
              <button onClick={() => setSheet(false)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Nome</label>
                <input className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" defaultValue="Helena Santos" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Especialidade</label>
                <input className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" defaultValue="Enfermagem" />
              </div>
              <Button variant="default" size="lg" className="w-full">Guardar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UIOverlaysView;
