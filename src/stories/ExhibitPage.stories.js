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
const stringLimit = 700;

const myExhibit1 = '<h1 class="exhibit-title"><a>It’s Been WILD</a></h1><div class="dates">September 04, 2021 – February 20, 2022</div><img src="/img/exhibit.png">' + getExhibit1String().substring(0, stringLimit) + '...';
const myExhibit2 = '<h1 class="exhibit-title"><a>Deeper East</a></h1><div class="dates">September 04, 2021 – February 20, 2022</div><img src="/img/DeeperEast.png">' + getExhibit2String().substring(0, stringLimit) + '...';
const myExhibit3 = '<h1 class="exhibit-title"><a>The Sacred Springs Kite Exhibition</a></h1><div class="dates">September 04, 2021 – February 20, 2022</div><img src="/img/SacredSprings.png">' + getExhibit3String().substring(0, stringLimit) + '...';

const myAPLFooter = getAPLFooterString();


const myNavigationBar = getNavigationBarString();

export const CurrentExhibits = () => myNav + '<div class="column-2">' + myExhibitPage + '</div>';
export const WithHeader = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>';
export const WithHeaderAndFooter = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibitPage + '</div></div>' + myAPLFooter;
export const WithHeaderAndFooterB = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2">' + myExhibit1 + myExhibit2 + myExhibit3 + '</div></div>' + myAPLFooter;
