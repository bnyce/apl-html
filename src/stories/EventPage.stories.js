//import { createEventPage } from './EventPage';
import { getNodeString, getNavString, getTagString, getCalendarString } from './Event';
import { getNavigationBarString, getHeroString } from './APLHeader';

export default {
  title: 'Events/EventPage',
};

//const Template = (args) => createEventPage(args);

const myCalendar = getCalendarString();
const myNode = getNodeString();
const myTag = getTagString();
const myNav = getNavString();

//const myHero = getHeroString();
const myNavigationBar = getNavigationBarString();

export const NodePage = () => myNav + myNode;
export const TagPage = () => myNav + '<div class="column-2">' + myTag + '</div>';
export const TagPageWithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myTag + '</div></div>';
export const CalendarPage = () => myCalendar;
