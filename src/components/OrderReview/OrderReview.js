import React from 'react';
import { useHistory } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import { addToDb, clearTheCart, removeFromDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        removeFromDb(key);
        setCart(newCart);
    }
    const history = useHistory();
    const handleAddOneMore = key => {
        console.log(key)
        const newCart = [...cart];
        for (const item of newCart) {
            if (key === item.key) {
                console.log('first');
                item.quantity += 1;
                setCart(newCart);
                break;
            }
        }
        addToDb(key);
    }

    const handlePLaceOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    {
                        cart.map(product => <ReviewItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                            handleAddOneMore={handleAddOneMore}
                        ></ReviewItem>)
                    }
                </div>
                <div className="col-lg-3">
                    <div>
                        <h2>Your Orders</h2>
                    </div>
                    <Cart cart={cart}>
                        <button onClick={handlePLaceOrder} className="btn btn-warning">Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;