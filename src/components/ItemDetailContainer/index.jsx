import styles from "./itemDetailContainer.module.css";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  return (
    <div className={styles.container}>
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
