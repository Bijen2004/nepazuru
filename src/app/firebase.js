import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmDEfubv_zYA6aUHyalK8AhNswcmUBXOg",
  authDomain: "nepazuru.firebaseapp.com",
  projectId: "nepazuru",
  storageBucket: "nepazuru.firebasestorage.app",
  messagingSenderId: "324579665982",
  appId: "1:324579665982:web:5904a3f9c96f75f5f9896f",
  measurementId: "G-FJ4SCS6Z3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported){
            getAnalytics(app);
        }
    })
}


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;