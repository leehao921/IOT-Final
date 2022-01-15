const firebaseConfig = {
  apiKey: "AIzaSyCPbX5vauQIP_VvOtFIQbMm5snlm66JHqs",
  authDomain: "iot-final-b320d.firebaseapp.com",
  databaseURL: "https://iot-final-b320d-default-rtdb.firebaseio.com",
  projectId: "iot-final-b320d",
  storageBucket: "iot-final-b320d.appspot.com",
  messagingSenderId: "149338057740",
  appId: "1:149338057740:web:f58e3a9c6bb27e60771229",
  measurementId: "G-20EDHENVLH"
  }
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  var db = firebase.firestore();

  db.collection('accleration').onSnapshot((snapshot) => {

    console.log("read data")
    snapshot.forEach((snap)=>{
      console.log(snap.data())
      
      
    })
}, (error) => {
    // ...
});


  