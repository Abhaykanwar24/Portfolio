// Smooth scroll for section buttons
document.getElementById("projectsBtn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("aboutMe").addEventListener("click", () => {
    document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("skillsBtn").addEventListener("click", () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactMe").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("educationBtn").addEventListener("click", () => {
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
});
