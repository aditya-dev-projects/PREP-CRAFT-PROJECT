import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { ThemeProvider } from "@/components/ThemeProvider"; // Assuming you have this
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/components/DashboardLayout";

// Lovable Project Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Learn from "./pages/Learn";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Your custom content viewer page
import ContentPage from "./pages/ContentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Assuming you have ThemeProvider - keep it if you do */}
    {/* <ThemeProvider defaultTheme="dark" storageKey="prepcraft-theme"> */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider> {/* AuthProvider wraps all routes */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/learn/:subject" element={<Learn />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/onboarding" element={<Onboarding />} />

                {/* Route for displaying your legacy content */}
                <Route path="/app/content/:subject/:lessonId" element={<ContentPage />} />

                {/* You might not need these old routes anymore if ContentPage handles everything */}
                {/* <Route path="/development" element={<DevelopmentPage />}> ... </Route> */}
                {/* <Route path="/aptitude" element={<AptitudePage />} /> ... </Route> */}
                {/* <Route path="/dsa" element={<Index />}> ... </Route> */}
                {/* <Route path="/prepare" element={<PreparePage />}> ... </Route> */}
              </Route>

              {/* Catch-all Not Found Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    {/* </ThemeProvider> */}
   </QueryClientProvider>
);

export default App;
