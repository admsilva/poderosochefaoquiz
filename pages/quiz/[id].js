/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz/index';

export default function QuizDaGaleraPage({ dbExterno }) {
  // const [db, setDb] React.useState({})
  // React.useEffect(() => {
  // });
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
    /*
    <pre style={{ color: 'black' }}>
      {JSON.stringify(dbExterno.questions, null, 4)}
    </pre>
    */
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  const route = `https://${projectName}.${gitHubUser}.vercel.app/api/db`;
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

    // console.log('Banco Externo', dbExterno);
    // console.log('Infos que o Next da para nós', context.query.id);

    return {
      props: {
        dbExterno,
      }, // will be passed to the page component as props
    };
  } catch (err) {
    // redirect ...
    throw new Error(err);
  }
}
