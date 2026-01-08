import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Products.css'
import products  from "./productspage/Allproducts"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "./store/cartslice/Cartslice";


const MenuProductPage = () => {
  // const { addToCart } = useContext(CartContext);
  // const navigate = useNavigate();
  // LEFT MENU (ARRAY)
  const categories = [
    "Burgers",
    "Pizza",
    "Sandwich",
    "Drinks",
    "Desserts",
  ];
 
  
//  const [addedItems, setAddedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Burgers");
  const filteredProducts = products.filter(
    item => item.category === activeCategory
  );

//   const handleAddToCart = (item) => {
//     addToCart(item); 
//       setAddedItems([...addedItems,item.id]);     
    
const cartProducts=useSelector((state)=>state.cart.cartItems)
const dispatch = useDispatch();

const addCart =(item)=>{
  dispatch(addToCart(item))
}

const deleteCart=(item)=>{
  dispatch(deleteFromCart(item))
}

  

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
          {/* <h5 className="mb-3">{activeCategory}</h5> */}
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

                    {/* <Button variant="danger" className="w-100" onClick={() => handleAddToCart(item)}>
                      {/* Add to cart<i class="bi bi-bag-plus ms-2 fw-5 fs-5"></i> 
                                   {addedItems.includes(item.id) ? (<><i className="bi bi-check-circle-fill me-2"></i>Item Added </>) : 
                        ( <><i className="bi bi-cart-plus me-2"></i>  Add to Cart  </>)}
                      </Button> */}
                      
                      
                       {cartProducts.find(Items=>Items.id===item.id)?
                          (<Button className="btn btn-danger" onClick={()=>{deleteCart(item)}}><i className="bi bi-check-circle-fill me-2"></i>Item Added</Button>):
                          (<Button className="btn btn-danger" onClick={()=>{addCart(item)}}>Add to cart<i class="bi bi-bag-plus ms-2 fw-5 fs-5"></i></Button>) 
                      }
  
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
