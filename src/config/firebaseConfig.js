
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket ,
  messagingSenderId: process.env.MessageId,
  appId: process.env.AppId
};
export default firebaseConfig;