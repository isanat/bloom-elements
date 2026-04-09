import React from 'react';
import { Search, MapPin, Award, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

export const DatabaseView = ({ onAction }: { onAction: (type: string) => void }) => (
  <div className="animate-slide-up space-y-8">
    <SectionHeader title="Base de Dados" desc="Gestão centralizada de todos os talentos registados na rede." />
    <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
      <div className="p-5 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-secondary/30">
        <div className="flex items-center gap-3 bg-card px-4 py-2.5 rounded-2xl border border-border shadow-sm">
          <Search size={16} className="text-muted-foreground" />
          <input className="bg-transparent border-none outline-none text-xs font-medium text-foreground w-48 md:w-64 placeholder:text-muted-foreground" placeholder="Filtrar por nome..." />
        </div>
        <Button variant="outline" size="sm" onClick={() => toast.success('A exportar CSV...')}>
          Exportar Base
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-secondary/50 text-[10px] font-display font-bold text-muted-foreground uppercase tracking-[0.2em]">
              <th className="px-6 py-4 border-r border-border/50 w-20 text-center">ID</th>
              <th className="px-6 py-4">Talento</th>
              <th className="px-6 py-4">Nível</th>
              <th className="px-6 py-4">Ganhos</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {[1, 2, 3, 4, 5].map(i => (
              <tr key={i} className="group hover:bg-primary/5 transition-all">
                <td className="px-6 py-5 text-[10px] font-display font-bold text-muted-foreground/50 border-r border-border/30 text-center">#EV-{1020 + i}</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary border-2 border-card shadow-sm overflow-hidden shrink-0 group-hover:scale-110 transition-transform">
                      <img src={`https://i.pravatar.cc/150?u=admin${i}`} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">Mariana Costa</div>
                      <div className="text-[10px] text-muted-foreground font-medium flex items-center gap-1"><MapPin size={10} className="text-primary" /> Porto, PT</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1 text-warning font-display font-bold text-xs uppercase"><Award size={14} /> Top Rated</div>
                </td>
                <td className="px-6 py-5 text-sm font-display font-bold text-foreground tracking-tighter">4.280,00€</td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="icon-sm" onClick={() => onAction('hire')}>
                      <Edit2 size={14} className="text-primary" />
                    </Button>
                    <Button variant="outline" size="icon-sm" onClick={() => onAction('delete')}>
                      <Trash2 size={14} className="text-destructive" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default DatabaseView;
