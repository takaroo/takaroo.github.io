
$('.button1').click(() => {
    $('h2').text("Yeah, you freaking clicked me, congratunations!");
  })

  
$('.button2').click(() => {
    $('.button1').text("You really have to keep doing this?");
  })


  $('.button3').click(() => {
    let backgroundColor = $('button').css('background-color');
    $('.button2').css('background-color', 'lightblue');
    $('h2').text("Is it better now?");

  })

  $('.button4').click(() => {
    let inputValue = $('input').val();
    let backgroundColor4 = $('.button4').css('background-color');
    $('.button4').css('background-color', inputValue);  })


    
      $('.button5').one( 'click', function() {
             
 
        let inputValue = $('input').val();
        let backgroundColor4 = $('.button5').css('background-color');
        $('.button5').css('background-color', inputValue);   
      })
     
    