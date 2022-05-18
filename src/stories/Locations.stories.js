//import './meeting-rooms.css';

export default {
  title: 'Locations/Pages',
 
 argTypes: {
//  label: { control: 'text' },
//  onClick: { action: 'onClick' },
    internal: { control: 'boolean' },
/*    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }, */
  },
  
};
const LocationsSidebarHTML = `<div class="apl-sidebar locations">
    <div class="layout__region layout__region--content">
      <div class="views-element-container block block-views block-views-blocknavigation-block-12">
  
      <h2>General Information</h2>
    
      <div><div class="view view-navigation view-id-navigation view-display-id-block_12 js-view-dom-id-de4bd7cf8797b5b8f53f5c0b65b74f83f781a02997381bc725ed5322a7f426cc">
  
    
      
      <div class="view-content">
          <div class="views-row"><div class="views-field views-field-body"><div class="field-content"><ul><li><a href="/locations">All Locations &amp; Hours</a></li>
	<li><a href="/holiday-schedule">Holiday Schedule</a></li>
	<li><a href="/central-library">Central Library</a></li>
	<li><a href="/ahc">Austin History Center</a></li>
	<li><a href="/recycled-reads">Recycled Reads Bookstore</a></li>

</ul></div></div><div class="views-field views-field-operations"><span class="field-content"></span></div></div>

    </div>
  
          </div>
</div>

  </div>

    </div>
  </div>`;
const MobilePrintingSidebarHTML = `<div class="apl-sidebar locations">
    <div class="layout__region layout__region--content">
      <div class="views-element-container block block-views block-views-blockapl-locations-block-1">
  
      <h2>Mobile Printing by Location</h2>
    
      <div><div class="view view-apl-locations view-id-apl_locations view-display-id-block_1 js-view-dom-id-0e33150e27ac5cdeab3d76b5695c27d2d8ccc48ea244a89bc8bab71108537973">
  
    
      
      <div class="view-content">
          <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/aceprint">Central Library</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/acbprint">Carver Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/aokprint">Hampton Branch at Oak Hill</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/ahoprint">Howson Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/alwprint">Little Walnut Creek Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/amrprint">Manchaca Road Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/amiprint">Milwood Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/anvprint">North Village Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/aoqprint">Old Quarry Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/aphprint">Pleasant Hill Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/arzprint">Ruiz Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/asjprint">St. John Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/aseprint">Southeast Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/asrprint">Spicewood Springs Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/atbprint">Terrazas Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/atoprint">Twin Oaks Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/awkprint">Willie Mae Kirk Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/awpprint">Windsor Park Branch</a></span></div></div>
    <div class="apl-printing-location"><div class="views-field views-field-name"><span class="field-content"><a href="/aybprint">Yarborough Branch</a></span></div></div>

    </div>
  
          </div>
</div>

  </div>

    </div>
  </div>`;
const LocationHTML = `<div class="views-row"><div class="views-field views-field-tid"><span class="field-content">  <img src="https://library.austintexas.gov/library/acb_1a%5B1%5D_0.jpg" width="580" height="355" alt="" loading="lazy" typeof="Image">

 
<div class="apl-location">

<div class="field-title">Carver Branch</div>

<div class="location-phone">512-974-1010</div>
<div class="location-address">1161 Angelina St.</div>
<div class="location-description"><p>Mobile printing is available at the Carver Branch. Please visit <a href="/acbprint">library.austintexas.gov/acbprint</a> for more information and to submit a job.<br>
<a class="usa-button usa-button-outline" href="/acbprint"><img src="https://library.austintexas.gov/library/printer40.png"><span class="apl-print">Mobile Printing - Carver Branch</span></a></p>

<p>The Carver Branch is located in Council District 1 of the City of Austin.</p>
<strong>Computer, Career and Business Center</strong><br>
The Computer, Career and Business Center at the Carver Branch has a computer lab where classes are offered for people who want to start a business, look for a job or just to learn new tech skills. Also check out&nbsp;<a href="http://library.austintexas.gov/databases/all?title=&amp;sub=63&amp;type=All">online databases</a>&nbsp;for more resources.&nbsp;<p></p>

<p><strong><em>Computer, Career and Business Center Hours</em><br>
Sunday</strong>&nbsp;Closed<br>
<strong>Monday - Thursday&nbsp;</strong>10 AM - 12 Noon | open lab use (no staff on duty)<br>
<strong>Monday - Thursday&nbsp;</strong>2 - 8 PM | Program specialist on duty<br>
<strong>Friday - Saturday&nbsp;</strong>11 - 4 PM | Program specialist on duty</p></div>
</div>
</span></div></div>`;
export const Page = () => '<div id="apl-content">' + LocationsSidebarHTML + MobilePrintingSidebarHTML + '<div class="column-2">' + LocationHTML + '</div></div>';


