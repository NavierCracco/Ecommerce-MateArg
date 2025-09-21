import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import styles from "./itemDetail.module.css";

function ItemDetail() {
  const { productos, sumarCarrito } = useContext(dataContext);
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === id);

  return (
    <div className={styles.container}>
      <div className={styles.containerUp}>
        <h3 className={styles.tituloMobile}>{producto.titulo}</h3>
        <img
          className={styles.imagen}
          src={producto.imagen}
          alt={producto.titulo}
        />
      </div>
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
    </div>
  );
}

export default ItemDetail;
