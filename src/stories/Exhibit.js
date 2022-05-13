import './exhibits.css';
import { createImage } from './Image';

export const createExhibit = ({
  field_ex_main_image,
  title,
  body,
}) => {
    const exhbt = document.createElement('div');
    exhbt.className = 'apl-exhibit';
    const exhbtcpy = document.createElement('div');
    exhbtcpy.className = 'apl_copy';

    const exhbtimg = document.createElement('img');
    exhbtimg.src = `${field_ex_main_image}`;

    exhbt.appendChild(exhbtimg);

    const myTitleWrapper = document.createElement('h1');
    myTitleWrapper.className = 'exhibit-title';
    
       const myTitle = document.createElement('a');

   const myBody = document.createElement('div');
    myBody.innerText = `${body}`;

    myTitle.innerText = `${title}`;
    myTitleWrapper.appendChild(myTitle);
   exhbtcpy.appendChild(myTitleWrapper);
   exhbtcpy.appendChild(myBody);

    exhbt.appendChild(exhbtcpy);

    return exhbt;
};

/*
export function getExhibitString() {
    const ExhibitString = `${title}`;
    //const ExhibitString = `${field_ex_main_image}<div class="exhibit_copy">${title}${body}</div></div>`;
    return ExhibitString;
}

*/