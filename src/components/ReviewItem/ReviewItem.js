import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    return (
        <div className="mt-5">
            <div className="row">
                <div className="cold-2 col-sm-3 col-lg-3">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-10 col-sm-9 col-lg-9">
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <button onClick={()=> props.handleAddOneMore(key)} className="btn btn-warning me-3">Add One More</button>
                    <button onClick={()=> props.handleRemove(key)} className="btn btn-danger">Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;