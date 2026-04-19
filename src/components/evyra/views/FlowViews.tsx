import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ArrowLeft, FileText, Shield, Scale, CreditCard, Wallet, ChevronRight, ChevronDown, Search, MessageCircle, Mail, BarChart3, Users, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { SectionHeader } from '@/components/evyra/EvyraShared';

const itemVariants = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

const ProgressBar = ({ step, total, labels }: { step: number; total: number; labels?: string[] }) => (
  <div className="space-y-3">
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${i + 1 <= step ? 'bg-primary' : 'bg-border'}`} />
      ))}
    </div>
    {labels && (
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}>
        {labels.map((l, i) => (
          <p key={l} className={`text-[9px] font-display font-black uppercase tracking-widest text-center ${step >= i + 1 ? 'text-foreground' : 'text-muted-foreground'}`}>{l}</p>
        ))}
      </div>
    )}
  </div>
);

const SectionCard = ({ label, children }: { label?: string; children: React.ReactNode }) => (
  <div className="bg-card rounded-3xl border border-border shadow-card p-6 sm:p-8 space-y-6">
    {label && <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.35em] border-l-4 border-primary pl-3">{label}</div>}
    {children}
  </div>
);

const FieldBox = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-display font-black uppercase tracking-widest text-foreground">{label}</label>
    {children}
  </div>
);

const inputCls = "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

const SummaryRow = ({ k, v }: { k: string; v: string }) => (
  <div className="flex justify-between text-sm border-b border-border/50 pb-2.5 last:border-0">
    <span className="text-muted-foreground">{k}</span>
    <span className="font-display font-black text-foreground">{v}</span>
  </div>
);

const NavButtons = ({ step, onBack, onNext, nextLabel, loading }: { step: number; onBack: () => void; onNext: () => void; nextLabel?: string; loading?: boolean }) => (
  <div className="flex gap-3">
    {step > 1 && <Button variant="outline" className="px-5 rounded-2xl gap-2" onClick={onBack}><ArrowLeft size={15} />Voltar</Button>}
    <Button size="lg" className="flex-1 rounded-2xl gap-2" onClick={onNext} disabled={loading}>
      {nextLabel || 'Continuar'} <ArrowRight size={15} />
    </Button>
  </div>
);

// ── NOVA DEMANDA ──────────────────────────────────────────────
const SERVICES  = ['Higiene Pessoal','Administração de Medicação','Fisioterapia','Companhia e Lazer','Transporte Médico','Cuidados de Enfermagem','Preparação de Refeições','Apoio Noturno 24h'];
const SCHEDULES = ['Seg–Sex Manhã','Seg–Sex Tarde','Seg–Sex Noite','Fins-de-semana','Período Completo','Madrugada'];

const ChipToggle = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button type="button" onClick={onClick}
    className={`flex items-center gap-2.5 px-3 py-2.5 border rounded-2xl text-sm transition-all text-left w-full ${active ? 'border-primary bg-primary/5 text-foreground' : 'border-border text-muted-foreground hover:border-primary/40'}`}>
    <div className={`w-4 h-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${active ? 'bg-primary border-primary' : 'border-border/70'}`}>
      {active && <Check size={10} className="text-primary-foreground" />}
    </div>
    <span className="font-medium">{label}</span>
  </button>
);

export const NovaDemandaView = ({ onNavigate }: { onNavigate?: (v: string) => void }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ title: '', description: '', services: [] as string[], city: '', startDate: '', duration: '', budget: '', schedule: [] as string[] });
  const toggle = (k: 'services' | 'schedule', v: string) => setForm(p => ({ ...p, [k]: p[k].includes(v) ? p[k].filter(x => x !== v) : [...p[k], v] }));

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div className="flex items-center gap-3">
        <button onClick={() => onNavigate?.('demandas')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={15} />Voltar</button>
      </div>
      <SectionHeader title="Nova Demanda" desc="Publique a necessidade e receba propostas de cuidadores qualificados" />
      <ProgressBar step={step} total={3} labels={['Detalhes', 'Requisitos', 'Publicar']} />

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {step === 1 && (
            <SectionCard label="Detalhes da Demanda">
              <FieldBox label="Título *"><input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Ex: Cuidador(a) para sénior com mobilidade reduzida" className={inputCls} /></FieldBox>
              <FieldBox label="Descrição *"><textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={4} placeholder="Descreva as necessidades, rotinas, perfil ideal..." className={`${inputCls} resize-none`} /></FieldBox>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldBox label="Localização *"><input value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} placeholder="Lisboa, Porto..." className={inputCls} /></FieldBox>
                <FieldBox label="Data de Início"><input type="date" value={form.startDate} onChange={e => setForm(p => ({ ...p, startDate: e.target.value }))} className={inputCls} /></FieldBox>
              </div>
            </SectionCard>
          )}
          {step === 2 && (
            <SectionCard label="Requisitos">
              <FieldBox label="Serviços Necessários *">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{SERVICES.map(s => <ChipToggle key={s} label={s} active={form.services.includes(s)} onClick={() => toggle('services', s)} />)}</div>
              </FieldBox>
              <FieldBox label="Horário Pretendido">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{SCHEDULES.map(s => <button key={s} onClick={() => toggle('schedule', s)} className={`px-3 py-2.5 border rounded-2xl text-xs font-display font-bold transition-all ${form.schedule.includes(s) ? 'border-primary bg-primary/5 text-foreground' : 'border-border text-muted-foreground hover:border-primary/40'}`}>{s}</button>)}</div>
              </FieldBox>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldBox label="Duração">
                  <select value={form.duration} onChange={e => setForm(p => ({ ...p, duration: e.target.value }))} className={inputCls}>
                    <option value="">Selecione</option>
                    {['1 semana','2 semanas','1 mês','3 meses','6 meses','Permanente'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </FieldBox>
                <FieldBox label="Orçamento (€/hora)"><input type="number" value={form.budget} onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} placeholder="15" className={inputCls} /></FieldBox>
              </div>
            </SectionCard>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <SectionCard label="Resumo da Demanda">
                {[['Título', form.title || 'Cuidador(a) para sénior'],['Localização', form.city || 'Lisboa'],['Início', form.startDate || 'A definir'],['Serviços', `${form.services.length} selecionados`],['Duração', form.duration || 'A definir'],['Orçamento', form.budget ? `€${form.budget}/h` : 'A negociar']].map(([k, v]) => <SummaryRow key={k} k={k} v={v} />)}
              </SectionCard>
              <div className="flex items-start gap-3 p-4 bg-warning/5 border border-warning/20 rounded-2xl">
                <AlertTriangle size={14} className="text-warning mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">A demanda será visível para cuidadores verificados. Receberá propostas por notificação e email.</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <NavButtons step={step} onBack={() => setStep(s => s - 1)} onNext={() => step < 3 ? setStep(s => s + 1) : (toast.success('Demanda publicada!'), onNavigate?.('demandas'))} nextLabel={step === 3 ? 'Publicar Demanda' : undefined} />
    </div>
  );
};

// ── NOVO CONTRATO ─────────────────────────────────────────────
export const NovoContratoView = ({ onNavigate }: { onNavigate?: (v: string) => void }) => {
  const [form, setForm] = useState({ rate: 18, hours: 20, weeks: 4, startDate: '', schedule: '', notes: '', escrow: true });
  const total = form.rate * form.hours * form.weeks;
  const fee = Math.round(total * 0.1);
  const net = total - fee;

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <button onClick={() => onNavigate?.('contratos')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={15} />Voltar</button>
      <SectionHeader title="Novo Contrato" desc="Defina os termos com o(a) cuidador(a)" />

      {/* Cuidador */}
      <div className="bg-card rounded-3xl border border-border shadow-card p-5 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-sm font-display font-black text-primary shrink-0">HCF</div>
        <div className="flex-1"><p className="font-display font-black text-foreground text-sm uppercase">Helena Costa Ferreira</p><p className="text-xs text-muted-foreground">Enfermeira Especializada · Lisboa</p></div>
        <span className="text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/30">Verificado</span>
      </div>

      <SectionCard label="Termos do Contrato">
        <div className="grid grid-cols-3 gap-4">
          {[['Valor/Hora (€)', 'rate'], ['Horas/Semana', 'hours'], ['Semanas', 'weeks']].map(([label, key]) => (
            <FieldBox key={key} label={label}>
              <input type="number" min={1} value={form[key as keyof typeof form] as number} onChange={e => setForm(p => ({ ...p, [key]: Number(e.target.value) }))} className={inputCls} />
            </FieldBox>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FieldBox label="Data de Início"><input type="date" value={form.startDate} onChange={e => setForm(p => ({ ...p, startDate: e.target.value }))} className={inputCls} /></FieldBox>
          <FieldBox label="Horário"><input value={form.schedule} onChange={e => setForm(p => ({ ...p, schedule: e.target.value }))} placeholder="Seg–Sex 9h–13h" className={inputCls} /></FieldBox>
        </div>
        <FieldBox label="Notas Especiais"><textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3} placeholder="Instruções específicas..." className={`${inputCls} resize-none`} /></FieldBox>
      </SectionCard>

      <SectionCard label="Resumo Financeiro">
        <div className="space-y-2.5">
          {[['Valor por hora', `€${form.rate}/h`], [`Total (${form.hours}h × ${form.weeks} sem.)`, `€${total}`], ['Taxa plataforma (10%)', `€${fee}`]].map(([k, v]) => <SummaryRow key={k} k={k} v={v} />)}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 text-center"><p className="text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground">Total Contrato</p><p className="text-3xl font-display font-black text-primary tracking-tighter mt-1">€{total}</p></div>
          <div className="bg-success/5 rounded-2xl p-4 border border-success/20 text-center"><p className="text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground">Cuidador Recebe</p><p className="text-3xl font-display font-black text-success tracking-tighter mt-1">€{net}</p></div>
        </div>
      </SectionCard>

      {/* Escrow toggle */}
      <div className="bg-card rounded-3xl border border-border shadow-card p-5 flex items-center gap-4">
        <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary"><Shield size={20} /></div>
        <div className="flex-1"><p className="font-display font-black text-foreground text-sm uppercase">Pagamento via Escrow</p><p className="text-xs text-muted-foreground mt-0.5">Fundos protegidos até aprovação semanal</p></div>
        <div onClick={() => setForm(p => ({ ...p, escrow: !p.escrow }))} className={`w-12 h-7 rounded-full cursor-pointer transition-all ${form.escrow ? 'bg-primary' : 'bg-border'} flex items-center p-1`}>
          <div className={`w-5 h-5 rounded-full bg-white shadow transition-all ${form.escrow ? 'translate-x-5' : 'translate-x-0'}`} />
        </div>
      </div>

      <Button size="lg" className="w-full rounded-2xl gap-2 shadow-elevated" onClick={() => { toast.success('Contrato criado e enviado!'); onNavigate?.('contratos'); }}>
        <FileText size={17} /> Criar Contrato & Enviar para Assinatura
      </Button>
    </div>
  );
};

// ── PROPOSAL FLOW ─────────────────────────────────────────────
export const ProposalFlowView = ({ onNavigate }: { onNavigate?: (v: string) => void }) => {
  const [step, setStep] = useState(1);
  const STEPS = ['Revisar', 'Assinar', 'Pagar', 'Confirmação'];
  const p = { name: 'Helena Costa Ferreira', rate: 18, hours: 20, weeks: 4, total: 1440, net: 1296, fee: 144, schedule: 'Seg–Sex 9h–13h', start: '2026-05-01' };

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <button onClick={() => onNavigate?.('propostas')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={15} />Voltar às Propostas</button>
      <SectionHeader title="Aceitar Proposta" desc="Revise os termos antes de confirmar" />

      {/* Step chain */}
      <div className="flex items-center">
        {STEPS.map((label, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm transition-all ${i+1 < step ? 'bg-success text-success-foreground' : i+1===step ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary text-muted-foreground border border-border'}`}>
                {i+1 < step ? <Check size={14} /> : i+1}
              </div>
              <p className={`text-[9px] font-display font-bold uppercase tracking-widest mt-1 hidden sm:block ${step >= i+1 ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</p>
            </div>
            {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 mx-1 mb-3 rounded-full transition-all ${i+1 < step ? 'bg-success' : 'bg-border'}`} />}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {step === 1 && <SectionCard label={`Proposta de ${p.name}`}>{[['Cuidador(a)',p.name],['Valor/Hora',`€${p.rate}/h`],[`Total (${p.hours}h × ${p.weeks}sem.)`,`€${p.total}`],['Você Paga',`€${p.total}`],['Cuidador Recebe',`€${p.net}`],['Horário',p.schedule],['Início',p.start]].map(([k,v]) => <SummaryRow key={k} k={k} v={v}/>)}</SectionCard>}
          {step === 2 && <SectionCard label="Assinatura Digital">
            <div className="space-y-3">
              {[['📋','Termos do Serviço','Duração, horário e responsabilidades'],['💰','Condições de Pagamento','Pagamento semanal via Escrow'],['🛡️','Proteção EVYRA','Seguro e mediação incluídos'],['⚖️','Cláusulas Legais','Contrato conforme lei portuguesa']].map(([e,t,d]) => (
                <div key={t} className="flex items-center gap-4 p-4 bg-secondary rounded-2xl border border-border/50">
                  <span className="text-xl shrink-0">{e}</span>
                  <div className="flex-1"><p className="text-sm font-display font-black text-foreground uppercase">{t}</p><p className="text-xs text-muted-foreground">{d}</p></div>
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center shrink-0"><Check size={11} className="text-success-foreground"/></div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl text-xs text-muted-foreground leading-relaxed">Ao aceitar, confirmo que li todos os termos. A aceitação fica registada com data, hora e IP.</div>
          </SectionCard>}
          {step === 3 && <SectionCard label="Depósito em Escrow">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center"><p className="text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground">Valor a Depositar</p><p className="text-4xl font-display font-black text-primary tracking-tighter mt-2">€{p.total}</p><p className="text-xs text-muted-foreground mt-1">Libertado semanalmente após aprovação</p></div>
            <div className="space-y-2.5">
              {[['📱','MB Way','+351 91X XXX XXX'],['🏧','Multibanco','Entidade: 11222 · Ref: 123 456 789'],['🏦','IBAN','PT50 0000 0000 0000 0000 0000 0']].map(([e,m,d]) => (
                <div key={m} className="flex items-center gap-3 p-4 border border-border rounded-2xl cursor-pointer hover:border-primary/30 hover:bg-secondary/50 transition-all"><span className="text-2xl">{e}</span><div><p className="text-sm font-display font-black text-foreground uppercase">{m}</p><p className="text-xs text-muted-foreground font-mono">{d}</p></div></div>
              ))}
            </div>
          </SectionCard>}
          {step === 4 && (
            <div className="text-center space-y-6 py-8">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="w-24 h-24 bg-success/10 rounded-3xl flex items-center justify-center mx-auto">
                <Check size={48} className="text-success" strokeWidth={2.5} />
              </motion.div>
              <div><h3 className="text-2xl font-display font-black uppercase tracking-tighter text-foreground">Contrato Ativo!</h3><p className="text-muted-foreground mt-2 text-sm leading-relaxed">Assinado e fundos em Escrow seguro. Cuidador notificado.</p></div>
              <SectionCard>{[['Cuidador(a)',p.name],['Início',p.start],['Escrow',`€${p.total} protegido`],['Estado','Ativo ✓']].map(([k,v]) => <SummaryRow key={k} k={k} v={v}/>)}</SectionCard>
              <div className="flex gap-3"><Button size="lg" className="flex-1 rounded-2xl" onClick={() => onNavigate?.('contratos')}>Ver Contrato</Button><Button size="lg" variant="outline" className="flex-1 rounded-2xl" onClick={() => onNavigate?.('chat')}>Mensagem</Button></div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {step < 4 && <NavButtons step={step} onBack={() => setStep(s => s - 1)} onNext={() => setStep(s => s + 1)} nextLabel={step===3 ? 'Confirmar Pagamento' : step===2 ? 'Aceitar & Assinar' : undefined} />}
    </div>
  );
};

// ── ADMIN DASHBOARD ───────────────────────────────────────────
export const AdminDashboardView = () => {
  const stats = [
    { label: 'Utilizadores', value: '1,248', delta: '+8.2%', Icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Contratos Ativos', value: '342', delta: '+12.5%', Icon: FileText, color: 'text-success', bg: 'bg-success/10' },
    { label: 'Volume Mensal', value: '€48.2k', delta: '+23%', Icon: BarChart3, color: 'text-warning', bg: 'bg-warning/10' },
    { label: 'KYC Pendentes', value: '23', delta: '', Icon: Shield, color: 'text-destructive', bg: 'bg-destructive/10' },
  ];
  const pending = [
    { name: 'Carlos Mendes', type: 'Cuidador', action: 'KYC Pendente', cls: 'bg-warning/10 text-warning border-warning/30' },
    { name: 'Família Sousa', type: 'Família', action: 'Ativação €29', cls: 'bg-info/10 text-info border-info/30' },
    { name: 'Ana Rodrigues', type: 'Cuidador', action: 'Documentos em falta', cls: 'bg-destructive/10 text-destructive border-destructive/30' },
    { name: 'Contrato #1052', type: 'Contrato', action: 'Disputa reportada', cls: 'bg-destructive/10 text-destructive border-destructive/30' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <SectionHeader title="Admin Dashboard" desc="Visão geral da plataforma EVYRA" />
        <span className="text-[9px] font-display font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-destructive/10 text-destructive border border-destructive/30">Admin</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-card rounded-3xl border border-border shadow-card p-5 space-y-3 hover:shadow-elevated transition-all">
            <div className={`w-10 h-10 ${s.bg} rounded-2xl flex items-center justify-center ${s.color}`}><s.Icon size={18} /></div>
            <div>
              <p className="text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground">{s.label}</p>
              <p className={`text-2xl font-display font-black tracking-tighter mt-1 ${s.color}`}>{s.value}</p>
              {s.delta && <p className="text-[10px] text-success font-medium mt-0.5">{s.delta} este mês</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className="text-[10px] font-display font-black uppercase tracking-widest text-foreground border-l-4 border-destructive pl-3">Ações Pendentes</h3>
        <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
          {pending.map((item, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-4 hover:bg-secondary/50 transition-all cursor-pointer ${i > 0 ? 'border-t border-border/50' : ''}`} onClick={() => toast.info(`Gerir: ${item.name}`)}>
              <div className="w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center text-xs font-display font-black text-primary shrink-0">{item.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
              <div className="flex-1 min-w-0"><p className="text-sm font-display font-black text-foreground uppercase truncate">{item.name}</p><p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest">{item.type}</p></div>
              <span className={`text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${item.cls} whitespace-nowrap`}>{item.action}</span>
              <ChevronRight size={15} className="text-muted-foreground shrink-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[['👥','Utilizadores','Gerir contas'],['💰','Pagamentos','Escrow & saques'],['📋','Contratos','Disputas'],['🛡️','Moderação','Conteúdo']].map(([e,t,d]) => (
          <div key={t} className="bg-card rounded-2xl border border-border shadow-card p-5 text-center cursor-pointer hover:shadow-elevated hover:border-primary/30 transition-all group" onClick={() => toast.info(`Abrir ${t}...`)}>
            <span className="text-3xl group-hover:scale-110 inline-block transition-transform">{e}</span>
            <p className="text-xs font-display font-black uppercase text-foreground mt-2">{t}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── HELP CENTER ───────────────────────────────────────────────
export const HelpCenterView = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState<number | null>(null);
  const categories = [['🚀','Primeiros Passos',8],['🔒','Verificação KYC',5],['💳','Pagamentos',12],['📋','Contratos',9],['👥','Perfil & Conta',6],['⚖️','Disputas',4]];
  const faqs = [
    ['Como funciona o sistema Escrow?','O Escrow bloqueia os fundos até a conclusão semanal. A família deposita antes do início e o cuidador recebe semanalmente após aprovação.'],
    ['Qual o prazo para verificação KYC?','Realizada em tempo real pelo Didit. Na maioria dos casos demora menos de 5 minutos. Em casos excecionais até 24 horas.'],
    ['Posso cancelar um contrato?','Sim, com 7 dias de antecedência. Cancelamentos antes do início têm reembolso total. Após o início aplica-se a política proporcional.'],
    ['Como são calculadas as comissões?','A EVYRA retém 10% como taxa de serviço, cobrindo seguros, mediação, suporte e infraestrutura.'],
    ['O que é a taxa de ativação familiar?','€29 (taxa única) para ativar a conta familiar. Financia a verificação de cuidadores e suporte dedicado.'],
  ];
  const filtered = faqs.filter(([q]) => !search || q.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <SectionHeader title="Centro de Ajuda" desc="Como podemos ajudar?" />
      <div className="relative">
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar artigos de ajuda..." className={`w-full pl-12 pr-4 py-4 ${inputCls}`} />
      </div>
      {!search && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map(([e, label, count]) => (
            <div key={label as string} className="bg-card rounded-2xl border border-border shadow-card p-5 cursor-pointer hover:shadow-elevated hover:border-primary/30 transition-all group" onClick={() => toast.info(`Abrir ${label}...`)}>
              <span className="text-3xl group-hover:scale-110 inline-block transition-transform">{e}</span>
              <p className="text-sm font-display font-black uppercase text-foreground mt-2">{label as string}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{count} artigos</p>
            </div>
          ))}
        </div>
      )}
      <div className="space-y-2.5">
        <h3 className="text-[10px] font-display font-black uppercase tracking-widest text-foreground border-l-4 border-primary pl-3">Perguntas Frequentes</h3>
        {filtered.map(([q, a], i) => (
          <div key={i} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
              <span className="text-sm font-display font-black text-foreground uppercase pr-4">{q}</span>
              <ChevronDown size={17} className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {open === i && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="px-5 pb-5 pt-3 border-t border-border/50"><p className="text-sm text-muted-foreground leading-relaxed">{a}</p></div>
              </motion.div>}
            </AnimatePresence>
          </div>
        ))}
        {filtered.length === 0 && <div className="text-center py-12"><p className="font-display font-black text-foreground uppercase">Nenhum resultado</p><p className="text-sm text-muted-foreground mt-1">Tente outros termos</p></div>}
      </div>
      <div className="bg-gradient-to-r from-primary/5 to-info/5 border border-primary/20 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl shrink-0">💬</div>
          <div className="flex-1 text-center sm:text-left"><p className="font-display font-black text-foreground uppercase">Não encontrou resposta?</p><p className="text-sm text-muted-foreground mt-1">Suporte disponível 7 dias/semana · 8h–22h</p></div>
          <div className="flex gap-3">
            <Button size="sm" className="rounded-2xl gap-2" onClick={() => toast.info('Chat ao vivo...')}><MessageCircle size={14}/>Chat ao Vivo</Button>
            <Button size="sm" variant="outline" className="rounded-2xl gap-2" onClick={() => toast.info('Email...')}><Mail size={14}/>Email</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
