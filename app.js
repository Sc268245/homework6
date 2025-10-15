console.log("JavaScript connected successfully!");

// Variables
const name = "Samuel Caraballo";
let hasDownloadedResume = false;

// Show greeting based on time
function timeBasedGreeting() {
  const hours = new Date().getHours();
  if (hours < 12) return "Good Morning, " + name + "!";
  else if (hours < 18) return "Good Afternoon, " + name + "!";
  else return "Good Evening, " + name + "!";
}

// Show greeting when page loads
document.addEventListener("DOMContentLoaded", function () {
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = timeBasedGreeting();
  }
});

// Resume download alert
const downloadBtn = document.getElementById("downloadResume");
if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    if (!hasDownloadedResume) {
      hasDownloadedResume = true;
      setTimeout(() => {
        alert("Your resume is downloaded successfully!");
      }, 2000); // 2 second delay
    } else {
      console.log("Resume already downloaded once.");
    }
  });
}

// Calculate days until project deadline
function daysUntilDeadline(deadline) {
  const today = new Date();
  const targetDate = new Date(deadline);
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

const daysLeft = daysUntilDeadline("2025-12-01");
console.log("Days left until project deadline:", daysLeft);

const deadlineInfo = document.getElementById("deadlineInfo");
if (deadlineInfo) {
  deadlineInfo.textContent = `Days remaining until FortresWars update deadline: ${daysLeft} days.`;
}
