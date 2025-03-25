
import { initializeApp , getApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiYeMW6d535Cuy_w1EpF5-_3u5M5scDRI",
  authDomain: "prepwise-fc287.firebaseapp.com",
  projectId: "prepwise-fc287",
  storageBucket: "prepwise-fc287.firebasestorage.app",
  messagingSenderId: "300475924646",
  appId: "1:300475924646:web:b00056256841932601f467",
  measurementId: "G-XCVYSD759R"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
