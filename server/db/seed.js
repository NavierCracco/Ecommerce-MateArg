import { addDoc, collection } from "firebase/firestore";
import db from "./firebase-config.js";
import productos from "./productos.js";

const productosCollectionRef = collection(db, "productos");

const promise = productos.map((producto) =>
  addDoc(productosCollectionRef, producto)
);

Promise.all(promise).then(() => {
  console.log("done");
  process.exit(0);
});
