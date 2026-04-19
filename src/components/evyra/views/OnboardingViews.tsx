import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Shield, ShieldCheck, Camera, Sun, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const itemVariants = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } } };

// ── Shared primitives ─────────────────────────────────────────
const StepBar = ({ step, total, labels }: { step: number; total: number; labels?: string[] }) => (
  <div className="space-y-3">
    <div className="flex items-center">
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm shrink-0 transition-all ${
            i + 1 < step  ? 'bg-success text-success-foreground shadow-sm' :
            i + 1 === step ? 'bg-primary text-primary-foreground shadow-md' :
            'bg-secondary text-muted-foreground border border-border'}`}>
            {i + 1 < step ? <Check size={14} /> : i + 1}
          </div>
          {i < total - 1 && <div className={`flex-1 h-0.5 mx-2 rounded-full transition-all duration-500 ${i + 1 < step ? 'bg-success' : 'bg-border'}`} />}
        </React.Fragment>
      ))}
    </div>
    {labels && (
      <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}>
        {labels.map((l, i) => (
          <p key={l} className={`text-[9px] font-display font-black uppercase tracking-widest text-center truncate ${step >= i + 1 ? 'text-foreground' : 'text-muted-foreground'}`}>{l}</p>
        ))}
      </div>
    )}
  </div>
);

const CheckChip = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button type="button" onClick={onClick}
    className={`flex items-center gap-2.5 px-3 py-2.5 border rounded-2xl text-sm cursor-pointer transition-all text-left w-full ${active ? 'border-primary bg-primary/5 text-foreground' : 'border-border text-muted-foreground hover:border-primary/40 hover:bg-secondary/60'}`}>
    <div className={`w-4 h-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${active ? 'bg-primary border-primary' : 'border-border/70'}`}>
      {active && <Check size={10} className="text-primary-foreground" />}
    </div>
    <span className="font-medium">{label}</span>
  </button>
);

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="text-[10px] font-display font-black uppercase tracking-widest text-foreground">{children}</label>
);

const FieldInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input ref={ref} {...props}
    className="w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
));

const SectionDivider = ({ label }: { label: string }) => (
  <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.35em] border-l-4 border-primary pl-3">{label}</div>
);

// ── FAMILY SETUP ──────────────────────────────────────────────
const CONDITIONS = ['Diabetes','Hipertensão','Alzheimer/Demência','Parkinson','AVC/Sequelas','Insuficiência Cardíaca','Artrite/Osteoporose','Depressão/Ansiedade'];
const SERVICES   = ['Higiene Pessoal','Administração de Medicação','Fisioterapia','Companhia e Lazer','Transporte Médico','Cuidados de Enfermagem','Preparação de Refeições','Apoio Noturno'];
const DAYS       = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'];
const TIMES      = ['Manhã (6h–12h)','Tarde (12h–18h)','Noite (18h–00h)','Madrugada (00h–6h)'];
const MOBILITIES = ['Independente','Mobilidade Parcial','Cadeira de Rodas','Acamado'];

export const FamilySetupView = ({ onNavigate }: { onNavigate?: (v: string) => void }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ elderName: '', elderAge: '', mobility: '', conditions: [] as string[], services: [] as string[], days: [] as string[], times: [] as string[], emergencyName: '', emergencyPhone: '', city: '', notes: '' });

  const toggle = (key: keyof typeof form, val: string) =>
    setForm(p => ({ ...p, [key]: (p[key] as string[]).includes(val) ? (p[key] as string[]).filter(x => x !== val) : [...(p[key] as string[]), val] }));

  const handleNext = () => {
    if (step === 1 && !form.elderName) { toast.error('Preencha o nome do idoso'); return; }
    if (step === 2 && form.services.length === 0) { toast.error('Selecione pelo menos um serviço'); return; }
    if (step < 3) setStep(s => s + 1);
    else { toast.success('Perfil guardado!'); onNavigate?.('kyc'); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-lg flex items-center justify-center border-2 border-background">
              <Check size={10} className="text-success-foreground" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-display font-black uppercase tracking-tighter text-foreground">Configure o Cuidado</h1>
            <p className="text-sm text-muted-foreground mt-1">Família · EVYRA · Passo {step} de 3</p>
          </div>
        </div>

        <StepBar step={step} total={3} labels={['Dados do Idoso', 'Necessidades', 'Emergência']} />

        <AnimatePresence mode="wait">
          <motion.div key={step} variants={containerVariants} initial="hidden" animate="show"
            className="bg-card rounded-3xl border border-border shadow-elevated p-6 sm:p-8 space-y-6">
            {step === 1 && (
              <motion.div variants={itemVariants} className="space-y-6">
                <SectionDivider label="Dados do Idoso" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><FieldLabel>Nome do Idoso *</FieldLabel><FieldInput value={form.elderName} onChange={e => setForm(p => ({ ...p, elderName: e.target.value }))} placeholder="Nome completo" /></div>
                  <div className="space-y-1.5"><FieldLabel>Idade</FieldLabel><FieldInput type="number" value={form.elderAge} onChange={e => setForm(p => ({ ...p, elderAge: e.target.value }))} placeholder="78" /></div>
                </div>
                <div className="space-y-2">
                  <FieldLabel>Nível de Mobilidade</FieldLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {MOBILITIES.map(m => <button key={m} type="button" onClick={() => setForm(p => ({ ...p, mobility: m }))}
                      className={`px-3 py-2.5 border rounded-2xl text-sm font-display font-bold transition-all text-left ${form.mobility === m ? 'border-primary bg-primary/5 text-foreground' : 'border-border text-muted-foreground hover:border-primary/40'}`}>{m}</button>)}
                  </div>
                </div>
                <div className="space-y-2">
                  <FieldLabel>Condições Médicas</FieldLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CONDITIONS.map(c => <CheckChip key={c} label={c} active={form.conditions.includes(c)} onClick={() => toggle('conditions', c)} />)}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div variants={itemVariants} className="space-y-6">
                <SectionDivider label="Necessidades de Cuidado" />
                <div className="space-y-2">
                  <FieldLabel>Serviços Necessários *</FieldLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICES.map(s => <CheckChip key={s} label={s} active={form.services.includes(s)} onClick={() => toggle('services', s)} />)}
                  </div>
                </div>
                <div className="border-t border-border pt-5 space-y-5">
                  <div className="space-y-2"><FieldLabel>Dias da Semana</FieldLabel><div className="grid grid-cols-2 gap-2">{DAYS.map(d => <CheckChip key={d} label={d} active={form.days.includes(d)} onClick={() => toggle('days', d)} />)}</div></div>
                  <div className="space-y-2"><FieldLabel>Período</FieldLabel><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{TIMES.map(t => <CheckChip key={t} label={t} active={form.times.includes(t)} onClick={() => toggle('times', t)} />)}</div></div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div variants={itemVariants} className="space-y-6">
                <SectionDivider label="Contacto de Emergência" />
                <div className="space-y-1.5"><FieldLabel>Nome do Contacto *</FieldLabel><FieldInput value={form.emergencyName} onChange={e => setForm(p => ({ ...p, emergencyName: e.target.value }))} placeholder="Nome completo" /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><FieldLabel>Telemóvel *</FieldLabel><FieldInput type="tel" value={form.emergencyPhone} onChange={e => setForm(p => ({ ...p, emergencyPhone: e.target.value }))} placeholder="+351 912 345 678" /></div>
                  <div className="space-y-1.5"><FieldLabel>Cidade</FieldLabel><FieldInput value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} placeholder="Lisboa, Porto..." /></div>
                </div>
                <div className="space-y-1.5">
                  <FieldLabel>Notas Adicionais</FieldLabel>
                  <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3} placeholder="Informação adicional para o cuidador..."
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
                </div>
                <div className="bg-secondary rounded-2xl p-4 border border-border/60 space-y-2">
                  <p className="text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground mb-2">Resumo</p>
                  {[['Idoso', form.elderName || '—'], ['Mobilidade', form.mobility || '—'], ['Serviços', `${form.services.length} selecionados`], ['Emergência', form.emergencyName || '—']].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm"><span className="text-muted-foreground">{k}</span><span className="font-display font-black text-foreground">{v}</span></div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3">
          {step > 1 && <Button variant="outline" className="px-5 rounded-2xl" onClick={() => setStep(s => s - 1)}>← Voltar</Button>}
          <Button size="lg" className="flex-1 rounded-2xl" onClick={handleNext}>
            {step === 3 ? 'Completar Registo' : 'Continuar'} <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// ── KYC VIEW ──────────────────────────────────────────────────
type KycStatus = 'UNVERIFIED' | 'PENDING' | 'VERIFIED' | 'REJECTED';

export const KYCView = ({ onNavigate }: { onNavigate?: (v: string) => void }) => {
  const [status, setStatus] = useState<KycStatus>('UNVERIFIED');
  const [showWidget, setShowWidget] = useState(false);
  const [starting, setStarting] = useState(false);

  const CYCLE: Record<KycStatus, KycStatus> = { UNVERIFIED: 'PENDING', PENDING: 'VERIFIED', VERIFIED: 'REJECTED', REJECTED: 'UNVERIFIED' };

  const start = () => {
    setStarting(true);
    setTimeout(() => { setStarting(false); setStatus('PENDING'); setShowWidget(true); }, 900);
  };

  const STATES = {
    UNVERIFIED: { icon: '🛡️', bg: 'bg-secondary', title: 'Não Verificado', desc: 'Inicie a verificação para desbloquear todas as funcionalidades.', badgeCls: 'bg-secondary text-muted-foreground border-border' },
    PENDING:    { icon: '⏳', bg: 'bg-warning/10', title: 'Em Verificação', desc: 'O processo está em curso. Aguarde.', badgeCls: 'bg-warning/10 text-warning border-warning/30' },
    VERIFIED:   { icon: '✅', bg: 'bg-success/10', title: 'Verificado', desc: 'Identidade confirmada. Conta totalmente ativa.', badgeCls: 'bg-success/10 text-success border-success/30' },
    REJECTED:   { icon: '❌', bg: 'bg-destructive/10', title: 'Rejeitado', desc: 'A verificação falhou. Tente com documentos válidos.', badgeCls: 'bg-destructive/10 text-destructive border-destructive/30' },
  };
  const s = STATES[status];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10">
      {showWidget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md mx-4 bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center"><Shield size={14} className="text-primary-foreground" /></div>
                <span className="text-sm font-display font-black uppercase tracking-tight text-foreground">Verificação Didit</span>
              </div>
              <button onClick={() => { setShowWidget(false); setStatus('VERIFIED'); }} className="text-muted-foreground hover:text-foreground transition-colors p-1">✕</button>
            </div>
            <div className="p-8 text-center space-y-5">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-4xl">📸</div>
              <div><p className="font-display font-black text-foreground uppercase">Documento de Identidade</p><p className="text-sm text-muted-foreground mt-1">Posicione o BI ou Passaporte em frente à câmara</p></div>
              <div className="w-full h-36 bg-secondary rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center"><Camera size={28} className="mx-auto text-muted-foreground" /><p className="text-xs text-muted-foreground mt-2 font-display font-bold">Câmara Didit</p></div>
              </div>
              <Button size="lg" className="w-full rounded-2xl" onClick={() => { setShowWidget(false); setStatus('VERIFIED'); }}>Simular Aprovação ✓</Button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow"><Shield size={28} className="text-primary-foreground" /></div>
          <div><h1 className="text-3xl font-display font-black uppercase tracking-tighter text-foreground">Verificação KYC</h1><p className="text-sm text-muted-foreground mt-1">Identidade · EVYRA</p></div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-3xl border border-border shadow-elevated p-8 text-center space-y-5">
          <div className={`w-20 h-20 ${s.bg} rounded-2xl flex items-center justify-center mx-auto text-4xl`}>{s.icon}</div>
          <span className={`inline-flex text-[9px] font-display font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${s.badgeCls}`}>{s.title}</span>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {status === 'UNVERIFIED' && <Button size="lg" className="rounded-2xl" onClick={start} disabled={starting}>{starting ? <><Loader2 size={15} className="animate-spin mr-2"/>A iniciar...</> : <><ShieldCheck size={16} className="mr-2"/>Iniciar Verificação</>}</Button>}
            {status === 'PENDING'    && <Button size="lg" className="rounded-2xl" onClick={() => setShowWidget(true)}>Continuar</Button>}
            {status === 'VERIFIED'   && <Button size="lg" className="rounded-2xl bg-success hover:bg-success/90" onClick={() => onNavigate?.('dashboard')}>Ir para Dashboard <ArrowRight size={15} className="ml-2"/></Button>}
            {status === 'REJECTED'   && <Button size="lg" className="rounded-2xl" onClick={start}>Nova Tentativa</Button>}
            <Button variant="outline" size="sm" className="rounded-2xl" onClick={() => setStatus(CYCLE[status])}>Demo →</Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3">
          {[[<svg key="id" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h2m0 0a2 2 0 1 1 4 0H9"/><line x1="7" y1="16" x2="17" y2="16"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,'Documento ID','BI ou Passaporte'], [<Camera key="cam" size={20}/>, 'Câmara', 'Em boas condições'], [<Sun key="sun" size={20}/>, 'Iluminação', 'Sem reflexos']].map(([icon, title, desc]) => (
            <div key={title as string} className="bg-card rounded-2xl border border-border p-4 text-center space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary">{icon}</div>
              <p className="text-[10px] font-display font-black uppercase text-foreground">{title as string}</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{desc as string}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
          <p className="text-[10px] font-display font-black uppercase tracking-widest text-foreground mb-3">Benefícios</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {['Acesso completo à plataforma','Maior confiança de famílias','Contratos e pagamentos ativos','Perfil com selo verificado'].map(b => (
              <div key={b} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0"><Check size={10} className="text-success"/></div>
                <span className="text-xs text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Re-export Sun icon workaround
const Sun = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
