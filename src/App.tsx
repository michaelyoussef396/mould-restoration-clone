import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { Services } from "./pages/Services";
import { ContactOptimized } from "./pages/ContactOptimized";
import { ProfessionalMouldInspections } from "./pages/ProfessionalMouldInspections";
import { CompleteMaterialRemoval } from "./pages/CompleteMaterialRemoval";
import { AdvancedFoggingSanitisation } from "./pages/AdvancedFoggingSanitisation";
import { ComprehensiveMouldRemoval } from "./pages/ComprehensiveMouldRemoval";
import { SubfloorMouldRemediation } from "./pages/SubfloorMouldRemediation";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";
import { Carlton } from "./pages/locations/Carlton";
import { Toorak } from "./pages/locations/Toorak";
import { Brighton } from "./pages/locations/Brighton";
import { SouthYarra } from "./pages/locations/SouthYarra";
import { Richmond } from "./pages/locations/Richmond";
import { Fitzroy } from "./pages/locations/Fitzroy";
import { Prahran } from "./pages/locations/Prahran";
import { Malvern } from "./pages/locations/Malvern";

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
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<ContactOptimized />} />
          <Route path="/services/professional-mould-inspections" element={<ProfessionalMouldInspections />} />
          <Route path="/services/complete-material-removal" element={<CompleteMaterialRemoval />} />
          <Route path="/services/advanced-fogging-sanitisation" element={<AdvancedFoggingSanitisation />} />
          <Route path="/services/comprehensive-mould-removal" element={<ComprehensiveMouldRemoval />} />
          <Route path="/services/subfloor-mould-remediation" element={<SubfloorMouldRemediation />} />
          <Route path="/services/mold-removal-carlton" element={<Carlton />} />
          <Route path="/services/mold-removal-toorak" element={<Toorak />} />
          <Route path="/services/mold-removal-brighton" element={<Brighton />} />
          <Route path="/services/mold-removal-south-yarra" element={<SouthYarra />} />
          <Route path="/services/mold-removal-richmond" element={<Richmond />} />
          <Route path="/services/mold-removal-fitzroy" element={<Fitzroy />} />
          <Route path="/services/mold-removal-prahran" element={<Prahran />} />
          <Route path="/services/mold-removal-malvern" element={<Malvern />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
