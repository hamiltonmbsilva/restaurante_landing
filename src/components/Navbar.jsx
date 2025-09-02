import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="navbar-cabecalho">
      <nav className="navbar-nav">
        <a href="#hero" className="navbar-logo">
          {/* Use a tag <img> com o caminho absoluto para a imagem */}
          <img src="/imagens/favicon.png" alt="Logo do Restaurante" className="logo-imagem" />
          <span className="nome-restaurante">Seu Restaurante</span>
        </a>
        <ul className="navbar-lista">
          <li><a href="#sobre" className="navbar-link">Sobre Nós</a></li>
          <li><a href="#cardapio" className="navbar-link">Cardápio</a></li>
          <li><a href="#galeria" className="navbar-link">Galeria</a></li>
          <li><a href="#contato" className="navbar-link">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;