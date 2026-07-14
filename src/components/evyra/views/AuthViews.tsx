import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye, EyeOff, Loader2, Mail, Lock, Heart, Users, Check, User, ArrowLeft,
  ArrowRight, ShieldCheck, Sparkles, Phone, CheckCircle2, AlertCircle,
} from 'lucide-react';
import { toast } from 'sonner';

/* ============================================================
   Evyra Auth — organic green palette (careapp-aligned)
   Mint green #5AE4A0 on deep moss black #0D110E.
   Two-column split layout (brand panel + form panel),
   with trust signals, validation, password strength,
   and a clearer multi-step register flow.
   ============================================================ */

const EvyraMark = ({ size = 44 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="EVYRA">
    <path d="M32 6a26 26 0 1 0 22.5 39H46a18 18 0 1 1 0-26h8.5A26 26 0 0 0 32 6Z" fill="#5AE4A0"/>
    <path d="M14 34c4-6 8-6 12 0s8 6 12 0 8-6 12 0" stroke="#5AE4A0" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
  </svg>
);

/* Reusable floating brand panel (left side on desktop) */
const BrandPanel = () => (
  <div className="hidden lg:flex lg:flex-col lg:justify-between relative overflow-hidden p-10 xl:p-14">
    {/* ambient orbs */}
    <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30"
         style={{ background: 'radial-gradient(circle, #5AE4A0 0%, transparent 70%)' }} />
    <div className="absolute -bottom-32 -left-20 w-[24rem] h-[24rem] rounded-full blur-3xl opacity-20"
         style={{ background: 'radial-gradient(circle, #C9A96E 0%, transparent 70%)' }} />

    {/* Logo */}
    <div className="relative flex items-center gap-3">
      <EvyraMark size={44} />
      <div>
        <div className="text-2xl font-display font-black tracking-tight text-foreground leading-none">
          Evyra
        </div>
        <div className="text-[11px] text-primary font-medium tracking-wide italic mt-0.5">
          Saúde que vem até si
        </div>
      </div>
    </div>

    {/* Hero value prop */}
    <div className="relative space-y-6 max-w-md">
      <h2 className="text-3xl xl:text-4xl font-display font-bold text-foreground leading-tight">
        Cuidados de saúde ao domicílio,{' '}
        <span className="text-primary">com confiança.</span>
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        A plataforma que liga famílias a profissionais de saúde verificados.
        Pagamentos seguros em escrow, contratos transparentes, apoio dedicado.
      </p>
      <ul className="space-y-3">
        {[
          { icon: ShieldCheck, text: 'Profissionais verificados com KYC' },
          { icon: Heart,       text: 'Cuidado humanizado e personalizado' },
          { icon: CheckCircle2, text: 'Pagamentos protegidos em escrow' },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-primary" />
            </span>
            <span className="text-sm text-foreground/80">{text}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Footer quote / stat */}
    <div className="relative">
      <div className="border-l-2 border-primary/40 pl-4">
        <p className="text-sm text-foreground/70 italic leading-relaxed">
          “Encontrei uma cuidadora excepcional para a minha mãe em menos de 48 horas.”
        </p>
        <p className="text-xs text-muted-foreground mt-2">— Família Evyra, Lisboa</p>
      </div>
    </div>
  </div>
);

/* Reusable input field */
type FieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ElementType;
  rightSlot?: React.ReactNode;
  error?: string;
  autoComplete?: string;
};

const Field = ({ id, label, type = 'text', value, onChange, placeholder, icon: Icon, rightSlot, error, autoComplete }: FieldProps) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-xs font-display font-bold tracking-wider text-foreground/70">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} ${rightSlot ? 'pr-12' : 'pr-4'} py-3 bg-card border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${
          error ? 'border-destructive/60 focus:ring-destructive/30 focus:border-destructive' : 'border-border'
        }`}
      />
      {rightSlot && <div className="absolute right-2 top-1/2 -translate-y-1/2">{rightSlot}</div>}
    </div>
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 text-xs text-destructive"
        >
          <AlertCircle size={12} className="shrink-0" /> {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* Password strength meter */
const PasswordStrength = ({ password }: { password: string }) => {
  const { score, label, color } = useMemo(() => {
    if (!password) return { score: 0, label: '', color: '' };
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) s++;
    if (/\d/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    const map = [
      { label: 'Muito fraca', color: 'bg-destructive' },
      { label: 'Fraca',       color: 'bg-destructive' },
      { label: 'Razoável',    color: 'bg-warning' },
      { label: 'Boa',         color: 'bg-primary' },
      { label: 'Forte',       color: 'bg-primary' },
    ];
    return { score: s, ...map[s] };
  }, [password]);

  if (!password) return null;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 flex gap-1">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < score ? color : 'bg-border'}`} />
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground font-medium w-16 text-right">{label}</span>
    </div>
  );
};

