import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firbaseConfig = {
    apiKey: "AIzaSyAzy_CKDaDh6YxdXWjYVdq4l5lKtw9NXTI",
    authDomain: "moviedatabase-2e06e.firebaseapp.com",
    projectId: "moviedatabase-2e06e",
    storageBucket: "moviedatabase-2e06e.appspot.com",
    messagingSenderId: "644402468678",
    appId: "1:644402468678:web:a3712606187d91cbfe3747",
    measurementId: "G-N2P9TQEY6R"
};
    
const app = initializeApp(firbaseConfig);
 const auth = getAuth(app);
const db = getFirestore(app);
 export {auth, db};

//  const firbaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };