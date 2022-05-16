import { createExhibitB, getExhibitNavString } from './ExhibitB';
import { createExhibitPage, getExhibitPageString } from './ExhibitPage';
//import { getExhibitNavString } from './Exhibit';

import './exhibits-sidebar.css';
export default {
  title: 'Exhibits B/Exhibit B',
  argTypes: { 
      field_ex_main_image: { control: { type: 'file', accept: ['.png','.jpg'] } },
      time_start: {
          control: 'text',
          defaultValue: 'January 1, 2020'
      },
      time_end: {
          control: 'text',
          defaultValue: 'June 16, 2021'
      }
  }
};



const myExhbitNav = getExhibitNavString();

export const Sidebar = () => myExhbitNav;

const Template = ({ title, ...args }) => {
  return createExhibitB({ title, ...args });
};

const myEx = getExhibitPageString();

//export const Sidebar = () => myExhbitNav;

export const MockUp = Template.bind({});
MockUp.args = {
  display: 'individual',
  field_ex_main_image: '/img/exhibit.png',
  title: 'It’s Been WILD',
  artist: 'Rakhee Jain Desai',
  location: 'Central Library 6th Floor | 710 W. César Chávez St.',
  time_start: 'January 1, 2022',
  time_end: 'July 11, 2022',
  about_exhibit: '<p>Flowers can communicate strong emotions and can also be appreciated for their simplistic beauty. At key moments of our lives, we exchange ﬂowers as symbols of love, sympathy, and celebration. Over the past few years, in the absence of ceremonies, I paused to examine the traditions, rituals and other countless occasions when cut ﬂowers are used to decorate ceremonies - adorn the deceased or embellish a bridal altar.</p><p>The wildﬂowers depicted here are not explored within the context of their natural environment or the prim and trimmed specimens of the ﬂorist, but instead these quirky wild ones with all their ﬂaws were plucked from my pandemic walks, a representation of the uncertainties we’ve experienced, as well as the beauty of a spontaneous agenda. Serendipity. For me, painting a bouquet of wildﬂowers and capturing their unruly folds and colors has been a meditative and life-afﬁrming act. Their impermanent beauty and joy giving in to the sweltering summer heat only to regenerate yet again.</p><p>It was never a goal to accurately express their ephemeral beauty. These bouquets show up as synesthetic explosions of senses - possibly ﬁnding a moment of stillness, a split second to be present amidst a chaotic world.</p>',
  about_artist: '<p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilizes the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process that aptly communicates her South Asian American identity.</p>',
  sponsors: '<p>Instagram: @rjdartist</p><p>Website: <a href="http://www.rakheejaindesai.com">www.rakheejaindesai.com</a></p>',
  image_credit: '<p>Photo by Flash</p>'
};
export const Card = Template.bind({});
Card.args = {
  display: 'card',
  field_ex_main_image: '/img/exhibit.png',
  title: 'It’s Been WILD',
  artist: 'Rakhee Jain Desai',
  location: 'Central Library 6th Floor | 710 W. César Chávez St.',
  time_start: 'January 1, 2022',
  time_end: 'July 11, 2022',
  about_exhibit: '<p>Flowers can communicate strong emotions and can also be appreciated for their simplistic beauty. At key moments of our lives, we exchange ﬂowers as symbols of love, sympathy, and celebration. Over the past few years, in the absence of ceremonies, I paused to examine the traditions, rituals and other countless occasions when cut ﬂowers are used to decorate ceremonies - adorn the deceased or embellish a bridal altar.</p><p>The wildﬂowers depicted here are not explored within the context of their natural environment or the prim and trimmed specimens of the ﬂorist, but instead these quirky wild ones with all their ﬂaws were plucked from my pandemic walks, a representation of the uncertainties we’ve experienced, as well as the beauty of a spontaneous agenda. Serendipity. For me, painting a bouquet of wildﬂowers and capturing their unruly folds and colors has been a meditative and life-afﬁrming act. Their impermanent beauty and joy giving in to the sweltering summer heat only to regenerate yet again.</p><p>It was never a goal to accurately express their ephemeral beauty. These bouquets show up as synesthetic explosions of senses - possibly ﬁnding a moment of stillness, a split second to be present amidst a chaotic world.</p>',
  about_artist: '<p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilizes the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process that aptly communicates her South Asian American identity.</p>',
  sponsors: '<p>Instagram: @rjdartist</p><p>Website: <a href="http://www.rakheejaindesai.com">www.rakheejaindesai.com</a></p>',
  image_credit: '<p>Photo by Flash</p>'
};




