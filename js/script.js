$(document).ready(function () {
  $('#menuBar').click(function () {
    $(this).toggleClass('fa-times')
    $('header').toggleClass('toggle')
  })
  $(window).on('scroll load', function () {
    $('#menubar').removeClass('fa-times')
    $('header').removeClass('toggle')

    if ($(window).scrollTop() > 0) {
      $('.top').show()
    } else {
      $('.top').hide()
    }
    
  })

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('body,html').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear')
  })
})
