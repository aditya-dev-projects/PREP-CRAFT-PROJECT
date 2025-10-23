import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter4Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is Tailwind CSS?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is React.js?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a component in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is JSX?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is state in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are props in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a hook in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the virtual DOM?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter4Quiz;