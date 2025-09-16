// ==========================================================
// FINAL DSA Course Data File
// ==========================================================

// ----------------------------------------------------------
// 1. Interfaces
// ----------------------------------------------------------

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'not-started' | 'completed' | 'in-progress';
  isFreeProblem?: boolean;
  description?: string;
  examples?: string[];
  constraints?: string[];
  articleLink?: string;
  practiceLink?: string;
  videoLink?: string;
}

export interface Lecture {
  id: string;
  title: string;
  problems: Problem[];
  totalProblems: number;
  completedProblems: number;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
  totalProblems: number;
  completedProblems: number;
}

// ----------------------------------------------------------
// 2. The Main Data Array
// ----------------------------------------------------------

export const dsaCourse: Step[] = [
  // ▼▼▼ STEP 1 DATA ADDED ▼▼▼
  {
    id: "step-1",
    title: "Learn the basics",
    description: "Start your DSA journey with basic programming concepts",
    totalProblems: 31,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-1-1",
        title: "Things to Know in C++/Java/Python or any language",
        totalProblems: 9,
        completedProblems: 0,
        problems: [],
      },
      {
        id: "lec-1-2",
        title: "Build-up Logical Thinking",
        totalProblems: 1,
        completedProblems: 0,
        problems: [],
      },
      {
        id: "lec-1-3",
        title: "Learn STL/Java-Collections",
        totalProblems: 2,
        completedProblems: 0,
        problems: [],
      },
      {
        id: "lec-1-4",
        title: "Know Basic Maths",
        totalProblems: 7,
        completedProblems: 0,
        problems: [],
      },
      {
        id: "lec-1-5",
        title: "Learn Basic Recursion",
        totalProblems: 10,
        completedProblems: 0,
        problems: [],
      },
      {
        id: "lec-1-6",
        title: "Learn Basic Hashing",
        totalProblems: 2,
        completedProblems: 0,
        problems: [],
      },
    ],
  },
];