import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NUXT_PRIVATE_FIREBASE_API_KEY,
  authDomain: process.env.NUXT_PRIVATE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NUXT_PRIVATE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_PRIVATE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_PRIVATE_FIREBASE_APP_ID,
  measurementId:process.env.NUXT_PRIVATE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);