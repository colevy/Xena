import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global';
import { Analytics } from "@vercel/analytics/react";
import { Contact } from './components/Contact/Contact';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Analytics />  
      <Contact />
      <Footer />
    </>
  );
}

export default App;
