import React from 'react';
import ShoppingCart from '../components/shopping-cart';

const Cart = ({ items, onRevert }) => {
    return (
        <div className="cart-page">
            <h1>Ihr Warenkorb</h1>
            <div className="cart-container">
                <ShoppingCart items={items} />
                <button 
                    className="btn btn-danger mt-3"
                    onClick={onRevert}
                >
                    Warenkorb leeren
                </button>
            </div>
        </div>
    );
};

export default Cart; 