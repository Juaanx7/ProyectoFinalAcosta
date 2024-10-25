import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = 'https://dummyjson.com/products';
        const urlCategory = `https://dummyjson.com/products/category/${id}`;
        
        //Utilice un array para poder mostrar solo las 3 categorias que queria en la vista principal:
        const categories = ['smartphones', 'laptops', 'mobile-accessories'];

        if (!id) {
            // Hago un fetch a las tres categorías
            Promise.all(
                categories.map(category => 
                    fetch(`https://dummyjson.com/products/category/${category}`)
                        .then(res => res.json())
                )
            ).then(responses => {
                // Combino todos los productos de las tres categorías
                const allProducts = responses.flatMap(response => response.products);
                setItems(allProducts);
            });
        } else {
            // Si se pasa el ID de categoría, hago fetch solo de esa categoría:
            fetch(urlCategory)
                .then(res => res.json())
                .then(res => setItems(res.products));
        }
    }, [id]);

    return (
        <ItemList items={items} />
    );
}

export default ItemListContainer;
