import { useLocation, useNavigate } from "react-router-dom";
import { SUCCESS_PAGE } from "../utils/consts";
import { useState } from "react";
import { axiosInstance } from "../services/axiosInstance";

function CheckoutPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const { cart, total } = location.state || {cart: [], total: 0};

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: 'Алматы',
        address: '',
        paymentType: 'Перевод на Kaspi'
    });

    function handleInputChange(e) {
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const orderData = {
            customer: formData,
            items: cart,
            total,
            createdAt: new Date().toISOString(),
        };
        try {
            await axiosInstance.post('/order', orderData);
            navigate(SUCCESS_PAGE);
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <section class="checkout">
            <div class="container-fluid">
                <span class="back-btn">Назад</span>
                <h1 class="title">Оформление заказа</h1>
                <form onSubmit={handleSubmit} class="form-card">
                    <div class="form-control">
                        <label for="name">Ваше имя</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Введите имя" 
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="form-control">
                        <label for="phone">Номер телефона</label>
                        <input 
                            id="phone" 
                            type="text" 
                            placeholder="Введите номер телефона: +7 XXX XXX XX XX" 
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="form-control">
                        <label for="city">Укажите город</label>
                        <select name="city" id="city" value={formData.city} onChange={handleInputChange}>
                            <option value="Алматы">Алматы</option>
                            <option value="Астана">Астана</option>
                            <option value="Шымкент">Шымкент</option>
                            <option value="Семей">Семей</option>
                            <option value="Актау">Актау</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="address">Напишите адрес</label>
                        <textarea value={formData.address} onChange={handleInputChange} name="address" id="address" cols="30" rows="10" placeholder="Введите адрес, дом, квартиру, домофон"></textarea>
                    </div>
                    <div class="form-control">
                        <label for="payementType">Выберите тип оплаты</label>
                        <select name="payementType" id="payementType" value={formData.paymentType} onChange={handleInputChange}>
                            <option value="Перевод на Kaspi">Перевод на Kaspi</option>
                            <option value="Наличными курьеру">Наличными курьеру</option>
                        </select>
                    </div>
                    <button type="submit" class="btn is-primary">Оформить заказ</button>
                </form>
            </div>
        </section>
    );
}
export default CheckoutPage;