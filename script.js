// js/script.js
console.log("Hello, 3D Solucion!");

// Automate navigation menu
const sections = document.querySelectorAll("section");
const navMenu = document.querySelector("nav ul");

sections.forEach((section) => {
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.href = `#${section.id}`;
  navLink.textContent = section.querySelector("h1").textContent;
  navItem.appendChild(navLink);
  navMenu.appendChild(navItem);
});

// Automate scrolling effect
navMenu.addEventListener("click", (event) => {
  event.preventDefault();
  const targetSection = document.querySelector(`#${event.target.textContent}`);
  targetSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Automate hover effect on navigation menu items
navMenu.addEventListener("mouseover", (event) => {
  if (event.target.tagName === 'A') {
    event.target.style.backgroundColor = "#444";
  }
});

navMenu.addEventListener("mouseout", (event) => {
  if (event.target.tagName === 'A') {
    event.target.style.backgroundColor = "#333";
  }
});

// Remove fade-in effect on sections
sections.forEach((section) => {
  section.style.opacity = 1; // Ensure sections are always fully visible
});

// Automate form submission
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  // Send form data to server or perform other actions
});

// Automate button click event
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
  // Perform other actions on button click
});
