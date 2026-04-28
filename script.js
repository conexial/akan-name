// Akan names stored in arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the form
const form = document.getElementById("akanForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  // Validate input
  if (isNaN(day) || day < 1 || day > 31) {
    alert("Please enter a valid day between 1 and 31.");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return;
  }

  if (isNaN(year) || year < 1000) {
    alert("Please enter a valid year.");
    return;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return;
  }

  // Extra validation for real calendar dates
  const birthDate = new Date(year, month - 1, day);

  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    alert("Please enter a real calendar date.");
    return;
  }

  // Calculate day of week
  const dayIndex = birthDate.getDay();

  let akanName;

  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else {
    akanName = femaleNames[dayIndex];
  }

  result.innerHTML = `
    You were born on a ${daysOfWeek[dayIndex]}.<br>
    Your Akan name is ${akanName}.
  `;
});