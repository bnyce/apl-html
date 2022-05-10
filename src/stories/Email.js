//import './email.css';

export const createEmail = ({
  internal = false,
  subject,
  body,
  onClick,
}) => {
  const eml = document.createElement('email');
  eml.type = 'email';
  eml.innerText = body;
  eml.addEventListener('click', onClick);

  const mode = internal ? 'storybook-email--internal' : 'storybook-email--secondary';
  eml.className = ['storybook-email', `storybook-email--${internal}`, mode].join(' ');

//  eml.style.backgroundColor = backgroundColor;

  return eml;
};
