import { useEffect, useState } from "react"
import { getDb } from "../utilities/localStorage";

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const savedCart = getDb();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    return [cart, setCart];
}

export { useCart };