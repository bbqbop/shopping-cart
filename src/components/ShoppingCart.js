import { CartContext } from "../App"
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCart(){

    const {cart, setCart} = useContext(CartContext);
    const itemsArray = Object.keys(cart)
    
    function getTotal(){
        let total = 0;
        for(let item in cart){
            total += parseFloat(cart[item].price) * parseFloat(cart[item].quantity);
        }
        return total;
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

    return (
        <div>
            <h1>Your cart</h1>
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
                                    <td>{cart[item].quantity}</td>
                                    <td>{cart[item].price * cart[item].quantity}</td>
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
                            <th>{getTotal()}</th>

                        </tr>
                    </tfoot>
                </table>
                : 
                <h2>Your cart is empty!</h2>
            }
        </div>
    )
}