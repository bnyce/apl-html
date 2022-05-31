//import './exhibits-sidebar.css';

export default {
  title: 'Admin/Stats',
};

const AttendanceHTML = `<div class="views-element-container"><div class="view view-reflection-picker view-id-reflection_picker view-display-id-page_1 js-view-dom-id-c7b5f6d2ff0a74e8ef58c583d2c9e6080c3ff3adc32362ca9fcab551e943f3e5">
  
    
      <div class="view-header">
      <h1>Attendance Stats Dashboard</h1>
<a class="usa-button usa-button-outline" href="/node/add/reflection">Add an Ad-hoc Attendance Stat</a>
<a class="usa-button usa-button-outline" href="/node/add/reference_stats">Add a Reference Stat</a>
    </div>
        <div class="view-filters">
      <form class="views-exposed-form bef-exposed-form" aria-label="Filter the contents of the Attendance Stats view" data-drupal-selector="views-exposed-form-reflection-picker-page-1" action="/admin/attendance-stats" method="get" id="views-exposed-form-reflection-picker-page-1" accept-charset="UTF-8">
  <div class="views-exposed-form__item js-form-item form-item js-form-type-textfield form-type--textfield js-form-item-title form-item--title">
      <label for="edit-title" class="form-item__label">Title</label>
        <input placeholder="Title contains" data-drupal-selector="edit-title" type="text" id="edit-title" name="title" value="" size="30" maxlength="128" class="form-text form-element form-element--type-text form-element--api-textfield">
        </div>
<div class="views-exposed-form__item js-form-item form-item js-form-type-select form-type--select js-form-item-loc form-item--loc">
      <label for="edit-loc" class="form-item__label">Location</label>
        <select data-drupal-selector="edit-loc" id="edit-loc" name="loc" class="form-select form-element form-element--type-select"><option value="All" selected="selected">- Location -</option><option value="3939">Central Library</option><option value="4004">APL Shop</option><option value="183">Austin History Center</option><option value="194">Carver Branch</option><option value="186">Cepeda Branch</option><option value="195">Hampton Branch at Oak Hill</option><option value="196">Howson Branch</option><option value="197">Little Walnut Creek Branch</option><option value="198">Manchaca Road Branch</option><option value="199">Milwood Branch</option><option value="2311">Mobile Library</option><option value="200">North Village Branch</option><option value="202">Old Quarry Branch</option><option value="4999">Online Event</option><option value="203">Pleasant Hill Branch</option><option value="204">Recycled Reads Bookstore</option><option value="205">Ruiz Branch</option><option value="206">St. John Branch</option><option value="207">Southeast Branch</option><option value="208">Spicewood Springs Branch</option><option value="209">Terrazas Branch</option><option value="210">Twin Oaks Branch</option><option value="185">University Hills Branch</option><option value="201">Willie Mae Kirk Branch</option><option value="184">Windsor Park Branch</option><option value="211">Yarborough Branch</option></select>
        </div>
<div class="views-exposed-form__item js-form-item form-item js-form-type-entity-autocomplete form-type--entity-autocomplete js-form-item-cat form-item--cat">
      <label for="edit-cat" class="form-item__label">Event Category</label>
        <div class="claro-autocomplete"><input data-drupal-selector="edit-cat" class="form-autocomplete form-text form-element form-element--type-text form-element--api-entity-autocomplete ui-autocomplete-input" data-autocomplete-path="/entity_reference_autocomplete/taxonomy_term/default/7TsGuVgaXkdTSzqWS3KHAngkYZp3XvuPwEjcZVqD_uo" type="text" id="edit-cat" name="cat" value="" size="60" maxlength="128" data-once="autocomplete claroAutoComplete" autocomplete="off"><div class="claro-autocomplete__message hidden" data-drupal-selector="autocomplete-message">Loading…</div></div>
        </div>

<fieldset data-drupal-selector="edit-aud" id="edit-aud--wrapper" class="fieldgroup form-composite fieldset fieldset--group js-form-item form-item js-form-wrapper form-wrapper">
      <legend class="fieldset__legend fieldset__legend--composite fieldset__legend--visible">
    <span class="fieldset__label fieldset__label--group">Audience</span>
  </legend>
  
  <div class="fieldset__wrapper fieldset__wrapper--group">
        
        <div id="edit-aud" class="form-checkboxes form-boolean-group"><div class="form-checkboxes bef-checkboxes">
                  <div class="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-aud-29 form-item--aud-29">
        <input data-drupal-selector="edit-aud-29" type="checkbox" id="edit-aud-29" name="aud[29]" value="29" class="form-checkbox form-boolean form-boolean--type-checkbox">
        <label for="edit-aud-29" class="form-item__label option">Adult</label>
      </div>

                    <div class="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-aud-32 form-item--aud-32">
        <input data-drupal-selector="edit-aud-32" type="checkbox" id="edit-aud-32" name="aud[32]" value="32" class="form-checkbox form-boolean form-boolean--type-checkbox">
        <label for="edit-aud-32" class="form-item__label option">Children</label>
      </div>

                    <div class="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-aud-31 form-item--aud-31">
        <input data-drupal-selector="edit-aud-31" type="checkbox" id="edit-aud-31" name="aud[31]" value="31" class="form-checkbox form-boolean form-boolean--type-checkbox">
        <label for="edit-aud-31" class="form-item__label option">Teen</label>
      </div>

      </div>
</div>

            
      </div>
</fieldset>

<fieldset data-drupal-selector="edit-dateq-wrapper" id="edit-dateq-wrapper" class="fieldset js-form-item form-item js-form-wrapper form-wrapper">
      <legend class="fieldset__legend fieldset__legend--visible">
    <span class="fieldset__label">Date</span>
  </legend>
  
  <div class="fieldset__wrapper">
        
        <div class="js-form-item form-item js-form-type-date form-type--date js-form-item-dateq-min form-item--dateq-min">
      <label for="edit-dateq-min" class="form-item__label">Min</label>
        <input placeholder="2021-07-01" class="bef-datepicker form-date form-element form-element--type-date form-element--api-date" autocomplete="off" data-drupal-selector="edit-dateq-min" type="date" id="edit-dateq-min" name="dateq[min]" value="" size="30">
        </div>
<div class="js-form-item form-item js-form-type-date form-type--date js-form-item-dateq-max form-item--dateq-max">
      <label for="edit-dateq-max" class="form-item__label">Max</label>
        <input placeholder="2021-07-15" class="bef-datepicker form-date form-element form-element--type-date form-element--api-date" autocomplete="off" data-drupal-selector="edit-dateq-max" type="date" id="edit-dateq-max" name="dateq[max]" value="" size="30">
        </div>

            
      </div>
</fieldset>
<div data-drupal-selector="edit-actions" class="form-actions views-exposed-form__item views-exposed-form__item--actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit-reflection-picker" type="submit" id="edit-submit-reflection-picker" value="Filter" class="button js-form-submit form-submit"></div>


</form>

    </div>
    
      <div class="view-content">
      <table class="views-table views-view-table cols-8">
        <thead>
      <tr>
                                                  <th id="view-field-how-many-attended-table-column" class="sortable-heading views-field views-field-field-how-many-attended-" scope="col"><a href="?title=&amp;loc=All&amp;cat&amp;dateq%5Bmin%5D=&amp;dateq%5Bmax%5D=&amp;order=field_how_many_attended_&amp;sort=asc" title="sort by How many attended?" rel="nofollow">How many attended?</a></th>
                                                  <th id="view-title-table-column" class="sortable-heading views-field views-field-title" scope="col"><a href="?title=&amp;loc=All&amp;cat&amp;dateq%5Bmin%5D=&amp;dateq%5Bmax%5D=&amp;order=title&amp;sort=asc" title="sort by Title" rel="nofollow">Title</a></th>
                                                  <th id="view-field-event-loc-table-column" class="sortable-heading views-field views-field-field-event-loc" scope="col"><a href="?title=&amp;loc=All&amp;cat&amp;dateq%5Bmin%5D=&amp;dateq%5Bmax%5D=&amp;order=field_event_loc&amp;sort=asc" title="sort by Location" rel="nofollow">Location</a></th>
                                                  <th id="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time" scope="col">Date &amp; Time</th>
                                                  <th id="view-field-event-summary-table-column" class="views-field views-field-field-event-summary" scope="col">Summary</th>
                                                  <th id="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia" scope="col">Audience</th>
                                                  <th id="view-field-event-category-tags-table-column" class="sortable-heading views-field views-field-field-event-category-tags-" scope="col"><a href="?title=&amp;loc=All&amp;cat&amp;dateq%5Bmin%5D=&amp;dateq%5Bmax%5D=&amp;order=field_event_category_tags_&amp;sort=asc" title="sort by Category" rel="nofollow">Category</a></th>
                                                  <th id="view-name-table-column" class="sortable-heading views-field views-field-name" scope="col"><a href="?title=&amp;loc=All&amp;cat&amp;dateq%5Bmin%5D=&amp;dateq%5Bmax%5D=&amp;order=name&amp;sort=asc" title="sort by Author" rel="nofollow">Author</a></th>
              </tr>
    </thead>
    <tbody>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=3939&amp;nid=7700383&amp;uuid=5be81501-51c1-4c94-bf5b-8b764397da1b&amp;priority=4515&amp;attendance=&amp;cat=2478&amp;aud=29&amp;date=2022-05-23&amp;time=19:00:00">Adult Story Hour: Animal Kingdom</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Central Library          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-23T19:00:00-05:00" class="datetime">Mon, May 23 2022, 7</time>
 - <time datetime="2022-05-23T20:00:00-05:00" class="datetime">8pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">Join us to listen or tell a five minute story – truth or fiction, funny or serious, read or memorized, any story about life, fantasy or yourself. New themes each month!          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Adult          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Open Mic          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">BrownJul          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=3939&amp;nid=7699863&amp;uuid=7db5e7e8-7870-4a50-a395-b6d36748daab&amp;priority=4515&amp;attendance=&amp;cat=2478&amp;aud=29&amp;date=2022-04-25&amp;time=19:00:00">Adult Story Hour: It's All Fun &amp; Poetry</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Central Library          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-04-25T19:00:00-05:00" class="datetime">Mon, Apr 25 2022, 7</time>
 - <time datetime="2022-04-25T20:00:00-05:00" class="datetime">8pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">Join us to listen or tell a five minute story – truth or fiction, funny or serious, read or memorized, any story about life, fantasy or yourself. New themes each month!          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Adult          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Open Mic          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">BrownJul          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=210&amp;nid=7700474&amp;uuid=f57381f3-16ff-42ee-871e-a71f7495d4ab&amp;attendance=&amp;cat=2066&amp;aud=32&amp;date=2022-05-02&amp;time=16:30:00">After-School Read Aloud</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Twin Oaks Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-02T16:30:00-05:00" class="datetime">Mon, May 2 2022, 4:30</time>
 - <time datetime="2022-05-02T17:00:00-05:00" class="datetime">5pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">Join us after school in the Children's Area for a Read Aloud.  We will read picture books in a laid back environment, and enjoy the experience each book takes us through.          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Children          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Youth Programs &amp; Workshops          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">McCartJ          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=210&amp;nid=7700477&amp;uuid=a856ed25-c937-4648-a4eb-f746f66aceac&amp;attendance=&amp;cat=2066&amp;aud=32&amp;date=2022-05-23&amp;time=16:30:00">After-School Read Aloud</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Twin Oaks Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-23T16:30:00-05:00" class="datetime">Mon, May 23 2022, 4:30</time>
 - <time datetime="2022-05-23T17:00:00-05:00" class="datetime">5pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">Join us after school in the Children's Area for a Read Aloud.  We will read picture books in a laid back environment, and enjoy the experience each book takes us through.          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Children          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Youth Programs &amp; Workshops          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">McCartJ          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=210&amp;nid=7700476&amp;uuid=badcef22-c68c-4146-b027-7ae21f529398&amp;attendance=&amp;cat=2066&amp;aud=32&amp;date=2022-05-16&amp;time=16:30:00">After-School Read Aloud</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Twin Oaks Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-16T16:30:00-05:00" class="datetime">Mon, May 16 2022, 4:30</time>
 - <time datetime="2022-05-16T17:00:00-05:00" class="datetime">5pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">Join us after school in the Children's Area for a Read Aloud.  We will read picture books in a laid back environment, and enjoy the experience each book takes us through.          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Children          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Youth Programs &amp; Workshops          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">McCartJ          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=210&amp;nid=7700475&amp;uuid=63b5f2f4-77e3-4199-a9e7-79c8eef0ce35&amp;attendance=&amp;cat=2066&amp;aud=32&amp;date=2022-05-09&amp;time=16:30:00">After-School Read Aloud</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Twin Oaks Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-09T16:30:00-05:00" class="datetime">Mon, May 9 2022, 4:30</time>
 - <time datetime="2022-05-09T17:00:00-05:00" class="datetime">5pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">Join us after school in the Children's Area for a Read Aloud.  We will read picture books in a laid back environment, and enjoy the experience each book takes us through.          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Children          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Youth Programs &amp; Workshops          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">McCartJ          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">12          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/7700106/edit">Afternoon Book Club</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Spicewood Springs Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-04-19T13:30:00-05:00" class="datetime">Tue, Apr 19 2022, 1:30</time>
 - <time datetime="2022-04-19T15:30:00-05:00" class="datetime">3:30pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">If you enjoy reading across a variety of genres, the Afternoon Book Club is for you! This month we're reading Anxious People by Fredrik Backman.          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Adult          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">Book Clubs          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">wanj          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/add/reflection?type=event&amp;loc=208&amp;nid=7699444&amp;uuid=3401f93f-07a5-4c15-ae78-31108ab3bc32&amp;attendance=&amp;cat=&amp;aud=29&amp;date=2022-05-17&amp;time=13:30:00">Afternoon Book Club</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Spicewood Springs Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-17T13:30:00-05:00" class="datetime">Tue, May 17 2022, 1:30</time>
 - <time datetime="2022-05-17T15:30:00-05:00" class="datetime">3:30pm</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">If you enjoy reading across a variety of genres, the Afternoon Book Club is for you! This month we are reading The Reading List by Sara Nisha Adams.           </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Adult          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">wanj          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">27          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/7699802/edit">All Ages Storytime</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Central Library          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-04-05T10:00:00-05:00" class="datetime">Tue, Apr 5 2022, 10am</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Children          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">All Ages Storytime          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">cookp          </td>
              </tr>
          <tr>
                                                                                        <td headers="view-field-how-many-attended-table-column" class="views-field views-field-field-how-many-attended-">39          </td>
                                                                                        <td headers="view-title-table-column" class="views-field views-field-title"><a href="/node/7701165/edit">All Ages Storytime</a>          </td>
                                                                                        <td headers="view-field-event-loc-table-column" class="views-field views-field-field-event-loc">Milwood Branch          </td>
                                                                                        <td headers="view-field-event-date-and-time-table-column" class="views-field views-field-field-event-date-and-time"><time datetime="2022-05-19T10:30:00-05:00" class="datetime">Thu, May 19 2022, 10:30</time>
 - <time datetime="2022-05-19T11:00:00-05:00" class="datetime">11am</time>
          </td>
                                                                                        <td headers="view-field-event-summary-table-column" class="views-field views-field-field-event-summary">          </td>
                                                                                        <td headers="view-field-cat-ia-table-column" class="views-field views-field-field-cat-ia">Children          </td>
                                                                                        <td headers="view-field-event-category-tags-table-column" class="views-field views-field-field-event-category-tags-">All Ages Storytime          </td>
                                                                                        <td headers="view-name-table-column" class="views-field views-field-name">MonthieR          </td>
              </tr>
      </tbody>
</table>

    </div>
  
        <nav class="pager" role="navigation" aria-labelledby="pagination-heading">
    <h4 class="visually-hidden" id="pagination-heading">Pagination</h4>
    <ul class="pager__items js-pager__items">
      
              <li class="pager__item pager__item--mini pager__item--current">
          <span class="visually-hidden">
            Current page
          </span>
          1
        </li>
      
              <li class="pager__item pager__item--mini pager__item--action pager__item--next"><a class="pager__link pager__link--mini pager__link--action-link" title="Go to next page" href="/admin/attendance-stats?title=&amp;loc=All&amp;cat&amp;dateq%5Bmin%5D=&amp;dateq%5Bmax%5D=&amp;page=1"><span class="visually-hidden">Next page</span></a></li>          </ul>
  </nav>

          </div>
</div>`;

export const Attendance  = () => AttendanceHTML;
