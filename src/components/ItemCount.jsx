import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function ItemCount() {
    const [count, setCount] = useState(0); // Estado para la cantidad

    const handleIncrement = () => {
        setCount(count + 1); // Incrementa la cantidad
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1); // Decrementa la cantidad si es mayor a 0
        }
    };

    return (
        <div className="text-center my-3">
            <h4>
                Cantidad: <span className="badge bg-secondary">{count}</span>
            </h4>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button variant="outline-primary" className="mx-1" onClick={handleDecrement}>-</Button>
                    <Button variant="outline-primary" className="mx-1" onClick={handleIncrement}>+</Button>
                </Col>
            </Row>
            <Button variant="success" className="mt-2">Agregar al carrito</Button>
        </div>
    );
}

export default ItemCount;
