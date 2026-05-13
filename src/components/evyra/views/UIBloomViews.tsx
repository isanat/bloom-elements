import React, { useState } from 'react';
import {
  Heart, Users, UserCheck, FileText, Wallet, Coins, Star, Calendar,
  CreditCard, Flame, LifeBuoy, ShieldCheck, Mail, Lock, Search, Upload,
  Eye, EyeOff, Home, MessageSquare, Bell, User, X, Sparkles, Lightbulb,
  Inbox, Loader2, CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { SectionHeader, DocCard, StatBlock } from '@/components/evyra/EvyraShared';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

/* ───────────────── 1. COLORS ───────────────── */
const swatches = [
  { name: 'Primary',     varName: '--primary',     hex: '#2563EB' },
  { name: 'Secondary',   varName: '--secondary',   hex: '#F1F5F9' },
  { name: 'Accent',      varName: '--accent',      hex: '#F1F5F9' },
  { name: 'Warning',     varName: '--warning',     hex: '#F59E0B' },
  { name: 'Background',  varName: '--background',  hex: '#F8FAFC' },
  { name: 'Foreground',  varName: '--foreground',  hex: '#111827' },
  { name: 'Muted',       varName: '--muted',       hex: '#F1F5F9' },
  { name: 'Card',        varName: '--card',        hex: '#FFFFFF' },
  { name: 'Border',      varName: '--border',      hex: '#E1E7EF' },
  { name: 'Destructive', varName: '--destructive', hex: '#EF4444' },
  { name: 'Success',     varName: '--success',     hex: '#10B981' },
  { name: 'Info',        varName: '--info',        hex: '#0EA5E9' },
];

export const UIColorsView = () => (
  <div className="space-y-12 animate-fade-in">
    <SectionHeader title="Paleta de Cores" desc="Tokens semânticos HSL do design system Bloom/EVYRA. Primary: azul #2563EB — usar sempre via classes Tailwind." />
    <DocCard title="Tokens Principais">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {swatches.map(s => (
          <div key={s.name} className="rounded-2xl border border-border overflow-hidden bg-card">
            <div className="h-24" style={{ background: `hsl(var(${s.varName}))` }} />
            <div className="p-3 space-y-0.5">
              <div className="text-xs font-display font-black uppercase tracking-widest">{s.name}</div>
              <div className="text-[10px] text-muted-foreground font-mono">{s.varName}</div>
              <div className="text-[10px] text-muted-foreground font-mono">{s.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </DocCard>
    <DocCard title="Como Usar">
      <pre className="text-xs bg-muted p-4 rounded-2xl overflow-x-auto font-mono">{`<div className="bg-primary text-primary-foreground" />
<div className="bg-success text-success-foreground" />
<div className="bg-warning text-warning-foreground" />
// HSL no index.css:  --primary: 221 83% 53%;  → #2563EB
//                    --success: 160 84% 39%;  → #10B981
//                    --warning:  38 92% 50%;  → #F59E0B`}</pre>
    </DocCard>
  </div>
);

/* ───────────────── 2. HEALTH ICONS ───────────────── */
const healthIcons = [
  { icon: Heart,       label: 'Care',       desc: 'Cuidado geral' },
  { icon: Users,       label: 'Family',     desc: 'Família' },
  { icon: UserCheck,   label: 'Caregiver',  desc: 'Cuidador' },
  { icon: FileText,    label: 'Contract',   desc: 'Contrato' },
  { icon: Wallet,      label: 'Wallet',     desc: 'Carteira' },
  { icon: Coins,       label: 'Token',      desc: 'Token EVY' },
  { icon: Star,        label: 'Reputation', desc: 'Reputação' },
  { icon: Calendar,    label: 'Schedule',   desc: 'Agenda' },
  { icon: CreditCard,  label: 'Payment',    desc: 'Pagamento' },
  { icon: Flame,       label: 'Burn',       desc: 'Queima de tokens' },
  { icon: LifeBuoy,    label: 'Support',    desc: 'Suporte' },
  { icon: ShieldCheck, label: 'Trust',      desc: 'Confiança/KYC' },
];

export const UIHealthIconsView = () => (
  <div className="space-y-12 animate-fade-in">
    <SectionHeader title="Ícones Health" desc="12 ícones temáticos para o ecossistema de cuidado EVYRA." />
    <DocCard title="Coleção Completa">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {healthIcons.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:border-primary hover:shadow-card transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Icon size={26} />
            </div>
            <div className="text-xs font-display font-black uppercase tracking-widest">{label}</div>
            <div className="text-[10px] text-muted-foreground">{desc}</div>
          </div>
        ))}
      </div>
    </DocCard>
  </div>
);

/* ───────────────── 3. BOTTOM NAV ───────────────── */
export const UIBottomNavView = () => {
  const [active, setActive] = useState('home');
  const items = [
    { id: 'home',    icon: Home,          label: 'Início' },
    { id: 'search',  icon: Search,        label: 'Procurar' },
    { id: 'chat',    icon: MessageSquare, label: 'Chat',  badge: 3 },
    { id: 'alerts',  icon: Bell,          label: 'Alertas', badge: 12 },
    { id: 'me',      icon: User,          label: 'Eu' },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Bottom Navigation" desc="Navegação inferior fixa para mobile, com badges de contagem." />
      <DocCard title="Mockup Mobile">
        <div className="mx-auto max-w-sm bg-muted rounded-3xl border border-border overflow-hidden shadow-card">
          <div className="h-72 bg-gradient-to-b from-primary/10 to-background flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Conteúdo da página · ativo: <strong>{active}</strong></p>
          </div>
          <nav className="bg-card border-t border-border grid grid-cols-5">
            {items.map(({ id, icon: Icon, label, badge }) => (
              <button key={id} onClick={() => setActive(id)} className={cn(
                "py-3 flex flex-col items-center gap-1 relative transition-colors",
                active === id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}>
                <div className="relative">
                  <Icon size={20} />
                  {badge && (
                    <span className="absolute -top-1.5 -right-2 bg-destructive text-destructive-foreground text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                      {badge > 9 ? '9+' : badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest">{label}</span>
                {active === id && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-b-full" />}
              </button>
            ))}
          </nav>
        </div>
      </DocCard>
    </div>
  );
};

/* ───────────────── 4. SPECIALTY MODALS ───────────────── */
export const UISpecialtyModalsView = () => {
  const [activation, setActivation] = useState(false);
  const [tip, setTip] = useState(false);

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Modais Especiais" desc="ActivationModal e TipModal — modais com layout próprio para fluxos premium." />

      <DocCard title="ActivationModal">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="premium" onClick={() => setActivation(true)}>
            <Sparkles size={16} /> Abrir Activation
          </Button>
          <p className="text-sm text-muted-foreground">Usado para celebrar a ativação de uma conta ou compra de plano.</p>
        </div>
      </DocCard>

      <DocCard title="TipModal">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="default" onClick={() => setTip(true)}>
            <Lightbulb size={16} /> Abrir Tip
          </Button>
          <p className="text-sm text-muted-foreground">Dica contextual com CTA único — útil em onboarding.</p>
        </div>
      </DocCard>

      <AnimatePresence>
        {activation && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm" onClick={() => setActivation(false)}>
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 22 }} onClick={e => e.stopPropagation()}
              className="bg-card rounded-3xl border border-border shadow-elevated max-w-md w-full p-8 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
              <button onClick={() => setActivation(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X size={18} /></button>
              <div className="relative w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary to-info text-primary-foreground flex items-center justify-center mb-5 shadow-glow">
                <Sparkles size={36} />
              </div>
              <h2 className="text-2xl font-display font-black uppercase tracking-tighter mb-2">Conta Ativada!</h2>
              <p className="text-muted-foreground mb-6">A tua conta EVYRA está pronta. Recebeste 100 EVY de bónus de boas-vindas.</p>
              <Button variant="premium" size="lg" className="w-full" onClick={() => { toast.success('Bem-vindo!'); setActivation(false); }}>Começar agora</Button>
            </motion.div>
          </motion.div>
        )}

        {tip && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={() => setTip(false)}>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }} onClick={e => e.stopPropagation()}
              className="bg-card rounded-3xl border border-border shadow-elevated max-w-sm w-full p-6 relative">
              <button onClick={() => setTip(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X size={18} /></button>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-warning/20 text-warning flex items-center justify-center">
                  <Lightbulb size={22} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black uppercase tracking-tight">Dica Pro</h3>
                  <p className="text-sm text-muted-foreground">Completa o teu perfil para aumentar 3× as chances de receber propostas.</p>
                  <Button variant="default" size="sm" onClick={() => setTip(false)}>Entendi</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ───────────────── 5. BLOOM CUSTOM ───────────────── */
const BloomInfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
    <span className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
    <span className="text-sm font-display font-black text-foreground">{value}</span>
  </div>
);

const BloomEmpty = ({ icon: Icon, title, desc, action }: { icon: React.ElementType; title: string; desc: string; action?: string }) => (
  <div className="text-center py-12 px-6">
    <div className="w-20 h-20 mx-auto rounded-3xl bg-muted flex items-center justify-center mb-4">
      <Icon size={36} className="text-muted-foreground" />
    </div>
    <h3 className="text-lg font-display font-black uppercase tracking-tight mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 max-w-xs mx-auto">{desc}</p>
    {action && <Button variant="default" size="sm">{action}</Button>}
  </div>
);

const BloomSectionHeader = ({ title, action }: { title: string; action?: string }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-xs font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-primary pl-3">{title}</h3>
    {action && <button className="text-xs font-display font-bold uppercase tracking-widest text-primary hover:underline">{action}</button>}
  </div>
);

export const UIBloomCustomView = () => (
  <div className="space-y-12 animate-fade-in">
    <SectionHeader title="Bloom Custom" desc="Componentes customizados Bloom: StatBlock, InfoRow, Empty, Loading, SectionHeader." />

    <DocCard title="StatBlock & StatCard">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatBlock label="Cuidadores" value="248" icon={Users} />
        <StatBlock label="Contratos" value="32" icon={FileText} />
        <StatBlock label="Saldo EVY" value="€1.420" icon={Wallet} />
      </div>
    </DocCard>

    <DocCard title="InfoRow">
      <Card className="p-5">
        <BloomInfoRow label="Nome" value="Maria Silva" />
        <BloomInfoRow label="Idade" value="78 anos" />
        <BloomInfoRow label="Plano" value="Premium" />
        <BloomInfoRow label="Cuidador" value="João P." />
      </Card>
    </DocCard>

    <DocCard title="SectionHeader">
      <BloomSectionHeader title="Atividade Recente" action="Ver tudo" />
      <Card className="p-5"><p className="text-sm text-muted-foreground">Conteúdo da secção…</p></Card>
    </DocCard>

    <DocCard title="Empty State">
      <Card className="border-dashed">
        <BloomEmpty icon={Inbox} title="Sem mensagens" desc="Quando alguém te enviar uma mensagem, ela aparecerá aqui." action="Procurar contactos" />
      </Card>
    </DocCard>

    <DocCard title="Loading States">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="animate-spin" size={18} />
          <span className="text-sm">A carregar dados…</span>
        </div>
        <Card className="p-5 space-y-3">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </Card>
        <Card className="p-5 flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-2xl" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </Card>
      </div>
    </DocCard>

    <DocCard title="MotionCard">
      <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: 'spring', damping: 18 }}>
        <Card className="p-6 cursor-pointer hover:border-primary transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center"><Sparkles size={20} /></div>
            <div>
              <div className="font-display font-black uppercase tracking-tight">Card animado</div>
              <div className="text-xs text-muted-foreground">Hover para sentir a física spring</div>
            </div>
          </div>
        </Card>
      </motion.div>
    </DocCard>
  </div>
);

/* ───────────────── 6. STATUS BADGE ───────────────── */
type StatusType =
  | 'pending' | 'active' | 'completed' | 'cancelled' | 'review'
  | 'verified' | 'rejected' | 'expired' | 'draft' | 'paid' | 'refunded' | 'escrow';

type StatusSize = 'sm' | 'md' | 'lg';

const STATUS_MAP: Record<StatusType, { label: string; cls: string; icon?: React.ElementType }> = {
  pending:   { label: 'Pendente',   cls: 'bg-warning/15 text-warning border-warning/30',           icon: Loader2 },
  active:    { label: 'Ativo',      cls: 'bg-info/15 text-info border-info/30',                    icon: Sparkles },
  completed: { label: 'Concluído',  cls: 'bg-success/15 text-success border-success/30',           icon: CheckCircle2 },
  cancelled: { label: 'Cancelado',  cls: 'bg-destructive/15 text-destructive border-destructive/30', icon: X },
  review:    { label: 'Em revisão', cls: 'bg-muted text-foreground border-border',                 icon: Eye },
  verified:  { label: 'Verificado', cls: 'bg-success/15 text-success border-success/30',           icon: ShieldCheck },
  rejected:  { label: 'Rejeitado',  cls: 'bg-destructive/15 text-destructive border-destructive/30', icon: X },
  expired:   { label: 'Expirado',   cls: 'bg-muted text-muted-foreground border-border line-through' },
  draft:     { label: 'Rascunho',   cls: 'bg-secondary/40 text-foreground border-border',          icon: FileText },
  paid:      { label: 'Pago',       cls: 'bg-success/15 text-success border-success/30',           icon: CheckCircle2 },
  refunded:  { label: 'Reembolsado',cls: 'bg-info/15 text-info border-info/30',                    icon: CreditCard },
  escrow:    { label: 'Em Escrow',  cls: 'bg-primary/10 text-primary border-primary/30',           icon: Lock },
};

const SIZE_MAP: Record<StatusSize, string> = {
  sm: 'px-2 py-0.5 text-[9px]',
  md: 'px-3 py-1 text-[10px]',
  lg: 'px-4 py-1.5 text-xs',
};

const StatusBadge = ({
  status, size = 'md', withIcon = false, pulse = false, dotOnly = false,
}: {
  status: StatusType; size?: StatusSize; withIcon?: boolean; pulse?: boolean; dotOnly?: boolean;
}) => {
  const s = STATUS_MAP[status];
  const Icon = s.icon;

  if (dotOnly) {
    return (
      <span className={cn("inline-flex items-center gap-2", s.cls.replace(/bg-\S+/g, '').replace(/border-\S+/g, ''))}>
        <span className="relative flex">
          <span className={cn("w-2 h-2 rounded-full bg-current", pulse && "animate-pulse")} />
          {pulse && <span className="absolute inset-0 w-2 h-2 rounded-full bg-current animate-ping opacity-60" />}
        </span>
        <span className="text-xs font-semibold">{s.label}</span>
      </span>
    );
  }

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border font-display font-black uppercase tracking-widest",
      SIZE_MAP[size],
      s.cls,
    )}>
      {withIcon && Icon ? (
        <Icon size={size === 'lg' ? 14 : 11} className={status === 'pending' ? 'animate-spin' : ''} />
      ) : (
        <span className={cn("w-1.5 h-1.5 rounded-full bg-current", pulse && "animate-pulse")} />
      )}
      {s.label}
    </span>
  );
};

const ALL_STATUSES: StatusType[] = [
  'pending', 'active', 'completed', 'cancelled', 'review',
  'verified', 'rejected', 'expired', 'draft', 'paid', 'refunded', 'escrow',
];

export const UIStatusBadgeView = () => (
  <div className="space-y-12 animate-fade-in">
    <SectionHeader
      title="Status Badges"
      desc="Indicadores de estado para contratos, propostas, KYC, pagamentos e processos."
    />

    <DocCard title="Todas as Variantes">
      <div className="flex flex-wrap gap-3">
        {ALL_STATUSES.map(s => <StatusBadge key={s} status={s} />)}
      </div>
    </DocCard>

    <DocCard title="Com Ícone">
      <div className="flex flex-wrap gap-3">
        {ALL_STATUSES.map(s => <StatusBadge key={s} status={s} withIcon />)}
      </div>
    </DocCard>

    <DocCard title="Tamanhos">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status="active" size="sm" />
        <StatusBadge status="active" size="md" />
        <StatusBadge status="active" size="lg" />
        <span className="mx-3 h-6 w-px bg-border" />
        <StatusBadge status="paid" size="sm" withIcon />
        <StatusBadge status="paid" size="md" withIcon />
        <StatusBadge status="paid" size="lg" withIcon />
      </div>
    </DocCard>

    <DocCard title="Dot-Only (compacto, em listas densas)">
      <div className="flex flex-wrap gap-6">
        <StatusBadge status="active"    dotOnly pulse />
        <StatusBadge status="pending"   dotOnly pulse />
        <StatusBadge status="completed" dotOnly />
        <StatusBadge status="cancelled" dotOnly />
        <StatusBadge status="escrow"    dotOnly pulse />
      </div>
    </DocCard>

    <DocCard title="Animação Pulse (estados em tempo real)">
      <div className="flex flex-wrap gap-3">
        <StatusBadge status="active"  pulse />
        <StatusBadge status="pending" pulse withIcon />
        <StatusBadge status="escrow"  pulse withIcon />
      </div>
    </DocCard>

    <DocCard title="Caso de Uso — Linha de Contratos">
      <div className="space-y-2">
        {[
          { name: 'Contrato #1042 — Maria S.',  s: 'active'    as const, meta: 'Iniciado há 3 dias' },
          { name: 'Proposta #58 — João P.',     s: 'pending'   as const, meta: 'Aguarda resposta' },
          { name: 'Contrato #1031 — Ana C.',    s: 'completed' as const, meta: 'Finalizado 12/04' },
          { name: 'Proposta #54 — Pedro M.',    s: 'cancelled' as const, meta: 'Cancelado pelo cliente' },
          { name: 'Pagamento #882 — Escrow',    s: 'escrow'    as const, meta: '€450 retidos' },
          { name: 'Pagamento #871 — Salário',   s: 'paid'      as const, meta: '€1 200 transferidos' },
        ].map(r => (
          <Card key={r.name} className="p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.meta}</div>
            </div>
            <StatusBadge status={r.s} withIcon />
          </Card>
        ))}
      </div>
    </DocCard>

    <DocCard title="Caso de Uso — KYC / Verificação">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { name: 'Documento de Identidade', s: 'verified' as const },
          { name: 'Comprovativo de Morada',  s: 'review'   as const },
          { name: 'Certificado Profissional',s: 'rejected' as const },
        ].map(k => (
          <Card key={k.name} className="p-4 space-y-2">
            <div className="text-sm font-medium">{k.name}</div>
            <StatusBadge status={k.s} withIcon size="sm" />
          </Card>
        ))}
      </div>
    </DocCard>

    <DocCard title="Uso (snippet)">
      <pre className="text-xs bg-muted p-4 rounded-xl overflow-x-auto font-mono leading-relaxed">{`<StatusBadge status="active" />
<StatusBadge status="paid" withIcon size="lg" />
<StatusBadge status="escrow" pulse withIcon />
<StatusBadge status="active" dotOnly pulse />`}</pre>
    </DocCard>
  </div>
);

