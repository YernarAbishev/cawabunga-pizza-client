import { Link } from "react-router-dom";
import turtles from "../assets/images/turtles.png"
import { PIZZAS_PAGE } from "../utils/consts";

function HomePage() {
    return (
        <section class="home-block">
            <div class="container-fluid">
                <div class="home-block__banner">
                    <div class="banner-content">
                        <h1 class="banner-content__title">Самая вкусная итальянская пицца в Казахстане</h1>
                        <h2 class="banner-content__subtitle">Доставка бесплатная в квадрате города</h2>
                        <p class="banner-content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, beatae consequatur cumque dignissimos, error et eum hic laborum libero nisi nobis pariatur rerum sed sequi similique tempore ullam vero voluptatem!</p>
                        <Link to={PIZZAS_PAGE} class="btn is-light">Пиццы</Link>
                    </div>
                    <div class="banner-image">
                        <img src={turtles} alt="Turtles" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;