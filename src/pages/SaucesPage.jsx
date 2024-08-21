import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import ProductItem from "../components/product/ProductItem";



function SaucesPage({addToCart}) {

    const [sauces, setSauces] = useState([]);

    useEffect(() => {
        async function fetchSauces() {
            try {
                const res = await axiosInstance.get('/product?category=Соусы');
                setSauces(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchSauces();
    }, []);

    return (
        <section class="block" id="pizzas">
            <div class="container-fluid">
                <h3 class="title">Соусы</h3>
                <div className="products-row">
                    {sauces.map((sauce) => (
                        <ProductItem product={sauce} key={sauce.id} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SaucesPage;