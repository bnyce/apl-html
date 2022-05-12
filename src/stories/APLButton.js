//import './aplButton.css';

export const createAPLButton = ({
  primary = false,
  audience,
  label,
}) => {
  const aplbtn = document.createElement('a');
  aplbtn.innerText = label;
 // aplbtn.addEventListener('click', onClick);

  const mode = primary ? 'usa-button' : 'usa-button usa-button-outline';
  aplbtn.className = [`${audience}`, mode].join(' ');

//  aplbtn.style.backgroundColor = backgroundColor;

  return aplbtn;
};
