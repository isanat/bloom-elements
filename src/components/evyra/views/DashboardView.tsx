import React, { useState } from 'react';
import {
  FileText, Clock, Star, Users, Search, ChevronRight,
  ShieldCheck, Wallet, ArrowUp, ArrowDown, CheckCircle,
  AlertCircle, Heart, Scale, Receipt, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeader, StatBlock, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

// Mock data
const mockStats = {
  caregiver: { activeContracts: 3, totalHours: 248, rating: 4.9, totalReviews: 27 },
  family: { activeContracts: 1, totalHours: 96, rating: 5.0, totalReviews: 4 },
};

const mockActivity = [
  { type: 'credit', description: 'Pagamento recebido — Contrato #1042', amount: 320, date: '2026-04-14' },
  { type: 'debit', description: 'Comissão plataforma', amount: 32, date: '2026-04-14' },
  { type: 'credit', description: 'Pagamento recebido — Contrato #1038', amount: 180, date: '2026-04-12' },
  { type: 'credit', description: 'Bónus avaliação 5 estrelas', amount: 10, date: '2026-04-11' },
  { type: 'debit', description: 'Comissão plataforma', amount: 18, date: '2026-04-10' },
];

const caregiverBenefits = [
  { title: 'Pagamento Garantido', sub: 'Receba pontualmente', icon: Wallet },
  { title: 'Perfil Verificado', sub: 'Mais famílias confiam', icon: ShieldCheck },
  { title: 'Reputação Pública', sub: 'Avaliações verificáveis', icon: Star },
  { title: 'Proteção Jurídica', sub: 'Contrato formal', icon: Scale },
];

const familyBenefits = [
  { title: 'Cuidadores Verificados', sub: 'KYC e antecedentes', icon: ShieldCheck },
  { title: 'Contratos Jurídicos', sub: 'Assinatura digital', icon: FileText },
  { title: 'Pagamento Seguro', sub: 'Proteção financeira', icon: Wallet },
  { title: 'Recibos Fiscais', sub: 'Válidos para IRS', icon: Receipt },
];

const pendingStepsCuidador = [
  { label: 'Completar verificação KYC', href: '#', icon: ShieldCheck },
];

const pendingStepsFamily = [
  { label: 'Ativar conta (pagamento)', href: '#', icon: Wallet },
  { label: 'Completar verificação KYC', href: '#', icon: ShieldCheck },
  { label: 'Completar perfil do familiar', href: '#', icon: Users },
];

export const DashboardView = () => {
  const [role, setRole] = useState<'caregiver' | 'family'>('caregiver');
  const stats = role === 'caregiver' ? mockStats.caregiver : mockStats.family;
  const benefits = role === 'caregiver' ? caregiverBenefits : familyBenefits;
  const pendingSteps = role === 'caregiver' ? pendingStepsCuidador : pendingStepsFamily;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Role Toggle - for demo only */}
      <div className="flex items-center gap-3">
        <SectionHeader title="Dashboard" desc="Visão geral da sua atividade na plataforma." />
      </div>

      <div className="flex gap-2">
        {(['caregiver', 'family'] as const).map(r => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-4 py-2 rounded-2xl text-[10px] font-display font-bold uppercase tracking-widest transition-all ${
              role === r
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card border border-border text-muted-foreground hover:border-primary/40'
            }`}
          >
            {r === 'caregiver' ? '👨‍⚕️ Cuidador' : '👨‍👩‍👧 Família'}
          </button>
        ))}
      </div>

      {/* Welcome */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none uppercase">
                Olá, {role === 'caregiver' ? 'Helena' : 'João'}
              </h2>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                {role === 'caregiver' ? 'Enfermeira Especializada' : 'Gestor Familiar'}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-display font-bold uppercase tracking-widest bg-success/10 text-success border border-success/30 w-fit">
              <CheckCircle size={12} /> Conta Ativa
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-5">
          <StatBlock label="Contratos Ativos" value={String(stats.activeContracts)} icon={FileText} colorClass="text-primary" />
          <StatBlock label="Horas Totais" value={`${stats.totalHours}h`} icon={Clock} colorClass="text-warning" />
          <StatBlock label="Avaliação" value={String(stats.rating)} icon={Star} colorClass="text-info" />
          <StatBlock label="Avaliações" value={String(stats.totalReviews)} icon={Users} colorClass="text-success" />
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          {role === 'family' ? (
            <div
              className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group"
              onClick={() => toast.info('Navegar para pesquisa de cuidadores')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Search size={20} />
                </div>
                <div>
                  <p className="font-display font-black text-foreground text-sm uppercase">Procurar Cuidadores</p>
                  <p className="text-[10px] text-muted-foreground font-medium">Encontrar profissional ideal</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group"
              onClick={() => toast.info('Navegar para propostas')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-display font-black text-foreground text-sm uppercase">Propostas</p>
                  <p className="text-[10px] text-muted-foreground font-medium">Solicitações recebidas</p>
                </div>
              </div>
            </div>
          )}

          <div
            className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group"
            onClick={() => toast.info('Navegar para contratos')}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center text-success group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>
              <div>
                <p className="font-display font-black text-foreground text-sm uppercase">Contratos</p>
                <p className="text-[10px] text-muted-foreground font-medium">Ver todos os contratos</p>
              </div>
            </div>
          </div>

          <div
            className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group"
            onClick={() => toast.info('Navegar para carteira')}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-warning/10 flex items-center justify-center text-warning group-hover:scale-110 transition-transform">
                <Wallet size={20} />
              </div>
              <div>
                <p className="font-display font-black text-foreground text-sm uppercase">Carteira</p>
                <p className="text-[10px] text-muted-foreground font-medium">Saldo e movimentos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pending Steps */}
        {pendingSteps.length > 0 && (
          <motion.div variants={itemVariants} className="mt-5">
            <DocCard title="Próximos Passos">
              <div className="space-y-3">
                {pendingSteps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-secondary rounded-2xl border border-border/50 hover:border-warning/30 transition-all cursor-pointer group"
                    onClick={() => toast.info(step.label)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-warning/10 rounded-xl flex items-center justify-center text-warning">
                        <step.icon size={16} />
                      </div>
                      <span className="text-sm font-display font-bold text-foreground">{step.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-warning transition-colors" />
                  </div>
                ))}
              </div>
            </DocCard>
          </motion.div>
        )}

        {/* Benefits */}
        <motion.div variants={itemVariants} className="mt-5">
          <DocCard title="Benefícios da Plataforma">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {benefits.map((item, i) => (
                <div key={i} className="bg-secondary rounded-2xl p-4 sm:p-5 text-center hover:bg-primary/5 transition-all group">
                  <div className="w-10 h-10 rounded-2xl bg-card flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform border border-border">
                    <item.icon size={18} />
                  </div>
                  <p className="text-xs font-display font-black text-foreground uppercase">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground font-medium mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </DocCard>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="mt-5">
          <DocCard title="Atividade Recente">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Últimos movimentos</p>
              <Button variant="link" size="sm" onClick={() => toast.info('Ver todo o histórico')}>Ver Todos</Button>
            </div>
            <div className="space-y-3">
              {mockActivity.map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-3 sm:p-4 bg-secondary rounded-2xl border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      activity.type === 'credit' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                    }`}>
                      {activity.type === 'credit' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    </div>
                    <div>
                      <p className="text-sm font-display font-bold text-foreground">{activity.description}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">
                        {new Date(activity.date).toLocaleDateString('pt-PT')}
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm font-display font-black ${
                    activity.type === 'credit' ? 'text-success' : 'text-destructive'
                  }`}>
                    {activity.type === 'credit' ? '+' : '-'}{activity.amount}€
                  </span>
                </div>
              ))}
            </div>
          </DocCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardView;
