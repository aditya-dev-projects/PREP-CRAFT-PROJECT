import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter11Quiz: React.FC = () => {
  const quizData = [
    { question: 'What are common MERN stack interview questions?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is full-stack system design?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you build a resume for a developer?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you build a GitHub portfolio?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are mock interview problems?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a mock interview?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are some common system design questions?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are some common resume mistakes?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are some common GitHub portfolio mistakes?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are some common mock interview mistakes?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter11Quiz;