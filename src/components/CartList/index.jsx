import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { dataContext } from "../../contexts/dataContext";
import { BiHappyBeaming } from "react-icons/bi";
import CartCantidad from "../CartQuantity";
import styles from "./cartList.module.css";

function CartList() {
  const { cart, eliminarProducto } = useContext(dataContext);

  return cart.length > 0 ? (
    <div>
      <div className={styles.container}>
        <h2>MateLista</h2>
        {cart.map((producto) => {
          return (
            <div key={producto.id} className={styles.productos}>
              <img src={producto.imagen} alt={producto.titulo} />
              <CartCantidad producto={producto} />
              <p className={styles.titulo}>{producto.titulo}</p>
              <FaTrashAlt
                className={styles.eliminar}
                onClick={() => eliminarProducto(producto.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <div className={styles.container}>
        <h2>MateLista</h2>
        <p className={styles.textAgregarProducto}>
          Agrega productos a tú Lista! <BiHappyBeaming />
        </p>
      </div>
    </div>
  );
}

export default CartList;
