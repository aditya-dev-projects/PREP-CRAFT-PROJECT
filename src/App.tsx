import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChapterIndex from "./pages/dsa/ChapterIndex";
import ChapterDetail from "./pages/dsa/ChapterDetail";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import PracticePage from "./pages/dsa/PracticePage";
import LandingPage from "./pages/LandingPage";
import Index from "./pages/Index";
import ProtectedRoute from "./components/ProtectedRoute";
import NavHeader from "./components/NavHeader";
import DevelopmentPage from "./pages/development/DevelopmentPage";
import AptitudePage from "./pages/aptitude/AptitudePage";
import AptitudeChapterDetail from "./pages/aptitude/AptitudeChapterDetail";
import DevelopmentChapterDetail from "./pages/development/DevelopmentChapterDetail";
import NotesPage from "./pages/dsa/NotesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="prepcraft-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavHeader />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/development" element={<DevelopmentPage />}>
                <Route path=":chapterId/:subChapterId" element={<DevelopmentChapterDetail />} />
                <Route path="quiz/:chapterId" element={<DevelopmentChapterDetail />} />
              </Route>
              <Route path="/aptitude" element={<AptitudePage />} />
              <Route path="/aptitude/:chapterId" element={<AptitudeChapterDetail />} />
              <Route path="/dsa" element={<Index />} />
              <Route path="/chapters" element={<ChapterIndex />} />
              <Route path="/chapter/:chapterId" element={<ChapterDetail />} />
              <Route path="/practice/:problemId" element={<PracticePage />} />
              <Route path="/dsa/notes/:chapterId/:lectureId" element={<NotesPage />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;