import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import CartList from "../CartList";
import Titulo from "../Titulo";
import styles from "./categoryProducts.module.css";

const CategoryProducts = () => {
  const { productos } = useContext(dataContext);
  const { categoria } = useParams();

  const filteredProducts = productos.filter((producto) => {
    return producto.categoria.id === categoria;
  });

  console.log(filteredProducts);
  return (
    <div>
      <Titulo titulo={categoria} />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {filteredProducts.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
        <CartList />
      </main>
    </div>
  );
};

export default CategoryProducts;
