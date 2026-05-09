import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, Users, Calendar, Pill, AlertTriangle, CreditCard, FileText, Star,
  Search, Briefcase, Phone, MapPin, Clock, ChevronRight, Plus, Filter,
  Activity, TrendingUp, ShieldCheck, Stethoscope, Utensils, Dumbbell,
  Bell, CheckCircle2, XCircle, Sparkles, MessageSquare, Trash2, Edit3,
  Download, Eye, AlertCircle
} from 'lucide-react';
import { SectionHeader, StatBlock, DocCard } from '@/components/evyra/EvyraShared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

// ─── Animation helpers ──────────────────────────────────────
const fadeUp = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } };
const stagger = (i: number) => ({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: i * 0.05 } });

// ═══════════════════════════════════════════════════════════
// 1. DASHBOARD DA FAMÍLIA
// ═══════════════════════════════════════════════════════════
export const FamilyDashboardView = () => (
  <div className="space-y-8 sm:space-y-10">
    <SectionHeader title="Dashboard Família" desc="Visão geral do cuidado da Sra. Maria — atualizado há 5 minutos." />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
      <StatBlock label="Cuidadora Ativa" value="Ana S." icon={Heart} colorClass="text-primary" />
      <StatBlock label="Próxima Visita" value="Hoje 14h" icon={Calendar} colorClass="text-success" />
      <StatBlock label="Gasto Mensal" value="1.840€" icon={TrendingUp} colorClass="text-foreground" />
      <StatBlock label="Avaliação Cuidado" value="4.9★" icon={Star} colorClass="text-warning" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <DocCard title="Atividade Recente do Cuidado">
          <div className="space-y-3">
            {[
              { time: '08:30', icon: Pill, text: 'Medicação matinal administrada (Sintrom)', color: 'text-success' },
              { time: '10:15', icon: Utensils, text: 'Pequeno-almoço completo — 100%', color: 'text-success' },
              { time: '11:00', icon: Dumbbell, text: 'Exercícios de mobilidade (30 min)', color: 'text-primary' },
              { time: '12:45', icon: AlertCircle, text: 'Tensão arterial: 138/85 — ligeiramente elevada', color: 'text-warning' },
            ].map((a, i) => (
              <motion.div key={i} {...stagger(i)} className="flex items-center gap-4 p-4 bg-secondary rounded-2xl border border-border/50">
                <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest w-12">{a.time}</div>
                <div className={cn("w-10 h-10 bg-card rounded-xl flex items-center justify-center border border-border", a.color)}>
                  <a.icon size={18} />
                </div>
                <p className="text-sm font-medium text-foreground flex-1">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </DocCard>
      </div>

      <DocCard title="Ações Rápidas">
        <div className="space-y-3">
          <Button variant="default" size="lg" className="w-full justify-start" onClick={() => toast.success('A abrir chat...')}>
            <MessageSquare size={18} /> Falar com Cuidadora
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start" onClick={() => toast.info('Ligação SOS')}>
            <Phone size={18} /> Emergência
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start" onClick={() => toast.info('A abrir relatório')}>
            <FileText size={18} /> Relatório Diário
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start" onClick={() => toast.info('A procurar')}>
            <Search size={18} /> Procurar Substituto
          </Button>
        </div>
      </DocCard>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════
// 2. GESTÃO DO FAMILIAR CUIDADO
// ═══════════════════════════════════════════════════════════
type InfoData = {
  nomeCompleto: string;
  dataNascimento: string;
  morada: string;
  contactoProximo: string;
  medicoFamilia: string;
  seguro: string;
};
type Condicao = { c: string; d: string };
type RotinaItem = { h: string; a: string };

const initialInfo: InfoData = {
  nomeCompleto: 'Maria Fernanda Silva',
  dataNascimento: '14 / 03 / 1947',
  morada: 'Av. Marginal 234, Cascais',
  contactoProximo: 'João Silva (filho) · 912 345 678',
  medicoFamilia: 'Dr. Pedro Almeida',
  seguro: 'Médis · Plano Sénior+',
};
const initialSaude: Condicao[] = [
  { c: 'Diabetes Tipo 2', d: 'Diagnóstico em 2015 · Controlada' },
  { c: 'Hipertensão Arterial', d: 'Em medicação contínua' },
  { c: 'Artrose nos joelhos', d: 'Mobilidade reduzida com bengala' },
];
const initialRotina: RotinaItem[] = [
  { h: '07:00', a: 'Acorda · medicação matinal' },
  { h: '08:00', a: 'Pequeno-almoço · café com leite e torrada' },
  { h: '10:30', a: 'Caminhada assistida no jardim' },
  { h: '13:00', a: 'Almoço (dieta diabética)' },
  { h: '15:00', a: 'Sesta' },
  { h: '19:00', a: 'Jantar leve · medicação noturna' },
];

const InfoLabels: Array<[keyof InfoData, string]> = [
  ['nomeCompleto', 'Nome Completo'],
  ['dataNascimento', 'Data de Nascimento'],
  ['morada', 'Morada'],
  ['contactoProximo', 'Contacto Próximo'],
  ['medicoFamilia', 'Médico de Família'],
  ['seguro', 'Seguro'],
];

export const FamilyMemberView = () => {
  const [tab, setTab] = useState<'info' | 'saude' | 'rotina'>('info');
  const [editing, setEditing] = useState(false);

  // committed state
  const [info, setInfo] = useState<InfoData>(initialInfo);
  const [saude, setSaude] = useState<Condicao[]>(initialSaude);
  const [rotina, setRotina] = useState<RotinaItem[]>(initialRotina);

  // draft state (used while editing)
  const [draftInfo, setDraftInfo] = useState<InfoData>(info);
  const [draftSaude, setDraftSaude] = useState<Condicao[]>(saude);
  const [draftRotina, setDraftRotina] = useState<RotinaItem[]>(rotina);

  const startEdit = () => {
    setDraftInfo(info);
    setDraftSaude(saude);
    setDraftRotina(rotina);
    setEditing(true);
  };
  const cancelEdit = () => {
    setEditing(false);
    toast.info('Edição cancelada');
  };
  const saveEdit = () => {
    if (!draftInfo.nomeCompleto.trim()) {
      toast.error('Nome completo é obrigatório');
      return;
    }
    setInfo(draftInfo);
    setSaude(draftSaude.filter(s => s.c.trim()));
    setRotina(draftRotina.filter(r => r.h.trim() && r.a.trim()));
    setEditing(false);
    toast.success('Alterações guardadas com sucesso');
  };

  const updateInfo = (k: keyof InfoData, v: string) => setDraftInfo(p => ({ ...p, [k]: v }));
  const addCondicao = () => setDraftSaude(p => [...p, { c: '', d: '' }]);
  const updateCondicao = (i: number, k: keyof Condicao, v: string) =>
    setDraftSaude(p => p.map((it, idx) => idx === i ? { ...it, [k]: v } : it));
  const removeCondicao = (i: number) => setDraftSaude(p => p.filter((_, idx) => idx !== i));

  const addRotina = () => setDraftRotina(p => [...p, { h: '', a: '' }]);
  const updateRotina = (i: number, k: keyof RotinaItem, v: string) =>
    setDraftRotina(p => p.map((it, idx) => idx === i ? { ...it, [k]: v } : it));
  const removeRotina = (i: number) => setDraftRotina(p => p.filter((_, idx) => idx !== i));

  const initials = info.nomeCompleto
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(s => s[0]?.toUpperCase())
    .join('') || 'MF';

  return (
    <div className="space-y-8">
      <SectionHeader title="Familiar Cuidado" desc={`Perfil completo de ${info.nomeCompleto}.`} />

      <motion.div {...fadeUp} className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-end gap-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-display font-black shadow-glow shrink-0">{initials}</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter">{info.nomeCompleto}</h3>
            <p className="text-sm text-muted-foreground font-medium mt-1">78 anos · Cascais · Mobilidade reduzida</p>
            <div className="flex gap-2 mt-3 justify-center sm:justify-start flex-wrap">
              {(editing ? draftSaude : saude).filter(s => s.c.trim()).slice(0, 4).map((s, i) => (
                <Badge key={i} variant="secondary">{s.c}</Badge>
              ))}
            </div>
          </div>
          {editing ? (
            <div className="flex gap-2">
              <Button variant="outline" onClick={cancelEdit}><XCircle size={16} /> Cancelar</Button>
              <Button variant="default" onClick={saveEdit}><CheckCircle2 size={16} /> Guardar</Button>
            </div>
          ) : (
            <Button variant="outline" onClick={startEdit}><Edit3 size={16} /> Editar</Button>
          )}
        </div>

        <div className="border-b border-border px-6 flex gap-1 overflow-x-auto">
          {(['info', 'saude', 'rotina'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={cn("px-4 py-3 text-xs font-display font-bold uppercase tracking-widest border-b-2 transition-colors",
                tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground")}>
              {t === 'info' ? 'Informação' : t === 'saude' ? 'Saúde' : 'Rotina'}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-8">
          {tab === 'info' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {InfoLabels.map(([key, label]) => (
                <div key={key} className="p-4 bg-secondary rounded-2xl">
                  <label className="text-[9px] font-display font-black text-muted-foreground uppercase tracking-widest block">{label}</label>
                  {editing ? (
                    <Input
                      value={draftInfo[key]}
                      onChange={(e) => updateInfo(key, e.target.value)}
                      maxLength={150}
                      className="mt-2 bg-card"
                    />
                  ) : (
                    <p className="text-sm font-medium text-foreground mt-1">{info[key]}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === 'saude' && (
            <div className="space-y-3">
              {(editing ? draftSaude : saude).map((c, i) => (
                <div key={i} className="p-4 bg-secondary rounded-2xl flex items-center gap-4">
                  <Stethoscope className="text-primary shrink-0" size={20} />
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {editing ? (
                      <>
                        <Input
                          value={c.c}
                          placeholder="Condição"
                          onChange={(e) => updateCondicao(i, 'c', e.target.value)}
                          maxLength={100}
                          className="bg-card"
                        />
                        <Input
                          value={c.d}
                          placeholder="Detalhes"
                          onChange={(e) => updateCondicao(i, 'd', e.target.value)}
                          maxLength={200}
                          className="bg-card"
                        />
                      </>
                    ) : (
                      <>
                        <p className="font-display font-bold text-foreground">{c.c}</p>
                        <p className="text-xs text-muted-foreground self-center">{c.d}</p>
                      </>
                    )}
                  </div>
                  {editing && (
                    <Button variant="ghost" size="icon-sm" onClick={() => removeCondicao(i)} aria-label="Remover">
                      <Trash2 size={16} className="text-destructive" />
                    </Button>
                  )}
                </div>
              ))}
              {editing && (
                <Button variant="outline" onClick={addCondicao} className="w-full">
                  <Plus size={16} /> Adicionar condição
                </Button>
              )}
            </div>
          )}

          {tab === 'rotina' && (
            <div className="space-y-3">
              {(editing ? draftRotina : rotina).map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-2xl">
                  <Clock size={16} className="text-primary shrink-0" />
                  {editing ? (
                    <>
                      <Input
                        value={r.h}
                        placeholder="07:00"
                        onChange={(e) => updateRotina(i, 'h', e.target.value)}
                        maxLength={5}
                        className="w-24 bg-card"
                      />
                      <Input
                        value={r.a}
                        placeholder="Atividade"
                        onChange={(e) => updateRotina(i, 'a', e.target.value)}
                        maxLength={150}
                        className="flex-1 bg-card"
                      />
                      <Button variant="ghost" size="icon-sm" onClick={() => removeRotina(i)} aria-label="Remover">
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-xs font-display font-black text-muted-foreground uppercase tracking-widest w-12">{r.h}</span>
                      <p className="text-sm font-medium text-foreground">{r.a}</p>
                    </>
                  )}
                </div>
              ))}
              {editing && (
                <Button variant="outline" onClick={addRotina} className="w-full">
                  <Plus size={16} /> Adicionar item de rotina
                </Button>
              )}
            </div>
          )}
        </div>

        {editing && (
          <div className="border-t border-border bg-secondary/40 px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:justify-end gap-2">
            <Button variant="outline" onClick={cancelEdit}><XCircle size={16} /> Cancelar</Button>
            <Button variant="default" onClick={saveEdit}><CheckCircle2 size={16} /> Guardar Alterações</Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// 3. PROCURAR CUIDADORES
// ═══════════════════════════════════════════════════════════
export const FamilySearchView = () => {
  const cuidadores = [
    { nome: 'Ana Sofia M.', loc: 'Cascais', rate: '12€/h', star: 4.9, esp: 'Geriatria', exp: '8 anos' },
    { nome: 'Carlos Mendes', loc: 'Lisboa', rate: '15€/h', star: 4.8, esp: 'Reabilitação', exp: '12 anos' },
    { nome: 'Beatriz Lopes', loc: 'Sintra', rate: '11€/h', star: 4.7, esp: 'Apoio Diário', exp: '5 anos' },
    { nome: 'Rui Tavares', loc: 'Oeiras', rate: '14€/h', star: 5.0, esp: 'Demência', exp: '10 anos' },
  ];
  return (
    <div className="space-y-8">
      <SectionHeader title="Procurar Cuidadores" desc="Encontra o profissional ideal para o teu familiar." />
      <DocCard title="Filtros de Pesquisa">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Input placeholder="Localização..." />
          <Input placeholder="Especialidade..." />
          <Input placeholder="Preço/hora máx..." />
          <Button variant="default"><Filter size={16} /> Filtrar</Button>
        </div>
      </DocCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cuidadores.map((c, i) => (
          <motion.div key={i} {...stagger(i)} className="bg-card p-6 rounded-3xl border border-border shadow-card hover:shadow-elevated transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display font-black shrink-0">
                {c.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-display font-black text-foreground">{c.nome}</h4>
                  <div className="flex items-center gap-1 text-warning"><Star size={14} fill="currentColor" /><span className="text-xs font-bold">{c.star}</span></div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><MapPin size={12} />{c.loc} · {c.exp}</p>
                <Badge variant="secondary" className="mt-2">{c.esp}</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
              <span className="text-lg font-display font-black text-primary">{c.rate}</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => toast.info(`Perfil de ${c.nome}`)}><Eye size={14} /></Button>
                <Button variant="default" size="sm" onClick={() => toast.success(`Contactando ${c.nome}`)}>Contactar</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// 4. MINHAS DEMANDAS (FAMÍLIA)
// ═══════════════════════════════════════════════════════════
export const FamilyDemandasView = () => {
  const demandas = [
    { titulo: 'Apoio Diário · Sra. Maria', status: 'Ativa', cand: 8, dias: '3 dias' },
    { titulo: 'Cuidador Noturno · Sr. António', status: 'Em revisão', cand: 3, dias: '1 dia' },
    { titulo: 'Acompanhamento Médico', status: 'Concluída', cand: 12, dias: '15 dias' },
  ];
  const colorMap = { 'Ativa': 'text-success bg-success/10', 'Em revisão': 'text-warning bg-warning/10', 'Concluída': 'text-muted-foreground bg-muted' };
  return (
    <div className="space-y-8">
      <SectionHeader title="Minhas Demandas" desc="Vagas publicadas pela tua família." />
      <div className="flex justify-end">
        <Button variant="default" onClick={() => toast.success('Nova demanda')}><Plus size={16} /> Publicar Demanda</Button>
      </div>
      <div className="space-y-3">
        {demandas.map((d, i) => (
          <motion.div key={i} {...stagger(i)} className="bg-card p-5 rounded-3xl border border-border shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center"><Briefcase size={20} /></div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-foreground">{d.titulo}</h4>
              <p className="text-xs text-muted-foreground mt-1">{d.cand} candidaturas · publicada há {d.dias}</p>
            </div>
            <span className={cn("px-3 py-1 rounded-xl text-[10px] font-display font-black uppercase tracking-widest", colorMap[d.status as keyof typeof colorMap])}>{d.status}</span>
            <Button variant="outline" size="sm"><ChevronRight size={16} /></Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// 5. AVALIAR CUIDADOR
// ═══════════════════════════════════════════════════════════
export const FamilyReviewView = () => {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <SectionHeader title="Avaliar Cuidadora" desc="Partilha a tua experiência com Ana Sofia M." />
      <DocCard title="Classificação Geral">
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map(s => (
            <button key={s} onClick={() => setStars(s)} className="p-1 transition-transform hover:scale-110">
              <Star size={40} className={cn(s <= stars ? "text-warning fill-warning" : "text-muted")} />
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {['Pontualidade', 'Atenção', 'Comunicação', 'Cuidado'].map(c => (
            <div key={c} className="p-3 bg-secondary rounded-xl flex items-center justify-between">
              <span className="text-xs font-display font-bold text-foreground">{c}</span>
              <div className="flex gap-0.5">{[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-warning fill-warning" />)}</div>
            </div>
          ))}
        </div>
        <textarea value={comment} onChange={e => setComment(e.target.value)}
          placeholder="Conta como foi a tua experiência..."
          className="w-full p-4 bg-secondary rounded-2xl border border-border text-sm font-medium min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary" />
        <Button variant="default" size="lg" className="w-full mt-4" onClick={() => toast.success('Avaliação enviada!')}>
          <CheckCircle2 size={18} /> Submeter Avaliação
        </Button>
      </DocCard>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// 6. AGENDA / CALENDÁRIO
// ═══════════════════════════════════════════════════════════
export const FamilyAgendaView = () => {
  const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const agenda = [
    { dia: 'Seg', hora: '09h-13h', cuid: 'Ana Sofia', tipo: 'Apoio Diário' },
    { dia: 'Ter', hora: '09h-13h', cuid: 'Ana Sofia', tipo: 'Apoio Diário' },
    { dia: 'Qua', hora: '14h-18h', cuid: 'Carlos M.', tipo: 'Reabilitação' },
    { dia: 'Qui', hora: '09h-13h', cuid: 'Ana Sofia', tipo: 'Apoio Diário' },
    { dia: 'Sex', hora: '09h-13h', cuid: 'Ana Sofia', tipo: 'Apoio Diário' },
  ];
  return (
    <div className="space-y-8">
      <SectionHeader title="Agenda Semanal" desc="Visão consolidada dos turnos do cuidado." />
      <div className="grid grid-cols-7 gap-2">
        {dias.map(d => (
          <div key={d} className="text-center p-3 bg-secondary rounded-2xl">
            <p className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">{d}</p>
            <p className="text-2xl font-display font-black text-foreground mt-1">{Math.floor(Math.random() * 28) + 1}</p>
          </div>
        ))}
      </div>
      <DocCard title="Próximos Turnos">
        <div className="space-y-3">
          {agenda.map((a, i) => (
            <motion.div key={i} {...stagger(i)} className="flex items-center gap-4 p-4 bg-secondary rounded-2xl border border-border/50">
              <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex flex-col items-center justify-center shrink-0">
                <span className="text-[9px] font-display font-bold uppercase">{a.dia}</span>
                <span className="text-base font-display font-black leading-none">{i + 4}</span>
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-foreground text-sm">{a.tipo} · {a.cuid}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><Clock size={11} />{a.hora}</p>
              </div>
              <Button variant="outline" size="sm"><Edit3 size={14} /></Button>
            </motion.div>
          ))}
        </div>
      </DocCard>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// 7. PLANO DE CUIDADOS
// ═══════════════════════════════════════════════════════════
export const FamilyCarePlanView = () => (
  <div className="space-y-8">
    <SectionHeader title="Plano de Cuidados" desc="Medicação, exercícios, alimentação e relatórios diários." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[
        { t: 'Medicação', i: Pill, items: ['Sintrom 4mg · 08h', 'Metformina 500mg · 13h', 'Lisinopril · 20h'] },
        { t: 'Alimentação', i: Utensils, items: ['Dieta diabética', '1500 kcal/dia', 'Sem açúcar refinado'] },
        { t: 'Exercícios', i: Dumbbell, items: ['Mobilidade · 30min', 'Caminhada · 20min', 'Respiração · 10min'] },
      ].map((p, i) => (
        <motion.div key={i} {...stagger(i)} className="bg-card p-6 rounded-3xl border border-border shadow-card">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
            <p.i size={22} />
          </div>
          <h4 className="font-display font-black text-foreground uppercase tracking-tight mb-3">{p.t}</h4>
          <ul className="space-y-2">
            {p.items.map(it => (
              <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                <CheckCircle2 size={14} className="text-success shrink-0" />{it}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
    <DocCard title="Relatórios Diários">
      <div className="space-y-3">
        {['Hoje', 'Ontem', '2 dias atrás'].map((d, i) => (
          <div key={d} className="flex items-center justify-between p-4 bg-secondary rounded-2xl">
            <div className="flex items-center gap-3">
              <FileText className="text-primary" size={18} />
              <div>
                <p className="font-display font-bold text-sm text-foreground">Relatório · {d}</p>
                <p className="text-xs text-muted-foreground">Por Ana Sofia M.</p>
              </div>
            </div>
            <Button variant="outline" size="sm"><Download size={14} /></Button>
          </div>
        ))}
      </div>
    </DocCard>
  </div>
);

// ═══════════════════════════════════════════════════════════
// 8. EMERGÊNCIAS / SOS
// ═══════════════════════════════════════════════════════════
export const FamilyEmergencyView = () => (
  <div className="space-y-8">
    <SectionHeader title="Emergências & SOS" desc="Contactos rápidos e histórico de incidentes." />
    <motion.div {...fadeUp} className="bg-destructive/10 border-2 border-destructive/30 p-6 sm:p-8 rounded-3xl text-center">
      <AlertTriangle size={48} className="text-destructive mx-auto mb-4" />
      <h3 className="text-2xl font-display font-black text-destructive uppercase tracking-tight">Botão SOS</h3>
      <p className="text-sm text-muted-foreground font-medium mt-2 mb-5">Aciona ajuda imediata · cuidadora, INEM e contacto familiar.</p>
      <Button variant="destructive" size="lg" className="w-full sm:w-auto" onClick={() => toast.error('SOS acionado! A contactar...')}>
        <Phone size={18} /> ACIONAR SOS AGORA
      </Button>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <DocCard title="Contactos Rápidos">
        {[
          { n: 'Cuidadora · Ana Sofia', t: '912 345 678', i: Heart },
          { n: 'INEM', t: '112', i: AlertTriangle },
          { n: 'Médico de Família', t: '218 765 432', i: Stethoscope },
          { n: 'Filho · João', t: '963 210 987', i: Users },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-secondary rounded-2xl mb-2">
            <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center text-primary border border-border"><c.i size={18} /></div>
            <div className="flex-1">
              <p className="font-display font-bold text-sm text-foreground">{c.n}</p>
              <p className="text-xs text-muted-foreground">{c.t}</p>
            </div>
            <Button variant="outline" size="sm"><Phone size={14} /></Button>
          </div>
        ))}
      </DocCard>

      <DocCard title="Histórico de Incidentes">
        {[
          { d: '12 Abr', t: 'Queda ligeira · sem ferimentos', s: 'Resolvido' },
          { d: '03 Mar', t: 'Tensão alta · medicação ajustada', s: 'Resolvido' },
          { d: '18 Fev', t: 'Episódio confusão · avaliado', s: 'Resolvido' },
        ].map((h, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-secondary rounded-2xl mb-2">
            <span className="text-[10px] font-display font-black text-muted-foreground uppercase w-12">{h.d}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{h.t}</p>
              <span className="text-[10px] font-display font-black text-success uppercase tracking-widest">{h.s}</span>
            </div>
          </div>
        ))}
      </DocCard>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════
// 9. PAGAMENTOS DA FAMÍLIA
// ═══════════════════════════════════════════════════════════
export const FamilyPaymentsView = () => (
  <div className="space-y-8">
    <SectionHeader title="Histórico de Pagamentos" desc="Faturas, recibos e próximas cobranças." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatBlock label="Pago este Mês" value="1.840€" icon={CheckCircle2} colorClass="text-success" />
      <StatBlock label="Próxima Cobrança" value="04 Mai" icon={Calendar} colorClass="text-primary" />
      <StatBlock label="Em Escrow" value="920€" icon={ShieldCheck} colorClass="text-foreground" />
    </div>

    <DocCard title="Faturas Recentes">
      <div className="space-y-3">
        {[
          { d: '01 Abr', desc: 'Cuidados Abril · Ana Sofia M.', v: '1.840€', s: 'Pago' },
          { d: '01 Mar', desc: 'Cuidados Março · Ana Sofia M.', v: '1.760€', s: 'Pago' },
          { d: '01 Fev', desc: 'Cuidados Fevereiro · Beatriz L.', v: '1.580€', s: 'Pago' },
        ].map((f, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-secondary rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center text-primary border border-border"><CreditCard size={18} /></div>
              <div>
                <p className="font-display font-bold text-sm text-foreground">{f.desc}</p>
                <p className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">{f.d}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-foreground">{f.v}</span>
              <Button variant="outline" size="sm"><Download size={14} /></Button>
            </div>
          </div>
        ))}
      </div>
    </DocCard>
  </div>
);

// ═══════════════════════════════════════════════════════════
// 10. CONTRATOS ATIVOS DA FAMÍLIA
// ═══════════════════════════════════════════════════════════
export const FamilyContractsView = () => (
  <div className="space-y-8">
    <SectionHeader title="Contratos Ativos" desc="Contratos em vigor com cuidadores." />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {[
        { c: 'Ana Sofia M.', t: 'Apoio Diário', i: '01 Jan 2026', v: '12€/h · 80h/mês', s: 'Ativo' },
        { c: 'Carlos Mendes', t: 'Reabilitação', i: '15 Mar 2026', v: '15€/h · 16h/mês', s: 'Ativo' },
      ].map((c, i) => (
        <motion.div key={i} {...stagger(i)} className="bg-card p-6 rounded-3xl border border-border shadow-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-display font-black text-foreground text-lg">{c.c}</h4>
              <p className="text-xs text-muted-foreground mt-1">{c.t}</p>
            </div>
            <Badge className="bg-success/10 text-success border-success/20">{c.s}</Badge>
          </div>
          <div className="space-y-2 pt-4 border-t border-border">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Início</span><span className="font-medium text-foreground">{c.i}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Valor</span><span className="font-medium text-foreground">{c.v}</span></div>
          </div>
          <div className="flex gap-2 mt-5">
            <Button variant="outline" size="sm" className="flex-1"><FileText size={14} /> Ver</Button>
            <Button variant="outline" size="sm" className="flex-1"><Edit3 size={14} /> Editar</Button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════
// 11. CUIDADORES FAVORITOS
// ═══════════════════════════════════════════════════════════
export const FamilyFavoritesView = () => {
  const [favs, setFavs] = useState([
    { n: 'Ana Sofia M.', e: 'Geriatria', s: 4.9 },
    { n: 'Carlos Mendes', e: 'Reabilitação', s: 4.8 },
    { n: 'Rui Tavares', e: 'Demência', s: 5.0 },
    { n: 'Beatriz Lopes', e: 'Apoio Diário', s: 4.7 },
  ]);
  return (
    <div className="space-y-8">
      <SectionHeader title="Cuidadores Favoritos" desc="Profissionais guardados para futuras contratações." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {favs.map((f, i) => (
          <motion.div key={i} {...stagger(i)} className="bg-card p-5 rounded-3xl border border-border shadow-card flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display font-black">
              {f.n.split(' ').map(x => x[0]).slice(0, 2).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-bold text-foreground truncate">{f.n}</h4>
              <p className="text-xs text-muted-foreground">{f.e}</p>
              <div className="flex items-center gap-1 text-warning mt-1"><Star size={12} fill="currentColor" /><span className="text-xs font-bold">{f.s}</span></div>
            </div>
            <button onClick={() => { setFavs(favs.filter((_, j) => j !== i)); toast.info('Removido dos favoritos'); }}
              className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-xl transition-colors">
              <Heart size={18} fill="currentColor" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// 12. CHAT DA FAMÍLIA (lightweight wrapper)
// ═══════════════════════════════════════════════════════════
export const FamilyChatView = () => (
  <div className="space-y-8">
    <SectionHeader title="Mensagens · Família" desc="Comunica diretamente com a tua cuidadora." />
    <DocCard title="Conversa Ativa · Ana Sofia M.">
      <div className="space-y-3 mb-5 max-h-96 overflow-y-auto">
        {[
          { me: false, t: 'Bom dia! A Sra. Maria está bem disposta hoje.', h: '08:32' },
          { me: true, t: 'Ótimo! Conseguiu dormir bem?', h: '08:45' },
          { me: false, t: 'Sim, dormiu 8 horas seguidas. Vamos fazer caminhada.', h: '08:47' },
          { me: true, t: 'Perfeito, obrigado pelo update!', h: '08:50' },
        ].map((m, i) => (
          <div key={i} className={cn("flex", m.me ? "justify-end" : "justify-start")}>
            <div className={cn("max-w-[75%] p-3 rounded-2xl", m.me ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground")}>
              <p className="text-sm">{m.t}</p>
              <p className={cn("text-[10px] mt-1", m.me ? "text-primary-foreground/70" : "text-muted-foreground")}>{m.h}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input placeholder="Escreve uma mensagem..." className="flex-1" />
        <Button variant="default"><MessageSquare size={16} /></Button>
      </div>
    </DocCard>
  </div>
);
