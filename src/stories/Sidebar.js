import './sidebar.css';
import './home-page-buttons.css';

export function getSidebarString() {
    const SidebarString = '<div class="apl-sidebar blog"> <div class="view-header"> <h2><a href="/blog">Blog</a></h2> </div><div class="view-content"> <div class="views-row"><div><span><a href="/blog/austin-public-library-statement-book-banning-and-library-censorship" hreflang="eng">Austin Public Library Statement on Book Banning and Library Censorship</a></span></div></div></div></div>';
    return SidebarString;
}

export function getHomePageEvents() {
    const HomePageEvents = '<div class="apl-sidebar events home"> <h2>Upcoming Events</h2> <div><div class="apl-events view view-events view-id-events view-display-id-block_4 js-view-dom-id-241144e399f692df93a83979e66d7d38f8c94b8349c00f8ebc66f16e61f27108"> <div class="view-content"> <div class="apl-event-row"><div class="views-field views-field-nid"><span class="field-content"><div class="apl-event"><div class="field-title"><a href="/event/afternoon-book-club-7699444" hreflang="eng">Afternoon Book Club</a></div><div class="field-event-date"><i class="material-icons-outlined">schedule</i><span class="datetime">Tuesday, May 17 - 1:30 PM to 3:30 PM</span></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><span class="apl-loc">Spicewood Springs Branch</span></div></div></span></div></div><div class="apl-event-row"><div class="views-field views-field-nid"><span class="field-content"><div class="apl-event"><div class="field-title"><a href="/event/talk-time/talk-time-7700302" hreflang="eng">Talk Time</a></div><div class="field-event-date"><i class="material-icons-outlined">schedule</i><span class="datetime">Tuesday, May 17 - 1:30 PM to 2:30 PM</span></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><span class="apl-loc">Little Walnut Creek Branch</span></div></div></span></div></div><div class="apl-event-row"><div class="views-field views-field-nid"><span class="field-content"><div class="apl-event"><div class="field-title"><a href="/event/steeped-books/steeped-books-7700260" hreflang="eng">Steeped In Books</a></div><div class="field-event-date"><i class="material-icons-outlined">schedule</i><span class="datetime">Tuesday, May 17 - 2:00 PM to 4:00 PM</span></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><span class="apl-loc">Hampton Branch at Oak Hill</span></div></div></span></div></div><div class="apl-event-row"><div class="views-field views-field-nid"><span class="field-content"><div class="apl-event"><div class="field-title"><a href="/event/lego-lab/lego-lab-7699998" hreflang="eng">Lego Lab</a></div><div class="field-event-date"><i class="material-icons-outlined">schedule</i><span class="datetime">Tuesday, May 17 - 3:30 PM to 4:30 PM</span></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><span class="apl-loc">Willie Mae Kirk Branch</span></div></div></span></div></div></div><div class="view-footer"> <a class="apl-button primary" href="/events">More upcoming events</a> </div></div></div></div>';
    return HomePageEvents;
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
