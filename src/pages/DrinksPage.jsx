import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import ProductItem from "../components/product/ProductItem";



function DrinksPage({addToCart}) {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchDrinks() {
            try {
                const res = await axiosInstance.get('/product?category=Напитки');
                setDrinks(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchDrinks();
    }, []);

    return (
        <section class="block" id="pizzas">
            <div class="container-fluid">
                <h3 class="title">Напитки</h3>
                <div className="products-row">
                    {drinks.map((drink) => (
                        <ProductItem product={drink} key={drink.id} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DrinksPage;