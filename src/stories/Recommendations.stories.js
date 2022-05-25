import './recommendations.css';

export default {
  title: 'Recommendations/Carousels',
};

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

export const FacetRecommendations = () => '<div class="column-2">' + FacetRecommendationsHTML + '</div>';
