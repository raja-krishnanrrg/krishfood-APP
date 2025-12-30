import "bootstrap/dist/css/bootstrap.min.css";
import './Deliveroder.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "bootstrap-icons/font/bootstrap-icons.css";

const Deliverorder = () => {
  return (
    <div>
            <div className="oder">
             <Container className="d-flex justify-content-center align-items-center small">
          <div>
        
          <h6 className="pt-4"> LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h6>
          </div>
          <Button variant="danger" size="sm" className="rounded-pill ms-2 mt-3 p-2">
            Set Location
          </Button>
        </Container>
        
        </div>


    </div>
  )
}

export default Deliverorder





  