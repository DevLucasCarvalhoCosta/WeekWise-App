import firebase from "firebase"
import "firebase/storage"


var firebaseConfig = {
  apiKey: "AIzaSyATpTAANO2eQW5pxfeQSCRuXpp94kR-vaA",
  authDomain: "weekwise-5f063.firebaseapp.com",
  projectId: "weekwise-5f063",
  storageBucket: "weekwise-5f063.appspot.com",
  messagingSenderId: "666102930441",
  appId: "1:666102930441:web:92998610ad97fb17082cd8",
  measurementId: "G-5LYWWQ63SL"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database
