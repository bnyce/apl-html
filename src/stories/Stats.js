//import './layout.css';
//import './locations.css';

export const createStats = ({
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
