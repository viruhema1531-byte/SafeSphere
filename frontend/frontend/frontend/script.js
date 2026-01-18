Js
function analyzeCrime() {
  const text = document.getElementById("crimeText").value;

  if (text === "") {
    alert("Please enter crime details");
    return;
  }

  const crimeTypes = [
    "Theft",
    "Harassment",
    "Cyber Crime",
    "Vandalism",
    "Assault"
  ];

  const detectedCrime =
    crimeTypes[Math.floor(Math.random() * crimeTypes.length)];

  document.getElementById("result").innerText =
    "AI Detected Crime Type: " + detectedCrime;
}
