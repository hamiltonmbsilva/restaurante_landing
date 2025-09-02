import React from 'react';
import '../styles/cardapio.css';
import ItemCardapio from './itemCardapio';

// Dados simulados do cardápio
const categorias = [
  {
    titulo: 'Pratos Principais',
    id: 'pratos-principais',
    itens: [
      { nome: 'Filé Mignon ao Molho Madeira', descricao: 'Acompanha arroz à piamontese e batatas rústicas.', preco: 'R$ 75,00', imagem: '/imagens/File_Mignon_ao_Molho_Madeira.jpg' },
      { nome: 'Salmão Grelhado com Legumes', descricao: 'Salmão fresco com mix de legumes na manteiga de ervas.', preco: 'R$ 68,00', imagem: '/imagens/Salmao_Grelhado_com_Legumes.jpg' },
      { nome: 'Risoto de Funghi Secchi', descricao: 'Cremoso risoto com cogumelos funghi porcini e parmesão.', preco: 'R$ 55,00', imagem: '/imagens/Risoto_de_Funghi_Secchi.jpg' },
    ],
  },
  {
    titulo: 'Sobremesas',
    id: 'sobremesas',
    itens: [
      { nome: 'Pudim de Leite Condensado', descricao: 'Tradicional pudim de leite com calda de caramelo.', preco: 'R$ 18,00', imagem: '/imagens/Pudim_de_Leite_Condensado.jpg' },
      { nome: 'Brownie com Sorvete', descricao: 'Brownie de chocolate meio amargo servido com uma bola de sorvete de creme.', preco: 'R$ 22,00', imagem: '/imagens/Brownie_com_Sorvete.jpg' },
    ],
  },
  {
    titulo: 'Bebidas',
    id: 'bebidas',
    itens: [
      { nome: 'Suco Natural do Dia', descricao: 'Sabor a consultar.', preco: 'R$ 10,00', imagem: '/imagens/Suco_Natural_do_Dia.jpg' },
      { nome: 'Refrigerante', descricao: 'Coca-Cola, Guaraná, Soda.', preco: 'R$ 8,00', imagem: '/imagens/Refrigerante.jpg' },
    ],
  },
];

function Cardapio() {
  return (
    <section className="secao-cardapio" id="cardapio">
      <h2 className="cardapio-titulo">Nosso Cardápio Digital</h2>
      {categorias.map((categoria) => (
        <div key={categoria.id} className="categoria-cardapio">
          <h3 className="categoria-titulo">{categoria.titulo}</h3>
          <div className="lista-itens">
            {categoria.itens.map((item, index) => (
              <ItemCardapio
                key={index}
                nome={item.nome}
                descricao={item.descricao}
                preco={item.preco}
                imagem={item.imagem}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cardapio;