import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import styles from "./cartWidget.module.css";

function CartWidget() {
  const { cart } = useContext(dataContext);
  const numerito = cart.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <div className={styles.container}>
      <button className={styles.carrito}>
        <BsCart />
      </button>
      {cart.length > 0 ? (
        <span className={styles.numerito}>{numerito}</span>
      ) : null}
    </div>
  );
}

export default CartWidget;
