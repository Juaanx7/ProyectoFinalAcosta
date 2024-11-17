import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isAdded, setIsAdded] = useState(false);

    const { addToCart } = useCart();

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

        // Mostrar notificación con Toastify
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
        <div className="d-flex justify-content-center mt-5">
            <Card style={{ width: '30rem' }} className="shadow-sm">
                <Card.Img variant="top" src={product.thumbnail} alt={`Imagen de ${product.title}`} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Precio: ${product.price}</Card.Text>
                    <Card.Text>Stock disponible: {product.stock}</Card.Text>

                    {!isAdded && <ItemCount stock={product.stock} onAdd={handleAddToCart} />}
                    {isAdded && <p>Producto agregado al carrito</p>}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetail;
