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
                            <Card className="product-card h-100">
                                <Card.Img
                                    variant="top"
                                    src={item.thumbnail}
                                    alt={`Imagen de ${item.title}`}
                                    className="product-image"
                                />
                                <Card.Body className="product-content">
                                    <Card.Title className="product-title">{item.title}</Card.Title>
                                    <Card.Text className="product-description">{item.description}</Card.Text>
                                    <Card.Text className="product-price">${item.price}</Card.Text>
                                    <Card.Text className="product-stock">Stock: {item.stock}</Card.Text>
                                    <Button variant="primary" className="product-btn">Ver detalles</Button>
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
