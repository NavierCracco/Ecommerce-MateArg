import { useContext, useState } from "react";
import { dataContext } from "../../contexts/dataContext";
import { FaCircle } from "react-icons/fa";
import styles from "./ordenDeCompra.module.css";
import MercadoPago from "../MercadoPago";
import axios from "axios";

function OrdenDeCompra({ total }) {
  const { cart, isFormComplete } = useContext(dataContext);
  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          items: cart.map((producto) => ({
            title: producto.titulo,
            price: producto.precio,
            quantity: producto.cantidad,
            currency_id: "ARS",
          })),
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();

    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className={styles.containerOrder}>
      <h3>Finaliza el pago</h3>
      <div className={styles.containerProducts}>
        {cart.map((producto) => {
          return (
            <div className={styles.product} key={producto.id}>
              <FaCircle className={styles.faCircle} />
              <img src={producto.imagen} alt={producto.titulo} />
              <small>x{producto.cantidad}</small>
              <p>{producto.titulo}</p>
              <p className={styles.precio}>${producto.precio}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.actions}>
        <p className={styles.total}>Total: $ {total}</p>
        <button
          onClick={handleBuy}
          className={styles.pagar}
          disabled={!isFormComplete()}
        >
          Pagar
        </button>
      </div>
      <MercadoPago preferenceId={preferenceId} />
    </div>
  );
}

export default OrdenDeCompra;
