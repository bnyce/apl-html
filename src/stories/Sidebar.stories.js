import { createSidebar, getSidebarString, getHomePageButtons, getHomePageEvents } from './Sidebar';
//import './exhibits-sidebar.css';
import { createEvent, getNodeString, getNavString } from './Event';
import { getExhibitNavString } from './Exhibit';

export default {
  title: 'APL/Sidebar',
};


const mySidebar = getSidebarString();
const myHomePageButtons = getHomePageButtons();
const myHomePageEvents = getHomePageEvents();

const myEventsNav = getNavString();
const myExhbitNav = getExhibitNavString();


const Template = ({ title, ...args }) => {
  return createSidebar({ title, ...args });
};

export const Blog = () => mySidebar;
export const Events = () => myEventsNav;
export const Exhibits = () => myExhbitNav;
export const HomePageButtons = () => myHomePageButtons;
export const HomePageEvents = () => myHomePageEvents;
