import React from "react";
import CartWindget from './CartWindget/CartWindget';

const navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div className="navbar-collapse" id="navbarText">
                <h1 style={{ color: "white" }}>GEB SHOP</h1>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
            <CartWindget/>
        </nav>
    )
}

export default navbar