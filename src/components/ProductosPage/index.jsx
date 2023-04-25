import React from "react";
import ItemListContainer from "../ItemListContainer";
import Titulo from "../Titulo";
import styles from "./productosPage.module.css";

function ProductosPage() {
  return (
    <>
      <Titulo titulo={"Productos"} />
      <div className={styles.main}>
        <ItemListContainer />
      </div>
    </>
  );
}

export default ProductosPage;
