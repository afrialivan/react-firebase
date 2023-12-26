import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKMDgplqI1WcMSMVE_qi_bWtnlCtaSCd8",
  authDomain: "react-latihan-firebase.firebaseapp.com",
  projectId: "react-latihan-firebase",
  storageBucket: "react-latihan-firebase.appspot.com",
  messagingSenderId: "986832967217",
  appId: "1:986832967217:web:dd0fa7423e1c98b997a710",
  measurementId: "G-YE4YEG0MHX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)
