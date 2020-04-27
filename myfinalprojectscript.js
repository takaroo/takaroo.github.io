$(document).ready(function() {
    alert("document ready occurred!");
    $('.pictureBox').append('<img src="1.jpg" class="mainImg">');
    for(var i = 2; i <= 5; i++) {
    $('.thumbnailsBox').append('<div class="thumbnails"><img src="'+i+'.jpg" class="thumbnailimg"></div>');
     }
});
