// Toggle menu mobile
const burger = document.querySelector(".navbar__burger");
const menu = document.querySelector(".navbar__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");

  // Accessibilité
  const isOpen = burger.classList.contains("active");
  burger.setAttribute("aria-expanded", isOpen);
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll(".navbar__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    burger.setAttribute("aria-expanded", false);
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox__close");
const produitItems = document.querySelectorAll(".produits__item");

produitItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Fermer avec Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.form__submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formMessage.textContent = '✓ Message envoyé avec succès ! Nous vous répondrons rapidement.';
            formMessage.className = 'form__message form__message--success';
            contactForm.reset();
        } else {
            throw new Error('Erreur serveur');
        }
    } catch (error) {
        formMessage.textContent = '✗ Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.';
        formMessage.className = 'form__message form__message--error';
    }
    
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
});