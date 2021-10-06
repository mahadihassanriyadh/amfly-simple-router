import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log()
    const {name, price, img} = props.product;
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 card custom-card g-5" style={{width: '18rem'}}>
            <div>
                <img src={img} alt="" />
                <h5 title={name}>{name.slice(0, 60)}</h5>
            </div>
            <div className="card-bottom">
                <p className="fs-5 text">Price: ${price}</p>
                <button onClick={()=>props.handleAddToCartBtn(props.product)} className="btn btn-warning">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;