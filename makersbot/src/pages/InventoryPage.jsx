import React, { useEffect, useState } from 'react'
import { retrieveAllCategoriesWithProducts } from '../api/ProductsApiService';
import './inventory-page-styles.css';
import { Category } from '@mui/icons-material';
import Loading from '../components/Loading';

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
            {categories.length === 0 ? (
                <Loading/>
            ) : (
                <>
                    {categories.map(category => (
                        <div key={category.id}>
                            <h2>{category.name} ({category.products.length})</h2>
                            {category.products.map(product => (
                                <div className='product-card' key={product.id}>
                                    <h5>{product.name}</h5>
                                    <ul>
                                        <li><strong>Quantity:</strong> {product.quantity}</li>
                                        <li><strong>Characteristics:</strong> {product.characteristics}</li>
                                        <li><strong>Price:</strong> {product.price}</li>
                                        <li><strong>Score:</strong> {product.score}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </>
            )}
        </div>

    )
}

export default InventoryPage