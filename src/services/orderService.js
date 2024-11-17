import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export async function createOrder(orderDetails) {
  try {
    console.log("Detalles de la orden:", orderDetails);

    const { items, total, buyer } = orderDetails;

    if (!buyer || !buyer.name || !buyer.email || !buyer.phone) {
      throw new Error("Los datos del comprador son incompletos");
    }

    // Crea la orden en Firestore
    const orderRef = await addDoc(collection(db, 'orders'), {
      items: items,
      total: total,
      date: serverTimestamp(),
      buyer: buyer,
      status: 'pendiente',
    });

    console.log("Compra registrada con ID:", orderRef.id);

    return { id: orderRef.id };
  } catch (error) {
    console.error("Error al registrar la compra:", error);
    throw error;
  }
}

