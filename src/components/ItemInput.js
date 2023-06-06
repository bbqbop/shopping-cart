export default function ItemInput({isAdded, quantity}){
    return (
        {isAdded ? (
            <>
            <input type="number" id="quantityInput" min="0" value={quantity} onChange={changeQuantity}/>
            </>
            ) : (
                <button onClick={addToCart}>Add to cart</button>
            )}
    )
}