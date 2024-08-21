import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import ProductItem from "../components/product/ProductItem";



function OthersPage({addToCart}) {

    const [others, setOthers] = useState([]);

    useEffect(() => {
        async function fetchOthers() {
            try {
                const res = await axiosInstance.get('/product?category=Другое');
                setOthers(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchOthers();
    }, []);

    return (
        <section class="block" id="pizzas">
            <div class="container-fluid">
                <h3 class="title">Другое</h3>
                <div className="products-row">
                    {others.map((other) => (
                        <ProductItem product={other} key={other.id} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OthersPage;