import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { Services } from "./pages/Services";
import { ProfessionalMouldInspections } from "./pages/ProfessionalMouldInspections";
import { CompleteMaterialRemoval } from "./pages/CompleteMaterialRemoval";
import { AdvancedFoggingSanitisation } from "./pages/AdvancedFoggingSanitisation";
import { ComprehensiveMouldRemoval } from "./pages/ComprehensiveMouldRemoval";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/professional-mould-inspections" element={<ProfessionalMouldInspections />} />
          <Route path="/services/complete-material-removal" element={<CompleteMaterialRemoval />} />
          <Route path="/services/advanced-fogging-sanitisation" element={<AdvancedFoggingSanitisation />} />
          <Route path="/services/comprehensive-mould-removal" element={<ComprehensiveMouldRemoval />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
