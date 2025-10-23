import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const quizData = [
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The smallest prime number is 2.",
  },
  {
    question: "Which of the following is an irrational number?",
    options: ["1/2", "3.14", "√4", "π"],
    answer: "π",
    explanation:
      "An irrational number cannot be expressed as a simple fraction. π is a well-known irrational number.",
  },
  {
    question: "What is the sum of the first 10 natural numbers?",
    options: ["45", "50", "55", "60"],
    answer: "55",
    explanation:
      "The sum of the first n natural numbers is given by the formula n(n+1)/2. For n=10, the sum is 10(11)/2 = 55.",
  },
  {
    question: "What is the value of 5! (5 factorial)?",
    options: ["120", "720", "24", "100"],
    answer: "120",
    explanation:
      "Factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. So, 5! = 5 * 4 * 3 * 2 * 1 = 120.",
  },
  {
    question: "Which number is divisible by 9?",
    options: ["12345", "54321", "78912", "98765"],
    answer: "78912",
    explanation:
      "A number is divisible by 9 if the sum of its digits is divisible by 9. For 78912, the sum of digits is 7+8+9+1+2 = 27, which is divisible by 9.",
  },
];

export default function NumberSystemQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(quizData.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const getScore = () => {
    return selectedAnswers.reduce((score, selectedAnswer, index) => {
      return selectedAnswer === quizData[index].answer ? score + 1 : score;
    }, 0);
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

  const currentQuestion = quizData[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  if (isSubmitted) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Quiz Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center">
              You scored {getScore()} out of {quizData.length}!
            </p>
            <div className="mt-6 space-y-4">
              {quizData.map((question, index) => (
                <Card key={index} className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {index + 1}. {question.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {question.options.map((option) => {
                        const isCorrect = option === question.answer;
                        const isSelected = option === selectedAnswers[index];
                        const isWrong = isSelected && !isCorrect;

                        return (
                          <div
                            key={option}
                            className={`flex items-center justify-between p-3 rounded-md border-2 transition-colors ${
                              isCorrect
                                ? "bg-green-500/10 border-green-500 text-green-400"
                                : ""
                            } ${
                              isWrong
                                ? "bg-red-500/10 border-red-500 text-red-400"
                                : ""
                            } ${!isCorrect && !isWrong ? "border-border" : ""}`}
                          >
                            <span>{option}</span>
                            {isCorrect && <CheckCircle className="w-5 h-5" />}
                            {isWrong && <XCircle className="w-5 h-5" />}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 p-4 bg-background rounded-md">
                      <h4 className="font-semibold">Explanation:</h4>
                      <p className="text-muted-foreground">
                        {question.explanation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
           <Button
  onClick={() => {
    setIsSubmitted(false);
    setSelectedAnswers(Array(quizData.length).fill(null));
    setCurrentQuestionIndex(0);
  }}
  variant="outline"
  className="w-full border-2 hover:border-[hsl(var(--quiz-option-selected))] transition-colors"
>
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
          <CardTitle className="text-2xl font-bold text-primary">
            Number System Quiz
          </CardTitle>
          <p className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {quizData.length}
          </p>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">
            {currentQuestion.question}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option) => (
              <Button
                key={option}
                variant="outline"
                className={`w-full justify-start p-6 text-left h-auto transition-colors ${
                  selectedAnswer === option
                    ? "border-2 border-[hsl(var(--quiz-option-selected))] text-[hsl(var(--quiz-option-selected-foreground))] bg-transparent"
                    : "hover:border-[hsl(var(--quiz-option-hover))] hover:border-2"
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
       <Button 
  onClick={handlePrevQuestion} 
  disabled={currentQuestionIndex === 0}
  variant="outline"
  className="border-2 hover:border-[hsl(var(--quiz-option-selected))] transition-colors disabled:opacity-50"
>
  Previous
</Button>
        {currentQuestionIndex === quizData.length - 1 ? (
  <Button 
    onClick={handleSubmit} 
    disabled={selectedAnswers.includes(null)}
    variant="outline"
    className="border-2 hover:border-[hsl(var(--quiz-option-selected))] transition-colors disabled:opacity-50"
  >
    Submit
  </Button>
) : (
  <Button 
    onClick={handleNextQuestion} 
    disabled={!selectedAnswer}
    variant="outline"
    className="border-2 hover:border-[hsl(var(--quiz-option-selected))] transition-colors disabled:opacity-50"
  >
    Next
  </Button>
)}
          
        </CardFooter>
      </Card>
    </div>
  );
}


