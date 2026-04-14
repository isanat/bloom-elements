// UI Components - Base
export { Button, buttonVariants } from "./components/ui/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./components/ui/card";
export { Input } from "./components/ui/input";
export { Label } from "./components/ui/label";
export { Badge, badgeVariants } from "./components/ui/badge";
export { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";

// UI Components - Feedback
export { Toast, ToastAction } from "./components/ui/toast";
export { Toaster } from "./components/ui/toaster";
export { Progress } from "./components/ui/progress";
export { Skeleton } from "./components/ui/skeleton";

// UI Components - Form
export { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./components/ui/form";
export { Textarea } from "./components/ui/textarea";
export { Checkbox } from "./components/ui/checkbox";
export { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton } from "./components/ui/select";
export { Slider } from "./components/ui/slider";
export { Switch } from "./components/ui/switch";
export { Toggle, toggleVariants } from "./components/ui/toggle";
export { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./components/ui/input-otp";

// UI Components - Layout
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "./components/ui/breadcrumb";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./components/ui/pagination";
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "./components/ui/navigation-menu";
export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarCheckboxItem, MenubarRadioItem, MenubarLabel, MenubarSeparator, MenubarShortcut, MenubarGroup, MenubarSub, MenubarSubContent, MenubarSubTrigger } from "./components/ui/menubar";
export { Sidebar, SidebarProvider, SidebarTrigger, SidebarInset, SidebarContent, SidebarFooter, SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarGroupAction, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuBadge, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarRail, useSidebar } from "./components/ui/sidebar";
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from "./components/ui/drawer";
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from "./components/ui/sheet";
export { Separator } from "./components/ui/separator";
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./components/ui/collapsible";
export { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./components/ui/resizable";

// UI Components - Content & Data
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "./components/ui/table";
export { Calendar } from "./components/ui/calendar";
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./components/ui/carousel";
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from "./components/ui/command";
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle } from "./components/ui/chart";
export { AspectRatio } from "./components/ui/aspect-ratio";

// UI Components - Overlay
export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "./components/ui/dialog";
export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "./components/ui/alert-dialog";
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "./components/ui/context-menu";
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup } from "./components/ui/dropdown-menu";
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./components/ui/tooltip";
export { Popover, PopoverTrigger, PopoverContent } from "./components/ui/popover";
export { HoverCard, HoverCardTrigger, HoverCardContent } from "./components/ui/hover-card";

// UI Components - Misc
export { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";

// Evyra Components
export { EvyraHeader } from "./components/evyra/EvyraHeader";
export { EvyraSidebar } from "./components/evyra/EvyraSidebar";
export { ProfileModal } from "./components/evyra/ProfileModal";
export { SectionHeader, DocCard, StatBlock } from "./components/evyra/EvyraShared";

// Navigation
export { NavLink } from "./components/NavLink";

// Hooks
export { useTheme, ThemeProvider } from "./hooks/use-theme";
export { useToast, toast } from "./hooks/use-toast";
export { useIsMobile } from "./hooks/use-mobile";

// Utils
export { cn } from "./lib/utils";
