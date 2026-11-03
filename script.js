document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.footer > span');
  if (year) year.textContent = `Strona osobista · ${new Date().getFullYear()}`;

  const aboutCopy = document.querySelector('.about-copy');
  const skills = aboutCopy?.querySelector('.skill-list');
  if (aboutCopy && skills) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Vibecoduję i tworzę projekty z pomocą AI — łączę własne pomysły z narzędziami, które pomagają szybko zamieniać je w działające rozwiązania.';
    aboutCopy.insertBefore(paragraph, skills);

    ['Vibecoding', 'AI'].forEach((skill) => {
      const tag = document.createElement('span');
      tag.textContent = skill;
      skills.append(tag);
    });
  }
});
