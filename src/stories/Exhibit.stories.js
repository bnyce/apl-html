import { createExhibit, getExhibitNavString } from './Exhibit';
import { createExhibitPage, getExhibitPageString } from './ExhibitPage';
import './exhibits-sidebar.css';
export default {
  title: 'Exhibits/Exhibit',
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



const Template = ({ title, ...args }) => {
  return createExhibit({ title, ...args });
};

const myEx = getExhibitPageString();

export const Sidebar = () => myExhbitNav;

export const BeenWild = Template.bind({});
BeenWild.args = {
  title: 'It’s Been WILD',
  body: '<p>Rakhee Jain Desai<br>May – <span><span>July 10</span></span>, 2022</p><p><a href="https://library.austintexas.gov/central-library">Central Library</a> 6th Floor | 710 W. César Chávez St.&nbsp;</p><p>Flowers can communicate strong emotions and can also be appreciated for their simplistic beauty. At key moments of our lives, we exchange ﬂowers as symbols of love, sympathy, and celebration. Over the past few years, in the absence of ceremonies, I paused to examine the traditions, rituals and other countless occasions when cut ﬂowers are used to decorate ceremonies - adorn the deceased or embellish a bridal altar.</p><p>The wildﬂowers depicted here are not explored within the context of their natural environment or the prim and trimmed specimens of the ﬂorist, but instead these quirky wild ones with all their ﬂaws were plucked from my pandemic walks, a representation of the uncertainties we’ve experienced, as well as the beauty of a spontaneous agenda. Serendipity. For me, painting a bouquet of wildﬂowers and capturing their unruly folds and colors has been a meditative and life-afﬁrming act. Their impermanent beauty and joy giving in to the sweltering summer heat only to regenerate yet again.</p><p>It was never a goal to accurately express their ephemeral beauty. These bouquets show up as synesthetic explosions of senses - possibly ﬁnding a moment of stillness, a split second to be present amidst a chaotic world.</p><p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilizes the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process that aptly communicates her South Asian American identity.</p><p>Instagram: @rjdartist</p><p>Website: <a href="http://www.rakheejaindesai.com">www.rakheejaindesai.com</a></p>',
  field_ex_main_image: '/img/exhibit.png'
};

export const DeeperEast = Template.bind({});
DeeperEast.args = {
  title: 'DeeperEast',
  body: '<p><a href="https://www.showandtag.com/exhibition/view?key=485"><strong>PART ONE</strong></a><br>April 24 – May 14, 2022 | Artists of Seoul, Korea HONG soun &nbsp; – &nbsp; erin CHON &nbsp; – &nbsp; BYUN soonchoel &nbsp; – &nbsp; sangdon KIM &nbsp; – &nbsp; youngjoo CHO</p><p><a href="https://www.showandtag.com/exhibition/view?key=486"><strong>PART TWO</strong></a><br>May 17 – June 6, 2022 | Artists of Gwangju, Korea KIM sangyeon &nbsp; – &nbsp; KANG un &nbsp; – &nbsp; PARK il-ku &nbsp; – &nbsp; AN hee-jeong &nbsp; – &nbsp; JEONG jeong ha</p><p><strong><a href="https://library.austintexas.gov/central-library">Central Library Gallery</a></strong><br>710 W. César Chávez St. | 512-974-7400</p><p><a href="https://library.austintexas.gov/event/programs-workshops/deeper-east-closing-reception-7699843"><strong>Closing Reception</strong>&nbsp;</a><br>May 28, 2022, 2 – 3 PM | Dance Performance janet PARK</p><p>Paired with “Wider West”, the “Deeper East” exhibition was launched as an international intercity art exhibition program in 2018 by a Texas-based art consultancy, Shine Here. “Deeper East” introduces artists in Asian cities to Western cities while “Wider West” represents artists in Western cities to Asian cities.</p><p>In 2019, “Wider West” was held in Seoul showcasing eight artists from Texas, and “Deeper East” in Austin, a paired exhibition was postponed to 2022 due to a worldwide pandemic. The first part of “Deeper East” is a long-delayed paired exhibition from 2019 for five artists in Seoul, and the second part for five artists in Gwangju, South Korea. The next "Wider West" (dates TBD) will be held in Gwangju—a culturally enriched city in Joella-do, a southern province in South Korea.</p><p>A major advantage of virtual/digital exhibitions hosted by Shine Here is that it is very cost-efficient compared to traditional art exhibitions. These digital exhibitions are not meant to replace the existing format of an exhibition but rather to introduce more culturally diverse artists to the international stage in a more economical way.</p><p>Artists were selected from a list of recommendations from Shine Here’s panel of art professionals and affiliated partners in Korea. In most cases, each artist showcases a total of 20-25 pieces that are edited together.</p>',
  field_ex_main_image: '/img/DeeperEast.png'
};

export const SacredSprings = Template.bind({});
SacredSprings.args = {
  title: 'The Sacred Springs Kite Exhibition',
  body: '<p>An exhibition of dozens of kites created by artists and representing the connection between water and life in Texas,&nbsp;<strong>The Sacred Springs Kite Exhibition</strong>, will be on display at Austin Central Library starting May 6, 2022. The exhibition, set to hang over library visitors in the Central Library’s six-story atrium space, is a collaboration between Austin Public Library; Art4Water, a program of the Watershed Association; and Terry Zee Lee, a national facilitator and curator of kite exhibitions and events.<br><br>“Austin Central Library, located where Shoal Creek feeds into Lady Bird Lake and about a mile from Barton Springs, is the perfect location for the community to experience an exhibition on the connection between Texas waters and our lives,” stated Austin Public Library Director Roosevelt Weeks. “We are proud to be able to host these beautiful artworks in our space and connect the community with these artists’ important messages.”<br><br>The kites, which will be hung from the rafters of the LEED Platinum Certified Central Library, were selected from submissions from over 200 artists to be fabricated into large flying works of art inspired by Texas’s natural springs and the message of water conservation.<br><br>The exhibition will be visible throughout the Central Library, and is scheduled to be on display through November, 2022. A free opening reception is scheduled from 7:00pm – 9:00pm on May 6, 2022 at the Central Library, featuring presentations from the sponsors of the event and several of the featured artists, as well as tours of the exhibition.<br>&nbsp;</p><blockquote><p><strong>Sacred Springs Kite Exhibition Opening Reception</strong><br>May 6, 2022 7:00 pm - 9:00 pm<br>Austin Central Library, 6th&nbsp;Floor<br>710 W. Cesar Chavez St.<br>Austin, TX 78701<br>Free and open to the public</p></blockquote><p><br>“Clean and plentiful water serves as the lifeblood of our communities - our Texas Springs are vital gathering places for community connection and relief from the summer heat,” stated David Baker, Executive Director of the Watershed Association. “What would Austin be without Barton Springs at the heart and soul of our city?”<br><br>More information about the exhibition is available at:&nbsp;<a href="http://www.art4water.com/">www.art4water.com</a></p>',
  field_ex_main_image: '/img/SacredSprings.png'
};

