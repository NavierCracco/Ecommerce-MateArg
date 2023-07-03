import { Route, Routes } from "react-router-dom";
import CarritoPage from "./components/CarritoPage";
import ContactoPage from "./components/ContactoPage";
import InicioPage from "./components/InicioPage";
import CuraTuMatePage from "./components/TipPage";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import CategoryProducts from "./components/CategoryProducts";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/curatumate" element={<CuraTuMatePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route
          path="/productos/:categoria/:id"
          element={<ItemDetailContainer />}
        />
        <Route path="/productos/:categoria" element={<CategoryProducts />} />
        <Route path="/carrito/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
