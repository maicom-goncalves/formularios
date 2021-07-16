// Setup Firebase
var config = {
  apiKey: "AIzaSyCLVtq2sOSkZNNrXGzluMkCDJCUvpJS2b8",
   authDomain: "delivery-muito.firebaseapp.com",
   projectId: "delivery-muito",
   storageBucket: "delivery-muito.appspot.com",
   messagingSenderId: "745164617711",
   appId: "1:745164617711:web:f67b5c512f482982dea81a",
   measurementId: "G-TKR1RPT8Q7"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

var usersRef = firestore.doc("formularios/pacientes");

console.log(usersRef);
// create Vue app
var app = new Vue({
  // element to mount to
  el: "#app",
  // initial data
  data: {
    newUser: {
      name: "",
      lastname: ""
      //console.log(name,lastname);
    }
  },
  // firebase binding
  // https://github.com/vuejs/vuefire
  firebase: {
    users: usersRef,

  },
  // computed property for form validation state
  computed: {
    validation: function() {
      return {
        name: !!this.newUser.name.trim(),
        lastname: !!this.newUser.lastname.trim()
      };
    },
    isValid: function() {
      var validation = this.validation;
      return Object.keys(validation).every(function(key) {
        return validation[key];
      });
    }
  },
  // methods
  methods: {
    addUser: function() {
    
      if (this.isValid) {
        docRef.set({
            nome:name,
            sobrenome:lastname
        }).then(function(){
            console.log("Status saved");
            console.log(users);
        }).catch(function(error){
            console.log("Got an error:",error);
        });
        /*usersRef.push(this.newUser);
        this.newUser.name = "";
        this.newUser.lastname = "";*/
      }
    },
    removeUser: function(user) {
      usersRef.child(user[".key"]).remove();
    }
  }
});
