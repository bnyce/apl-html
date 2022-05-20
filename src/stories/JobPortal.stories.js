import './job-portal.css';

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
export const RequestForm = () => RequestFormHTML;
export const JobPortalSidebar = () => SidebarHTML;


