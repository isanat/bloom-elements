import React, { useState } from 'react';
import {
  User, Camera, Edit, Check, Star, Users, Clock,
  Euro, Shield, FileText, Upload, Bell, Trash2, LogOut,
  CheckCircle, AlertTriangle, Loader2, MapPin, Briefcase,
  Heart, Phone, Mail, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

const SERVICE_TYPES = [
  { id: 'PERSONAL_CARE', label: 'Cuidados Pessoais' },
  { id: 'MEDICATION', label: 'Medicação' },
  { id: 'MOBILITY', label: 'Mobilidade' },
  { id: 'COMPANIONSHIP', label: 'Companhia' },
  { id: 'MEAL_PREPARATION', label: 'Refeições' },
  { id: 'LIGHT_HOUSEWORK', label: 'Tarefas Domésticas' },
  { id: 'TRANSPORTATION', label: 'Transporte' },
  { id: 'COGNITIVE_SUPPORT', label: 'Estimulação Cognitiva' },
  { id: 'NIGHT_CARE', label: 'Cuidados Noturnos' },
  { id: 'PALLIATIVE_CARE', label: 'Cuidados Paliativos' },
  { id: 'PHYSIOTHERAPY', label: 'Fisioterapia' },
  { id: 'NURSING_CARE', label: 'Enfermagem' },
];

// Mock profile data
const mockCaregiverProfile = {
  name: 'Helena Santos',
  email: 'helena.santos@email.com',
  phone: '+351 912 345 678',
  nif: '123456789',
  title: 'Enfermeira Especializada',
  bio: 'Especialista em cuidados intensivos e apoio pós-operatório com mais de 8 anos de experiência em contexto hospitalar e domiciliário.',
  experienceYears: 8,
  city: 'Porto',
  services: ['PERSONAL_CARE', 'MEDICATION', 'NURSING_CARE', 'PALLIATIVE_CARE'],
  hourlyRateEur: 18.50,
  certifications: 'Licenciatura em Enfermagem, Pós-graduação em Cuidados Paliativos',
  languages: 'Português, Inglês, Espanhol',
  averageRating: 4.9,
  totalReviews: 27,
  totalContracts: 12,
  backgroundCheckStatus: 'VERIFIED' as const,
};

const mockFamilyProfile = {
  name: 'João Pedro Silva',
  email: 'joao.silva@email.com',
  phone: '+351 933 456 789',
  nif: '987654321',
  elderName: 'Maria da Conceição Silva',
  elderAge: 78,
  elderNeeds: 'Apoio na higiene pessoal, administração de medicação, companhia diária.',
  emergencyContactName: 'Ana Silva',
  emergencyContactPhone: '+351 966 789 012',
  city: 'Lisboa',
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export const ProfileView = () => {
  const [role, setRole] = useState<'caregiver' | 'family'>('caregiver');
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('info');
  const profile = role === 'caregiver' ? mockCaregiverProfile : mockFamilyProfile;

  const tabs = role === 'caregiver'
    ? [
        { id: 'info', label: 'Info' },
        { id: 'docs', label: 'Docs' },
        { id: 'services', label: 'Serviços' },
        { id: 'contact', label: 'Contacto' },
        { id: 'config', label: 'Config' },
      ]
    : [
        { id: 'info', label: 'Info' },
        { id: 'docs', label: 'Docs' },
        { id: 'elder', label: 'Familiar' },
        { id: 'contact', label: 'Contacto' },
        { id: 'config', label: 'Config' },
      ];

  const getBackgroundCheckBadge = () => {
    const status = (profile as typeof mockCaregiverProfile).backgroundCheckStatus;
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-display font-bold uppercase tracking-widest bg-success/10 text-success border border-success/30">
            <CheckCircle size={12} /> Verificado
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-display font-bold uppercase tracking-widest bg-warning/10 text-warning border border-warning/30">
            <Clock size={12} /> Pendente
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <SectionHeader title="Meu Perfil" desc={role === 'caregiver' ? 'Gerencie suas informações profissionais e preferências.' : 'Gerencie as informações do seu familiar.'} />

      {/* Role Toggle */}
      <div className="flex gap-2">
        {(['caregiver', 'family'] as const).map(r => (
          <button
            key={r}
            onClick={() => { setRole(r); setActiveTab('info'); setIsEditing(false); }}
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

      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Profile Header */}
        <motion.div variants={itemVariants} className="bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card">
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Avatar */}
            <div className="relative shrink-0 self-center sm:self-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-secondary overflow-hidden border-2 border-card shadow-elevated">
                <img
                  src={`https://i.pravatar.cc/150?u=${role}`}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary text-primary-foreground rounded-xl flex items-center justify-center border-2 border-card shadow-md hover:scale-110 transition-transform"
                onClick={() => toast.info('Upload de foto')}
              >
                <Camera size={14} />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-display font-black text-foreground tracking-tighter leading-none uppercase">
                {profile.name}
              </h2>
              {role === 'caregiver' && (
                <p className="text-sm text-muted-foreground font-medium mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                  <Briefcase size={14} className="text-primary" />
                  {(profile as typeof mockCaregiverProfile).title} • {(profile as typeof mockCaregiverProfile).city}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Mail size={12} /> {profile.email}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Phone size={12} /> {profile.phone}
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="shrink-0 self-center sm:self-start">
              <Button
                variant={isEditing ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  if (isEditing) {
                    toast.success('Guardado com sucesso!');
                    setIsEditing(false);
                  } else {
                    setIsEditing(true);
                  }
                }}
              >
                {isEditing ? <><Check size={14} /> Guardar</> : <><Edit size={14} /> Editar</>}
              </Button>
            </div>
          </div>

          {/* Caregiver Stats */}
          {role === 'caregiver' && (
            <div className="grid grid-cols-4 gap-3 mt-5 pt-5 border-t border-border">
              {[
                { value: (profile as typeof mockCaregiverProfile).totalContracts, label: 'Contratos', icon: Users },
                { value: (profile as typeof mockCaregiverProfile).totalReviews, label: 'Avaliações', icon: Star },
                { value: (profile as typeof mockCaregiverProfile).averageRating.toFixed(1), label: 'Nota', icon: Star },
                { value: `€${(profile as typeof mockCaregiverProfile).hourlyRateEur.toFixed(2)}`, label: '/hora', icon: Euro },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-2xl hover:bg-primary/5 transition-all">
                  <p className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  <p className="text-lg sm:text-xl font-display font-black text-foreground tracking-tighter mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mt-5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-2xl text-[10px] font-display font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div variants={itemVariants} className="mt-5">
          {/* INFO TAB */}
          {activeTab === 'info' && (
            <DocCard title="Informações Pessoais">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Nome</label>
                  <Input
                    value={profile.name}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Cidade</label>
                  <Input
                    value={profile.city || ''}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl bg-secondary border-border"
                  />
                </div>
                {role === 'caregiver' && (
                  <>
                    <div>
                      <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Título Profissional</label>
                      <Input
                        value={(profile as typeof mockCaregiverProfile).title}
                        disabled={!isEditing}
                        className="mt-2 rounded-2xl bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Anos de Experiência</label>
                      <Input
                        type="number"
                        value={String((profile as typeof mockCaregiverProfile).experienceYears)}
                        disabled={!isEditing}
                        className="mt-2 rounded-2xl bg-secondary border-border"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Bio / Sobre você</label>
                      <textarea
                        value={(profile as typeof mockCaregiverProfile).bio}
                        disabled={!isEditing}
                        rows={3}
                        className="mt-2 w-full rounded-2xl bg-secondary border border-border p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Valor por Hora (€)</label>
                      <Input
                        type="number"
                        step="0.50"
                        value={String((profile as typeof mockCaregiverProfile).hourlyRateEur)}
                        disabled={!isEditing}
                        className="mt-2 rounded-2xl bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Idiomas</label>
                      <Input
                        value={(profile as typeof mockCaregiverProfile).languages}
                        disabled={!isEditing}
                        className="mt-2 rounded-2xl bg-secondary border-border"
                      />
                    </div>
                  </>
                )}
              </div>
            </DocCard>
          )}

          {/* DOCS TAB */}
          {activeTab === 'docs' && (
            <DocCard title="Documentos & Verificação">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">NIF</label>
                    <Input
                      value={profile.nif || ''}
                      disabled={!isEditing}
                      className="mt-2 rounded-2xl bg-secondary border-border"
                      placeholder="123456789"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Tipo de Documento</label>
                    <Input
                      value="Cartão de Cidadão"
                      disabled={!isEditing}
                      className="mt-2 rounded-2xl bg-secondary border-border"
                    />
                  </div>
                </div>

                {role === 'caregiver' && (
                  <div className="bg-secondary rounded-2xl p-4 sm:p-5 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-display font-black text-foreground uppercase">Registo Criminal</p>
                      {getBackgroundCheckBadge()}
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      Upload do comprovativo de registo criminal para verificação.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => toast.info('Upload de documento')}>
                      <Upload size={14} /> Enviar Comprovativo
                    </Button>
                  </div>
                )}

                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Certificações</label>
                  <textarea
                    value={role === 'caregiver' ? (profile as typeof mockCaregiverProfile).certifications || '' : ''}
                    disabled={!isEditing}
                    rows={2}
                    className="mt-2 w-full rounded-2xl bg-secondary border border-border p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                    placeholder="Certificações profissionais..."
                  />
                </div>
              </div>
            </DocCard>
          )}

          {/* SERVICES TAB (Caregiver) */}
          {activeTab === 'services' && role === 'caregiver' && (
            <DocCard title="Serviços Oferecidos">
              <p className="text-xs text-muted-foreground mb-4">Selecione os serviços que oferece.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_TYPES.map(service => {
                  const isSelected = (profile as typeof mockCaregiverProfile).services.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      disabled={!isEditing}
                      onClick={() => toast.info(`Toggle: ${service.label}`)}
                      className={`flex items-center gap-3 p-3 rounded-2xl border transition-all text-left ${
                        isSelected
                          ? 'bg-primary/10 border-primary/30 text-primary'
                          : 'bg-secondary border-border text-muted-foreground hover:border-primary/20'
                      } ${!isEditing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-primary border-primary' : 'border-border'
                      }`}>
                        {isSelected && <Check size={12} className="text-primary-foreground" />}
                      </div>
                      <span className="text-sm font-display font-bold">{service.label}</span>
                    </button>
                  );
                })}
              </div>
            </DocCard>
          )}

          {/* ELDER TAB (Family) */}
          {activeTab === 'elder' && role === 'family' && (
            <DocCard title="Informações do Familiar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Nome do Familiar</label>
                  <Input
                    value={(profile as typeof mockFamilyProfile).elderName || ''}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Idade</label>
                  <Input
                    type="number"
                    value={String((profile as typeof mockFamilyProfile).elderAge || '')}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl bg-secondary border-border"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Necessidades Especiais</label>
                  <textarea
                    value={(profile as typeof mockFamilyProfile).elderNeeds || ''}
                    disabled={!isEditing}
                    rows={3}
                    className="mt-2 w-full rounded-2xl bg-secondary border border-border p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  />
                </div>
              </div>
            </DocCard>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <DocCard title="Contactos de Emergência">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Contacto de Emergência</label>
                  <Input
                    value={role === 'family' ? (profile as typeof mockFamilyProfile).emergencyContactName || '' : 'Carlos Santos'}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Telefone de Emergência</label>
                  <Input
                    value={role === 'family' ? (profile as typeof mockFamilyProfile).emergencyContactPhone || '' : '+351 966 123 456'}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl bg-secondary border-border"
                  />
                </div>
              </div>
            </DocCard>
          )}

          {/* CONFIG TAB */}
          {activeTab === 'config' && (
            <div className="space-y-5">
              <DocCard title="Preferências">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-2xl border border-border/50">
                    <div className="flex items-center gap-3">
                      <Bell size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-display font-bold text-foreground">Notificações Push</p>
                        <p className="text-[10px] text-muted-foreground">Receber alertas em tempo real</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toast.success('Notificações ativadas!')}>Ativar</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-2xl border border-border/50">
                    <div className="flex items-center gap-3">
                      <Globe size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-display font-bold text-foreground">Idioma</p>
                        <p className="text-[10px] text-muted-foreground">Português (Portugal)</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toast.info('Seletor de idioma')}>Alterar</Button>
                  </div>
                </div>
              </DocCard>

              <DocCard title="Zona de Perigo">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-2xl border border-destructive/20">
                    <div className="flex items-center gap-3">
                      <LogOut size={16} className="text-destructive" />
                      <div>
                        <p className="text-sm font-display font-bold text-foreground">Terminar Sessão</p>
                        <p className="text-[10px] text-muted-foreground">Sair da sua conta</p>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => toast.info('Sessão terminada')}>Sair</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-2xl border border-destructive/20">
                    <div className="flex items-center gap-3">
                      <Trash2 size={16} className="text-destructive" />
                      <div>
                        <p className="text-sm font-display font-bold text-destructive">Apagar Conta</p>
                        <p className="text-[10px] text-muted-foreground">Esta ação é irreversível</p>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => toast.error('Confirmação necessária para apagar conta')}>Apagar</Button>
                  </div>
                </div>
              </DocCard>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileView;
