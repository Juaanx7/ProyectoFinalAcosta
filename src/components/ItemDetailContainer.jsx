import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CartSummary from "./CartSummary";
import { Container, Row, Col } from "react-bootstrap"; // Asegurate de tener esto

function ItemDetailContainer() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setDetail({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log("Producto no encontrado.");
        }
      } catch (error) {
        console.log("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <ItemDetail detail={detail} />
        </Col>
        <Col md={4} className="d-none d-md-block">
          <CartSummary />
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;