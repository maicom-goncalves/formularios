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


var app = new Vue({
  // element to mount to
  el: "#app",
  // initial data
  data: {
    newUser: {
      nameId: "",
      lastnameId: ""
      
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
        nameId: !!this.newUser.nameId.trim(),
        lastnameId: !!this.newUser.lastnameId.trim()
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
      console.log(nameId,lastnameId);
      if (this.isValid) {
        /*usersRef.set({
            nome:nameId,
            sobrenome:lastnameId
        }).then(function(){
            console.log("Status saved");
            console.log(users);
        }).catch(function(error){
            console.log("Got an error:",error);
        });*/
        usersRef.set(this.newUser);
          this.newUser.nameId = "";
          this.newUser.lastnameId = "";
      }
    },
    removeUser: function(user) {
      usersRef.child(user[".key"]).remove();
    }
  }
});
