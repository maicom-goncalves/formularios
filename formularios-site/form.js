var config={
	 apiKey: "AIzaSyCLVtq2sOSkZNNrXGzluMkCDJCUvpJS2b8",
    authDomain: "delivery-muito.firebaseapp.com",
    projectId: "delivery-muito",
    storageBucket: "delivery-muito.appspot.com",
    messagingSenderId: "745164617711",
    appId: "1:745164617711:web:f67b5c512f482982dea81a",
    measurementId: "G-TKR1RPT8Q7"
}

firebase.initializeApp(config);
var firestore = firebase.firestore();
/*constantes do formulario */
const docRef=firestore.doc("formularios/pacientes");
const inputTextField1 = document.querySelector("#nome");
const inputTextField2 = document.querySelector("#sobrenome");
const outputHeader = document.querySelector("#NameOutput");

const loadButton = document.querySelector("#loadButton");
const saveButton = document.querySelector("#submit");
console.log(saveButton);

saveButton.addEventListener("click",function(){
    const textToSave = inputTextField1.value;
    const textToSave2 = inputTextField2.value;
    
    docRef.set({
        nameStatus: textToSave,
        sobrenomeS: textToSave2
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error:",error);
    });

    
});

loadButton.addEventListener("click",function(){
        docRef.get().then(function(doc){
            if(doc && doc.exists){
                const myData = doc.data();
                outputHeader.innerText ="nome__:" + myData.nameStatus+ "__sobrenome__:" +myData.sobrenomeS;
            }
        }).catch(function(error){
            console.log("Got an error:", error);
        });
    });