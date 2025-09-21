import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import db from "../../../server/db/firebase-config";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const productosRef = collection(db, "productos");
  const [cart, setCart] = useState([]);
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getProductos = async () => {
    const productosCollection = await getDocs(productosRef);
    const productos = productosCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(productos);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const sumarCarrito = (producto) => {
    const productoCantidad = cart.find((item) => item.id == producto.id);

    if (productoCantidad) {
      setCart(
        cart.map((item) =>
          item.id == producto.id
            ? { ...producto, cantidad: productoCantidad.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, producto]);
    }
  };

  const eliminarProducto = (id) => {
    const idEncontardo = cart.find((item) => item.id == id);

    const productoEliminado = cart.filter((item) => {
      return item !== idEncontardo;
    });
    setCart(productoEliminado);
  };
  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const vaciarCarrito = () => {
    setCart([]);
  };

  const isFormComplete = () => {
    return nombre !== "" && apellido !== "" && mail !== "";
  };

  return (
    <dataContext.Provider
      value={{
        productos,
        setProductos,
        cart,
        setCart,
        sumarCarrito,
        eliminarProducto,
        vaciarCarrito,
        total,
        isButtonDisabled,
        setIsButtonDisabled,
        isFormComplete,
        nombre,
        apellido,
        setApellido,
        setNombre,
        mail,
        setMail,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataProvider, dataContext };
