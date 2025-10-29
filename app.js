$(document).ready(function () {

  let skills = ["Java", "HTML", "CSS"];

  const renderSkills = (list = skills) => {
    $("#skills-list").empty();
    list.forEach((skill, i) => {
      const li = $(`
        <li>
          <span>${skill}</span>
          <div>
            <button class="edit" data-index="${i}">Edit</button>
            <button class="delete" data-index="${i}">Delete</button>
          </div>
        </li>
      `);
      $("#skills-list").append(li.hide().fadeIn(300));
    });
  };

  const addSkill = (skill) => {
    skill = skill.trim();
    if (!skill) return alert("Please enter a skill!");
    if (skills.includes(skill)) return alert("Skill already exists!");
    skills.push(skill);
    renderSkills();
    $("#skill-input").val("");
  };

  $("#add-skill-btn").on("click", () => addSkill($("#skill-input").val()));

  $("#skills-list").on("click", ".edit", function () {
    const i = $(this).data("index");
    const newSkill = prompt("Edit skill:", skills[i]);
    if (newSkill && newSkill.trim()) {
      skills[i] = newSkill.trim();
      renderSkills();
    }
  });

  $("#skills-list").on("click", ".delete", function () {
    const i = $(this).data("index");
    $(this).closest("li").slideUp(300, () => {
      skills.splice(i, 1);
      renderSkills();
    });
  });

  $("#skill-input").on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill($(this).val());
    } else if (e.key === "Escape") {
      $(this).val("");
    }
  });

  $("#skillSearch").on("input", function () {
    const q = $(this).val().toLowerCase();
    const filtered = skills.filter((s) => s.toLowerCase().includes(q));
    renderSkills(filtered);
  });

  renderSkills();

  const projects = [
    {
      title: "Fortress Wars",
      description: "A Minecraft PvP plugin with arena logic and custom spawn system.",
      image: "FWkit.png",
      deadline: new Date("2025-12-01"),
    },
    {
      title: "Fortress Wars Map Design",
      description: "Created detailed map layouts and spawn areas for balanced gameplay.",
      image: "FWmap1.png",
      deadline: new Date("2025-11-15"),
    },
    {
      title: "Fortress Wars Spawn Area",
      description: "Developed a central spawn hub with interactive NPCs and teleport pads using Java.",
      image: "FWspawn.png",
      deadline: new Date("2024-12-15"),
    },
  ];

  const renderProjects = () => {
    $("#project-list").empty();
    const today = new Date();
    projects.forEach((p) => {
      const status = p.deadline > today ? "Ongoing" : "Completed";
      const color = p.deadline > today ? "green" : "gray";
      const card = $(`
        <div class="project-card">
          <img src="${p.image}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <p><strong>Deadline:</strong> ${p.deadline.toDateString()}</p>
          <p style="color:${color}"><strong>Status:</strong> ${status}</p>
        </div>
      `);
      $("#project-list").append(card.hide().fadeIn(300));
    });
  };

  $("#sortControls").html(`
    <button id="sortAsc">Sort by Earliest Deadline</button>
    <button id="sortDesc">Sort by Latest Deadline</button>
  `);

  $("#sortAsc").on("click", () => {
    projects.sort((a, b) => a.deadline - b.deadline);
    renderProjects();
  });

  $("#sortDesc").on("click", () => {
    projects.sort((a, b) => b.deadline - a.deadline);
    renderProjects();
  });

  renderProjects();

  let downloadCount = 0;
  $("#download-btn").on("click", function () {
    downloadCount++;
    $("#download-count").text(`Resume downloaded ${downloadCount} time${downloadCount > 1 ? "s" : ""}.`);
  });

  const education = [
    { degree: "B.S. in Computer Science", school: "Northern Arizona University", start: "2024", end: "2028" },
    { degree: "High School Diploma", school: "Chandler High School", start: "2020", end: "2024" },
  ];

  const renderEducation = () => {
    let html = `
      <table>
        <tr><th>Degree</th><th>School</th><th>Start</th><th>End</th></tr>
    `;
    education.forEach((e) => {
      html += `<tr><td>${e.degree}</td><td>${e.school}</td><td>${e.start}</td><td>${e.end}</td></tr>`;
    });
    html += `</table>`;
    $("#education-table").html(html);
  };
  renderEducation();

  $("#toggle-theme-btn").on("click", () => $("body").toggleClass("dark-mode"));
  $("#bgColorPicker").on("input", function () {
    $("body").css("background-color", $(this).val());
  });
  $("#fontSizeInput").on("input", function () {
    const v = $(this).val();
    if (v) $("body").css("font-size", v + "px");
  });

  $("nav a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 600);
  });

  $(window).on("scroll", function () {
    const scrollPos = $(document).scrollTop();
    $("section").each(function () {
      const top = $(this).offset().top - 80;
      const bottom = top + $(this).outerHeight();
      const id = $(this).attr("id");
      if (scrollPos >= top && scrollPos < bottom) {
        $("nav a").removeClass("active");
        $('nav a[href="#' + id + '"]').addClass("active");
      }
    });
  });
});
