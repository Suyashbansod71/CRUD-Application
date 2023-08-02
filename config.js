const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyAytJ320oKw1bpBsAVvUksXt5rqFkRUpSE",
    authDomain: "fir-crud-api-6887e.firebaseapp.com",
    projectId: "fir-crud-api-6887e",
    storageBucket: "fir-crud-api-6887e.appspot.com",
    messagingSenderId: "1012329576751",
    appId: "1:1012329576751:web:b852c38c622d0de6cac9da",
    measurementId: "G-99GNDPWG96"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const User = db.collection("Users");
  module.exports = User;