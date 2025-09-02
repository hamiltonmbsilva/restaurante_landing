import React from 'react';

// Importe os componentes que criaremos
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Cardapio from './components/Cardapio';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';
//import BotaoWhatsApp from './components/BotaoWhatsApp';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Cardapio /> 
      <Galeria />
      <Contato />
      <Footer />   
    </>
  );
}

export default App;



//      <BotaoWhatsApp />