import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { WebSocketProvider } from "@/contexts/WebSocketContext";
// TEMPORARILY DISABLED: import { useServiceWorker } from "@/hooks/useServiceWorker";
import { initPerformanceObserver } from "@/hooks/usePerformanceMonitor";
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
const LeadEdit = lazy(() => import("./pages/admin/LeadEdit"));
const LeadNew = lazy(() => import("./pages/admin/LeadNew"));

// Phase 2B: Advanced Lead Management - Fixed Version with better drag and drop
const LeadsKanban = lazy(() => import("./pages/admin/LeadsKanbanFixed").then(module => ({ default: module.LeadsKanbanFixed })));

// Phase 2B: Mobile-Optimized Lead Management
const LeadsKanbanMobile = lazy(() => import("./pages/admin/LeadsKanbanMobile"));

// Previous versions for fallback
const LeadsKanbanOptimized = lazy(() => import("./pages/admin/LeadsKanbanOptimized").then(module => ({ default: module.LeadsKanbanOptimized })));
const LeadsKanbanOriginal = lazy(() => import("./pages/admin/LeadsKanban").then(module => ({ default: module.LeadsKanban })));

// Phase 2B+: Advanced CRM Features
const InspectionCalendar = lazy(() => import("./components/admin/InspectionCalendar").then(module => ({ default: module.InspectionCalendar })));
const AnalyticsDashboard = lazy(() => import("./components/admin/AnalyticsDashboard").then(module => ({ default: module.AnalyticsDashboard })));
const CommunicationHub = lazy(() => import("./components/admin/CommunicationHub").then(module => ({ default: module.CommunicationHub })));

// Phase 2C: Notification & Calendar System
const NotificationPage = lazy(() => import("./pages/admin/NotificationPage").then(module => ({ default: module.NotificationPage })));

// Phase 3: Mobile Inspection Form
const InspectionWizard = lazy(() => import("./pages/mobile/InspectionWizard"));
const InspectionDetail = lazy(() => import("./pages/admin/InspectionDetail"));

// User Profile
const ProfilePage = lazy(() => import("./pages/admin/Profile").then(module => ({ default: module.ProfilePage })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false, // Prevent auto-refresh when window regains focus
      refetchOnMount: false, // Don't refetch on component mount if data exists
      refetchOnReconnect: false, // Don't refetch on network reconnect
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors except 408 (timeout)
        if (error?.status >= 400 && error?.status < 500 && error?.status !== 408) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-professional">Loading...</p>
    </div>
  </div>
);

// Service Worker Registration Component - TEMPORARILY DISABLED FOR DEVELOPMENT FIX
const ServiceWorkerProvider = ({ children }: { children: React.ReactNode }) => {
  // EMERGENCY FIX: Temporarily disable service worker registration
  // const { registerServiceWorker, isOnline } = useServiceWorker();

  useEffect(() => {
    // DISABLED: registerServiceWorker();
    console.log('[SW] Service worker registration temporarily disabled for development stability');

    // Initialize performance monitoring based on environment variable
    if (import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING !== 'false') {
      initPerformanceObserver();
    }
  }, []);

  // DISABLED: Add network status to document for CSS styling
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-network-status', isOnline ? 'online' : 'offline');
  // }, [isOnline]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <WebSocketProvider>
          <ServiceWorkerProvider>
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
                  <Route path="/admin/profile" element={<ProfilePage />} />
                  <Route path="/admin/leads" element={<LeadsPage />} />
                  <Route path="/admin/leads/edit/:id" element={<LeadEdit />} />
                  <Route path="/admin/leads/new" element={<LeadNew />} />

                  {/* Phase 2B: Advanced Lead Management */}
                  <Route path="/admin/leads-kanban" element={<LeadsKanban />} />
                  <Route path="/admin/leads/kanban" element={<LeadsKanban />} />
                  <Route path="/admin/leads-mobile" element={<LeadsKanbanMobile />} />
                  <Route path="/admin/leads/kanban-mobile" element={<LeadsKanbanMobile />} />
                  <Route path="/admin/leads/kanban-optimized" element={<LeadsKanbanOptimized />} />
                  <Route path="/admin/leads/kanban-original" element={<LeadsKanbanOriginal />} />

                  {/* Phase 2B+: Advanced CRM Features */}
                  <Route path="/admin/calendar" element={<InspectionCalendar />} />
                  <Route path="/admin/inspections" element={<InspectionCalendar />} />
                  <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
                  <Route path="/admin/reports" element={<AnalyticsDashboard />} />
                  <Route path="/admin/communication" element={<CommunicationHub />} />
                  <Route path="/admin/templates" element={<CommunicationHub />} />

                  {/* Phase 2C: Notification & Calendar System */}
                  <Route path="/admin/notifications" element={<NotificationPage />} />

                  {/* Phase 3: Mobile Inspection Form */}
                  <Route path="/mobile/inspection/:inspectionId" element={<InspectionWizard />} />
                  <Route path="/admin/inspections/:inspectionId" element={<InspectionDetail />} />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ServiceWorkerProvider>
        </WebSocketProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
