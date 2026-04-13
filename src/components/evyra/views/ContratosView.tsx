import React, { useState } from 'react';
import { SectionHeader } from '../EvyraShared';
import { FileText, User, Clock, Calendar, ArrowLeft, MessageSquare, Check, Circle, X, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

type ContratoStatus = 'rascunho' | 'pendente' | 'activo' | 'concluido';

interface Contrato {
  id: string;
  titulo: string;
  cuidador: string;
  profissao: string;
  localizacao: string;
  criadoEm: string;
  duracao: string;
  valorHora: number;
  horasMensais: number;
  detalhes: string;
  horario: string;
  status: ContratoStatus;
  aceiteFamilia: boolean;
  aceiteCuidador: boolean;
}

const contratos: Contrato[] = [
  {
    id: 'cb7fb947',
    titulo: 'Contrato - Entrevista fe8f08cb-40a7-474b-80cb-c7fb78e8ad31',
    cuidador: 'Adriano Moreira da Silva',
    profissao: 'Enfermeiro',
    localizacao: 'Lisboa',
    criadoEm: '06/04/2026',
    duracao: '0h/semana',
    valorHora: 0,
    horasMensais: 0,
    detalhes: 'Contrato criado automaticamente após entrevista.',
    horario: '',
    status: 'pendente',
    aceiteFamilia: false,
    aceiteCuidador: false,
  },
  {
    id: 'a1b2c3d4',
    titulo: 'Contrato - Cuidados Domiciliários',
    cuidador: 'Maria Fernanda Costa',
    profissao: 'Auxiliar de Saúde',
    localizacao: 'Porto',
    criadoEm: '01/04/2026',
    duracao: '20h/semana',
    valorHora: 12,
    horasMensais: 80,
    detalhes: 'Cuidados ao domicílio para paciente sénior.',
    horario: 'Seg-Sex 9h-13h',
    status: 'activo',
    aceiteFamilia: true,
    aceiteCuidador: true,
  },
];

const statusConfig: Record<ContratoStatus, { label: string; color: string }> = {
  rascunho: { label: 'Rascunho', color: 'text-muted-foreground' },
  pendente: { label: 'Pendente', color: 'text-warning' },
  activo: { label: 'Activo', color: 'text-success' },
  concluido: { label: 'Concluído', color: 'text-info' },
};

const tabs: { key: ContratoStatus | 'todos'; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'activo', label: 'Activos' },
  { key: 'pendente', label: 'Pendentes' },
  { key: 'concluido', label: 'Concluídos' },
];

