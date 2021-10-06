import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedDb = getDb();
            const savedOrder = [];
            for (const productKey in savedDb) {
                // console.log(productKey);
                const orderedProduct = products.find(p => p.key === productKey);
                const quantity = savedDb[productKey];
                orderedProduct.quantity = quantity;
                savedOrder.push(orderedProduct);
            }
            setCart(savedOrder);
        }
        
    }, [products])

    
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
        // for (const item of newCart) {
        //     if (product.key === item.key) {
        //         console.log('first');
        //         item.quantity += 1;
        //         setCart(newCart);
        //         break;
        //     }
        //     else {
        //         console.log('Middle');
        //         // if (product.quantity) {
        //         //     product.quantity += 1;
        //         // }
        //         // else {
        //         //     product.quantity = 1;
        //         // }
        //         product.quantity = product.quantity ? product.quantity : 0;
        //         product.quantity += 1;

        //         const newCart = [...cart, product];
        //         setCart(newCart);
        //     }
        // }
        if (cart.length === 0) {
            console.log('last');
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
        addToDb(product.key);


        // const cartItems = [...cart, product];
        // setCart(cartItems);
        // console.log(cart);
        // addToDb(product.key);
    }

    return (
        <div>
            <div>
                <Header></Header>
            </div>

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
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;