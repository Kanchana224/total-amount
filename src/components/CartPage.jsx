import React from "react";
import { useCart } from "./Cartcontext";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalQuantity, totalAmount } =
    useCart();

  return (
    <Container>
      <div
        className="cart-top"
        style={{
          position: "sticky",
          top: 80,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "aqua",
          marginTop: 10,
          padding: 10,
        }}
      >
        <h2 style={{ color: "black", margin: 0 }}>
          Shopping Cart{" "}
          <span className="badge bg-primary">
            <i className="bi bi-cart-fill"></i> {totalQuantity}
          </span>
        </h2>
        <div
          className="cart-summary"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <p
            style={{
              fontWeight: "bolder",
              margin: 0,
              marginRight: 10,
              color: "black",
              fontSize: 16,
            }}
          >
            Total Quantity: {totalQuantity}
          </p>
          <p
            style={{
              fontWeight: "bolder",
              margin: 0,
              marginLeft: 10,
              color: "black",
              fontSize: 16,
            }}
          >
            Total Amount: ${totalAmount}
          </p>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {cart.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bolder" }}>
                  {item.title}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  style={{ height: 150, width: "100%", objectFit: "cover" }}
                  alt={item.title}
                />
                <Card.Text style={{ fontWeight: "bolder" }}>
                  Price: ${item.price}
                </Card.Text>
                <Card.Text>
                  Quantity:{" "}
                  <span className="quantity-controls">
                    <Button
                      style={{ fontWeight: "bolder", margin: 10 }}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="quantity-value">{item.quantity}</span>
                    <Button
                      style={{ fontWeight: "bolder", margin: 10 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </span>
                </Card.Text>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CartPage;
