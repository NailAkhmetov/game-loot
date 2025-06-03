import { useCart } from "../../context/CartContext";

function ProductKnife({knife}) {

    
    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(knife)
    }

    return(
        <div class="card">
            <img class="img" src={knife.image} alt={knife.name} />
            <div class="textBox">
            <span class="text head">{knife.name}</span>
            <span>{knife.description}</span>
            <p class="text price">{knife.category}</p>
                <div class="bottomBox">
                    <strong class="product-item__title">{knife.price.toLocaleString()} &#8376;</strong>
                    <button class="add-button" onClick={handleAddToCart}>В корзину</button>
                </div>
            </div>
        </div>  
    );
}

export default ProductKnife;