import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0); // Soma o preço dos itens

  return (
    <div className="container mt-4">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - R$ {item.price}
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: R$ {total}</h3> {/* Exibe o total */}
        </>
      )}
    </div>
  );
};

export default Cart;
