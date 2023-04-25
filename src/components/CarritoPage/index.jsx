import Titulo from "../Titulo";
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";
import styles from "./carritoPage.module.css";
import { TfiFaceSad } from "react-icons/tfi";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";

function CarritoPage() {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <Titulo titulo={"Carrito"} />
      <div className={styles.container}>
        <CartItem />
        <CartTotal />
      </div>
    </>
  ) : (
    <>
      <Titulo titulo={"Carrito"} />
      <div className={styles.container}>
        <h4>
          Tú carrito está vacío <TfiFaceSad />
        </h4>
      </div>
    </>
  );
}

export default CarritoPage;
