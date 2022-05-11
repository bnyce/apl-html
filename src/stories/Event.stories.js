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

export const EventSnippet = () => '<div class="apl-event"><div class="field-title"><a href="/event/all-ages-storytime/all-ages-storytime-7700550" hreflang="eng">All Ages Storytime</a></div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM</div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div></div>';