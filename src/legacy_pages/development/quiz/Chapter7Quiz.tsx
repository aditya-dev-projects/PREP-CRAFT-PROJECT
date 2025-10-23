import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter7Quiz: React.FC = () => {
  const quizData = [
    { question: 'How do you fetch API data in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the Fetch API?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Axios?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is JWT authentication?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are protected routes in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a full MERN example?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a To-Do App?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you use Fetch API?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you use Axios?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you implement protected routes?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter7Quiz;