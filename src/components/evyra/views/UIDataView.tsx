import React from 'react';
import { ChevronRight, MapPin, Award, Edit2, Trash2, ArrowUp, ArrowDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';

export const UIDataView = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Dados & Tabelas" desc="Tabelas, listas, paginação e componentes de dados." />

      {/* Table */}
      <DocCard title="Tabela Completa">
        <div className="overflow-x-auto -mx-8 -my-8">
          <div className="min-w-[600px]">
            <div className="p-4 border-b border-border flex justify-between items-center bg-secondary/30">
              <div className="flex items-center gap-3 bg-card px-4 py-2 rounded-xl border border-border">
                <Search size={14} className="text-muted-foreground" />
                <input className="bg-transparent border-none outline-none text-xs font-medium text-foreground w-48 placeholder:text-muted-foreground" placeholder="Filtrar..." />
              </div>
              <span className="text-xs text-muted-foreground font-medium">5 resultados</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-secondary/50 text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.15em]">
                  <th className="px-6 py-3.5 cursor-pointer hover:text-foreground transition-colors">
                    <div className="flex items-center gap-1">Nome <ArrowUp size={10} /></div>
                  </th>
                  <th className="px-6 py-3.5">Especialidade</th>
                  <th className="px-6 py-3.5">Localização</th>
                  <th className="px-6 py-3.5 cursor-pointer hover:text-foreground transition-colors">
                    <div className="flex items-center gap-1">Rating <ArrowDown size={10} /></div>
                  </th>
                  <th className="px-6 py-3.5 text-right">Preço/h</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { name: 'Helena Santos', spec: 'Enfermagem', loc: 'Porto', rating: '5.0', price: '18,50€' },
                  { name: 'Ricardo Almeida', spec: 'Fisioterapia', loc: 'Lisboa', rating: '4.8', price: '22,00€' },
                  { name: 'Mariana Costa', spec: 'Geriatria', loc: 'Cascais', rating: '4.9', price: '16,75€' },
                  { name: 'João Pedro', spec: 'Pediatria', loc: 'Braga', rating: '4.7', price: '20,00€' },
                  { name: 'Ana Ferreira', spec: 'Apoio Dom.', loc: 'Faro', rating: '5.0', price: '15,00€' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-all group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary overflow-hidden shrink-0">
                          <img src={`https://i.pravatar.cc/60?u=table${i}`} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-display font-bold text-foreground text-sm">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-muted-foreground font-medium">{row.spec}</td>
                    <td className="px-6 py-4 text-xs text-muted-foreground font-medium flex items-center gap-1"><MapPin size={10} className="text-primary" /> {row.loc}</td>
                    <td className="px-6 py-4 text-xs font-display font-bold text-warning">{row.rating} ★</td>
                    <td className="px-6 py-4 text-sm font-display font-bold text-foreground text-right">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DocCard>

      {/* Pagination */}
      <DocCard title="Paginação">
        <div className="flex items-center justify-center gap-2">
          <button className="px-3 py-2 text-xs font-display font-bold text-muted-foreground hover:text-foreground bg-card border border-border rounded-xl transition-all">‹</button>
          <button className="px-3.5 py-2 text-xs font-display font-bold bg-primary text-primary-foreground rounded-xl shadow-md">1</button>
          <button className="px-3.5 py-2 text-xs font-display font-bold text-muted-foreground hover:text-foreground bg-card border border-border rounded-xl transition-all">2</button>
          <button className="px-3.5 py-2 text-xs font-display font-bold text-muted-foreground hover:text-foreground bg-card border border-border rounded-xl transition-all">3</button>
          <span className="text-muted-foreground text-sm">...</span>
          <button className="px-3.5 py-2 text-xs font-display font-bold text-muted-foreground hover:text-foreground bg-card border border-border rounded-xl transition-all">12</button>
          <button className="px-3 py-2 text-xs font-display font-bold text-muted-foreground hover:text-foreground bg-card border border-border rounded-xl transition-all">›</button>
        </div>
      </DocCard>

      {/* List Items */}
      <DocCard title="List Items">
        <div className="space-y-2 max-w-lg">
          {[
            { title: 'Proposta #EV-1021', desc: 'Apoio Pós-Operatório', badge: 'Aceite', badgeColor: 'bg-success/10 text-success' },
            { title: 'Proposta #EV-1022', desc: 'Cuidados Mensais', badge: 'Pendente', badgeColor: 'bg-warning/10 text-warning' },
            { title: 'Proposta #EV-1023', desc: 'Reabilitação', badge: 'Em Análise', badgeColor: 'bg-primary/10 text-primary' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl border border-border/50 hover:bg-secondary/60 transition-all cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest ${item.badgeColor}`}>{item.badge}</span>
                <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Timeline */}
      <DocCard title="Timeline">
        <div className="space-y-0 max-w-md ml-4">
          {[
            { title: 'Proposta enviada', time: 'Há 2 horas', done: true },
            { title: 'Candidato aceitou', time: 'Há 1 hora', done: true },
            { title: 'Contrato assinado', time: 'Agora', done: false },
            { title: 'Pagamento em Escrow', time: 'Pendente', done: false },
          ].map((step, i, arr) => (
            <div key={i} className="flex gap-4 relative">
              {i < arr.length - 1 && <div className="absolute left-[11px] top-7 w-0.5 h-full bg-border" />}
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                step.done ? 'bg-primary text-primary-foreground' : 'bg-card border-2 border-border'
              }`}>
                {step.done && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
              </div>
              <div className="pb-8">
                <p className={`font-display font-bold text-sm ${step.done ? 'text-foreground' : 'text-muted-foreground'}`}>{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </DocCard>
    </div>
  );
};

export default UIDataView;
