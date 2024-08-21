import {Link} from "react-router-dom";
import { CART_PAGE, COMBOS_PAGE, DRINKS_PAGE, HOME_PAGE, MEALS_PAGE, OTHERS_PAGE, PIZZAS_PAGE, SAUCES_PAGE } from "../utils/consts";
import logo from "../assets/images/logo.svg";
function Header({cart}) {
    return (
        <header className="header">
            <div className="container-fluid header-row">
                <Link to={HOME_PAGE} className="logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul className="header-nav">
                    <li className="header-nav__item">
                        <Link to={PIZZAS_PAGE} className="header-nav__link">Пиццы</Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={COMBOS_PAGE} className="header-nav__link">Комбо</Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={DRINKS_PAGE} className="header-nav__link">Напитки</Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={MEALS_PAGE} className="header-nav__link">Закуски</Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={SAUCES_PAGE} className="header-nav__link">Соусы</Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={OTHERS_PAGE} className="header-nav__link">Другое</Link>
                    </li>
                </ul>
                <Link to={CART_PAGE} className="btn is-primary">Корзина ({cart.length})</Link>
            </div>
        </header>
    );
}

export default Header;