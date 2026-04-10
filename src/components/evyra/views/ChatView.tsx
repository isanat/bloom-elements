import React, { useState } from 'react';
import { Phone, MoreVertical, Paperclip, Send, ArrowLeft, Smile } from 'lucide-react';
import { toast } from 'sonner';

const contacts = [
  { id: 1, name: 'Família Mendes', lastMsg: 'Aguardamos confirmação para segunda-feira às 14h...', time: '12:40', unread: 2 },
  { id: 2, name: 'Ricardo Almeida', lastMsg: 'Obrigado pela proposta. Vou analisar.', time: '11:20', unread: 0 },
  { id: 3, name: 'Clínica Cascais', lastMsg: 'Podemos marcar uma reunião esta semana?', time: 'Ontem', unread: 1 },
];

const chatMessages: Record<number, Array<{ type: 'sent' | 'received'; text: string; time: string }>> = {
  1: [
    { type: 'received', text: 'Olá! Vi a vossa proposta para o projeto de Cascais. Tenho disponibilidade imediata.', time: '12:30' },
    { type: 'sent', text: 'Boa tarde Mariana! Excelente. Poderia enviar o seu certificado de enfermagem atualizado via plataforma?', time: '12:45' },
    { type: 'received', text: 'Claro, vou enviar ainda hoje. Aguardamos confirmação para segunda-feira às 14h.', time: '12:50' },
  ],
  2: [
    { type: 'sent', text: 'Bom dia Ricardo, temos uma nova oportunidade de fisioterapia em Lisboa.', time: '10:00' },
    { type: 'received', text: 'Obrigado pela proposta. Vou analisar.', time: '11:20' },
  ],
  3: [
    { type: 'received', text: 'Bom dia, somos da Clínica Cascais. Podemos marcar uma reunião esta semana?', time: '09:15' },
  ],
};

const Bubble = ({ type, text, time }: { type: 'sent' | 'received'; text: string; time: string }) => (
  <div className={`flex flex-col ${type === 'sent' ? 'items-end' : 'items-start'}`}>
    <div className={`max-w-[85%] sm:max-w-[75%] p-3 sm:p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
      type === 'sent'
        ? 'bg-primary text-primary-foreground rounded-tr-lg'
        : 'bg-card text-foreground rounded-tl-lg border border-border'
    }`}>
      {text}
    </div>
    <span className="text-[10px] font-display font-bold text-muted-foreground/50 uppercase mt-1.5 mx-1 tracking-widest">{time}</span>
  </div>
);

export const ChatView = () => {
  const [activeContact, setActiveContact] = useState(1);
  const [showContactList, setShowContactList] = useState(true);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState(chatMessages);

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMsg = { type: 'sent' as const, text: messageInput, time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => ({
      ...prev,
      [activeContact]: [...(prev[activeContact] || []), newMsg],
    }));
    setMessageInput('');
    toast.success('Mensagem enviada');
  };

  const selectContact = (id: number) => {
    setActiveContact(id);
    setShowContactList(false);
  };

  const currentContact = contacts.find(c => c.id === activeContact);

  return (
    <div className="h-[calc(100vh-140px)] sm:h-[calc(100vh-180px)] flex border border-border rounded-3xl overflow-hidden bg-card shadow-card animate-slide-up">
      {/* Contact List */}
      <div className={`${showContactList ? 'flex' : 'hidden'} md:flex w-full md:w-80 border-r border-border flex-col bg-secondary/20`}>
        <div className="p-4 sm:p-5 border-b border-border font-display font-black text-lg tracking-tight uppercase flex justify-between items-center text-foreground">
          Chat
          <span className="text-xs font-display font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">{contacts.reduce((a, c) => a + c.unread, 0)}</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map(contact => (
            <button
              key={contact.id}
              onClick={() => selectContact(contact.id)}
              className={`w-full p-3 sm:p-4 flex gap-3 border-b border-border/30 cursor-pointer transition-all text-left ${
                activeContact === contact.id ? 'bg-primary/5' : 'hover:bg-secondary'
              }`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-secondary overflow-hidden shrink-0 shadow-sm border-2 border-card">
                <img src={`https://i.pravatar.cc/100?u=chat${contact.id}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display font-bold text-sm text-foreground truncate">{contact.name}</span>
                  <span className="text-[10px] font-medium text-muted-foreground/50 shrink-0 ml-2">{contact.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground truncate">{contact.lastMsg}</p>
                  {contact.unread > 0 && (
                    <span className="ml-2 w-5 h-5 bg-primary text-primary-foreground rounded-full text-[10px] font-bold flex items-center justify-center shrink-0">{contact.unread}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`${!showContactList ? 'flex' : 'hidden'} md:flex flex-1 flex-col bg-secondary/10`}>
        <div className="p-3 sm:p-5 bg-card border-b border-border flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setShowContactList(true)} className="p-2 hover:bg-accent rounded-xl text-muted-foreground md:hidden">
              <ArrowLeft size={18} />
            </button>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary overflow-hidden border-2 border-card">
              <img src={`https://i.pravatar.cc/100?u=chat${activeContact}`} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-foreground">{currentContact?.name}</div>
              <div className="text-[10px] font-display font-bold text-success uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-success rounded-full" /> Online
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <button onClick={() => toast.info('A ligar...')} className="p-2 sm:p-2.5 text-muted-foreground hover:text-primary transition-all rounded-xl hover:bg-accent"><Phone size={18} /></button>
            <button className="p-2 sm:p-2.5 text-muted-foreground hover:text-primary transition-all rounded-xl hover:bg-accent"><MoreVertical size={18} /></button>
          </div>
        </div>
        <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          {(messages[activeContact] || []).map((msg, i) => (
            <Bubble key={i} type={msg.type} text={msg.text} time={msg.time} />
          ))}
        </div>
        <div className="p-3 sm:p-5 bg-card border-t border-border">
          <div className="flex items-center gap-2 sm:gap-3 bg-secondary border-2 border-border rounded-3xl px-3 sm:px-5 py-2 sm:py-3 focus-within:border-primary focus-within:bg-card transition-all">
            <button onClick={() => toast.info('Anexar ficheiro...')} className="text-muted-foreground hover:text-primary transition-colors shrink-0">
              <Paperclip size={20} />
            </button>
            <input
              className="bg-transparent flex-1 outline-none text-sm font-medium text-foreground placeholder:text-muted-foreground min-w-0"
              placeholder="Escreva aqui..."
              value={messageInput}
              onChange={e => setMessageInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={() => toast.info('Emojis em breve!')} className="text-muted-foreground hover:text-primary transition-colors shrink-0 hidden sm:block">
              <Smile size={20} />
            </button>
            <button onClick={sendMessage} className="bg-primary text-primary-foreground p-2 sm:p-2.5 rounded-xl shadow-md hover:shadow-glow hover:scale-105 active:scale-95 transition-all shrink-0">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
