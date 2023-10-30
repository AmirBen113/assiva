import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { environment } from 'src/environments/environment.prod';


//const firebaseConfig = JSON.parse(atob(environment.firebaseConfig));

const firebaseConfig = {
  apiKey: "AIzaSyDLKUwpVpID0fDO8Y4AA4DclEPJqnqUV5I",
  authDomain: "test-79482.firebaseapp.com",
  projectId: "test-79482",
  storageBucket: "test-79482.appspot.com",
  messagingSenderId: "610751330064",
  appId: "1:610751330064:web:e6b81f6573878456f11795",
  measurementId: "G-HW5CJWS803"
};

initializeApp(firebaseConfig);

const auth = getAuth();

signInWithEmailAndPassword(auth, environment.authEmail, environment.authPass);

export const db = getFirestore();
export const realtimeDB = ref(getDatabase());
