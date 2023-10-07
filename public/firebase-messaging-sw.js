
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);


const firebaseConfig = {
    apiKey: "AIzaSyCRQNh-EJAmBAZirm3GSuT2j-EAFXtc_54",
    authDomain: "broadcast-77911.firebaseapp.com",
    projectId: "broadcast-77911",
    storageBucket: "broadcast-77911.appspot.com",
    messagingSenderId: "1020105949068",
    appId: "1:1020105949068:web:a6e49a4397d9fb729420a9",
    measurementId: "G-DGFDE3MLPG"
};
    // eslint-disable-next-line
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };



  self.registration.showNotification(notificationTitle, notificationOptions);

});
/* eslint-enable */