/* ───────────────── 7. SPECIAL INPUTS ───────────────── */
const PasswordInput = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input type={show ? 'text' : 'password'} placeholder="Palavra-passe" className="pl-9 pr-10" />
      <button onClick={() => setShow(s => !s)} type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
};

export const UISpecialInputsView = () => {
  const [file, setFile] = useState<File | null>(null);
  const [lang, setLang] = useState('pt');

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Inputs Especializados" desc="Email, password (toggle), search, file upload e language selector." />

      <DocCard title="Email Input">
        <div className="relative max-w-md">
          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input type="email" placeholder="nome@evyra.pt" className="pl-9" />
        </div>
      </DocCard>

      <DocCard title="Password Input">
        <div className="max-w-md"><PasswordInput /></div>
      </DocCard>

      <DocCard title="Search Input">
        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Procurar cuidadores…" className="pl-9 pr-20" />
          <Button size="sm" variant="default" className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7">Buscar</Button>
        </div>
      </DocCard>

      <DocCard title="File Upload">
        <label className="block max-w-md">
          <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary hover:bg-accent/30 transition-all cursor-pointer">
            <Upload size={28} className="mx-auto text-muted-foreground mb-2" />
            <div className="text-sm font-display font-bold">{file ? file.name : 'Clica para fazer upload'}</div>
            <div className="text-xs text-muted-foreground mt-1">PDF, JPG ou PNG · até 5MB</div>
            <input type="file" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) { setFile(f); toast.success('Ficheiro selecionado'); } }} />
          </div>
        </label>
      </DocCard>

      <DocCard title="Language Selector">
        <div className="flex gap-2 flex-wrap">
          {[
            { c: 'pt', l: 'Português', f: '🇵🇹' },
            { c: 'en', l: 'English',   f: '🇬🇧' },
            { c: 'es', l: 'Español',   f: '🇪🇸' },
            { c: 'fr', l: 'Français',  f: '🇫🇷' },
          ].map(({ c, l, f }) => (
            <button key={c} onClick={() => setLang(c)} className={cn(
              "px-4 py-2.5 rounded-2xl border-2 flex items-center gap-2 text-sm font-display font-bold transition-all",
              lang === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"
            )}>
              <span className="text-lg">{f}</span> {l}
              {lang === c && <CheckCircle2 size={14} />}
            </button>
          ))}
        </div>
      </DocCard>

      <DocCard title="Validação (estados)">
        <div className="space-y-3 max-w-md">
          <div>
            <Input placeholder="Válido" className="border-success focus-visible:ring-success" defaultValue="ola@evyra.pt" />
            <p className="text-[10px] text-success mt-1 font-display font-bold uppercase tracking-widest">✓ Email válido</p>
          </div>
          <div>
            <Input placeholder="Erro" className="border-destructive focus-visible:ring-destructive" defaultValue="email-invalido" />
            <p className="text-[10px] text-destructive mt-1 font-display font-bold uppercase tracking-widest">✗ Formato inválido</p>
          </div>
        </div>
      </DocCard>
    </div>
  );
};
