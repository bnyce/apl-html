import './job-portal.css';
import './slideshow.css';
import './jobportal.actions';
//import './slideshow.actions';

export default {
  title: 'Job Portal/Pages',
 
 argTypes: {
//  label: { control: 'text' },
//  onClick: { action: 'onClick' },
//    internal: { control: 'boolean' },
/*    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }, */
  },
  
};
const SlideShowHTML = `<div class="views-element-container block block-views block-views-blockhighlighted-block-3">
  
    
      <div><div class="view view-highlighted view-id-highlighted view-display-id-block_3 js-view-dom-id-520041369630f5f7da34647f1411f7dc9334db3bc991a5540c1bf94da3a9606a" data-once="ajax-pager">
  
    
      
      <div class="view-content">
        <div class="skin-default">
    
    <div id="views_slideshow_cycle_main_highlighted-block_3" class="views_slideshow_cycle_main views_slideshow_main viewsSlideshowCycle-processed">
    <div id="views_slideshow_cycle_teaser_section_highlighted-block_3" class="views_slideshow_cycle_teaser_section" style="position: relative; width: 580px; height: 405px;">
     <div id="views_slideshow_cycle_div_highlighted-block_3_0" class="views_slideshow_cycle_slide views_slideshow_slide views-row-1 views-row-odd" style="position: absolute; top: 0px; left: 0px; z-index: 2; opacity: 1;">
      <div class="views-row views-row-0 views-row-odd views-row-first">
  <div class="views-field views-field-field-highlighted-image"><div class="field-content"><a href="/portaldeempleo">  <img src="https://library.austintexas.gov/library/apl_esp-portaldeempleo_job_portal-esp%5B1%5D.jpg" width="580" height="355" alt="" loading="lazy" typeof="foaf:Image">

</a></div></div><div><span><a href="/portaldeempleo">Portal de Empleo</a></span></div>
</div>

  </div>

     <div id="views_slideshow_cycle_div_highlighted-block_3_1" class="views_slideshow_cycle_slide views_slideshow_slide views-row-2 views_slideshow_cycle_hidden views-row-even" style="position: absolute; top: 0px; left: 0px; display: none; z-index: 1; opacity: 0;">
      <div class="views-row views-row-1 views-row-even views-row-last">
  <div class="views-field views-field-field-highlighted-image"><div class="field-content"><a href="/jobportal">  <img src="https://library.austintexas.gov/library/apl-jobportal580_job_portal_1.jpg" width="580" height="355" alt="" loading="lazy" typeof="foaf:Image">

</a></div></div><div><span><a href="/jobportal">Virtual Job Assistance</a></span></div>
</div>

  </div>

  </div>

</div>


          <div class="views-slideshow-controls-bottom clearfix">
        
<div class="item-list"><ul class="widget_pager widget_pager_bottom views-slideshow-pager-bullets views_slideshow_pager_field views-slideshow-pager-field-processed" id="widget_pager_bottom_highlighted-block_3"><li id="views_slideshow_pager_field_item_bottom_highlighted-block_3_0" class="active">0</li><li id="views_slideshow_pager_field_item_bottom_highlighted-block_3_1">1</li></ul></div>


      </div>
        </div>

    </div>
  
          </div>
</div>

  </div>`;
