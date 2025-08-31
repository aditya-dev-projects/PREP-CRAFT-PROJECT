import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import LectureNotes from "./LectureNotes";

const NotesPage = () => {
  const { chapterId, lectureId } = useParams<{ chapterId: string; lectureId: string }>();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/chapter/${chapterId}`)}
            className="border-primary/20 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Back to Chapter</span>
          </Button>
          <h1 className="text-lg sm:text-xl font-bold text-foreground text-center">Notes</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="border-primary/20 hover:bg-primary/10"
          >
            <Home className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="prose dark:prose-invert max-w-none">
          {lectureId && <LectureNotes lectureId={lectureId} />}
        </div>
      </main>
    </div>
  );
};

export default NotesPage;