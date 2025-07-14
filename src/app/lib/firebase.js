import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2iGvBc6nce-Qd7Zowug6Gp4mtE_SJGNM",
  authDomain: "rentu-dc88b.firebaseapp.com",
  projectId: "rentu-dc88b",
  storageBucket: "rentu-dc88b.firebasestorage.app",
  messagingSenderId: "253920214336",
  appId: "1:253920214336:web:8d4a85095cbf3d5698cea5",
  measurementId: "G-7GV4J18E01"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };