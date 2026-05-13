import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { AllowInDimension } from 'recharts/types/util/types';
import { AnimationDuration } from 'recharts/types/util/types';
import { AnimationTiming } from 'recharts/types/util/types';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { CartesianViewBox } from 'recharts/types/util/types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ContentType } from 'recharts/types/component/Tooltip';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { ControllerProps } from 'react-hook-form';
import { Coordinate } from 'recharts/types/util/types';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'embla-carousel-react';
import { default as default_3 } from 'react';
import { DialogCloseProps } from '@radix-ui/react-dialog';
import { DialogContentProps } from '@radix-ui/react-dialog';
import { DialogDescriptionProps } from '@radix-ui/react-dialog';
import { DialogOverlayProps } from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import { DialogTitleProps } from '@radix-ui/react-dialog';
import { DialogTriggerProps } from '@radix-ui/react-dialog';
import { Drawer as Drawer_2 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';
import { ForwardRefExoticComponent } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavLinkProps } from 'react-router-dom';
import { Payload } from 'recharts/types/component/DefaultTooltipContent';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Portal } from 'vaul';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { RenderProps } from 'input-otp';
import * as ResizablePrimitive from 'react-resizable-panels';
import { Scope } from '@radix-ui/react-context';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { SlotProps } from '@radix-ui/react-slot';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { UniqueOption } from 'recharts/types/util/payload/getUniqPayload';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { VariantProps } from 'class-variance-authority';

export declare const Accordion: React_2.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React_2.RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: React_2.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const AccordionItem: React_2.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const AccordionTrigger: React_2.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Alert: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: {
    variant?: "default" | "destructive";
} & ClassProp) => string> & React_2.RefAttributes<HTMLDivElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertDialog: React_2.FC<AlertDialogPrimitive.AlertDialogProps>;

export declare const AlertDialogAction: React_2.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const AlertDialogCancel: React_2.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const AlertDialogContent: React_2.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const AlertDialogDescription: React_2.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertDialogFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const AlertDialogHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const AlertDialogTitle: React_2.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const AlertDialogTrigger: React_2.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AspectRatio: ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & RefAttributes<HTMLDivElement>>;

export declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarFallback: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarImage: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React_2.RefAttributes<HTMLImageElement>, "ref"> & React_2.RefAttributes<HTMLImageElement>>;

export declare function Badge({ className, variant, ...props }: BadgeProps): JSX_2.Element;

declare interface BadgeProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary";
} & ClassProp) => string;

export declare const Breadcrumb: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React_2.ReactNode;
} & React_2.RefAttributes<HTMLElement>>;

export declare const BreadcrumbItem: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React_2.RefAttributes<HTMLLIElement>>;

export declare const BreadcrumbLink: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React_2.RefAttributes<HTMLAnchorElement>>;

export declare const BreadcrumbList: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React_2.RefAttributes<HTMLOListElement>>;

export declare const BreadcrumbPage: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React_2.ComponentProps<"li">): JSX_2.Element;
    displayName: string;
};

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export declare const buttonVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "warning" | "premium" | "dark";
    size?: "default" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
} & ClassProp) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): JSX_2.Element;

export declare namespace Calendar {
    var displayName: string;
}

declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

export declare const Card: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardContent: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const CardFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const Carousel: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & CarouselProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare const CarouselContent: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselItem: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselNext: React_2.ForwardRefExoticComponent<Omit<ButtonProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type CarouselOptions = UseCarouselParameters[0];

declare type CarouselPlugin = UseCarouselParameters[1];

export declare const CarouselPrevious: React_2.ForwardRefExoticComponent<Omit<ButtonProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};

declare type ChartConfig = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

export declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ChartLegend: typeof RechartsPrimitive.Legend;

export declare const ChartLegendContent: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => JSX_2.Element;

export declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;

