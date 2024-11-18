import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loader.json';

function ItemListContainer() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Filtra por categoría si existe 'id' en la URL
                const productsRef = collection(db, 'products');
                const q = id ? query(productsRef, where('category', '==', id)) : productsRef;

                const querySnapshot = await getDocs(q);
                const products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setItems(products); 
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    if (loading) {
        return <div className="loading-container">
                    <Lottie 
                    animationData={loadingAnimation} 
                    loop={true} 
                    autoplay={true} 
                    speed={2} 
                    style={{ width: 350, height: 350 }} 
                    />
                </div>
    }

    return (
        <ItemList items={items} />
    );
}

export default ItemListContainer;
