import styles from "./titulo.module.css";

function Titulo({ titulo }) {
  return (
    <div className={styles.container}>
      <h2>{titulo}</h2>
    </div>
  );
}

export default Titulo;
