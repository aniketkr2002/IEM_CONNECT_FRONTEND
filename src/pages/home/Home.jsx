import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/listItem/ProductList";
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product');
      console.log('Response from API:', response);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
git puxhs  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
