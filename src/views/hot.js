import React from 'react';
import QuestionList from '../components/question-list';

const Hot = () => {
  const questions = [
    {
      id: Date.now(),
      title: 'Duda con React',
      description: 'Hola, tengo una duda con React',
      icon: 'DiReact',
      createdAt: Date.now(),
      answers: [
        {
          description: 'Respuesta React',
        },
      ],
    },
    {
      id: Date.now(),
      title: 'Duda con Android',
      description: 'Hola, tengo una duda con Android',
      icon: 'DiAndroid',
      createdAt: Date.now(),
      answers: [
        {
          description: 'Respuesta Android',
        },
        {
          description: 'Respuesta Android',
        },
      ],
    },
  ];

  return (
    <>
      <QuestionList questions={questions} />
    </>
  );
};

export default Hot;
