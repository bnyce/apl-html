import './sidebar.css';
import './home-page-buttons.css';

export function getSidebarString() {
    const SidebarString = '<div class="apl-sidebar blog"> <div class="view-header"> <h2><a href="/blog">Blog</a></h2> </div><div class="view-content"> <div class="views-row"><div><span><a href="/blog/austin-public-library-statement-book-banning-and-library-censorship" hreflang="eng">Austin Public Library Statement on Book Banning and Library Censorship</a></span></div></div></div></div>';
    return SidebarString;
}

export function getHomePageButtons() {
    const HomePageButtons = '<ul id="apl-buttons"><li id="apl-button1"><h2><a href="https://austin.bibliocommons.com/user/login?destination=%2Fdashboard%2Fuser_dashboard"><span class="apl-nav1">My Account</span> <span class="ayo apl-nav2">Holds, renewals, fines</span></a></h2></li><li id="apl-button5"><h2><a href="/aplplus"><span class="apl-nav1">APL+ Video Shorts</span> <span class="apl-nav2">Book Talks, Crafts, Cooking &amp; More</span></a></h2></li><li id="apl-button2"><h2><a href="/virtual"><span class="apl-nav1">Virtual Library</span> <span class="apl-nav2">eBooks and streaming media</span></a></h2></li><li id="apl-button3"><h2><a href="/mylibrarycard"><span class="apl-nav1">Library Card</span> <span class="apl-nav2">Sign Up &amp; Renew Now</span></a></h2></li><li id="apl-button4"><h2><a href="/meeting-rooms"><span class="apl-nav1">Meeting Rooms</span> <span class="apl-nav2">Reserve a Space</span></a></h2></li></ul>';
    return HomePageButtons;
}

export const createSidebar = ({
  internal = false,
  subject,
  body,
  onClick,
}) => {
  const sdbr = document.createElement('div');
 
  return sdbr;
};
