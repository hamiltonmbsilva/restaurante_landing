import React from 'react';
import '../styles/sobre.css'; // Importa o CSS para esta seção
import fotoSobre from '/imagens/equipe.png';

function Sobre() {
  return (
    <section className="secao-sobre" id="sobre">
      <div className="sobre-conteudo">
        <h2 className="sobre-titulo">Nossa História de Sabor</h2>
        <p className="sobre-texto">
          Desde 2010, nossa paixão é transformar ingredientes frescos e locais em pratos
          memoráveis. Acreditamos que a comida vai além do simples ato de se alimentar; é uma
          experiência, uma celebração de sabores, texturas e tradições. Nossa equipe de
          chefs talentosos trabalha incansavelmente para trazer o melhor da culinária
          local à sua mesa, com um toque de inovação.
        </p>
      </div>
      <div className="sobre-imagem-container">
        <img src={fotoSobre} alt="Nossa equipe ou ambiente do restaurante" className="sobre-imagem" />
      </div>
    </section>
  );
}

export default Sobre;