/* eslint-disable react/prop-types */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz Poderoso Chefão</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />

        <meta name="title" content="Quiz Poderoso Chefão" />
        <meta name="description" content="Projeto criado durante a Imersão React v2" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://poderosochefaoquiz.admsilva.vercel.app/" />
        <meta property="og:title" content="Quiz Poderoso Chefão" />
        <meta property="og:site_name" content="poderosochefaoquiz" />
        <meta property="og:description" content="Projeto criado durante a Imersão React v2" />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://poderosochefaoquiz.admsilva.vercel.app/" />
        <meta property="twitter:title" content="Quiz Poderoso Chefão" />
        <meta property="twitter:description" content="Projeto criado durante a Imersão React v2" />
        <meta property="twitter:image" content={db.bg} />

        <link rel="icon" type="image/png" href="https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-28/256/The-Godfather-II-2-icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
