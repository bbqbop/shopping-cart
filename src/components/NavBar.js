import { NavLink } from "react-router-dom"
import { CartContext } from "../App"
import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(){

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const cartIcon = document.querySelector('.cartIcon')
        const cartIconRect = cartIcon.getBoundingClientRect();
        const isScrolled = window.scrollY > cartIconRect.top + window.scrollY;

        if (isScrolled){
            cartIcon.classList.add('fixed');
        } else {
            cartIcon.classList.remove('fixed');
        }
    }

    window.addEventListener('scroll', handleScroll);

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
            <NavLink to="/shop" >Shop</NavLink>
            <div className={`cartIcon`}>
                <NavLink to="/cart" >
                    <FontAwesomeIcon icon={faCartShopping} />
                    {getItemsCount()}
                </NavLink>
            </div>
        </div>
    )
}