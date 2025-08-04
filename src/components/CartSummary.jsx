// src/components/CartSummary.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function CartSummary() {
  const { calculateTotalItems, calculateTotal } = useCart();

  return (
    <Card className="cart-summary p-3 shadow-sm">
      <h5>Resumen del carrito</h5>
      <p>Productos: {calculateTotalItems()}</p>
      <p>Total: ${calculateTotal()}</p>
      <Link to="/cart">
        <Button variant="primary" className="w-100 mt-2">Ver Carrito</Button>
      </Link>
      <Link to="/checkout">
        <Button variant="success" className="w-100 mt-2">Ir al Checkout</Button>
      </Link>
    </Card>
  );
}

export default CartSummary;