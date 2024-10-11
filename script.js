
const content = {
    en: {
        about: "About Me",
        aboutText: "I am a passionate robotics developer with expertise in programming and microcontrollers.",
        thesis: "Thesis",
        thesisText: "My thesis work focuses on SLAM and deep learning-based object tracking.",
        event: "Event",
        eventText: "I am actively involved in coding events and hackathons.",
        experience: "Experience",
        experienceText: "I have professional experience in robotics and automation.",
        projects: "Projects",
        projectsText: "Here are some of my recent projects in robotics, including face tracking and motor control.",
        contact: "Contact",
        contactText: "Feel free to contact me for collaborations or questions."
    },
    de: {
        about: "Über mich",
        aboutText: "Ich bin ein leidenschaftlicher Robotikentwickler mit Fachkenntnissen in Programmierung und Mikrocontrollern.",
        thesis: "Abschluss",
        thesisText: "Meine Abschlussarbeit konzentriert sich auf SLAM und Deep Learning-basiertes Objektracking.",
        event: "Veranstaltung",
        eventText: "Ich nehme aktiv an Programmierveranstaltungen und Hackathons teil.",
        experience: "Erfahrung",
        experienceText: "Ich habe berufliche Erfahrung in Robotik und Automatisierung.",
        projects: "Projekte",
        projectsText: "Hier sind einige meiner neuesten Projekte in der Robotik, darunter Gesichtserkennung und Motorsteuerung.",
        contact: "Kontakt",
        contactText: "Kontaktieren Sie mich gerne für Zusammenarbeit oder Fragen."
    }
};

// Function to update all text content based on the selected language
function updateContent(language) {
    document.getElementById('about-link').textContent = content[language].about;
    document.getElementById('about-section').textContent = content[language].aboutText;

    document.getElementById('thesis-link').textContent = content[language].thesis;
    document.getElementById('thesis-section').textContent = content[language].thesisText;

    document.getElementById('event-link').textContent = content[language].event;
    document.getElementById('event-section').textContent = content[language].eventText;

    document.getElementById('experience-link').textContent = content[language].experience;
    document.getElementById('experience-section').textContent = content[language].experienceText;

    document.getElementById('projects-link').textContent = content[language].projects;
    document.getElementById('projects-section').textContent = content[language].projectsText;

    document.getElementById('contact-link').textContent = content[language].contact;
    document.getElementById('contact-section').textContent = content[language].contactText;
}

// Add event listener for the language toggle button
document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLanguage = this.textContent === "EN" ? "de" : "en";
    this.textContent = currentLanguage.toUpperCase(); // Switch button text
    updateContent(currentLanguage);  // Update page content
});
