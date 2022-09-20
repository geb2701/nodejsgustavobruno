import React from "react";
import CartWidget from './CartWidget/CartWidget';
import {Link} from "react-router-dom";

const navbar = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div className="navbar-collapse" id="navbarText">
                <Link to="/">
                    <h1 style={{ color: "white" }}>GEB SHOP</h1>
                </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className={({isActive}) => isActive ? "nav-item active" : "nav-item "}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={({isActive}) => isActive ? "nav-item active" : "nav-item "}>
                            <Link to="/Productos" className="nav-link">Tienda</Link>
                        </li>
                        <li className={({isActive}) => isActive ? "nav-item active" : "nav-item "}>
                            <Link to="/Contacto" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
            </header>
    )
}

export default navbar