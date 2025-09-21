import ItemDetail from "../ItemDetail";
import styles from "./itemDetailContainer.module.css";

const ItemDetailContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
