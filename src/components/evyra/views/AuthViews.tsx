import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, Mail, Lock, Heart, Users, Check, User } from 'lucide-react';
import { toast } from 'sonner';

const EvyraMark = ({ size = 56 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="EVYRA">
    <path d="M32 6a26 26 0 1 0 22.5 39H46a18 18 0 1 1 0-26h8.5A26 26 0 0 0 32 6Z" fill="#00E6C3"/>
    <path d="M14 34c4-6 8-6 12 0s8 6 12 0 8-6 12 0" stroke="#00E6C3" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
  </svg>
);

const LogoHeader = () => (
  <div className="flex items-center justify-center gap-3">
    <EvyraMark size={56} />
    <div className="text-left">
      <h1 className="text-4xl font-display font-black uppercase tracking-tighter text-white leading-none">EVYRA</h1>
      <p className="text-[11px] text-[#00E6C3] font-medium tracking-wide mt-1 italic">Saúde que vem até si</p>
    </div>
  </div>
);

// ── LOGIN ────────────────────────────────────────────────────
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(email, password);
      } else {
        await new Promise(r => setTimeout(r, 1200));
        toast.success('Sessão iniciada!');
        onNavigate?.('dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-5 py-10">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-3">
          <LogoHeader />
          <div>
            <h1 className="text-3xl font-display font-black uppercase tracking-tighter text-white">EVYRA</h1>
            <p className="text-sm text-zinc-400 font-medium mt-1 italic">Saúde que vem até si</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-display font-black uppercase tracking-tighter text-white">Entrar na Conta</h2>
            <p className="text-sm text-zinc-400 mt-1">Bem-vindo de volta</p>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={() => toast.info('Google login...')}
            className="w-full flex items-center justify-center gap-3 py-3 bg-[#2a2a2a] hover:bg-[#333] border border-zinc-700 rounded-xl transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-white text-base font-medium">Continuar com Google</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-700" />
            <span className="text-xs text-zinc-500 uppercase">ou</span>
            <div className="flex-1 h-px bg-zinc-700" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@evyra.pt" required
                  className="w-full pl-10 pr-4 py-3.5 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Palavra-passe</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••••••••••" required
                  className="w-full pl-10 pr-12 py-3.5 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="button" className="text-sm text-[#00E6C3] font-medium hover:underline">Esqueci a palavra-passe</button>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-[#00E6C3] hover:bg-[#00c9a7] text-black font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
              {loading ? <><Loader2 size={18} className="animate-spin mr-2" />A entrar...</> : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-400">
            Sem conta?{' '}
            <button onClick={() => onNavigate?.('register')} className="text-[#00E6C3] font-bold hover:underline">Registar</button>
          </p>
        </div>
      </div>
    </div>
  );
};

// ── REGISTER ─────────────────────────────────────────────────
type Role = 'FAMILY' | 'CAREGIVER';

export const RegisterView = ({
  onNavigate,
  onSubmitRegister,
}: {
  onNavigate?: (v: string) => void;
  onSubmitRegister?: (data: { name: string; email: string; phone: string; password: string; role: 'FAMILY' | 'CAREGIVER' }) => Promise<void>;
}) => {
  const [step, setStep]       = useState(1);
  const [role, setRole]       = useState<Role>('FAMILY');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [form, setForm]       = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) { toast.error('Aceite os termos para continuar'); return; }
    if (form.password !== form.confirm) { toast.error('As palavras-passe não coincidem'); return; }
    setLoading(true);
    try {
      if (onSubmitRegister) {
        await onSubmitRegister({ name: form.name, email: form.email, phone: form.phone, password: form.password, role });
      } else {
        await new Promise(r => setTimeout(r, 1200));
        toast.success('Conta criada!');
        onNavigate?.(role === 'FAMILY' ? 'family-setup' : 'profile-setup');
      }
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      setLoading(false);
    }
  };

  const roles: { id: Role; icon: React.ElementType; title: string; desc: string; tag: string }[] = [
    { id: 'FAMILY', icon: User, title: 'Procuro Cuidados', desc: 'Procuro um profissional de saúde que atenda em casa', tag: 'GRÁTIS ATIVAÇÃO' },
    { id: 'CAREGIVER', icon: Heart, title: 'Profissional de Saúde', desc: 'Sou profissional de saúde que atende ao domicílio', tag: 'GRÁTUITO' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-5 py-10">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center space-y-3">
          <LogoHeader />
          <h1 className="text-3xl font-display font-black uppercase tracking-tighter text-white">Criar Conta</h1>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3">
          {[1, 2].map(s => (
            <React.Fragment key={s}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-display font-black transition-all ${s <= step ? 'bg-[#00E6C3] text-black shadow-lg shadow-[#00E6C3]/20' : 'bg-[#2a2a2a] text-zinc-400 border border-zinc-700'}`}>
                {s < step ? <Check size={16} /> : s}
              </div>
              {s < 2 && <div className={`w-16 h-0.5 rounded-full transition-all ${s < step ? 'bg-[#00E6C3]' : 'bg-zinc-700'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 space-y-6">
          {/* Step 1: Role */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-display font-black uppercase tracking-tighter text-white">Como pretende utilizar a plataforma?</h2>
                <p className="text-sm text-zinc-400 mt-1">Escolha o tipo de conta a criar</p>
              </div>
              <div className="space-y-3">
                {roles.map(r => (
                  <label key={r.id} onClick={() => setRole(r.id)}
                    className={`flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all ${role === r.id ? 'border-[#00E6C3] bg-[#00E6C3]/5' : 'border-zinc-700 hover:border-zinc-500'}`}>
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${role === r.id ? 'bg-[#00E6C3] text-black' : 'bg-[#2a2a2a] text-zinc-400'}`}>
                      <r.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display font-black text-white text-sm uppercase">{r.title}</span>
                        <span className="text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#2a2a2a] text-zinc-300">{r.tag}</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${role === r.id ? 'border-[#00E6C3] bg-[#00E6C3]' : 'border-zinc-600'}`}>
                      {role === r.id && <Check size={12} className="text-black" />}
                    </div>
                  </label>
                ))}
              </div>
              <button onClick={() => setStep(2)}
                className="w-full py-3.5 bg-[#00E6C3] hover:bg-[#00c9a7] text-black font-bold text-lg rounded-xl transition-colors">
                Continuar
              </button>
            </div>
          )}

          {/* Step 2: Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-3 p-3.5 bg-[#2a2a2a] rounded-xl">
                {role === 'FAMILY' ? <Users size={16} className="text-zinc-400" /> : <Heart size={16} className="text-zinc-400" />}
                <span className="font-display font-bold text-sm text-white">{role === 'FAMILY' ? 'Procuro Cuidados' : 'Profissional de Saúde'}</span>
                <button type="button" onClick={() => setStep(1)} className="ml-auto text-[10px] font-display font-black text-[#00E6C3] uppercase tracking-widest hover:underline">Alterar</button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Nome Completo</label>
                <input type="text" value={form.name} onChange={set('name')} placeholder="Nome completo"
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Email</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="email@exemplo.com"
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Telemóvel</label>
                <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+351 912 345 678"
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Palavra-passe</label>
                <div className="relative">
                  <input type={showPass ? 'text' : 'password'} value={form.password} onChange={set('password')} placeholder="••••••••"
                    className="w-full px-4 py-3.5 pr-12 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors">
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-black uppercase tracking-widest text-zinc-400">Confirmar Palavra-passe</label>
                <input type="password" value={form.confirm} onChange={set('confirm')} placeholder="••••••••"
                  className="w-full px-4 py-3.5 bg-[#2a2a2a] border border-zinc-700 rounded-xl text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00E6C3]/30 focus:border-[#00E6C3] transition-all" />
              </div>

              {role === 'FAMILY' && (
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-xs font-display font-black text-white uppercase">Taxa de Ativação — €35</p>
                  <p className="text-xs text-zinc-400 mt-1">Taxa única para acesso completo, verificação KYC e suporte dedicado.</p>
                </div>
              )}
              {role === 'CAREGIVER' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3">
                  <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-display font-black text-emerald-400 uppercase">Registo Gratuito</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Sem taxa de ativação. Crie o perfil e comece a receber propostas.</p>
                  </div>
                </div>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <div onClick={() => setAcceptTerms(!acceptTerms)} className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all shrink-0 ${acceptTerms ? 'bg-[#00E6C3] border-[#00E6C3]' : 'border-zinc-600'}`}>
                  {acceptTerms && <Check size={11} className="text-black" />}
                </div>
                <span className="text-xs text-zinc-400 leading-relaxed">Aceito os <button type="button" className="text-[#00E6C3] font-medium hover:underline">Termos</button> e a <button type="button" className="text-[#00E6C3] font-medium hover:underline">Política de Privacidade</button></span>
              </label>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)}
                  className="px-5 py-3.5 bg-[#2a2a2a] hover:bg-[#333] border border-zinc-700 text-zinc-300 font-bold rounded-xl transition-colors">
                  ←
                </button>
                <button type="submit" disabled={loading || !acceptTerms}
                  className="flex-1 py-3.5 bg-[#00E6C3] hover:bg-[#00c9a7] text-black font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                  {loading ? <><Loader2 size={16} className="animate-spin mr-2"/>A criar...</> : 'Criar Conta'}
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-zinc-400">
          Já tem conta?{' '}
          <button onClick={() => onNavigate?.('login')} className="text-[#00E6C3] font-bold hover:underline">Entrar</button>
        </p>
      </div>
    </div>
  );
};
