// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTCDxIGB-IbfNLMwmx3gQg_oBNCBsyR0M",
  authDomain: "todo-app-firebse-ff451.firebaseapp.com",
  projectId: "todo-app-firebse-ff451",
  storageBucket: "todo-app-firebse-ff451.appspot.com",
  messagingSenderId: "545766528753",
  appId: "1:545766528753:web:2bc4ac7987b31c71e7bb50",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
