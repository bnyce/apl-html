import { createExhibit, getExhibitString } from './Exhibit';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Exhibits/Exhibit',
  argTypes: { 
      field_ex_main_image: { control: { type: 'file', accept: ['.png','.jpg'] } }}
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ title, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createExhibit({ title, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  title: 'It’s Been WILD',
  body: 'example text<br/>crayz'
};


/*
const myExhibit = getExhibitString();
export const Exhibit = () => myExhibit;
*/