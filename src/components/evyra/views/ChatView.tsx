import React from 'react';
import { Phone, MoreVertical, Paperclip, Send } from 'lucide-react';
import { SectionHeader } from '@/components/evyra/EvyraShared';

const Bubble = ({ type, text, time }: { type: 'sent' | 'received'; text: string; time: string }) => (
  <div className={`flex flex-col ${type === 'sent' ? 'items-end' : 'items-start'}`}>
    <div className={`max-w-[75%] p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
      type === 'sent'
        ? 'bg-primary text-primary-foreground rounded-tr-lg'
        : 'bg-card text-foreground rounded-tl-lg border border-border'
    }`}>
      {text}
    </div>
    <span className="text-[10px] font-display font-bold text-muted-foreground/50 uppercase mt-2 mx-1 tracking-widest">{time}</span>
  </div>
);

export const ChatView = () => (
  <div className="h-[calc(100vh-180px)] flex border border-border rounded-3xl overflow-hidden bg-card shadow-card animate-slide-up">
    {/* Contact List */}
    <div className="w-80 border-r border-border flex flex-col bg-secondary/20">
      <div className="p-5 border-b border-border font-display font-black text-lg tracking-tight uppercase flex justify-between items-center text-foreground">
        Chat
      </div>
      <div className="flex-1 overflow-y-auto">
        {[1, 2, 3].map(i => (
          <div key={i} className={`p-4 flex gap-3 border-b border-border/30 cursor-pointer transition-all ${i === 1 ? 'bg-primary/5' : 'hover:bg-secondary'}`}>
            <div className="w-11 h-11 rounded-2xl bg-secondary overflow-hidden shrink-0 shadow-sm border-2 border-card">
              <img src={`https://i.pravatar.cc/100?u=chat${i}`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center mb-1">
                <span className="font-display font-bold text-sm text-foreground">Família Mendes</span>
                <span className="text-[10px] font-medium text-muted-foreground/50">12:40</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">Aguardamos confirmação para segunda-feira às 14h...</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Chat Area */}
    <div className="flex-1 flex flex-col bg-secondary/10">
      <div className="p-5 bg-card border-b border-border flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary overflow-hidden border-2 border-card">
            <img src="https://i.pravatar.cc/100?u=chat1" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-foreground">Família Mendes</div>
            <div className="text-[10px] font-display font-bold text-success uppercase tracking-widest flex items-center gap-1">Candidato Ativo</div>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2.5 text-muted-foreground hover:text-primary transition-all rounded-xl hover:bg-accent"><Phone size={18} /></button>
          <button className="p-2.5 text-muted-foreground hover:text-primary transition-all rounded-xl hover:bg-accent"><MoreVertical size={18} /></button>
        </div>
      </div>
      <div className="flex-1 p-6 space-y-5 overflow-y-auto">
        <Bubble type="received" text="Olá! Vi a vossa proposta para o projeto de Cascais. Tenho disponibilidade imediata." time="12:30" />
        <Bubble type="sent" text="Boa tarde Mariana! Excelente. Poderia enviar o seu certificado de enfermagem atualizado via plataforma?" time="12:45" />
      </div>
      <div className="p-5 bg-card border-t border-border">
        <div className="flex items-center gap-3 bg-secondary border-2 border-border rounded-3xl px-5 py-3 focus-within:border-primary focus-within:bg-card transition-all">
          <Paperclip className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" size={20} />
          <input className="bg-transparent flex-1 outline-none text-sm font-medium text-foreground placeholder:text-muted-foreground" placeholder="Escreva aqui..." />
          <button className="bg-primary text-primary-foreground p-2.5 rounded-xl shadow-md hover:shadow-glow hover:scale-105 active:scale-95 transition-all">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ChatView;