export const ContratosView = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ContratoStatus | 'todos'>('todos');

  const filtered = activeTab === 'todos' ? contratos : contratos.filter(c => c.status === activeTab);
  const selected = contratos.find(c => c.id === selectedId);

  const counts: Record<string, number> = {
    todos: contratos.length,
    activo: contratos.filter(c => c.status === 'activo').length,
    pendente: contratos.filter(c => c.status === 'pendente').length,
    concluido: contratos.filter(c => c.status === 'concluido').length,
  };

  if (selected) {
    const sc = statusConfig[selected.status];
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        {/* Back + Status */}
        <div className="flex items-center justify-between">
          <button onClick={() => setSelectedId(null)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-display font-bold">
            <ArrowLeft size={16} /> VOLTAR
          </button>
          <span className={`text-xs font-display font-black uppercase tracking-widest ${sc.color}`}>{sc.label}</span>
        </div>

        {/* Header Card */}
        <div className="bg-card rounded-3xl border border-border shadow-card p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
              <FileText size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-display font-bold">Contrato #{selected.id}</p>
              <h2 className="text-lg font-display font-black text-foreground tracking-tight uppercase">{selected.titulo}</h2>
              <p className="text-sm text-muted-foreground">Criado em {selected.criadoEm}</p>
            </div>
          </div>
        </div>

        {/* Cuidador */}
        <div className="bg-card rounded-3xl border border-border shadow-card p-6">
          <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-4">Cuidador(a)</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-sm font-display font-black text-primary">
                {selected.cuidador.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div className="font-display font-black text-foreground text-sm">{selected.cuidador}</div>
                <div className="text-xs text-muted-foreground">{selected.profissao}</div>
                <div className="text-xs text-muted-foreground">{selected.localizacao}</div>
              </div>
            </div>
            <Button variant="outline" size="icon" className="rounded-xl" onClick={() => toast.info('Abrir chat...')}>
              <MessageSquare size={16} />
            </Button>
          </div>
        </div>

        {/* Detalhes + Horário + Valores */}
        <div className="bg-card rounded-3xl border border-border shadow-card p-6 space-y-5">
          <div>
            <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2">Detalhes do Cuidado</div>
            <p className="text-sm text-muted-foreground">{selected.detalhes}</p>
          </div>
          <div className="border-t border-border pt-4">
            <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2">Horário</div>
            <p className="text-sm text-muted-foreground">{selected.horario || '—'}</p>
          </div>
          <div className="border-t border-border pt-4">
            <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-3">Valores</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Valor por hora</span>
              <span className="font-display font-black text-foreground">€{selected.valorHora}/h</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-muted-foreground">Total mensal ({selected.horasMensais}h)</span>
              <span className="font-display font-black text-foreground">€{selected.valorHora * selected.horasMensais}</span>
            </div>
          </div>
        </div>

        {/* Status de Aceite */}
        <div className="bg-card rounded-3xl border border-border shadow-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Circle size={16} className="text-muted-foreground" />
            <span className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Status de Aceite</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Família</span>
              <span className={`text-xs font-display font-black uppercase tracking-widest ${selected.aceiteFamilia ? 'text-success' : 'text-warning'}`}>
                {selected.aceiteFamilia ? 'Aceite' : 'Pendente'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Cuidador(a)</span>
              <span className={`text-xs font-display font-black uppercase tracking-widest ${selected.aceiteCuidador ? 'text-success' : 'text-warning'}`}>
                {selected.aceiteCuidador ? 'Aceite' : 'Pendente'}
              </span>
            </div>
          </div>
        </div>

        {/* Revisar & Aceitar */}
        {selected.status === 'pendente' && (
          <div className="bg-card rounded-3xl border border-border shadow-card p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                <FileText size={18} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-display font-black text-foreground text-base uppercase tracking-tight">Revisar & Aceitar Contrato</h3>
                <p className="text-sm text-muted-foreground mt-1">Certifique-se de que todos os detalhes estão corretos antes de confirmar. Seu aceite será registrado digitalmente com data, hora e IP.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Valor/Hora</div>
                <div className="font-display font-black text-foreground text-lg">€{selected.valorHora}/h</div>
              </div>
              <div>
                <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Total Mensal</div>
                <div className="font-display font-black text-foreground text-lg">€{selected.valorHora * selected.horasMensais}</div>
              </div>
              <div>
                <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Você Recebe</div>
                <div className="font-display font-black text-success text-lg">€{Math.round(selected.valorHora * selected.horasMensais * 0.9)}</div>
              </div>
              <div>
                <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Taxa Plataforma</div>
                <div className="font-display font-black text-foreground text-lg">€{Math.round(selected.valorHora * selected.horasMensais * 0.1)}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" onClick={() => { toast.success('Contrato aceite com sucesso!'); setSelectedId(null); }}>
                <Check size={16} /> Aceitar Contrato
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => toast.info('Abrir chat com cuidador...')}>
                <MessageSquare size={16} /> Fazer Pergunta
              </Button>
            </div>

            <button
              onClick={() => { toast('Contrato adiado.'); setSelectedId(null); }}
              className="w-full text-center mt-4 text-xs font-display font-black text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
            >
              Não Aceitar Agora
            </button>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <SectionHeader title="Meus Contratos" desc="Gerencie os contratos com os seus cuidadores." />

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 text-center py-3 text-sm font-display font-bold transition-all border-b-2 ${
              activeTab === tab.key
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label} ({counts[tab.key]})
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <FileText size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-display font-bold">Nenhum contrato encontrado</p>
          </div>
        )}
        {filtered.map((c, i) => {
          const sc = statusConfig[c.status];
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-3xl border border-border shadow-card p-6 hover:shadow-elevated transition-all cursor-pointer"
              onClick={() => setSelectedId(c.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-black text-foreground tracking-tight text-sm uppercase pr-4">{c.titulo}</h3>
                <span className={`text-[10px] font-display font-black uppercase tracking-widest whitespace-nowrap ${sc.color}`}>{sc.label}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4 uppercase">{c.detalhes}</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User size={14} /> {c.cuidador}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} /> {c.duracao}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} /> {c.criadoEm}
                </div>
                <div className="ml-auto font-display font-black text-primary text-lg">
                  € {c.valorHora}<span className="text-sm text-muted-foreground font-normal">/h</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
