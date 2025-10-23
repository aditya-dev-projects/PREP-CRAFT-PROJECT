import React, { lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { dsaCourse } from '@/data/dsaCourse';
import SkeletonLoader from '@/components/SkeletonLoader';

// Vite's glob import feature. This path must exactly match your folder structure.
const modules = import.meta.glob('/src/pages/dsa/notes/**/*.tsx');
const quizModules = import.meta.glob('/src/pages/dsa/quiz/**/*.tsx');

const ChapterDetail: React.FC = () => {
  const { chapterId, subChapterId } = useParams<{
    chapterId: string;
    subChapterId: string;
  }>();

  // Find the chapter/subchapter metadata by matching the URL params (folder/file names)
  const { chapter, subChapter } = useMemo(() => {
    if (!chapterId && !subChapterId) return { chapter: null, subChapter: null };

    let foundChapter = null;
    let foundSubChapter = null;

    // Try to find as a note
    if (chapterId) {
      foundChapter = dsaCourse.chapters.find((c) => c.folder === chapterId);
      if (foundChapter && subChapterId) {
        foundSubChapter = foundChapter.subChapters.find((s) => s.file === subChapterId && s.type === 'note');
      }
    }

    // If not found as a note, try to find as a quiz
    if (!foundSubChapter && subChapterId) {
      const quiz = dsaCourse.quizzes.find((q) => q.file === subChapterId);
      if (quiz) {
        foundSubChapter = { ...quiz, type: 'quiz' }; // Add type for consistency
        foundChapter = dsaCourse.chapters.find((c) => c.id === quiz.chapterId); // Find parent chapter for context
      }
    }
    
    return { chapter: foundChapter, subChapter: foundSubChapter };
  }, [chapterId, subChapterId]);

  // Dynamically select the component to render based on the file path.
  const ContentComponent = useMemo(() => {
    if (subChapter) {
      let filePath = '';
      let currentModules = {};

      if (subChapter.type === 'note' && chapter) {
        filePath = `/src/pages/dsa/notes/${chapter.folder}/${subChapter.file}.tsx`;
        currentModules = modules;
      } else if (subChapter.type === 'quiz') {
        filePath = `/src/pages/dsa/quiz/${subChapter.file}.tsx`;
        currentModules = quizModules;
      }

      if (filePath && currentModules[filePath]) {
        return lazy(currentModules[filePath] as () => Promise<{ default: React.ComponentType<any> }>);
      } else {
        return () => (
            <div className="bg-destructive/10 border border-destructive/50 text-destructive p-4 rounded-lg">
                <h2 className="font-bold">Module Not Found</h2>
                <p className="mt-2 text-sm">The application tried to load the following file, but it was not found:</p>
                <pre className="bg-background p-2 rounded-md mt-2 text-xs"><code>{filePath}</code></pre>
                <p className="mt-4 text-sm">Please check for typos or casing differences between this path and your actual file system.</p>
            </div>
        );
      }
    }
    // Default component when no specific chapter/subchapter is selected
    return () => <div className="text-lg text-muted-foreground p-8 text-center">Please select a topic from the sidebar to begin.</div>;
  }, [chapter, subChapter]);

  // Handle cases where the URL params don't match any data in dsaCourse.ts
  if ((chapterId || subChapterId) && (!chapter || !subChapter)) {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-destructive">Content Not Found in dsaCourse.ts</h1>
            <p className="mt-2 text-muted-foreground">Could not find a match for <code>{chapterId}/{subChapterId}</code>.</p>
        </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
        {subChapter && (
             <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{subChapter.title}</h1>
        )}
      <Suspense fallback={<SkeletonLoader />}>
        <div className="prose dark:prose-invert max-w-none">
            <ContentComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default ChapterDetail;