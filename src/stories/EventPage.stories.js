import { createEventPage } from './EventPage';
import { getNodeString, getNavString, getTagString, getCalendarString } from './Event';
import { getNavigationBarString, getHeroString } from './APLHeader';
import { getAPLFooterString } from './APLFooter';

export default {
  title: 'Events/EventPage',
};
const Template = ({ label, ...args }) => {
  return createEventPage({ label, ...args });
};
const myNav = getNavString();
const myNode = getNodeString();

const myCalendar = getCalendarString();
const myTag = getTagString();
const myAPLFooter = getAPLFooterString();



//const myHero = getHeroString();
const myNavigationBar = getNavigationBarString();

export const NodePage = () => myNav + '<div class="column-2">' + myNode + '</div>';

export const TagPage = () => myNav + '<div class="column-2">' + myTag + '</div>';
export const TagPageWithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myTag + '</div></div>';
export const NodePageWithHeaderAndFooter = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myNode + '</div>' + myAPLFooter + '</div>';
export const CalendarPage = () => myCalendar;
