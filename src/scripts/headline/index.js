import {hello} from 'hello';

export default () => {
  const body = document.body;
  const el = document.createElement('h1');

  el.innerHTML = hello();
  body.insertBefore(el, body.firstChild);
};
