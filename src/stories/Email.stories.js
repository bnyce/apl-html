import { createEmail } from './Email';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/SLR/Email',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    internal: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createEmail({ label, ...args });
};

//export const SLRConfirmed = Template.bind({});
export const SLRConfirmed = () => '<div>Subject:<p>Thank you for reserving a shared learning room at Central Library</p></div><div>Body:' + '<p style="color:black;">Thank you for making a shared learning room reservation at Central Library, which is located at 710 W Cesar Chavez St, Austin, TX 78701.</p><p style="color:black;"><span class="deets" style="color:black">Room: Shared Learning - 508</span><br /><span class="deets" style="color:black">Date: Wednesday, May 11, 2022</span><br /><span class="deets" style="color:black">Start Time: 3:00 PM</span><br /><span class="deets" style="color:black">End Time: 5:00 PM</span><br /><span class="deets" style="color:black">Name: Kenneth Flores</span><br /><span class="deets" style="color:black">Topic: MicroEcon</span><br /><span class="deets" style="color:black">Status: Confirmed</span></p><p style="color:black;">By booking a room, you agree to abide by the <a href="http://austinlibrary.com/downloads/shared_learning_rooms_policy.pdf">shared learning room policy</a>.</p><p style="color:black;">Don&#39;t need the room anymore? <a href="https://library.austintexas.gov/webform/shared_learning_room_reservation/submissions/[webform_submission:sid]/delete?token=[webform_submission:token]">Cancel</a> before your reservation time so someone else can book your room.</p><p style="color:black;">Questions? Call 512-974-7400 (option 1) or <a href="http://library.austintexas.libanswers.com/">Ask a Librarian</a>.</p></div>';
export const SLRConfirmedSettings = () => '<div>Subject:<p>Thank you for reserving a shared learning room at Central Library</p></div><div>Body:' + '<p style="color:black;">Thank you for making a shared learning room reservation at Central Library, which is located at 710 W Cesar Chavez St, Austin, TX 78701.</p><p style="color:black;"><span class="deets" style="color:black">Room: [webform_submission:values:room:entity:name]</span><br /><span class="deets" style="color:black">Date: [webform_submission:values:reservation_date:just_date]</span><br /><span class="deets" style="color:black">Start Time: [webform_submission:values:time_start:just_time]</span><br /><span class="deets" style="color:black">End Time: [webform_submission:values:time_end:just_time]</span><br /><span class="deets" style="color:black">Name: [webform_submission:values:full_name]</span><br /><span class="deets" style="color:black">Topic: [webform_submission:values:meeting_topic]</span><br /><span class="deets" style="color:black">Status: Confirmed</span></p><p style="color:black;">By booking a room, you agree to abide by the <a href="http://austinlibrary.com/downloads/shared_learning_rooms_policy.pdf">shared learning room policy</a>.</p><p style="color:black;">Don&#39;t need the room anymore? <a href="https://library.austintexas.gov/webform/shared_learning_room_reservation/submissions/[webform_submission:sid]/delete?token=[webform_submission:token]">Cancel</a> before your reservation time so someone else can book your room.</p><p style="color:black;">Questions? Call 512-974-7400 (option 1) or <a href="http://library.austintexas.libanswers.com/">Ask a Librarian</a>.</p></div>';


export const SecondaryEmail = Template.bind({});
SecondaryEmail.args = {
  label: 'Email',
};
