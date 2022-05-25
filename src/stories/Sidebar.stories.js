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

const WeRecommendHTML = `<div class="apl-sidebar flat views-element-container block block-views block-views-blocksections-block-11">
  
      <h2>We Recommend</h2>
    
      <div class="contextual-region"><div class="contextual-region view view-sections view-id-sections view-display-id-block_11 js-view-dom-id-affb564fa900343c56ecec95e0e9a77023222c2ec572ebe53661e68da1c5811d">
  
    <div data-contextual-id="entity.view.edit_form:view=sections:location=block&amp;name=sections&amp;display_id=block_11&amp;langcode=eng" data-contextual-token="EKfKW_5YPn6Jq2J7qCtMw7Pvp5A5dn7-c6rKoBV_c5o" data-once="contextual-render" class="contextual"><button class="trigger focusable visually-hidden" type="button" aria-pressed="false">Open  configuration options</button><ul class="contextual-links" hidden=""><li class="config-translationcontextual-linksentityviewconfig-translation-overview"><a href="/admin/structure/views/view/sections/translate?destination=/node/7692348">Translate view</a></li><li class="entityviewedit-form"><a href="/admin/structure/views/view/sections/edit/block_11?destination=/node/7692348">Edit view</a></li></ul></div>
      
      <div class="view-content">
          <div><div class="views-field views-field-body"><div class="field-content"><ul><li><a href="/recommended/titles">We Recommend Home</a></li>
	<li><a href="/recommended/whats-hot">What's Hot</a></li>
	<li><a href="https://austin.bibliocommons.com/explore/index/newly_acquired?f_on_order=false">New Titles</a></li>
	<li><a href="http://austin.bibliocommons.com/explore/index/awards">Awards</a></li>
	<li><a href="https://austin.bibliocommons.com/explore/index/best_sellers">Best Sellers</a></li>
	<li><a href="/events/book-clubs">Book Clubs</a></li>
	<li><a href="/recommended/reviews">Reviews</a></li>
	<li><a href="/recommended/world">World Language Books</a></li>
</ul><p><strong>More Recommendations</strong></p>

<p>Your local librarians have profiles in our catalog (BiblioCommons) to share our interests, what we’re reading and to create even more recommendation lists.&nbsp; Follow and like our profiles and learn more about <a href="http://library.austintexas.libguides.com/catalog/getsocial">getting social on our catalog</a>.</p>

<p><strong>Picks From Staff</strong></p>

<ul><li><a href="https://austin.bibliocommons.com/user_profile/128108121">Adult Librarians</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/646123587">Central Youth Librarians</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/342651137">Branch Staff</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/603054998">Austin History Center</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/138700411">Español</a></li>
</ul><p><strong>Neighborhood Branch Spotlight</strong></p>

<ul><li><a href="https://austin.bibliocommons.com/user_profile/368560258">Howson Branch</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/258629258">Milwood Branch</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/467421987">Yarborough Branch</a></li>
</ul></div></div></div>

    </div>
  
          </div>
</div>

  </div>`;
const Template = ({ title, ...args }) => {
  return createSidebar({ title, ...args });
};

export const Blog = () => mySidebar;
export const Events = () => myEventsNav;
export const Exhibits = () => myExhbitNav;
export const HomePageButtons = () => myHomePageButtons;
export const HomePageEvents = () => myHomePageEvents;
export const WeRecommendSidebar = () => WeRecommendHTML;
