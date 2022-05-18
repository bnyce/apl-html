
export default {
  title: 'Virtual Library/Pages',
 
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
const VLSidebarHTML = `<div class="apl-sidebar">
      <div class="views-exposed-form bef-exposed-form block block-views block-views-exposed-filter-blockvirtual-library-search-page-1" aria-label="Filter the contents of the Search Virtual Library Resources view" data-drupal-selector="views-exposed-form-virtual-library-search-page-1">
  
      <h2>Search Virtual Library Resources</h2>
    
      <form action="/virtual/search-resources" method="get" id="views-exposed-form-virtual-library-search-page-1" accept-charset="UTF-8">
  <div class="views-exposed-form__item js-form-item form-item js-form-type-textfield form-type--textfield js-form-item-search form-item--search">
      
        <input placeholder="Search by keyword" data-drupal-selector="edit-search" type="text" id="edit-search" name="search" value="" size="30" maxlength="128" class="form-text form-element form-element--type-text form-element--api-textfield">
        </div>
<div class="views-exposed-form__item js-form-item form-item js-form-type-select form-type--select js-form-item-subjects form-item--subjects">
      <label for="edit-subjects" class="form-item__label">Subjects</label>
        <select data-drupal-selector="edit-subjects" id="edit-subjects" name="subjects" class="form-select form-element form-element--type-select"><option value="All" selected="selected">- Any -</option><option value="226">All Databases</option><option value="59">Arts and Humanities</option><option value="60">Auto, Engine and Electronics Repair</option><option value="4423">Ayuda con las Tareas Escolares</option><option value="62">Books and Literature</option><option value="63">Business and Nonprofits</option><option value="66">Dictionaries and Encyclopedias</option><option value="67">Directories</option><option value="630">Do-It-Yourself</option><option value="2827">eBooks and eAudiobooks</option><option value="69">Education and Training</option><option value="71">En Español</option><option value="3660">Entertainment</option><option value="72">Genealogy and People Search</option><option value="1088">Government and Statistics</option><option value="75">Health</option><option value="76">History and Social Sciences</option><option value="499">Homework Help</option><option value="502">Jobs</option><option value="4359">Journals</option><option value="80">Language Learning</option><option value="81">Legal</option><option value="504">Magazines &amp; Newspapers</option><option value="2945">New and Featured</option><option value="86">Science and Technology</option><option value="565">Stream or Download Music</option><option value="88">Texas</option><option value="566">Video</option></select>
        </div>

<fieldset data-drupal-selector="edit-access" id="edit-access--wrapper" class="fieldgroup form-composite fieldset fieldset--group js-form-item form-item js-form-wrapper form-wrapper">
      <legend class="fieldset__legend fieldset__legend--composite fieldset__legend--visible">
    <span class="fieldset__label fieldset__label--group">Access</span>
  </legend>
  
  <div class="fieldset__wrapper fieldset__wrapper--group">
    
        <div id="edit-access" class="form-checkboxes form-boolean-group"><div class="form-checkboxes bef-checkboxes form--inline">
                  <div class="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-access-2426 form-item--access-2426">
        <input data-drupal-selector="edit-access-2426" type="checkbox" id="edit-access-2426" name="access[2426]" value="2426" class="form-checkbox form-boolean form-boolean--type-checkbox">
        <label for="edit-access-2426" class="form-item__label option">In-Library Only</label>
      </div>

                    <div class="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-access-2425 form-item--access-2425">
        <input data-drupal-selector="edit-access-2425" type="checkbox" id="edit-access-2425" name="access[2425]" value="2425" class="form-checkbox form-boolean form-boolean--type-checkbox">
        <label for="edit-access-2425" class="form-item__label option">Limited Users</label>
      </div>

                    <div class="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-access-2424 form-item--access-2424">
        <input data-drupal-selector="edit-access-2424" type="checkbox" id="edit-access-2424" name="access[2424]" value="2424" class="form-checkbox form-boolean form-boolean--type-checkbox">
        <label for="edit-access-2424" class="form-item__label option">TexShare</label>
      </div>

      </div>
</div>

            
      </div>
</fieldset>
<div data-drupal-selector="edit-actions" class="form-actions views-exposed-form__item views-exposed-form__item--actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit-virtual-library-search" type="submit" id="edit-submit-virtual-library-search" value="Apply" class="button js-form-submit form-submit"></div>


</form>

  </div>
<div class="apl-sidebar2">
  
    
      <div><div class="view view-navigation view-id-navigation view-display-id-block_6 js-view-dom-id-1e93bd73bcd440c82ce9d773713bbac21b6d3c6fd4c7d4869253b5156e6672f3">
  
    
      
      <div class="view-content">
          <div class="views-row"><div class="views-field views-field-body"><div class="field-content">
<div id="apl_virtual_nav_header">
<h2><a class="a8e" href="/virtual" id="apl-virtual-home">Virtual Library</a></h2>

<ul>
	<li><a href="/aplplus" id="apl-aplplus">APL+</a></li>
	<li><a href="/jobportal" id="Job Portal">Job Portal</a></li>
</ul>
</div>

<details class="claro-details" data-drupal-selector="un" id="button1"><summary aria-controls="un" aria-expanded="false" aria-pressed="false" class="claro-details__summary" role="button">eBooks &amp; Audiobooks</summary>

<div class="claro-details__wrapper details-wrapper">
<div class="apl_virtual_nav_details">
<ul id="apl-ebooks-ul">
	<li><a href="/virtual/overdrive-libby" title="eBooks, Audiobooks, Magazines and Streaming Video">OverDrive / Libby</a></li>
	<li><a href="/virtual/hoopla" title="Online movies, music, TV shows, audiobooks, eBooks and comics">hoopla</a></li>
	<li><a href="/virtual/biblioboard-library" title="Create, share and read eBooks">BiblioBoard Library</a></li>
	<li><a href="/virtual/cloudlibrary" title="Popular Lucky Day eBooks and audiobooks">cloudLibrary</a></li>
</ul>
</div>
</div>
</details>

<details class="claro-details" data-drupal-selector="un" id="button2"><summary aria-controls="un" aria-expanded="false" aria-pressed="false" class="claro-details__summary" role="button">eLearning</summary>

<div class="claro-details__wrapper details-wrapper">
<div class="apl_virtual_nav_details">
<ul id="apl-elearning-ul">
	<li><a href="/virtual/brainfuse" title="Live tutoring, homework help and test prep for students in grades K-12">Brainfuse HelpNow</a> (Live Homework Help)</li>
	<li><a href="/virtual/infobase-learning-cloud">Infobase Learning Cloud</a> (Computer Tutorials)</li>
	<li><a href="/virtual/learningexpress-library" title="Career certification and licensure exam prep, college and grad school entrance test prep,GED® test prep, tutorials and skill building">LearningExpress Library</a> (Test Prep)</li>
	<li><a href="/virtual/mango-languages" title="Learn over 70 world languages, take more than 20 ESL/ELL courses, and improve your proficiency with Mango Premiere films.">Mango Languages</a> (Language Learning)</li>
</ul>
</div>
</div>
</details>

<details class="claro-details" data-drupal-selector="un" id="button3"><summary aria-controls="un" aria-expanded="false" aria-pressed="false" class="claro-details__summary" role="button">Entertainment</summary>

<div class="claro-details__wrapper details-wrapper">
<div class="apl_virtual_nav_details">
<ul id="apl-music-ul">
	<li><a href="/virtual/electric-lady-bird" title="Streaming fresh sounds from the Austin music scene!">Electric Lady Bird</a></li>
	<li><a href="/virtual/hoopla" title="Online movies, music, TV shows, audiobooks, eBooks and comics">hoopla</a></li>
	<li><a href="/virtual/kanopy" title="Stream thousands of movies and documentaries">Kanopy</a></li>
	<li><a href="/virtual/overdrive-libby" title="eBooks, Audiobooks, Magazines and Streaming Video">OverDrive / Libby</a></li>
</ul>
</div>
</div>
</details>

<details class="claro-details" data-drupal-selector="un" id="button4"><summary aria-controls="un" aria-expanded="false" aria-pressed="false" class="claro-details__summary" role="button">Magazines &amp; Newspapers</summary>

<div class="claro-details__wrapper details-wrapper">
<div class="apl_virtual_nav_details">
<ul id="apl-mags-ul">
	<li><a href="/virtual/austin-american-statesman" title="Newspaper articles and full-page issues">Austin American-Statesman</a></li>
	<li><a href="/virtual/austin-monitor" title="Articles about City of Austin and Travis County government">Austin Monitor</a></li>
	<li><a href="/virtual/newsbank" title="Articles from over 2,000 newspapers. Includes the Austin American-Statesman and Austin Monitor">NewsBank</a></li>
	<li><a href="/virtual/new-york-times" title="Access articles from 1851 to today, along with videos, company data and interactive features">New York Times</a></li>
	<li><a href="/virtual/overdrive-libby" title="eBooks, Audiobooks, Magazines and Streaming Video">OverDrive / Libby</a></li>
	<li><a href="https://library.austintexas.libanswers.com/faq/14154" title="How to find specific magazines, newspapers and journals in the online resources">Find an exact magazine or newspaper</a></li>
</ul>
</div>
</div>
</details>

<details class="claro-details" data-drupal-selector="un" id="button5"><summary aria-controls="un" aria-expanded="false" aria-pressed="false" class="claro-details__summary" role="button">Youth</summary>

<div class="claro-details__wrapper details-wrapper">
<div class="apl_virtual_nav_details">
<ul id="apl-youth-ul">
	<li><a href="/virtual/homework-help" title="Online tutoring, school report sources, video tutorials and research tools for K-12 students">Homework Help</a></li>
	<li><a href="https://austinlibrary.overdrive.com/austinlibrary/kids" title="eBooks and audiobooks for children">OverDrive Kids</a></li>
	<li><a href="https://austinlibrary.overdrive.com/austinlibrary/teens" title="eBooks and audiobooks for teens">OverDrive Teens</a></li>
	<li><a href="/virtual/tumblebook-library" title="Animated, talking picture books for kids">TumbleBook Library</a></li>
	<li><a href="/virtual/makemake" title="Biblioteca digital para niños">MakeMake</a></li>
</ul>
</div>
</div>
</details>

<details class="claro-details" data-drupal-selector="un" id="button6" open=""><summary aria-controls="un" aria-expanded="false" aria-pressed="false" class="claro-details__summary" role="button">Research &amp; Databases</summary>

<div class="claro-details__wrapper details-wrapper">
<div class="apl_virtual_nav_details">
<ul class="more-info" id="apl-ref-ul">
	<li><a href="https://ahc.access.preservica.com/">AHC Digital Collections</a></li>
	<li><a href="/virtual/business-and-nonprofits">Business</a></li>
	<li><a href="http://yl9ar3tq5l.search.serialssolutions.com/">eJournal Finder</a></li>
	<li><a href="/virtual/genealogy-and-people-search">Genealogy</a></li>
	<li><a href="/virtual/homework-help?sub=499">Homework Help</a></li>
	<li><a href="https://library.austintexas.libguides.com/">Information Guides</a></li>
	<li><a href="https://atxlibrary.idm.oclc.org/login?url=http://yl9ar3tq5l.cs.serialssolutions.com/">Research Catalog</a></li>
	<li><a href="/databases/subjects">See All Subjects</a></li>
</ul>
</div>
</div>
</details>
</div></div><div class="views-field views-field-operations"><span class="field-content"></span></div></div>

    </div>
  
          </div>
</div>

  </div>

    </div>`;
export const Sidebar = () => '<div id="apl-content">' + VLSidebarHTML + '</div>';
//export const Sidebar = () => '<div id="apl-content">' + VLSidebarHTML + '<div class="column-2">' + LocationHTML + '</div></div>';


