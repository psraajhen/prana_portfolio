function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Define content for both languages
const content = {
    en: {
        about: "About",
        thesis: "Thesis",
        event: "Event",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
    },
    de: {
        about: "Über",
        thesis: "These",
        event: "Veranstaltung",
        experience: "Erfahrung",
        projects: "Projekte",
        contact: "Kontakt",
    },
};

// Handle language switch
document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLanguage = this.textContent === "EN" ? "de" : "en";
    this.textContent = currentLanguage.toUpperCase(); // Switch button text

    // Update content based on the selected language
    document.querySelector('a[href="#about"]').textContent = content[currentLanguage].about;
    document.querySelector('a[href="#Thesis"]').textContent = content[currentLanguage].thesis;
    document.querySelector('a[href="#ongoing-events"]').textContent = content[currentLanguage].event;
    document.querySelector('a[href="#experience"]').textContent = content[currentLanguage].experience;
    document.querySelector('a[href="#projects"]').textContent = content[currentLanguage].projects;
    document.querySelector('a[href="#contact"]').textContent = content[currentLanguage].contact;
});
