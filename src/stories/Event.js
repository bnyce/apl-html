import './event.css';
import './icons.css';
import './fixer.css';
import './headers.css';

export const createEvent = ({
  internal = false,
  subject,
  body,
  onClick,
}) => {
  const evnt = document.createElement('email');
  evnt.type = 'email';
  evnt.innerText = body;
  evnt.addEventListener('click', onClick);

  const mode = internal ? 'storybook-email--internal' : 'storybook-email--secondary';
  evnt.className = ['storybook-email', `storybook-email--${internal}`, mode].join(' ');

//  evnt.style.backgroundColor = backgroundColor;

  return evnt;
};
