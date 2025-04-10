
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LearningWorld from "./pages/LearningWorld";
import Assessment from "./pages/Assessment";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Learning from "./pages/Learning";
import CompanyProfile from "./pages/CompanyProfile";
import DeviceSmartphone from "./pages/DeviceSmartphone";
import DeviceTelevision from "./pages/DeviceTelevision";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learning" element={<LearningWorld />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/courses" element={<Learning />} />
          <Route path="/about" element={<CompanyProfile />} />
          <Route path="/devices/smartphone" element={<DeviceSmartphone />} />
          <Route path="/devices/television" element={<DeviceTelevision />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
