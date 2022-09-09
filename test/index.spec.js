/* eslint-disable import/no-unresolved */
// importamos la funcion que vamos a testear
import { showSection } from '../src/router.js';

const loginMock = () => {
  const template = document.createElement('section');
  template.innerHTML = '<p>Hola mundo</p>';
  return template;
};

const templates = {
  '#login': loginMock,
};

describe('Router', () => {
  it('Tiene que mostrar el template con el cambio del hash', () => {
    // eslint-disable-next-line quotes
    document.body.innerHTML = `<div id="root"></div>`;
    showSection('#login', templates);
    expect(document.getElementById('root').textContent.trim()).toEqual('Hola mundo');
  });
});
