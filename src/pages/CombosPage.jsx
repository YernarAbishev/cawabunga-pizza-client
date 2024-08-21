import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import ProductItem from "../components/product/ProductItem";



function CombosPage({addToCart}) {

    const [combos, setCombos] = useState([]);

    useEffect(() => {
        async function fetchCombos() {
            try {
                const res = await axiosInstance.get('/product?category=Комбо');
                setCombos(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchCombos();
    }, []);

    return (
        <section class="block" id="pizzas">
            <div class="container-fluid">
                <h3 class="title">Комбо</h3>
                <div className="products-row">
                    {combos.map((combo) => (
                        <ProductItem product={combo} key={combo.id} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CombosPage;