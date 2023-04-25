import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./cartQuantity.module.css";

function CartCantidad({ producto }) {
  const { cart, setCart, sumarCarrito } = useContext(dataContext);

  const restarCarrito = () => {
    const productoCantidad = cart.find((item) => item.id == producto.id);

    productoCantidad.cantidad !== 1 &&
      setCart(
        cart.map((item) =>
          item.id == producto.id
            ? { ...producto, cantidad: productoCantidad.cantidad - 1 }
            : item
        )
      );
  };
  return (
    <div className={styles.container}>
      <p>{producto.cantidad}</p>
      <div className={styles.containerSumaResta}>
        <p
          onClick={() => sumarCarrito(producto)}
          className={styles.sumaCantidad}
        >
          <IoIosArrowUp />
        </p>
        <p onClick={restarCarrito} className={styles.restaCantidad}>
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
}

export default CartCantidad;
