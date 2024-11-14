import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const API_BASE_URL = 'https://dummyjson.com/products';
const MAIN_CATEGORIES = ['smartphones', 'laptops', 'mobile-accessories'];

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    // Obtener productos de una categoria especifica
    const fetchCategoryItems = async (categoryId) => {
        const response = await fetch(`${API_BASE_URL}/category/${categoryId}`);
        const data = await response.json();
        return data.products;
    };

    // Obtener productos de las categorias principales
    const fetchMainCategoriesItems = async () => {
        const responses = await Promise.all(
            MAIN_CATEGORIES.map(fetchCategoryItems)
        );
        return responses.flat();
    };

    useEffect(() => {
        const fetchItems = async () => {
            const items = id 
                ? await fetchCategoryItems(id)
                : await fetchMainCategoriesItems();
            setItems(items);
        };
        fetchItems();
    }, [id]);

    return <ItemList items={items} />;
}

export default ItemListContainer;

