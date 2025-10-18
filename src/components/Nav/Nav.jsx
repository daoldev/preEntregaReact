import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useContext(CartContext);
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/salado"}>Salado</Link>
                </li>
                <li>
                    <Link to={"/category/dulce"}>Dulce</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};