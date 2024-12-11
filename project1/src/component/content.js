import React from 'react';
import './content.css'

function Content() {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <img src="/images/electronics.jpg" alt="Electronics" />
                    <h3>Electronics</h3>
                    <p>Explore the latest in electronics including gadgets, devices, and accessories.</p>
                </div>
                <div className="card">
                    <img src="/images/jewellery.jpg" alt="Jewelry" />
                    <h3>Jewellery</h3>
                    <p>Shop elegant jewelry pieces for any occasion, from rings to necklaces.</p>
                </div>
                <div className="card">
                    <img src="/images/men's clothing.jpeg" alt="Men's Clothing" />
                    <h3>Men's Clothing</h3>
                    <p>Discover stylish and comfortable clothing for men, from casual to formal wear.</p>
                </div>
                <div className="card">
                    <img src="/images/women's clothing.jpg" alt="Women's Clothing" />
                    <h3>Women's Clothing</h3>
                    <p>Explore a wide range of fashionable and trendy clothing for women.</p>
                </div>
            </div>
        </>
    );
}

export default Content;
