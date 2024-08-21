import { 
    CART_PAGE, 
    COMBOS_PAGE, 
    DRINKS_PAGE, 
    HOME_PAGE, 
    MEALS_PAGE, 
    OTHERS_PAGE, 
    PIZZAS_PAGE, 
    SAUCES_PAGE,
    CHECKOUT_PAGE,
    SUCCESS_PAGE
} from "../utils/consts";

import HomePage from "../pages/HomePage";
import PizzasPage from "../pages/PizzasPage";
import CombosPage from "../pages/CombosPage";
import DrinksPage from "../pages/DrinksPage";
import MealsPage from "../pages/MealsPage";
import SaucesPage from "../pages/SaucesPage";
import OthersPage from "../pages/OthersPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import SuccessPage from "../pages/SuccessPage";

export const routes = [
    {
        path: HOME_PAGE,
        element: HomePage
    },
    {
        path: PIZZAS_PAGE,
        element: PizzasPage
    },
    {
        path: COMBOS_PAGE,
        element: CombosPage
    },
    {
        path: DRINKS_PAGE,
        element: DrinksPage
    },
    {
        path: MEALS_PAGE,
        element: MealsPage  
    },
    {
        path: SAUCES_PAGE,
        element: SaucesPage  
    },
    {
        path: OTHERS_PAGE,
        element: OthersPage  
    },
    {
        path: CART_PAGE,
        element: CartPage  
    },
    {
        path: CHECKOUT_PAGE,
        element: CheckoutPage  
    },
    {
        path: SUCCESS_PAGE,
        element: SuccessPage  
    },
];