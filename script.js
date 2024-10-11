const content = {
    en: {
        name: "Pranav B.E., M.Sc.",
        role: "Robotics Programming Developer",
        company: "Q.Vitec GmbH",
        contactInfo: "Contact Info",
        linkedin: "My LinkedIn profile",
        github: "My Github profile",
        learnMore: "Get To Know More",
        about: "About Me",
        education: "Education",
        beDegree: "B.E. Bachelors Degree (Electronics & Communication Engineering) at Anna University, India",
        mscDegree: "M.Sc. Masters Degree (Optical Technologies) at Leibniz University Hannover, Germany",
        aboutText: "Experienced project developer with a focus on microcontrollers and single-board computers. Proficient in Arduino, ESP32, ESP8266, STM32, Raspberry Pi, and Nvidia Jetson. Skilled in MatLab, Embedded C, and Python. Strong background in program debugging, computer hardware maintenance, circuit designing (Basic), and web designing (front-end). Committed to independence, I embrace challenges, self-discipline, and the autonomy to create meaningful outcomes.",
        thesisTitle: "Master's Thesis at Leibniz University Hannover",
        thesisObjective: "Objective: Develop a generative AI framework to create modified dermoscopic image pairs, illustrating malignancy and benign lesions, to educate patients and dermatologists with user interface.",
        bachelorThesis: "Bachelor's Thesis at Anna University, Chennai, India",
        bachelorThesisObjective: "Objective: Create a novel secure wireless communication system that combines cutting-edge encoding during transmission and effective decoding during reception to improve data transfer over limited bandwidths while maintaining the highest levels of signal security and privacy.",
        ongoingEvents: "Ongoing Events",
        ongoingEventRole: "Robotics Programming Developer, Q.Vitec GmbH, Wunstorf, Germany",
        ongoingEventDescription: "Design, develop, and deploy software solutions for robotic systems. Collaborate to integrate software with robotic hardware components. Create algorithms for robotic perception, navigation, manipulation, and control.",
        projects: "Long Term Projects",
        project1: "S.L.A.M",
        project2: "Face-Tracker",
        project3: "Pi Cluster",
        experience: "Experience",
        workExperience: "Working Experience",
        volunteerExperience: "Project Developer (Volunteer)",
        researchAssistant: "Research Assistant",
        studentAssistant: "Student Assistant",
        internshipExperience: "Internship Experience",
        softwareEngineerIntern: "Software Engineer Intern",
        researchInternship: "Research Internship",
        contactMe: "Contact Me",
        email: "Email icon",
    },
    de: {
        name: "Pranav B.E., M.Sc.",
        role: "Robotics-Programmierentwickler",
        company: "Q.Vitec GmbH",
        contactInfo: "Kontaktinformationen",
        linkedin: "Mein LinkedIn-Profil",
        github: "Mein Github-Profil",
        learnMore: "Mehr erfahren",
        about: "Über mich",
        education: "Bildung",
        beDegree: "B.E. Bachelor-Abschluss (Elektronik & Kommunikationstechnik) an der Anna University, Indien",
        mscDegree: "M.Sc. Master-Abschluss (Optische Technologien) an der Leibniz Universität Hannover, Deutschland",
        aboutText: "Erfahrener Projektentwickler mit einem Fokus auf Mikrocontroller und Einplatinencomputer. Kompetent in Arduino, ESP32, ESP8266, STM32, Raspberry Pi und Nvidia Jetson. Erfahren in MatLab, Embedded C und Python. Starker Hintergrund in der Programm-Debugging, Wartung von Computerhardware, Schaltungsdesign (Basis) und Webdesign (Front-End). Engagiert für Unabhängigkeit, nehme ich Herausforderungen, Selbstdisziplin und die Autonomie an, um sinnvolle Ergebnisse zu erzielen.",
        thesisTitle: "Masterarbeit an der Leibniz Universität Hannover",
        thesisObjective: "Ziel: Entwicklung eines generativen KI-Frameworks zur Erstellung modifizierter Dermoskopie-Bildpaare, die maligne und benigne Läsionen veranschaulichen, um Patienten und Dermatologen mit einer Benutzeroberfläche zu schulen.",
        bachelorThesis: "Bachelorarbeit an der Anna University, Chennai, Indien",
        bachelorThesisObjective: "Ziel: Entwicklung eines neuartigen sicheren drahtlosen Kommunikationssystems, das moderne Codierung während der Übertragung und effektive Dekodierung während des Empfangs kombiniert, um die Datenübertragung über begrenzte Bandbreiten zu verbessern und gleichzeitig höchste Signal- und Datenschutzstandards aufrechtzuerhalten.",
        ongoingEvents: "Laufende Ereignisse",
        ongoingEventRole: "Robotics-Programmierentwickler, Q.Vitec GmbH, Wunstorf, Deutschland",
        ongoingEventDescription: "Entwurf, Entwicklung und Bereitstellung von Softwarelösungen für robotische Systeme. Zusammenarbeit bei der Integration von Software mit Roboterhardwarekomponenten. Erstellung von Algorithmen für die Roboterwahrnehmung, Navigation, Manipulation und Steuerung.",
        projects: "Langfristige Projekte",
        project1: "S.L.A.M",
        project2: "Face-Tracker",
        project3: "Pi Cluster",
        experience: "Erfahrung",
        workExperience: "Berufserfahrung",
        volunteerExperience: "Projektentwickler (Freiwilliger)",
        researchAssistant: "Wissenschaftlicher Mitarbeiter",
        studentAssistant: "Studentische Hilfskraft",
        internshipExperience: "Praktikumserfahrung",
        softwareEngineerIntern: "Praktikant Softwareentwickler",
        researchInternship: "Forschungspraktikum",
        contactMe: "Kontaktieren Sie mich",
        email: "E-Mail-Symbol",
    }
};

