// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvVGbK3WtKz9qqQaJO2lm4DVgo6FriXS8",
  authDomain: "netflix-clone-react-deaef.firebaseapp.com",
  projectId: "netflix-clone-react-deaef",
  storageBucket: "netflix-clone-react-deaef.appspot.com",
  messagingSenderId: "1041517576742",
  appId: "1:1041517576742:web:324a28f99a81ab15655ce7",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
