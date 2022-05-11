import { createEventPage } from './EventPage';
import { getNodeString, getNavString } from './Event';

export default {
  title: 'Events/EventPage',
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => createEventPage(args);

const myNode = getNodeString();
const myNav = getNavString();
//export const Snippet = () => '<div class="apl-event apl-event-snippet"><div class="field-title"><a href="/event/all-ages-storytime/all-ages-storytime-7700550" hreflang="eng">All Ages Storytime</a></div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM</div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div></div>';
export const NodePage = () => myNav + myNode;
//export const MyNode;