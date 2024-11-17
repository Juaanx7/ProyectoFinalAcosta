import { useParams } from "react-router-dom";

function OrderConfirmation() {
  const { id } = useParams();

  return (
    <div>
      <h2>Confirmación de Compra</h2>
      <p>¡Gracias por tu compra!</p>
      <p>Tu orden ha sido registrada con el ID: {id}</p>
    </div>
  );
}

export default OrderConfirmation;
