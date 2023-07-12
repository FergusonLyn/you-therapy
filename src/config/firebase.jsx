
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABJB9lbWRxQy-PoJ48v6fLk-hHiqLs-Ic",
  authDomain: "first-project-therapy.firebaseapp.com",
  projectId: "first-project-therapy",
  storageBucket: "first-project-therapy.appspot.com",
  messagingSenderId: "622066486749",
  appId: "1:622066486749:web:13e0a8a4cbbbaad241ba34",
  measurementId: "G-WNKNJV0YRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app) ;