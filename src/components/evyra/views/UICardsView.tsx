import React from 'react';
import { Star, ShieldCheck, MapPin, Award, Heart, ArrowRight, Clock, Users, TrendingUp, Check, AlertTriangle, AlertCircle, Info, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';

export const UICardsView = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Cards & Badges" desc="Componentes para apresentação de dados, perfis, estatísticas e etiquetas." />

      {/* Badges */}
      <DocCard title="Badges & Tags">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 text-[10px] font-display font-bold rounded-lg uppercase tracking-widest bg-primary/10 text-primary">Em Análise</span>
            <span className="px-3 py-1 text-[10px] font-display font-bold rounded-lg uppercase tracking-widest bg-success/10 text-success">Aceite</span>
            <span className="px-3 py-1 text-[10px] font-display font-bold rounded-lg uppercase tracking-widest bg-warning/10 text-warning">Pendente</span>
            <span className="px-3 py-1 text-[10px] font-display font-bold rounded-lg uppercase tracking-widest bg-destructive/10 text-destructive">Rejeitado</span>
            <span className="px-3 py-1 text-[10px] font-display font-bold rounded-lg uppercase tracking-widest bg-info/10 text-info">Novo</span>
            <span className="px-3 py-1 text-[10px] font-display font-bold rounded-lg uppercase tracking-widest bg-secondary text-muted-foreground">Rascunho</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 text-[10px] font-display font-bold rounded-full uppercase tracking-widest bg-primary text-primary-foreground">Verificado</span>
            <span className="px-4 py-1.5 text-[10px] font-display font-bold rounded-full uppercase tracking-widest bg-success text-success-foreground">Online</span>
            <span className="px-4 py-1.5 text-[10px] font-display font-bold rounded-full uppercase tracking-widest bg-foreground text-background">Premium</span>
            <span className="px-4 py-1.5 text-[10px] font-display font-bold rounded-full uppercase tracking-widest border-2 border-warning text-warning">Top Rated</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Enfermagem', 'Fisioterapia', 'Drenagem', 'Curativos', 'Diabetes', 'Geriatria'].map(skill => (
              <span key={skill} className="text-[9px] font-display font-bold text-muted-foreground border border-border px-2.5 py-1 rounded-lg uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-colors cursor-default">{skill}</span>
            ))}
          </div>
        </div>
      </DocCard>

      {/* Profile Card */}
      <DocCard title="Profile Card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50 flex items-center gap-5">
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-card overflow-hidden shadow-md border-2 border-card">
                <img src="https://i.pravatar.cc/150?u=profile1" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground p-1 rounded-lg border-2 border-card"><ShieldCheck size={12} /></div>
            </div>
            <div className="flex-1">
              <h4 className="font-display font-black text-foreground uppercase">Helena Santos</h4>
              <p className="text-xs text-muted-foreground font-medium">Enfermeira Especialista</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center gap-1 text-xs font-bold text-warning"><Star size={12} className="fill-current" /> 5.0</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin size={10} /> Porto</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50 text-center">
            <div className="w-20 h-20 rounded-full bg-card overflow-hidden shadow-md border-4 border-card mx-auto mb-4">
              <img src="https://i.pravatar.cc/150?u=profile2" alt="" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-display font-bold text-foreground">Ricardo Almeida</h4>
            <p className="text-xs text-muted-foreground">Fisioterapeuta</p>
            <div className="flex justify-center gap-2 mt-3">
              <Button variant="default" size="sm">Contratar</Button>
              <Button variant="outline" size="icon-sm"><Heart size={14} /></Button>
            </div>
          </div>
        </div>
      </DocCard>

      {/* Stat Cards */}
      <DocCard title="Stat Cards">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Cuidadores', value: '142', icon: Users, change: '+12%' },
            { label: 'Projetos', value: '38', icon: TrendingUp, change: '+8%' },
            { label: 'Tempo Médio', value: '2.4h', icon: Clock, change: '-5%' },
            { label: 'Satisfação', value: '4.9', icon: Star, change: '+0.2' },
          ].map(stat => (
            <div key={stat.label} className="bg-secondary/50 rounded-2xl p-5 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <stat.icon size={18} className="text-primary" />
                <span className="text-[10px] font-display font-bold text-success">{stat.change}</span>
              </div>
              <p className="text-2xl font-display font-black text-foreground tracking-tighter">{stat.value}</p>
              <p className="text-[10px] font-display font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Info Cards */}
      <DocCard title="Info / Feature Cards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: ShieldCheck, title: 'Profissionais Verificados', desc: 'Verificação de identidade, antecedentes e qualificações.', color: 'text-primary' },
            { icon: Zap, title: 'Pagamentos Seguros', desc: 'Sistema de Escrow para proteção de ambas as partes.', color: 'text-warning' },
            { icon: Award, title: 'Garantia de Qualidade', desc: 'Avaliações reais de famílias com experiência comprovada.', color: 'text-success' },
          ].map(card => (
            <div key={card.title} className="bg-secondary/30 rounded-2xl p-6 border border-border/50 hover:bg-secondary/60 transition-all group cursor-default">
              <div className={`w-10 h-10 rounded-xl bg-card flex items-center justify-center ${card.color} shadow-sm mb-4 group-hover:scale-110 transition-transform`}>
                <card.icon size={20} />
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">{card.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Avatars */}
      <DocCard title="Avatares">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {[8, 10, 12, 14, 16, 20].map((size, i) => (
              <div key={i} className="rounded-full bg-secondary overflow-hidden border-2 border-card shadow-sm" style={{ width: size * 4, height: size * 4 }}>
                <img src={`https://i.pravatar.cc/150?u=avatar${i}`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex items-center -space-x-3">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-10 h-10 rounded-full bg-secondary overflow-hidden border-2 border-card shadow-sm">
                <img src={`https://i.pravatar.cc/150?u=stack${i}`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-display font-bold border-2 border-card">+8</div>
          </div>
        </div>
      </DocCard>
    </div>
  );
};

export default UICardsView;
