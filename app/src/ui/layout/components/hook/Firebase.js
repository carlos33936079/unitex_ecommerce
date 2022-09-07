import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmZyZrlkLkMZR1rwhdU5cunV7caQOD438",
  authDomain: "unitex-20a54.firebaseapp.com",
  projectId: "unitex-20a54",
  storageBucket: "unitex-20a54.appspot.com",
  messagingSenderId: "262406380032",
  appId: "1:262406380032:web:a1d29611f01f59bcda96e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 