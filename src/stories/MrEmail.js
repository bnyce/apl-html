//import './email.css';

export const createMrEmail = ({
  internal = false,
  subject,
  body,
  onClick,
}) => {
  const mreml = document.createElement('mremail');
  mreml.type = 'mremail';
  mreml.innerText = body;
  mreml.addEventListener('click', onClick);

  const mode = internal ? 'storybook-email--internal' : 'storybook-email--secondary';
  mreml.className = ['storybook-email', `storybook-email--${internal}`, mode].join(' ');

//  mreml.style.backgroundColor = backgroundColor;

  return mreml;
};
