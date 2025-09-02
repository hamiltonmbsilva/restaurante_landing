import React from 'react';
import '../styles/galeria.css';

// Dados simulados da galeria de fotos
const fotos = [
  { id: 1, url: '/imagens/galeria1.jpg', alt: 'Prato principal com um molho cremoso' },
  { id: 2, url: '/imagens/galeria2.jpg', alt: 'Ambiente interno do restaurante com iluminação aconchegante' },
  { id: 3, url: '/imagens/galeria3.jpg', alt: 'Sobremesa de torta de chocolate com frutas vermelhas' },
  { id: 4, url: '/imagens/galeria4.jpg', alt: 'Bancada com drinks e coquetéis coloridos' },
  { id: 5, url: '/imagens/galeria5.jpg', alt: 'Detalhe de um prato gourmet' },
  { id: 6, url: '/imagens/galeria6.jpg', alt: 'Entrada de bruschettas com tomate e manjericão' },
  { id: 7, url: '/imagens/galeria7.jpg', alt: 'Entrada de bruschettas com tomate e manjericão' },
  { id: 8, url: '/imagens/galeria8.jpg', alt: 'Entrada de bruschettas com tomate e manjericão' },
];

function Galeria() {
  return (
    <section className="secao-galeria" id="galeria">
      <h2 className="galeria-titulo">Nossa Galeria de Sabores</h2>
      <div className="galeria-grid">
        {fotos.map((foto) => (
          <div key={foto.id} className="galeria-item">
            <img src={foto.url} alt={foto.alt} className="galeria-imagem" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;