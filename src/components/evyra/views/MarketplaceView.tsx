import React, { useState } from 'react';
import { Star, MapPin, ShieldCheck, Filter, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/evyra/EvyraShared';
import { ProfileModal } from '@/components/evyra/ProfileModal';

const talents = [
  { name: 'Helena Santos', role: 'Enfermagem', price: '18,50', rating: '5.0', bio: 'Especialista em cuidados intensivos e apoio pós-operatório com mais de 8 anos de experiência.', skills: ['Drenagem', 'Curativos', 'Diabetes'], location: 'Porto, PT', experience: '8 anos' },
  { name: 'Ricardo Almeida', role: 'Fisioterapia', price: '22,00', rating: '4.8', bio: 'Fisioterapeuta desportivo com experiência em reabilitação motora e pós-cirúrgica.', skills: ['Reabilitação', 'Massagem', 'Pilates'], location: 'Lisboa, PT', experience: '6 anos' },
  { name: 'Mariana Costa', role: 'Apoio Domiciliário', price: '16,75', rating: '4.9', bio: 'Auxiliar certificada em apoio domiciliário com formação em geriatria.', skills: ['Higiene', 'Alimentação', 'Mobilidade'], location: 'Cascais, PT', experience: '5 anos' },
  { name: 'João Pedro', role: 'Geriatria', price: '20,00', rating: '4.7', bio: 'Especialista em cuidados geriátricos com enfoque em Alzheimer e demência.', skills: ['Geriatria', 'Demência', 'Medicação'], location: 'Braga, PT', experience: '10 anos' },
  { name: 'Ana Ferreira', role: 'Pediatria', price: '19,25', rating: '5.0', bio: 'Enfermeira pediátrica com experiência hospitalar e apoio neonatal.', skills: ['Neonatal', 'Vacinação', 'Pediatria'], location: 'Faro, PT', experience: '7 anos' },
  { name: 'Carlos Mendes', role: 'Pós-Operatório', price: '24,50', rating: '4.9', bio: 'Enfermeiro especializado em recuperação pós-cirúrgica e gestão de dor.', skills: ['Curativos', 'Dor Crónica', 'Mobilidade'], location: 'Coimbra, PT', experience: '12 anos' },
];

const TalentCard = ({ index, talent, onViewProfile }: { index: number; talent: typeof talents[0]; onViewProfile: () => void }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 cursor-pointer group flex flex-col h-full">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div className="relative shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary overflow-hidden border-2 border-card shadow-md group-hover:scale-105 transition-transform duration-500">
            <img src={`https://i.pravatar.cc/150?u=care${index}`} alt={talent.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground p-1 rounded-lg border-2 border-card">
            <ShieldCheck size={12} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-display font-black text-foreground group-hover:text-primary transition-colors truncate uppercase">{talent.name}</h4>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="flex items-center gap-1 text-xs font-bold text-warning"><Star size={14} className="fill-current" /> {talent.rating}</span>
            <span className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest bg-secondary px-2 py-0.5 rounded-lg truncate">{talent.role}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-4 sm:mb-5">
        <p className="text-xs text-muted-foreground font-medium leading-relaxed line-clamp-2">{talent.bio}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {talent.skills.map(skill => (
            <span key={skill} className="text-[9px] font-display font-bold text-muted-foreground border border-border px-2 py-0.5 rounded-lg uppercase tracking-widest">{skill}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-border mt-auto">
        <div>
          <p className="text-[9px] font-display font-bold text-muted-foreground/60 uppercase tracking-widest">Preço Base</p>
          <div className="text-lg sm:text-xl font-display font-black text-foreground tracking-tighter">
            {talent.price}€<span className="text-[10px] text-muted-foreground font-medium ml-1">/h</span>
          </div>
        </div>
        <Button variant="dark" size="sm" onClick={(e) => { e.stopPropagation(); onViewProfile(); }}>
          Ver Perfil
        </Button>
      </div>
    </div>
  );
};

export const MarketplaceView = ({ onAction }: { onAction: (type: string) => void }) => {
  const categories = ['Todos', 'Enfermagem', 'Fisioterapia', 'Apoio Domiciliário', 'Pós-Operatório', 'Pediatria', 'Geriatria'];
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTalents = talents.filter(t => {
    const matchesCategory = activeCategory === 0 || t.role === categories[activeCategory];
    const matchesSearch = !searchQuery || t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <SectionHeader title="Explorar Profissionais" desc="Encontre os melhores cuidadores verificados para o seu projeto." />
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Mobile search */}
          <div className="relative flex-1 md:hidden">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
              placeholder="Pesquisar talentos..."
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="default"><Filter size={16} /> Filtros</Button>
            <Button variant="default" size="default" onClick={() => onAction('form')}><Plus size={16} /> <span className="hidden sm:inline">Publicar</span> Vaga</Button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(idx)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-[10px] font-display font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
              activeCategory === idx
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredTalents.map((talent, i) => (
          <TalentCard key={i} index={i + 1} talent={talent} onViewProfile={() => setSelectedProfile(i)} />
        ))}
      </div>

      {filteredTalents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg font-display font-bold text-muted-foreground">Nenhum profissional encontrado</p>
          <p className="text-sm text-muted-foreground mt-2">Tente ajustar os filtros ou a pesquisa.</p>
          <Button variant="outline" size="sm" className="mt-4" onClick={() => { setActiveCategory(0); setSearchQuery(''); }}>Limpar Filtros</Button>
        </div>
      )}

      {selectedProfile !== null && (
        <ProfileModal
          open={true}
          onClose={() => setSelectedProfile(null)}
          profile={{
            ...filteredTalents[selectedProfile],
            avatarId: selectedProfile + 1,
          }}
        />
      )}
    </div>
  );
};

export default MarketplaceView;
