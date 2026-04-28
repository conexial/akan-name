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