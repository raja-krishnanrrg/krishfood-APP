import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import './Browsemenu.css'
const BrowseMenu = () => {
  return (
    <Container className="my-5">

      {/* Heading */}
      <div className="d-flex ms-5">
      <h3 className="fw-bold mb-4 me-5 pe-5 ">
        BROWSE MENU CATEGORIES
            </h3>
            <div className="lines mt-4 "></div>
        </div>
      <Row className="g-4">

        {/* LEFT BIG CARD */}
        <Col xs={12} lg={6}>
          <Card className="menu-card h-100 border-0">
            <Card.Img
              src="./src/assets/epicbucket.webp"
              className="big-img"
            />
            <Card.Body className="text-center fw-bold  mt-5">
              EPIC BUCKET OF THE DAY
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT SIDE */}
        <Col xs={12} lg={6}>
          <Row className="g-4">

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/goldedition.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  GOLD EDITION
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/boxmeals.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  BOX MEALS
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/varietybuckets.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  VARIETY BUCKETS
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/vegees.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  VEG
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Col>
      </Row>

       <Col  lg={12} className="mt-4">
          <Row className="g-4">
            <Col >
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/bugetimages.jpg" className="small-img p-1" />
                <Card.Body className="text-center fw-bold ">
                 CHICKENBUCKETES
                </Card.Body>
              </Card>
            </Col>

                         <Col >
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/KFC-Burger.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  BURGER
                </Card.Body>
              </Card>
             </Col>

                             <Col >
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/snaks.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                SNACKS
                </Card.Body>
              </Card>
             </Col>

                           <Col >
              <Card className="menu-card border-0">
                <Card.Img src="./src/assets/ricebowls.webp" className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                 RICE BOWLS
                </Card.Body>
              </Card>
             </Col>
            </Row>
            </Col>


           



    </Container>
  );
};

export default BrowseMenu;
