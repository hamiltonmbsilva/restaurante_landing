import React from 'react';

function ItemCardapio({ nome, descricao, preco, imagem }) {
  return (
    <article className="item-cardapio">
      <div className="item-imagem-container">
        <img src={imagem} alt={nome} className="item-imagem" />
      </div>
      <div className="item-detalhes">
        <h4 className="item-nome">{nome}</h4>
        <p className="item-descricao">{descricao}</p>
        <span className="item-preco">{preco}</span>
      </div>
    </article>
  );
}

export default ItemCardapio;