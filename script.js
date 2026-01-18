  Js
  function analyzeCrime() {
  const text = document.getElementById("crimeText").value;
  if (text === "") {
    alert("Enter crime details");
    return;
  }

  const crimeTypes = ["Theft", "Harassment", "Cyber Crime","Murder","Robbery","fraud","burglary","Vandalism"];
  const detectedCrime =
    crimeTypes[Math.floor(Math.random() * crimeTypes.length)];

  document.getElementById("result").innerText =
    "Detected Crime: " + detectedCrime;

  // 🔥 GOOGLE FIREBASE USED HERE
  db.collection("crimeReports").add({
    description: text,
    crimeType: detectedCrime,
    time: new Date()
  });
}
