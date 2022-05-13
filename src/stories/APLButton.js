import './aplButton.css';

export const createAPLButton = ({
  primary = false,
  audience,
  label,
}) => {
  const aplbtn = document.createElement('a');
  aplbtn.innerText = label;
 // aplbtn.addEventListener('click', onClick);

  const mode = primary ? 'apl-button apl-button-primary' : 'apl-button';
  aplbtn.className = [`${audience}`, mode].join(' ');

//  aplbtn.style.backgroundColor = backgroundColor;

  return aplbtn;
};
