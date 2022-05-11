import { createAPLHeader, getNavigationBarString, getHeroString } from './APLHeader';
//import Component from './index.html';


export default {
  title: 'APL/Header',
 /*  argTypes: {
   onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' }, 
  },*/
};

const Template = (args) => createAPLHeader(args);

const myHero = getHeroString();

const myNavigationBar = getNavigationBarString();

export const APLHeader = () => myNavigationBar;
export const APLHeaderHero = () => myNavigationBar + myHero;
