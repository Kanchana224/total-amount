
import React from 'react';
import { useCart } from './Cartcontext';
import { Button, Card } from 'react-bootstrap';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalQuantity, totalAmount } = useCart();

  return (
    <div className="cart-page">
      <h2>
        Shopping Cart{' '}
        <span className="badge bg-secondary">
          <i className="bi bi-cart-fill"></i> {totalQuantity}
        </span>
      </h2>
      {cart.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>Price: ${item.price}</Card.Text>
  <Card.Text>
    Quantity: {item.quantity}{' '}
    <span className="quantity-controls">
      <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
        -
      </Button>
      <span className="quantity-value">{item.quantity}</span>
      <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
        +
      </Button>
    </span>
  </Card.Text>
  <Button onClick={() => removeFromCart(item.id)} variant="danger">
    Remove from Cart
  </Button>
</Card.Body>
        </Card>
      ))}
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default CartPage;
