
$(document).ready(function() {
    let data = {
            photo: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',],
            title: ['My Title 1', 'My Title 2', 'My Title 3', 'My Title 4', 'My Title 5',],
            description: ['What happened here, why is this a very nice image', 'Curabitur eget lacus pharetra, efficitur dui ac, hendrerit nisi. Pellentesque finib', 'um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus um lacinia. Nam finibus justo in nisl consequat, eu aliquam nisi accumsan. Nam a cursus felis, vel blandit lectus. Quisque non dui vel ma', 'ue. Vestibulum vitae ligula vitae lacus mattis porta at ut velit. Pellentesque sagittis, dui a placerat ullamcorper, augue ex tincidunt leo, ac', 'si. Pellentesque finibus interdum lacinia. Nam finibus justo in nisl consequat, eu aliquam nisi accumsan. Nam a cursus felis, vel blandit lect',]
      };

    var currentPhoto = 0;
    var currentPhotoTitel = 0;
    var currentPhotoDescription = 0;
        
    let loadPhoto = (photoNumber) => {

        $('#mainImg').attr('src', data.photo[currentPhoto]);
        $('#mainImg').css('border', 'solid 2px white');
        $('#mainImg').css('box-shadow', '0 0 50px #fff');
        $('#currentPhotoTitel').text(data.title[currentPhotoTitel]);
        $('#currentPhotoDescription').text(data.description[currentPhotoDescription]);

    }
        
    

    for(var i = 1; i <= data.photo.length; i++) {
        var numberIndex = parseInt(currentPhoto+1);

        $('.thumbnailsBox').append('<div class="thumbnails"><img src="'+i+'.jpg" class="thumbnailimg" id="'+numberIndex+'"><div class="hiddenThumbnailTitle" class="'+numberIndex+'"></div></div>');
        //$('.thumbnails').append(' <div class="hiddenThumbnailTitle"></div>');
        $('.hiddenThumbnailTitle').text(data.title[currentPhotoTitel]);
         $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('border', 'solid 2px white');
         $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('box-shadow', '0 0 50px #fff');

             
              

}

     loadPhoto(currentPhoto);

     $('.one').click(() => {
        if (0 < currentPhoto){
            currentPhoto--;
            currentPhotoTitel--;
            currentPhotoDescription--;
            loadPhoto(currentPhoto);

            var numberIndex = parseInt(currentPhoto+1);
           $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('border', 'solid 2px white');
           $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('box-shadow', '0 0 50px #fff');

           var numberIndex=numberIndex+1;

            $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('border', '');
            $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('box-shadow', '');
          
        }
    });

  

    $('.two').click(() => { 
        
       if (currentPhoto < 4){
            currentPhoto++;
            currentPhotoTitel++;
            currentPhotoDescription++;
           
            loadPhoto(currentPhoto);

            var numberIndex = parseInt(currentPhoto+1);
           $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('border', 'solid 2px white');
           $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('box-shadow', '0 0 50px #fff');

           var numberIndex=numberIndex-1

            $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('border', '');
            $('.thumbnails img[src="'+numberIndex+'.jpg"]').css('box-shadow', '');



        }

        });


            $('.thumbnails').hover(function() {

             $('.hiddenThumbnailTitle').fadeIn( 500 );
                $('.hiddenThumbnailTitle').fadeOut( 500 );
            
        
            
            });
      
        


});