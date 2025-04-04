// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://e-commerce-f20de-default-rtdb.firebaseio.com",
  projectId: "e-commerce-f20de",
  storageBucket: "e-commerce-f20de.appspot.com",
  messagingSenderId: "24198190250",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);