// Akan names stored in arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the form
const form = document.getElementById("akanForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

   // Get input values
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // Validate day
  if (day < 1 || day > 31) {
    alert("Enter valid day (1-31)");
    return;
  }

  // Validate month

  if (month < 1 || month > 12) {
    alert("Enter valid month (1-12)");
    return;
  }

  
  // Validate year
  if (year < 1000) {
    alert("Enter a valid year");
    return;
  }

  // Validate gender
  if (gender === "") {
    alert("Select gender");
    return;
  }

  //split year into century and year
  let cc = Math.floor(year / 100);
   let yy = year % 100;
   
//fomula to calculate day of week
let d = ((4 * cc) + Math.floor(cc / 4) + (5 * yy) + Math.floor(yy / 4) + Math.floor(26 * (month + 1) / 10) + day) % 7;
  
// Get Akan name based on gender
let akanName;
if (gender === "male") {
  akanName = maleNames[d];
} else {
  akanName = femaleNames[d];
}

 // Display result
  document.getElementById("nameOutput").textContent = '"' + akanName + '"';
  document.getElementById("genderOutput").textContent = '"' + gender + '"';
  document.getElementById("dayOutput").textContent = '"' + dayName + '"';
});