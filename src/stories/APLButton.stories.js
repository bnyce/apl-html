import { createAPLButton } from './APLButton';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'APL/APLButton',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
 //   onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    audience: {
      control: { type: 'select' },
      options: ['children', 'teen', 'adult'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createAPLButton({ label, ...args });
};

export const Adult = Template.bind({});
Adult.args = {
  label: 'Adult',
  audience: 'adult',
};
export const Children = Template.bind({});
Children.args = {
  label: 'Children',
  audience: 'children',
};
export const Teen = Template.bind({});
Teen.args = {
  label: 'Teen',
  audience: 'teen',
};