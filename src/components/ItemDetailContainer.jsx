import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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

    return <ItemDetail detail={detail} />;
}

export default ItemDetailContainer;
