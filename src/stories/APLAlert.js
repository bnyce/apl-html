import './aplAlert.css';
import './flex.css';

export const createAPLAlert = ({
  headline,
  button_text,
  button_url,
  time_start,
  time_end,
  zone,
}) => {
  const aplalrtwrapper2 = document.createElement('div');
  aplalrtwrapper2.className = 'apl-alert';
         const mode = 'apl-alert-row';

  const aplalrtwrapper1 = document.createElement('div');
  aplalrtwrapper1.className = [`${zone}`, mode].join(' ');

      if(zone == 'home') {
        const alrticn = document.createElement('span');
      alrticn.className = 'material-icons-round';
      alrticn.innerText = 'warning';
        aplalrtwrapper1.appendChild(alrticn);

  }
   
  const alrthdln = document.createElement('div');
  alrthdln.className = 'alert-headline';
  alrthdln.innerText = headline;
  aplalrtwrapper1.appendChild(alrthdln);
 
  //aplalrt.appendChild(aplalrtwrapper1);
    
  if(button_text) {
  const aplalrtbtn = document.createElement('a');
  aplalrtbtn.innerText = button_text;
  aplalrtbtn.href = `${button_url}`;
    
  alrthdln.appendChild(aplalrtbtn);      
  }
   


  aplalrtwrapper2.appendChild(aplalrtwrapper1);
  return aplalrtwrapper2;
};
