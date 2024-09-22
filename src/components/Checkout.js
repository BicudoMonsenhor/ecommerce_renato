import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('pix');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pagamento realizado com ${paymentMethod}`);
  };

  return (
    <div className="container mt-4">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Escolha o método de pagamento:</label>
          <select className="form-control" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="pix">PIX</option>
            <option value="credit">Cartão de Crédito</option>
            <option value="boleto">Boleto Bancário</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success mt-3">Pagar</button>
      </form>
    </div>
  );
};

export default Checkout;
