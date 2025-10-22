window.onload = function () {
  // Attach event listeners
  document.getElementById("add-skill-btn").addEventListener("click", addSkill);
  document.getElementById("download-btn").addEventListener("click", downloadResume);
  document.getElementById("toggle-theme-btn").addEventListener("click", toggleTheme);
  document.getElementById("bgColorPicker").addEventListener("input", changeBackground);
  document.getElementById("fontSizeInput").addEventListener("input", changeFontSize);

  displayProjects();
  createEducationTable();
};

// Step 1: Add Skill
function addSkill() {
  const skillInput = document.getElementById("skill-input");
  const skill = skillInput.value.trim();
  if (skill !== "") {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("skills-list").appendChild(li);
    skillInput.value = "";
  } else {
    alert("Please enter a skill!");
  }
}

// Step 2: Projects (with local images)
const projects = [
  {
    title: "Fortress Wars",
    description: "A Minecraft PvP plugin with arena logic, team-based combat, and a custom spawn system.",
    image: "FWkit.png",
    deadline: new Date("2025-12-01"),
  },
  {
    title: "Fortress Wars Map Design",
    description: "Created detailed map layouts and spawn areas using custom builds for balanced gameplay.",
    image: "FWmap1.png",
    deadline: new Date("2025-11-15"),
  },
  {
    title: "Fortress Wars Spawn Area",
    description: "Developed a central spawn hub with interactive NPCs and teleport pads using Java code.",
    image: "FWspawn.png",
    deadline: new Date("2024-12-15"),
  },
];

function displayProjects() {
  const projectList = document.getElementById("project-list");
  const today = new Date();
  projectList.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const deadline = document.createElement("p");
    deadline.textContent = "Deadline: " + project.deadline.toDateString();

    const status = document.createElement("p");
    if (project.deadline > today) {
      status.textContent = "Status: Ongoing";
      status.style.color = "green";
    } else {
      status.textContent = "Status: Completed";
      status.style.color = "gray";
    }

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(deadline);
    card.appendChild(status);
    projectList.appendChild(card);
  });
}

// Step 4: Resume Download Tracker
let downloadCount = 0;
function downloadResume() {
  downloadCount++;
  document.getElementById("download-count").textContent =
    `Resume downloaded ${downloadCount} time${downloadCount > 1 ? "s" : ""}.`;
}

// Step 5: Education Table
const education = [
  { degree: "B.S. in Computer Science", school: "Northern Arizona University", start: "2024", end: "2028" },
  { degree: "High School Diploma", school: "Chandler High School", start: "2020", end: "2024" },
];

function createEducationTable() {
  const container = document.getElementById("education-table");
  const table = document.createElement("table");

  const headers = ["Degree", "School", "Start", "End"];
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  education.forEach((item) => {
    const row = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

// Bonus: Theme Controls
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function changeBackground() {
  const color = document.getElementById("bgColorPicker").value;
  document.body.style.backgroundColor = color;
}

function changeFontSize() {
  const size = document.getElementById("fontSizeInput").value;
  if (size) document.body.style.fontSize = size + "px";
}
