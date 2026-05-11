import React, { useEffect, useState } from 'react';
import { Smartphone, Check, AlertTriangle, X } from 'lucide-react';
import { SectionHeader, DocCard, StatBlock } from '@/components/evyra/EvyraShared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';
import {
  Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter,
} from '@/components/ui/drawer';

const Ruler = () => (
  <div className="relative h-6 w-full bg-muted/40 rounded-md overflow-hidden">
    <div className="absolute inset-0 flex">
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="flex-1 border-r border-border/60 last:border-r-0 flex items-end justify-center text-[8px] text-muted-foreground/70 pb-0.5">
          {i % 5 === 0 ? i * 10 : ''}
        </div>
      ))}
    </div>
  </div>
);

const Check390 = ({ ok, label }: { ok: boolean; label: string }) => (
  <div className="flex items-center gap-2 p-2 rounded-xl bg-secondary/50">
    {ok ? <Check size={14} className="text-success shrink-0" /> : <X size={14} className="text-destructive shrink-0" />}
    <span className="text-xs font-medium text-foreground">{label}</span>
  </div>
);

const ScrollFiller = ({ n = 18 }: { n?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: n }).map((_, i) => (
      <div key={i} className="h-10 rounded-xl bg-secondary/60 flex items-center px-3 text-xs text-muted-foreground">
        Linha de conteúdo #{i + 1} — para forçar scroll dentro do modal
      </div>
    ))}
  </div>
);

