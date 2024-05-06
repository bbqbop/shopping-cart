import { NavLink } from "react-router-dom"
import { CartContext } from "../App"
import { useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.svg'

export default function NavBar(){
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const homeLink = document.querySelector('#homeLink');
        if(homeLink.classList[0] === 'active'){
            return
        }            
        const cartIcon = document.querySelector('.cartIcon')
        const cartIconRect = cartIcon.getBoundingClientRect();
        const isScrolled = window.scrollY > cartIconRect.height;
        
        if(isScrolled && !isFixed){
            cartIcon.classList.add('fixed');
            setIsFixed(true)
        } else if (!isScrolled && isFixed) {
            cartIcon.classList.remove('fixed');
            setIsFixed(false);
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
            <img src={logo} alt='Dino Delight Logo' id='logo'/>
            <NavLink to="/" id='homeLink'>Home</NavLink>
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