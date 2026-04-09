import React from 'react';
import { Star, MapPin, ShieldCheck, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/evyra/EvyraShared';

const TalentCard = ({ index, onAction }: { index: number; onAction: (type: string) => void }) => {
  const names = ['Helena Santos', 'Ricardo Almeida', 'Mariana Costa', 'João Pedro', 'Ana Ferreira', 'Carlos Mendes'];
  const roles = ['Enfermagem', 'Fisioterapia', 'Apoio Domiciliário', 'Geriatria', 'Pediatria', 'Pós-Operatório'];
  const prices = ['18,50', '22,00', '16,75', '20,00', '19,25', '24,50'];

  return (
    <div className="bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group animate-slide-up flex flex-col h-full">
      <div className="flex items-center gap-4 mb-5">
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-secondary overflow-hidden border-2 border-card shadow-md group-hover:scale-105 transition-transform duration-500">
            <img src={`https://i.pravatar.cc/150?u=care${index}`} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground p-1 rounded-lg border-2 border-card">
            <ShieldCheck size={12} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-display font-black text-foreground group-hover:text-primary transition-colors truncate uppercase">{names[index - 1] || 'Helena Santos'}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex items-center gap-1 text-xs font-bold text-warning"><Star size={14} className="fill-current" /> 5.0</span>
            <span className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest bg-secondary px-2 py-0.5 rounded-lg truncate">{roles[index - 1] || 'Enfermagem'}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-5">
        <p className="text-xs text-muted-foreground font-medium leading-relaxed line-clamp-2">
          Especialista com mais de 8 anos de experiência em contexto hospitalar e domiciliário.
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {['Drenagem', 'Curativos', 'Diabetes'].map(skill => (
            <span key={skill} className="text-[9px] font-display font-bold text-muted-foreground border border-border px-2 py-0.5 rounded-lg uppercase tracking-widest">{skill}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
        <div>
          <p className="text-[9px] font-display font-bold text-muted-foreground/60 uppercase tracking-widest">Preço Base</p>
          <div className="text-xl font-display font-black text-foreground tracking-tighter">
            {prices[index - 1] || '18,50'}€<span className="text-[10px] text-muted-foreground font-medium ml-1">/h</span>
          </div>
        </div>
        <Button variant="dark" size="sm" onClick={(e) => { e.stopPropagation(); onAction('hire'); }}>
          Ver Perfil
        </Button>
      </div>
    </div>
  );
};

export const MarketplaceView = ({ onAction }: { onAction: (type: string) => void }) => {
  const categories = ['Enfermagem', 'Fisioterapia', 'Apoio Domiciliário', 'Pós-Operatório', 'Pediatria', 'Geriatria'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <SectionHeader title="Explorar Profissionais" desc="Encontre os melhores cuidadores verificados para o seu projeto." />
        <div className="flex gap-3">
          <Button variant="outline" size="default"><Filter size={16} /> Filtros</Button>
          <Button variant="default" size="default"><Plus size={16} /> Publicar Vaga</Button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`px-5 py-2.5 rounded-2xl text-[10px] font-display font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
              idx === 0
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <TalentCard key={i} index={i} onAction={onAction} />
        ))}
      </div>
    </div>
  );
};

export default MarketplaceView;
