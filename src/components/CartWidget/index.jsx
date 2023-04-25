import styles from "./cartWidget.module.css";
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";

function CartWidget() {
  const { cart } = useContext(dataContext);
  const numerito = cart.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <button className={styles.carrito}>
      <BsCart className={styles.icon} />
      {cart.length > 0 ? <p className={styles.numerito}>{numerito}</p> : null}
    </button>
  );
}

export default CartWidget;
