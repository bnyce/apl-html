import { createExhibitPage, getExhibitPageString } from './ExhibitPage';
import { getNavString } from './Event';
import { getNavigationBarString } from './APLHeader';
import { getAPLFooterString } from './APLFooter';

export default {
  title: 'Exhibits/ExhibitPage',
};
const Template = ({ label, ...args }) => {
  return createExhibitPage({ label, ...args });
};
const myNav = getNavString();
const myExhibitPage = getExhibitPageString();

const myAPLFooter = getAPLFooterString();


const myNavigationBar = getNavigationBarString();

export const ExhibitPage = () => myNav + '<div class="column-2">' + myExhibitPage + '</div>';
export const ExhibitPageWithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>';
export const ExhibitPageWithHeaderAndFooter = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>' + myAPLFooter;
/*
export const TagPage = () => myNav + '<div class="column-2">' + myTag + '</div>';
export const TagPageWithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myTag + '</div></div>';
export const NodePageWithHeaderAndFooter = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibit + '</div>' + myAPLFooter + '</div>';
export const CalendarPage = () => myCalendar;
*/