import React from "react";
import styles from "./itemDetail.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";

function ItemDetail() {
  const { productos } = useContext(dataContext);
  const { sumarCarrito } = useContext(dataContext);
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === id);

  return (
    <>
      <img src={producto.imagen} alt={producto.titulo} />
      <div className={styles.containerDetail}>
        <h3>{producto.titulo}</h3>
        <p className={styles.precio}>$ {producto.precio}</p>
        <button
          onClick={() => sumarCarrito(producto)}
          className={styles.btnCard}
        >
          Agregar al Carrito
        </button>
      </div>
    </>
  );
}

export default ItemDetail;
