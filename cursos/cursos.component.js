'use strict';

angular.
module('cursos').
component('cursos', {
  templateUrl: 'cursos/cursos.template.html',
  controllerAs: "vm",
  controller: ['firebase',
    function cursosController(firebase) {
      var vm = this;
      
      vm.hola="Este";
      
      vm.texto = [];
      
      function getUsers(){
        return new Promise(function(resolve, reject) {
          firebase.database().ref("usuarios").once('value', function(snapshot){
            if(!snapshot.val()) {
              return reject("There is nothing to retrieve.");
            }
            resolve(snapshot.val());
          });
        });
      }
      
      vm.signIn = function(email, pass) {
        console.log("email: " + email + "\npass: " + pass);
    
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
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
      
      vm.signIn('saulverderon@hotmail.com','111111');
      
      getUsers().then(function(usersList) {
        for(var value in usersList){
          vm.texto.push(value);
        }
      }).catch(function(error){
        console.log(error.message);
      });
      
    }
  ]
});