import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div>
            <h1>Your order has been placed successfully.</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;