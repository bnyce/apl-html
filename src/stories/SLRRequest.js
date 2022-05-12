
export function getSLRRequestString() {
    const SLRRequestString = '<form class="webform-submission-form webform-submission-add-form webform-submission-shared-learning-room-reservation-form webform-submission-shared-learning-room-reservation-add-form js-webform-details-toggle webform-details-toggle usa-form" data-drupal-selector="webform-submission-shared-learning-room-reservation-add-form" action="/slr/request?aoeua3=" method="post" id="webform-submission-shared-learning-room-reservation-add-form" accept-charset="UTF-8" data-once="form-updated" data-drupal-form-fields="edit-agreement,edit-meeting-topic,edit-how-many-people-,edit-duration,edit-reservation-date,edit-full-name,edit-email,edit-room,edit-time-start-date,edit-time-start-time,edit-time-end-date,edit-time-end-time,edit-submit"> <div id="edit-introduction" class="usa-form-group js-form-item form-item js-form-type-processed-text form-item- js-form-item- form-no-label"> <h1>Reserve a Shared Learning Room</h1><p>The Shared Learning Rooms at the <strong>Central Library</strong> are <strong>free of charge</strong> and available to any person or group for activities such as study groups, workshops, or meetings. Rooms hold between 4-10 people. If you have a bigger group, check out our other <a href="/meeting-rooms">meeting rooms</a>.</p><p><a class="usa-button usa-button-outline" href="/slr/calendar" target="_blank">View the reservations calendar</a></p><p><strong>Before you book</strong></p><ul><li>Rooms can hold 4, 8 or 10 people</li><li>Request from 15 minutes up to a 2-hour block of time</li><li>Rooms can be booked up to 2 weeks and not less than 2 hours in advance</li><li>Individuals/groups can make 1 reservation per day and up to 5 reservations per month</li><li>Beverages with lids are allowed. Please no food in the rooms</li><li>If the reserving party is more than 15 minutes late, they forfeit the reservation</li></ul> </div><div class="usa-checkbox js-form-item form-item js-form-type-checkbox form-item-agreement js-form-item-agreement"> <div class="description"> <div id="edit-agreement--description" class="webform-element-description"><a href="http://austinlibrary.com/downloads/shared_learning_rooms_policy.pdf">Shared Learning Rooms Policy (.pdf)</a></div></div><input data-drupal-selector="edit-agreement" aria-describedby="edit-agreement--description" type="checkbox" id="edit-agreement" name="agreement" value="1" class="form-checkbox required usa-checkbox__input" required="required" aria-required="true"> <label class="usa-checkbox__label usa-label usa-input--required option js-form-required form-required" for="edit-agreement">I agree to abide by the Shared Learning Room Policy. </label> </div><div class="usa-form-group js-form-item form-item js-form-type-textfield form-item-meeting-topic js-form-item-meeting-topic"> <label for="edit-meeting-topic" class="usa-label usa-input--required js-form-required form-required">Meeting Topic </label> <input data-drupal-selector="edit-meeting-topic" type="text" id="edit-meeting-topic" name="meeting_topic" value="" size="60" maxlength="255" class="form-text required usa-input" required="required" aria-required="true"><div class="form-item__description">Topic will appear in calendar</div></div><div class="usa-form-group js-form-item form-item js-form-type-number form-item-how-many-people- js-form-item-how-many-people-"> <label for="edit-how-many-people-" class="usa-label usa-input--required js-form-required form-required">How many people? </label> <input data-drupal-selector="edit-how-many-people-" type="number" id="edit-how-many-people-" name="how_many_people_" value="" step="any" min="1" max="10" class="form-number required usa-input" required="required" aria-required="true"> </div><div class="usa-form-group js-form-item form-item js-form-type-select form-item-duration js-form-item-duration"> <label for="edit-duration" class="usa-label usa-input--required js-form-required form-required">Duration </label> <select data-drupal-selector="edit-duration" id="edit-duration" name="duration" class="form-select required usa-select" required="required" aria-required="true"><option value="">- Select -</option><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="45">45 minutes</option><option value="60">1 hour</option><option value="75">1 hour 15 minutes</option><option value="90">1 hour 30 minutes</option><option value="105">1 hour 45 minutes</option><option value="120" selected="selected">2 hours</option></select> </div><div class="usa-form-group js-form-item form-item js-form-type-date form-item-reservation-date js-form-item-reservation-date"> <label for="edit-reservation-date" class="usa-label usa-input--required js-form-required form-required">Reservation Date </label> <input data-days="1,2,3,4,5,6" type="date" data-drupal-selector="edit-reservation-date" data-drupal-date-format="Y-m-d" id="edit-reservation-date" name="reservation_date" value="" class="form-date required" required="required" aria-required="true" min="2022-05-12" max="2022-05-26"> <label id="avail_label" for="pp_avail_wrapper" class="form-item__label js-form-required form-required">Available rooms and times:</label><div id="avail_slots"><div id="rez_date"><a class="new_check" href="#">Check availability...</a></div></div></div><div class="usa-form-group js-form-item form-item js-form-type-textfield form-item-full-name js-form-item-full-name"> <label for="edit-full-name" class="usa-label usa-input--required js-form-required form-required">Full Name </label> <input data-drupal-selector="edit-full-name" type="text" id="edit-full-name" name="full_name" value="" size="60" maxlength="255" class="form-text required usa-input" required="required" aria-required="true"> </div><div class="usa-form-group js-form-item form-item js-form-type-email form-item-email js-form-item-email"> <label for="edit-email" class="usa-label usa-input--required js-form-required form-required">Email </label> <input pattern="^((?!\+).)*$" data-webform-pattern-error="Special characters are not allowed" data-drupal-selector="edit-email" type="email" id="edit-email" name="email" value="" size="60" maxlength="254" class="form-email required usa-input" required="required" aria-required="true"> </div><div class="usa-form-group js-form-item form-item js-form-type-select form-item-room js-form-item-room"> <label for="edit-room" class="usa-label usa-input--required js-form-required form-required">Room </label> <select data-drupal-selector="edit-room" class="webform-entity-select form-select required usa-select" id="edit-room" name="room" required="required" aria-required="true"><option value="" selected="selected">- Select -</option><option value="3787">Shared Learning - 207 (Capacity: 8)</option><option value="3788">Shared Learning - 408 (Capacity: 4)</option><option value="3789">Shared Learning - 409 (Capacity: 4)</option><option value="3790">Shared Learning - 471 (Capacity: 10)</option><option value="3792">Shared Learning - 508 (Capacity: 4)</option><option value="3793">Shared Learning - 509 (Capacity: 4)</option><option value="3794">Shared Learning - 522 (Capacity: 10)</option><option value="3796">Shared Learning - 531 (Capacity: 10)</option><option value="3797">Shared Learning - 605 (Capacity: 8)</option><option value="3798">Shared Learning - 613 (Capacity: 8)</option><option value="3799">Shared Learning - 614 (Capacity: 8)</option><option value="3800">Shared Learning - 615 (Capacity: 8)</option><option value="3801">Shared Learning - 621 (Capacity: 10)</option></select> </div><div class="usa-form-group js-form-item form-item js-form-type-datetime form-item-time-start js-form-item-time-start"> <label class="usa-label usa-input--required js-form-required form-required">Time Start </label> <div id="edit-time-start" data-drupal-field-elements="date-time" class="container-inline"> <div class="usa-form-group js-form-item form-item js-form-type-date form-item-time-start-date js-form-item-time-start-date form-no-label"> <label for="edit-time-start-date" class="usa-label usa-input--required visually-hidden js-form-required form-required">Time Start: Date </label> <input data-drupal-selector="edit-time-start-date" title="Date (e.g. 2022-05-12)" type="date" data-drupal-date-format="Y-m-d" placeholder="YYYY-MM-DD" data-help="Enter the date using the format YYYY-MM-DD (e.g., 2022-05-12)." id="edit-time-start-date" name="time_start[date]" value="" size="12" class="form-date required" required="required" aria-required="true"> </div><div class="usa-form-group js-form-item form-item js-form-type-webform-time form-item-time-start-time js-form-item-time-start-time form-no-label"> <label for="edit-time-start-time" class="usa-label usa-input--required visually-hidden js-form-required form-required">Time Start: Time </label> <input data-drupal-selector="edit-time-start-time" title="Time (e.g. 10:02:43)" type="time" step="900" data-webform-time-format="H:i" id="edit-time-start-time" name="time_start[time]" value="" size="12" maxlength="12" class="form-time webform-time required" required="required" aria-required="true"> </div></div></div><div class="usa-form-group js-form-item form-item js-form-type-datetime form-item-time-end js-form-item-time-end"> <label class="usa-label usa-input--required js-form-required form-required">Time End </label> <div id="edit-time-end" data-drupal-field-elements="date-time" class="container-inline"> <div class="usa-form-group js-form-item form-item js-form-type-date form-item-time-end-date js-form-item-time-end-date form-no-label"> <label for="edit-time-end-date" class="usa-label usa-input--required visually-hidden js-form-required form-required">Time End: Date </label> <input data-drupal-selector="edit-time-end-date" title="Date (e.g. 2022-05-12)" type="date" data-drupal-date-format="Y-m-d" placeholder="YYYY-MM-DD" data-help="Enter the date using the format YYYY-MM-DD (e.g., 2022-05-12)." id="edit-time-end-date" name="time_end[date]" value="" size="12" class="form-date required" required="required" aria-required="true"> </div><div class="usa-form-group js-form-item form-item js-form-type-webform-time form-item-time-end-time js-form-item-time-end-time form-no-label"> <label for="edit-time-end-time" class="usa-label usa-input--required visually-hidden js-form-required form-required">Time End: Time </label> <input data-drupal-selector="edit-time-end-time" title="Time (e.g. 10:02:43)" type="time" step="1" data-webform-time-format="H:i" id="edit-time-end-time" name="time_end[time]" value="" size="12" maxlength="12" class="form-time webform-time required" required="required" aria-required="true"> </div></div></div><input autocomplete="off" data-drupal-selector="form-mte15kvktdzygxfxn-plv3ki3mr09nlafh9nzcx42xs" type="hidden" name="form_build_id" value="form-mTe15KVktDzyGXfxn-pLv3Ki3mR09NLAFH9nZcX42xs"><input data-drupal-selector="edit-webform-submission-shared-learning-room-reservation-add-form" type="hidden" name="form_id" value="webform_submission_shared_learning_room_reservation_add_form"><div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input class="webform-button--submit button button--primary js-form-submit form-submit usa-button" data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Submit Request" disabled=""></div></form>';
    return SLRRequestString;
}