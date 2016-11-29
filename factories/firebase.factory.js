angular.
  module('mainApp').
  factory("firebase", function() {
    var config = {
      apiKey: "AIzaSyBL-8hFlmPSsMPBe4En3XxOC0cPiexwYoQ",
      authDomain: "classgement.firebaseapp.com",
      databaseURL: "https://classgement.firebaseio.com",
      storageBucket: "classgement.appspot.com",
      messagingSenderId: "569719292852"
    };
  
    firebase.initializeApp(config);
  
    return firebase;
});