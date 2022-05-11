import { createEvent, getNodeString, getNavString } from './Event';

export default {
  title: 'Events/Event',
 
 argTypes: {
//  label: { control: 'text' },
//  onClick: { action: 'onClick' },
    internal: { control: 'boolean' },
/*    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }, */
  },
  
};

const Template = ({ label, ...args }) => {
  return createEvent({ label, ...args });
};

export const Snippet = () => '<div class="apl-event apl-event-snippet"><div class="field-title"><a href="/event/all-ages-storytime/all-ages-storytime-7700550" hreflang="eng">All Ages Storytime</a></div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM</div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div></div>';

//export const Node = () => '<div class="apl-event apl-event-node"><div class="field-title">All Ages Storytime</div><div class="apl-event-summary"><div class="apl-event-summary"></div></div><p>Storytime for children aged 5 and under and their parents, featuring stories, songs, fingerplays, rhymes, and crafts or other extension activities. Program length can vary.</p><p>Programs begin on time, for best experience we recommend you do too! Please arrive a few minutes early to gain entrance. Note that in some locations, free tickets (available in the branch on the day of the program) will be required for admittance. Contact individual branches to arrange group visits of 5 or more children to storytimes.</p><div class="apl-rec-age">Recommended for ages 5 and under </div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM </div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div><div class="apl-free">Free and open to the public | Gratis y abierto al público</div><div class="apl-event-tags">Tags: <a class="usa-button usa-button-outline" href="/events?f[0]=audience_%3A32">Children</a> <a class="usa-button usa-button-outline" href="/events/all-ages-storytime">All Ages Storytime</a> </div></div>';
export const Node = () => getNodeString();
export const NodeWithImage = () => '<div class="apl-event apl-event-node"><img id="apl-main-image" src="https://library.austintexas.gov/library/580x355web.png" alt="Kids Block Party" loading="lazy" typeof="Image" width="581" height="356"><div class="field-title">Kids Block Party 2022</div><div class="apl-event-summary"><p><span><span><span>The Kids Block Party is back! <strong>Join us on Saturday, May 14</strong> for family-friendly activities for kids 0 – tweens!</span></span></span></p><p><span><span><span>Learn more about the event details in the&nbsp;<a href="https://library.austintexas.gov/press-release/kids-block-party-back-7699962">Kids Block Party Agenda</a>.</span></span></span></p></div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Saturday, May 14, 2022 - 9:00 AM to 12:30 PM </div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St. </div></div><div class="apl-free">Free and open to the public | Gratis y abierto al público</div><div class="apl-event-tags">Tags: <a class="usa-button usa-button-outline" href="/events?f[0]=audience_%3A32">Children</a> <a class="usa-button usa-button-outline" href="/events/youth-programs-workshops">Youth Programs &amp; Workshops</a> </div></div>';
export const Navigation = () => getNavString();