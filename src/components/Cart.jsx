import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import '../styles/Cart.scss';
import '../styles/main.scss';

function Cart() {
  const { cart, calculateTotalItems, calculateTotal, removeFromCart, clearCart } = useCart();

  const handleRemove = (productId, productTitle) => {
    removeFromCart(productId);
    Toastify({
      text: `${productTitle} eliminado del carrito`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
      stopOnFocus: true,
    }).showToast();
  };

  const handleClearCart = () => {
    clearCart();
    Toastify({
      text: "Carrito vaciado",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #f44336, #e57373)",
      stopOnFocus: true,
    }).showToast();
  };

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary btn-back mt-3">
          Volver a comprar
        </Link>
      </Container>
    );
  }

  return (
    <Container className="cart-container">
      <Card className="cart-card">
        <h2 className="text-center mb-4">Carrito de compras</h2>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="cart-image" />
            <div className="cart-details">
              <div className="cart-title">{item.title}</div>
              <div className="cart-price">
                Precio: ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </div>
              <div className="d-flex gap-2 mt-2">
                <Button as={Link} to={`/item/${item.id}`} className="cart-btn">
                  Ver detalles
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="cart-btn"
                  onClick={() => handleRemove(item.id, item.title)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="cart-summary">
          <h4>Total de productos: {calculateTotalItems()}</h4>
          <h4>Total: ${calculateTotal()}</h4>

          <div className="d-flex justify-content-end gap-3 mt-3">
            <Button variant="outline-danger" onClick={handleClearCart}>
              Vaciar carrito
            </Button>
            <Link to="/checkout" className="btn btn-success btn-checkout">
              Confirmar Compra
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Cart;