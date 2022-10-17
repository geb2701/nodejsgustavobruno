import React from "react";
import CartWidget from './CartWidget/CartWidget';
import {Link} from "react-router-dom";

const navbar = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div className="navbar-collapse" id="navbarText">
                    <Link to="/">
                        <h1 style={{color: "white"}}>GEB SHOP</h1>
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className={"nav-item"}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/Productos/Remeras" className="nav-link">Remeras</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/Productos/Zapatillas" className="nav-link">Zapillas</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/Productos/Pantalones" className="nav-link">Pantalones</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to="/Usuario" className="nav-link">Usuario</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
            </header>
    )
}

export default navbar