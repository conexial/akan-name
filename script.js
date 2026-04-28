// Akan names stored in arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the form
const form = document.getElementById("akanForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting)
});

// Get input values
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
let gender = document.getElementById("gender").value;
  
// Validate input
if (day < 1 || day > 31) {
  alert("Enter valid day (1-31)");
  return;
}
if (month < 1 || month > 12) {
  alert("Enter valid month (1-12)");
  return;
}
 if (gender === "") {
    alert("Select gender");
    return;
 }
  