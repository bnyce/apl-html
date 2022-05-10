import './aplheader.css';

export const createAPLHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const aplheader = document.createElement('header');

  const aplwrapper = document.createElement('div');
  aplwrapper.className = 'aplwrapper';

  const account = document.createElement('div');

  aplwrapper.appendChild(account);
  aplheader.appendChild(aplwrapper);

  return aplheader;
};
