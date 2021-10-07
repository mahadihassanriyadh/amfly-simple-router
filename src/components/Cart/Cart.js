import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let productQuantity = 0;
    for (const product of cart) {
        total = total + product.price * (product.quantity ?product.quantity : 1);
        productQuantity = productQuantity + (product.quantity ? product.quantity : 1);
    }

    const tax = total * .1;
    const shippingCost = total > 15 ? 10 : 0;
    const grandTotal = total + tax + shippingCost;
    return (
        <div className="cart mb-5">
            <h3 className="text-center">Order Summary</h3>
            <p>Items Ordered: {productQuantity}</p>
            <p>Sub Total: {total.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;