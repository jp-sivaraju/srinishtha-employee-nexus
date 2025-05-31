
import { TooltipProvider } from "@/components/ui/tooltip"

// Import all sidebar components
export { SidebarProvider, useSidebar } from "./sidebar/SidebarContext"
export { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarInset } from "./sidebar/SidebarCore"
export {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "./sidebar/SidebarMenu"
export {
  SidebarTrigger,
  SidebarRail,
  SidebarInput,
  SidebarSeparator,
} from "./sidebar/SidebarUtils"
export {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
} from "./sidebar/SidebarGroup"

// Wrap the provider with TooltipProvider for convenience
export const SidebarProviderWithTooltip = ({ children, ...props }) => (
  <TooltipProvider delayDuration={0}>
    <SidebarProvider {...props}>
      {children}
    </SidebarProvider>
  </TooltipProvider>
)
