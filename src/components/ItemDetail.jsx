import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
    const [isAdded, setIsAdded] = useState(false); // Estado para controlar si el producto fue agregado al carrito

    const handleAddToCart = (count) => {
        // Lógica para agregar al carrito
        console.log(`Producto agregado: ${product.name}, Cantidad: ${count}`);
        
        // Cambia el estado a true para ocultar ItemCount
        setIsAdded(true);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Stock disponible: {product.stock}</p>

            {/* Solo muestra ItemCount si el producto no fue agregado al carrito */}
            {!isAdded && <ItemCount stock={product.stock} onAdd={handleAddToCart} />}
            
            {/* Aquí podrías mostrar el carrito o una notificación si el producto ya fue agregado */}
            {isAdded && <p>Producto agregado al carrito</p>}
        </div>
    );
}

export default ItemDetail;
