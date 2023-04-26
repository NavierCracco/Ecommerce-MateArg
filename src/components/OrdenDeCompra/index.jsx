import { useContext } from "react";
import styles from "./ordenDeCompra.module.css";
import { dataContext } from "../../contexts/dataContext";
import { NavLink } from "react-router-dom";

function OrdenDeCompra({ order, orderId, nombre, apellido }) {
  const { vaciarCarrito, cart } = useContext(dataContext);

  const handleClick = () => {
    vaciarCarrito();
  };

  return cart.length > 0 ? (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Finaliza el pago</h3>
        <div className={styles.dataOrder}>
          <small>fecha</small>
          <small>N° Orden: {orderId}</small>
        </div>
        <p className={styles.comprador}>
          {nombre} {apellido}
        </p>
        <table className={styles.containerDetalle}>
          <thead className={styles.encabezado}>
            <tr>
              <th>Productos</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody className={styles.bodyForm}>
            {order.items.map((item) => (
              <tr key={orderId} className={styles.infoProducto}>
                <td>{item.titulo}</td>
                <td>{item.cantidad}</td>
                <td>{item.precio}</td>
                <td>{item.cantidad * item.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.tableFooter}>
        <p className={styles.total}>Total: $ {order.total}</p>
        <button onClick={handleClick} className={styles.btn}>
          pagar
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.wrapperConfirm}>
      <div className={styles.containerConfirm}>
        <p>compra confirmada</p>
        <NavLink className={styles.btn} to="/">
          volver
        </NavLink>
      </div>
    </div>
  );
}

export default OrdenDeCompra;
