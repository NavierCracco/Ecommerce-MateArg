import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../../contexts/dataContext";
import styles from "./itemListContainer.module.css";

const ItemListContainer = () => {
  const { productos } = useContext(dataContext);
  const { sumarCarrito } = useContext(dataContext);

  return (
    <div className={styles.container}>
      {productos.map((producto) => {
        return (
          <NavLink
            className={styles.card}
            key={producto.id}
            to={`/productos/${producto.categoria.id}/${producto.id}`}
          >
            <img src={producto.imagen} alt={producto.titulo} />
            <div className={styles.productoInfo}>
              <h3>{producto.titulo}</h3>
              <p className={styles.price}>$ {producto.precio}</p>
              <NavLink
                onClick={() => sumarCarrito(producto)}
                to=""
                className={styles.btnCard}
              >
                Agregar al Carrito
              </NavLink>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
