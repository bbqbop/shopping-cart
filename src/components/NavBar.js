import { NavLink } from "react-router-dom"
import { CartContext } from "../App"
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(){

    const { cart } = useContext(CartContext);

    function getItemsCount(){
        let count = 0
        for(let items in cart){
            count += cart[items].quantity
        }
        return count;
    }

    return (
        <div className="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/shop/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                {getItemsCount()}
            </NavLink>
        </div>
    )
}