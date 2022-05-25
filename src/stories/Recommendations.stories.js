import './recommendations.css';
import './pager.css';

export default {
  title: 'Recommendations/Pages',
};
const SidebarHTML = `<div class="apl-sidebar flat views-element-container block block-views block-views-blocksections-block-11">
  
      <h2>We Recommend</h2>
    
      <div class="contextual-region"><div class="contextual-region view view-sections view-id-sections view-display-id-block_11 js-view-dom-id-affb564fa900343c56ecec95e0e9a77023222c2ec572ebe53661e68da1c5811d">
  
    <div data-contextual-id="entity.view.edit_form:view=sections:location=block&amp;name=sections&amp;display_id=block_11&amp;langcode=eng" data-contextual-token="EKfKW_5YPn6Jq2J7qCtMw7Pvp5A5dn7-c6rKoBV_c5o" data-once="contextual-render" class="contextual"><button class="trigger focusable visually-hidden" type="button" aria-pressed="false">Open  configuration options</button><ul class="contextual-links" hidden=""><li class="config-translationcontextual-linksentityviewconfig-translation-overview"><a href="/admin/structure/views/view/sections/translate?destination=/node/7692348">Translate view</a></li><li class="entityviewedit-form"><a href="/admin/structure/views/view/sections/edit/block_11?destination=/node/7692348">Edit view</a></li></ul></div>
      
      <div class="view-content">
          <div><div class="views-field views-field-body"><div class="field-content"><ul><li><a href="/recommended/titles">We Recommend Home</a></li>
	<li><a href="/recommended/whats-hot">What's Hot</a></li>
	<li><a href="https://austin.bibliocommons.com/explore/index/newly_acquired?f_on_order=false">New Titles</a></li>
	<li><a href="http://austin.bibliocommons.com/explore/index/awards">Awards</a></li>
	<li><a href="https://austin.bibliocommons.com/explore/index/best_sellers">Best Sellers</a></li>
	<li><a href="/events/book-clubs">Book Clubs</a></li>
	<li><a href="/recommended/reviews">Reviews</a></li>
	<li><a href="/recommended/world">World Language Books</a></li>
</ul><p><strong>More Recommendations</strong></p>

<p>Your local librarians have profiles in our catalog (BiblioCommons) to share our interests, what we’re reading and to create even more recommendation lists.&nbsp; Follow and like our profiles and learn more about <a href="http://library.austintexas.libguides.com/catalog/getsocial">getting social on our catalog</a>.</p>

<p><strong>Picks From Staff</strong></p>

<ul><li><a href="https://austin.bibliocommons.com/user_profile/128108121">Adult Librarians</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/646123587">Central Youth Librarians</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/342651137">Branch Staff</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/603054998">Austin History Center</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/138700411">Español</a></li>
</ul><p><strong>Neighborhood Branch Spotlight</strong></p>

<ul><li><a href="https://austin.bibliocommons.com/user_profile/368560258">Howson Branch</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/258629258">Milwood Branch</a></li>
	<li><a href="https://austin.bibliocommons.com/user_profile/467421987">Yarborough Branch</a></li>
</ul></div></div></div>

    </div>
  
          </div>
</div>

  </div>`;
