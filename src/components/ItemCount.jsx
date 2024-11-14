import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count); // Llama a la función de agregar con la cantidad seleccionada
    };

    return (
        <div className="text-center my-3">
            <h4>
                Cantidad: <span className="badge bg-secondary">{count}</span>
            </h4>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button
                        variant="outline-primary"
                        className="mx-1"
                        onClick={handleDecrement}
                        disabled={count <= 1} // Deshabilita si está en el mínimo
                    >
                        -
                    </Button>
                    <Button
                        variant="outline-primary"
                        className="mx-1"
                        onClick={handleIncrement}
                        disabled={count >= stock} // Deshabilita si está en el máximo
                    >
                        +
                    </Button>
                </Col>
            </Row>
            <Button 
                variant="success" 
                className="mt-2" 
                onClick={handleAddToCart}
                disabled={stock === 0} // Deshabilita si no hay stock
            >
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;
