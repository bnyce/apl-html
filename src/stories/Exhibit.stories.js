import { createExhibit, getExhibitString } from './Exhibit';

export default {
  title: 'Exhibits/Exhibit',
  argTypes: { 
      field_ex_main_image: { control: { type: 'file', accept: ['.png','.jpg'] } }}
};

const Template = ({ title, ...args }) => {

  return createExhibit({ title, ...args });
};

export const BeenWild = Template.bind({});
BeenWild.args = {
  title: 'It’s Been WILD',
  body: 'example text<br/>crayz',
  field_ex_main_image: '/img/exhibit.png' 
};