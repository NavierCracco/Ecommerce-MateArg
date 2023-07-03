import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { dataContext } from "../../contexts/dataContext";
import styles from "./menuDropDown.module.css";

const MenuDropDown = () => {
  const [active, setActive] = useState(false);
  const catMenu = useRef(null);
  const { productos } = useContext(dataContext);
  const [data, setData] = useState([]);

  const categorias = ["Mates", "Bombillas", "Termos"];

  const handleClick = () => {
    setActive(!active);
  };

  const handleOutsideClick = (e) => {
    if (catMenu.current && !catMenu.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    setData(productos);

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [productos]);

  const productosFilter = (categoryName) => {
    const filterProductos = productos.filter(
      (producto) =>
        producto.categoria.nombre === categoryName &&
        categorias.includes(categoryName)
    );

    return filterProductos;
  };

  const handleCategorySelect = (category) => {
    const filteredProductos = productosFilter(category);
    setData(filteredProductos);
  };

  const filteredData = data.filter((producto) =>
    categorias.includes(producto.categoria.nombre)
  );

  let open = active ? styles.openMenu : null;

  return (
    <div>
      <button
        className={styles.btn}
        onClick={handleClick}
        onMouseDown={(e) => e.stopPropagation()}
      >
        Productos <IoMdArrowDropdown className={styles.arrowDown} />
      </button>
      {active && (
        <div ref={catMenu} className={`${styles.subMenuContainer} ${open}`}>
          <div className={styles.subMenu}>
            {categorias.map((categoria) => (
              <NavLink
                key={categoria}
                to={`/productos/${categoria.toLowerCase()}`}
                onClick={() => handleCategorySelect(categoria)}
                className={styles.subMenuLink}
              >
                {categoria}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropDown;
