import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { FaTrashAlt } from "react-icons/fa";
import CartCantidad from "../CartQuantity";
import styles from "./cartItem.module.css";

function CartItem() {
  const { cart, eliminarProducto } = useContext(dataContext);

  return (
    <div>
      {cart.map((producto) => {
        return (
          <div key={producto.id} className={styles.productos}>
            <img src={producto.imagen} alt={producto.titulo} />
            <p className={styles.titulo}>{producto.titulo}</p>
            <CartCantidad producto={producto} />
            <p className={styles.precio}>
              $ {producto.precio * producto.cantidad}
            </p>
            <FaTrashAlt
              className={styles.eliminar}
              onClick={() => eliminarProducto(producto.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CartItem;
