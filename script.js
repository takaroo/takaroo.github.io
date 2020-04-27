$(document).ready(function() {
    alert("document ready occurred!");
    $('.pictureBox').append('<img src="img/1.jpg" class="mainImg">');
    for(let i = 2; i <= 5; i++) {
    $('.thumbnailsBox').append('<div class="thumbnails"><img src="img/'+i+'.jpg" class="thumbnailimg"></div>');
     }
});
