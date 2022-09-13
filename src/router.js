import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { wall } from './components/wall.js';

// Routing events

const template = {
  '': welcome(),
  '#register': register(),
  '#login': login(),
  '#wall': wall(),
};

export const showSection = (hash, templateOther = template) => {
  const root = document.getElementById('root');
  window.location.hash = hash;
  console.log(hash);
  root.replaceChildren(templateOther[hash]);
};

window.addEventListener('load', () => {
  showSection(window.location.hash)
});

window.addEventListener('hashchange', () => {
  showSection(window.location.hash)
});
