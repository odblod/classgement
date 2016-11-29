'use strict';

angular.
module('registro').
component('registro', {
  templateUrl: 'registro/registro.template.html',
  controllerAs: "vm",
  controller: ['firebase',
    function registroController(firebase) {
      var vm = this;
      
      vm.entrar = function() {
        console.log("email: " + vm.email + "\npass: " + vm.pass);
  
        firebase.auth().signInWithEmailAndPassword(vm.email, vm.pass).catch(function(error) {
          console.log(error.message);
          console.log(error.code);
        });
        var user = firebase.auth();
    
        if (user) {
          console.log("UID: " + user.uid);
        } else {
          console.log("Usuario no registrado");
        }
      };
      
      vm.registrar = function() {
        console.log("email: " + vm.email + "\npass: " + vm.pass);
  
        firebase.auth().createUserWithEmailAndPassword(vm.email, vm.pass).catch(function(error) {
          console.log(error.message);
          console.log(error.code);
        });
        
        vm.entrar()
      };
    }
  ]
});