import CartList from "../CartList";
import ItemListContainer from "../ItemListContainer";
import styles from "./inicioPage.module.css";

function InicioPage() {
  return (
    <div>
      <div className={styles.tituloContainer}>
        <h1>MateArg</h1>
      </div>
      <div className={styles.main}>
        <ItemListContainer />
        <CartList />
      </div>
    </div>
  );
}

export default InicioPage;
