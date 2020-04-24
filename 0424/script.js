
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
     
      var i = 0;
      $('.button6').on('click', () => {
        i++
         counterValue = $('.counterValue').text(i);
           });

      $('.button3').on('click', () => {
             i--
              counterValue = $('.counterValue').text(i);
                });

                $('.button7').click(() => {
                  let todoInput = $('.todoInput').val();
                  console.log(todoInput);
                  $('ul').append(`<li>${todoInput}</li>`).on('click','li',function(){
                    $('li').css('text-decoration', 'line-through'); 
                  }); 
                   
                });
            