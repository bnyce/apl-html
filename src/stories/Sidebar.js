import './sidebar.css';

export function getSidebarString() {
    const SidebarString = '<div class="apl-sidebar blog"> <div class="view-header"> <h2><a href="/blog">Blog</a></h2> </div><div class="view-content"> <div class="views-row"><div><span><a href="/blog/austin-public-library-statement-book-banning-and-library-censorship" hreflang="eng">Austin Public Library Statement on Book Banning and Library Censorship</a></span></div></div></div></div>';
    return SidebarString;
}

export const createSidebar = ({
  internal = false,
  subject,
  body,
  onClick,
}) => {
  const sdbr = document.createElement('div');
 
  return sdbr;
};
