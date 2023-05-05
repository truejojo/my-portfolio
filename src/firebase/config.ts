import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMPcvo8EZsdoasDLNpdVLlOcGEUB3HX58",
  authDomain: "my-portfolio-a4c0b.firebaseapp.com",
  projectId: "my-portfolio-a4c0b",
  storageBucket: "my-portfolio-a4c0b.appspot.com",
  messagingSenderId: "4848638133",
  appId: "1:4848638133:web:c29666dbf87088ea96c6fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
