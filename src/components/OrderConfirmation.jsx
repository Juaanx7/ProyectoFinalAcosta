import { useParams } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

function OrderConfirmation() {
  const { id } = useParams();

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="card-custom">
        <Card.Body>
          <Card.Title className="card-title-custom">¡Gracias por tu compra!</Card.Title>
          <Card.Text className="card-text-custom">
            Tu orden ha sido registrada con el ID: <span className="order-confirmation-id">{id}</span>
          </Card.Text>
          <div className="button-container">
            <Button variant="primary" as={Link} to="/cart" className="btn-checkout m-2">
              Volver al Carrito
            </Button>
            <Button variant="secondary" as={Link} to="/" className="btn-checkout m-2">
              Volver al Inicio
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrderConfirmation;
