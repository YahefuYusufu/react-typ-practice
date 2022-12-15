// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJmckQL7K0kZ_2W6XArprTzy-Ll0BfF3w",
  authDomain: "netflix-clone-c6565.firebaseapp.com",
  projectId: "netflix-clone-c6565",
  storageBucket: "netflix-clone-c6565.appspot.com",
  messagingSenderId: "1023312070636",
  appId: "1:1023312070636:web:6766850957852184bc22c9",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
