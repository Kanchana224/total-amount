import React from 'react';
import { useCart } from './Cartcontext';
import { Button, Card, ListGroup } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <Card>
      <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
      <Card.Body>
        <Card.Title style={{fontSize:"26px", fontWeight:"bolder"}}>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
        <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
        <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button
          onClick={() => (isProductInCart ? removeFromCart(product.id) : addToCart(product))}
          variant={isProductInCart ? 'danger' : 'primary'}
        >
          {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;