    (function($, jQuery) {
  $(document).ready(function() {
    console.log('he');
$( '.field--name-field-1920-x-1080-image' ).append( '<span id="apl-clock"></span>' );
function aplClock(){
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	m = aplTime(m);
        var ampm = " AM";

if (h > 11) {
   if (h > 12) { h = h - 12; }
   ampm = " PM";
}
	document.getElementById("apl-clock").innerHTML = h + ":" + m + ampm;
	var t = setTimeout(aplClock, 1000);
}
function aplTime(i) {
	if(i<10) {i = "0" + i};
	return i;
}
window.onload=aplClock();

 var n2 = new Date();
    var d2 = new Date();
    var show_minute = 30;
    var my_day = n2.getDay();
    var my_stub2 = '7691441'; // if 8pm
    var show_hour = 20; // 8:30pm
    if (my_day > 4) {
      show_hour = 17; // 5:30pm
      my_stub2 = '7699602'; // if 5pm
    }
    
    
        
    d2.setSeconds(0);
    d2.setMinutes(show_minute);
    d2.setHours(show_hour);
    var diff2 = d2 - n2;
    var diff2a = diff2 / 1000;
    my_stub2 = document.referrer;
   console.log(my_stub2);
   console.log('Showing closing message in ' + (diff2a / 60) + ' minutes.');


           console.log('scheduling the closing message return');
       
	setTimeout((function() {
      $("body").css("background-color", "black");
      $("body").css("cursor", "none");
      $('body').velocity("fadeOut", {
        delay: 0,
        duration: 2000
      });
      setTimeout((function() {
        window.location.href = my_stub2;
      }), 2002);
    }), diff2);


		
    });
})(jQuery);
    
    
    
    
    
    
   