export declare const ChartTooltipContent: React_2.ForwardRefExoticComponent<Omit<RechartsPrimitive.DefaultTooltipContentProps<ValueType, NameType> & {
    accessibilityLayer?: boolean;
    active?: boolean | undefined;
    includeHidden?: boolean | undefined;
    allowEscapeViewBox?: AllowInDimension;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
    content?: ContentType<ValueType, NameType>;
    coordinate?: Partial<Coordinate>;
    cursor?: boolean | React_2.ReactElement | React_2.SVGProps<SVGElement>;
    filterNull?: boolean;
    defaultIndex?: number;
    isAnimationActive?: boolean;
    offset?: number;
    payloadUniqBy?: UniqueOption<Payload<ValueType, NameType>>;
    position?: Partial<Coordinate>;
    reverseDirection?: AllowInDimension;
    shared?: boolean;
    trigger?: "hover" | "click";
    useTranslate3d?: boolean;
    viewBox?: CartesianViewBox;
    wrapperStyle?: React_2.CSSProperties;
} & React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const Checkbox: React_2.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare function cn(...inputs: ClassValue[]): string;

export declare const Collapsible: ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & RefAttributes<HTMLDivElement>>;

export declare const CollapsibleContent: ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & RefAttributes<HTMLDivElement>>;

export declare const CollapsibleTrigger: ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare const Command: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => JSX_2.Element;

declare interface CommandDialogProps extends DialogProps {
}

export declare const CommandEmpty: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandGroup: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React_2.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandInput: React_2.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React_2.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React_2.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React_2.RefAttributes<HTMLInputElement>, "ref"> & React_2.RefAttributes<HTMLInputElement>>;

export declare const CommandItem: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandList: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandSeparator: React_2.ForwardRefExoticComponent<Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandShortcut: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;
    displayName: string;
};

export declare const ContextMenu: React_2.FC<ContextMenuPrimitive.ContextMenuProps>;

export declare const ContextMenuCheckboxItem: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuContent: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuGroup: React_2.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuItem: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuLabel: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuRadioItem: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuSeparator: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuShortcut: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;
    displayName: string;
};

export declare const ContextMenuSub: React_2.FC<ContextMenuPrimitive.ContextMenuSubProps>;

export declare const ContextMenuSubContent: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuSubTrigger: React_2.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const ContextMenuTrigger: React_2.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare const DashboardCaregiverView: default_3.FC;

export declare const DashboardFamilyView: default_3.FC;

export declare const DashboardView: default_3.FC<DashboardViewProps>;

export declare interface DashboardViewProps {
    /** Which role's dashboard to render. Defaults to 'caregiver'. */
    role?: 'caregiver' | 'family';
}

export declare const Dialog: React_2.FC<SheetPrimitive.DialogProps>;

export declare const DialogClose: React_2.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DialogContent: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogDescription: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const DialogFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DialogHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DialogOverlay: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogPortal: React_2.FC<SheetPrimitive.DialogPortalProps>;

export declare const DialogTitle: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const DialogTrigger: React_2.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DocCard: ({ title, children }: {
    title: string;
    children: default_3.ReactNode;
}) => JSX_2.Element;

export declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React_2.ComponentProps<typeof Drawer_2.Root>): JSX_2.Element;
    displayName: string;
};

export declare const DrawerClose: React_2.ForwardRefExoticComponent<DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DrawerContent: React_2.ForwardRefExoticComponent<Omit<Omit<DialogContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DrawerDescription: React_2.ForwardRefExoticComponent<Omit<DialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const DrawerFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DrawerHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DrawerOverlay: React_2.ForwardRefExoticComponent<Omit<Omit<DialogOverlayProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DrawerPortal: Portal;

export declare const DrawerTitle: React_2.ForwardRefExoticComponent<Omit<DialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const DrawerTrigger: React_2.ForwardRefExoticComponent<DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DropdownMenu: React_2.FC<DropdownMenuPrimitive.DropdownMenuProps>;

export declare const DropdownMenuCheckboxItem: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuContent: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuGroup: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuItem: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuLabel: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuPortal: React_2.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;

export declare const DropdownMenuRadioGroup: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuRadioItem: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuSeparator: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuShortcut: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;
    displayName: string;
};

