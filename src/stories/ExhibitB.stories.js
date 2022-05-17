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

export const Card2 = Template.bind({});
Card2.args = {
  display: 'card',
  field_ex_main_image: '/img/DeeperEast.png',
  title: 'Deeper East',
  artist: 'Artists of Seoul, Korea',
  location: 'Central Library Gallery | 710 W. César Chávez St.',
  time_start: 'April 24, 2022',
  time_end: 'May 14, 2022',
  about_exhibit: '<p><a href="https://www.showandtag.com/exhibition/view?key=485"><strong>PART ONE</strong></a><br>April 24 – May 14, 2022 | Artists of Seoul, Korea HONG soun &nbsp; – &nbsp; erin CHON &nbsp; – &nbsp; BYUN soonchoel &nbsp; – &nbsp; sangdon KIM &nbsp; – &nbsp; youngjoo CHO</p><p><a href="https://www.showandtag.com/exhibition/view?key=486"><strong>PART TWO</strong></a><br>May 17 – June 6, 2022 | Artists of Gwangju, Korea KIM sangyeon &nbsp; – &nbsp; KANG un &nbsp; – &nbsp; PARK il-ku &nbsp; – &nbsp; AN hee-jeong &nbsp; – &nbsp; JEONG jeong ha</p><p><strong><a href="https://library.austintexas.gov/central-library">Central Library Gallery</a></strong><br>710 W. César Chávez St. | 512-974-7400</p><p><a href="https://library.austintexas.gov/event/programs-workshops/deeper-east-closing-reception-7699843"><strong>Closing Reception</strong>&nbsp;</a><br>May 28, 2022, 2 – 3 PM | Dance Performance janet PARK</p><p>Paired with “Wider West”, the “Deeper East” exhibition was launched as an international intercity art exhibition program in 2018 by a Texas-based art consultancy, Shine Here. “Deeper East” introduces artists in Asian cities to Western cities while “Wider West” represents artists in Western cities to Asian cities.</p><p>In 2019, “Wider West” was held in Seoul showcasing eight artists from Texas, and “Deeper East” in Austin, a paired exhibition was postponed to 2022 due to a worldwide pandemic. The first part of “Deeper East” is a long-delayed paired exhibition from 2019 for five artists in Seoul, and the second part for five artists in Gwangju, South Korea. The next "Wider West" (dates TBD) will be held in Gwangju—a culturally enriched city in Joella-do, a southern province in South Korea.</p><p>A major advantage of virtual/digital exhibitions hosted by Shine Here is that it is very cost-efficient compared to traditional art exhibitions. These digital exhibitions are not meant to replace the existing format of an exhibition but rather to introduce more culturally diverse artists to the international stage in a more economical way.</p><p>Artists were selected from a list of recommendations from Shine Here’s panel of art professionals and affiliated partners in Korea. In most cases, each artist showcases a total of 20-25 pieces that are edited together.</p>',
  about_artist: '<p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilizes the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process that aptly communicates her South Asian American identity.</p>',
  sponsors: '<p>Instagram: @rjdartist</p><p>Website: <a href="http://www.rakheejaindesai.com">www.rakheejaindesai.com</a></p>',
  image_credit: '<p>Photo by Flash</p>'
};



