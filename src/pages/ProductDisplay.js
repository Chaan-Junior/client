import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductDisplay.css";
import Navigation from "../components/Navbar";

function ProductDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navigation />
      <br />
      <h1 id="heading"> Available Products</h1>
      <div className="product-display">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.productImage}
              alt={product.productName}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-description">
                {product.productDescription}
              </p>
              <p className="product-quantity">
                Quantity: {product.productQuantity}
              </p>
              <p className="product-type">Type: {product.productType}</p>

              <p className="product-price">Price: ${product.productPrice}</p>

              <button className="update-product">Update</button>
              <button className="delete-product">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
