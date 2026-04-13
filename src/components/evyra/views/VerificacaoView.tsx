import React from 'react';
import { SectionHeader } from '../EvyraShared';
import { Clock, CreditCard, Camera, Sun, CheckCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const requisitos = [
  { icon: CreditCard, text: 'Documento de identidade válido (BI, Passaporte ou Carta de Condução)' },
  { icon: Camera, text: 'Câmara para foto de selfie' },
  { icon: Sun, text: 'Ambiente bem iluminado' },
];

const beneficios = [
  'Maior credibilidade com famílias',
  'Aparece primeiro nas pesquisas',
  'Pode receber contratos de maior valor',
  'Selo de verificado no perfil',
];

export const VerificacaoView = () => {
  return (
    <div className="space-y-8 max-w-2xl">
      <SectionHeader title="Verificação de Identidade" desc="Verifique a sua identidade para aumentar a confiança no seu perfil." />

      {/* Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-3xl border border-border shadow-card p-8 text-center"
      >
        <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock size={32} className="text-warning" />
        </div>
        <h3 className="font-display font-black text-foreground text-xl uppercase tracking-tight mb-1">Em Verificação</h3>
        <p className="text-warning font-display font-bold text-sm mb-3">Verificação em Andamento</p>
        <p className="text-sm text-muted-foreground mb-6">A sua verificação está a ser processada. Receberá uma notificação quando for concluída.</p>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={() => toast.info('A verificar estado...')}>
            <RefreshCw size={14} /> Atualizar
          </Button>
          <Button variant="outline" onClick={() => toast.info('Continuando...')}>
            Continuar
          </Button>
        </div>
      </motion.div>

      {/* O que precisa */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-3xl border border-border shadow-card p-6"
      >
        <h4 className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-4">O que precisa</h4>
        <div className="space-y-4">
          {requisitos.map((req, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                <req.icon size={18} className="text-muted-foreground" />
              </div>
              <span className="text-sm text-foreground">{req.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Porquê verificar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-3xl border border-border shadow-card p-6"
      >
        <h4 className="text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest mb-4">Porquê verificar?</h4>
        <div className="space-y-3">
          {beneficios.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle size={16} className="text-success shrink-0" />
              <span className="text-sm text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
