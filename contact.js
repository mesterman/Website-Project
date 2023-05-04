const firebaseConfig = {
  apiKey: "AIzaSyCQTB-Psbk9laI8zq2hqsDBCXMr0QLS7PE",
  authDomain: "contact-us-a61cc.firebaseapp.com",
  projectId: "contact-us-a61cc",
  databaseURL: "https://contact-us-a61cc-default-rtdb.firebaseio.com/",
  storageBucket: "contact-us-a61cc.appspot.com",
  messagingSenderId: "521106899444",
  appId: "1:521106899444:web:74eab38081b4e03cec79a1"
};

firebase.initializeApp(firebaseConfig);
const detailsRef = firebase.database().ref('userdetails');

function send(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;


  detailsRef.push().set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message,
  });

}