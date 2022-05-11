import { createEvent } from './Event';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Events/Event',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
 
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

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createEvent({ label, ...args });
};

//export const SLRConfirmed = Template.bind({});
//Awaiting Confirmation: Your shared learning room at Central Library

export const EventSnippet = () => '<div class="apl-event apl-event-snippet"><div class="field-title"><a href="/event/all-ages-storytime/all-ages-storytime-7700550" hreflang="eng">All Ages Storytime</a></div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM</div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div></div>';

export const EventNode = () => '<div class="apl-event apl-event-node"><div class="field-title">All Ages Storytime</div><div class="apl-event-summary"><div class="apl-event-summary"></div></div><p>Storytime for children aged 5 and under and their parents, featuring stories, songs, fingerplays, rhymes, and crafts or other extension activities. Program length can vary.</p><p>Programs begin on time, for best experience we recommend you do too! Please arrive a few minutes early to gain entrance. Note that in some locations, free tickets (available in the branch on the day of the program) will be required for admittance. Contact individual branches to arrange group visits of 5 or more children to storytimes.</p><div class="apl-rec-age">Recommended for ages 5 and under </div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM </div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div><div class="apl-free">Free and open to the public | Gratis y abierto al público</div><div class="apl-event-tags">Tags: <a class="usa-button usa-button-outline" href="/events?f[0]=audience_%3A32">Children</a> <a class="usa-button usa-button-outline" href="/events/all-ages-storytime">All Ages Storytime</a> </div></div>';