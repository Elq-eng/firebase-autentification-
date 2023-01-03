// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// Your web app's Firebase configuration
const firebaseConfig = { 
apiKey : "AIzaSyDZniXBSySoRkzS-g18t-wbSVa_2OUjO2k",
  authDomain: "fir-app-97752.firebaseapp.com",
  projectId: "fir-app-97752",
  storageBucket: "fir-app-97752.appspot.com",
  messagingSenderId: "1048875173704",
  appId: "1:1048875173704:web:9d3761f8dc86ac473b157d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)