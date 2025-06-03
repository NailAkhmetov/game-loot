import "./assets/css/style.css";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import { CHECKOUT, HOME, MARKET } from "./utils/const";
import Market from "./pages/Market";
import Home from "./pages/Home";
import Order from "./pages/Orders";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>
      <CartProvider>
                <Header />
        <main>
            <Routes>
                <Route path={HOME} element={<Home />} />
                <Route path={MARKET} element={<Market />} />
                <Route path={CHECKOUT} element={<Order />} />  
            </Routes>
        </main>
      </CartProvider>
    </>
  );
}

export default App;