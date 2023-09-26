
//makes a fake document so i can see what's going on
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});



await addDoc(
    docref, {
      Dosage: dsg1.value,
      Frequency: frq1.value,
      Start_Date: sdate.value
    })