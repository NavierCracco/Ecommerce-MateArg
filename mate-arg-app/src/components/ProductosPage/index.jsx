import ItemListContainer from "../ItemListContainer";
import CartList from "../CartList";
import Titulo from "../Titulo";
import styles from "./productosPage.module.css";

function ProductosPage() {
  return (
    <>
      <Titulo titulo={"Productos"} />
      <main className={styles.main}>
        <ItemListContainer />
        <CartList />
      </main>
    </>
  );
}

export default ProductosPage;
