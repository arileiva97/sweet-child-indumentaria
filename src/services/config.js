import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sweet-child-28210.firebaseapp.com",
  projectId: "sweet-child-28210",
  storageBucket: "sweet-child-28210.appspot.com",
  messagingSenderId: "195175109578",
  appId: "1:195175109578:web:f5c8bb7887633b73a77533"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
