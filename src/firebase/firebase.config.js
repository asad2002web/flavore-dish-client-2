// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALBhK4HNRAXmCV69lZCAaCpX85d-eGYaU",
  authDomain: "flavore-dish-auth.firebaseapp.com",
  projectId: "flavore-dish-auth",
  storageBucket: "flavore-dish-auth.appspot.com",
  messagingSenderId: "929629125988",
  appId: "1:929629125988:web:bd0717a2b3a08d77e58e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;