// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-xqWkBoLlUXYN9-GKFMxfkgmW-eDLilM",
  authDomain: "coffee-store-a3218.firebaseapp.com",
  projectId: "coffee-store-a3218",
  storageBucket: "coffee-store-a3218.firebasestorage.app",
  messagingSenderId: "357013930351",
  appId: "1:357013930351:web:ff521d6a86b30f594da89a",
  // measurementId: "G-60TNLBGJYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;