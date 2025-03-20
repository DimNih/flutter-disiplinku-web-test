importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBQ3F35CLewhmHm4_YfHQXkjvMaDQpWd14",
    authDomain: "disiplinku-28df5.firebaseapp.com",
    databaseURL: "https://disiplinku-28df5-default-rtdb.firebaseio.com",
    projectId: "disiplinku-28df5",
    storageBucket: "disiplinku-28df5.firebasestorage.app",
    messagingSenderId: "201120959976",
    appId: "1:201120959976:web:1285ae49453dc44c67e85d",
    measurementId: "G-BLTT9V0CSN"
});

const messaging = firebase.messaging();
