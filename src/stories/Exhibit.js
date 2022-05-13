import './exhibits.css';

export const createExhibit = ({
  field_ex_main_image,
  title,
  body,
}) => {
  const exhbt = document.createElement('div');
  exhbt.className = 'apl-exhibit';
  exhbt.innerHTML = `${field_ex_main_image}`;
  const exhbitcpy = document.createElement('div');
  exhbitcpy.className = 'apl_copy';

  const exhbtcpyInner = `${title} ${body}`;
  exhbitcpy.innerHTML = exhbtcpyInner;

  //exhbt.appendChild(exhbitcpy);
  //exhbt.appendChild(`${field_ex_main_image`);
  exhbt.appendChild(exhbitcpy);

  //exhbt.addEventListener('click', onClick);

  //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  //exhbt.style.backgroundColor = backgroundColor;

  return exhbt;
};


export function getExhibitString() {
    const ExhibitString = `${title}`;
    //const ExhibitString = `${field_ex_main_image}<div class="exhibit_copy">${title}${body}</div></div>`;
    return ExhibitString;
}

