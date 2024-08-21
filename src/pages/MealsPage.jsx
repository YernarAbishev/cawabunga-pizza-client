import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import ProductItem from "../components/product/ProductItem";



function MealsPage({addToCart}) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const res = await axiosInstance.get('/product?category=Закуски');
                setMeals(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchMeals();
    }, []);

    return (
        <section class="block" id="pizzas">
            <div class="container-fluid">
                <h3 class="title">Закуски</h3>
                <div className="products-row">
                    {meals.map((meal) => (
                        <ProductItem product={meal} key={meal.id} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MealsPage;