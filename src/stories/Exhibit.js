import './exhibits.css';
import { createImage } from './Image';

export const createExhibit = ({
  field_ex_main_image,
  title,
  body,
  time_start,
  time_end
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
    myBody.innerHTML = `${body} <br/> ${time_start} - ${time_end}`;

    myTitle.innerText = `${title}`;
    myTitleWrapper.appendChild(myTitle);
   exhbtcpy.appendChild(myTitleWrapper);
   exhbtcpy.appendChild(myBody);

    exhbt.appendChild(exhbtcpy);

    return exhbt;
};

export function getExhibitNavString() {
    const ExhibitNavString = '<div id="apl-exhibits-sidebar"><h2>APL Exhibits</h2><ul id="apl-exhibits-nav"><li><a href="/events">Current Events</a></li><li><a href="/events/calendar">Future</a></li><li><a href="/events/exhibits">Past</a></li></ul></div>';
    return ExhibitNavString;
}