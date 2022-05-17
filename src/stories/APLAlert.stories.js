import { createAPLAlert } from './APLAlert';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'APL/APLAlert',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    headline: { 
        description: 'alert text',
        control: 'text' },
 //   onClick: { action: 'onClick' },
    button_text: { control: 'text' },
    button_url: { control: 'text' },
    time_start: { control: 'text' },
    time_end: { control: 'text' },
    zone: { control: 'text'}
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${headline}</div>`;
  return createAPLAlert({ ...args });
};

export const Libby = Template.bind({});
Libby.args = {
  headline: 'Try the Libby app for OverDrive eBooks, audiobooks and magazines. Available on iOS and Android.',
  button_text: 'Meet Libby!',
  button_url: 'https://meet.libbyapp.com/',
  time_start: '02/17/2022',
  time_end: '03/27/2022',
  zone: 'home',
};