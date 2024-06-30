import React, { useEffect, useState } from 'react'
import { deleteOneProduct, retrieveAllCategoriesWithProducts } from '../api/ProductsApiService';
import './inventory-page-styles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Loading from '../components/Loading';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function InventoryPage() {

    const [categories, setCategories] = useState([]);

    const handleDelete = async (id) => {
        
        await deleteOneProduct(id);
        retrieveAllCategoriesWithProducts()
            .then(
                response => setCategories(response.data)
            )
            
    };

    const handleEdit = (id) => {
        console.log("Editar ", id);
        //Do something
    }

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
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h2>{category.name} ({category.products.length})</h2>
                            {category.products.map(product => (
                                <div className='product-card' key={product.id}>
                                    <div>
                                        <h5>{product.name}</h5>
                                        <ul>
                                            <li><strong>Quantity:</strong> {product.quantity}</li>
                                            <li><strong>Characteristics:</strong> {product.characteristics}</li>
                                            <li><strong>Price:</strong> {product.price}</li>
                                            <li><strong>Score:</strong> {product.score}</li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <IconButton aria-label="delete" style={{width: 'auto'}} onClick={() => {handleDelete(product.id)}}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
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
