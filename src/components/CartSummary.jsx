import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";
import '../styles/CartSummary.scss';

function CartSummary() {
  const { calculateTotalItems, calculateTotal } = useCart();

  return (
    <Card className="cart-summary p-3">
      <h5>Resumen del carrito</h5>
      <p>Productos: {calculateTotalItems()}</p>
      <p>Total: ${calculateTotal()}</p>
      <Link to="/cart" className="cart-btn-link">
        <button className="cart-summary-btn">Ver Carrito</button>
      </Link>
      <Link to="/checkout" className="cart-btn-link">
        <button className="cart-summary-btn">Ir al Checkout</button>
      </Link>
    </Card>
  );
}

export default CartSummary;