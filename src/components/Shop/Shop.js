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
        const newCart = [...cart];
        const foundMatch = cart.find(p => p.key == product.key)
        if (foundMatch) {
            for (const item of newCart) {
                if (product.key === item.key) {
                    console.log('first');
                    item.quantity += 1;
                    setCart(newCart);
                    break;
                }
            }
        }
        else {
            product.quantity = product.quantity ? product.quantity : 0;
            product.quantity += 1;

            const newCart = [...cart, product];
            setCart(newCart);
        }
        
        if (cart.length === 0) {
            console.log('last');
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }

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