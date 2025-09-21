import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import CartWidget from "../CartWidget";
import MenuDropDown from "../MenuDropDown";
import styles from "./navbar.module.css";

const Navbar = () => {
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutSide = (e) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);

  return (
    <aside className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-d9504.appspot.com/o/imagenes%2Flogo-matearg-white.png?alt=media&token=5629d0f6-5608-48f6-ae9a-6d5973c5c945"
            alt="logo"
          />
        </NavLink>
        <NavLink className={styles.logoTitulo} to="/">
          <span>MateArg</span>
        </NavLink>
      </div>
      <button className={styles.openMenu} onClick={handleClick}>
        <RiMenuFill />
      </button>
      <nav
        ref={menuRef}
        className={` ${styles.navbar} ${
          isOpen === false ? styles.menuOpen : ""
        }`}
      >
        <button className={styles.closeMenu} onClick={handleClick}>
          <MdOutlineClose />
        </button>
        <div className={styles.sections}>
          <NavLink className={styles.btn} to="/">
            Inicio
          </NavLink>
          <MenuDropDown />
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
    </aside>
  );
};

export default Navbar;
