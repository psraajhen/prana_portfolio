const content = {
    en: {
        about: "About",
        thesis: "Thesis",
        event: "Event",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
        name: "Pranav B.E., M.Sc.",
        role: "Robotics Programming Developer",
        company: "Q.Vitec GmbH",
        contactInfo: "Contact Info",
        linkedin: "My LinkedIn profile",
        github: "My Github profile",
        learnMore: "Get To Know More",
        education: "Education",
        beDegree: "B.E. Bachelors Degree (Electronics & Communication Engineering) at Anna University, India",
        mscDegree: "M.Sc. Masters Degree (Optical Technologies) at Leibniz University Hannover, Germany",
        aboutText: "Experienced project developer with a focus on microcontrollers and single-board computers...",
        thesisTitle1: "Master's Thesis at Leibniz University Hannover",
        thesisDesc1: "Advancing Melanoma Skin Cancer Diagnostics and Education...",
        thesisObjective1: "Objective: Develop a generative AI framework to create modified dermoscopic image pairs...",
        thesisTools1: "Tools: Python, Pytorch, Deep Learning",
        thesisTitle2: "Bachelor's Thesis at Anna University, Chennai, India",
        thesisDesc2: "A Novel Approach for Signal Security and Video Transmission...",
        thesisTools2: "Tools: Matlab",
        ongoingEvents: "Ongoing Events",
        ongoingRole: "Robotics Programming Developer, Q.Vitec GmbH, Wunstorf, Germany",
        ongoingDesc: "Design, develop, and deploy software solutions for robotic systems...",
        ongoingTools: "Tools: Python",
        experienceTitle: "Experience",
        projectsTitle: "Long Term Projects",
        contactMe: "Contact Me",
        email: "Email",
    },
    de: {
        about: "Über",
        thesis: "Abschluss",
        event: "Veranstaltung",
        experience: "Erfahrung",
        projects: "Projekte",
        contact: "Kontakt",
        name: "Pranav B.E., M.Sc.",
        role: "Robotics-Programmierentwickler",
        company: "Q.Vitec GmbH",
        contactInfo: "Kontaktinformationen",
        linkedin: "Mein LinkedIn-Profil",
        github: "Mein Github-Profil",
        learnMore: "Mehr erfahren",
        education: "Bildung",
        beDegree: "B.E. Bachelor-Abschluss (Elektronik & Kommunikationstechnik) an der Anna University, Indien",
        mscDegree: "M.Sc. Master-Abschluss (Optische Technologien) an der Leibniz Universität Hannover, Deutschland",
        aboutText: "Erfahrener Projektentwickler mit einem Fokus auf Mikrocontroller...",
        thesisTitle1: "Masterarbeit an der Leibniz Universität Hannover",
        thesisDesc1: "Fortschritte in der Diagnostik von Melanom-Hautkrebs und in der Ausbildung...",
        thesisObjective1: "Ziel: Entwicklung eines generativen KI-Frameworks zur Erstellung modifizierter Dermoskopie-Bilder...",
        thesisTools1: "Werkzeuge: Python, Pytorch, Deep Learning",
        thesisTitle2: "Bachelorarbeit an der Anna University, Chennai, Indien",
        thesisDesc2: "Ein neuartiger Ansatz für Signalsicherheit und Videoübertragung...",
        thesisTools2: "Werkzeuge: Matlab",
        ongoingEvents: "Laufende Ereignisse",
        ongoingRole: "Robotics-Programmierentwickler, Q.Vitec GmbH, Wunstorf, Deutschland",
        ongoingDesc: "Entwurf, Entwicklung und Bereitstellung von Softwarelösungen für robotische Systeme...",
        ongoingTools: "Werkzeuge: Python",
        experienceTitle: "Erfahrung",
        projectsTitle: "Langfristige Projekte",
        contactMe: "Kontaktieren Sie mich",
        email: "E-Mail",
    }
};

// Function to update all text content based on the selected language
function updateContent(language) {
    // Update navigation links
    document.querySelector('nav ul li a[href="#about"]').textContent = content[language].about;
    document.querySelector('nav ul li a[href="#Thesis"]').textContent = content[language].thesis;
    document.querySelector('nav ul li a[href="#ongoing-events"]').textContent = content[language].event;
    document.querySelector('nav ul li a[href="#experience"]').textContent = content[language].experience;
    document.querySelector('nav ul li a[href="#projects"]').textContent = content[language].projects;
    document.querySelector('nav ul li a[href="#contact"]').textContent = content[language].contact;

    // Update profile section
    document.querySelector('.title').textContent = content[language].name;
    document.querySelector('.section__text__p2').textContent = content[language].role;
    document.querySelector('.section__text__p2 + .section__text__p2').textContent = content[language].company;

    // Update contact info
    document.querySelector('.btn-container button').textContent = content[language].contactInfo;
    document.querySelector('#socials-container a img[alt="My LinkedIn profile"]').alt = content[language].linkedin;
    document.querySelector('#socials-container a img[alt="My Github profile"]').alt = content[language].github;

    // Update about section
    document.querySelector('#about .title').textContent = content[language].about;
    document.querySelector('#about p').textContent = content[language].aboutText;
    document.querySelector('#about .details-container h3').textContent = content[language].education;
    document.querySelector('#about .details-container p').innerHTML = `${content[language].beDegree}<br/>${content[language].mscDegree}`;

    // Update thesis section
    const thesisTitles = document.querySelectorAll('#Thesis .Thesis-title');
    thesisTitles[0].textContent = content[language].thesisTitle1;
    thesisTitles[1].textContent = content[language].thesisTitle2;

    const thesisDescriptions = document.querySelectorAll('#Thesis .Thesis-description');
    thesisDescriptions[0].textContent = content[language].thesisDesc1;
    thesisDescriptions[1].textContent = content[language].thesisDesc2;

    const thesisObjectives = document.querySelectorAll('#Thesis .Thesis-idea');
    thesisObjectives[0].textContent = content[language].thesisObjective1;

    const thesisTools = document.querySelectorAll('#Thesis .Thesis-tools');
    thesisTools[0].textContent = content[language].thesisTools1;
    thesisTools[1].textContent = content[language].thesisTools2;

    // Add more sections based on your page structure...
}

// Event listener for the language toggle button
document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLanguage = this.textContent === "DE" ? "de" : "en";
    this.textContent = currentLanguage === "de" ? "EN" : "DE"; // Switch button text
    updateContent(currentLanguage);  // Update page content
});
