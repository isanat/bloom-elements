import React, { useState } from 'react';
import { SectionHeader, DocCard } from '../EvyraShared';
import { Video, CheckCircle, Clock, Calendar, ChevronRight, X, Play, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const entrevistas = [
  { id: 1, cuidador: 'Adriano Moreira da Silva', data: '07/04/2026', duracao: '30m', status: 'concluída' as const },
  { id: 2, cuidador: 'Adriano Moreira da Silva', data: '07/04/2026', duracao: '30m', status: 'concluída' as const },
  { id: 3, cuidador: 'Adriano Moreira da Silva', data: '07/04/2026', duracao: '30m', status: 'concluída' as const },
  { id: 4, cuidador: 'Adriano Moreira da Silva', data: '07/04/2026', duracao: '30m', status: 'concluída' as const },
  { id: 5, cuidador: 'Adriano Moreira da Silva', data: '06/04/2026', duracao: '30m', status: 'concluída' as const },
  { id: 6, cuidador: 'Maria Fernanda Costa', data: '15/04/2026', duracao: '45m', status: 'agendada' as const },
];

type StatusType = 'concluída' | 'agendada' | 'cancelada';

const statusConfig: Record<StatusType, { color: string; icon: React.ElementType }> = {
  'concluída': { color: 'text-success', icon: CheckCircle },
  'agendada': { color: 'text-info', icon: Clock },
  'cancelada': { color: 'text-destructive', icon: X },
};

export const EntrevistasView = () => {
  const [detailId, setDetailId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'todas' | StatusType>('todas');

  const agendadas = entrevistas.filter(e => e.status === 'agendada');
  const historico = entrevistas.filter(e => e.status !== 'agendada');
  const filtered = filter === 'todas' ? entrevistas : entrevistas.filter(e => e.status === filter);

  const detail = entrevistas.find(e => e.id === detailId);

  return (
    <div className="space-y-8">
      <SectionHeader title="Entrevistas" desc="Acompanhe o estado das entrevistas agendadas e realizadas." />

      {/* Agendadas */}
      {agendadas.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-info pl-4">
            Próximas Entrevistas
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agendadas.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-card rounded-3xl border-2 border-info/30 shadow-card p-6 flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-info/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Video size={24} className="text-info" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-black text-foreground tracking-tight text-sm uppercase">Entrevista com Cuidador</h3>
                  <p className="text-sm text-muted-foreground truncate">{e.cuidador}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {e.data}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {e.duracao}</span>
                  </div>
                </div>
                <Button size="sm" onClick={() => toast.info('A entrar na chamada...')}>
                  <Play size={14} /> Entrar
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Histórico */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-primary pl-4">
          Histórico
        </h4>

        <div className="space-y-3">
          {historico.map((e, i) => {
            const sc = statusConfig[e.status];
            const StatusIcon = sc.icon;
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-3xl border border-border shadow-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-elevated transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <Video size={22} className="text-muted-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-black text-foreground tracking-tight text-sm uppercase">Entrevista com Cuidador</h3>
                    <span className={`text-[10px] font-display font-black uppercase tracking-widest ${sc.color}`}>
                      {e.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.cuidador}</p>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-right hidden sm:block">
                    <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Data</div>
                    <div className="text-lg font-display font-black text-foreground tracking-tight">{e.data}</div>
                    <div className="text-xs text-muted-foreground">{e.duracao}</div>
                  </div>
                  <div className="text-xs text-muted-foreground sm:hidden">
                    {e.data} · {e.duracao}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDetailId(e.id)}
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setDetailId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-card w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-elevated p-8 relative border border-border"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setDetailId(null)} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all">
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                  <Video size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-black text-foreground tracking-tighter uppercase">Detalhes da Entrevista</h2>
                  <p className="text-sm text-muted-foreground">{detail.cuidador}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-2xl p-4">
                    <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Data</div>
                    <div className="text-lg font-display font-black text-foreground mt-1">{detail.data}</div>
                  </div>
                  <div className="bg-secondary rounded-2xl p-4">
                    <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest">Duração</div>
                    <div className="text-lg font-display font-black text-foreground mt-1">{detail.duracao}</div>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-4">
                  <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2">Estado</div>
                  <div className="flex items-center gap-2">
                    {React.createElement(statusConfig[detail.status].icon, { size: 16, className: statusConfig[detail.status].color })}
                    <span className={`font-display font-bold uppercase text-sm ${statusConfig[detail.status].color}`}>{detail.status}</span>
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-4">
                  <div className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-2">Participante</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center">
                      <User size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">{detail.cuidador}</div>
                      <div className="text-xs text-muted-foreground">Cuidador</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                {detail.status === 'concluída' && (
                  <Button className="flex-1" onClick={() => { toast.success('Contrato iniciado!'); setDetailId(null); }}>
                    Iniciar Contrato
                  </Button>
                )}
                <Button variant="outline" className="flex-1" onClick={() => setDetailId(null)}>
                  Fechar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
