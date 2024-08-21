import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import ProductItem from "../components/product/ProductItem";



function PizzasPage({addToCart}) {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        async function fetchPizzas() {
            try {
                const res = await axiosInstance.get('/product?category=Пиццы');
                setPizzas(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPizzas();
    }, []);

    return (
        <section class="block" id="pizzas">
            <div class="container-fluid">
                <h3 class="title">Пиццы</h3>
                <div className="products-row">
                    {pizzas.map((pizza) => (
                        <ProductItem product={pizza} key={pizza.id} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PizzasPage;