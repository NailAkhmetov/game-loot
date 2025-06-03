import { useCart } from "../../context/CartContext";

function ProductPerch({perch}) {

    
    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(perch)
    }

    return(
        <div class="card">
            <img class="img" src={perch.image} alt={perch.name} />
            <div class="textBox">
            <span class="text head">{perch.name}</span>
            <span>{perch.description}</span>
            <p class="text price">{perch.category}</p>
                <div class="bottomBox">
                    <strong class="product-item__title">{perch.price.toLocaleString()} &#8376;</strong>
                    <button class="add-button" onClick={handleAddToCart}>В корзину</button>
                </div>
            </div>
        </div>  
    );
}

export default ProductPerch;