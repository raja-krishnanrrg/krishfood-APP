import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from './store/cartslice/Cartslice';

const CartPage = () => {

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Delete item
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };


  const incrementCart = (item) => {
    dispatch(updateQuantity({ id: item.id, qty: item.qty + 1 }));
  };

  const decrementCart = (item) => {
    if (item.qty > 1) {
      dispatch(updateQuantity({ id: item.id, qty: item.qty - 1 }));
    }
  };

  // Subtotal
  const subTotal = cartProducts.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );


  const handleCheckout = () => {
    const phoneNumber = "6383031374"; 

    let message = "🛒 *Order Details* \n\n";

    cartProducts.forEach((item, index) => {
      message += `${index + 1}. ${item.name}  - ₹${item.price} x ${item.qty} = ₹${item.price * item.qty}\n`;
    });

    message += `\n----------------------\n`;
    message += `*Total: ₹${subTotal}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <h3 className="mb-4">MY CART</h3>

          {cartProducts.length === 0 && <p>Your cart is empty 😔</p>}

          {cartProducts.map((item) => (
            <Card className="mb-3 shadow-sm" key={item.id}>
              <Card.Body>
                <Row className="align-items-center">

                  {/* Image */}
                  <Col md={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </Col>

                  {/* Details */}
                  <Col md={6}>
                    <h5>{item.name}</h5>
                    <p className="text-muted small">{item.describtion}</p>
                  {console.log(item)}
                    <Button
                      variant="link"
                      className="text-danger p-0"
                      onClick={() => deleteCart(item)}
                    >
                      Delete
                    </Button>
                  </Col>

                 
                  <Col md={3} className="text-end">
                    <div className="d-flex justify-content-end align-items-center mb-2">

                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => decrementCart(item)}
                        disabled={item.qty === 1}
                      >
                        −
                      </Button>

                      <span className="mx-2">{item.qty}</span>

                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => incrementCart(item)}
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

        {/* Summary */}
        <Col md={4} className="mt-5">
          <Card className="shadow-sm">
            <Card.Body>
              <h5>{cartProducts.length} ITEMS</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subTotal}</span>
              </div>
              <hr />
              <Button 
                variant="danger" 
                className="w-100"
                onClick={handleCheckout}
                disabled={cartProducts.length === 0}
              >
                Checkout via WhatsApp ₹{subTotal}
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default CartPage;
