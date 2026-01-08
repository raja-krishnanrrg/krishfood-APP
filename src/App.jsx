
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import CartPage from './Cartpage'
import "bootstrap-icons/font/bootstrap-icons.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import BrowseMenu from './Browsemenu';
import  Deliverorder from "./Deliverorder";
import MenuProductPage from "./Productpage"
import { useSelector } from 'react-redux';
// import { useContext } from "react";
// import { CartContext } from "./CartContext";

import Deals from "./Deals"

import './App.css'
import Footer from './Footer';

function App() {
    const cartProducts = useSelector((state) => state.cart.cartItems);
  
    
  
  return (
    <> 
          
       <div className="bg-light border-bottom py-2">
        <Container className="d-flex justify-content-center align-items-center small">
          <div>
            <i className="bi bi-geo-alt-fill text-danger me-1"></i>
            Allow location access for local store menu and promos
          </div>
          <Button variant="dark" size="sm" className="rounded-pill ms-2">
            Set Location
          </Button>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" className="border-bottom navbars">
        <Container>
          {/* Logo */}
          <Link to='/' className='foodworld fw-bold text-danger fs-3'>
            FoodWorld
          </Link>

          <Navbar.Toggle />

          <Navbar.Collapse className='ms-4'>
            {/* Center Menu */}
            <Nav className=" fw-bold">
              
              <Nav.Link ><Link to='/productpage' className='attachs'>Menu</Link></Nav.Link>
              <Nav.Link ><Link to='/deals' className='attachs'>Deals</Link></Nav.Link>
            </Nav>
         </Navbar.Collapse>
              <Form className="d-flex ">
                <h5 className='mt-3 me-4'> Signin</h5>
          <Link to='/cart' className='attachs'> <img src="./src/assets/cart.png" className='cartimage'/></Link>
           <span className='quantity '>{cartProducts.length}</span>
            
          </Form>
         
        </Container>
      </Navbar>

    <Deliverorder/>    
         <Routes>
          <Route path='/' element={<BrowseMenu />}></Route>
          <Route path='/productpage' element={< MenuProductPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/deals' element={<Deals/>}></Route>
          {/* <Route path='/' element={<Footer/>}></Route> */}
        </Routes>
        <Footer/>  
    </>
  )
}

export default App
