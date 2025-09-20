import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index"; // Keep homepage non-lazy for fastest initial load

// Lazy load all other pages
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const ContactOptimized = lazy(() => import("./pages/ContactOptimized").then(module => ({ default: module.ContactOptimized })));
const Areas = lazy(() => import("./pages/Areas"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DynamicLocationPage = lazy(() => import("./components/DynamicLocationPage").then(module => ({ default: module.DynamicLocationPage })));

// Lazy load service pages to reduce initial bundle size
const ProfessionalMouldInspections = lazy(() => import("./pages/ProfessionalMouldInspections").then(module => ({ default: module.ProfessionalMouldInspections })));
const CompleteMaterialRemoval = lazy(() => import("./pages/CompleteMaterialRemoval").then(module => ({ default: module.CompleteMaterialRemoval })));
const AdvancedFoggingSanitisation = lazy(() => import("./pages/AdvancedFoggingSanitisation").then(module => ({ default: module.AdvancedFoggingSanitisation })));
const ComprehensiveMouldRemoval = lazy(() => import("./pages/ComprehensiveMouldRemoval").then(module => ({ default: module.ComprehensiveMouldRemoval })));
const SubfloorMouldRemediation = lazy(() => import("./pages/SubfloorMouldRemediation").then(module => ({ default: module.SubfloorMouldRemediation })));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));

// Lazy load location pages to significantly reduce initial bundle size
const Carlton = lazy(() => import("./pages/locations/Carlton").then(module => ({ default: module.Carlton })));
const Toorak = lazy(() => import("./pages/locations/Toorak").then(module => ({ default: module.Toorak })));
const Brighton = lazy(() => import("./pages/locations/Brighton").then(module => ({ default: module.Brighton })));
const SouthYarra = lazy(() => import("./pages/locations/SouthYarra").then(module => ({ default: module.SouthYarra })));
const Richmond = lazy(() => import("./pages/locations/Richmond").then(module => ({ default: module.Richmond })));
const Fitzroy = lazy(() => import("./pages/locations/Fitzroy").then(module => ({ default: module.Fitzroy })));
const Prahran = lazy(() => import("./pages/locations/Prahran").then(module => ({ default: module.Prahran })));
const Malvern = lazy(() => import("./pages/locations/Malvern").then(module => ({ default: module.Malvern })));

// Lazy load admin pages for Phase 2A CRM
const AdminLogin = lazy(() => import("./pages/admin/Login").then(module => ({ default: module.AdminLogin })));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard").then(module => ({ default: module.AdminDashboard })));
const LeadsPage = lazy(() => import("./pages/admin/Leads").then(module => ({ default: module.LeadsPage })));

// Phase 2B: Advanced Lead Management
const LeadsKanban = lazy(() => import("./pages/admin/LeadsKanban").then(module => ({ default: module.LeadsKanban })));

const queryClient = new QueryClient();

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-professional">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<ContactOptimized />} />
            <Route path="/services/professional-mould-inspections" element={<ProfessionalMouldInspections />} />
            <Route path="/services/complete-material-removal" element={<CompleteMaterialRemoval />} />
            <Route path="/services/advanced-fogging-sanitisation" element={<AdvancedFoggingSanitisation />} />
            <Route path="/services/comprehensive-mould-removal" element={<ComprehensiveMouldRemoval />} />
            <Route path="/services/subfloor-mould-remediation" element={<SubfloorMouldRemediation />} />
            {/* Location Routes - New Structure */}
            <Route path="/locations/carlton" element={<Carlton />} />
            <Route path="/locations/toorak" element={<Toorak />} />
            <Route path="/locations/brighton" element={<Brighton />} />
            <Route path="/locations/south-yarra" element={<SouthYarra />} />
            <Route path="/locations/richmond" element={<Richmond />} />
            <Route path="/locations/fitzroy" element={<Fitzroy />} />
            <Route path="/locations/prahran" element={<Prahran />} />
            <Route path="/locations/malvern" element={<Malvern />} />

            {/* Legacy Routes - Redirect to New Structure */}
            <Route path="/services/mold-removal-carlton" element={<Carlton />} />
            <Route path="/services/mold-removal-toorak" element={<Toorak />} />
            <Route path="/services/mold-removal-brighton" element={<Brighton />} />
            <Route path="/services/mold-removal-south-yarra" element={<SouthYarra />} />
            <Route path="/services/mold-removal-richmond" element={<Richmond />} />
            <Route path="/services/mold-removal-fitzroy" element={<Fitzroy />} />
            <Route path="/services/mold-removal-prahran" element={<Prahran />} />
            <Route path="/services/mold-removal-malvern" element={<Malvern />} />

            {/* Dynamic Location Route - Handles all 100+ suburbs */}
            <Route path="/locations/:suburb" element={<DynamicLocationPage />} />

            {/* Phase 2A: Admin CRM Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/leads" element={<LeadsPage />} />

            {/* Phase 2B: Advanced Lead Management */}
            <Route path="/admin/leads/kanban" element={<LeadsKanban />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
