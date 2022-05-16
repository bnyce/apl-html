import { createSidebar, getSidebarString } from './Sidebar';
//import './exhibits-sidebar.css';
import { createEvent, getNodeString, getNavString } from './Event';
import { getExhibitNavString } from './Exhibit';

export default {
  title: 'APL/Sidebar',
};


const mySidebar = getSidebarString();

const myExhbitNav = getExhibitNavString();


const Template = ({ title, ...args }) => {
  return createSidebar({ title, ...args });
};

export const Blog = () => mySidebar;
export const Events = () => getNavString();
export const Exhibits = () => myExhbitNav;
