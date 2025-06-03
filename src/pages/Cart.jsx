import { Link, useNavigate } from "react-router-dom";
import { CHECKOUT } from "../utils/const";
import { useCart } from "../context/CartContext";

function Cart() {
    const navigate = useNavigate();
    const {
        cartItems,
        totalPrice,
        removeFromCart,
    } = useCart();

    function handleCheckout() {
        if (cartItems.length === 0) {
            <aside className="cart">
                <h2>Моя корзина скинов</h2>
            </aside>
            return;
        }
        navigate(CHECKOUT);
    }

    return (
        <>
        {cartItems.length === 0 ? <>
            <aside className="cart">
                <h2>Моя корзина скинов</h2>
                <p>Ваша корзина пуста...</p>
            </aside>
        </>: <>
            <aside className="cart">
                <h2>Моя корзина скинов</h2>
                <ul className="cart-items">
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">{item.price.toLocaleString()}₸</span>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="del-btn">×</button>
                    </li>
                ))}
                </ul>

                <div className="cart-total">
                    <strong>Итого: {totalPrice.toLocaleString()} &#8376;</strong>
                </div>
                <Link to={CHECKOUT} className="checkout-btn">Купить скины</Link>
            </aside>
        </>}
        </>
    );
}

export default Cart;