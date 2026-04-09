import React, { useState } from 'react';
import { Search, Mail, Lock, Eye, EyeOff, MapPin, Calendar, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader, DocCard } from '@/components/evyra/EvyraShared';
import { toast } from 'sonner';

export const UIFormsView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [radio, setRadio] = useState('a');
  const [slider, setSlider] = useState(60);
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeader title="Formulários" desc="Inputs, selects, checkboxes, toggles, sliders e muito mais." />

      <DocCard title="Inputs de Texto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard */}
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Nome Completo</label>
            <input className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Ex: Helena Santos" />
          </div>

          {/* With icon */}
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="email@evyra.pt" />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type={showPassword ? 'text' : 'password'} className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-11 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" defaultValue="password123" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Pesquisa</label>
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Pesquisar..." />
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-muted-foreground uppercase tracking-widest">Disabled</label>
            <input disabled className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none text-muted-foreground cursor-not-allowed opacity-60" defaultValue="Não editável" />
          </div>

          {/* Error */}
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-destructive uppercase tracking-widest">Com Erro</label>
            <input className="w-full bg-secondary border-2 border-destructive rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-destructive/20 transition-all text-foreground" defaultValue="campo inválido" />
            <p className="text-xs text-destructive font-medium">Este campo é obrigatório.</p>
          </div>
        </div>
      </DocCard>

      <DocCard title="Textarea">
        <div className="space-y-2 max-w-lg">
          <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Descrição do Projeto</label>
          <textarea className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-foreground placeholder:text-muted-foreground" rows={4} placeholder="Descreva as necessidades do projeto..." />
          <p className="text-xs text-muted-foreground font-medium">Máximo 500 caracteres</p>
        </div>
      </DocCard>

      <DocCard title="Select / Dropdown">
        <div className="space-y-2 max-w-xs">
          <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Especialidade</label>
          <div className="relative">
            <select className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-foreground cursor-pointer">
              <option>Enfermagem</option>
              <option>Fisioterapia</option>
              <option>Geriatria</option>
              <option>Pediatria</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">▾</div>
          </div>
        </div>
      </DocCard>

      <DocCard title="Checkbox & Radio">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Checkboxes */}
          <div className="space-y-3">
            <p className="text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2">Checkboxes</p>
            {['Enfermagem', 'Fisioterapia', 'Geriatria'].map((item, i) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  i === 0 ? 'bg-primary border-primary' : 'border-border group-hover:border-primary'
                }`}>
                  {i === 0 && <Check size={12} className="text-primary-foreground" />}
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </label>
            ))}
          </div>

          {/* Radios */}
          <div className="space-y-3">
            <p className="text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2">Radio Buttons</p>
            {[
              { id: 'a', label: 'Tempo Inteiro' },
              { id: 'b', label: 'Part-Time' },
              { id: 'c', label: 'Freelance' },
            ].map(item => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group" onClick={() => setRadio(item.id)}>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  radio === item.id ? 'border-primary' : 'border-border group-hover:border-primary'
                }`}>
                  {radio === item.id && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </DocCard>

      <DocCard title="Toggle / Switch">
        <div className="space-y-4">
          {[
            { label: 'Notificações por email', state: toggle, set: setToggle },
            { label: 'Modo premium', state: true, set: () => {} },
          ].map((item, i) => (
            <label key={i} className="flex items-center justify-between max-w-sm cursor-pointer">
              <span className="text-sm font-medium text-foreground">{item.label}</span>
              <button
                onClick={() => item.set(!item.state)}
                className={`w-12 h-7 rounded-full transition-all relative ${item.state ? 'bg-primary' : 'bg-border'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-card shadow-sm absolute top-1 transition-all ${item.state ? 'left-6' : 'left-1'}`} />
              </button>
            </label>
          ))}
        </div>
      </DocCard>

      <DocCard title="Slider / Range">
        <div className="space-y-4 max-w-md">
          <div className="flex justify-between items-center">
            <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Orçamento Máximo</label>
            <span className="text-sm font-display font-black text-primary">{slider}€/h</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-display font-medium text-muted-foreground">
            <span>10€</span><span>100€</span>
          </div>
        </div>
      </DocCard>

      <DocCard title="File Upload">
        <div className="border-2 border-dashed border-border rounded-3xl p-10 text-center hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer max-w-lg">
          <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
          <p className="text-sm font-display font-bold text-foreground">Arrastar ficheiro ou clicar para upload</p>
          <p className="text-xs text-muted-foreground mt-1">PDF, DOC ou imagem até 10MB</p>
        </div>
      </DocCard>

      <DocCard title="Formulário Completo">
        <form className="space-y-6 max-w-lg" onSubmit={(e) => { e.preventDefault(); toast.success('Formulário enviado!'); }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Nome</label>
              <input className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" placeholder="Nome" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Apelido</label>
              <input className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground" placeholder="Apelido" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-display font-bold text-foreground uppercase tracking-widest">Localização</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input className="w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Cidade, País" />
            </div>
          </div>
          <div className="flex gap-3">
            <Button type="submit" variant="default" size="lg">Submeter</Button>
            <Button type="button" variant="outline" size="lg">Cancelar</Button>
          </div>
        </form>
      </DocCard>
    </div>
  );
};

export default UIFormsView;
