import React from 'react';
import '../styles/contato.css';

function Contato() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    // Em um projeto real, você enviaria os dados para um serviço de backend ou e-mail.
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    e.target.reset(); // Limpa o formulário após o envio
  };

  return (
    <section className="secao-contato" id="contato">
      <h2 className="contato-titulo">Fale Conosco</h2>
      <div className="contato-conteudo">
        
        {/* Lado Esquerdo: Informações de Contato e Mapa */}
        <div className="contato-info-mapa">
          <div className="contato-info">
            <h3>Informações</h3>
            <p><strong>Endereço:</strong> Rua da Paz, 123 - Centro, Matias Barbosa</p>
            <p><strong>Telefone:</strong> (32) 99999-8888</p>
            <p><strong>E-mail:</strong> contato@restaurantelocal.com</p>
            <p><strong>Horário:</strong> Terça a Domingo, 18h - 23h</p>
          </div>
          
          <div className="contato-mapa">
            {/* Mapa incorporado do Google Maps */}
            <iframe
              title="Mapa do Restaurante"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.3853172087534!2d-43.34446212480396!3d-21.84157817992994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98bd5d85203799%3A0x1d9b3a373b9e4a3c!2sMatias%20Barbosa%2C%20MG%2C%2036120-000!5e0!3m2!1spt-BR!2sbr!4v1714589087524!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Lado Direito: Formulário de Contato */}
        <div className="contato-form-container">
          <form className="contato-form" onSubmit={handleFormSubmit}>
            <h3>Envie-nos uma Mensagem</h3>
            
            <div className="form-grupo">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            
            <div className="form-grupo">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-grupo">
              <label htmlFor="telefone">Telefone (Opcional)</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
            
            <div className="form-grupo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="form-botao">Enviar</button>
          </form>
        </div>
        
      </div>
    </section>
  );
}

export default Contato;