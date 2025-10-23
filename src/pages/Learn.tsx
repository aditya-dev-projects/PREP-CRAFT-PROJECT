import { useState } from "react"; // Import useState
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  FileText,
  Code,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Import Select components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label"; // Import Label

// Import your local course data
import { dsaCourse } from "@/data/dsaCourse";
import { aptitudeCourseData } from "@/data/aptitudeCourse";
import { developmentCourse } from "@/data/courseData";
import { prepareCourse } from "@/data/prepareCourse";

const lessonTypeIcons: { [key: string]: React.ElementType } = {
  video: PlayCircle,
  notes: FileText,
  quiz: HelpCircle,
  coding: Code,
};

// Helper function to safely extract chapters array IF the data is flat
const getChaptersArray = (courseData: any): any[] => {
  if (Array.isArray(courseData)) { return courseData; }
  if (courseData && Array.isArray(courseData.chapters)) { return courseData.chapters; }
  if (courseData && Array.isArray(courseData.prepareChapters)) { return courseData.prepareChapters; }
  console.warn("Unexpected course data structure in getChaptersArray:", courseData);
  return [];
};


// Map to select correct data per subject
const courseDataMap: { [key: string]: any } = {
  'dsa': {
    title: "Data Structures & Algorithms",
    description: "Learn essential DSA concepts.",
    chapters: getChaptersArray(dsaCourse),
    isGrouped: false,
  },
  'aptitude': {
    title: "Aptitude & Reasoning",
    description: "Master quantitative aptitude and logical reasoning.",
    groupedData: aptitudeCourseData,
    isGrouped: true,
    // Define the sections for the dropdown
    sections: [
        { key: 'quantitative', label: 'Quantitative Aptitude' },
        { key: 'logical', label: 'Logical Reasoning' },
        { key: 'verbal', label: 'Verbal Ability' },
    ]
  },
  'development': {
    title: "Development",
    description: "Build practical projects and learn modern web development.",
    chapters: getChaptersArray(developmentCourse),
    isGrouped: false,
  },
  "cs-fundamentals": {
    title: "CS Fundamentals",
    description: "Strengthen your core CS concepts.",
    chapters: getChaptersArray(prepareCourse),
    isGrouped: false,
  },
};

// Helper component to render a single chapter accordion (remains unchanged)
const ChapterAccordion = ({ chapters, subjectSlug }: { chapters: any[], subjectSlug: string }) => {
    if (!Array.isArray(chapters)) {
        console.error("ChapterAccordion received non-array chapters:", chapters);
        return <p className="text-destructive">Error: Invalid chapter data format.</p>;
    }

    return (
      <Accordion type="multiple" className="w-full">
        {chapters.map((chapter: any, index: number) => {
            if (!chapter || typeof chapter !== 'object' || !chapter.title) {
                console.warn("Skipping invalid chapter data:", chapter);
                return null;
            }
            return (
              <AccordionItem value={`item-${chapter.id || index}`} key={chapter.id || `chapter-${index}`}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                  {chapter.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-4 border-l ml-2">
                    {Array.isArray(chapter.subChapters) && chapter.subChapters.length > 0 ? (
                        chapter.subChapters.map((lesson: any) => {
                          if (!lesson || typeof lesson !== 'object' || !lesson.id || !lesson.title || !lesson.type || !lesson.path) {
                              console.warn("Skipping invalid lesson data in chapter:", chapter.title, lesson);
                              return (
                                  <div key={`invalid-${Math.random()}`} className="flex items-center justify-between p-2 rounded-md text-muted-foreground text-sm">
                                      <span>Invalid lesson data</span>
                                  </div>
                              );
                          }
                          const Icon = lessonTypeIcons[lesson.type as keyof typeof lessonTypeIcons] || FileText;
                          return (
                            <div key={lesson.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                              <div className="flex items-center gap-3">
                                <Icon className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm">{lesson.title}</span>
                              </div>
                              <Button size="sm" variant="ghost" asChild>
                                <Link to={`/app/content/${subjectSlug}/${lesson.id}`}>
                                  {lesson.type === "quiz" ? "Start" : "View"}
                                </Link>
                              </Button>
                            </div>
                          );
                        })
                    ) : (
                        <p className="text-sm text-muted-foreground p-2">No lessons in this chapter yet.</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
        })}
        {chapters.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No chapters available yet
                </h3>
                <p className="text-muted-foreground">
                  Check back soon for new content!
                </p>
              </CardContent>
            </Card>
        )}
      </Accordion>
    );
};


export default function Learn() {
  const { subject: subjectSlug } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  // State to hold the selected aptitude section key ('quantitative', 'logical', 'verbal')
  const [selectedAptitudeSection, setSelectedAptitudeSection] = useState<string | null>(null);

  const subjectData = subjectSlug ? courseDataMap[subjectSlug] : null;

  if (!subjectData) {
    // Subject not found handling remains the same
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Subject not found</h2>
        <Button onClick={() => navigate("/explore")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Explore
        </Button>
      </div>
    );
  }

  // Determine which chapters structure to use
  const isGrouped = subjectData.isGrouped;
  const chapters = !isGrouped ? (subjectData.chapters || []) : null;
  const groupedData = isGrouped ? (subjectData.groupedData) : null;
  const aptitudeSections = isGrouped ? (subjectData.sections || []) : [];

  // Determine which chapters to display for Aptitude based on dropdown selection
  const aptitudeChaptersToShow =
    isGrouped && groupedData && selectedAptitudeSection
      ? groupedData[selectedAptitudeSection] || [] // Get chapters for the selected section
      : []; // Show nothing if no section is selected yet


  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        onClick={() => navigate("/explore")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Explore
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{subjectData.title}</h1>
        <p className="text-muted-foreground">{subjectData.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Chapters and Lessons */}
        <div className="md:col-span-2 space-y-4">

          {/* Render Dropdown ONLY for Aptitude */}
          {isGrouped && (
            <div className="mb-6 space-y-2">
                <Label htmlFor="aptitude-section-select">Select Section</Label>
                <Select
                    value={selectedAptitudeSection || ''}
                    onValueChange={(value) => setSelectedAptitudeSection(value || null)}
                >
                    <SelectTrigger id="aptitude-section-select" className="w-full md:w-[300px]">
                        <SelectValue placeholder="Choose an Aptitude section..." />
                    </SelectTrigger>
                    <SelectContent>
                        {aptitudeSections.map((section: { key: string; label: string }) => (
                            <SelectItem key={section.key} value={section.key}>
                                {section.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
          )}

          {/* Conditional Rendering based on subject and selection */}
          {isGrouped ? (
            // Only render accordion if a section is selected for Aptitude
            selectedAptitudeSection && (
                 <ChapterAccordion chapters={aptitudeChaptersToShow} subjectSlug={subjectSlug!} />
            )
          ) : (
            // Render the single accordion for other subjects
            <ChapterAccordion chapters={chapters || []} subjectSlug={subjectSlug!} />
          )}

           {/* Message if Aptitude section hasn't been chosen yet */}
           {isGrouped && !selectedAptitudeSection && (
             <Card className="border-dashed">
                <CardContent className="pt-6 text-center text-muted-foreground">
                    Please select an Aptitude section from the dropdown above to view chapters.
                </CardContent>
             </Card>
           )}

        </div>

        {/* Progress Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Progress tracking will be added back soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

