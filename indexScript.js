
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2L_i9Qb9oNmi4Ksb2zpSxbSNqnTPMqVM",
    authDomain: "ehr-base.firebaseapp.com",
    projectId: "ehr-base",
    storageBucket: "ehr-base.appspot.com",
    messagingSenderId: "1011131662633",
    appId: "1:1011131662633:web:14833e1b06784c48417738",
    measurementId: "G-SEQ8ZNX56V"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

import{
  getFirestore, doc, getDoc,setDoc, collection, addDoc,updateDoc,deleteDoc, deleteField
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();


  async function AddDocument_CustomId(){
    var ref = doc(db, ptLName.value,ptFName.value); 
    // Change statename to patient last name and Cityname to PatientFirstName so that the doc saves it under the first name
    await setDoc(
      ref, {
        Height: hgt.value,
        DOB: dob.value,
        Weight: wgt.value,
        SS: ssNum.value,
        BMI: parseFloat(((wgt.value/(hgt.value**2))*703).toFixed(2)),
        Gender: gen.value,
        Id : Math.floor(Math.random() * 100)
      }
    ).then(()=>{
      alert("Data successfully added");
    }).catch((error)=>{
      alert("Operation failed with error"+ error);
    });
  }

async function GetCollection(){
  var ref = collection(db,)
}

  async function GetaDocument(){
    var ref = doc(db, ptLName.value, ptFName.value);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()){
      hgt.value = docSnap.data().Height;
      wgt.value = docSnap.data().Weight;
      dob.value = docSnap.data().DOB;
      ssNum.value = docSnap.data().SS;
      bmi.value = docSnap.data().BMI;
      gen.value = docSnap.data().Gender;
      idNum.value = docSnap.data().Id;
    }else{
      alert("no such document exists");
    }
  }
  /*  doc(db,ptLName.value, ptFName.value);
    const docSnap = await getDoc(ref);
    if(docSnap.exists()){
      country.value = docSnap.data().Country;
      hemisphere.value = docSnap.data().Hemisphere;
      stateName.value = docSnap.data().StateName;
    }
    */

  async function UpdateFieldsinDoc(){
    var ref = doc(db,"Arkansas",cityName.value);

    await updateDoc(
      ref, {
        Hemisphere: hemisphere.value,
        StateName: stateName.value,
        Country: country.value
      }
    ).then(()=>{
      alert("Data successfully updated");
    }).catch((error)=>{
      alert("Operation failed with error"+ error);
    });
  }

  async function DeleteDocument(){
    var ref = doc(db,ptLName, ptFName);
    const docSnap = await getDoc(ref);
    if(!docSnap.exists()){
      alert("no such document exists");
      return;
    }
    await deleteDoc(ref).then(()=>{
      alert("Document successfully deleted");
    }).catch((error)=>{
      alert("Operation failed with error"+ error);
    })
  }

  inBtn.addEventListener("click", AddDocument_CustomId);
  seBtn.addEventListener("click", GetaDocument);
  upBtn.addEventListener("click", UpdateFieldsinDoc);
  deBtn.addEventListener("click", DeleteDocument);


  
