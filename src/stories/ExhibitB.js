import './exhibits.css';
import { createImage } from './Image';

export const createExhibitB = ({
  field_ex_main_image,
  title,
  artist,
  about_exhibit,
  about_artist,
  sponsors,
  image_credit,
  location,
  time_start,
  time_end
}) => {
    const exhbt = document.createElement('div');
    exhbt.className = 'apl-exhibit';
    const exhbtcpy = document.createElement('div');
    exhbtcpy.className = 'exhibit-copy';

    const exhbtimg = document.createElement('img');
    exhbtimg.src = `${field_ex_main_image}`;

    exhbt.appendChild(exhbtimg);

    const myTitleWrapper = document.createElement('h1');
    myTitleWrapper.className = 'exhibit-title';
    
    const myArtistWrapper = document.createElement('h2');
    myArtistWrapper.className = 'exhibit-artist';
    myArtistWrapper.innerText = `${artist}`;

    
    const myTimeWrapper = document.createElement('h2');
    myTimeWrapper.className = 'exhibit-time';
    myTimeWrapper.innerText = `${time_start} - ${time_end}`;
    
    const myLocationWrapper = document.createElement('h2');
    myLocationWrapper.className = 'exhibit-location';
    myLocationWrapper.innerHTML = `${location}`;
    
    
    const myAboutExhibitHeadline = document.createElement('h3');
    myAboutExhibitHeadline.className = 'about-exhibit';
    myAboutExhibitHeadline.innerHTML = 'About the Exhibit';
   
    const myAboutWrapper = document.createElement('div');
    myAboutWrapper.className = 'about-exhibit';
    myAboutWrapper.innerHTML = `${about_exhibit}`;
    
    const myAboutArtistHeadline = document.createElement('h3');
    myAboutArtistHeadline.className = 'about-artist';
    myAboutArtistHeadline.innerHTML = 'About the Artist';
   
    const myAboutArtistWrapper = document.createElement('div');
    myAboutArtistWrapper.className = 'about-artist';
    myAboutArtistWrapper.innerHTML = `${about_artist}`;
    
    const mySponsorsHeadline = document.createElement('h3');
    mySponsorsHeadline.className = 'sponsors';
    mySponsorsHeadline.innerHTML = 'Sponsors';
   
    const mySponsorsWrapper = document.createElement('div');
    mySponsorsWrapper.className = 'sponsors';
    mySponsorsWrapper.innerHTML = `${sponsors}`;
    
    
    const myImageCreditHeadline = document.createElement('h4');
    myImageCreditHeadline.className = 'image-credit';
    myImageCreditHeadline.innerHTML = 'Image credit';
   
    const myImageCreditWrapper = document.createElement('div');
    myImageCreditWrapper.className = 'image-credit';
    myImageCreditWrapper.innerHTML = `${image_credit}`;
   
    const myTitle = document.createElement('a');

    myTitle.innerText = `${title}`;
    myTitleWrapper.appendChild(myTitle);
   exhbtcpy.appendChild(myTitleWrapper);
   exhbtcpy.appendChild(myArtistWrapper);
   exhbtcpy.appendChild(myTimeWrapper);
   exhbtcpy.appendChild(myLocationWrapper);
   exhbtcpy.appendChild(myAboutExhibitHeadline);
   exhbtcpy.appendChild(myAboutWrapper);
   exhbtcpy.appendChild(myAboutArtistHeadline);
   exhbtcpy.appendChild(myAboutArtistWrapper);
   exhbtcpy.appendChild(mySponsorsHeadline);
   exhbtcpy.appendChild(mySponsorsWrapper);
   exhbtcpy.appendChild(myImageCreditHeadline);
   exhbtcpy.appendChild(myImageCreditWrapper);
    

    exhbt.appendChild(exhbtcpy);

    return exhbt;
};

export function getExhibitNavString() {
    const ExhibitNavString = '<div class="apl-sidebar exhibits" id="apl-exhibits-sidebar"><h2>APL Exhibits</h2><ul id="apl-exhibits-nav"><li><a class="active" href="/events">Current Events</a></li><li><a href="/events/calendar">Future</a></li><li><a href="/events/exhibits">Past</a></li></ul></div>';
    return ExhibitNavString;
}