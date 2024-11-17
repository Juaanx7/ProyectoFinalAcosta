import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemList({ items }) {
    return (
        <Container className="mt-3 mb-3">
            <Row xs={1} md={4} className="g-4 align-items-stretch">
                {items.map(item => (
                    <div key={item.id}>
                        <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={item.thumbnail} alt={`Imagen de ${item.title}`} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Card.Text>Precio: ${item.price}</Card.Text>
                                    <Card.Text>Stock disponible: {item.stock}</Card.Text>
                                    <Button variant="primary" className="primary-btn">Ver detalles</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;
