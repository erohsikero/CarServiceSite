import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDfBRH_qVkaLNQEFiuQn8RFnQ1b4tmfP40",
  authDomain: "carclinicdb.firebaseapp.com",
  projectId: "carclinicdb",
  storageBucket: "carclinicdb.appspot.com",
  messagingSenderId: "508389548641",
  appId: "1:508389548641:web:f142669b757527fc648020",
  measurementId: "G-VTGRGTWSQW"
};

const firebaseDbConfig = {
  databaseURL : "https://carclinicsite-default-rtdb.firebaseio.com/"
}

firebase.initializeApp(firebaseDbConfig);
var database = firebase.database();

export default database;