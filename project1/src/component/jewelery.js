
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseFetch from './usefetch';
import './jewelery.css';

function Jewelery() {
  const navigate = useNavigate();
  const [data, loading, error] = UseFetch("https://fakestoreapi.com/products/category/jewelery");

  const handleAddToCart = (itemId) => {
    navigate(`/cart/${itemId}`);
  };

  const handleViewDetails = (itemId) => {
    navigate(`/product/${itemId}`); 
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="jewelery-card-container">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="jewelery-card">
            <h3>ID={item.id}</h3>
            <hr />
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="jewelery item-image" />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <div className="jewelery button-container">
              <button className="btn" onClick={() => handleAddToCart(item.id)}>
                Add To Cart
              </button>
              <button className="btn" onClick={() => handleViewDetails(item.id)}>
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Jewelery;

