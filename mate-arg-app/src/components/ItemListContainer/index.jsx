import { useContext, useState } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Pagination } from "@mui/material";
import { animateScroll } from "react-scroll";
import ProductCard from "../ProductCard";
import styles from "./itemListContainer.module.css";

const ItemListContainer = (producto) => {
  const { productos } = useContext(dataContext);
  const [page, setPage] = useState(1);
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
          return <ProductCard producto={producto} key={producto.id} />;
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
