import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./Deals.css";
const Deals = () => {

    const offers = [
  {
    id: 1,
    title: "FREE CLASSIC ZINGER",
    minOrder: 499,
    image: "./src/assets/offer2.jpg",
    description: "Offer valid only on 1st order",
  },
  {
    id: 2,
    title: "2 PC HOT & CRISPY CHICKEN @ RS 99",
    minOrder: 499,
    image: "./src/assets/offer2.jpg",
    description: "On 2nd & 3rd order",
  },
  {
    id: 3,
    title: "UPTO RS 100 OFF",
    minOrder: 699,
    image: "./src/assets/offer3.jpg",
    description: "Applicable on 4th order onwards",
  },
];

  return (
<>
        <div className="saveoffer">
            <h1>Save More as you order</h1>

        </div>

    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">
        SAVE MORE AS YOU ORDER
      </h2>

      <Row className="w-100">
        {offers.map((offer) => (
          <Col md={4} sm={6} xs={12} key={offer.id} className="mb-4">
            <Card className="offer-card h-100 text-center ">
              <Card.Img
                variant="top"
                src={offer.image}
                className=""
              />

              <Card.Body>
                <h5 className="fw-bold">{offer.title}</h5>

                <p className="text-muted">
                  Min. Order Value {offer.minOrder}
                </p>

                <a href="#" className="view-details">
                  View Details
                </a>

                <div className="mt-3">
                 <Button variant="danger" className="w-100" > 
                      Add to cart
                    </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Deals;
