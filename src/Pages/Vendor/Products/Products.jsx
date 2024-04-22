import React, {useEffect, useState} from "react";
import "./Products.css";

const VendorProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Code to fetch products from API and update the state
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Make API request to fetch products
            const response = await fetch("http://localhost:4000/api/productos");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    const addProduct = (newProduct) => {
        // Code to add a new product to the state and API
        setProducts([...products, newProduct]);
    };

    const editProduct = (productId, updatedProduct) => {
        // Code to update a product in the state and API
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, ...updatedProduct };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const deleteProduct = (productId) => {
        // Code to delete a product from the state and API
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <div>
            <h1>Products</h1>
        </div>
    );
};

export default VendorProducts;
