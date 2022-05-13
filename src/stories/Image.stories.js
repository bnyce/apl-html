import { createImage } from './Image';

export default {
  title: 'APL/Image',
};

const Template = (args) => createImage(args);
export const KidsBlockParty = Template.bind({});
KidsBlockParty.args = {
    alt: 'Kids Block Party',
    src: '/img/image.png'
};


