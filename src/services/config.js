import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sweet-child-base.firebaseapp.com",
  projectId: "sweet-child-base",
  storageBucket: "sweet-child-base.appspot.com",
  messagingSenderId: "819272676785",
  appId: "1:819272676785:web:b2022e838e220872dbb990"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
