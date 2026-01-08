import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row className="py-5 text-white">
          
          {/* Logo */}
          <Col md={2} sm={12} className="mb-4">
           <h1 to='' className='foodworld fw-bold text-danger fs-3'>
            FoodWorld
          </h1>
          </Col>

          {/* Legal */}
          <Col md={2} sm={6} xs={6} className="mb-4">
            <h6>Legal</h6>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Center</li>
              <li>Disclaimer</li>
              <li>Caution Notice</li>
            </ul>
          </Col>

          {/* KFC India */}
          <Col md={2} sm={6} xs={6} className="mb-4">
            <h6>KFC India</h6>
            <ul>
              <li>About foodworld</li>
              <li>foodworld</li>
              <li>Careers</li>
              <li>Our Golden Past</li>
            </ul>
          </Col>

          {/* KFC Food */}
          <Col md={2} sm={6} xs={6} className="mb-4">
            <h6> Food FoodWorld</h6>
            <ul>
              <li>Menu</li>
              <li>Order Lookup</li>
              <li>Gift Card</li>
              <li>Nutrition & Allergen</li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={2} sm={6} xs={6} className="mb-4">
            <h6>Support</h6>
            <ul>
              <li>Get Help</li>
              <li>Contact Us</li>
              <li>Foodworld Feedback</li>
              <li>Privacy Center</li>
            </ul>
          </Col>

          {/* Find KFC & Apps */}
          <Col md={2} sm={12}>
            <div className="find-kfc">
              {/* <FaMapMarkerAlt className="me-2" /> Find a KFC */}
            </div>

            <div className="app-buttons mt-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
             
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="footer-bottom text-center text-white py-3">
          <Col md={8} className="mb-2">
            © 2026 KFC Corporation. All rights reserved.
          </Col>
          <Col md={4}>
            <div className="social-icons">
              {/* <FaInstagram />
              <FaFacebookF />
              <FaTwitter /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
