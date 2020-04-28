
$(document).ready(function() {
    //alert("document ready occurred!");
    let data = {
            photo: ['1', '2', '3', '4', '5',],
            title: ['My Title 1', 'My Title 2', 'My Title 3', 'My Title 4', 'My Title 5',],
            description: ['What happened here, why is this a very nice image', 'Curabitur eget lacus pharetra, efficitur dui ac, hendrerit nisi. Pellentesque finib', 'um lacinia. Nam finibus justo in nisl consequat, eu aliquam nisi accumsan. Nam a cursus felis, vel blandit lectus. Quisque non dui vel ma', 'ue. Vestibulum vitae ligula vitae lacus mattis porta at ut velit. Pellentesque sagittis, dui a placerat ullamcorper, augue ex tincidunt leo, ac', 'si. Pellentesque finibus interdum lacinia. Nam finibus justo in nisl consequat, eu aliquam nisi accumsan. Nam a cursus felis, vel blandit lect',]
      };

    var currentPhoto = 0;
    var currentPhotoTitel = 0;
    var currentPhotoDescription = 0;

    $('.pictureBox').append('<img src="'+data.photo[0]+'.jpg" class="mainImg">');

    $('#currentPhotoTitel').text(data.title[currentPhotoTitel]);
    $('#currentPhotoDescription').text(data.description[currentPhotoDescription]);
    for(var i = 2; i <= 5; i++) {
    $('.thumbnailsBox').append('<div class="thumbnails"><img src="'+i+'.jpg" class="thumbnailimg"></div>');
     }

     $('.one').click(() => {
        currentPhoto--;
        currentPhotoTitel--;
        currentPhotoDescription--;
        $('.pictureBox').append('<img src="'+currentPhoto+'.jpg" class="mainImg">');
        $('#currentPhotoTitel').text(data.title[currentPhotoTitel]);
        $('#currentPhotoDescription').text(data.description[currentPhotoDescription]);
    });

    $('.two').click(() => {
        currentPhoto++;
        currentPhotoTitel++;
        currentPhotoDescription++;
        $('.pictureBox').append('<img src="'+currentPhoto+'.jpg" class="mainImg">');
        $('#currentPhotoTitel').text(data.title[currentPhotoTitel]);
        $('#currentPhotoDescription').text(data.description[currentPhotoDescription]);
        console.log(currentPhoto);
        if (currentPhoto=5) {

        }

        
    });


});