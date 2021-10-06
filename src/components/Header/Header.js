import React from 'react';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <div className="header-section-one">
                <img className="logo" src={logo} alt="" />
            </div>

            <div className="header-section-two">
                <div className="navbar">
                    <a href="/home">Home</a>
                    <a href="/deals">Deals</a>
                    <a href="/category">Catergory</a>
                </div>

                <div className="cart-icon">
                    <img src={cart} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;