export declare const DropdownMenuSub: React_2.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;

export declare const DropdownMenuSubContent: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuSubTrigger: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuTrigger: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const EvyraHeader: default_3.FC<EvyraHeaderProps>;

declare interface EvyraHeaderProps {
    sidebarOpen: boolean;
    onMobileMenuToggle?: () => void;
}

export declare const EvyraSidebar: default_3.FC<EvyraSidebarProps>;

declare interface EvyraSidebarProps {
    currentView: string;
    setCurrentView: (view: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (open: boolean) => void;
}

export declare const FamilySetupView: ({ onNavigate }: {
    onNavigate?: (v: string) => void;
}) => JSX_2.Element;

export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React_2.JSX.Element;

export declare const FormControl: React_2.ForwardRefExoticComponent<Omit<SlotProps & React_2.RefAttributes<HTMLElement>, "ref"> & React_2.RefAttributes<HTMLElement>>;

export declare const FormDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => JSX_2.Element;

export declare const FormItem: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const FormLabel: React_2.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React_2.RefAttributes<HTMLLabelElement>, "ref"> & React_2.RefAttributes<HTMLLabelElement>>;

export declare const FormMessage: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const HoverCard: React_2.FC<HoverCardPrimitive.HoverCardProps>;

export declare const HoverCardContent: React_2.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const HoverCardTrigger: React_2.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React_2.RefAttributes<HTMLAnchorElement>>;

export declare const Input: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React_2.RefAttributes<HTMLInputElement>>;

export declare const InputOTP: React_2.ForwardRefExoticComponent<(Omit<Omit<React_2.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
} & {
    render: (props: RenderProps) => React_2.ReactNode;
    children?: never;
} & React_2.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React_2.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
} & {
    render?: never;
    children: React_2.ReactNode;
} & React_2.RefAttributes<HTMLInputElement>, "ref">) & React_2.RefAttributes<HTMLInputElement>>;

export declare const InputOTPGroup: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const InputOTPSeparator: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const InputOTPSlot: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    index: number;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const KYCView: ({ onNavigate }: {
    onNavigate?: (v: string) => void;
}) => JSX_2.Element;

export declare const Label: React_2.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React_2.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp) => string> & React_2.RefAttributes<HTMLLabelElement>>;

export declare const LoginView: ({ onNavigate, onSubmit, }: {
    onNavigate?: (v: string) => void;
    onSubmit?: (email: string, password: string) => Promise<void>;
}) => JSX_2.Element;

export declare const Menubar: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarCheckboxItem: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarContent: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarGroup: React_2.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarItem: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarLabel: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarMenu: {
    (props: MenubarPrimitive.MenubarMenuProps & {
        __scopeMenubar?: Scope;
    }): JSX_2.Element;
    displayName: string;
};

export declare const MenubarRadioItem: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarSeparator: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarShortcut: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;
    displayname: string;
};

export declare const MenubarSub: React_2.FC<MenubarPrimitive.MenubarSubProps>;

export declare const MenubarSubContent: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarSubTrigger: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

export declare const MenubarTrigger: React_2.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const NavigationMenu: React_2.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React_2.RefAttributes<HTMLElement>, "ref"> & React_2.RefAttributes<HTMLElement>>;

export declare const NavigationMenuContent: React_2.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const NavigationMenuItem: React_2.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React_2.RefAttributes<HTMLLIElement>>;

export declare const NavigationMenuLink: React_2.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React_2.RefAttributes<HTMLAnchorElement>>;

export declare const NavigationMenuList: React_2.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React_2.RefAttributes<HTMLUListElement>, "ref"> & React_2.RefAttributes<HTMLUListElement>>;

export declare const NavigationMenuTrigger: React_2.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const navigationMenuTriggerStyle: (props?: ClassProp) => string;

export declare const NavLink: ForwardRefExoticComponent<NavLinkCompatProps & RefAttributes<HTMLAnchorElement>>;

declare interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
}

export declare const Pagination: {
    ({ className, ...props }: React_2.ComponentProps<"nav">): JSX_2.Element;
    displayName: string;
};

