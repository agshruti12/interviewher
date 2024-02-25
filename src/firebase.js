import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtSdX1gla07DBkjFEHXqL32VvZRgLsuvQ",
  authDomain: "interviewher-e3a56.firebaseapp.com",
  projectId: "interviewher-e3a56",
  storageBucket: "interviewher-e3a56.appspot.com",
  messagingSenderId: "357821359521",
  appId: "1:357821359521:web:e55a4cc48b6846200cd7e0",
  measurementId: "G-5KVYJQD5GL",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);