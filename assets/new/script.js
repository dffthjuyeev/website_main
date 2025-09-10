// Fonction de défilement fluide vers une section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Détecte la langue par défaut (en utilisant le stockage local ou "en" par défaut)
function getLanguage() {
  return localStorage.getItem("language") || "en";
}

// Met à jour la langue et stocke la préférence
function toggleLanguage(language) {
  const texts = {
    en: {
      h1_header: "Welcome",
      title_about: "ABOUT ME",
      avatar: "./avatar1.webp", // Image pour l'anglais
      title_card_aboutme: "Hello I'm OnlySpencer !",
      text_card_aboutme:
        "I'm Arthur aka OnlySpencer, a young IT developer in high school who likes to discover new languages according to my projects. I've already discovered front-end in web development and recently started programming Android applications...",
      title_header_projects: "MY PROJECTS",
      text_footer:
        "Notice that this website is still under making, nothing is finished yet!",
      privacy_policy: "Privacy Policy",
      tos: "Terms of Use",
    },
    fr: {
      h1_header: "Bienvenue",
      title_about: "À PROPOS DE MOI",
      avatar: "./avatar1.webp", // Image pour le français
      title_card_aboutme: "Salut, c'est OnlySpencer !",
      text_card_aboutme:
        "Je suis Arthur alias OnlySpencer, un jeune développeur en informatique au lycée qui aime découvrir de nouveaux langages selon mes projets. J'ai déjà découvert le développement front-end sur le web et j'ai récemment commencé à programmer des applications Android...",
      title_header_projects: "MES PROJETS",
      text_footer:
        "Je tiens à préciser que ce site web est encore en construction ; rien n'est encore terminé !",
      privacy_policy: "Confidentialité",
      tos: "Conditions d'utilisation",
    },
  };

  const writerElement = document.getElementById("writer");
  if (writerElement) {
    const writerTexts = {
      en: [
        "Welcome to my website !",
        "I am a young developer",
        "You can contact me with some social medias so don't hesitate !",
      ],
      fr: [
        "Bienvenue sur mon site web !",
        "Je suis un jeune développeur",
        "Vous pouvez me contacter sur les réseaux sociaux, n'hésitez pas !",
      ],
    };

    writerElement.setAttribute(
      "data-text",
      JSON.stringify(writerTexts[language])
    );

    // Vérifie et relance le typewriter si nécessaire
    if (typeof startTypeWriter === "function") {
      startTypeWriter();
    }
  }

  // Applique les textes dynamiquement
  const content = texts[language];
  for (const [key, value] of Object.entries(content)) {
    const element = document.getElementById(key);
    if (element) {
      if (key === "avatar") {
        element.src = value; // Changer l'image de l'avatar
      } else {
        element.textContent = value;
      }
    }
  }

  // Stocke la langue sélectionnée
  localStorage.setItem("language", language);
}