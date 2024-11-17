import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../services/orderService';
import { useCart } from '../context/CartContext';

function Checkout() {
    const { cart, calculateTotal } = useCart();
    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerData({
            ...customerData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            customer: customerData, 
            items: cart,
            total: calculateTotal(),
        };

        try {
            const newOrderId = await createOrder(order);
            setOrderId(newOrderId);

            await createOrder(order);
            clearCart();
            navigate(`/order/${newOrderId}`);
        } catch (error) {
            console.error('Error al realizar la compra:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Confirmación de Compra</h2>
            {cart.length === 0 ? (
                <p>No tienes productos en el carrito.</p>
            ) : (
                <>
                    <h3>Resumen de Compra</h3>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span> - 
                                <span>Cantidad: {item.quantity}</span> - 
                                <span>Subtotal: ${item.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${calculateTotal()}</h3>

                    <h3>Datos del Comprador</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={customerData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={customerData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Dirección</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={customerData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Procesando...' : 'Confirmar Compra'}
                        </button>
                    </form>

                    {orderId && <p>Compra realizada con éxito. Tu número de orden es: {orderId}</p>}
                </>
            )}
        </div>
    );
}

export default Checkout;