export declare const PaginationContent: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React_2.RefAttributes<HTMLUListElement>>;

export declare const PaginationEllipsis: {
    ({ className, ...props }: React_2.ComponentProps<"span">): JSX_2.Element;
    displayName: string;
};

export declare const PaginationItem: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React_2.RefAttributes<HTMLLIElement>>;

export declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): JSX_2.Element;
    displayName: string;
};

declare type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React_2.ComponentProps<"a">;

export declare const PaginationNext: {
    ({ className, ...props }: React_2.ComponentProps<typeof PaginationLink>): JSX_2.Element;
    displayName: string;
};

export declare const PaginationPrevious: {
    ({ className, ...props }: React_2.ComponentProps<typeof PaginationLink>): JSX_2.Element;
    displayName: string;
};

export declare const Popover: React_2.FC<PopoverPrimitive.PopoverProps>;

export declare const PopoverContent: React_2.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const PopoverTrigger: React_2.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const ProfileModal: default_3.FC<ProfileModalProps>;

declare interface ProfileModalProps {
    open: boolean;
    onClose: () => void;
    profile: {
        name: string;
        role: string;
        price: string;
        rating: string;
        avatarId: number;
        location?: string;
        experience?: string;
        skills?: string[];
        bio?: string;
    };
}

export declare const ProfileSetupView: ({ onNavigate }: {
    onNavigate?: (v: string) => void;
}) => JSX_2.Element;

export declare const Progress: React_2.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const RadioGroup: React_2.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const RadioGroupItem: React_2.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const RegisterView: ({ onNavigate, onSubmitRegister, }: {
    onNavigate?: (v: string) => void;
    onSubmitRegister?: (data: {
        name: string;
        email: string;
        phone: string;
        password: string;
        role: "FAMILY" | "CAREGIVER";
    }) => Promise<void>;
}) => JSX_2.Element;

export declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => JSX_2.Element;

export declare const ResizablePanel: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLButtonElement | HTMLElement | HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement | HTMLInputElement | HTMLLabelElement | HTMLObjectElement | HTMLLinkElement | HTMLFormElement | HTMLSlotElement | HTMLStyleElement | HTMLTitleElement | HTMLDialogElement | HTMLImageElement | HTMLOptionElement | HTMLTableElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLLegendElement | HTMLLIElement | HTMLMapElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOutputElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | HTMLTableCaptionElement | HTMLMenuElement | HTMLPictureElement>, "id" | "onResize"> & {
className?: string | undefined;
collapsedSize?: number | undefined;
collapsible?: boolean | undefined;
defaultSize?: number | undefined;
id?: string | undefined;
maxSize?: number | undefined;
minSize?: number | undefined;
onCollapse?: ResizablePrimitive.PanelOnCollapse | undefined;
onExpand?: ResizablePrimitive.PanelOnExpand | undefined;
onResize?: ResizablePrimitive.PanelOnResize | undefined;
order?: number | undefined;
style?: object | undefined;
tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
children?: ReactNode;
} & RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;

export declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => JSX_2.Element;

export declare const ScrollArea: React_2.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const ScrollBar: React_2.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SectionHeader: ({ title, desc }: {
    title: string;
    desc: string;
}) => JSX_2.Element;

export declare const Select: React_2.FC<SelectPrimitive.SelectProps>;

export declare const SelectContent: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectGroup: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectItem: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectLabel: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectScrollDownButton: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectScrollUpButton: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectSeparator: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectTrigger: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SelectValue: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare const Separator: React_2.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const Sheet: React_2.FC<SheetPrimitive.DialogProps>;

export declare const SheetClose: React_2.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SheetContent: React_2.ForwardRefExoticComponent<SheetContentProps & React_2.RefAttributes<HTMLDivElement>>;

declare interface SheetContentProps extends React_2.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}

export declare const SheetDescription: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const SheetFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const SheetHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const SheetOverlay: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SheetPortal: React_2.FC<SheetPrimitive.DialogPortalProps>;