export const UIMobileAuditView: React.FC = () => {
  const [vw, setVw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);

  const is390 = vw <= 414;

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Mobile UI Audit"
        desc="Verificação rápida de paddings, grids, headings, overflow e modais em viewport mobile (≤390px)."
      />

      {/* Live viewport */}
      <DocCard title="Viewport atual">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-primary/10 text-primary text-xs font-display font-bold uppercase tracking-widest">
            <Smartphone size={14} /> {vw}px
          </div>
          <div className={`px-3 py-2 rounded-2xl text-xs font-display font-bold uppercase tracking-widest ${is390 ? 'bg-success/15 text-success' : 'bg-warning/15 text-warning'}`}>
            {is390 ? 'Modo Mobile (≤414)' : 'Desktop / Tablet'}
          </div>
        </div>
        <Ruler />
        <p className="text-[11px] text-muted-foreground mt-2">
          Redimensiona a janela ou usa o seletor de dispositivo (acima do preview) para testar 390px.
        </p>
      </DocCard>

      {/* Padding scale */}
      <DocCard title="Escala de padding (mobile → desktop)">
        <div className="space-y-3">
          {[
            { label: 'p-3 sm:p-6 lg:p-10  (container)', cls: 'p-3 sm:p-6 lg:p-10' },
            { label: 'p-4 sm:p-8           (DocCard)', cls: 'p-4 sm:p-8' },
            { label: 'p-3 sm:p-7           (StatBlock)', cls: 'p-3 sm:p-7' },
            { label: 'p-6 sm:p-10          (Modal)',   cls: 'p-6 sm:p-10' },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-3">
              <div className="text-[10px] font-display font-bold text-muted-foreground w-56 shrink-0 truncate">{p.label}</div>
              <div className={`flex-1 ${p.cls} bg-primary/10 rounded-xl border border-primary/30`}>
                <div className="bg-card rounded-md h-6" />
              </div>
            </div>
          ))}
        </div>
      </DocCard>

      {/* Grids */}
      <DocCard title="Grids responsivas">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">grid-cols-2 sm:grid-cols-4</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-primary/15 border border-primary/40 flex items-center justify-center font-display font-black text-primary">{i}</div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <StatBlock key={i} label={`Card ${i}`} value="42K€" icon={Smartphone} />
              ))}
            </div>
          </div>
        </div>
      </DocCard>

      {/* Headings */}
      <DocCard title="Escala tipográfica (display)">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-5xl font-display font-black tracking-tighter uppercase break-words">H1 Display</h1>
          <h2 className="text-xl sm:text-4xl font-display font-black tracking-tighter uppercase break-words">H2 Section</h2>
          <h3 className="text-lg sm:text-2xl font-display font-bold tracking-tight break-words">H3 Subsection</h3>
          <p className="text-sm sm:text-base text-muted-foreground">Parágrafo body. Mantém legibilidade ≥14px no mobile.</p>
        </div>
      </DocCard>

      {/* Overflow tests */}
      <DocCard title="Stress-test de overflow">
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">Texto longo sem espaços</p>
            <div className="p-3 rounded-xl bg-secondary text-sm break-words">
              EmailExtremamenteLongoSemEspacosParaTestarBreakWordsNoMobile@dominio-muito-longo-tambem.example.com
            </div>
          </div>
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">Número monetário</p>
            <div className="p-3 rounded-xl bg-secondary font-display font-black text-2xl sm:text-4xl break-all">
              € 1.234.567,89
            </div>
          </div>
          <div>
            <p className="text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">Linha rolável (overflow-x-auto)</p>
            <div className="-mx-4 sm:mx-0 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 px-4 sm:px-0 w-max">
                {['Ativos', 'Pendentes', 'Concluídos', 'Cancelados', 'Em revisão', 'Verificados', 'Rejeitados', 'Expirados'].map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-display font-bold whitespace-nowrap">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DocCard>

      {/* Modal tests */}
      <DocCard title="Modais — testes em 390px">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <Check390 ok label="Centrado horizontal" />
          <Check390 ok label="max-h 90dvh" />
          <Check390 ok label="overflow-y rolável" />
          <Check390 ok label="Botões não cortados" />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Dialog: short */}
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="default">Dialog (curto)</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirmar ação</DialogTitle>
                <DialogDescription>Modal curto — deve ficar centrado e nunca cortar os botões em 390px.</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <Label>Email</Label>
                <Input placeholder="exemplo@evyra.pt" />
                <Label>Notas</Label>
                <Textarea placeholder="..." rows={3} />
              </div>
              <DialogFooter className="gap-2">
                <Button variant="outline" size="sm">Cancelar</Button>
                <Button size="sm">Confirmar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dialog: long scrollable */}
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary">Dialog (longo)</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Conteúdo extenso</DialogTitle>
                <DialogDescription>Conteúdo longo — o corpo rola, header e footer permanecem acessíveis.</DialogDescription>
              </DialogHeader>
              <ScrollFiller n={20} />
              <DialogFooter className="gap-2 sticky bottom-0 bg-background pt-3">
                <Button variant="outline" size="sm">Fechar</Button>
                <Button size="sm">Guardar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Sheet bottom */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline">Sheet (bottom)</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="max-h-[90dvh] overflow-y-auto rounded-t-3xl">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
              </SheetHeader>
              <ScrollFiller n={15} />
              <div className="sticky bottom-0 bg-background pt-3 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">Cancelar</Button>
                <Button size="sm" className="flex-1">Aplicar</Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Drawer (vaul) */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button size="sm" variant="dark">Drawer (vaul)</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer rolável</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 max-h-[60dvh] overflow-y-auto">
                <ScrollFiller n={14} />
              </div>
              <DrawerFooter>
                <Button size="sm">Confirmar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </DocCard>

      {/* Checklist */}
      <DocCard title="Checklist de auditoria mobile">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'Container usa p-3 sm:p-6 lg:p-10',
            'Headings reduzem para text-xl em mobile',
            'Tabelas viram cards ou ganham overflow-x-auto',
            'Modais com max-h-[90dvh] e overflow-y-auto',
            'Botões em modais empilhados em mobile',
            'overflow-x-hidden no main container',
            'break-words/break-all em textos longos',
            'Touch targets ≥ 40px de altura',
          ].map((t) => (
            <div key={t} className="flex items-start gap-2 p-3 rounded-xl bg-secondary/40">
              <Check size={14} className="text-success mt-0.5 shrink-0" />
              <span className="text-xs text-foreground">{t}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-warning/10 border border-warning/30">
          <AlertTriangle size={14} className="text-warning mt-0.5 shrink-0" />
          <span className="text-xs text-foreground">Sempre testar em 390×844 (iPhone 14) e 360×800 (Android base).</span>
        </div>
      </DocCard>
    </div>
  );
};

export default UIMobileAuditView;
