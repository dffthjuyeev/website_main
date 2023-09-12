function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function handleCardClick(cardId) {
  switch (cardId) {
    case 'card1':
      window.open('https://github.com/onlyspencer/Projects/tree/work-experience', '_blank');
      break;

    case 'card2':
      window.open('https://github.com/onlyspencer/Projects/tree/Discord-Projects/Discord.py', '_blank');
      break;

    case 'card3':
      window.open('https://onlyspencer.com/about', '_blank');
      break;

    default:
      window.open('https:onlyspencer.com/404.html', '_blank');
      break;
  }
}
