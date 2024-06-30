import React, { useEffect, useState } from 'react'
import { retrieveAllCategoriesWithProducts } from '../api/ProductsApiService';
import './inventory-page-styles.css';
import { Category } from '@mui/icons-material';

function InventoryPage() {

    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        retrieveAllCategoriesWithProducts()
            .then(
                response => setCategories(response.data)
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='inventory-main-container'>
             {categories.map(category => (
                <div key={category.id}> {/* Ensure to provide a unique key */}
                <h2>{category.name} ({category.products.length})</h2>
                </div>
            ))}
            {JSON.stringify(categories)}
        </div>
    )
}

export default InventoryPage