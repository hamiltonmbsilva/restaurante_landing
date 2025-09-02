import React from 'react';
import '../styles/Hero.css'; // Importa o CSS específico para este componente

function Hero() {
  return (
    <section className="hero-secao">
      <div className="hero-conteudo">
        <h1 className="hero-titulo">Sabor Autêntico na Sua Mesa</h1>
        <p className="hero-subtitulo">
          Descubra a culinária que encanta a cidade. Ingredientes frescos, paixão em cada prato.
        </p>
        <a href="#cardapio" className="hero-botao">
          Ver Cardápio
        </a>
      </div>
    </section>
  );
}

export default Hero;