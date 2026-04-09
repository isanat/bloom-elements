import React, { useState } from 'react';
import { Plus, Download, Upload, ArrowRight, Trash2, Edit2, Heart, Loader2, Check, Send, Filter, Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

export const UIButtonsView = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Botões" desc="Todos os estilos e variantes de botões disponíveis no design system EVYRA." />

      <DocCard title="Variantes Principais">
        <div className="flex flex-wrap gap-4">
          <Button variant="default" onClick={() => toast.success('Primary clicado!')}>Primary</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="premium">Premium Gradient</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
        </div>
      </DocCard>

      <DocCard title="Tamanhos">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default" size="sm">Small</Button>
          <Button variant="default" size="default">Default</Button>
          <Button variant="default" size="lg">Large</Button>
          <Button variant="default" size="xl">Extra Large</Button>
        </div>
      </DocCard>

      <DocCard title="Com Ícones">
        <div className="flex flex-wrap gap-4">
          <Button variant="default"><Plus size={16} /> Adicionar</Button>
          <Button variant="dark"><Download size={16} /> Exportar</Button>
          <Button variant="outline"><Upload size={16} /> Upload</Button>
          <Button variant="destructive"><Trash2 size={16} /> Eliminar</Button>
          <Button variant="success"><Check size={16} /> Confirmar</Button>
          <Button variant="premium"><Send size={16} /> Enviar Proposta</Button>
          <Button variant="secondary"><Filter size={16} /> Filtros</Button>
          <Button variant="ghost"><RefreshCw size={16} /> Atualizar</Button>
        </div>
      </DocCard>

      <DocCard title="Icon Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default" size="icon-sm"><Plus size={16} /></Button>
          <Button variant="default" size="icon"><Search size={18} /></Button>
          <Button variant="default" size="icon-lg"><Heart size={22} /></Button>
          <Button variant="outline" size="icon-sm"><Edit2 size={16} /></Button>
          <Button variant="outline" size="icon"><Trash2 size={18} /></Button>
          <Button variant="ghost" size="icon"><RefreshCw size={18} /></Button>
          <Button variant="destructive" size="icon"><Trash2 size={18} /></Button>
          <Button variant="dark" size="icon"><ArrowRight size={18} /></Button>
        </div>
      </DocCard>

      <DocCard title="Estados">
        <div className="flex flex-wrap gap-4">
          <Button variant="default" disabled>Disabled</Button>
          <Button variant="default" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}>
            {loading ? <><Loader2 size={16} className="animate-spin" /> A processar...</> : 'Clicar para Loading'}
          </Button>
          <Button variant="outline" disabled>Outline Disabled</Button>
        </div>
      </DocCard>

      <DocCard title="Grupos de Botões">
        <div className="space-y-4">
          <div className="inline-flex rounded-2xl border border-border overflow-hidden">
            <button className="px-5 py-3 text-xs font-display font-bold uppercase tracking-widest bg-primary text-primary-foreground">Dia</button>
            <button className="px-5 py-3 text-xs font-display font-bold uppercase tracking-widest bg-card text-muted-foreground hover:bg-accent border-l border-border">Semana</button>
            <button className="px-5 py-3 text-xs font-display font-bold uppercase tracking-widest bg-card text-muted-foreground hover:bg-accent border-l border-border">Mês</button>
          </div>
        </div>
      </DocCard>
    </div>
  );
};

export default UIButtonsView;
