document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.footer > span');
  if (year) year.textContent = `Strona osobista · ${new Date().getFullYear()}`;
});
