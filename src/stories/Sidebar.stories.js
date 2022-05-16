import { createSidebar, getSidebarString } from './Sidebar';
//import './exhibits-sidebar.css';
import { createEvent, getNodeString, getNavString } from './Event';

export default {
  title: 'APL/Sidebar',
};


const mySidebar = getSidebarString();



const Template = ({ title, ...args }) => {
  return createSidebar({ title, ...args });
};

export const Blog = () => mySidebar;
export const Events = () => getNavString();
