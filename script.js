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
        aboutText: "Experienced project developer with a focus on microcontrollers and single-board computers...",
        education: "Education",
        beDegree: "B.E. Bachelors Degree (Electronics & Communication Engineering) at Anna University, India",
        mscDegree: "M.Sc. Masters Degree (Optical Technologies) at Leibniz University Hannover, Germany",
        thesisTitle1: "Master's Thesis at Leibniz University Hannover",
        thesisDesc1: "Advancing Melanoma Skin Cancer Diagnostics and Education: Integrating Deep Learning...",
        thesisObjective1: "Objective: Develop a generative AI framework to create modified dermoscopic image pairs...",
        thesisTools1: "Tools: Python, Pytorch, Deep Learning",
        thesisTitle2: "Bachelor's Thesis at Anna University, Chennai, India",
        thesisDesc2: "A Novel Approach for Signal Security and Video Transmission using Lower Bandwidth Technique.",
        thesisObjective2: "Objective: Create a novel secure wireless communication system...",
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
        aboutText: "Erfahrener Projektentwickler mit einem Fokus auf Mikrocontroller und Einplatinencomputer...",
        education: "Bildung",
        beDegree: "B.E. Bachelor-Abschluss (Elektronik & Kommunikationstechnik) an der Anna University, Indien",
        mscDegree: "M.Sc. Master-Abschluss (Optische Technologien) an der Leibniz Universität Hannover, Deutschland",
        thesisTitle1: "Masterarbeit an der Leibniz Universität Hannover",
        thesisDesc1: "Fortschritte in der Diagnostik von Melanom-Hautkrebs und in der Ausbildung...",
        thesisObjective1: "Ziel: Entwicklung eines generativen KI-Frameworks zur Erstellung modifizierter Dermoskopie-Bilder...",
        thesisTools1: "Werkzeuge: Python, Pytorch, Deep Learning",
        thesisTitle2: "Bachelorarbeit an der Anna University, Chennai, Indien",
        thesisDesc2: "Ein neuartiger Ansatz für die Signalsicherheit und Videoübertragung mit geringerer Bandbreite.",
        thesisObjective2: "Ziel: Entwicklung eines neuartigen sicheren drahtlosen Kommunikationssystems...",
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

document.addEventListener('DOMContentLoaded', function () {
    // Function to update all text content based on the selected language
    function updateContent(language) {
        // Update navigation links
        if (document.getElementById('about-link')) {
            document.getElementById('about-link').textContent = content[language].about;
        }
        if (document.getElementById('thesis-link')) {
            document.getElementById('thesis-link').textContent = content[language].thesis;
        }
        if (document.getElementById('event-link')) {
            document.getElementById('event-link').textContent = content[language].event;
        }
        if (document.getElementById('experience-link')) {
            document.getElementById('experience-link').textContent = content[language].experience;
        }
        if (document.getElementById('projects-link')) {
            document.getElementById('projects-link').textContent = content[language].projects;
        }
        if (document.getElementById('contact-link')) {
            document.getElementById('contact-link').textContent = content[language].contact;
        }

        // Update profile section
        const nameTitle = document.querySelector('.title');
        if (nameTitle) {
            nameTitle.textContent = content[language].name;
        }
        const role = document.querySelector('.section__text__p2');
        if (role) {
            role.textContent = content[language].role;
        }
        const company = document.querySelector('.section__text__p2 + .section__text__p2');
        if (company) {
            company.textContent = content[language].company;
        }

        // Update contact info
        const contactButton = document.querySelector('.btn-container button');
        if (contactButton) {
            contactButton.textContent = content[language].contactInfo;
        }
        const linkedinIcon = document.querySelector('#socials-container a img[alt="My LinkedIn profile"]');
        if (linkedinIcon) {
            linkedinIcon.alt = content[language].linkedin;
        }
        const githubIcon = document.querySelector('#socials-container a img[alt="My Github profile"]');
        if (githubIcon) {
            githubIcon.alt = content[language].github;
        }

        // Update about section
        const aboutTitle = document.querySelector('#about .title');
        if (aboutTitle) {
            aboutTitle.textContent = content[language].about;
        }
        const aboutText = document.querySelector('#about p');
        if (aboutText) {
            aboutText.textContent = content[language].aboutText;
        }

        // Update thesis section
        const thesisTitle1 = document.querySelector('#Thesis .Thesis-title');
        if (thesisTitle1) {
            thesisTitle1.textContent = content[language].thesisTitle1;
        }
        const thesisDesc1 = document.querySelector('#Thesis .Thesis-description');
        if (thesisDesc1) {
            thesisDesc1.textContent = content[language].thesisDesc1;
        }
        const thesisObjective1 = document.querySelector('#Thesis .Thesis-idea');
        if (thesisObjective1) {
            thesisObjective1.textContent = content[language].thesisObjective1;
        }
        const thesisTools1 = document.querySelector('#Thesis .Thesis-tools');
        if (thesisTools1) {
            thesisTools1.textContent = content[language].thesisTools1;
        }

        // Add more sections if necessary...
    }

    // Event listener for the language toggle button
    document.getElementById("language-toggle").addEventListener("click", function () {
        const currentLanguage = this.textContent === "DE" ? "de" : "en";
        this.textContent = currentLanguage === "de" ? "EN" : "DE"; // Switch button text
        updateContent(currentLanguage);  // Update page content
    });
});

