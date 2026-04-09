import React from 'react';
import { Copy, Download, Hash, Link2, Heart, Star, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

export const UIMiscView = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Utilitários" desc="Tipografia, cores, sombras, espaçamento e outros utilitários do design system." />

      {/* Typography */}
      <DocCard title="Tipografia">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-4">Font Display (Space Grotesk)</p>
            <h1 className="text-5xl font-display font-black text-foreground tracking-tighter uppercase">Heading 1</h1>
            <h2 className="text-4xl font-display font-black text-foreground tracking-tighter uppercase">Heading 2</h2>
            <h3 className="text-3xl font-display font-bold text-foreground tracking-tight">Heading 3</h3>
            <h4 className="text-2xl font-display font-bold text-foreground">Heading 4</h4>
            <h5 className="text-xl font-display font-bold text-foreground">Heading 5</h5>
            <h6 className="text-lg font-display font-bold text-foreground">Heading 6</h6>
          </div>
          <div className="space-y-3 pt-4 border-t border-border">
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-4">Font Body (Inter)</p>
            <p className="text-base font-body text-foreground">Body text regular — Especialista em cuidados intensivos e apoio pós-operatório.</p>
            <p className="text-sm font-body text-muted-foreground">Body small — informações secundárias e descritivas.</p>
            <p className="text-xs font-body text-muted-foreground">Caption — metadados e labels pequenas.</p>
            <p className="text-base font-body font-bold text-foreground">Body bold — texto com ênfase.</p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-4">Estilos Especiais</p>
            <p className="text-3xl font-display font-black text-gradient-primary tracking-tighter">Gradient Text</p>
            <p className="text-xs font-display font-bold text-muted-foreground uppercase tracking-[0.4em] mt-3">TRACKING WIDEST LABEL</p>
          </div>
        </div>
      </DocCard>

      {/* Colors */}
      <DocCard title="Paleta de Cores">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-3">Cores Principais</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { name: 'Primary', class: 'bg-primary', text: 'text-primary-foreground' },
                { name: 'Foreground', class: 'bg-foreground', text: 'text-background' },
                { name: 'Success', class: 'bg-success', text: 'text-success-foreground' },
                { name: 'Warning', class: 'bg-warning', text: 'text-warning-foreground' },
                { name: 'Destructive', class: 'bg-destructive', text: 'text-destructive-foreground' },
                { name: 'Info', class: 'bg-info', text: 'text-info-foreground' },
              ].map(color => (
                <div key={color.name} className="space-y-2">
                  <div className={`w-full h-16 rounded-2xl ${color.class} flex items-end p-3`}>
                    <span className={`text-[9px] font-display font-bold ${color.text} uppercase tracking-widest`}>{color.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-3">Superfícies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { name: 'Background', class: 'bg-background border' },
                { name: 'Card', class: 'bg-card border' },
                { name: 'Secondary', class: 'bg-secondary' },
                { name: 'Muted', class: 'bg-muted' },
                { name: 'Accent', class: 'bg-accent' },
                { name: 'Border', class: 'bg-border' },
              ].map(color => (
                <div key={color.name} className="space-y-2">
                  <div className={`w-full h-16 rounded-2xl ${color.class} border-border flex items-end p-3`}>
                    <span className="text-[9px] font-display font-bold text-muted-foreground uppercase tracking-widest">{color.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DocCard>

      {/* Shadows */}
      <DocCard title="Sombras">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-2xl shadow-card border border-border text-center">
            <p className="text-xs font-display font-bold text-foreground">shadow-card</p>
            <p className="text-[10px] text-muted-foreground mt-1">Subtil, para cards</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-elevated text-center">
            <p className="text-xs font-display font-bold text-foreground">shadow-elevated</p>
            <p className="text-[10px] text-muted-foreground mt-1">Elevado, para hovers</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-glow text-center">
            <p className="text-xs font-display font-bold text-foreground">shadow-glow</p>
            <p className="text-[10px] text-muted-foreground mt-1">Glow de marca</p>
          </div>
        </div>
      </DocCard>

      {/* Border Radius */}
      <DocCard title="Border Radius">
        <div className="flex flex-wrap items-end gap-4">
          {[
            { label: 'sm', class: 'rounded-sm', size: 'w-12 h-12' },
            { label: 'md', class: 'rounded-md', size: 'w-14 h-14' },
            { label: 'lg', class: 'rounded-lg', size: 'w-14 h-14' },
            { label: 'xl', class: 'rounded-xl', size: 'w-16 h-16' },
            { label: '2xl', class: 'rounded-2xl', size: 'w-16 h-16' },
            { label: '3xl', class: 'rounded-3xl', size: 'w-20 h-20' },
            { label: 'full', class: 'rounded-full', size: 'w-20 h-20' },
          ].map(r => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div className={`${r.size} ${r.class} bg-primary/10 border-2 border-primary/30`} />
              <span className="text-[10px] font-display font-bold text-muted-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Spacing */}
      <DocCard title="Espaçamento">
        <div className="space-y-3">
          {[1, 2, 3, 4, 6, 8, 10, 12, 16].map(n => (
            <div key={n} className="flex items-center gap-4">
              <span className="text-[10px] font-display font-bold text-muted-foreground w-12 text-right">{n * 4}px</span>
              <div className="bg-primary/20 rounded-sm" style={{ width: n * 16, height: 12 }} />
              <span className="text-[10px] font-display font-medium text-muted-foreground">{n}</span>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Icons Showcase */}
      <DocCard title="Ícones em Uso">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {[Heart, Star, Zap, ShieldCheck, Copy, Download, Hash, Link2].map((Icon, i) => (
            <button
              key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-secondary transition-all group cursor-pointer"
              onClick={() => { toast.info(`Ícone: ${Icon.displayName || 'Icon'}`); }}
            >
              <Icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[9px] font-display font-medium text-muted-foreground">{Icon.displayName || `Icon ${i + 1}`}</span>
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Baseado em <strong>Lucide React</strong> — 1400+ ícones disponíveis</p>
      </DocCard>
    </div>
  );
};

export default UIMiscView;
