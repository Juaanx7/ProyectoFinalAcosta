import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../styles/main.scss';

function Cart() {
  const { cart, calculateTotalItems, calculateTotal } = useCart();
  console.log("Estado del carrito", cart);

  if (cart.length === 0) {
    return (
      <Container className="mt-5">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary btn-back">
          Volver a comprar
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5">      
      <Row className="g-4">
        <Col xs={12}>
          <Card className="card text-center">
            <h2 className="card-header">Carrito de compras</h2>
            <Card.Body>
              <Row className="g-4">
                {cart.map((item) => (
                  <Col xs={12} md={6} lg={4} key={item.id}>
                    <Card>
                      <div className="card-inner">
                        <Card.Img variant="top" className="card-image" src={item.thumbnail} />
                        <Card.Body className="card-content">
                          <Card.Title className="card-content-title">{item.title}</Card.Title>
                          <Card.Text className="card-content-description">
                            Precio: ${item.price} x {item.quantity} = ${item.price * item.quantity}
                          </Card.Text>
                          <Link to={`/item/${item.id}`}>
                            <Button variant="info" className="card-content-btn">
                              Ver detalles
                            </Button>
                          </Link>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="mt-4">
                <h4>Total de productos: {calculateTotalItems()}</h4>
                <h4>Total: ${calculateTotal()}</h4>
              </div>

              <div className="mt-3">
                <Link to="/checkout" className="btn btn-success btn-checkout">
                  Confirmar Compra
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;