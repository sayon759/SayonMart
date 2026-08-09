import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyADeZCx2WUbDOg1QiIXWpbe9hccPWXuMCA",
  authDomain: "sayonmart-90156.firebaseapp.com",
  projectId: "sayonmart-90156",
  storageBucket: "sayonmart-90156.firebasestorage.app",
  messagingSenderId: "207742677482",
  appId: "1:207742677482:web:42d6302521e3f1895cc293",
  measurementId: "G-GD5BHTE8RN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