export declare const SheetTitle: React_2.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const SheetTrigger: React_2.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

declare const sheetVariants: (props?: {
    side?: "top" | "right" | "bottom" | "left";
} & ClassProp) => string;

export declare const Sidebar: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarContent: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare type SidebarContext = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};

declare const SidebarContext: React_2.Context<SidebarContext>;

export declare const SidebarFooter: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarGroup: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarGroupAction: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLButtonElement> & React_2.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SidebarGroupContent: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarGroupLabel: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarHeader: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarInset: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarMenu: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React_2.RefAttributes<HTMLUListElement>>;

export declare const SidebarMenuBadge: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarMenuButton: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLButtonElement> & React_2.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React_2.ComponentProps<typeof TooltipContent>;
} & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & ClassProp) => string>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SidebarMenuItem: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React_2.RefAttributes<HTMLLIElement>>;

export declare const SidebarMenuSkeleton: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & {
    showIcon?: boolean;
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarMenuSub: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React_2.RefAttributes<HTMLUListElement>>;

export declare const SidebarMenuSubButton: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLAnchorElement> & React_2.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}, "ref"> & React_2.RefAttributes<HTMLAnchorElement>>;

export declare const SidebarMenuSubItem: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React_2.RefAttributes<HTMLLIElement>>;

export declare const SidebarProvider: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SidebarRail: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SidebarTrigger: React_2.ForwardRefExoticComponent<Omit<ButtonProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX_2.Element;

export declare const Slider: React_2.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const StatBlock: ({ label, value, icon: Icon, colorClass }: {
    label: string;
    value: string;
    icon: default_3.ElementType;
    colorClass?: string;
}) => JSX_2.Element;

export declare const Switch: React_2.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Table: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableElement> & React_2.RefAttributes<HTMLTableElement>>;

export declare const TableBody: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableCaption: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableCaptionElement> & React_2.RefAttributes<HTMLTableCaptionElement>>;

export declare const TableCell: React_2.ForwardRefExoticComponent<React_2.TdHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableHead: React_2.ForwardRefExoticComponent<React_2.ThHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableRow: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableRowElement> & React_2.RefAttributes<HTMLTableRowElement>>;

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsContent: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsList: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsTrigger: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Textarea: React_2.ForwardRefExoticComponent<TextareaProps & React_2.RefAttributes<HTMLTextAreaElement>>;

declare interface TextareaProps extends React_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

declare type Theme = 'light' | 'dark';

declare interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): JSX_2.Element;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const Toast: React_2.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React_2.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive";
} & ClassProp) => string> & React_2.RefAttributes<HTMLLIElement>>;

export declare function toast({ ...props }: Toast_2): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};

declare type Toast_2 = Omit<ToasterToast, "id">;

export declare const ToastAction: React_2.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type ToastActionElement = React_2.ReactElement<typeof ToastAction>;

export declare function Toaster(): JSX_2.Element;

declare type ToasterToast = ToastProps & {
    id: string;
    title?: React_2.ReactNode;
    description?: React_2.ReactNode;
    action?: ToastActionElement;
};

declare type ToastProps = React_2.ComponentPropsWithoutRef<typeof Toast>;

export declare const Toggle: React_2.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & ClassProp) => string> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const ToggleGroup: React_2.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React_2.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React_2.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & ClassProp) => string>) & React_2.RefAttributes<HTMLDivElement>>;

export declare const ToggleGroupItem: React_2.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & ClassProp) => string> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & ClassProp) => string;

export declare const Tooltip: React_2.FC<TooltipPrimitive.TooltipProps>;

export declare const TooltipContent: React_2.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TooltipProvider: React_2.FC<TooltipPrimitive.TooltipProviderProps>;

export declare const TooltipTrigger: React_2.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

declare type UseCarouselParameters = Parameters<typeof default_2>;

export declare function useIsMobile(): boolean;

export declare function useSidebar(): SidebarContext;

export declare const useTheme: () => ThemeContextType;

export declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

export { }
