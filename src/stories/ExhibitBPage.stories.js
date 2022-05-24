import { createExhibitBPage, getExhibitBPageString, getExhibitB1String, getExhibitB2String, getExhibitB3String } from './ExhibitBPage';
import { getNavString } from './Event';
import { Sidebar } from './ExhibitB.stories';
import { getNavigationBarString } from './APLHeader';
import { getAPLFooterString } from './APLFooter';

export default {
  title: 'Exhibits B/Pages',
};
const Template = ({ label, ...args }) => {
  return createExhibitBPage({ label, ...args });
};
//const myNav = getNavString();
const myExhibitBPage = getExhibitBPageString();
const stringLimit = 700;

const myNav = '<div class="apl-sidebar exhibits" id="apl-exhibits-sidebar"><h2>Art & Culture Exhibits</h2><ul id="apl-exhibits-nav"><li><a class="active" href="/events">Current</a></li><li><a href="/events/calendar">Future</a></li><li><a href="/events/exhibits">Past</a></li></ul></div>';
const myExhibit1 = `<div class="view-content">
    <div class="views-row"><div class="views-field views-field-operations"><span class="field-content"></span></div><div class="views-field views-field-nid"><span class="field-content"><div class="apl-exhibit apl-card">
      <img src="https://library.austintexas.gov/library/exhibit/web580x355_2.png" width="581" height="356" alt="RON GEIBEL Image: Call Waitinglandscape" loading="lazy" typeof="Image">


    <div class="exhibit-copy">
        <h1 class="exhibit-title">landscape</h1>
        <h3 class="exhibit-artist">Ron Geibel</h3>
       <div class="exhibit-time-and-location">
        <h3 class="exhibit-time"><i class="material-icons-outlined">schedule</i><span>June 16, 2022
 - August 14, 2022
</span></h3>
        <h3 class="exhibit-location"><i class="material-icons-outlined">place</i><span><a href="/central-library" hreflang="eng">Central Library</a> - 710 W. César Chávez St.
<br>Living Room (6th Floor) </span></h3></div>
        <div class="more"><a class="more">more...</a>
            <div class="apl-details">
                <h3 class="about-exhibit">About the Exhibit</h3>
                <div class="about-exhibit"><p><em>landscape</em> addresses the complexities among intimacy, pleasure, and authority as it concerns the opaque relationship between public and private desires that constitute queer identity. Inspired by the queer history of Texas, <em>landscape</em> examines place and how that affects the queer lived experience.</p></div>
                <h3 class="about-artist">About the Artist</h3>
                <div class="about-artist"><p>Born in Butler, Pennsylvania, Ron Geibel moved to Texas in 2015 and is currently an Assistant Professor of Art at Southwestern University in Georgetown, TX. Geibel exhibits nationally and internationally and most recently completed a three-month artist residency at the European Ceramic Work Centre in the Netherlands.</p></div>

                <h4 class="image-credit">Image credit</h4>
                <div class="image-credit">RON GEIBEL Image: Call Waitinglandscape</div>
            </div>
        </div>
    </div>
</div></span></div></div>
    <div class="views-row"><div class="views-field views-field-operations"><span class="field-content"></span></div><div class="views-field views-field-nid"><span class="field-content"><div class="apl-exhibit apl-card">
      <img src="https://library.austintexas.gov/library/exhibit/web580x355sm.png" width="580" height="355" alt="Art4water Sacred Springs Kite Exhibition" loading="lazy" typeof="Image">


    <div class="exhibit-copy">
        <h1 class="exhibit-title">The Sacred Springs Kite Exhibition</h1>
        <h3 class="exhibit-artist"></h3>
       <div class="exhibit-time-and-location">
        <h3 class="exhibit-time"><i class="material-icons-outlined">schedule</i><span>May 6, 2022
 - November 30, 2022
</span></h3>
        <h3 class="exhibit-location"><i class="material-icons-outlined">place</i><span><a href="/central-library" hreflang="eng">Central Library</a> - 710 W. César Chávez St.
 </span></h3></div>
        <div class="more"><a class="more">more...</a>
            <div class="apl-details">
                <h3 class="about-exhibit">About the Exhibit</h3>
                <div class="about-exhibit"><p>An exhibition of dozens of kites created by artists and representing the connection between water and life in Texas,&nbsp;<strong>The Sacred Springs Kite Exhibition</strong>, will be on display at Austin Central Library starting May 6, 2022. The exhibition, set to hang over library visitors in the Central Library’s six-story atrium space, is a collaboration between Austin Public Library; Art4Water, a program of the Watershed Association; and Terry Zee Lee, a national facilitator and curator of kite exhibitions and events.<br><br>
“Austin Central Library, located where Shoal Creek feeds into Lady Bird Lake and about a mile from Barton Springs, is the perfect location for the community to experience an exhibition on the connection between Texas waters and our lives,” stated Austin Public Library Director Roosevelt Weeks. “We are proud to be able to host these beautiful artworks in our space and connect the community with these artists’ important messages.”<br><br>
The exhibition will be visible throughout the Central Library, and is scheduled to be on display through November, 2022. A free opening reception is scheduled from 7:00pm – 9:00pm on May 6, 2022 at the Central Library, featuring presentations from the sponsors of the event and several of the featured artists, as well as tours of the exhibition.<br>
&nbsp;</p>

<blockquote>
<p><strong>Sacred Springs Kite Exhibition Opening Reception</strong><br>
May 6, 2022 7:00 pm - 9:00 pm<br>
Austin Central Library, 6th&nbsp;Floor<br>
710 W. Cesar Chavez St.<br>
Austin, TX 78701<br>
Free and open to the public</p>
</blockquote>

<p><br>
“Clean and plentiful water serves as the lifeblood of our communities - our Texas Springs are vital gathering places for community connection and relief from the summer heat,” stated David Baker, Executive Director of the Watershed Association. “What would Austin be without Barton Springs at the heart and soul of our city?”<br><br>
More information about the exhibition is available at:&nbsp;<a href="http://www.art4water.com/">www.art4water.com</a></p></div>
                <h3 class="about-artist">About the Artist</h3>
                <div class="about-artist"><p>The kites, which will be hung from the rafters of the LEED Platinum Certified Central Library, were selected from submissions from over 200 artists to be fabricated into large flying works of art inspired by Texas’s natural springs and the message of water conservation.</p></div>


            </div>
        </div>
    </div>
</div></span></div></div>
    <div class="views-row"><div class="views-field views-field-operations"><span class="field-content"></span></div><div class="views-field views-field-nid"><span class="field-content"><div class="apl-exhibit apl-card">
      <img src="https://library.austintexas.gov/library/exhibit/web580x355_0.png" width="581" height="356" alt="Spring Flowers 3" loading="lazy" typeof="Image">


    <div class="exhibit-copy">
        <h1 class="exhibit-title">It’s Been WILD</h1>
        <h3 class="exhibit-artist">Rakhee Jain Desai</h3>
       <div class="exhibit-time-and-location">
        <h3 class="exhibit-time"><i class="material-icons-outlined">schedule</i><span>May 1, 2022
 - July 10, 2022
</span></h3>
        <h3 class="exhibit-location"><i class="material-icons-outlined">place</i><span><a href="/central-library" hreflang="eng">Central Library</a> - 710 W. César Chávez St.
<br>Living Room (6th Floor) </span></h3></div>
        <div class="more"><a class="more">more...</a>
            <div class="apl-details">
                <h3 class="about-exhibit">About the Exhibit</h3>
                <div class="about-exhibit"><p>Flowers can communicate strong emotions and can also be appreciated for their simplistic beauty. At key moments of our lives, we exchange ﬂowers as symbols of love, sympathy, and celebration. Over the past few years, in the absence of ceremonies, I paused to examine the traditions, rituals and other countless occasions when cut ﬂowers are used to decorate ceremonies - adorn the deceased or embellish a bridal altar.</p>

<p>The wildﬂowers depicted here are not explored within the context of their natural environment or the prim and trimmed specimens of the ﬂorist, but instead these quirky wild ones with all their ﬂaws were plucked from my pandemic walks, a representation of the uncertainties we’ve experienced, as well as the beauty of a spontaneous agenda. Serendipity. For me, painting a bouquet of wildﬂowers and capturing their unruly folds and colors has been a meditative and life-afﬁrming act. Their impermanent beauty and joy giving in to the sweltering summer heat only to regenerate yet again.</p>

<p>It was never a goal to accurately express their ephemeral beauty. These bouquets show up as synesthetic explosions of senses - possibly ﬁnding a moment of stillness, a split second to be present amidst a chaotic world.</p></div>
                <h3 class="about-artist">About the Artist</h3>
                <div class="about-artist"><p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilizes the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process that aptly communicates her South Asian American identity.</p></div>


            </div>
        </div>
    </div>
</div></span></div></div>
    <div class="views-row"><div class="views-field views-field-operations"><span class="field-content"></span></div><div class="views-field views-field-nid"><span class="field-content"><div class="apl-exhibit apl-card">
      <img src="https://library.austintexas.gov/library/exhibit/web580x355-80sm.jpg" width="580" height="355" alt="Crazy towne roopetoope by Irene Roderick" loading="lazy" typeof="Image">


    <div class="exhibit-copy">
        <h1 class="exhibit-title">Dancing with the Wall</h1>
        <h3 class="exhibit-artist">Irene Roderick</h3>
       <div class="exhibit-time-and-location">
        <h3 class="exhibit-time"><i class="material-icons-outlined">schedule</i><span>May 10, 2021
 - July 15, 2021
</span></h3>
        <h3 class="exhibit-location"><i class="material-icons-outlined">place</i><span><a href="/central-library" hreflang="eng">Central Library</a> - 710 W. César Chávez St.
<br>Gallery (2nd Floor) </span></h3></div>
        <div class="more"><a class="more">more...</a>
            <div class="apl-details">
                <h3 class="about-exhibit">About the Exhibit</h3>
                <div class="about-exhibit"><p>The artworks of Irene Roderick are Art made in the tradition of Fine Art that is based on individual creativity and unique personal expression. They are also Quilts made in the Craft tradition of utilitarian bed covers incorporating small pieces of fabric sewn together into a larger sheet. Roderick’s works join the centuries old conversation of whether quilts can be considered as fine art or remain firmly in the craft tradition. She works fluidly between these conversations, embracing both traditions with nonchalance to receive approvals for her creativity from anyone.</p></div>


                <h4 class="image-credit">Image credit</h4>
                <div class="image-credit">Crazy towne roopetoope by Irene Roderick</div>
            </div>
        </div>
    </div>
</div></span></div></div>
    <div class="views-row"><div class="views-field views-field-operations"><span class="field-content"></span></div><div class="views-field views-field-nid"><span class="field-content"><div class="apl-exhibit apl-card">
      <img src="https://library.austintexas.gov/library/exhibit/rakhee_jain_desai_familytree_web_sm_0.jpg" width="580" height="355" alt="Rakhee Jain Desai Family Tree" loading="lazy" typeof="Image">


    <div class="exhibit-copy">
        <h1 class="exhibit-title">Rakhee Jain Desai Virtual Exhibition</h1>
        <h3 class="exhibit-artist">Rakhee Jain Desai</h3>
       <div class="exhibit-time-and-location">
        <h3 class="exhibit-time"><i class="material-icons-outlined">schedule</i><span>May 1, 2021
 - December 31, 2021
</span></h3>
        <h3 class="exhibit-location"><i class="material-icons-outlined">place</i><span><a href="https://library.austintexas.gov/desai">Online: May 1 - December 31, 2021</a></span></h3></div>
        <div class="more"><a class="more">more...</a>
            <div class="apl-details">
                <h3 class="about-exhibit">About the Exhibit</h3>
                <div class="about-exhibit"><p><a href="http://library.austintexas.gov/desai">Exhibition: May 1 - December 31, 2021</a></p>

<p>Rakhee Jain Desai is an interdisciplinary artist whose work creates dialogue about immigrant identity and belonging. Her current body of work utilises the centuries-old, wax-resist textile technique, Batik. The combination of Batik, an Eastern craft, with traditionally Western mediums (encaustic, oils and acrylics) is a signature process.</p></div>
                <h3 class="about-artist">About the Artist</h3>
                <div class="about-artist"><p>Rakhee has exhibited across the USA, Singapore and Portugal. She was selected as a featured artist for the Imago Mundi Benetton Foundation - representing Singapore’s contemporary art in the 21st Century &amp; Beyond. She was the ﬁrst cohort recipient of the Tempo2D program by the City of Austin Art in Public Places. The Batik mural named ‘A Place To Call Home’ is now on permanent view at the Austin Bergstrom International Airport.</p></div>

                <h4 class="image-credit">Image credit</h4>
                <div class="image-credit">Rakhee Jain Desai Family Tree</div>
            </div>
        </div>
    </div>
</div></span></div></div>
</div>`;

const myAPLFooter = getAPLFooterString();


const myNavigationBar = getNavigationBarString();

export const WithHeaderAndFooterB = () => myNavigationBar + '<div id="apl-content">' + myNav + '<div class="column-2 cards">' + myExhibit1 + '</div></div>' + myAPLFooter;
