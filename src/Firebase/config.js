import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyAxF3rkQIPrAGxZ491TBMK8I2_xViT-Yng",
  
    authDomain: "cocinando-288b6.firebaseapp.com",
  
    projectId: "cocinando-288b6",
  
    storageBucket: "cocinando-288b6.appspot.com",
  
    messagingSenderId: "776567841297",
  
    appId: "1:776567841297:web:f3a84fef9eaacaa39447b0"
  
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  