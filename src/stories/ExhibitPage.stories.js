import { createExhibitPage, getExhibitPageString } from './ExhibitPage';
import { getNavString } from './Event';
import { getNavigationBarString } from './APLHeader';
import { getAPLFooterString } from './APLFooter';

export default {
  title: 'Exhibits/Pages',
};
const Template = ({ label, ...args }) => {
  return createExhibitPage({ label, ...args });
};
const myNav = getNavString();
const myExhibitPage = getExhibitPageString();

const myAPLFooter = getAPLFooterString();


const myNavigationBar = getNavigationBarString();

export const CurrentExhibits = () => myNav + '<div class="column-2">' + myExhibitPage + '</div>';
export const WithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>';
export const WithHeaderAndFooter = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>' + myAPLFooter;
