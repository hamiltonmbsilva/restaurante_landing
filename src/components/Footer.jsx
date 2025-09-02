import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer-secao">
      <div className="footer-conteudo">
        <div className="footer-coluna">
          <h4>Restaurante Local</h4>
          <p>Sabor e tradição na sua mesa. Nosso compromisso é com a qualidade e o atendimento que você merece.</p>
        </div>
        <div className="footer-coluna">
          <h4>Contato</h4>
          <p>Endereço: Rua da Paz, 123 - Centro</p>
          <p>Telefone: (32) 99999-8888</p>
          <p>Email: contato@restaurantelocal.com</p>
        </div>
        <div className="footer-coluna">
          <h4>Siga-nos</h4>
          <div className="redes-sociais">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Restaurante Local. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;