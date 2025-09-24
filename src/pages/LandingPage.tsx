import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const LandingPage = () => {
  const { user } = useAuth();
  const getStartedLink = user ? "/dsa" : "/auth";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl md:text-7xl animate-pulse">
                One-stop platform for DSA, Development, and Aptitude
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Master coding interviews, technical rounds, and placement skills
                with structured content and practice tools.
              </p>
              <Link to={getStartedLink}>
                <button className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Sign up to start your journey today.
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                To make learning DSA, Development, and Aptitude easier and
                accessible to every student preparing for jobs.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Link
                to="/dsa"
                className="grid gap-1 p-6 rounded-lg bg-background hover:bg-muted transition-all border shadow-sm h-auto sm:h-48 content-start"
              >
                <h3 className="text-xl font-bold">
                  Data Structures & Algorithms
                </h3>
                <p className="text-muted-foreground">
                  Learn and practice in 18 chapters with a built-in
                  multi-language code editor. Track your progress.
                </p>
              </Link>
              <Link
                to="/development"
                className="grid gap-1 p-6 rounded-lg bg-background hover:bg-muted transition-all border shadow-sm h-auto sm:h-48 content-start"
              >
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-muted-foreground">
                  Coming Soon! This section will cover full-stack and modern dev
                  skills to get you job-ready.
                </p>
              </Link>
              <Link
                to="/aptitude"
                className="grid gap-1 p-6 rounded-lg bg-background hover:bg-muted transition-all border shadow-sm h-auto sm:h-48 content-start"
              >
                <h3 className="text-xl font-bold">Aptitude</h3>
                <p className="text-muted-foreground">
                  Master placement-focused aptitude with structured chapters,
                  quick notes, and progress tracking to stay interview-ready
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Us?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We provide a comprehensive and structured learning experience to
                help you excel in your placements.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 p-6 rounded-lg bg-background hover:bg-muted transition-all border shadow-sm h-auto sm:h-48 content-start">
                <h3 className="text-xl font-bold">Structured Learning Path</h3>
                <p className="text-muted-foreground">
                  A clear and concise curriculum to guide you through your
                  learning journey.
                </p>
              </div>
              <div className="grid gap-1 p-6 rounded-lg bg-background hover:bg-muted transition-all border shadow-sm h-auto sm:h-48 content-start">
                <h3 className="text-xl font-bold">Hands-on Practice</h3>
                <p className="text-muted-foreground">
                  In-built code editor and practice problems to solidify your
                  understanding.
                </p>
              </div>
              <div className="grid gap-1 p-6 rounded-lg bg-background hover:bg-muted transition-all border shadow-sm h-auto sm:h-48 content-start">
                <h3 className="text-xl font-bold">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Keep track of your progress and stay motivated to achieve your
                  goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto max-w-3xl space-y-4 mt-8">
              <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  Who is this platform for?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  This platform is for students and professionals who want to
                  learn and practice Data Structures and Algorithms, prepare for
                  technical interviews, and improve their problem-solving
                  skills.
                </p>
              </details>
              {/*  */}
              <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  What is PrepCraft?
                </summary>
                <p className="mt-2 text-muted-foreground">
                 PrepCraft is a placement-prep platform that helps students get ready for interviews with structured content in DSA, Aptitude, and Development, along with quizzes, practice questions, and progress tracking.
                </p>
              </details>
              <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  What can I do on the DSA section right now?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  You can follow a structured learning path, read detailed notes
                  , solve problems, run your code in built in code editor , and
                  track your progress through various chapters of DSA.
                </p>
              </details>
              <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  When will the Development section launch?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  The Development section has been updated with notes and
                  practice problems will be updated soon . Stay tuned for
                  updates!
                </p>
              </details>
              <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  Do I need to install anything to use it?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  No installation is required to get started with DSA, as our
                  built-in code editor is available (laptop only). However, for
                  development practice, you’ll need to install VS Code and use
                  it accordingly .
                </p>
              </details>
              <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  Are aptitude questions the same for all companies, or do they
                  differ?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  The core concepts remain the same (Percentages,
                  Time-Speed-Distance, Profit & Loss, etc.), but the difficulty
                  and question style vary by company. For example, service-based
                  companies like TCS or Infosys focus more on basic-to-moderate
                  level, while product-based companies like Amazon, Adobe, or
                  Atlassian may include tougher, application-based questions.
                  PrepCraft curates practice questions from beginner to advanced
                  so you’re ready for both. 
                </p>
              </details>

              
               <details className="p-4 rounded-lg bg-background">
                <summary className="font-semibold cursor-pointer">
                  How should I start preparing for Quantitative Aptitude if I’m weak in math?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Begin with basics like Number System, Percentages, and Ratios. Focus on formulas, shortcuts, and daily practice before moving to advanced problems. PrepCraft’s step-by-step notes, examples, and quizzes make this easier . 
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;