import { Link, useNavigate } from "react-router-dom";
import { MARKET } from "../utils/const";
import { useCart } from "../context/CartContext";
import { a } from "../services/axiosInstance";
import { useState } from "react";

function Order() {
    const {clearCart, totalPrice, cartItems } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        game: 'CounterStrke 2',
    });
    const [isSubmiting, setIsSubmiting] = useState(false);

    function handleInputChange(event){
        const { name, value } = event.target;
        setFormData(function(prevData) {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!formData.name || !formData.phone || !formData.game) {
            alert("Заплоните все обязательные поля.");
            return;
        }
        if (cartItems.length === 0) {
            alert("Ваша корзина пуста. Пожалуйста выберите скины.");
            navigate(MARKET);
            return;
        }

        setIsSubmiting(true);

        const orderTimestamp = new Date().toISOString();
        const orderData = {
            customer: formData,
            items: cartItems,
            totalPrice: totalPrice,
            orderTimestamp: orderTimestamp,
        };

        try {
            const res = await a.post('/orders', orderData);
            alert(`Вы успешно приобрели скины! Сумма: ${totalPrice.toLocaleString()} тенге. Номер заказа: ${res.data.id}`);
            clearCart();
            navigate(MARKET);
        } catch (error) {
            console.error("Error: ", error);
            alert("Что-то пошло не так");
        } finally {
            setIsSubmiting(false);
        }

    }



    return (
            <section class="block">
                <div class="container">
                    <Link to={MARKET} class="back-btn">Назад</Link>
                    <h1 class="title">Купить скины</h1>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="form-control">
                            <label htmlFor="name" class="label">Username</label>
                            <input
                            value={formData.name}
                            onChange={handleInputChange}
                            disabled={isSubmiting} 
                            type="text" 
                            name="name" 
                            placeholder="Введите имя пользователя Steam" 
                            required />
                        </div>
                        <div class="form-control">
                            <label htmlFor="phone" class="label">Номер телефона</label>
                            <input
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={isSubmiting}
                            pattern="\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}"
                            type="text" 
                            name="phone" 
                            placeholder="Введите номер телефона: +7 XXX XXX XX XX"
                            required />
                        </div>
                        <div class="form-control">
                            <label htmlFor="game" class="label">Укажите игру</label>
                            <select name="game" id="game" value={formData.game} onChange={handleInputChange} disabled={isSubmiting}>
                                <option value="Counter Strike 2">Counter Strike 2</option>
                                <option value="Dota 2">Dota 2</option>
                            </select>
                        </div>
                        <button class="send-btn" disabled={isSubmiting}>
                            {isSubmiting ? 'Запрос в обработке...' : 'Купить скины'}
                        </button>
                    </form>
                </div>
            </section>
    );
}

export default Order;