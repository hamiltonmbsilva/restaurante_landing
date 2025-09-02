import React from 'react';
import '../styles/botao-whatsapp.css';

function BotaoWhatsApp() {
  const numeroTelefone = '5532999998888'; // Substitua pelo seu número de telefone com o código do país (55) e o DDD (32)
  const mensagemPadrao = encodeURIComponent(
    'Olá! Gostaria de fazer um pedido, por favor. Pode me enviar o cardápio e informações sobre as formas de pagamento?'
  );

  const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemPadrao}`;

  return (
    <a href={linkWhatsApp} className="botao-whatsapp" target="_blank" rel="noopener noreferrer">
      <img src="/imagens/whatsapp-icon.svg" alt="Fazer pedido pelo WhatsApp" className="whatsapp-icon" />
    </a>
  );
}

export default BotaoWhatsApp;