import './meeting-rooms.css';

export default {
  title: 'Meeting Rooms/Pages',
 
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
const MeetingRoomsSidebarHTML = `<div class="apl-sidebar meeting-rooms">
  
      <h2>Meeting Rooms</h2>
    
      <div><div class="view view-navigation view-id-navigation view-display-id-block_30 js-view-dom-id-f1779e675abb011f6327045fe992d8dfc216e991cefae15f59b8b830ff6e8969">
  
    
      
      <div class="view-content">
          <div class="views-row"><div class="views-field views-field-body"><div class="field-content"><ul><li><a href="/meeting-rooms">About Meeting Rooms</a></li>
	<li><a href="/meeting-rooms/policies">Meeting Room Policies</a></li>
	<li><a href="/meeting-rooms/ahc">Austin History Center Guidelines</a></li>
	<li><a href="/policies/shared-learning-rooms">Central Library Shared Learning Room Policy</a></li>
</ul></div></div><div class="views-field views-field-operations"><span class="field-content"></span></div></div>

    </div>
  
          </div>
</div>

  </div>`;
const MeetingRoomsHTML = `<div class="d-col-9 t-col-9 m-col-10 layout__region layout__region--second">
        <div class="block block-layout-builder block-field-blocknodepagefield-main-image">
  
    
      
            <div class="field field--name-field-main-image field--type-image field--label-hidden field__item">  <img src="/img/meeting_room.jpg" width="580" height="355" alt="Public Meeting Room" loading="lazy" typeof="foaf:Image">

</div>
      
  </div>
<div class="block block-layout-builder block-field-blocknodepagetitle">
  
    
      <span property="schema:name" class="field field--name-title field--type-string field--label-hidden">Meeting Rooms</span>

  </div>
<div class="block block-layout-builder block-field-blocknodepagebody">
  
    
      
            <div property="schema:text" class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><a href="/slr/request">Shared Learning Rooms at Central Library</a></p>
<p></p><div class="usa-form-group js-form-item form-item js-form-type-select form-item-location js-form-item-location"><label class="usa-label" for="loc">Reservations calendar by location:</label> <select class="webform-entity-select form-select usa-select" id="loc" name="loc"><option value="">- Select -</option><option value="183">Austin History Center (Capacity: 62)</option><option value="194">Carver Branch (Capacity: 100)</option><option value="195">Hampton Branch at Oak Hill (Capacity: 70)</option><option value="196">Howson Branch (Capacity: 40)</option><option value="197">Little Walnut Creek Branch (Capacity: 50)</option><option value="198">Manchaca Road Branch (Capacity: 75)</option><option value="199">Milwood Branch (Capacity: 50)</option><option value="200">North Village Branch (Capacity: 52)</option><option value="202">Old Quarry Branch (Capacity: 60)</option><option value="203">Pleasant Hill Branch (Capacities: 20, 50)</option><option value="205">Ruiz Branch (Capacities: 39, 39, 78)</option><option value="207">Southeast Branch (Capacities: 28, 40, 68)</option><option value="208">Spicewood Springs Branch (Capacity: 65)</option><option value="209">Terrazas Branch (Capacities: 25, 25, 50)</option><option value="210">Twin Oaks Branch (Capacities: 20, 20, 40)</option><option value="201">Willie Mae Kirk Branch (Capacity: 40)</option><option value="184">Windsor Park Branch (Capacities: 32, 33, 65)</option><option value="211">Yarborough Branch (Capacity: 50)</option></select></div><p></p>

<p>Austin Public Library Meeting Rooms at branches are <strong>free of charge</strong> and designed to meet <strong>non-commercial</strong>, informational, educational, cultural and civic needs. Library Meeting Rooms are ideal for discussion groups, panels, lectures, conferences and seminars. If you have a smaller group, check out our <a href="/slr/request">shared learning rooms</a> at the Central Library.</p>

<ul>
	<li><a href="/meeting-rooms/policies">Meeting room policies</a> and <a href="/meeting-rooms/ahc">Austin History Center guidelines</a></li>
	<li><a href="/meeting-rooms/policies#care">Care and Use of Facilities guidelines</a></li>
	<li><a href="/policies/shared-learning-rooms">Shared learning room policy</a></li>
</ul>
<p><strong>Reserve a Meeting Room</strong></p>
<ul>
<li><a href="/meeting-rooms/request">Online</a></li>
<li><a href="/forms/meeting-room">In Person (PDF)</a> | <a href="/forms/meeting-room-es">Sala de reunión forma de solicitud</a></li>
<li>Electronic and paper reservation requests are timestamped and processed in the order they are received.</li>
</ul>
</div>
      
  </div>

      </div>`;
export const MeetingRooms = () => MeetingRoomsHTML;
export const Sidebar = () => MeetingRoomsSidebarHTML;
export const Page = () => '<div id="apl-content">' + MeetingRoomsSidebarHTML + '<div class="column-2">' + MeetingRoomsHTML + '</div></div>';


