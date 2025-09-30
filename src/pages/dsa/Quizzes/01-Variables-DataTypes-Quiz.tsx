import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
// import { useDSAProgress } from '@/hooks/useDSAProgress';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

const quizData: QuizQuestion[] = [
  {
    question: "What is the main goal of an algorithm's 'analysis'?",
    options: [
      "To check if the code is bug-free",
      "To measure how the algorithm's performance scales with input size",
      "To write a program in the fewest lines of code",
      "To ensure the algorithm produces the correct output"
    ],
    answer: "To measure how the algorithm's performance scales with input size",
    explanation: "Algorithm analysis focuses on estimating the time and space resources an algorithm requires, particularly as the input size grows."
  },
  {
    question: "Which term is used to describe the efficiency of an algorithm in the worst-case scenario?",
    options: [
      "Best-case complexity",
      "Average-case complexity",
      "Worst-case complexity",
      "Amortized complexity"
    ],
    answer: "Worst-case complexity",
    explanation: "Worst-case complexity provides a guaranteed upper bound on the performance of an algorithm, which is often the most critical metric."
  },
  {
    question: "Which of the following is considered the most efficient time complexity for a searching algorithm?",
    options: [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(n log n)"
    ],
    answer: "O(log n)",
    explanation: "Logarithmic time complexity is highly efficient because the number of operations increases very slowly with the input size. Binary Search is a great example."
  }
];

const IntroductionAndAnalysisQuiz = () => {
    // Quiz state management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(quizData.length).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();
    // const { updateDSAProgress } = useDSAProgress();
  
    const handleOptionSelect = (option: string) => {
      if (isSubmitted) return;
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = option;
      setSelectedAnswers(newSelectedAnswers);
    };
  
    const getScore = () => {
      return selectedAnswers.reduce((score, selectedAnswer, index) => {
        return selectedAnswer === quizData[index].answer ? score + 1 : score;
      }, 0);
    };
  
    const handleSubmit = () => {
      setIsSubmitted(true);
      const score = getScore();
      const isPassed = score / quizData.length >= 0.8;
      
      // if (isPassed) {
      //   updateDSAProgress('chapter-01', '01-Introduction-and-Analysis-Quiz', 'completed');
      // }
  
      toast({
        title: "Quiz Completed!",
        description: `You scored ${score} out of ${quizData.length}.`,
      });
    };
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePrevQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    const handleTryAgain = () => {
      setIsSubmitted(false);
      setSelectedAnswers(Array(quizData.length).fill(null));
      setCurrentQuestionIndex(0);
    };
    
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
  
    if (isSubmitted) {
      return (
        <div className="p-6 max-w-4xl mx-auto">
          <Card className="bg-card text-card-foreground shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Quiz Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center">You scored {getScore()} out of {quizData.length}!</p>
              <div className="mt-6 space-y-4">
                {quizData.map((question, index) => {
                  const isCorrect = selectedAnswers[index] === question.answer;
                  const isWrong = selectedAnswers[index] !== null && !isCorrect;
  
                  return (
                    <Card key={index} className="bg-muted">
                      <CardHeader>
                        <CardTitle className="text-lg">{index + 1}. {question.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {question.options.map((option) => {
                            const isOptionCorrect = option === question.answer;
                            const isOptionSelected = option === selectedAnswers[index];
                            const isOptionWrong = isOptionSelected && !isOptionCorrect;
  
                            return (
                              <div
                                key={option}
                                className={`flex items-center justify-between p-3 rounded-md ${
                                  isOptionCorrect ? 'bg-green-500/20 text-green-700 dark:text-green-400' : ''
                                } ${isOptionWrong ? 'bg-red-500/20 text-red-700 dark:text-red-400' : ''}`}
                              >
                                <span>{option}</span>
                                {isOptionCorrect && <CheckCircle className="w-5 h-5" />}
                                {isOptionWrong && <XCircle className="w-5 h-5" />}
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-4 p-4 bg-background rounded-md">
                          <h4 className="font-semibold">Explanation:</h4>
                          <p className="text-muted-foreground">{question.explanation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleTryAgain} className="w-full">
                Try Again
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }
  
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Variables & DataTypes Quiz</CardTitle>
            <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of {quizData.length}</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  variant={selectedAnswer === option ? 'default' : 'outline'}
                  className="w-full justify-start p-6 text-left h-auto"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            {currentQuestionIndex === quizData.length - 1 ? (
              <Button onClick={handleSubmit} disabled={selectedAnswers.includes(null)}>
                Submit
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} disabled={!selectedAnswer}>
                Next
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    );
};

export default IntroductionAndAnalysisQuiz;
