/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz/index';

export default function QuizDaGaleraPage({ dbExterno, name }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
        name={name}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  const route = `https://${projectName}.${gitHubUser}.vercel.app/api/db`;
  const { name } = context.query;
  try {
    const dbExterno = await fetch(route)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados!');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      .catch((err) => err);
    return {
      props: {
        dbExterno,
        name,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
