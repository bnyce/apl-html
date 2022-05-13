//import './button.css';

export const createImage = ({
  src,
  alt,
}) => {
  const btn = document.createElement('img');
  btn.src = src;
  btn.alt = alt;
  return btn;
};
