// src/pages/prepare/PrepareChapterDetail.tsx

import React, { lazy, Suspense, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { prepareCourse } from '@/data/prepareCourse'; // Assuming alias is set up for src
import SkeletonLoader from '@/components/SkeletonLoader'; // A simple loading component

// Vite's glob import feature. This path must exactly match your folder structure.
const modules = import.meta.glob('/src/pages/prepare/chapters/**/*.tsx');

const PrepareChapterDetail: React.FC = () => {
  const { chapterId, subChapterId } = useParams<{
    chapterId: string;
    subChapterId: string;
  }>();

  // Find the chapter/subchapter metadata by matching the URL params (folder/file names)
  const { chapter, subChapter } = useMemo(() => {
    if (!chapterId || !subChapterId) return { chapter: null, subChapter: null };
    
    const ch = prepareCourse.chapters.find((c) => c.folder === chapterId);
    if (!ch) return { chapter: null, subChapter: null };

    const sc = ch.subChapters.find((s) => s.file === subChapterId);
    
    return { chapter: ch, subChapter: sc };
  }, [chapterId, subChapterId]);

  // Dynamically select the component to render based on the file path.
  const ContentComponent = useMemo(() => {
    if (chapter && subChapter) {
      const filePath = `/src/pages/prepare/chapters/${chapter.folder}/${subChapter.file}.tsx`;

      if (modules[filePath]) {
        return lazy(modules[filePath] as () => Promise<{ default: React.ComponentType<any> }>);
      } else {
        // This error component helps debug if a file is missing from the file system.
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
    // Default component when no specific chapter is selected
    return () => <div className="text-lg text-muted-foreground p-8 text-center">Please select a topic from the sidebar to begin.</div>;
  }, [chapter, subChapter]);

  // Handle cases where the URL params don't match any data in courseData.ts
  if (chapterId && subChapterId && (!chapter || !subChapter)) {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-destructive">Content Not Found in courseData.ts</h1>
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

// This line is crucial for fixing the error.
export default PrepareChapterDetail;
