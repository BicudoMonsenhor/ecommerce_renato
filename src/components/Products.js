import React from 'react';

const productsList = [
  { id: 1, name: 'Produto A', price: 50 },
  { id: 2, name: 'Produto B', price: 30 },
  { id: 3, name: 'Produto C', price: 100 },
  { id: 4, name: 'Produto D', price: 70 },
  { id: 5, name: 'Produto E', price: 90 },
];

const Products = ({ addToCart }) => {
  return (
    <div className="container mt-4">
      <h2>Lista de Produtos</h2>
      <div className="row">
        {productsList.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Preço: R$ {product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