// Function to update all text content based on the selected language
function updateContent(language) {
    document.getElementById('name').textContent = content[language].name;
    document.getElementById('role').textContent = content[language].role;
    document.getElementById('company').textContent = content[language].company;
    document.getElementById('contact-info').textContent = content[language].contactInfo;
    document.getElementById('linkedin').textContent = content[language].linkedin;
    document.getElementById('github').textContent = content[language].github;
    document.getElementById('learn-more').textContent = content[language].learnMore;
    document.getElementById('about').textContent = content[language].about;
    document.getElementById('education').textContent = content[language].education;
    document.getElementById('be-degree').textContent = content[language].beDegree;
    document.getElementById('msc-degree').textContent = content[language].mscDegree;
    document.getElementById('about-text').textContent = content[language].aboutText;
    document.getElementById('thesis-title').textContent = content[language].thesisTitle;
    document.getElementById('thesis-objective').textContent = content[language].thesisObjective;
    document.getElementById('bachelor-thesis').textContent = content[language].bachelorThesis;
    document.getElementById('bachelor-thesis-objective').textContent = content[language].bachelorThesisObjective;
    document.getElementById('ongoing-events').textContent = content[language].ongoingEvents;
    document.getElementById('ongoing-event-role').textContent = content[language].ongoingEventRole;
    document.getElementById('ongoing-event-description').textContent = content[language].ongoingEventDescription;
    document.getElementById('projects').textContent = content[language].projects;
    document.getElementById('project-1').textContent = content[language].project1;
    document.getElementById('project-2').textContent = content[language].project2;
    document.getElementById('project-3').textContent = content[language].project3;
    document.getElementById('experience').textContent = content[language].experience;
    document.getElementById('work-experience').textContent = content[language].workExperience;
    document.getElementById('volunteer-experience').textContent = content[language].volunteerExperience;
    document.getElementById('research-assistant').textContent = content[language].researchAssistant;
    document.getElementById('student-assistant').textContent = content[language].studentAssistant;
    document.getElementById('internship-experience').textContent = content[language].internshipExperience;
    document.getElementById('software-engineer-intern').textContent = content[language].softwareEngineerIntern;
    document.getElementById('research-internship').textContent = content[language].researchInternship;
    document.getElementById('contact-me').textContent = content[language].contactMe;
    document.getElementById('email').textContent = content[language].email;
}

// Add event listener for the language toggle button
document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLanguage = this.textContent === "EN" ? "de" : "en";
    this.textContent = currentLanguage.toUpperCase(); // Switch button text
    updateContent(currentLanguage);  // Update page content
});
