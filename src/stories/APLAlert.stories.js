import { createAPLAlert } from './APLAlert';
import { createAPLHeader, getNavigationBarString, getHeroString } from './APLHeader';

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
const easyAlert = `<div class="apl-alert"><div class="home apl-alert-row"><span class="material-icons-round">warning</span><div class="alert-headline">Our website is currently undergoing updates and some information may be temporarily unavailable or inaccurate. Please contact us by phone or email if you have any questions. We apologize for the inconvenience.</div></div></div>`;
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
  zone: 'virtual',
};
export const Alert = Template.bind({});
Alert.args = {
  headline: 'Our website is currently undergoing updates and some information may be temporarily unavailable or inaccurate. Please contact us by phone or email if you have any questions. We apologize for the inconvenience.',
  time_start: '02/17/2022',
  time_end: '03/27/2022',
  zone: 'home',
};
const myNavigationBar = getNavigationBarString();

export const APLHeader = () => myNavigationBar;
export const WithHeader = () => myNavigationBar + easyAlert;
