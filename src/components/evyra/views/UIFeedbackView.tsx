import React, { useState } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info, X, Loader2, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

export const UIFeedbackView = () => {
  const [alerts, setAlerts] = useState({ success: true, error: true, warning: true, info: true });

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Feedback & Alerts" desc="Toasts, alertas, banners, estados vazios e indicadores de progresso." />

      {/* Toasts */}
      <DocCard title="Toasts (Sonner)">
        <div className="flex flex-wrap gap-3">
          <Button variant="success" size="sm" onClick={() => toast.success('Operação concluída com sucesso!')}>Toast Success</Button>
          <Button variant="destructive" size="sm" onClick={() => toast.error('Algo correu mal. Tente novamente.')}>Toast Error</Button>
          <Button variant="warning" size="sm" onClick={() => toast.warning('Atenção: o prazo está a expirar.')}>Toast Warning</Button>
          <Button variant="default" size="sm" onClick={() => toast.info('Nova proposta recebida.')}>Toast Info</Button>
          <Button variant="dark" size="sm" onClick={() => toast('Ação executada', { description: 'A sua proposta foi enviada com sucesso ao candidato.' })}>Toast com Descrição</Button>
          <Button variant="outline" size="sm" onClick={() => toast.promise(new Promise(r => setTimeout(r, 2000)), { loading: 'A processar...', success: 'Concluído!', error: 'Erro!' })}>Toast Promise</Button>
        </div>
      </DocCard>

      {/* Alert Banners */}
      <DocCard title="Alert Banners">
        <div className="space-y-4">
          {alerts.success && (
            <div className="flex items-start gap-4 p-5 bg-success/5 border border-success/20 rounded-2xl">
              <CheckCircle size={20} className="text-success shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-display font-bold text-foreground text-sm">Conta verificada com sucesso</p>
                <p className="text-xs text-muted-foreground mt-1">O seu perfil foi verificado e está agora visível no marketplace.</p>
              </div>
              <button onClick={() => setAlerts(a => ({ ...a, success: false }))} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
            </div>
          )}
          {alerts.error && (
            <div className="flex items-start gap-4 p-5 bg-destructive/5 border border-destructive/20 rounded-2xl">
              <AlertCircle size={20} className="text-destructive shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-display font-bold text-foreground text-sm">Pagamento recusado</p>
                <p className="text-xs text-muted-foreground mt-1">O método de pagamento foi recusado. Atualize os dados.</p>
              </div>
              <button onClick={() => setAlerts(a => ({ ...a, error: false }))} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
            </div>
          )}
          {alerts.warning && (
            <div className="flex items-start gap-4 p-5 bg-warning/5 border border-warning/20 rounded-2xl">
              <AlertTriangle size={20} className="text-warning shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-display font-bold text-foreground text-sm">Documentos a expirar</p>
                <p className="text-xs text-muted-foreground mt-1">O certificado profissional expira em 15 dias.</p>
              </div>
              <button onClick={() => setAlerts(a => ({ ...a, warning: false }))} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
            </div>
          )}
          {alerts.info && (
            <div className="flex items-start gap-4 p-5 bg-info/5 border border-info/20 rounded-2xl">
              <Info size={20} className="text-info shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-display font-bold text-foreground text-sm">Nova funcionalidade</p>
                <p className="text-xs text-muted-foreground mt-1">Agora pode agendar videochamadas diretamente na plataforma.</p>
              </div>
              <button onClick={() => setAlerts(a => ({ ...a, info: false }))} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
            </div>
          )}
        </div>
      </DocCard>

      {/* Progress Bars */}
      <DocCard title="Barras de Progresso">
        <div className="space-y-6 max-w-lg">
          {[
            { label: 'Perfil Completo', value: 85, color: 'bg-primary' },
            { label: 'Verificação', value: 60, color: 'bg-warning' },
            { label: 'Milestone 3', value: 30, color: 'bg-success' },
            { label: 'Upload', value: 100, color: 'bg-info' },
          ].map(bar => (
            <div key={bar.label} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-display font-bold text-foreground">{bar.label}</span>
                <span className="text-xs font-display font-bold text-muted-foreground">{bar.value}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className={`h-full ${bar.color} rounded-full transition-all duration-700`} style={{ width: `${bar.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Loading States */}
      <DocCard title="Estados de Loading">
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center gap-3">
            <Loader2 size={32} className="animate-spin text-primary" />
            <span className="text-xs font-display font-medium text-muted-foreground">Spinner</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-soft" style={{ animationDelay: '0ms' }} />
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-soft" style={{ animationDelay: '200ms' }} />
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-soft" style={{ animationDelay: '400ms' }} />
            </div>
            <span className="text-xs font-display font-medium text-muted-foreground">Dots</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-3 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </div>
            <span className="text-xs font-display font-medium text-muted-foreground">Shimmer</span>
          </div>
        </div>
      </DocCard>

      {/* Skeleton */}
      <DocCard title="Skeleton Loading">
        <div className="flex items-center gap-4 max-w-sm">
          <div className="w-14 h-14 rounded-2xl bg-secondary animate-pulse-soft shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-secondary rounded-lg animate-pulse-soft w-3/4" />
            <div className="h-3 bg-secondary rounded-lg animate-pulse-soft w-1/2" />
          </div>
        </div>
      </DocCard>

      {/* Empty State */}
      <DocCard title="Estado Vazio">
        <div className="text-center py-12 max-w-sm mx-auto">
          <div className="w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-5">
            <Bell size={28} className="text-muted-foreground" />
          </div>
          <h4 className="font-display font-bold text-foreground text-lg mb-2">Sem notificações</h4>
          <p className="text-sm text-muted-foreground mb-6">Quando receber novas propostas ou mensagens, elas aparecerão aqui.</p>
          <Button variant="default" size="sm">Explorar Talentos</Button>
        </div>
      </DocCard>
    </div>
  );
};

export default UIFeedbackView;
