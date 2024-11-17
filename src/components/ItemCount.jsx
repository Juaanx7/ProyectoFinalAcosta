import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../styles/_itemCount.scss";

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
        onAdd(count);
    };

    return (
        <div className="item-count text-center my-3">
            <h4>
                Cantidad: <span className="badge bg-secondary">{count}</span>
            </h4>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button
                        className="mx-1 primary-btn"
                        onClick={handleDecrement}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <Button
                        className="mx-1 primary-btn"
                        onClick={handleIncrement}
                        disabled={count >= stock}
                    >
                        +
                    </Button>
                </Col>
            </Row>
            <Button
                className="mt-2 primary-btn"
                onClick={handleAddToCart}
                disabled={stock === 0}
            >
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;