import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart } = useCart();
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, 'products', id);
                const productSnap = await getDoc(productRef);

                if (productSnap.exists()) {
                    setProduct({ id: productSnap.id, ...productSnap.data() });
                } else {
                    console.error('El producto no existe en la base de datos.');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = (count) => {
        addToCart({ ...product, quantity: count });
        setIsAdded(true);
        handleShow();

        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #4caf50, #81c784)",
            stopOnFocus: true,
        }).showToast();
    };


    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="product-detail-container">
            <Card className="product-detail-card shadow-sm">
            <div className="product-detail-image-wrapper">
                <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={`Imagen de ${product.title}`}
                className="product-detail-image"
                />
            </div>
            <Card.Body className="product-detail-body">
                <Card.Title className="product-detail-title">{product.title}</Card.Title>
                <Card.Text className="product-detail-description">{product.description}</Card.Text>
                <Card.Text className="product-detail-price">${product.price}</Card.Text>
                <Card.Text className="product-detail-stock">Stock disponible: {product.stock}</Card.Text>

                {!isAdded && <ItemCount stock={product.stock} onAdd={handleAddToCart} />}
                {isAdded && <p className="product-detail-confirm">Producto agregado al carrito</p>}
            </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>¡Producto agregado!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{product.title} fue agregado correctamente al carrito.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Seguir comprando
                    </Button>
                    <Link to="/cart" className="btn btn-primary">
                        Ir al carrito
                    </Link>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ItemDetail;