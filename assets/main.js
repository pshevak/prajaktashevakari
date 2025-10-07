
// theme toggle with persistence
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved){ root.setAttribute('data-theme', saved); }
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const now = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', now);
  localStorage.setItem('theme', now);
});

// back-to-top
const topBtn = document.querySelector('.top');
const showTop = () => { if (window.scrollY > 500) topBtn?.classList.add('show'); else topBtn?.classList.remove('show'); };
showTop(); window.addEventListener('scroll', showTop);
topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
