import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code2, Rocket, BookOpen, ArrowRight } from "lucide-react";

// Import your local course data
import { dsaCourse } from "@/data/dsaCourse";
import { aptitudeCourse } from "@/data/aptitudeCourse";
import { developmentCourse} from "@/data/courseData";
import { prepareCourse } from "@/data/prepareCourse";


const iconMap: { [key: string]: any } = {
  Brain,
  Code2,
  Rocket,
  BookOpen,
};

// Combine all your subjects into one array
const allSubjects = [
  { id: 'dsa', title: 'Data Structures & Algorithms', description: 'Learn essential DSA concepts.', slug: 'dsa', icon: 'Code2' },
  { id: 'aptitude', title: 'Aptitude & Reasoning', description: 'Master quantitative aptitude and logical reasoning.', slug: 'aptitude', icon: 'Brain' },
  { id: 'development', title: 'Development', description: 'Build practical projects and learn modern web development.', slug: 'development', icon: 'Rocket' },
  { id: 'prepare', title: 'CS Fundamentals', description: 'Strengthen your core CS concepts.', slug: 'cs-fundamentals', icon: 'BookOpen' }
];

export default function Explore() {
  // We no longer need to fetch from Supabase, so we can remove useState, useEffect, and all the fetching logic.
  const subjects = allSubjects;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore Subjects</h1>
        <p className="text-muted-foreground">
          Choose your learning path and start mastering placement prep
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => {
          const Icon = iconMap[subject.icon] || BookOpen;

          return (
            <Card
              key={subject.id}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{subject.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={`/learn/${subject.slug}`}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {subjects.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Subjects Available</h2>
          <p className="text-muted-foreground">Check back soon for new learning content!</p>
        </div>
      )}
    </div>
  );
}