import { CartContext } from "../App"
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import './ShoppingCart.css'

export default function ShoppingCart(){

    const {cart, setCart} = useContext(CartContext);
    const itemsArray = Object.keys(cart)
    
    function getTotal(){
        let total = 0;
        for(let item in cart){
            total += parseFloat(cart[item].price) * parseFloat(cart[item].quantity);
        }
        const rndTotal = total.toFixed(2);
        return rndTotal;
    }

    function deleteItem(e){
        const itemName = e.target.dataset.itemname;
        setCart(prevCart => {
            const newCart = {
                ...prevCart
            }
            delete newCart[itemName];
            return newCart;
        })
    }

    function changeQuantity(e) {
        const newQuantity = parseInt(e.target.value);
        const itemName = e.target.dataset.itemname;
        if (newQuantity <= 0){
            setCart(prevCart => {
                const newCart = {...prevCart}
                delete newCart[itemName]
                return newCart;
            })
        } else {
            setCart(prevCart => {
                return {
                    ...prevCart,
                    [itemName]: {
                        ...prevCart[itemName],
                        quantity: newQuantity
                    }
                };
            });
        }
    }

    return (
        <div className="shoppingCart">
            <h1>Your cart</h1>
            <div className="cartBody">
                {itemsArray.length > 0 
                    ? 
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sum</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemsArray.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item}</td>
                                        <td>{cart[item].price}</td>
                                        <td>
                                            <input 
                                            type="number" 
                                            id="quantityInput" 
                                            min="0" 
                                            data-itemname={item}
                                            value={cart[item].quantity} 
                                            onChange={changeQuantity}
                                            />
                                        </td>
                                        <td>{(cart[item].price * cart[item].quantity).toFixed(2)}</td>
                                        <td><FontAwesomeIcon icon={faXmark} onClick={deleteItem} data-itemname={item}/></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                        <tr>
                                <th></th>
                                <th></th>
                                <th>TOTAL</th>
                                <th>${getTotal()}</th>

                            </tr>
                        </tfoot>
                    </table>
                    : 
                    <h2>Your cart is empty!</h2>
                }
            </div>
            <div className="cartFooter">
                {itemsArray.length > 0 && <Link to='/'>Continue to check out</Link>}
                <Link to='/shop'>Continue shopping!</Link>
            </div>
        </div>
    )
}