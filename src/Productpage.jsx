import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Products.css'
const MenuProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  // LEFT MENU (ARRAY)
  const categories = [
    "Burgers",
    "Pizza",
    "Sandwich",
    "Drinks",
    "Desserts",


  ];

  // PRODUCTS (ARRAY OBJECT)
  const products = [
    {
      id: 1,
      name: "2 Chana Burgers",
      price: 220,
      category: "Burgers",
      image: "./assets/burger1.jpg",
      subcat: "Non-veg",
      describtion: "Relish 2 Chana burgers",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0

    },
    {
      id: 2,
      name: "2 Chana Burger & Fries combo",
      price: 300,
      category: "Burgers",
      image: "./src/assets/burger2.jpg",
      subcat: "veg",
      describtion: "2 Chana burgers , Med fries ",
      subimage: "./src/assets/vegsymbol.svg",
      qty: 0
    },
    {
      id: 3,
      name: "2 Chana Burger & Fries Meal",
      price: 250,
      category: "Burgers",
      image: "./src/assets/burger3.jpg",
      subcat: "non-veg",
      describtion: "2 Chana burgers , Med fries with Pepsi PET",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 4,
      name: "Club Sandwich",
      price: 440,
      category: "Pizza",
      image: "./src/assets/pizza1.jpg",
      subcat: "Non-veg",
      describtion: "pizza with banner butter with chicks",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 5,
      name: "Butter sesert",
      price: 390,
      category: "Pizza",
      image: "./src/assets/pizza2.jpg",
      subcat: "Non-veg",
      describtion: "pizza with spicey deserts",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 6,
      name: "Butter cheese",
      price: 290,
      category: "Pizza",
      image: "./src/assets/pizza3.jpg",
      subcat: "Non-veg",
      describtion: "pizza with spicey deserts with  minuss",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 7,
      name: "Chicken sandwich",
      price: 930,
      category: "Sandwich",
      image: "./src/assets/sandwich1.jpg",
      subcat: "Non-veg",
      describtion: "sandwich with  hot spicies",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    }
    ,
    {
      id: 8,
      name: "sandwich cheese",
      price: 190,
      category: "Sandwich",
      image: "./src/assets/sandwich2.jpg",
      subcat: "Non-veg",
      describtion: "sandwichs with vegetables",
      subimage: "./src/assets/nonvegsymb.svg",
      qty: 0
    },
    {
      id: 9,
      name: "Butter pizza",
      price: 940,
      category: "Sandwich",
      image: "./src/assets/sandwich1.jpg",
      subcat: "veg",
      describtion: "sandwich with  hot spicies",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }, {
      id: 10,
      name: "lime soda",
      price: 920,
      category: "Drinks",
      image: "./src/assets/drinks1.jpg",
      subcat: "veg",
      describtion: "lime chill soda",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }, {
      id: 11,
      name: "banner mullet",
      price: 902,
      category: "Drinks",
      image: "./src/assets/drinks2.jpg",
      subcat: "veg",
      describtion: "banner mullet",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }, {
      id: 12,
      name: "strawberry",
      price: 790,
      category: "Desserts",
      image: "./src/assets/ice1.jpg",
      subcat: "veg",
      describtion: "desert strawberry icecrems",
      qty: 0,
      subimage: "./src/assets/vegsymbol.svg",
    }
  ];

  const [activeCategory, setActiveCategory] = useState("Burgers");

  const filteredProducts = products.filter(
    item => item.category === activeCategory
  );

  const handleAddToCart = (item) => {
    addToCart(item);      // store in array

  };

  return (
    <Container className="p-3">
      <Row>
        {/* LEFT MENU */}
        <Col md={3} className="">
          <h2 className="mb-3">Menu</h2>

          <div className="menusgroup">
            {categories.map(cat => (
              <ListGroup.Item className="items pt-4 "
                key={cat}
                action
                active={cat === activeCategory}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </ListGroup.Item>
            ))}
          </div>

        </Col>

        {/* RIGHT PRODUCT LIST */}
        <Col md={9}>
          <h5 className="mb-3">{activeCategory}</h5>

          <Row>
            {filteredProducts.map(item => (
              <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
                <Card className="h-100 shadow-sm">

                  <Card.Img
                    src={item.image}
                    style={{ objectFit: "cover", height: "300px" }}
                  />

                  <Card.Body>
                    <h6 className="text-center fw-bolder">{item.name}</h6>


                    <img src={item.subimage} alt="" className="me-3" />{item.subcat}

                    <p className="mt-3">{item.describtion}</p>

                    <p className="text-muted">₹{item.price}</p>

                    <Button variant="danger" className="w-100" onClick={() => handleAddToCart(item)}>
                      Add to cart<i class="bi bi-bag-plus ms-2 fw-5 fs-5"></i>
                    </Button>
                  </Card.Body>

                </Card>
              </Col>
            ))}
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default MenuProductPage;
