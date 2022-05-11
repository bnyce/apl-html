//import { createEventPage } from './EventPage';
import { getNodeString, getNavString, getTagString } from './Event';

export default {
  title: 'Events/EventPage',
};

//const Template = (args) => createEventPage(args);

const myNode = getNodeString();
const myTag = getTagString();
const myNav = getNavString();

export const NodePage = () => myNav + myNode;
export const TagPage = () => myNav + '<div class="column-2">' + myTag + '</div>';
