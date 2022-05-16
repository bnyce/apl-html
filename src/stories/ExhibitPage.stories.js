import { createExhibitPage, getExhibitPageString, getExhibit1String, getExhibit2String, getExhibit3String } from './ExhibitPage';
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

const myExhibit1 = '<img src="/img/exhibit.png"><h1 class="exhibit-title"><a>It’s Been WILD</a></h1>' + getExhibit1String();
const myExhibit2 = '<img src="/img/DeeperEast.png"><h1 class="exhibit-title"><a>Deeper East</a></h1>' + getExhibit2String();
const myExhibit3 = '<img src="/img/SacredSprings.png"><h1 class="exhibit-title"><a>The Sacred Springs Kite Exhibition</a></h1>' + getExhibit3String();

const myAPLFooter = getAPLFooterString();


const myNavigationBar = getNavigationBarString();

export const CurrentExhibits = () => myNav + '<div class="column-2">' + myExhibitPage + '</div>';
export const WithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>';
export const WithHeaderAndFooter = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>' + myAPLFooter;
export const WithHeaderAndFooterB = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibit1 + myExhibit2 + myExhibit3 + '</div></div>' + myAPLFooter;