/* ============================================================
   LOGIN
   ============================================================ */
export const LoginView = ({
  onNavigate,
  onSubmit,
}: {
  onNavigate?: (v: string) => void;
  onSubmit?: (email: string, password: string) => Promise<void>;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!email) e.email = 'Indique o seu email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Email inválido';
    if (!password) e.password = 'Indique a sua palavra-passe';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(email, password);
      } else {
        await new Promise(r => setTimeout(r, 1200));
        toast.success('Sessão iniciada com sucesso!');
        onNavigate?.('dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Email ou palavra-passe incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background grid lg:grid-cols-2">
      <BrandPanel />

      {/* Form side */}
      <div className="flex items-center justify-center px-5 py-10 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <EvyraMark size={40} />
            <div>
              <div className="text-xl font-display font-black tracking-tight text-foreground leading-none">Evyra</div>
              <div className="text-[10px] text-primary font-medium italic">Saúde que vem até si</div>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-1 mb-8">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Bem-vindo de volta</h1>
            <p className="text-sm text-muted-foreground">Inicie sessão para continuar na Evyra.</p>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={() => toast.info('Autenticação Google em breve.')}
            className="w-full flex items-center justify-center gap-3 py-3 bg-card hover:bg-secondary border border-border rounded-xl transition-colors mb-5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-medium text-foreground">Continuar com Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">ou com email</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field
              id="login-email"
              label="Email"
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: undefined })); }}
              placeholder="o.seu@email.pt"
              icon={Mail}
              error={errors.email}
              autoComplete="email"
            />
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="login-password" className="text-xs font-display font-bold tracking-wider text-foreground/70">
                  Palavra-passe
                </label>
                <button type="button" onClick={() => toast.info('Link de recuperação enviado para o email.')}
                  className="text-xs text-primary font-medium hover:underline">
                  Esqueceu-se?
                </button>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  id="login-password"
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); if (errors.password) setErrors(p => ({ ...p, password: undefined })); }}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  aria-invalid={!!errors.password}
                  className={`w-full pl-10 pr-12 py-3 bg-card border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${
                    errors.password ? 'border-destructive/60' : 'border-border'
                  }`}
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label={showPass ? 'Ocultar palavra-passe' : 'Mostrar palavra-passe'}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="flex items-center gap-1.5 text-xs text-destructive">
                  <AlertCircle size={12} className="shrink-0" /> {errors.password}
                </p>
              )}
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              {loading ? <><Loader2 size={18} className="animate-spin" /> A iniciar sessão…</>
                       : <>Entrar <ArrowRight size={18} /></>}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Ainda não tem conta?{' '}
              <button onClick={() => onNavigate?.('register')} className="text-primary font-semibold hover:underline">
                Criar conta
              </button>
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
              <ShieldCheck size={13} className="text-primary" />
              <span>Ligação segura · Dados protegidos · RGPD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ============================================================
   REGISTER
   ============================================================ */
type Role = 'FAMILY' | 'CAREGIVER';

