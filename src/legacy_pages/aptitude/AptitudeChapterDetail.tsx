import { useParams, useNavigate } from "react-router-dom";
import { useAptitudeProgress } from "@/hooks/useAptitudeProgress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect, lazy, Suspense } from "react";
import { useAuth } from "@/hooks/useAuth";

const AptitudeTopicCard = lazy(() => 
  import("@/components/AptitudeTopicCard").then(module => ({
    default: module.default || module.AptitudeTopicCard || module
  }))
);

const AptitudeChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { course, toggleTopicStatus, loading: progressLoading } = useAptitudeProgress();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const chapter = course?.find(c => c.id === chapterId);

  if (progressLoading || authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Chapter Not Found</h1>
          <Button onClick={() => navigate("/aptitude")}>
            <Home className="w-4 h-4 mr-2" />
            Back to Aptitude
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/aptitude")}
              className="border-primary/20 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Back to Aptitude</span>
            </Button>
            <h1 className="text-lg sm:text-xl font-bold text-foreground text-center">{chapter.chapter}</h1>
            <div className="w-[88px]"></div> {/* To balance the header */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Topics Grid */}
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border animate-pulse">
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded w-2/3"></div>
              </div>
            ))}
          </div>
        }>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {chapter.topics?.map((topic) => (
              <AptitudeTopicCard 
                key={topic.name}
                topic={topic}
                onToggleStatus={() => toggleTopicStatus(chapter.id, topic.name)}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default AptitudeChapterDetail;