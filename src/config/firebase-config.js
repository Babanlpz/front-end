import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_nw3NNgvvmrAk4f17Zmzc1PakPR2r6hU",
  authDomain: "codersbaban.firebaseapp.com",
  projectId: "codersbaban",
  storageBucket: "codersbaban.appspot.com",
  messagingSenderId: "224559790972",
  appId: "1:224559790972:web:49579b3644a30d5b0842f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
