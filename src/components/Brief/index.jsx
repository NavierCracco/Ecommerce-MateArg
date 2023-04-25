import { NavLink, useParams } from "react-router-dom";
import styles from "./brief.module.css";
import { useContext, useState } from "react";
import { dataContext } from "../../contexts/dataContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import OrdenDeCompra from "../OrdenDeCompra";

const db = getFirestore();
const ordersCollection = collection(db, "orders");

function Brief() {
  const [orderId, setOrderId] = useState(null);
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const { total, cart } = useContext(dataContext);

  const order = {
    cliente: {
      nombre: { nombre },
      apellido: { apellido },
    },
    items: cart.map((producto) => ({
      titulo: producto.titulo,
      precio: producto.precio,
      cantidad: producto.cantidad,
    })),
    total: total,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(ordersCollection, order);
    console.log("orden añadida con ID:", docRef.id);
    setOrderId(docRef.id);
  };

  if (orderId === null && cart.length > 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3 className={styles.checkoutTitulo}>Checkout</h3>
          <form onSubmit={handleSubmit} className={styles.checkoutForm}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre(s)"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <input type="tel" name="telefono" placeholder="Teléfono" required />
            <NavLink onClick={handleSubmit} className={styles.pagar}>
              Pagar
            </NavLink>
          </form>
        </div>
      </div>
    );
  }
  if (orderId !== null) {
    return (
      <OrdenDeCompra
        order={order}
        orderId={orderId}
        nombre={nombre}
        apellido={apellido}
      />
    );
  }
}

export default Brief;
