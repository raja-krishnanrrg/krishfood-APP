

import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CartPage = () => {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    subTotal
  } = useContext(CartContext);

  return (
    <Container className="my-4">
      <Row>

        <Col md={8}>
          <h3 className="mb-4">MY CART</h3>

          {cart.map((item) => (
            <Card className="mb-3 shadow-sm" key={item.id}>
              <Card.Body>
                <Row className="align-items-center">

                  <Col md={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </Col>

                  <Col md={6}>
                    <h5>{item.name}</h5>
                    <p className="text-muted small">{item.describtion}</p>

                    <Button
                      variant="link"
                      className="text-danger p-0"
                      onClick={() => removeItem(item.id)}
                    >
                     Delete
                    </Button>
                  </Col>

                  <Col md={3} className="text-end">
                    <div className="d-flex justify-content-end align-items-center mb-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                        disabled={item.qty === 1}
                      >
                        −
                      </Button>

                      <span className="mx-2">{item.qty}</span>

                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </Button>
                    </div>

                    <strong>₹{item.price * item.qty}</strong>
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={4} className="mt-5">
          <Card className="shadow-sm">
            <Card.Body>
              <h5>{cart.length} ITEMS</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subTotal}</span>
              </div>
              <hr />
              <Button variant="danger" className="w-100">
                Checkout ₹{subTotal}
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default CartPage;
