document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.footer > span');
  if (year) year.textContent = `Strona osobista · ${new Date().getFullYear()}`;

  const aboutCopy = document.querySelector('.about-copy');
  const skills = aboutCopy?.querySelector('.skill-list');
  if (aboutCopy && skills) {
    const paragraphs = aboutCopy.querySelectorAll('p');
    if (paragraphs[0]) {
      paragraphs[0].textContent = 'Jestem AI devem i tworzę projekty z pomocą sztucznej inteligencji. Rozwijam też BoberBot — rozbudowanego asystenta Discord, którego używam prywatnie, na własny użytek.';
    }
    if (paragraphs[1]) {
      paragraphs[1].textContent = 'Interesują mnie boty, automatyzacja i praktyczne funkcje, które ułatwiają codzienne życie na serwerze. Lubię eksperymentować z AI i zamieniać pomysły w działające rozwiązania.';
    }
    if (paragraphs[2]) {
      paragraphs[2].textContent = 'Vibecoduję — wykorzystuję narzędzia AI w procesie tworzenia i rozwijania swoich projektów.';
    }
    skills.replaceChildren(...['AI development', 'Vibecoding', 'AI', 'Discord', 'JavaScript', 'Boty'].map((label) => {
      const tag = document.createElement('span');
      tag.textContent = label;
      return tag;
    }));
  }

  const projectLink = document.querySelector('.project-link');
  if (projectLink) {
    const privateLabel = document.createElement('span');
    privateLabel.className = projectLink.className;
    privateLabel.textContent = 'Projekt prywatny — tylko do mojego użytku';
    projectLink.replaceWith(privateLabel);
  }

  const projectFoot = document.querySelector('.project-foot > span:first-child');
  if (projectFoot) projectFoot.textContent = 'Projekt prywatny · niedostępny publicznie';

  const disclaimer = document.querySelector('.project-disclaimer');
  if (disclaimer) disclaimer.textContent = 'BoberBot to prywatny projekt, przeznaczony wyłącznie do mojego użytku. Repozytorium i kod nie są publicznie dostępne.';
});
