const links = [...document.querySelectorAll('.site-header nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const setActive = () => {
  const y = window.scrollY + 140;
  let current = null;
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', setActive, { passive: true });
setActive();
