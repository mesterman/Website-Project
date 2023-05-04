const firebaseConfig = {
    apiKey: "AIzaSyAeDfJF-71kFeww_0fVMmsX4yrSJUgALMY",
    authDomain: "abous-us.firebaseapp.com",
    projectId: "abous-us",
    databaseURL: "https://abous-us-default-rtdb.firebaseio.com/",
    storageBucket: "abous-us.appspot.com",
    messagingSenderId: "552554549270",
    appId: "1:552554549270:web:240bb9f1c5dcfe5b5d2537"
  };
  
  firebase.initializeApp(firebaseConfig);
  const detailsRef = firebase.database().ref('userdetails');
  
  function send(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
  
    detailsRef.push().set({
      firstname: firstname,
      lastname: lastname,
      email: email,
    });

}