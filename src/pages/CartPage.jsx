import { Link, useNavigate } from "react-router-dom";
import { CHECKOUT_PAGE, PIZZAS_PAGE } from "../utils/consts";

function CartPage({cart = [], setCart}) {

    const navigate = useNavigate();

    function updateQuantity(index, delta) {
        setCart(function (prevCart) {
            return prevCart.map(function (item, idx) {
                return idx === index ? { ...item, quantity: item.quantity + delta} : item
            });
        });
    }

    function removeItem(index) {
        setCart(function (prevCart) {
            return prevCart.filter(function (_, idx) {
                return idx !== index;
            });
        });
    }

    const total = cart.reduce(function(sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    function handleCheckout() {
        navigate(CHECKOUT_PAGE, { state: {cart, total}});
    }



    return (
        <section className="cart">
            <div className="container-fluid">
                <Link to={PIZZAS_PAGE} className="back-btn">Назад</Link>
                <h1 className="title">Моя корзина</h1>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Наименование продукта</th>
                            <th>Фото</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Всего</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => {
                            return (<tr key={index}>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.imageUrl} alt={item.name} />
                                </td>
                                <td>{item.price} &#8376;</td>
                                <td>
                                    <div className="counter">
                                        <button className="counter-btn" onClick={function() {
                                            return updateQuantity(index, -1);
                                        }} disabled={item.quantity <= 1}>-</button>
                                        <span className="counter-number">{item.quantity}</span>
                                        <button onClick={
                                            function() {
                                                return updateQuantity(index, 1);
                                            }
                                        } className="counter-btn">+</button>
                                    </div>
                                </td>
                                <td>{item.price * item.quantity} &#8376;</td>
                                <td>
                                    <div className="centered">
                                        <button onClick={function() {
                                            return removeItem(index)
                                        }} className="btn is-danger">Удалить</button>
                                    </div>
                                </td>
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
                <h2>Итого: {total} &#8376;</h2>
                <div className="actions">
                    <button onClick={handleCheckout} className="btn is-primary">Оформление заказа</button>
                    <Link to={PIZZAS_PAGE} className="btn is-primary">Продолжить покупку</Link>
                </div>
            </div>
        </section>
    );
}

export default CartPage;