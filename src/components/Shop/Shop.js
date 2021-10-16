import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { addToDb, getDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    useEffect(() => {
      fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    const handleAddToCartBtn = product => {
        // product.quantity = 1;
        let newCart = [];
        const exists = cart.find(p => p.key == product.key)
        if (exists) {
            // by rest I am refering to the rest of the products in the cart without the specific product
            const rest = cart.filter(p => p.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        
        // changing in UI
        setCart(newCart);
        // save to local storage for now
        addToDb(product.key);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-9">
                    <div className="row">
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCartBtn={handleAddToCartBtn}
                            ></Product>)
                        }
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <Cart cart={cart}>
                        <Link to="/orderReview">
                            <button className="btn btn-success">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;