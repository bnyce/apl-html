import { createExhibit } from './Exhibit';

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
  body: '<div class="exhibit-body"><p>Rakhee Jain Desai<br>May – <span><span>July 10</span></span>, 2022</p><p><a href="https://library.austintexas.gov/central-library">Central Library</a> 6th Floor | 710 W. César Chávez St.&nbsp;</p><p>Flowers can communicate strong emotions and can also be appreciated for their simplistic beauty. At key moments of our lives, we exchange ﬂowers as symbols of love, sympathy, and celebration. Over the past few years, in the absence of ceremonies, I paused to examine the traditions, rituals and other countless occasions when cut ﬂowers are used to decorate ceremonies - adorn the deceased or embellish a bridal altar.</p><p>The wildﬂowers depicted here are not explored within the context of their natural environment or the prim and trimmed specimens of the ﬂorist, but instead these quirky wild ones with all their ﬂaws were plucked from my pandemic walks, a representation of the uncertainties we’ve experienced, as well as the beauty of a spontaneous agenda. Serendipity. For me, painting a bouquet of wildﬂowers and capturing their unruly folds and colors has been a meditative and life-afﬁrming act. Their impermanent beauty and joy giving in to the sweltering summer heat only to regenerate yet again.</p><p>It was never a goal to accurately express their ephemeral beauty. These bouquets show up as synesthetic explosions of senses - possibly ﬁnding a moment of stillness, a split second to be present amidst a chaotic world.</p><p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilizes the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process that aptly communicates her South Asian American identity.</p><p>Instagram: @rjdartist</p><p>Website: <a href="http://www.rakheejaindesai.com">www.rakheejaindesai.com</a></p></div>',
  field_ex_main_image: '/img/exhibit.png'
};