import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Browsemenu.css'
import epicwe from "./assets/epicbucket.webp";
import gold from "./assets/goldedition.webp";
import box from "./assets/boxmeals.webp";
import variety from "./assets/varietybuckets.webp";
import veges from "./assets/vegees.webp";
import bugetchick from "./assets/bugetimages.jpg";
import kfcburfg from "./assets/KFC-Burger.webp";
import rice from "./assets/ricebowls.webp";

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
              src={epicwe}
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
                <Card.Img src={gold} className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  GOLD EDITION
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src={box} className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  BOX MEALS
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src={variety} className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  VARIETY BUCKETS
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="menu-card border-0">
                <Card.Img src={veges} className="small-img" />
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
                <Card.Img src={bugetchick} className="small-img p-1" />
                <Card.Body className="text-center fw-bold ">
                 CHICKENBUCKETES
                </Card.Body>
              </Card>
            </Col>

                         <Col >
              <Card className="menu-card border-0">
                <Card.Img src={kfcburfg} className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                  BURGER
                </Card.Body>
              </Card>
             </Col>

                             <Col >
              <Card className="menu-card border-0">
                <Card.Img src={box}className="small-img" />
                <Card.Body className="text-center fw-bold p-4">
                SNACKS
                </Card.Body>
              </Card>
             </Col>

                           <Col >
              <Card className="menu-card border-0">
                <Card.Img src={rice} className="small-img" />
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
