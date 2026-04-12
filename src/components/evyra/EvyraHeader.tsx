import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Moon, Sun, Menu, MessageSquare, FileText, CheckCircle, Clock, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';
import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: string;
  type: 'proposal' | 'message' | 'status';
  title: string;
  desc: string;
  time: string;
  read: boolean;
  avatar?: string;
}

const initialNotifications: Notification[] = [
  { id: '1', type: 'proposal', title: 'Nova Proposta Recebida', desc: 'Mariana Costa enviou uma proposta para Apoio Pós-Operatório.', time: '2 min', read: false, avatar: 'https://i.pravatar.cc/100?u=prop0' },
  { id: '2', type: 'message', title: 'Nova Mensagem', desc: 'João Pedro: "Olá, gostaria de discutir os detalhes..."', time: '15 min', read: false, avatar: 'https://i.pravatar.cc/100?u=prop1' },
  { id: '3', type: 'status', title: 'Proposta Aceite', desc: 'A sua proposta para Cuidados Mensais foi aceite.', time: '1h', read: false },
  { id: '4', type: 'message', title: 'Nova Mensagem', desc: 'Ana Ferreira: "Confirmo disponibilidade para amanhã."', time: '2h', read: true, avatar: 'https://i.pravatar.cc/100?u=prop2' },
  { id: '5', type: 'proposal', title: 'Proposta Atualizada', desc: 'Carlos Silva atualizou o orçamento para 890€.', time: '3h', read: true, avatar: 'https://i.pravatar.cc/100?u=prop3' },
];

// Simulate new notifications arriving
const newNotificationPool: Omit<Notification, 'id' | 'read' | 'time'>[] = [
  { type: 'message', title: 'Nova Mensagem', desc: 'Sofia Lopes: "Podemos agendar para sexta-feira?"', avatar: 'https://i.pravatar.cc/100?u=prop4' },
  { type: 'proposal', title: 'Nova Proposta Recebida', desc: 'Ricardo Mendes candidatou-se a Fisioterapia Domiciliária.', avatar: 'https://i.pravatar.cc/100?u=prop5' },
  { type: 'status', title: 'Pagamento Confirmado', desc: 'O pagamento de 450€ foi processado com sucesso.' },
];

const iconMap = {
  proposal: FileText,
  message: MessageSquare,
  status: CheckCircle,
};

const colorMap = {
  proposal: 'bg-primary/10 text-primary',
  message: 'bg-accent text-accent-foreground',
  status: 'bg-success/10 text-success',
};

interface EvyraHeaderProps {
  sidebarOpen: boolean;
  onMobileMenuToggle?: () => void;
}

export const EvyraHeader: React.FC<EvyraHeaderProps> = ({ sidebarOpen, onMobileMenuToggle }) => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const poolIndex = useRef(0);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Simulate real-time notifications every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      if (poolIndex.current < newNotificationPool.length) {
        const n = newNotificationPool[poolIndex.current];
        poolIndex.current++;
        setNotifications(prev => [
          { ...n, id: `new-${Date.now()}`, read: false, time: 'agora' },
          ...prev,
        ]);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMobileMenuToggle}
          className="p-2 text-muted-foreground hover:bg-accent rounded-xl transition-colors md:hidden"
        >
          <Menu size={22} />
        </button>
        <div className="relative w-full max-w-md hidden md:block">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-foreground placeholder:text-muted-foreground"
            placeholder="Pesquisar por especialidade ou localização..."
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={toggleTheme}
          className="p-2.5 text-muted-foreground hover:bg-accent rounded-xl transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1 border-2 border-card"
              >
                {unreadCount}
              </motion.span>
            )}
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-card border border-border rounded-2xl shadow-elevated overflow-hidden z-50"
              >
                {/* Header */}
                <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-black text-foreground uppercase text-sm tracking-wider">Notificações</h3>
                    {unreadCount > 0 && (
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-lg">
                        {unreadCount} novas
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Marcar todas como lidas
                    </button>
                  )}
                </div>

                {/* Notification list */}
                <div className="max-h-[400px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="py-12 text-center text-muted-foreground">
                      <Bell size={32} className="mx-auto mb-3 opacity-30" />
                      <p className="text-sm font-medium">Sem notificações</p>
                    </div>
                  ) : (
                    notifications.map((n, i) => {
                      const Icon = iconMap[n.type];
                      return (
                        <motion.div
                          key={n.id}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className={cn(
                            "flex items-start gap-3 px-5 py-3.5 hover:bg-accent/50 transition-colors cursor-pointer group relative",
                            !n.read && "bg-primary/[0.03]"
                          )}
                          onClick={() => markRead(n.id)}
                        >
                          {!n.read && (
                            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                          )}
                          {n.avatar ? (
                            <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 ring-2 ring-secondary">
                              <img src={n.avatar} alt="" className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", colorMap[n.type])}>
                              <Icon size={16} />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className={cn("text-sm font-semibold text-foreground truncate", !n.read && "font-bold")}>{n.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{n.desc}</p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <Clock size={10} className="text-muted-foreground/50" />
                              <span className="text-[10px] text-muted-foreground/60 font-medium">{n.time}</span>
                            </div>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); removeNotification(n.id); }}
                            className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive rounded-lg transition-all shrink-0"
                          >
                            <X size={14} />
                          </button>
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-10 h-10 bg-secondary rounded-xl border-2 border-card shadow-card overflow-hidden ring-2 ring-secondary cursor-pointer">
          <img src="https://i.pravatar.cc/100?u=company" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default EvyraHeader;
