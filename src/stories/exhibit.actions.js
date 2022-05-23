(function($, jQuery) {
  $(document).ready(function() {

    $('a.more').click(function(e) {
        e.preventDefault();
        console.log("that's a.more!");
        $(this).siblings().toggleClass('active');
    });
});
})(jQuery);