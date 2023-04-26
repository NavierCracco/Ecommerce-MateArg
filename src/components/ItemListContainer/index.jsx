import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../../contexts/dataContext";
import { Pagination } from "@mui/material";
import { animateScroll } from "react-scroll";
import styles from "./itemListContainer.module.css";

const ItemListContainer = () => {
  const [page, setPage] = useState(1);
  const { productos } = useContext(dataContext);
  const { sumarCarrito } = useContext(dataContext);
  const startIndex = (page - 1) * 6;
  const paginationProducts = productos.slice(startIndex, startIndex + 6);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleClick = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {paginationProducts.map((producto) => {
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
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(productos.length / 6)}
          page={page}
          onChange={handleChangePage}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
