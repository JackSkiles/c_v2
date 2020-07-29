import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqtUNS0aJz0VlIwO-YFJgrXKpuQ7Atf5g",
    authDomain: "church-284323.firebaseapp.com",
    databaseURL: "https://church-284323.firebaseio.com",
    projectId: "church-284323",
    storageBucket: "church-284323.appspot.com",
    messagingSenderId: "71735884463",
    appId: "1:71735884463:web:4b73e94d7d6692f431325a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
  export{
    storage, firebase as default
  }