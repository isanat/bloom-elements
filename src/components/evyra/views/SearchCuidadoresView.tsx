import React, { useState } from 'react';
import { SectionHeader } from '../EvyraShared';
import { Search, Filter, MapPin, Clock, Star, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const cuidadores = [
  {
    id: 1,
    nome: 'Adriano Moreira da Silva',
    iniciais: 'AMdS',
    profissao: 'Enfermeiro',
    rating: 0.0,
    avaliacoes: 0,
    local: 'Lisboa',
    experiencia: '10a',
    tarifa: '€28.00',
    contratos: 0,
    online: true,
  },
  {
    id: 2,
    nome: 'Maria Fernanda Costa',
    iniciais: 'MFC',
    profissao: 'Cuidadora de Idosos',
    rating: 4.8,
    avaliacoes: 12,
    local: 'Porto',
    experiencia: '5a',
    tarifa: '€22.00',
    contratos: 8,
    online: false,
  },
  {
    id: 3,
    nome: 'João Pedro Santos',
    iniciais: 'JPS',
    profissao: 'Auxiliar de Saúde',
    rating: 4.5,
    avaliacoes: 6,
    local: 'Coimbra',
    experiencia: '3a',
    tarifa: '€18.00',
    contratos: 3,
    online: true,
  },
  {
    id: 4,
    nome: 'Ana Beatriz Lima',
    iniciais: 'ABL',
    profissao: 'Fisioterapeuta',
    rating: 4.9,
    avaliacoes: 21,
    local: 'Lisboa',
    experiencia: '8a',
    tarifa: '€35.00',
    contratos: 15,
    online: false,
  },
];

export const SearchCuidadoresView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  const filtered = cuidadores.filter(c =>
    c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.profissao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.local.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <SectionHeader title="Procurar Cuidadores" desc="Encontre profissionais qualificados na sua área" />

      {/* Search bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Nome, serviço ou cidade..."
            className="w-full bg-card border border-border rounded-2xl pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-[50px] w-[50px] shrink-0"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
        </Button>
      </div>

      {/* Filter panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-card border border-border rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2 block">Localização</label>
                <select className="w-full bg-background border border-border rounded-xl px-3 py-2 text-sm text-foreground">
                  <option>Todas</option>
                  <option>Lisboa</option>
                  <option>Porto</option>
                  <option>Coimbra</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2 block">Experiência</label>
                <select className="w-full bg-background border border-border rounded-xl px-3 py-2 text-sm text-foreground">
                  <option>Qualquer</option>
                  <option>1-3 anos</option>
                  <option>3-5 anos</option>
                  <option>5+ anos</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2 block">Tarifa Max</label>
                <input type="number" placeholder="€50" className="w-full bg-background border border-border rounded-xl px-3 py-2 text-sm text-foreground" />
              </div>
              <div>
                <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2 block">Avaliação</label>
                <select className="w-full bg-background border border-border rounded-xl px-3 py-2 text-sm text-foreground">
                  <option>Qualquer</option>
                  <option>4+ ★</option>
                  <option>4.5+ ★</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-sm text-muted-foreground">{filtered.length} cuidadores encontrados</p>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-card rounded-3xl border border-border shadow-card hover:shadow-elevated transition-all p-6 cursor-pointer group"
            onClick={() => setSelectedProfile(selectedProfile === c.id ? null : c.id)}
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-sm font-display font-black text-foreground shrink-0">
                {c.iniciais}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-foreground tracking-tight truncate">{c.nome}</h3>
                  {c.online && <div className="w-2.5 h-2.5 bg-success rounded-full shrink-0" />}
                </div>
                <p className="text-sm text-muted-foreground">{c.profissao}</p>

                <div className="flex items-center gap-1 mt-1.5">
                  <Star size={14} className="text-warning fill-warning" />
                  <span className="text-sm font-bold text-warning">{c.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">({c.avaliacoes} avaliações)</span>
                </div>

                <div className="flex items-center gap-6 mt-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span className="font-medium text-foreground">{c.local}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span className="font-medium text-foreground">{c.experiencia}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-xs text-muted-foreground">Tarifa Horária</span>
                    <div className="text-xl font-display font-black text-foreground">{c.tarifa}</div>
                  </div>
                  <span className="text-sm text-muted-foreground">{c.contratos} contratos</span>
                </div>
              </div>
            </div>

            {/* Expanded actions */}
            <AnimatePresence>
              {selectedProfile === c.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                    <Button size="sm" className="flex-1" onClick={e => { e.stopPropagation(); toast.success(`Proposta enviada para ${c.nome}!`); }}>
                      <FileText size={14} /> Enviar Proposta
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" onClick={e => { e.stopPropagation(); toast.info(`Ver perfil completo de ${c.nome}`); }}>
                      Ver Perfil <ChevronRight size={14} />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
