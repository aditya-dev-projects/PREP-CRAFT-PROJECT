import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter2Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is HTML5?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is CSS3?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is JavaScript?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the DOM?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is an HTML tag?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a CSS selector?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a JavaScript function?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a variable in JavaScript?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter2Quiz;