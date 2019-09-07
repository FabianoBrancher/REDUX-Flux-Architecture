import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-feminino/06/COL-7147-006/COL-7147-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tẽnis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-feminino/06/COL-7147-006/COL-7147-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tẽnis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-feminino/06/COL-7147-006/COL-7147-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tẽnis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-feminino/06/COL-7147-006/COL-7147-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tẽnis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-feminino/06/COL-7147-006/COL-7147-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tẽnis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
