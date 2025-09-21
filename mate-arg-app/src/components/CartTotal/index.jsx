import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import styles from "./cartTotal.module.css";
import { NavLink } from "react-router-dom";

function CartTotal() {
  const { total, vaciarCarrito } = useContext(dataContext);

  return (
    <div className={styles.container}>
      <NavLink to={"/carrito/checkout"} className={styles.comprar}>
        Ir a la Compra
      </NavLink>
      <div className={styles.containerDerecha}>
        <p className={styles.total}>Total: $ {total}</p>
        <button className={styles.vaciarCarrito} onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
