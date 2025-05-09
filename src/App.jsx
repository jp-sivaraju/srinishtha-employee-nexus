
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HrZone from "./pages/HrZone";
import ItHelpdesk from "./pages/ItHelpdesk";
import Projects from "./pages/Projects";
import KnowledgeBase from "./pages/KnowledgeBase";
import BrandAssets from "./pages/BrandAssets";
import Finance from "./pages/Finance";
import Regional from "./pages/Regional";
import Performance from "./pages/Performance";
import Pmo from "./pages/Pmo";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hr-zone" element={<HrZone />} />
          <Route path="/it-helpdesk" element={<ItHelpdesk />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/pmo" element={<Pmo />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/brand-assets" element={<BrandAssets />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/regional" element={<Regional />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