const StepIndicator = ({ step }: { step: number }) => {
  const steps = [
    { n: 1, label: 'Tipo de conta' },
    { n: 2, label: 'Os seus dados' },
  ];
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {steps.map((s, i) => (
        <React.Fragment key={s.n}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold transition-all ${
              s.n < step ? 'bg-primary text-primary-foreground'
              : s.n === step ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
              : 'bg-card text-muted-foreground border border-border'
            }`}>
              {s.n < step ? <Check size={14} /> : s.n}
            </div>
            <span className={`hidden sm:inline text-xs font-medium ${s.n <= step ? 'text-foreground' : 'text-muted-foreground'}`}>
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-8 sm:w-12 h-0.5 rounded-full transition-colors ${s.n < step ? 'bg-primary' : 'bg-border'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const RegisterView = ({
  onNavigate,
  onSubmitRegister,
}: {
  onNavigate?: (v: string) => void;
  onSubmitRegister?: (data: { name: string; email: string; phone: string; password: string; role: 'FAMILY' | 'CAREGIVER' }) => Promise<void>;
}) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role | null>(null);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(p => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: '' }));
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Indique o seu nome';
    if (!form.email) e.email = 'Indique o seu email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido';
    if (!form.phone.trim()) e.phone = 'Indique o seu telemóvel';
    else if (!/^[\d\s+()-]{9,}$/.test(form.phone)) e.phone = 'Telemóvel inválido';
    if (!form.password) e.password = 'Indique uma palavra-passe';
    else if (form.password.length < 8) e.password = 'Mínimo 8 caracteres';
    if (form.password !== form.confirm) e.confirm = 'As palavras-passe não coincidem';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) { toast.error('Aceite os Termos e a Política de Privacidade.'); return; }
    if (!validateStep2()) return;
    if (!role) { toast.error('Selecione o tipo de conta.'); setStep(1); return; }
    setLoading(true);
    try {
      if (onSubmitRegister) {
        await onSubmitRegister({ name: form.name, email: form.email, phone: form.phone, password: form.password, role });
      } else {
        await new Promise(r => setTimeout(r, 1200));
        toast.success('Conta criada com sucesso!');
        onNavigate?.(role === 'FAMILY' ? 'family-setup' : 'profile-setup');
      }
    } catch (error) {
      console.error('Register error:', error);
      toast.error('Não foi possível criar a conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const roles: { id: Role; icon: React.ElementType; title: string; desc: string; tag: string }[] = [
    { id: 'FAMILY',   icon: User,  title: 'Procuro Cuidados',         desc: 'Procuro um profissional de saúde que atenda em casa.', tag: 'Ativação €35' },
    { id: 'CAREGIVER',icon: Heart, title: 'Profissional de Saúde',    desc: 'Sou profissional de saúde que atende ao domicílio.',  tag: 'Gratuito' },
  ];

  return (
    <div className="min-h-screen bg-background grid lg:grid-cols-2">
      <BrandPanel />

      <div className="flex items-center justify-center px-5 py-10 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-6">
            <EvyraMark size={40} />
            <div>
              <div className="text-xl font-display font-black tracking-tight text-foreground leading-none">Evyra</div>
              <div className="text-[10px] text-primary font-medium italic">Saúde que vem até si</div>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-1 mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Criar a sua conta</h1>
            <p className="text-sm text-muted-foreground">Leva menos de 2 minutos.</p>
          </div>

          <StepIndicator step={step} />

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {/* STEP 1 — Role */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <h2 className="text-base font-display font-bold text-foreground">Como pretende usar a Evyra?</h2>
                    <p className="text-xs text-muted-foreground">Escolha o tipo de conta. Poderá alterar depois.</p>
                  </div>

                  <div className="space-y-3">
                    {roles.map(r => {
                      const selected = role === r.id;
                      return (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setRole(r.id)}
                          className={`w-full flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all text-left ${
                            selected ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                                     : 'border-border hover:border-primary/40 hover:bg-secondary'
                          }`}
                        >
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                            selected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                          }`}>
                            <r.icon size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-display font-bold text-foreground text-sm">{r.title}</span>
                              <span className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                r.id === 'CAREGIVER' ? 'bg-primary/15 text-primary' : 'bg-warning/15 text-warning'
                              }`}>{r.tag}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                            selected ? 'border-primary bg-primary' : 'border-border'
                          }`}>
                            {selected && <Check size={12} className="text-primary-foreground" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => role ? setStep(2) : toast.error('Selecione um tipo de conta.')}
                    disabled={!role}
                    className="w-full py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Continuar <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* STEP 2 — Form */}
              {step === 2 && (
                <motion.form
                  key="step2"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  className="space-y-4"
                >
                  {/* Selected role chip */}
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                    {role === 'FAMILY' ? <Users size={16} className="text-primary" /> : <Heart size={16} className="text-primary" />}
                    <span className="font-display font-bold text-sm text-foreground flex-1">
                      {role === 'FAMILY' ? 'Procuro Cuidados' : 'Profissional de Saúde'}
                    </span>
                    <button type="button" onClick={() => setStep(1)}
                      className="text-[11px] font-display font-bold text-primary uppercase tracking-wider hover:underline flex items-center gap-1">
                      <ArrowLeft size={12} /> Alterar
                    </button>
                  </div>

                  <Field id="reg-name" label="Nome completo" value={form.name} onChange={set('name')} placeholder="Maria Silva" icon={User} error={errors.name} autoComplete="name" />
                  <Field id="reg-email" label="Email" type="email" value={form.email} onChange={set('email')} placeholder="o.seu@email.pt" icon={Mail} error={errors.email} autoComplete="email" />
                  <Field id="reg-phone" label="Telemóvel" type="tel" value={form.phone} onChange={set('phone')} placeholder="+351 912 345 678" icon={Phone} error={errors.phone} autoComplete="tel" />

                  <div className="space-y-1.5">
                    <label htmlFor="reg-password" className="block text-xs font-display font-bold tracking-wider text-foreground/70">
                      Palavra-passe
                    </label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      <input
                        id="reg-password"
                        type={showPass ? 'text' : 'password'}
                        value={form.password}
                        onChange={set('password')}
                        placeholder="Mínimo 8 caracteres"
                        autoComplete="new-password"
                        className="w-full pl-10 pr-12 py-3 bg-card border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                      <button type="button" onClick={() => setShowPass(!showPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label={showPass ? 'Ocultar' : 'Mostrar'}>
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    <PasswordStrength password={form.password} />
                    {errors.password && (
                      <p className="flex items-center gap-1.5 text-xs text-destructive">
                        <AlertCircle size={12} className="shrink-0" /> {errors.password}
                      </p>
                    )}
                  </div>

                  <Field id="reg-confirm" label="Confirmar palavra-passe" type="password" value={form.confirm} onChange={set('confirm')} placeholder="Repita a palavra-passe" icon={Lock} error={errors.confirm} autoComplete="new-password" />

                  {/* Role-specific info */}
                  {role === 'FAMILY' && (
                    <div className="p-3.5 bg-warning/10 border border-warning/20 rounded-xl flex items-start gap-3">
                      <Sparkles size={14} className="text-warning mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-display font-bold text-foreground">Ativação única — €35</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Inclui verificação KYC, acesso completo e suporte dedicado.</p>
                      </div>
                    </div>
                  )}
                  {role === 'CAREGIVER' && (
                    <div className="p-3.5 bg-primary/10 border border-primary/20 rounded-xl flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-display font-bold text-primary">Registo gratuito</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Sem taxa. Crie o perfil e comece a receber propostas.</p>
                      </div>
                    </div>
                  )}

                  {/* Terms */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <button type="button" onClick={() => setAcceptTerms(!acceptTerms)}
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all shrink-0 ${
                        acceptTerms ? 'bg-primary border-primary' : 'border-border hover:border-primary/50'
                      }`}
                      aria-pressed={acceptTerms}>
                      {acceptTerms && <Check size={11} className="text-primary-foreground" />}
                    </button>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Aceito os <button type="button" onClick={e => { e.stopPropagation(); toast.info('Termos de Utilização'); }} className="text-primary font-medium hover:underline">Termos</button> e a <button type="button" onClick={e => { e.stopPropagation(); toast.info('Política de Privacidade'); }} className="text-primary font-medium hover:underline">Política de Privacidade</button>.
                    </span>
                  </label>

                  <div className="flex gap-3 pt-1">
                    <button type="button" onClick={() => setStep(1)}
                      className="px-4 py-3.5 bg-card hover:bg-secondary border border-border text-muted-foreground font-bold rounded-xl transition-colors"
                      aria-label="Voltar">
                      <ArrowLeft size={18} />
                    </button>
                    <button type="submit" disabled={loading || !acceptTerms}
                      className="flex-1 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                      {loading ? <><Loader2 size={18} className="animate-spin" /> A criar conta…</> : 'Criar conta'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border space-y-3">
            <p className="text-center text-sm text-muted-foreground">
              Já tem conta?{' '}
              <button onClick={() => onNavigate?.('login')} className="text-primary font-semibold hover:underline">Iniciar sessão</button>
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
              <ShieldCheck size={13} className="text-primary" />
              <span>Ligação segura · Dados protegidos · RGPD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
