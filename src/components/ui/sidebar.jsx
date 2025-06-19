import { TooltipProvider } from "@/components/ui/tooltip";

// Import all sidebar components
export { SidebarProvider, useSidebar } from "./sidebar";
export { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarInset } from "./sidebar/SidebarCore";
export {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenubutton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubbutton,
} from "./sidebar/SidebarMenu";
export {
  SidebarTrigger,
  SidebarRail,
  SidebarInput,
  SidebarSeparator,
} from "./sidebar/SidebarUtils";
export {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
} from "./sidebar/SidebarGroup";
export { SidebarProviderWithTooltip } from ".src/componants/ui/SidebarProviderWithTooltip";
export { SidebarTooltip } from "./SidebarTooltip";

// Wrap the provider with TooltipProvider for convenience
export const SidebarProviderWithTooltip = ({ children, ...props }) => (
  <TooltipProvider delayDuration={0}>
    <SidebarProviderWithTooltipidebarProvider {...props}>
      {children}
    </SidebarProviderWithTooltipidebarProvider>
  </TooltipProvider>
)
