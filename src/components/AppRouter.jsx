import { Routes, Route } from "react-router-dom"
import { routes } from "../utils/routes"


function AppRouter({addToCart, cart, setCart}) {
    return (
        <main className="main">
            <Routes>
                {routes.map((route, index) => (
                    <Route 
                        key={index} 
                        path={route.path} 
                        element={<route.element addToCart={addToCart} cart={cart} setCart={setCart} />} 
                    />
                ))}
            </Routes>
        </main>
    )
}

export default AppRouter;