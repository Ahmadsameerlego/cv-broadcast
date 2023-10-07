// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// import '../public/firebase-messaging-sw'

const firebaseConfig = {
    apiKey: "AIzaSyCRQNh-EJAmBAZirm3GSuT2j-EAFXtc_54",
    authDomain: "broadcast-77911.firebaseapp.com",
    projectId: "broadcast-77911",
    storageBucket: "broadcast-77911.appspot.com",
    messagingSenderId: "1020105949068",
    appId: "1:1020105949068:web:a6e49a4397d9fb729420a9",
    measurementId: "G-DGFDE3MLPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('../public/firebase-messaging-sw');
//   });
// }