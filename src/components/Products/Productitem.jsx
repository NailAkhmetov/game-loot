import { useCart } from "../../context/CartContext";

function ProductItem({product}) {

    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(product)
    }

    return(
        <div class="card">
            <img class="img" src={product.image} alt={product.name} />
            <div class="textBox">
            <span class="text head">{product.name}</span>
            <span>{product.description}</span>
            <p class="text price">{product.category}</p>
                <div class="bottomBox">
                    <strong class="product-item__title">{product.price.toLocaleString()} &#8376;</strong>
                    <button class="add-button" onClick={handleAddToCart}>В корзину</button>
                </div>
            </div>
        </div>  
    );
}

export default ProductItem;