const SidebarHTML = `<div class="apl-sidebar"><h2>Job Portal</h2>
<ul class="jobportal-menu">
	<li><a href="#email">Get an Email Address</a></li>
	<li><a href="#resume">Create Your Resumé</a></li>
	<li><a href="#letter">Write Your Cover Letter</a></li>
	<li><a href="#search">Search for Jobs</a></li>
	<li><a href="#interview">Prepare for Interviews</a></li>
	<li><a href="#coach">Get Job Coaching</a></li>
	<li><a href="#explore-careers">Explore Careers</a></li>
	<li><a href="#skills">Explore Skills &amp; Training</a></li>
	<li><a href="#diverse">Explore Resources for Diverse Populations</a></li>
	<li><a href="#rights">Know Your Rights &amp; Benefits</a></li>
	<li><a href="#unemployment">Understanding Unemployment</a></li>
	<li><a href="#crisis">Crisis Support</a></li>
	<li><a class="usa-button" href="/jobportal/request">Request a Job Coach</a></li>
</ul>
</div>`;
const RequestFormHTML = `<main class="usa-section2" id="main-content">
     <div class="grid-container">
     <div class="grid-row grid-gap">
       <div class="grid-col-12">
         
           <div class="region region-highlighted">
    <div data-drupal-messages-fallback="" class="hidden"></div>

  </div>


                    <div class="usa-alert2 usa-alert--info2">
             <div class="usa-alert__body2">
               <p class="usa-alert__text2">
                   </p><div class="region region-help2">
    <div id="block-uswds-help" role="complementary" class="block block-help block-help-block">
  
    
      <h1>Book a Job Coach</h1>
<div id="apl_intro_w">
<p>We look forward to assisting you in your job search. Tell us a bit about yourself and your job search so we can match you with a Job Coach.</p>
<p>Note: Appointments can also be made by calling the reference line at (512) 974-7400, option 1. Let the librarian know you need to request a job coaching appointment and they will fill out the form on your behalf.</p>
</div>

  </div>

  </div>

               <p></p>
             </div>
           </div>
         
      </div>
    </div>

    <div class="grid-row grid-gap">
        
      <div class="region-content tablet:grid-col-12">
         <div class="region region-content">
    <div id="block-uswds-content" class="block block-system block-system-main-block">
  
    
      <form class="node-job-portal-assistance-request-form node-form" data-drupal-selector="node-job-portal-assistance-request-form" action="/jobportal/request?e=" method="post" id="node-job-portal-assistance-request-form" accept-charset="UTF-8" data-once="form-updated" data-drupal-form-fields="edit-title-0-value,edit-field-do-you-have-a-library-card-0,edit-field-do-you-have-a-library-card-1,edit-field-i-prefer-to-be-contacted-b-0,edit-field-i-prefer-to-be-contacted-b-1,edit-field-jp-phone-0-value,edit-field-jp-email-0-value,edit-field-i-am-interested-in-a-virtu-value,edit-field-i-need-help-1,edit-field-i-need-help-2,edit-field-i-need-help-3,edit-field-i-need-help-4,edit-field-i-need-help-5,edit-field-i-need-help-6,edit-field-i-need-help-7,edit-field-i-need-help-8,edit-field-i-need-help-9,edit-field-how-can-we-help-0-value,edit-field-how-can-we-help-0-format--2,edit-field-i-am-a-n-1,edit-field-i-am-a-n-2,edit-field-i-am-a-n-3,edit-field-i-am-a-n-4,edit-field-i-am-a-n-6,edit-field-i-am-a-n-7,edit-field-anything-else-you-d-like-u-0-value,edit-field-anything-else-you-d-like-u-0-format--2,edit-field-jp-were-you-satisfied,edit-field-were-you-satisfied-with-th,edit-field-jp-did-you-benefit,edit-field-jp-would-you-refer-value,edit-field-jp-which-service,edit-field-jp-which-race-ethnicity,edit-field-jp-what-is-your-age-,edit-field-jp-tell-us-more-0-value,edit-field-jp-tell-us-more-0-format--2,edit-field-jp-5-digit-zip-0-value,edit-submit">
  <input data-drupal-selector="edit-changed" type="hidden" name="changed" value="1652984764">
<div class="field--type-string field--name-title field--widget-string-textfield js-form-wrapper form-wrapper" data-drupal-selector="edit-title-wrapper" id="edit-title-wrapper">      <div class="usa-form-group js-form-item form-item js-form-type-textfield form-item-title-0-value js-form-item-title-0-value">
      
<label for="edit-title-0-value" class="usa-label usa-input--required js-form-required form-required">Name </label>
          <input class="js-text-full text-full form-text required usa-input" data-drupal-selector="edit-title-0-value" type="text" id="edit-title-0-value" name="title[0][value]" value="" size="60" maxlength="255" placeholder="" required="required" aria-required="true">

      </div>

  </div>
<input autocomplete="off" data-drupal-selector="form-yx8lcb9aneepywq5bjzslqgq811w2udaoeul9r1ivgm" type="hidden" name="form_build_id" value="form-YX8lCb9aneePYWQ5BjzslqgQ811w2Udaoeul9R1IVGM">
<input data-drupal-selector="edit-node-job-portal-assistance-request-form" type="hidden" name="form_id" value="node_job_portal_assistance_request_form">
<div class="field--type-boolean field--name-field-do-you-have-a-library-card field--widget-options-buttons js-form-wrapper form-wrapper" data-drupal-selector="edit-field-do-you-have-a-library-card-wrapper" id="edit-field-do-you-have-a-library-card-wrapper"><fieldset data-drupal-selector="edit-field-do-you-have-a-library-card" aria-describedby="edit-field-do-you-have-a-library-card--wrapper--description" id="edit-field-do-you-have-a-library-card--wrapper" class="fieldgroup form-composite required js-form-item form-item js-form-wrapper form-wrapper" required="required" aria-required="true">
      <legend>
    <span class="fieldset-legend js-form-required form-required">  Do you have a library card?</span>
  </legend>
  <div class="fieldset-wrapper">
                <div id="edit-field-do-you-have-a-library-card" class="form-radios"><div class="usa-radio js-form-item form-item js-form-type-radio form-item-field-do-you-have-a-library-card js-form-item-field-do-you-have-a-library-card">
          <input data-drupal-selector="edit-field-do-you-have-a-library-card-0" aria-describedby="edit-field-do-you-have-a-library-card--description" type="radio" id="edit-field-do-you-have-a-library-card-0" name="field_do_you_have_a_library_card" value="0" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-do-you-have-a-library-card-0">No </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field-do-you-have-a-library-card js-form-item-field-do-you-have-a-library-card">
          <input data-drupal-selector="edit-field-do-you-have-a-library-card-1" aria-describedby="edit-field-do-you-have-a-library-card--description" type="radio" id="edit-field-do-you-have-a-library-card-1" name="field_do_you_have_a_library_card" value="1" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-do-you-have-a-library-card-1">Yes </label>
    </div>
</div>

              <div id="edit-field-do-you-have-a-library-card--wrapper--description" data-drupal-field-elements="description" class="description">You do not need a library card to book a job coach, but this information helps us select the most useful resources for you.</div>
      </div>
</fieldset>
</div>
<div class="field--type-boolean field--name-field-i-prefer-to-be-contacted-b field--widget-options-buttons js-form-wrapper form-wrapper" data-drupal-selector="edit-field-i-prefer-to-be-contacted-b-wrapper" id="edit-field-i-prefer-to-be-contacted-b-wrapper"><fieldset data-drupal-selector="edit-field-i-prefer-to-be-contacted-b" id="edit-field-i-prefer-to-be-contacted-b--wrapper" class="fieldgroup form-composite required js-form-item form-item js-form-wrapper form-wrapper" required="required" aria-required="true">
      <legend>
    <span class="fieldset-legend js-form-required form-required">I prefer to be contacted by...</span>
  </legend>
  <div class="fieldset-wrapper">
                <div id="edit-field-i-prefer-to-be-contacted-b" class="form-radios"><div class="usa-radio js-form-item form-item js-form-type-radio form-item-field-i-prefer-to-be-contacted-b js-form-item-field-i-prefer-to-be-contacted-b">
          <input data-drupal-selector="edit-field-i-prefer-to-be-contacted-b-0" type="radio" id="edit-field-i-prefer-to-be-contacted-b-0" name="field_i_prefer_to_be_contacted_b" value="0" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-prefer-to-be-contacted-b-0">Phone </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field-i-prefer-to-be-contacted-b js-form-item-field-i-prefer-to-be-contacted-b">
          <input data-drupal-selector="edit-field-i-prefer-to-be-contacted-b-1" type="radio" id="edit-field-i-prefer-to-be-contacted-b-1" name="field_i_prefer_to_be_contacted_b" value="1" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-prefer-to-be-contacted-b-1">Email </label>
    </div>
</div>

          </div>
</fieldset>
</div>
<div class="field--type-string field--name-field-jp-phone field--widget-string-textfield js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-phone-wrapper" id="edit-field-jp-phone-wrapper">      <div class="usa-form-group js-form-item form-item js-form-type-textfield form-item-field-jp-phone-0-value js-form-item-field-jp-phone-0-value">
      
<label for="edit-field-jp-phone-0-value" class="usa-label">Phone </label>
          <input class="js-text-full text-full form-text usa-input" data-drupal-selector="edit-field-jp-phone-0-value" type="text" id="edit-field-jp-phone-0-value" name="field_jp_phone[0][value]" value="" size="60" maxlength="255" placeholder="">

      </div>

  </div>
<div class="field--type-string field--name-field-jp-email field--widget-string-textfield js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-email-wrapper" id="edit-field-jp-email-wrapper">      <div class="usa-form-group js-form-item form-item js-form-type-textfield form-item-field-jp-email-0-value js-form-item-field-jp-email-0-value">
      
<label for="edit-field-jp-email-0-value" class="usa-label">Email </label>
          <input class="js-text-full text-full form-text usa-input" data-drupal-selector="edit-field-jp-email-0-value" type="text" id="edit-field-jp-email-0-value" name="field_jp_email[0][value]" value="" size="60" maxlength="255" placeholder="">

      </div>

  </div>
<div class="field--type-boolean field--name-field-i-am-interested-in-a-virtu field--widget-boolean-checkbox js-form-wrapper form-wrapper" data-drupal-selector="edit-field-i-am-interested-in-a-virtu-wrapper" id="edit-field-i-am-interested-in-a-virtu-wrapper"><div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-interested-in-a-virtu-value js-form-item-field-i-am-interested-in-a-virtu-value">
          <input data-drupal-selector="edit-field-i-am-interested-in-a-virtu-value" type="checkbox" id="edit-field-i-am-interested-in-a-virtu-value" name="field_i_am_interested_in_a_virtu[value]" value="1" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-interested-in-a-virtu-value">  I am interested in a virtual (video) coaching session. </label>
    </div>
</div>
<div class="field--type-list-string field--name-field__i-need-help- field--widget-options-buttons js-form-wrapper form-wrapper" data-drupal-selector="edit-field-i-need-help-wrapper" id="edit-field-i-need-help-wrapper"><fieldset data-drupal-selector="edit-field-i-need-help-" aria-describedby="edit-field-i-need-help---wrapper--description" id="edit-field-i-need-help---wrapper" class="fieldgroup form-composite required js-form-item form-item js-form-wrapper form-wrapper" required="required" aria-required="true">
      <legend>
    <span class="fieldset-legend js-form-required form-required">  I need help...</span>
  </legend>
  <div class="fieldset-wrapper">
                <div id="edit-field-i-need-help-" class="form-radios"><div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-1" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-1" name="field__i_need_help_" value="1" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-1">Setting up an email address </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-2" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-2" name="field__i_need_help_" value="2" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-2">Creating/formatting a resume or cover letter </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-3" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-3" name="field__i_need_help_" value="3" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-3">Proofreading a resume or cover letter </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-4" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-4" name="field__i_need_help_" value="4" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-4">Searching for jobs </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-5" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-5" name="field__i_need_help_" value="5" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-5">Using a Library resource in my job search (databases, ebooks, etc.) </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-6" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-6" name="field__i_need_help_" value="6" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-6">Troubleshooting an online job application or job search website </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-7" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-7" name="field__i_need_help_" value="7" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-7">Interviewing skills </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-8" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-8" name="field__i_need_help_" value="8" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-8">Other job-related need (Explain below) </label>
    </div>
<div class="usa-radio js-form-item form-item js-form-type-radio form-item-field__i-need-help- js-form-item-field__i-need-help-">
          <input data-drupal-selector="edit-field-i-need-help-9" aria-describedby="edit-field-i-need-help---description" type="radio" id="edit-field-i-need-help-9" name="field__i_need_help_" value="9" class="form-radio usa-radio__input">

        
<label class="usa-radio__label usa-label option" for="edit-field-i-need-help-9">I just have a quick question related to my job search. I don't need a one-on-one appointment. (If you select this option, we will respond to you via email or phone.) </label>
    </div>
</div>

              <div id="edit-field-i-need-help---wrapper--description" data-drupal-field-elements="description" class="description">While we understand you may have questions about more than one of the items listed below, please select the ONE option that best describes your most pressing need. You can request up to three coaching sessions per month.</div>
      </div>
</fieldset>
</div>
<div class="field--type-text-long field--name-field-how-can-we-help- field--widget-text-textarea js-form-wrapper form-wrapper" data-drupal-selector="edit-field-how-can-we-help-wrapper" id="edit-field-how-can-we-help-wrapper">      <div class="js-text-format-wrapper text-format-wrapper js-form-item form-item">
  <div class="usa-form-group js-form-item form-item js-form-type-textarea form-item-field-how-can-we-help--0-value js-form-item-field-how-can-we-help--0-value">
      
<label for="edit-field-how-can-we-help-0-value" class="usa-label">How can we help? </label>
          <div class="form-textarea-wrapper">
  <textarea class="js-text-full text-full form-textarea usa-textarea resize-vertical" data-media-embed-host-entity-langcode="eng" data-drupal-selector="edit-field-how-can-we-help-0-value" aria-describedby="edit-field-how-can-we-help-0--description" id="edit-field-how-can-we-help-0-value" name="field_how_can_we_help_[0][value]" rows="3" cols="60" placeholder="" data-editor-active-text-format="restricted_html"></textarea>
</div>

      </div>
<div class="js-filter-wrapper filter-wrapper js-form-wrapper form-wrapper" data-drupal-selector="edit-field-how-can-we-help-0-format" id="edit-field-how-can-we-help-0-format"><div class="filter-help js-form-wrapper form-wrapper" data-drupal-selector="edit-field-how-can-we-help-0-format-help" id="edit-field-how-can-we-help-0-format-help"><a href="/filter/tips" target="_blank" data-drupal-selector="edit-field-how-can-we-help-0-format-help-about" id="edit-field-how-can-we-help-0-format-help-about">About text formats</a></div>
<div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-how-can-we-help--0-format js-form-item-field-how-can-we-help--0-format">
      
<label for="edit-field-how-can-we-help-0-format--2" class="usa-label">Text format </label>
          <select class="js-filter-list filter-list editor form-select usa-select" data-drupal-selector="edit-field-how-can-we-help-0-format" data-editor-for="edit-field-how-can-we-help-0-value" id="edit-field-how-can-we-help-0-format--2" name="field_how_can_we_help_[0][format]" data-once="editor"><option value="restricted_html" selected="selected">Restricted HTML</option><option value="full_html">Full HTML</option></select>
      </div>
<div class="js-filter-guidelines filter-guidelines js-form-wrapper form-wrapper" data-drupal-selector="edit-field-how-can-we-help-0-format-guidelines" id="edit-field-how-can-we-help-0-format-guidelines" data-once="filter-guidelines"><div data-drupal-format-id="restricted_html" class="filter-guidelines-item filter-guidelines-restricted_html" style="">
  <h4 class="label" style="display: none;">Restricted HTML</h4>
  
  
      
          <ul class="tips">
                      <li>Allowed HTML tags: &lt;a href hreflang&gt; &lt;em&gt; &lt;strong&gt; &lt;cite&gt; &lt;blockquote cite&gt; &lt;code&gt; &lt;ul type&gt; &lt;ol start type&gt; &lt;li&gt; &lt;dl&gt; &lt;dt&gt; &lt;dd&gt; &lt;h2 id&gt; &lt;h3 id&gt; &lt;h4 id&gt; &lt;h5 id&gt; &lt;h6 id&gt;</li>
                      <li>Lines and paragraphs break automatically.</li>
                      <li>Web page addresses and email addresses turn into links automatically.</li>
            </ul>
    
      
  
</div>
</div>
</div>

          <div class="js-text-full text-full description" data-media-embed-host-entity-langcode="eng" data-drupal-selector="edit-field-how-can-we-help-0" id="edit-field-how-can-we-help-0--description">Please tell us how we can help you with the issue you selected above. Let us know what you have tried already.</div>
  </div>

  </div>
<div class="field--type-list-string field--name-field-i-am-a-n- field--widget-options-buttons js-form-wrapper form-wrapper" data-drupal-selector="edit-field-i-am-a-n-wrapper" id="edit-field-i-am-a-n-wrapper"><fieldset data-drupal-selector="edit-field-i-am-a-n-" aria-describedby="edit-field-i-am-a-n---wrapper--description" id="edit-field-i-am-a-n---wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
      <legend>
    <span class="fieldset-legend">I am a(n)...</span>
  </legend>
  <div class="fieldset-wrapper">
                <div id="edit-field-i-am-a-n-" class="form-checkboxes"><div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-a-n--1 js-form-item-field-i-am-a-n--1">
          <input data-drupal-selector="edit-field-i-am-a-n-1" aria-describedby="edit-field-i-am-a-n---description" type="checkbox" id="edit-field-i-am-a-n-1" name="field_i_am_a_n_[1]" value="1" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-a-n-1">Adult job seeker </label>
    </div>
<div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-a-n--2 js-form-item-field-i-am-a-n--2">
          <input data-drupal-selector="edit-field-i-am-a-n-2" aria-describedby="edit-field-i-am-a-n---description" type="checkbox" id="edit-field-i-am-a-n-2" name="field_i_am_a_n_[2]" value="2" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-a-n-2">Teen job seeker </label>
    </div>
<div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-a-n--3 js-form-item-field-i-am-a-n--3">
          <input data-drupal-selector="edit-field-i-am-a-n-3" aria-describedby="edit-field-i-am-a-n---description" type="checkbox" id="edit-field-i-am-a-n-3" name="field_i_am_a_n_[3]" value="3" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-a-n-3">Older adult job seeker (60+) </label>
    </div>
<div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-a-n--4 js-form-item-field-i-am-a-n--4">
          <input data-drupal-selector="edit-field-i-am-a-n-4" aria-describedby="edit-field-i-am-a-n---description" type="checkbox" id="edit-field-i-am-a-n-4" name="field_i_am_a_n_[4]" value="4" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-a-n-4">A job seeker with disabilities </label>
    </div>
<div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-a-n--6 js-form-item-field-i-am-a-n--6">
          <input data-drupal-selector="edit-field-i-am-a-n-6" aria-describedby="edit-field-i-am-a-n---description" type="checkbox" id="edit-field-i-am-a-n-6" name="field_i_am_a_n_[6]" value="6" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-a-n-6">Former military/veteran job seeker </label>
    </div>
<div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-i-am-a-n--7 js-form-item-field-i-am-a-n--7">
          <input data-drupal-selector="edit-field-i-am-a-n-7" aria-describedby="edit-field-i-am-a-n---description" type="checkbox" id="edit-field-i-am-a-n-7" name="field_i_am_a_n_[7]" value="7" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-i-am-a-n-7">Formerly incarcerated job seeker </label>
    </div>
</div>

              <div id="edit-field-i-am-a-n---wrapper--description" data-drupal-field-elements="description" class="description">Please check as many as applicable to help us match you to a Job Coach.</div>
      </div>
</fieldset>
</div>
<div class="field--type-text-long field--name-field-anything-else-you-d-like-u field--widget-text-textarea js-form-wrapper form-wrapper" data-drupal-selector="edit-field-anything-else-you-d-like-u-wrapper" id="edit-field-anything-else-you-d-like-u-wrapper">      <div class="js-text-format-wrapper text-format-wrapper js-form-item form-item">
  <div class="usa-form-group js-form-item form-item js-form-type-textarea form-item-field-anything-else-you-d-like-u-0-value js-form-item-field-anything-else-you-d-like-u-0-value">
      
<label for="edit-field-anything-else-you-d-like-u-0-value" class="usa-label">Anything else you’d like us to know about your job search or your professional background? </label>
          <div class="form-textarea-wrapper">
  <textarea class="js-text-full text-full form-textarea usa-textarea resize-vertical" data-media-embed-host-entity-langcode="eng" data-drupal-selector="edit-field-anything-else-you-d-like-u-0-value" id="edit-field-anything-else-you-d-like-u-0-value" name="field_anything_else_you_d_like_u[0][value]" rows="3" cols="60" placeholder="" data-editor-active-text-format="restricted_html"></textarea>
</div>

      </div>
<div class="js-filter-wrapper filter-wrapper js-form-wrapper form-wrapper" data-drupal-selector="edit-field-anything-else-you-d-like-u-0-format" id="edit-field-anything-else-you-d-like-u-0-format"><div class="filter-help js-form-wrapper form-wrapper" data-drupal-selector="edit-field-anything-else-you-d-like-u-0-format-help" id="edit-field-anything-else-you-d-like-u-0-format-help"><a href="/filter/tips" target="_blank" data-drupal-selector="edit-field-anything-else-you-d-like-u-0-format-help-about" id="edit-field-anything-else-you-d-like-u-0-format-help-about">About text formats</a></div>
<div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-anything-else-you-d-like-u-0-format js-form-item-field-anything-else-you-d-like-u-0-format">
      
<label for="edit-field-anything-else-you-d-like-u-0-format--2" class="usa-label">Text format </label>
          <select class="js-filter-list filter-list editor form-select usa-select" data-drupal-selector="edit-field-anything-else-you-d-like-u-0-format" data-editor-for="edit-field-anything-else-you-d-like-u-0-value" id="edit-field-anything-else-you-d-like-u-0-format--2" name="field_anything_else_you_d_like_u[0][format]" data-once="editor"><option value="restricted_html" selected="selected">Restricted HTML</option><option value="full_html">Full HTML</option></select>
      </div>
<div class="js-filter-guidelines filter-guidelines js-form-wrapper form-wrapper" data-drupal-selector="edit-field-anything-else-you-d-like-u-0-format-guidelines" id="edit-field-anything-else-you-d-like-u-0-format-guidelines" data-once="filter-guidelines"><div data-drupal-format-id="restricted_html" class="filter-guidelines-item filter-guidelines-restricted_html" style="">
  <h4 class="label" style="display: none;">Restricted HTML</h4>
  
  
      
          <ul class="tips">
                      <li>Allowed HTML tags: &lt;a href hreflang&gt; &lt;em&gt; &lt;strong&gt; &lt;cite&gt; &lt;blockquote cite&gt; &lt;code&gt; &lt;ul type&gt; &lt;ol start type&gt; &lt;li&gt; &lt;dl&gt; &lt;dt&gt; &lt;dd&gt; &lt;h2 id&gt; &lt;h3 id&gt; &lt;h4 id&gt; &lt;h5 id&gt; &lt;h6 id&gt;</li>
                      <li>Lines and paragraphs break automatically.</li>
                      <li>Web page addresses and email addresses turn into links automatically.</li>
            </ul>
    
      
  
</div>
</div>
</div>

  </div>

  </div>
<fieldset class="required-fields field-group-fieldset js-form-item form-item js-form-wrapper form-wrapper" data-drupal-selector="jp-admin" id="jp-admin">
      <legend>
    <span class="fieldset-legend">Admin</span>
  </legend>
  <div class="fieldset-wrapper">
                
          </div>
</fieldset>
<fieldset class="required-fields field-group-fieldset js-form-item form-item js-form-wrapper form-wrapper" data-drupal-selector="edit-group-survey" id="edit-group-survey">
      <legend>
    <span class="fieldset-legend">Survey</span>
  </legend>
  <div class="fieldset-wrapper">
                <div class="field--type-list-integer field--name-field-jp-were-you-satisfied field--widget-options-select js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-were-you-satisfied-wrapper" id="edit-field-jp-were-you-satisfied-wrapper"><div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-jp-were-you-satisfied js-form-item-field-jp-were-you-satisfied">
      
<label for="edit-field-jp-were-you-satisfied" class="usa-label">Were you satisfied with the quality of services? </label>
          <select data-drupal-selector="edit-field-jp-were-you-satisfied" id="edit-field-jp-were-you-satisfied" name="field_jp_were_you_satisfied" class="form-select usa-select"><option value="_none">- None -</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
      </div>
</div>
<div class="field--type-list-integer field--name-field-were-you-satisfied-with-th field--widget-options-select js-form-wrapper form-wrapper" data-drupal-selector="edit-field-were-you-satisfied-with-th-wrapper" id="edit-field-were-you-satisfied-with-th-wrapper"><div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-were-you-satisfied-with-th js-form-item-field-were-you-satisfied-with-th">
      
<label for="edit-field-were-you-satisfied-with-th" class="usa-label">Were you satisfied with the quality of materials and resources? </label>
          <select data-drupal-selector="edit-field-were-you-satisfied-with-th" id="edit-field-were-you-satisfied-with-th" name="field_were_you_satisfied_with_th" class="form-select usa-select"><option value="_none">- None -</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
      </div>
</div>
<div class="field--type-list-string field--name-field-jp-did-you-benefit field--widget-options-select js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-did-you-benefit-wrapper" id="edit-field-jp-did-you-benefit-wrapper"><div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-jp-did-you-benefit js-form-item-field-jp-did-you-benefit">
      
<label for="edit-field-jp-did-you-benefit" class="usa-label">Did you benefit from using the job coaching service or job portal? </label>
          <select data-drupal-selector="edit-field-jp-did-you-benefit" id="edit-field-jp-did-you-benefit" name="field_jp_did_you_benefit" class="form-select usa-select"><option value="_none">- None -</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
      </div>
</div>
<div class="field--type-boolean field--name-field-jp-would-you-refer field--widget-boolean-checkbox js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-would-you-refer-wrapper" id="edit-field-jp-would-you-refer-wrapper"><div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-field-jp-would-you-refer-value js-form-item-field-jp-would-you-refer-value">
          <input data-drupal-selector="edit-field-jp-would-you-refer-value" type="checkbox" id="edit-field-jp-would-you-refer-value" name="field_jp_would_you_refer[value]" value="1" class="form-checkbox usa-checkbox__input">

        
<label class="usa-checkbox__label usa-label option" for="edit-field-jp-would-you-refer-value">Would you refer a friend or family member to our job assistance services? </label>
    </div>
</div>
<div class="field--type-list-string field--name-field-jp-which-service field--widget-options-select js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-which-service-wrapper" id="edit-field-jp-which-service-wrapper"><div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-jp-which-service js-form-item-field-jp-which-service">
      
<label for="edit-field-jp-which-service" class="usa-label">Which service(s) did you receive assistance with? </label>
          <select data-drupal-selector="edit-field-jp-which-service" multiple="multiple" name="field_jp_which_service[]" id="edit-field-jp-which-service" class="form-select usa-select"><option value="_none" selected="selected">- None -</option><option value="1">Resume or cover letter</option><option value="2">Setting up email</option><option value="3">Job search</option><option value="4">Job skills</option><option value="5">Interviewing</option><option value="6">Unemployment</option><option value="7">Navigating resources</option></select>
      </div>
</div>
<div class="field--type-list-string field--name-field-jp-which-race-ethnicity field--widget-options-select js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-which-race-ethnicity-wrapper" id="edit-field-jp-which-race-ethnicity-wrapper"><div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-jp-which-race-ethnicity js-form-item-field-jp-which-race-ethnicity">
      
<label for="edit-field-jp-which-race-ethnicity" class="usa-label">Which race / ethnicity do you most identify with? </label>
          <select data-drupal-selector="edit-field-jp-which-race-ethnicity" id="edit-field-jp-which-race-ethnicity" name="field_jp_which_race_ethnicity" class="form-select usa-select"><option value="_none">- None -</option><option value="1">Black</option><option value="2">Asian</option><option value="3">Hispanic / Latino</option><option value="4">White</option><option value="5">Multiracial</option><option value="6">Native American / Alaskan Native</option><option value="7">Hawaiian / Pacific Islander</option><option value="8">Prefer not to say</option><option value="9">Other</option></select>
      </div>
</div>
<div class="field--type-list-string field--name-field-jp-what-is-your-age- field--widget-options-select js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-what-is-your-age-wrapper" id="edit-field-jp-what-is-your-age-wrapper"><div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-jp-what-is-your-age- js-form-item-field-jp-what-is-your-age-">
      
<label for="edit-field-jp-what-is-your-age-" class="usa-label">What is your age? </label>
          <select data-drupal-selector="edit-field-jp-what-is-your-age-" id="edit-field-jp-what-is-your-age-" name="field_jp_what_is_your_age_" class="form-select usa-select"><option value="_none">- None -</option><option value="1">17 or younger</option><option value="2">18-20</option><option value="3">21-29</option><option value="4">30-39</option><option value="5">40-49</option><option value="6">50-59</option><option value="7">60 or older</option></select>
      </div>
</div>
<div class="field--type-text-long field--name-field-jp-tell-us-more field--widget-text-textarea js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-tell-us-more-wrapper" id="edit-field-jp-tell-us-more-wrapper">      <div class="js-text-format-wrapper text-format-wrapper js-form-item form-item">
  <div class="usa-form-group js-form-item form-item js-form-type-textarea form-item-field-jp-tell-us-more-0-value js-form-item-field-jp-tell-us-more-0-value">
      
<label for="edit-field-jp-tell-us-more-0-value" class="usa-label">Tell us more about your experience! </label>
          <div class="form-textarea-wrapper">
  <textarea class="js-text-full text-full form-textarea usa-textarea resize-vertical" data-media-embed-host-entity-langcode="eng" data-drupal-selector="edit-field-jp-tell-us-more-0-value" id="edit-field-jp-tell-us-more-0-value" name="field_jp_tell_us_more[0][value]" rows="5" cols="60" placeholder="" data-editor-active-text-format="restricted_html"></textarea>
</div>

      </div>
<div class="js-filter-wrapper filter-wrapper js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-tell-us-more-0-format" id="edit-field-jp-tell-us-more-0-format"><div class="filter-help js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-tell-us-more-0-format-help" id="edit-field-jp-tell-us-more-0-format-help"><a href="/filter/tips" target="_blank" data-drupal-selector="edit-field-jp-tell-us-more-0-format-help-about" id="edit-field-jp-tell-us-more-0-format-help-about">About text formats</a></div>
<div class="usa-form-group js-form-item form-item js-form-type-select form-item-field-jp-tell-us-more-0-format js-form-item-field-jp-tell-us-more-0-format">
      
<label for="edit-field-jp-tell-us-more-0-format--2" class="usa-label">Text format </label>
          <select class="js-filter-list filter-list editor form-select usa-select" data-drupal-selector="edit-field-jp-tell-us-more-0-format" data-editor-for="edit-field-jp-tell-us-more-0-value" id="edit-field-jp-tell-us-more-0-format--2" name="field_jp_tell_us_more[0][format]" data-once="editor"><option value="restricted_html" selected="selected">Restricted HTML</option><option value="full_html">Full HTML</option></select>
      </div>
<div class="js-filter-guidelines filter-guidelines js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-tell-us-more-0-format-guidelines" id="edit-field-jp-tell-us-more-0-format-guidelines" data-once="filter-guidelines"><div data-drupal-format-id="restricted_html" class="filter-guidelines-item filter-guidelines-restricted_html" style="">
  <h4 class="label" style="display: none;">Restricted HTML</h4>
  
  
      
          <ul class="tips">
                      <li>Allowed HTML tags: &lt;a href hreflang&gt; &lt;em&gt; &lt;strong&gt; &lt;cite&gt; &lt;blockquote cite&gt; &lt;code&gt; &lt;ul type&gt; &lt;ol start type&gt; &lt;li&gt; &lt;dl&gt; &lt;dt&gt; &lt;dd&gt; &lt;h2 id&gt; &lt;h3 id&gt; &lt;h4 id&gt; &lt;h5 id&gt; &lt;h6 id&gt;</li>
                      <li>Lines and paragraphs break automatically.</li>
                      <li>Web page addresses and email addresses turn into links automatically.</li>
            </ul>
    
      
  
</div>
</div>
</div>

  </div>

  </div>
<div class="field--type-integer field--name-field-jp-5-digit-zip field--widget-number js-form-wrapper form-wrapper" data-drupal-selector="edit-field-jp-5-digit-zip-wrapper" id="edit-field-jp-5-digit-zip-wrapper">      <div class="usa-form-group js-form-item form-item js-form-type-number form-item-field-jp-5-digit-zip-0-value js-form-item-field-jp-5-digit-zip-0-value">
      
<label for="edit-field-jp-5-digit-zip-0-value" class="usa-label">What is your 5-digit ZIP Code? </label>
          <input data-drupal-selector="edit-field-jp-5-digit-zip-0-value" type="number" id="edit-field-jp-5-digit-zip-0-value" name="field_jp_5_digit_zip[0][value]" value="" step="1" placeholder="" class="form-number usa-input">

      </div>

  </div>

          </div>
</fieldset>
<div class="usa-form-group js-form-item form-item js-form-type-vertical-tabs form-item- js-form-item- form-no-label">
      
<label for="edit-advanced" class="usa-label visually-hidden">Vertical Tabs </label>
          <div class="entity-meta usa-accordion usa-accordion--bordered vertical-tabs__panes" data-drupal-selector="edit-advanced" data-vertical-tabs-panes="" data-once="vertical-tabs"><input class="vertical-tabs__active-tab" data-drupal-selector="edit-advanced-active-tab" type="hidden" name="advanced__active_tab" value="">
</div>

      </div>
<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Save" class="button button--primary js-form-submit form-submit usa-button">
</div>

</form>

  </div>

  </div>

      </div>
        
    </div>
  </div>
</main>`;
const JobPortalHTML = `<div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">

<p><a class="usa-button usa-button-outline" href="/portaldeempleo" id="apl-button-es" style="float: right; margin: 0 0 10px 10px;">español</a>This Job Portal was created during the COVID-19 Pandemic as a way for Library staff to offer help to the Austin community through a challenging and uncertain job market.</p>

<div id="jobportal">
<div id="email">
<h2><img src="https://library.austintexas.gov/library/misc/email.png"><span class="section-heading">Get an Email Address</span></h2>

<div class="details">
<p><iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" height="305" src="https://player.vimeo.com/video/415251919" width="540"></iframe></p>

<p>Almost <strong>all </strong>job applications require an email address, so this should be the first step in your job search if you don't have one.</p>

<p><strong>Step 1:&nbsp;Pick a free&nbsp;email provider</strong></p>

<p>Select from one of these popular email providers, or the provider of your choice.&nbsp;</p>

<ul>
	<li><a href="https://www.google.com/gmail/about/">Gmail&nbsp;</a><a href="http://www.google.com/gmail/about/">from Google</a>&nbsp;(simple to use)</li>
	<li><a href="https://outlook.live.com/owa/">Outlook Mail from Microsoft</a>&nbsp;(commonly used in office workplaces)</li>
	<li><a href="https://protonmail.com/">Proton Mail</a>&nbsp;(very secure - no phone # required)</li>
</ul>

<p>New to email? We recommend this <a href="https://www.digitallearn.org/courses/intro-to-email">Intro to Email course from DigitalLearn.org </a>(14 minutes).</p>

<p><strong>Step 2: Decide on an&nbsp;Email Address</strong></p>

<p><em>Choose a professional-looking&nbsp;email address that includes your name or initials.&nbsp;</em></p>

<p>Try different combinations of your name until you find one that works, but avoid including any personal information like your birth year. You may find that many&nbsp;other people have the same name as you, so&nbsp;get creative when selecting an email address.&nbsp;</p>

<ul>
	<li>JoeASmith@email.com</li>
	<li>JoeSmith78705@email.com</li>
	<li>JoeSmithAustin@email.com</li>
</ul>

<p><strong>Step 3: Secure Your Account</strong></p>

<p><em>Make sure your account is secure and you don't get "locked out" if you forget your password, by adding a&nbsp;"recovery" email address or phone number to your account.&nbsp;</em></p>

<p>This is a second email address&nbsp;or a phone number, that they can send a special code to if you ever forget your password. If you don't have a second email address, consider setting up another one now.</p>

<p><strong>Step 4: Check Your New Email Account Regularly</strong></p>

<p><em>You'll want to check your email often in case there's news about a job.</em></p>

<p>If you have a cell phone, you can usually find an app for your phone from your email provider, or use the Email App that comes with your phone to link up the new email address you just created.&nbsp;</p>
</div>
</div>

<div id="resume">
<h2><img src="https://library.austintexas.gov/library/misc/resume.png"><span class="section-heading">Create Your Resumé</span></h2>

<div class="details">
<p><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/VjdlraonW2s" width="540"></iframe><br>
Capital Area Workforce Solutions has a more complete video on <a href="https://youtu.be/T17aNU0C1mQ">resumé building</a>.</p>

<h3>What to Include in a Resumé</h3>

<ul>
	<li>Summary at the top of the resumé that includes your strengths and experience</li>
	<li>Job history, including volunteer activities</li>
	<li>Educational history and additional training</li>
	<li>Organizations and memberships relevant to the job</li>
	<li>Contact information (name, phone, email) at the top</li>
</ul>

<h3>Resumé Do's</h3>

<ul>
	<li><em>Use keywords from the job posting</em>&nbsp;and tailor your resumé to suit each application.</li>
	<li><em>Use</em><strong> </strong><a href="https://careernetwork.msu.edu/resources-tools/resumes/action-verbs.html">action verbs</a>.</li>
	<li><em>Be truthful.</em><strong> </strong> State your abilities accurately.</li>
	<li><em>Keep it brief.</em><strong> </strong> Try to limit your resumé to one page, two pages at most.</li>
	<li><em>Be accurate.</em> Proofread your resumé for any errors.&nbsp;</li>
	<li><em>Keep it up-to-date and professional.</em><strong> </strong> Make changes as they occur, and stick to plain-looking fonts to keep your resumé timeless.</li>
</ul>

<h3>Resumé Don'ts</h3>

<ul>
	<li>Avoid saying "References Upon Request", but do include references if there is room.</li>
	<li>Do not include Social Security #, birth date, marital status.</li>
</ul>

<h3>Creating Your Resumé</h3>

<ul>
	<li><a href="/database/brainfuse-jobnow">Brainfuse JobNow</a><br>
	<b>Valid <a href="/mylibrarycard">Library card</a> and password required for remote access. </b><br>
	Free customizable, career-specific resumé templates and resumé resources. Get help from a resumé expert from 2-11 PM Central, or submit your resumé any time through the Resumé Lab and receive detailed feedback in 24 hours.</li>
	<li><a href="https://www.google.com/docs/about/">Google Docs Templates</a><br>
	Offers free resumé templates that are automatically saved and always available online - no need to save to USB. <a href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&amp;flowEntry=SignUp">Requires a free Google account</a>.</li>
	<li><a href="https://www.resume.com/">resume.com</a><br>
	The free, user-friendly resumé builder allows you to print and download your resumé as a PDF or .doc file.</li>
</ul>

<p><strong>Want more resumé</strong><strong>&nbsp;help?</strong></p>

<p><a href="/jobportal/request">Contact us</a> to request a job coach for 1 on 1 assistance.</p>
</div>
</div>

<div id="letter">
<h2><img src="https://library.austintexas.gov/library/misc/cover-letter.png"><span class="section-heading">Write Your Cover Letter</span></h2>

<div class="details">
<p><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/N3jJY8GlXoM" width="560"></iframe></p>

<p>Not every job posting requires a formal cover letter, but these tips can also be useful when writing an email to a potential employer.</p>

<ul>
	<li>Use <em>keywords from the job posting</em> in your letter, but don't repeat information included in your resumé.</li>
	<li>Explain how your skills and personal qualities <em>match the employer's needs.</em></li>
	<li>Focus on what you can do for the employer and <em> how you will contribute to the organization's goals. </em></li>
</ul>

<h3>Creating a Cover Letter</h3>

<ul>
	<li><a href="/database/brainfuse-jobnow">Brainfuse JobNow</a><br>
	<b>Valid <a href="/mylibrarycard">Library card</a> and password required for remote access. </b><br>
	Free customizable, career-specific cover letter templates. Get help from an expert from 2-11 PM Central, or submit your cover letter any time through the Resumé Lab to receive detailed feedback in 24 hours.</li>
	<li><a href="https://www.google.com/docs/about/">Google Docs</a><br>
	Easy to use cover letter templates you can create and access from any device with a Google account (required).<a href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&amp;flowEntry=SignUp"> Create a free Google account.</a></li>
	<li><a href="https://edu.gcfglobal.org/en/coverletters/crafting-your-cover-letter/1/">Crafting Your Cover Letter - GCFLearnFree</a><br>
	Tips on writing and formatting the perfect cover letter.</li>
</ul>

<p><strong>Want more cover letter help?</strong></p>

<p><a href="/jobportal/request">Contact us</a> to request a job coach for 1 on 1 assistance.</p>
</div>
</div>

<div id="search">
<h2><img src="https://library.austintexas.gov/library/misc/job-search2.png"><span class="section-heading">Search for Jobs</span></h2>

<div class="details">
<p><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/afKwiLCUtEQ" width="540"></iframe></p>

<h3>Local Job Search Help</h3>

<ul>
	<li><a href="http://www.wfscapitalarea.com/Job-Seekers/RapidResponseWorkersForm">Austin Rapid Response Workers Form</a><br>
	Assistance&nbsp;with job placement and skills training for workers impacted by COVID.&nbsp;</li>
	<li><a href="http://www.austintexas.gov/department/employment-assistance-centers">City of Austin Employee Assistance Centers</a><br>
	Learn how to search and apply for City jobs with help from specialists.</li>
	<li><a href="https://austin.dressforsuccess.org/about-dfsa/">Dress for Success Austin</a><br>
	Job searching, interview prep and image consulting assistance for women.</li>
	<li><a href="https://www.goodwillcentraltexas.org/education-job-training">Goodwill Education &amp; Job Training</a><br>
	Job search assistance, training and interview coaching for eligible job seekers.</li>
	<li><a href="http://www.wfscapitalarea.com/">Workforce Solutions Capital Area</a><br>
	Find a job, explore careers and gain new, high-demand skills&nbsp;through appointments or virtual events.</li>
</ul>

<h3>Search Local Jobs</h3>

<ul>
	<li><a href="https://www.austincityjobs.org/postings/search">City of Austin Jobs</a></li>
	<li><a href="https://www.traviscountytx.gov/human-resources/jobs">Travis County Jobs</a></li>
	<li><a href="https://www.utexas.edu/jobs">University of Texas Jobs</a></li>
	<li><a href="https://www.workintexas.com/vosnet/Default.aspx">Work in Texas</a></li>
	<li><a href="http://www.wfscapitalarea.com/Job-Seekers/Jobs-Now">Workforce Solutions:&nbsp;Jobs Now</a></li>
</ul>

<h3>Search National Jobs</h3>

<ul>
	<li><a href="https://www.careerbuilder.com/">CareerBuilder</a></li>
	<li><a href="https://www.indeed.com/">Indeed</a></li>
	<li><a href="https://www.linkedin.com/">LinkedIn</a></li>
	<li><a href="https://www.usajobs.gov/">USAJOBS</a></li>
</ul>
</div>
</div>

<div id="interview">
<h2><img src="https://library.austintexas.gov/library/misc/interview.png"><span class="section-heading">Prepare for Interviews</span></h2>

<div class="details">
<p><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/HG68Ymazo18" width="540"></iframe></p>

<p>Interview prep resources:</p>

<ul>
	<li><a href="/database/brainfuse-jobnow">Brainfuse JobNow</a><br>
	<b>Valid <a href="/mylibrarycard">Library card</a> and password required for remote access.&nbsp; </b><br>
	Brush up on interview techniques or get live online interview practice from trained job coaches.</li>
	<li><a href="https://www.careeronestop.org/JobSearch/Interview/interview-tips.aspx">CareerOneStop</a><br>
	Interview resources and tips including interview types, common questions and salary negotiation&nbsp;</li>
	<li><a href="https://edu.gcfglobal.org/en/interviewingskills/">GCFLearnFree</a> - Interviewing Skills. Useful tips and strategies to prepare for, conduct and follow up after a professional job interview.</li>
</ul>

<p><b><strong>Want more interview help?</strong></b></p>

<p><a href="/jobportal/request">Contact us</a> to request a job coach for 1 on 1 assistance.</p>
</div>
</div>

<div id="coach">
<h2><img src="https://library.austintexas.gov/library/misc/job-coach.png"><span class="section-heading">Get Job Coaching</span></h2>

<div class="details">
<p><iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" frameborder="0" height="304" src="https://player.vimeo.com/video/459488883?title=0&amp;byline=0&amp;portrait=0" width="540"></iframe></p>

<p>Job Coaches are available by phone, email or video call. We can help you:</p>

<ul>
	<li>Set up an email address</li>
	<li>Proofread and format resumés&nbsp;and cover letters</li>
	<li>Use Library and web resources for your job search</li>
	<li>Troubleshoot online applications</li>
	<li>Navigate a career transition</li>
	<li>Prepare for your interview</li>
</ul>

<p><b><a class="usa-button" href="/jobportal/request">Request a Job Coach</a></b></p>

<ul>
</ul>
</div>
</div>

<div id="explore-careers">
<h2><img src="https://library.austintexas.gov/library/misc/explore-career.png"><span class="section-heading">Explore Careers</span></h2>

<div class="details">
<p><b><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/K2mP36DoekA" width="540"></iframe></b></p>

<h3>Career Outlook and Guidance&nbsp;</h3>

<ul>
	<li><a href="https://www.careeronestop.org/ExploreCareers/explore-careers.aspx">CareerOneStop&nbsp;</a><br>
	Offers self-assessment tools to find the best career for you&nbsp;</li>
	<li><a href="https://www.myfuture.com/">MyFuture&nbsp;</a><br>
	Explore different careers and pathways, including skilled trades &amp; military service&nbsp;</li>
	<li><a href="https://www.bls.gov/ooh/">Occupational Outlook Handbook</a><br>
	Learn about working conditions,&nbsp;training, earnings and job outlook for hundreds of different occupations.</li>
	<li><a href="https://www.wfscapitalarea.com/resources/targeted-occupations-and-industries/">Targeted Occupations and Industries</a><br>
	Explore growing career fields&nbsp;and&nbsp;opportunities&nbsp;for high-skill, high-wage jobs.</li>
	<li><a href="https://wfscapitalarea.emsicc.com/?radius=&amp;region=Austin-Round%20Rock">Workforce Solutions Career Coach&nbsp;</a><br>
	Discover majors and in-demand careers and education based on your interests.&nbsp;</li>
</ul>

<h3>Certificates and Licenses</h3>

<ul>
	<li><a href="https://www.austincc.edu/campaign/fast-track-careers">ACC Fast Track Careers</a><br>
	Train for a new career quickly and affordably at Austin Community College.</li>
	<li><a href="http://www.dshs.state.tx.us/food-handlers/training/online.aspx">Accredited Food Handler Training&nbsp;Programs</a></li>
	<li><a href="https://www.goodwillcentraltexas.org/education-job-training/goodwill-career-technical-academy">Goodwill Career &amp; Technical Academy</a><br>
	Provides accelerated training for professional career certifications in high-demand fields at little to no cost.</li>
	<li><a href="/database/learningexpress-library">Learning Express Library</a><br>
	<b>Valid <a href="https://library.austintexas.gov/mylibrarycard">Library card</a> and password required for remote access.&nbsp; </b><br>
	Professional and certification practice tests and skill building for all ages.</li>
	<li><a href="http://skillpointalliance.org/">Skillpoint Alliance</a><br>
	Apply for free, fast training in the skilled trades and manufacturing.</li>
	<li><a href="http://www.tabc.state.tx.us/training_and_certification/approved_seller_training_schools.asp">TABC Certification&nbsp;Schools</a></li>
</ul>
</div>
</div>

<div id="skills">
<h2><img src="https://library.austintexas.gov/library/misc/explore-skills.png"><span class="section-heading">Explore Skills &amp; Training </span></h2>

<div class="details">
<h3>Resource Introductions</h3>
<b><!--Niche Academy Widget--><script async="" src="https://my.nicheacademy.com/api/widgets/austintexas"></script><!--Niche Academy Widget--> </b>

<div id="027xhohzkc95"><b>&nbsp;</b></div>
<b> </b>

<h3>Skill &amp; Training Resources</h3>
<b> </b>

<ul>
	<li><a href="/database/infobase-learning-cloud">Infobase Learning Cloud</a><br>
	<b>Valid <a href="/mylibrarycard">Library card</a> and password required for remote access.&nbsp; </b><br>
	Short online tutorials for over 150 software applications, job searching and career skills.</li>
	<li><a href="/database/learningexpress-library">Learning Express Library</a><br>
	<b>Valid <a href="/mylibrarycard">Library card</a> and password required for remote access.&nbsp; </b><br>
	Nearly 1,000 online tutorials, practice tests and eBooks, as well as job search training and workplace skills improvement.</li>
	<li><a href="https://connectatx.unitedwayaustin.org/v2/favorites/public/job-training-education">ConnectATX</a><br>
	Job training and education opportunities across Austin.</li>
	<li><a href="https://edu.gcfglobal.org/en/topics/computers/">GCFLearnFree&nbsp;</a><br>
	A range of helpful computer tutorials covering a number of introductory topics.&nbsp;</li>
	<li><a href="https://www.wfscapitalarea.com/events/">Workforce Solutions Events</a><br>
	Local events calendar highlighting virtual training sessions on a variety of topics for job-seekers.</li>
</ul>

<p><strong>Want more help with training?&nbsp;</strong></p>

<p><a href="/jobportal/request">Contact us</a>&nbsp;to request a job coach for 1 on 1 assistance.&nbsp;</p>
<b> </b></div>
</div>

<div id="diverse">
<h2><img src="https://library.austintexas.gov/library/misc/diverse.png"><span class="section-heading">Explore Resources for Diverse Populations</span></h2>

<div class="details">
<h2><b>Teens</b></h2>

<div class="details">
<p><b><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/88Mwb2bnOMk" width="540"></iframe></b></p>

<h3>How to land a job as a teen</h3>

<ol>
	<li>Brainstorm and research job options<span>&nbsp;</span>- don't limit yourself to "teen" jobs like fast food.</li>
	<li><a href="https://www.careeronestop.org/GetMyFuture/Employment/get-work-experience.aspx">Gain experience (and a reference)</a><span>&nbsp;</span>- small jobs &amp; volunteering pay off, big time.&nbsp;</li>
	<li><a href="http://www.careeronestop.org/JobSearch/Resumes/ResumeGuide/TopResumeStrategies/identify-transferable-skills.aspx">Be able to name your skills</a> - you've got marketable skills (we promise).</li>
	<li><a href="https://edu.gcfglobal.org/en/jobsearchandnetworking/3-steps-to-identifying-transferable-skills/1/">Get your documents together to apply</a>&nbsp;-&nbsp;your application will be a breeze.</li>
	<li s=""><a href="https://www.youthcentral.vic.gov.au/jobs-and-careers/job-interviews/preparing-for-a-job-interview/10-job-interview-tips">Know how to ace your interview</a><span>&nbsp;</span>- interviews are the final exam (not a pop quiz).</li>
</ol>

<h3>Teen Job Opportunities</h3>

<p>Explore some of our favorite employment opportunities just for teens.&nbsp;</p>

<ul>
	<li><a href="https://www.apprenticeship.gov/">Apprenticeship.gov</a><br>
	Want to gain a trade? Find apprenticeship opportunities in the&nbsp;Austin-area for skills like electrician, plumber&nbsp;and masonry.&nbsp;</li>
	<li><a href="http://austintexas.gov/page/about-esb-macc-caminos">Caminos at the MACC</a><br>
	The Caminos is a 1-year paid youth leadership program at the Mexican American Cultural Center.</li>
	<li><a href="https://www.austintexas.gov/department/about-youth-family-servicesyouth-initiatives">City of Austin Summer Interns&nbsp;</a><br>
	One application for 4 different internships, and you're matched based on your future career interests. Application deadline is usually first week in March.&nbsp;</li>
	<li><a href="https://www.austintexas.gov/page/youth-employment-and-program-opportunities">City of Austin Youth Employment &amp; Volunteer Opportunities</a><br>
	See all youth volunteer and employment programs citywide at a glance - some are volunteer, but those at Austin Public Health and the Parks &amp; Rec Department are paying jobs.</li>
	<li><a href="https://e4youth.org/programs-2/">e4 Youth</a><br>
	The e4 Youth Organization has several different paid jobs for Teens, including their Creative Mentor and Shadow the Pros programs.</li>
	<li><a href="https://www.goodwillcentraltexas.org/education-job-training/opportunities-for-youth">Goodwill&nbsp;</a><br>
	Eligible applicants can receive one-on-one assistance from a case manager to reach&nbsp;educational&nbsp;and career goals.&nbsp;</li>
	<li><a href="https://www.traviscountytx.gov/health-human-services/children-and-youth/employment-program">Travis County Summer Youth Employment Program&nbsp;</a><br>
	Eligible applicants&nbsp;can apply to this paid work-based learning opportunity.&nbsp;</li>
</ul>

<p><strong>Need more help?&nbsp;</strong></p>

<p><a href="/jobportal/request">Contact us</a>&nbsp;to request a job coach for 1 on 1 assistance.&nbsp;</p>
</div>

<h2><b>Older Adults</b></h2>

<div class="details">
<p><b><iframe allowfullscreen="" frameborder="0" height="305" scrolling="no" src="https://players.brightcove.net/3772599298001/ryhhcDoG_default/index.html?videoId=5755619203001" width="540"></iframe></b></p>

<h3>Resources for Older Adults</h3>

<ul>
	<li><a href="https://www.aarp.org/work/job-search/info-2020/part-time-jobs-for-retirees.html">AARP: Top 25 Part-Time Jobs for Older Adults</a><br>
	Information on pay, job satisfaction and the average amount of time spent sitting and standing on the job.</li>
	<li><a href="https://learn.aarp.org/work-jobs-landing-page">AARP Work &amp; Jobs</a><br>
	Job search tips and resources for older adults.</li>
	<li><a href="https://www.austinup.org/events/">AustinUp Events Calendar</a><br>
	<span style="color: #333333;">Local advocacy group hosting a variety of events for job seekers throughout the year, including 50+ job fairs</span>.</li>
	<li><a href="https://www.careeronestop.org/ResourcesFor/OlderWorker/older-worker.aspx">CareerOneStop Resources for Older Workers</a><br>
	Tips on navigating stereotypes, job searching, interviewing and more.</li>
	<li><a href="http://www.ssa.gov/planners/retire/whileworking.html">Social Security&nbsp;Benefits Planner</a><br>
	How to work while collecting Social Security payments.</li>
</ul>

<p><strong>Need more help?&nbsp;</strong></p>

<p><a href="/jobportal/request">Contact us</a>&nbsp;to request a job coach for 1 on 1 assistance.&nbsp;</p>
</div>

<div id="abilities">
<h2><b>People of All Abilities</b></h2>

<div class="details">
<p><b><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/f8lh47Kuv_s" width="540"></iframe></b></p>

<h3>Resources for Workers of All Abilities</h3>

<ul>
	<li><a href="https://abilityjobs.com/job-seeker-services/">abilityJOBS</a><br>
	Job&nbsp;openings&nbsp;posted by employers seeking to hire employees with disabilities.</li>
	<li><a href="https://www.careeronestop.org/ResourcesFor/WorkersWithDisabilities/workers-with-disabilities.aspx">CareerOneStop: Navigating the Job Search for All Abilities</a><br>
	Find resources and information to support your successful employment.&nbsp;</li>
	<li><a href="https://askjan.org/index.cfm">Job Accommodation Network</a><br>
	Free, expert and confidential guidance on workplace accommodations and disability employment issues.</li>
	<li><a href="https://www.twc.texas.gov/jobseekers/vocational-rehabilitation-services" rel="noreferrer noopener" target="_blank">Texas Workforce Commission Vocational Rehabilitation Services</a>&nbsp;<br>
	Work with&nbsp;counselors&nbsp;to&nbsp;set and achieve your career objectives.&nbsp;</li>
	<li><a href="https://www.wfscapitalarea.com/our-services/job-search-training/#disabilities" rel="noreferrer noopener" target="_blank">Workforce Solutions Career Centers</a>&nbsp;<br>
	Accessibility equipment available including JAWS,&nbsp;Zoomtext, CCTV and more.</li>
</ul>

<p><strong>Need more help?&nbsp;</strong></p>

<p><a href="/jobportal/request">Contact us</a>&nbsp;to request a job coach for 1 on 1 assistance.&nbsp;</p>
</div>
</div>

<h2><b>Military &amp; Veterans</b></h2>

<div class="details">
<p><b><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/OpCI1T-PjKg" width="540"></iframe></b></p>

<h3>Veteran Services</h3>

<ul>
	<li><a href="https://www.careeronestop.org/Veterans/JobSearch/FindOpenings/find-openings.aspx" rel="noreferrer noopener" target="_blank">CareerOneStop</a>&nbsp;<br>
	Find civilian careers based on your military experience.</li>
	<li><a href="https://veterans.usnlx.com/" rel="noreferrer noopener" target="_blank">National Labor Exchange</a>&nbsp;<br>
	Search jobs from veteran-friendly employers.&nbsp;</li>
	<li><a href="https://www.tvc.texas.gov/employment/veterans/">Texas Veterans Commission</a><br>
	Access&nbsp;one-on-one job assistance in addition to other&nbsp;veteran services.</li>
	<li><a href="https://www.texvet.org/employment-and-business">TexVet</a><br>
	Search veteran-focused employment and business resources in Texas.&nbsp;</li>
	<li><a href="https://www.benefits.va.gov/vocrehab/index.asp" rel="noreferrer noopener" target="_blank">Veteran Readiness &amp; Employment</a><br>
	The Veterans Benefits Administration provides job training, resumé development and employment accommodations.</li>
</ul>

<p><strong>Need more help?&nbsp;</strong></p>

<p><a href="/jobportal/request">Contact us</a>&nbsp;to request a job coach for 1 on 1 assistance.&nbsp;</p>
</div>

<h2><b>Formerly Incarcerated People</b></h2>

<div class="details">
<p><b><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/NgmqTsBi92A" width="540"></iframe></b></p>

<h3>Reentry Resources</h3>

<ul>
	<li><a href="https://www.70millionjobs.com/" rel="noreferrer noopener" target="_blank">70 Million Jobs</a>&nbsp;<br>
	Create a free account and access second chance job&nbsp;opportunities.&nbsp;&nbsp;</li>
	<li><a href="https://www.careeronestop.org/ExOffender/default.aspx" rel="noreferrer noopener" target="_blank">CareerOneStop&nbsp;Job Search&nbsp;Help</a>&nbsp;<br>
	Find&nbsp;&nbsp;state resources, find employers and&nbsp;tips on how to talk about your past.</li>
	<li><a href="https://www.consumer.ftc.gov/articles/0157-background-checks">Federal Trade Commission</a><br>
	Everything you need to know about background checks.</li>
	<li><a href="https://www.reentryroundtable.org/get-help/">Reentry Roundtable</a><br>
	Resources and network building for individuals reentering the community.</li>
	<li><a href="https://www.texascjc.org/county-resources?field_resources_list_value%5B%5D=D&amp;field_county_value=227">Texas Criminal Justice Coalition</a><br>
	Find employment services in Travis County.</li>
	<li><a href="https://lawlibrary.traviscountytx.gov/services/reference-attorney-for-expunctions">Travis County Law Library</a><br>
	Get help clearing your arrest record from a no-cost attorney.</li>
</ul>
</div>
</div>

<div id="rights">
<h2><img src="https://library.austintexas.gov/library/misc/rights.png"><span class="section-heading">Know Your Rights &amp; Benefits</span></h2>

<div class="details">
<p><b><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/DBTmNm8D-84" width="540"></iframe></b></p>

<h3>Healthcare.gov Resources</h3>

<ul>
	<li><a href="https://www.healthcare.gov/apply-and-enroll/get-help-applying/" rel="noreferrer noopener" target="_blank">Help Applying</a>&nbsp;<br>
	Get assistance on your application and enroll now.</li>
	<li><a href="https://www.healthcare.gov/have-job-based-coverage/if-you-lose-job-based-coverage/" rel="noreferrer noopener" target="_blank">Lost Your Job?</a>&nbsp;&nbsp;<br>
	Learn about your options to get healthcare coverage.</li>
	<li><a href="https://www.healthcare.gov/choose-a-plan/comparing-plans/" rel="noreferrer noopener" target="_blank">Picking a Plan&nbsp;</a><br>
	Helpful tips and tutorials to help select the healthcare plan that is right for you.</li>
</ul>

<h3>Retirement Planning&nbsp;</h3>

<ul>
	<li><a href="https://www.aarp.org/money/money_tools/" rel="noreferrer noopener" target="_blank">AARP&nbsp;Money Tools</a>&nbsp;<br>
	Several useful calculators for planning your&nbsp;retirement.</li>
	<li><a href="https://www.ssa.gov/planners/retire/">Retirement Planner</a><br>
	Learn how to apply for and manage your Social Security benefits.</li>
</ul>

<h3>Employment Rights &amp; Laws</h3>

<ul>
	<li><a href="https://guides.sll.texas.gov/covid-19/employment#s-lg-box-wrapper-27296374" rel="noreferrer noopener" target="_blank">COVID-19 &amp; Texas Law</a>&nbsp;<br>
	Access helpful pandemic-related resources from the Texas State Law Library.</li>
	<li><a href="https://www.osha.gov/workers/" rel="noreferrer noopener" target="_blank">OSHA Worker Rights &amp; Protections</a><br>
	Learn about your right to safety in the workplace.</li>
	<li><a href="https://www.twc.texas.gov/jobseekers/employee-rights-laws">Texas Workforce Commission</a><br>
	File a discrimination complaint, claim unpaid wages and learn more about your rights.</li>
</ul>
</div>
</div>

<div id="unemployment">
<h2><img src="https://library.austintexas.gov/library/misc/unemployment.png"><span class="section-heading">Understanding Unemployment</span></h2>

<div class="details">
<p><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="305" src="https://www.youtube.com/embed/SXdE0x_O-rE" width="540"></iframe></p>

<p><strong><a href="https://www.twc.state.tx.us/jobseekers/unemployment-benefits-services" rel="noreferrer noopener" target="_blank">Texas Workforce Commission’s Unemployment Benefits Services</a>&nbsp;</strong></p>

<p>You Will Need:</p>

<ul>
	<li><a href="https://apps.twc.state.tx.us/UBS/security/selfRegister.do" rel="noreferrer noopener" target="_blank">A Texas Workforce Commission Account</a></li>
	<li>Last employer's business name and address</li>
	<li>First and last dates (month, day and year) you worked for your last employer</li>
	<li>Number of hours worked and pay rate if you worked this week (including Sunday)</li>
	<li>Information related to your normal wage</li>
	<li>Alien Registration Number (if not a U.S. citizen or national)</li>
</ul>

<p>Need Help?</p>

<ul>
	<li>See a <a href="https://www.twc.texas.gov/files/jobseekers/tutorial-apply-for-benefits-online-twc.pdf"> tutorial on how to apply for benefits online </a> .</li>
	<li><a href="/database/brainfuse-jobnow">Brainfuse JobNow</a><br>
	<b>Valid <a href="/mylibrarycard">Library card</a> and password required for remote access. </b><br>
	Connect with an expert for unemployment benefits assistance Monday - Thursday from 3 - 9 PM Central.</li>
	<li><a href="/jobportal/request" target="_blank">Contact us</a>&nbsp;to request a job coach for 1 on 1 assistance.&nbsp;</li>
</ul>
</div>
</div>

<div id="crisis">
<h2><img src="https://library.austintexas.gov/library/misc/crisis-support.png"><span class="section-heading">Crisis Support</span></h2>

<div class="details">
<p><iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" height="305" src="https://player.vimeo.com/video/420788229" width="540"></iframe></p>

<p><b>Local Help</b></p>

<ul>
	<li><a href="https://library.austintexas.libguides.com/c.php?g=1012306&amp;p=7332472">APL COVID-19 Guide</a><br>
	Find&nbsp;pandemic and&nbsp;financial assistance&nbsp;information.</li>
	<li><a href="https://library.austintexas.libguides.com/socialservices/generalaid">APL Social Services Guide</a><br>
	Find local resources for&nbsp;shelter, food, health needs and more.</li>
	<li><a href="http://austintexas.gov/page/basic-needs-support" rel="noreferrer noopener" target="_blank">City of Austin Basic Needs Support</a><br>
	Get help with food, housing and relief funding.</li>
	<li><a href="https://www.austintexas.gov/housing-resources" rel="noreferrer noopener" target="_blank">City of Austin Housing Assistance Resources</a>&nbsp;&nbsp;<br>
	Help for renters, homeowners, and individuals experiencing homelessness.</li>
	<li><a href="https://www.traviscountytx.gov/health-human-services/divisions/family-support-services">Travis County Family Support Services</a><br>
	Rent, mortgage &amp; utilities assistance to eligible individuals.</li>
</ul>
</div>
</div>
</div>
</div>

<p><b><iframe frameborder="0" height="315" scrolling="no" src="//austin.bibliocommons.com/list/list_browse/user/1622364239" width="550"></iframe></b></p>
</div>`;

export const SlideShow = () => '<div class="column-2">' + SlideShowHTML + '</div>';
export const RequestForm = () => RequestFormHTML;
export const JobPortalSidebar = () => SidebarHTML;
export const JobPortalPage = () => '<div class="column-2">' + JobPortalHTML + '</div>';


