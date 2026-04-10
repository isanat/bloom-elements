import React, { useState } from 'react';
import { X, Star, MapPin, ShieldCheck, MessageSquare, Calendar, Clock, Award, Heart, Phone, Mail, ChevronRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  profile: {
    name: string;
    role: string;
    price: string;
    rating: string;
    avatarId: number;
    location?: string;
    experience?: string;
    skills?: string[];
    bio?: string;
  };
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, profile }) => {
  const [liked, setLiked] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="bg-card w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-elevated border border-border relative animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with cover */}
        <div className="h-28 bg-gradient-to-br from-primary/20 via-info/10 to-primary/5 rounded-t-3xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl text-muted-foreground hover:text-foreground transition-all">
            <X size={18} />
          </button>
          <button
            onClick={() => { setLiked(!liked); toast(liked ? 'Removido dos favoritos' : 'Adicionado aos favoritos'); }}
            className="absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl transition-all"
          >
            <Heart size={18} className={liked ? 'text-destructive fill-destructive' : 'text-muted-foreground'} />
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center -mt-12 relative z-10">
          <div className="w-24 h-24 rounded-2xl bg-secondary overflow-hidden border-4 border-card shadow-elevated">
            <img src={`https://i.pravatar.cc/200?u=care${profile.avatarId}`} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="p-6 pt-4 space-y-6">
          {/* Name & Role */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h2 className="text-xl font-display font-black text-foreground uppercase tracking-tight">{profile.name}</h2>
              <ShieldCheck size={18} className="text-success" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">{profile.role}</p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="flex items-center gap-1 text-sm font-bold text-warning"><Star size={16} className="fill-current" /> {profile.rating}</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1"><MapPin size={14} /> {profile.location || 'Porto, PT'}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Experiência', value: profile.experience || '8 anos', icon: Award },
              { label: 'Projetos', value: '24', icon: Briefcase },
              { label: 'Tempo Resp.', value: '< 2h', icon: Clock },
            ].map(stat => (
              <div key={stat.label} className="bg-secondary/50 rounded-xl p-3 text-center">
                <stat.icon size={16} className="mx-auto text-primary mb-1" />
                <p className="text-sm font-display font-black text-foreground">{stat.value}</p>
                <p className="text-[9px] font-display font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div>
            <p className="text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2">Sobre</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {profile.bio || 'Especialista com mais de 8 anos de experiência em contexto hospitalar e domiciliário. Certificada em cuidados intensivos, apoio pós-operatório e gestão de medicação.'}
            </p>
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2">Competências</p>
            <div className="flex flex-wrap gap-2">
              {(profile.skills || ['Drenagem', 'Curativos', 'Diabetes', 'Pós-Operatório', 'Geriatria']).map(skill => (
                <span key={skill} className="text-[10px] font-display font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-widest">{skill}</span>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="bg-secondary/50 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest">Preço Base</p>
              <p className="text-2xl font-display font-black text-foreground tracking-tighter">{profile.price}€<span className="text-sm text-muted-foreground font-medium ml-1">/h</span></p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest bg-success/10 text-success">Disponível</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="default" size="lg" className="flex-1" onClick={() => { toast.success('Proposta de recrutamento enviada!'); onClose(); }}>
              <Briefcase size={16} /> Propor Recrutamento
            </Button>
            <Button variant="outline" size="lg" onClick={() => { toast.info('Chat aberto com ' + profile.name); onClose(); }}>
              <MessageSquare size={16} />
            </Button>
            <Button variant="outline" size="lg" onClick={() => toast.info('A ligar...')}>
              <Phone size={16} />
            </Button>
          </div>

          {/* Availability */}
          <div>
            <p className="text-xs font-display font-bold text-foreground uppercase tracking-widest mb-3">Disponibilidade</p>
            <div className="grid grid-cols-7 gap-1.5">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => (
                <div key={day} className={`text-center p-2 rounded-xl text-[10px] font-display font-bold uppercase ${
                  i < 5 ? 'bg-success/10 text-success' : 'bg-secondary text-muted-foreground'
                }`}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Proposal Detail Modal
interface ProposalDetailModalProps {
  open: boolean;
  onClose: () => void;
  proposal: {
    name: string;
    role: string;
    status: string;
    price: string;
    project: string;
    avatarId: number;
  };
}

export const ProposalDetailModal: React.FC<ProposalDetailModalProps> = ({ open, onClose, proposal }) => {
  if (!open) return null;

  const statusColors: Record<string, string> = {
    'Aceite': 'bg-success/10 text-success border-success/20',
    'Pendente': 'bg-warning/10 text-warning border-warning/20',
    'Em Análise': 'bg-primary/10 text-primary border-primary/20',
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="bg-card w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-elevated border border-border relative animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-black text-foreground uppercase tracking-tight">Detalhes da Proposta</h2>
            <button onClick={onClose} className="p-2 hover:bg-accent rounded-xl text-muted-foreground hover:text-foreground transition-all"><X size={18} /></button>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-2xl">
            <div className="w-14 h-14 rounded-2xl bg-card overflow-hidden border-2 border-card shadow-md shrink-0">
              <img src={`https://i.pravatar.cc/150?u=prop${proposal.avatarId}`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-foreground">{proposal.name}</h4>
              <p className="text-xs text-muted-foreground">{proposal.role}</p>
            </div>
            <span className={`px-3 py-1.5 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest border ${statusColors[proposal.status] || 'bg-primary/10 text-primary border-primary/20'}`}>
              {proposal.status}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-4">
            {[
              { label: 'Projeto', value: proposal.project },
              { label: 'Valor Proposto', value: proposal.price },
              { label: 'Data de Envio', value: '05 Abril 2026' },
              { label: 'Duração Estimada', value: '3 meses' },
              { label: 'Método de Pagamento', value: 'Escrow Seguro' },
            ].map(detail => (
              <div key={detail.label} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                <span className="text-xs font-display font-bold text-muted-foreground uppercase tracking-widest">{detail.label}</span>
                <span className="text-sm font-display font-bold text-foreground">{detail.value}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <p className="text-xs font-display font-bold text-foreground uppercase tracking-widest mb-3">Histórico</p>
            <div className="space-y-3">
              {[
                { event: 'Proposta enviada', time: '05 Abril, 10:30', done: true },
                { event: 'Visualizada pelo candidato', time: '05 Abril, 14:15', done: true },
                { event: proposal.status === 'Aceite' ? 'Proposta aceite' : 'A aguardar resposta', time: proposal.status === 'Aceite' ? '06 Abril, 09:00' : 'Pendente', done: proposal.status === 'Aceite' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${step.done ? 'bg-primary' : 'bg-border'}`} />
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-sm font-medium ${step.done ? 'text-foreground' : 'text-muted-foreground'}`}>{step.event}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="default" size="lg" className="flex-1" onClick={() => { toast.success('A abrir chat com ' + proposal.name); onClose(); }}>
              <MessageSquare size={16} /> Enviar Mensagem
            </Button>
            {proposal.status !== 'Aceite' && (
              <Button variant="success" size="lg" onClick={() => { toast.success('Proposta aceite!'); onClose(); }}>
                Aceitar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
