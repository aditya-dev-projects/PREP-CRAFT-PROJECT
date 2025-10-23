import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter8Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is Netlify?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Vercel?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Render?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Railway?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Heroku?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is AWS?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is MongoDB Atlas?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is CI/CD?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are GitHub Actions?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you deploy a frontend application?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter8Quiz;