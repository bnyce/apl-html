import { createMrEmail } from './MrEmail';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Meeting Rooms/Email',
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
  return createEmail({ label, ...args });
};

//export const SLRConfirmed = Template.bind({});
export const PublicConfirmed = () => '<div>Subject:<p>Confirmed: Austin Public Library room request</p></div><div>Body:' + '<p style="color:black">Confirmed: Austin Public Library room request</p><p style="color:black">Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Confirmed</p><p style="color:black;">Don&#39;t need the room anymore? <a href="https://library.austintexas.gov/webform/meeting_room_reservation_request/submissions/[webform_submission:sid]/delete?token=[webform_submission:token]">Cancel</a> before your reservation time so someone else can book your room.</p></div>';

export const InternalConfirmed = () => '<div>Subject:<p>Confirmed: Austin Public Library room request</p></div><div>Body:' + '<p style="color:black">Confirmed: Austin Public Library room request</p><p style="color:black">Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Confirmed</p><p style="color:black;">Don&#39;t need the room anymore? <a href="https://library.austintexas.gov/webform/meeting_room_reservation_request/submissions/[webform_submission:sid]/delete?token=[webform_submission:token]">Cancel</a> before your reservation time so someone else can book your room.</p></div>';

export const PublicAwaiting = () => '<div>Subject:<p>Awaiting Confirmation: Austin Public Library room request</p></div><div>Body:' + '<p style="color:black">Awaiting Confirmation: Austin Public Library room request<br/><br/>We will process your request within two business days.</p><p style="color:black">Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Awaiting Confirmation</p><p style="color:black;">Don&#39;t need the room anymore? <a href="https://library.austintexas.gov/webform/meeting_room_reservation_request/submissions/[webform_submission:sid]/delete?token=[webform_submission:token]">Cancel</a> before your reservation time so someone else can book your room.</p></div>';

export const PublicDeleted = () => '<div>Subject:<p>Canceled: Austin Public Library room request</p></div><div>Body:' + '<p style="color:black">Canceled: Austin Public Library room request</p><p style="color:black">Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Canceled</p></div>';

export const PublicCanceled = () => '<div>Subject:<p>Canceled: Austin Public Library room request</p></div><div>Body:' + '<p style="color:black">Canceled: Austin Public Library room request<br/><br/>[webform_submission:values:message_to_customer]</p><p style="color:black">Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Canceled</p></div>';

export const PublicDenied = () => '<div>Subject:<p>Denied: Austin Public Library room request</p></div><div>Body:' + '<p style="color:black">Denied: Austin Public Library room request<br/><br/>[webform_submission:values:message_to_customer]</p><p style="color:black">Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Denied</p></div>';


export const MRAAwaiting = () => '<div>Subject:<p>Awaiting Confirmation: [webform_submission:values:group_name] room request</p></div><div>Body:' + '<p>Group: [webform_submission:values:group_name]<br/>Topic: [webform_submission:values:topic]<br/>Expected attendance: [webform_submission:values:expected_attendance]<br/>Location: [webform_submission:values:location:entity:name]<br/>Room: [webform_submission:values:meeting_room:entity:name]<br/>Date: [webform_submission:values:date:just_date] - [webform_submission:values:date_time_start:just_time] to [webform_submission:values:date_time_end:just_time]<br/>Status: Awaiting Confirmation<br/><br/>Update this request:<br/>https://library.austintexas.gov/admin/structure/webform/manage/meeting_room_reservation_request/submission/[webform_submission:sid]/edit?destination=/meeting-rooms/list%3Fwebform_submission_value_2%3D1%26loc%3D194</p></div>';