const FacetsHTML = `<div class="vefl-1col apl-sidebar flat">
  <div class="views-element-container block block-views block-views-blocksections-block-9">
  
    
      <div><div class="view view-sections view-id-sections view-display-id-block_9 js-view-dom-id-e96add16e6cdbfa7d842c7b144d3360ef4f22a3416a031763839f0626ef186e8">
  
    
      
      <div class="view-content">
          <div><div class="views-field views-field-body"><div class="field-content"><h2>What would you like?</h2>

<p>Select one or more of the following</p></div></div></div>

    </div>
  
          </div>
</div>

  </div>
<div class="facet-inactive block-facet--links block block-facets block-facet-blockintended-audience">
  
    
      <div class="facets-widget-links">
      <ul data-drupal-facet-id="intended_audience" data-drupal-facet-alias="aud" class="facet-inactive js-facets-links item-list__links js-facets-widget"><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=aud%3AAdult&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="aud-adult" data-drupal-facet-item-value="Adult" data-drupal-facet-item-count="661"><span class="facet-item__value">Adult</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=aud%3AChildren&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="aud-children" data-drupal-facet-item-value="Children" data-drupal-facet-item-count="6"><span class="facet-item__value">Children</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=aud%3AEspa%C3%B1ol&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="aud-español" data-drupal-facet-item-value="Español" data-drupal-facet-item-count="1"><span class="facet-item__value">Español</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=aud%3ATeen&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="aud-teen" data-drupal-facet-item-value="Teen" data-drupal-facet-item-count="6"><span class="facet-item__value">Teen</span>
</a></li></ul>
</div>

  </div>
<div class="facet-active block-facet--links block block-facets block-facet-blockfacets23">
  
    
      <div class="facets-widget-links">
      <ul data-drupal-facet-id="facets23" data-drupal-facet-alias="facet" class="facet-active js-facets-links item-list__links js-facets-widget"><li class="facet-item"><a href="/recommended/titles" rel="nofollow" class="is-active" data-drupal-facet-item-id="facet-nonfiction" data-drupal-facet-item-value="Nonfiction" data-drupal-facet-item-count="673">  <span class="facet-item__status js-facet-deactivate">(-)</span>
<span class="facet-item__value">Nonfiction</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3AMemoir&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-memoir" data-drupal-facet-item-value="Memoir" data-drupal-facet-item-count="63"><span class="facet-item__value">Memoir</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ABest%20of&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-best-of" data-drupal-facet-item-value="Best of" data-drupal-facet-item-count="62"><span class="facet-item__value">Best of</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ANonfiction&amp;f%5B1%5D=facet%3ATrending%20Topics" rel="nofollow" data-drupal-facet-item-id="facet-trending-topics" data-drupal-facet-item-value="Trending Topics" data-drupal-facet-item-count="43"><span class="facet-item__value">Trending Topics</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ABiography&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-biography" data-drupal-facet-item-value="Biography" data-drupal-facet-item-count="42"><span class="facet-item__value">Biography</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ALGBTQIA%2B&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-lgbtqia" data-drupal-facet-item-value="LGBTQIA+" data-drupal-facet-item-count="42"><span class="facet-item__value">LGBTQIA+</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ANonfiction&amp;f%5B1%5D=facet%3AScience" rel="nofollow" data-drupal-facet-item-id="facet-science" data-drupal-facet-item-value="Science" data-drupal-facet-item-count="42"><span class="facet-item__value">Science</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ANonfiction&amp;f%5B1%5D=facet%3AThrilling" rel="nofollow" data-drupal-facet-item-id="facet-thrilling" data-drupal-facet-item-value="Thrilling" data-drupal-facet-item-count="42"><span class="facet-item__value">Thrilling</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3AAfrican%20American&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-african-american" data-drupal-facet-item-value="African American" data-drupal-facet-item-count="40"><span class="facet-item__value">African American</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3AHispanic%20and%20Latino&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-hispanic-and-latino" data-drupal-facet-item-value="Hispanic and Latino" data-drupal-facet-item-count="40"><span class="facet-item__value">Hispanic and Latino</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3AMicrohistory&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-microhistory" data-drupal-facet-item-value="Microhistory" data-drupal-facet-item-count="39"><span class="facet-item__value">Microhistory</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ANonfiction&amp;f%5B1%5D=facet%3ATrue%20Crime" rel="nofollow" data-drupal-facet-item-id="facet-true-crime" data-drupal-facet-item-value="True Crime" data-drupal-facet-item-count="39"><span class="facet-item__value">True Crime</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3AHistorical&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-historical" data-drupal-facet-item-value="Historical" data-drupal-facet-item-count="38"><span class="facet-item__value">Historical</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3ABest%20of%202020&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-best-of-2020" data-drupal-facet-item-value="Best of 2020" data-drupal-facet-item-count="36"><span class="facet-item__value">Best of 2020</span>
</a></li><li class="facet-item"><a href="/recommended/titles?f%5B0%5D=facet%3AArt&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-art" data-drupal-facet-item-value="Art" data-drupal-facet-item-count="35"><span class="facet-item__value">Art</span>
</a></li><li class="facet-item" style="display: none;"><a href="/recommended/titles?f%5B0%5D=facet%3AFunny&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-funny" data-drupal-facet-item-value="Funny" data-drupal-facet-item-count="35"><span class="facet-item__value">Funny</span>
</a></li><li class="facet-item" style="display: none;"><a href="/recommended/titles?f%5B0%5D=facet%3ANonfiction&amp;f%5B1%5D=facet%3AThe%20Green%20Life" rel="nofollow" data-drupal-facet-item-id="facet-the-green-life" data-drupal-facet-item-value="The Green Life" data-drupal-facet-item-count="34"><span class="facet-item__value">The Green Life</span>
</a></li><li class="facet-item" style="display: none;"><a href="/recommended/titles?f%5B0%5D=facet%3ADiverse&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-diverse" data-drupal-facet-item-value="Diverse" data-drupal-facet-item-count="33"><span class="facet-item__value">Diverse</span>
</a></li><li class="facet-item" style="display: none;"><a href="/recommended/titles?f%5B0%5D=facet%3ABest%20of%202021&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-best-of-2021" data-drupal-facet-item-value="Best of 2021" data-drupal-facet-item-count="26"><span class="facet-item__value">Best of 2021</span>
</a></li><li class="facet-item" style="display: none;"><a href="/recommended/titles?f%5B0%5D=facet%3ANonfiction&amp;f%5B1%5D=facet%3ASpeed%20Reads" rel="nofollow" data-drupal-facet-item-id="facet-speed-reads" data-drupal-facet-item-value="Speed Reads" data-drupal-facet-item-count="16"><span class="facet-item__value">Speed Reads</span>
</a></li><li class="facet-item" style="display: none;"><a href="/recommended/titles?f%5B0%5D=facet%3AAround%20the%20World&amp;f%5B1%5D=facet%3ANonfiction" rel="nofollow" data-drupal-facet-item-id="facet-around-the-world" data-drupal-facet-item-value="Around the World" data-drupal-facet-item-count="8"><span class="facet-item__value">Around the World</span>
</a></li></ul><a href="#" class="facets-soft-limit-link" aria-expanded="false">Show more</a>
</div>

  </div>

</div>`;
const WeRecommendHTML = `<div class="vefl-1col">
  <div class="block block-layout-builder block-field-blocknodepagefield-main-image">
  
    
      
            <div class="field field--name-field-main-image field--type-image field--label-hidden field__item">  <img src="https://library.austintexas.gov/library/2021-08/we_recommend2-02sm%5B1%5D.jpg" width="580" height="355" alt="" loading="lazy" typeof="foaf:Image">

</div>
      
  </div>
<div class="block block-layout-builder block-field-blocknodepagetitle">
  
    
      <span property="schema:name" class="field field--name-title field--type-string field--label-hidden">We Recommend</span>

  </div>
<div class="block block-layout-builder block-field-blocknodepagebody">
  
    
      
            <div property="schema:text" class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p class="e">Let our expert librarians recommend your next great read. For a customized list of recommendations, check out <a href="/personal-picks">Personal Picks</a>.</p>
</div>
      
  </div>
<div class="views-element-container block block-views block-views-blockitems-index-block-1">
  
    
      <div><div class="view view-items-index view-id-items_index view-display-id-block_1 js-view-dom-id-32bc1d6260748050224e83183c5d30e4d411772983e3406f3933819832b739e1">
  
    
      
      <div class="view-content">
          <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165511?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="How the World Really Works" src="http://secure.syndetics.com/index.aspx?isbn=9780593297063/LC.GIF&amp;client=austinpl" class="isbn9780593297063"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165511?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">How the World Really Works</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2162357?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Beasts Before Us" src="http://secure.syndetics.com/index.aspx?isbn=9781472983824/LC.GIF&amp;client=austinpl" class="isbn9781472983824"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2162357?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Beasts Before Us</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S980C6211503?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="A (Very) Short History of Life on Earth" src="http://secure.syndetics.com/index.aspx?isbn=9781250276667/LC.GIF&amp;client=austinpl" class="isbn9781250276667"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S980C6211503?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">A (Very) Short History of Life on Earth</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2161832?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="The Last Days of the Dinosaurs" src="http://secure.syndetics.com/index.aspx?isbn=9781250271044/LC.GIF&amp;client=austinpl" class="isbn9781250271044"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2161832?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">The Last Days of the Dinosaurs</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165798?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Muse" src="http://secure.syndetics.com/index.aspx?isbn=9781639361557/LC.GIF&amp;client=austinpl" class="isbn9781639361557"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165798?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Muse</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165644?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="What Artists Wear" src="http://secure.syndetics.com/index.aspx?isbn=9781324020400/LC.GIF&amp;client=austinpl" class="isbn9781324020400"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165644?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">What Artists Wear</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2167070?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Letters to Gwen John" src="http://secure.syndetics.com/index.aspx?isbn=9781681376400/LC.GIF&amp;client=austinpl" class="isbn9781681376400"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2167070?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Letters to Gwen John</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165650?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="The World According to Color" src="http://secure.syndetics.com/index.aspx?isbn=9781250278517/LC.GIF&amp;client=austinpl" class="isbn9781250278517"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165650?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">The World According to Color</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165823?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="This Woman’s Work" src="http://secure.syndetics.com/index.aspx?isbn=9780306829000/LC.GIF&amp;client=austinpl" class="isbn9780306829000"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165823?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">This Woman’s Work</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2161789?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Burn the Page" src="http://secure.syndetics.com/index.aspx?isbn=9780593296554/LC.GIF&amp;client=austinpl" class="isbn9780593296554"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2161789?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Burn the Page</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2161803?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Everything Left to Remember" src="http://secure.syndetics.com/index.aspx?isbn=9781250261830/LC.GIF&amp;client=austinpl" class="isbn9781250261830"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2161803?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Everything Left to Remember</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165189?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="The Girl in the Middle" src="http://secure.syndetics.com/index.aspx?isbn=9780062914637 /LC.GIF&amp;client=austinpl" class="isbn9780062914637 "></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165189?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">The Girl in the Middle</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2165238?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="The Red Zone" src="http://secure.syndetics.com/index.aspx?isbn=9781593766993/LC.GIF&amp;client=austinpl" class="isbn9781593766993"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2165238?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">The Red Zone</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S980C6286844?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Constructing A Nervous System" src="http://secure.syndetics.com/index.aspx?isbn=9781524748180/LC.GIF&amp;client=austinpl" class="isbn9781524748180"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S980C6286844?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Constructing A Nervous System</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2161799?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Easy Beauty" src="http://secure.syndetics.com/index.aspx?isbn=9781982151997 /LC.GIF&amp;client=austinpl" class="isbn9781982151997 "></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2161799?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Easy Beauty</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2139467?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Lady Bird Johnson: Hiding in Plain Sight" src="http://secure.syndetics.com/index.aspx?isbn=9780812995909/LC.GIF&amp;client=austinpl" class="isbn9780812995909"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2139467?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Lady Bird Johnson: Hiding in Plain Sight</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2164337?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Warming Up Julia Child" src="http://secure.syndetics.com/index.aspx?isbn=9781643139388/LC.GIF&amp;client=austinpl" class="isbn9781643139388"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2164337?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Warming Up Julia Child</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2161833?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Life on the Rocks" src="http://secure.syndetics.com/index.aspx?isbn=9780593087305/LC.GIF&amp;client=austinpl" class="isbn9780593087305"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2161833?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Life on the Rocks</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2167325?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Girls Who Green the World" src="http://secure.syndetics.com/index.aspx?isbn=9780593428054/LC.GIF&amp;client=austinpl" class="isbn9780593428054"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2167325?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Girls Who Green the World</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S981C12325723?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="Grow Your Soil!" src="http://secure.syndetics.com/index.aspx?isbn=9781635862089/LC.GIF&amp;client=austinpl" class="isbn9781635862089"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S981C12325723?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">Grow Your Soil!</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>
    <div class="views-row"><div><span><div class="item_image apl-recently-updated">
<a href="https://austin.bibliocommons.com/v2/record/S67C2139471?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img border="0" alt="The Nature of Oaks" src="http://secure.syndetics.com/index.aspx?isbn=9781643260440/LC.GIF&amp;client=austinpl" class="isbn9781643260440"></a>
</div>
<div class="item_title_description">
<a class="item_title" href="https://austin.bibliocommons.com/v2/record/S67C2139471?&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">The Nature of Oaks</a>
 
</div></span></div><div class="views-field views-field-search-api-operations"><span class="field-content"></span></div></div>

    </div>
  
        <nav class="pager" role="navigation" aria-labelledby="pagination-heading">
    <h4 id="pagination-heading" class="visually-hidden">Pagination</h4>
    <ul class="pager__items js-pager__items">
            
            
            
                    <li class="pager__item pager__item--active pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=0" class="pager__link is-active" title="Current page"><span class="visually-hidden">
              Current page
            </span>
            1
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=1" class="pager__link" title="Go to page 2"><span class="visually-hidden">
              Page
            </span>
            2
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=2" class="pager__link" title="Go to page 3"><span class="visually-hidden">
              Page
            </span>
            3
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=3" class="pager__link" title="Go to page 4"><span class="visually-hidden">
              Page
            </span>
            4
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=4" class="pager__link" title="Go to page 5"><span class="visually-hidden">
              Page
            </span>
            5
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=5" class="pager__link" title="Go to page 6"><span class="visually-hidden">
              Page
            </span>
            6
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=6" class="pager__link" title="Go to page 7"><span class="visually-hidden">
              Page
            </span>
            7
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=7" class="pager__link" title="Go to page 8"><span class="visually-hidden">
              Page
            </span>
            8
          </a></li>              <li class="pager__item pager__item--number"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=8" class="pager__link" title="Go to page 9"><span class="visually-hidden">
              Page
            </span>
            9
          </a></li>      
                    <li class="pager__item pager__item--ellipsis" role="presentation">…</li>
      
                    <li class="pager__item pager__item--action pager__item--next"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=1" class="pager__link pager__link--action-link" title="Go to next page" rel="next"><span class="visually-hidden">Next page</span><span class="pager__item-title pager__item-title--forward" aria-hidden="true"></span></a></li>      
                    <li class="pager__item pager__item--action pager__item--last"><a href="?f%5B0%5D=facet%3ANonfiction&amp;page=32" class="pager__link pager__link--action-link" title="Go to last page"><span class="visually-hidden">Last page</span><span class="pager__item-title pager__item-title--forward" aria-hidden="true">
              Last 
            </span></a></li>          </ul>
  </nav>

          </div>
</div>

  </div>

</div>`;
const FacetRecommendationsHTML = `<div class="apl-carousel-2022 view view-apl-item-carousels-2022 view-id-apl_item_carousels_2022 view-display-id-block_2 js-view-dom-id-40a86244429dea5c8ea247113ba18a015f5e3e2efe759606e3b7b7bcd8ea04c8">
  
    
      <div class="view-header">
      <h3>Nonfiction</h3>
    </div>
      
      <div class="view-content">
          <div><a href="https://austin.bibliocommons.com/item/show/2080478067?utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img alt="Black Indian" src="https://secure.syndetics.com/index.aspx?isbn=9780814345801/LC.GIF&amp;client=austinpl&amp;upc=" class="isbn9780814345801 " border="0"></a></div>
    <div><a href="https://austin.bibliocommons.com/search?custom_query=(title%3A(Dark+Money)+AND+contributor%3A(Mayer%2C+Jane)+)&amp;suppress=true&amp;custom_edit=false&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">  <img src="https://library.austintexas.gov/library/styles/slideshow/public/items/9780385535595.jpg?itok=lwFXXYrN" loading="lazy" typeof="Image" class="image-style-slideshow" width="233" height="355">


</a></div>
    <div><a href="https://austin.bibliocommons.com/v2/search?custom_edit=false&amp;query=%28title%3A%28dare+to+speak%29+AND+contributor%3A%28suzanne+nossel%29+%29&amp;searchType=bl&amp;suppress=true&amp;utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img src="https://img1.od-cdn.com/ImageType-200/0293-1/{7EEE5050-19B4-4853-AB2D-B57588D0DA00}Img200.jpg"></a></div>
    <div><a href="https://austin.bibliocommons.com/item/show/1101223067?utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets">  <img src="https://library.austintexas.gov/library/styles/slideshow/public/items/0312379226.jpg?itok=mhFiVxVK" loading="lazy" typeof="Image" class="image-style-slideshow" width="233" height="355">


</a></div>
    <div><a href="https://austin.bibliocommons.com/item/show/2131507067?utm_source=aplitem&amp;utm_medium=image&amp;utm_campaign=facets"><img src="https://secure.syndetics.com/index.aspx?isbn=9781517909277/MC.GIF&amp;client=sepup&amp;type=xw12&amp;oclc="></a></div>

    </div>
  
            <div class="view-footer">
      <a class="usa-button usa-button-outline" href="/recommended/titles?f%5B0%5D=facet%3ANonfiction">Explore <strong>Nonfiction</strong></a>
    </div>
    </div>`;

export const Sidebar = () => SidebarHTML;
export const Facets = () => FacetsHTML;
export const FacetRecommendations = () => '<div class="column-2">' + FacetRecommendationsHTML + '</div>';
export const WeRecommend = () => '<div class="column-2">' + WeRecommendHTML + '</div>';
