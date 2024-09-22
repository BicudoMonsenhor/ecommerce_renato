import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navigation from './components/Navigation';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um item ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Adiciona o produto ao array do carrinho
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId)); // Remove item do carrinho
  };

  return (
    <div>
      <Navigation />
      <Products addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Checkout />
    </div>
  );
};

export default App;
