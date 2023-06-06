import { NavLink } from "react-router-dom"

export default function NavBar(){
    return (
        <div className="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/shop/cart">Cart</NavLink>
        </div>
    )
}