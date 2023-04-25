import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALrkzveYLS4ETpVORZVkuM5Rhb-ww9i9U",
  authDomain: "ecommerce-d9504.firebaseapp.com",
  projectId: "ecommerce-d9504",
  storageBucket: "ecommerce-d9504.appspot.com",
  messagingSenderId: "930111042378",
  appId: "1:930111042378:web:e145c815a9fc885b8607b3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
