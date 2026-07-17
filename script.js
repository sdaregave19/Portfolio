const clock = document.querySelector('#clock');
const setClock = () => { clock.textContent = new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).format(new Date()); };
setClock(); setInterval(setClock, 1000);

const terminal = document.querySelector('#terminal');
document.querySelector('#terminal-trigger').addEventListener('click', () => terminal.showModal());
document.querySelector('#terminal-close').addEventListener('click', () => terminal.close());
document.querySelector('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const links = [...document.querySelectorAll('.bottom-nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(section => navObserver.observe(section));
