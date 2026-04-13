import React, { useState } from 'react';
import { SectionHeader, StatBlock } from '../EvyraShared';
import { CheckCircle, Calendar, Euro, MessageSquare, Eye, TrendingUp, Plus, MoreVertical, MapPin, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const demandas = [
  {
    id: 1,
    titulo: 'Enfermeira para período noturno',
    local: 'Lisboa',
    descricao: 'Enfermeira ou enfermeiro para período noturno, para acamado, senho 89 anos com dificuldade em loco...',
    vistas: 2,
    propostas: 1,
    conversao: '50.0%',
    investido: '€0.00',
    status: 'ativa',
  },
  {
    id: 2,
    titulo: 'Cuidador de criança',
    local: 'Porto',
    descricao: 'Dar remédios, companhia, almoço e banho, precisa também levar ao banheiro e levar para tomar sol du...',
    vistas: 0,
    propostas: 0,
    conversao: '0.0%',
    investido: '€0.00',
    status: 'ativa',
  },
  {
    id: 3,
    titulo: 'Cuidador de Idoso Lisboa',
    local: 'Lisboa',
    descricao: 'Cuidador com experiência em idosos, para dar remédios, três vezes ao dia, almoço e banho às 18:00h...',
    vistas: 2,
    propostas: 0,
    conversao: '0.0%',
    investido: '€0.00',
    status: 'ativa',
  },
];

type TabType = 'ativas' | 'fechadas' | 'pausadas';

export const DemandasView = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ativas');
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const ativas = demandas.filter(d => d.status === 'ativa');
  const fechadas = demandas.filter(d => d.status === 'fechada');
  const pausadas = demandas.filter(d => d.status === 'pausada');

  const currentList = activeTab === 'ativas' ? ativas : activeTab === 'fechadas' ? fechadas : pausadas;

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: 'ativas', label: 'Ativas', count: ativas.length },
    { id: 'fechadas', label: 'Fechadas', count: fechadas.length },
    { id: 'pausadas', label: 'Pausadas', count: pausadas.length },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <SectionHeader title="Suas Demandas" desc="Gerencie e acompanhe todas as suas demandas de serviços de cuidados" />
        <Button onClick={() => toast.success('Formulário de nova demanda aberto!')} className="shrink-0">
          <Plus size={16} /> Criar Demanda
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <StatBlock label="Ativas" value="3" icon={CheckCircle} colorClass="text-success" />
        <StatBlock label="Fechadas" value="0" icon={Calendar} />
        <StatBlock label="Gasto" value="€0" icon={Euro} colorClass="text-warning" />
        <StatBlock label="Propostas" value="0.3" icon={MessageSquare} colorClass="text-info" />
        <StatBlock label="Vistas" value="1.3" icon={Eye} />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-display font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === tab.id
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {currentList.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-card rounded-3xl border border-border shadow-card hover:shadow-elevated transition-all p-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-display font-black text-foreground tracking-tight">{d.titulo}</h3>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <MapPin size={14} />
                <span>{d.local}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.descricao}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-border my-4">
              <div className="text-center">
                <Eye size={16} className="mx-auto text-muted-foreground mb-1" />
                <div className="text-lg font-display font-black text-foreground">{d.vistas}</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Vistas</div>
              </div>
              <div className="text-center">
                <MessageSquare size={16} className="mx-auto text-muted-foreground mb-1" />
                <div className="text-lg font-display font-black text-foreground">{d.propostas}</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Propostas</div>
              </div>
              <div className="text-center">
                <TrendingUp size={16} className="mx-auto text-primary mb-1" />
                <div className="text-lg font-display font-black text-foreground">{d.conversao}</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Conv.</div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Investido: <span className="font-bold text-foreground">{d.investido}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => toast.info('Boost ativado para esta demanda!')}>
                  <Euro size={14} /> Boost
                </Button>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setOpenMenu(openMenu === d.id ? null : d.id)}
                  >
                    <MoreVertical size={16} />
                  </Button>
                  {openMenu === d.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-0 bottom-full mb-2 bg-card border border-border rounded-2xl shadow-elevated p-2 min-w-[160px] z-10"
                    >
                      <button
                        onClick={() => { toast.info('Demanda pausada'); setOpenMenu(null); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-accent rounded-xl transition-colors"
                      >
                        <Pause size={14} /> Pausar
                      </button>
                      <button
                        onClick={() => { toast.info('Demanda fechada'); setOpenMenu(null); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-xl transition-colors"
                      >
                        <Calendar size={14} /> Fechar
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {currentList.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="font-display font-bold text-lg">Nenhuma demanda {activeTab}</p>
          <p className="text-sm mt-1">As demandas aparecerão aqui quando existirem.</p>
        </div>
      )}
    </div>
  );
};
