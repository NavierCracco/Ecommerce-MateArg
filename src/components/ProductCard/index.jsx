import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import styles from "./productCard.module.css";

const ProductCard = ({ producto }) => {
  const { sumarCarrito } = useContext(dataContext);

  return (
    <NavLink
      className={styles.card}
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
};

export default ProductCard;
