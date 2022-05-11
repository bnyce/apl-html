import './event.css';
import './icons.css';
import './fixer.css';
import './headers.css';



export function getNodeString() {
    const NodeString = '<div class="apl-event apl-event-node"><div class="field-title">All Ages Storytime</div><div class="apl-event-summary"><div class="apl-event-summary"></div></div><p>Storytime for children aged 5 and under and their parents, featuring stories, songs, fingerplays, rhymes, and crafts or other extension activities. Program length can vary.</p><p>Programs begin on time, for best experience we recommend you do too! Please arrive a few minutes early to gain entrance. Note that in some locations, free tickets (available in the branch on the day of the program) will be required for admittance. Contact individual branches to arrange group visits of 5 or more children to storytimes.</p><div class="apl-rec-age">Recommended for ages 5 and under </div><div class="field-event-time"><i class="material-icons-outlined">schedule</i><div>Wednesday, May 11, 2022 - 10:00 AM to 10:30 AM </div></div><div class="field-event-loc"><i class="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.<div class="apl-central-location">Children\'s Area</div></div></div><div class="apl-free">Free and open to the public | Gratis y abierto al público</div><div class="apl-event-tags">Tags: <a class="usa-button usa-button-outline" href="/events?f[0]=audience_%3A32">Children</a> <a class="usa-button usa-button-outline" href="/events/all-ages-storytime">All Ages Storytime</a> </div></div>';
    return NodeString;
}
export function getNavString() {
    const NavString = '<div id="apl-events-sidebar"><h2>APL Events</h2><ul id="apl-events-nav"><li><a class="usa-button adult" href="https://library.austintexas.gov/events?f%5B0%5D=audience_%3A29">Adult</a></li><li><a class="usa-button children" href="/events?f%5B0%5D=audience_%3A32">Children</a></li><li><a class="usa-button teen" href="https://library.austintexas.gov/events?f%5B0%5D=audience_%3A31">Teen</a></li><li><a class="usa-button usa-button-outline all" href="/events">Events List</a></li><li><a class="usa-button usa-button-outline all" href="/events/calendar">Events Calendar</a></li><li><a class="usa-button usa-button-outline all" href="/events/exhibits">Current Exhibits</a></li></ul></div>';
    return NavString;
}

export const createEvent = ({
  internal = false,
  subject,
  body,
  onClick,
}) => {
  const evnt = document.createElement('email');
  evnt.type = 'email';
  evnt.innerText = body;
  evnt.addEventListener('click', onClick);

  const mode = internal ? 'storybook-email--internal' : 'storybook-email--secondary';
  evnt.className = ['storybook-email', `storybook-email--${internal}`, mode].join(' ');

//  evnt.style.backgroundColor = backgroundColor;

  return evnt;
};
