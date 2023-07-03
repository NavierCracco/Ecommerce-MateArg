import { useContext, useState } from "react";
import { dataContext } from "../../contexts/dataContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import OrdenDeCompra from "../OrdenDeCompra";
import styles from "./brief.module.css";

const db = getFirestore();
const ordersCollection = collection(db, "orders");

function Brief() {
  const [orderId, setOrderId] = useState(null);
  const [isApellidoFocused, setIsApellidoFocused] = useState(false);
  const [isNombreFocused, setIsNombreFocused] = useState(false);
  const [isMailFocused, setIsMailFocused] = useState(false);

  const {
    total,
    cart,
    isFormComplete,
    setNombre,
    setApellido,
    apellido,
    nombre,
    mail,
    setMail,
  } = useContext(dataContext);

  const order = {
    cliente: {
      nombre: nombre,
      apellido: apellido,
      mail: mail,
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

    if (!mail.includes("@")) {
      alert("Por favor, ingrese un correo electrónico válido");
      return;
    }

    const docRef = await addDoc(ordersCollection, order);
    console.log("orden añadida con ID:", docRef.id);
    setOrderId(docRef.id);
  };

  if (cart.length > 0) {
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
              onFocus={() => setIsNombreFocused(true)}
              onBlur={() => setIsNombreFocused(false)}
            />
            {!nombre && !isNombreFocused && (
              <span className={styles.error}>
                * Por favor, complete este campo. *
              </span>
            )}
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              onFocus={() => setIsApellidoFocused(true)}
              onBlur={() => setIsApellidoFocused(false)}
            />
            {!apellido && !isApellidoFocused && (
              <span className={styles.error}>
                * Por favor, complete este campo. *
              </span>
            )}
            <input
              type="email"
              name="mail"
              placeholder="E-mail"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              onFocus={() => setIsMailFocused(true)}
              onBlur={() => setIsMailFocused(false)}
            />
            {!mail && !isMailFocused && (
              <span className={styles.error}>
                * Por favor, complete este campo. *
              </span>
            )}
          </form>
          <button
            className={styles.btn}
            onClick={handleSubmit}
            disabled={!isFormComplete()}
          >
            Confirmar
          </button>
        </div>
        <div className={styles.separator}></div>
        <OrdenDeCompra total={total} />
      </div>
    );
  }
}

export default Brief;
