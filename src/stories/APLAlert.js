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
        
  const aplalrt = document.createElement('div');
  aplalrt.className = 'flex';

    const mode = 'apl-alert-row';

  const aplalrtwrapper1 = document.createElement('div');
  aplalrtwrapper1.className = [`${zone}`, mode].join(' ');

  aplalrtwrapper1.innerText = headline;
 
  aplalrt.appendChild(aplalrtwrapper1);
    
  const aplalrtbtn = document.createElement('a');
  aplalrtbtn.innerText = button_text;
  aplalrtbtn.href = `${button_url}`;
    
  aplalrtwrapper1.appendChild(aplalrtbtn);
  aplalrtwrapper2.appendChild(aplalrt);
  return aplalrtwrapper2;
};
