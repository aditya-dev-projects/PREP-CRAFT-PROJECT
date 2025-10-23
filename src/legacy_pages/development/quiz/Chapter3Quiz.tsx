import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter3Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is Git?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a commit?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a branch?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a merge?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is GitHub?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a pull request?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a fork?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is an issue?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a clone?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a remote?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter3Quiz;