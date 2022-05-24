(function($, jQuery) {
  $(document).ready(function() {
console.log('is it amore?');
    $('a.more').click(function(e) {
        e.preventDefault();
        console.log("that's a.more!");
        $(this).siblings().toggleClass('active');
    });
});
})(jQuery);