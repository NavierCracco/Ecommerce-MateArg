import CartWidget from "../CartWidget";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-d9504.appspot.com/o/imagenes%2Flogo-matearg-white.png?alt=media&token=5629d0f6-5608-48f6-ae9a-6d5973c5c945"
            alt="logo"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-d9504.appspot.com/o/imagenes%2Flogo-matearg-white.png?alt=media&token=5629d0f6-5608-48f6-ae9a-6d5973c5c945"
            alt="logo"
          />
        </NavLink>
        <NavLink className={styles.logoTitulo} to="/">
          <p>MateArg</p>
        </NavLink>
      </div>
      <div className={styles.sections}>
        <NavLink className={styles.btn} to="/">
          Inicio
        </NavLink>
        <NavLink className={styles.btn} to="/productos">
          Productos <IoMdArrowDropdown className={styles.arrowDown} />
        </NavLink>
        <NavLink className={styles.btn} to="/curatumate">
          Curá tu Mate
        </NavLink>
        <NavLink className={styles.btn} to="/contacto">
          Contacto
        </NavLink>
      </div>
      <div className={styles.cart}>
        <NavLink to="/carrito">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
