import { useState } from "react";
import "./assets/css/style.css";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import { SUCCESS_PAGE } from "./utils/consts";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const hideHeaderFooter = location.pathname === SUCCESS_PAGE;
  function addToCart(product) {
    setCart((prevCart) => {
      const existProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, product];
      }
    });
  }


  return (
    <>
      {!hideHeaderFooter && <Header cart={cart} />}
      <AppRouter addToCart={addToCart} cart={cart} setCart={setCart} />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
