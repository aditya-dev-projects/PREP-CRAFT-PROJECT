import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// Import all your data sources
import { dsaCourse } from "@/data/dsaCourse";
// Correct the import name here
import { aptitudeCourseData } from "@/data/aptitudeCourse";
import { developmentCourse } from "@/data/courseData";
import { prepareCourse } from "@/data/prepareCourse";

// Helper function to SAFELY extract chapters array, checking multiple structures
const getChaptersFromCourse = (courseData: any): any[] => {
  if (Array.isArray(courseData)) {
    return courseData;
  }
  if (courseData && typeof courseData === 'object') {
    if (Array.isArray(courseData.chapters)) {
        return courseData.chapters;
    }
    // Handle Aptitude's grouped structure
    if (courseData.quantitative || courseData.logical || courseData.verbal) {
        return [
            ...(Array.isArray(courseData.quantitative) ? courseData.quantitative : []),
            ...(Array.isArray(courseData.logical) ? courseData.logical : []),
            ...(Array.isArray(courseData.verbal) ? courseData.verbal : [])
        ];
    }
  }
  console.warn("Unexpected course data structure in getChaptersFromCourse:", courseData);
  return [];
};


const allCourses = {
  dsa: dsaCourse,
  // Use the corrected variable name here
  aptitude: aptitudeCourseData,
  development: developmentCourse,
  'cs-fundamentals': prepareCourse,
};

const ContentPage = () => {
  const { subject, lessonId } = useParams<{ subject: string; lessonId: string }>();
  const navigate = useNavigate();
  const [ContentComponent, setContentComponent] = useState<React.LazyExoticComponent<React.ComponentType<any>> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    setContentComponent(null);

    if (!subject || !lessonId) {
        setError("Missing subject or lesson ID.");
        setLoading(false);
        return;
    }

    const course = allCourses[subject as keyof typeof allCourses];

    if (!course) {
        setError(`Course data not found for subject: ${subject}`);
        setLoading(false);
        return;
    }

    const chapters = getChaptersFromCourse(course);
    if (!Array.isArray(chapters)) {
        setError(`Invalid chapter structure for subject: ${subject}`);
        setLoading(false);
        return;
    }

    let lesson = null;
    for (const chapter of chapters) {
        // Ensure chapter and subChapters are valid before searching
        if (chapter && Array.isArray(chapter.subChapters)) {
            const foundLesson = chapter.subChapters.find((sub: any) => sub && sub.id === lessonId);
            if (foundLesson) {
                lesson = foundLesson;
                break;
            }
        }
    }

    if (lesson && lesson.path) {
      const componentPromise = import(`../legacy_pages/${lesson.path}.tsx`);

      componentPromise.then(module => {
          if (isMounted) {
            // Check if the default export exists and is a component
            if (module.default && typeof module.default === 'function') {
                 setContentComponent(lazy(() => Promise.resolve(module)));
            } else {
                 console.error(`Component at path ${lesson.path}.tsx does not have a default export or is not a React component.`);
                 setError(`Failed to load content component structure for path: ${lesson.path}.`);
            }
            setLoading(false);
          }
      }).catch(importError => {
          console.error("Error importing component:", importError);
          if (isMounted) {
            setError(`Failed to load content for path: ${lesson.path}. Check the file path exists and is correct.`);
            setLoading(false);
          }
      });

    } else {
        if (!lesson) {
             setError(`Lesson with ID "${lessonId}" not found in subject "${subject}".`);
        } else if (!lesson.path) {
             setError(`Lesson with ID "${lessonId}" (Title: ${lesson.title}) is missing the 'path' property in the data file.`);
        }
        setLoading(false);
    }

    return () => {
      isMounted = false;
    };

  }, [subject, lessonId]);

  return (
    <div className="container py-8">
      <Button variant="ghost" onClick={() => navigate(`/learn/${subject}`)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Lessons
      </Button>

      {loading && (
          <div className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-64 w-full" />
          </div>
      )}

      {error && (
          <div className="text-destructive p-4 border border-destructive rounded-md bg-destructive/10">
              <p className="font-semibold">Error Loading Content</p>
              <p>{error}</p>
              <p className="text-xs mt-2">Please check the console for more details and verify the lesson's `path` property in your data files.</p>
          </div>
      )}

      {!loading && !error && ContentComponent && (
          <Suspense fallback={
              <div className="space-y-4">
                  <Skeleton className="h-8 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-64 w-full" />
              </div>
          }>
            <ContentComponent />
          </Suspense>
      )}

      {!loading && !error && !ContentComponent && !loading && ( // Added !loading check here
          <div>Content component could not be loaded or was not found.</div>
      )}
    </div>
  );
};

export default ContentPage;

