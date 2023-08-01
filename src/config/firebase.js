import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOMhy2t63b--NhLmkpZ3g1eqa7MfsGGC0",
  authDomain: "my-therapy-9e302.firebaseapp.com",
  projectId: "my-therapy-9e302",
  storageBucket: "my-therapy-9e302.appspot.com",
  messagingSenderId: "514029987539",
  appId: "1:514029987539:web:6cd0ee822a3f1570d01626",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage();
