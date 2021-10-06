import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <div className="header-section-one">
                <img className="logo" src={logo} alt="" />
            </div>

            <div className="header-section-two">
                <div className="navbar">
                    <Link to="/Shop">Shop</Link>
                    <Link to="/orderReview">Order Review</Link>
                    <Link to="/inventory">Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;