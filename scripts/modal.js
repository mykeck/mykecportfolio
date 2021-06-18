$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Movies-Zone',
      tag: 'MOVIES STREAMING PLATFORM',
      detail:
        'In this site you are able to search your favourite movie and be able to know more details about that movie',
      link: 'https://movieszone444.herokuapp.com/'
    },
    ordering: {
      title: 'Inspiration Quotes',
      tag: 'INSPIRATION PLATFORM.',
      detail:
        'This is a web application for inspirational quotes that will inspire others through adding their own quotes.Users can also like or dislike the quote.',
      link: 'https://mykeck.github.io/Inspiration-Quotes/'
    },
    newrelic: {
      title: 'Pitches',
      tag: 'PITCH CREATING APPLICATION',
      detail:
        'this is a web application that can be used to create or view quick one-minute pitches in a variety of categories.',
      link: 'https://pitches333.herokuapp.com/'
    },
    roambi: {
      title: 'Delani Studio',
      tag: 'STUDIO JOB',
      detail:
        'This project is a web application for Delani studio that shows details about the services it offers and has information about the studio.',
      link: 'https://mykeck.github.io/Delani-studio/'
    },
    walker: {
      title: 'My Gallery',
      tag: 'GALLERY WEBSITE',
      detail:
        'A user is able to upload his/her favourite images',
        link: 'https://gallery888.herokuapp.com/'  
    },
    powur: {
      title: 'Gari Workshop',
      tag: 'GARAGE SHOP PLATFORM',
      detail:
        'A system where  user/customer can  choose any garage    specification he/she wants , view and choose services give reviews and be able to give feedback',
      link: 'https://charlesosang017.github.io/Gari/'
    },
    mystand: {
      title: 'Pizza Hub',
      tag: 'ORDER YOUR FAVOURITE PIZZA.',
      detail:
        'This is a pizza ordering web application',
        link: 'https://mykeck.github.io/pizza-Hub/'
    },
    never: {
      title: 'Remaliah Mechanics',
      tag: 'GARAGE WEBSITE',
      detail:
        'RemaliahMechanics is website that allows the users of vehicles to get services online. The users can navigate through the website, log in and make bookings. A booking summary is given to the user. They users can also learn basic steps of handling vehicles through the videos provided at the maintenance.',
        link: 'https://awesome-murdock-5a25b0.netlify.app/'
    },
    themall: {
      title: 'Nyumbani Hostel',
      tag: 'HOSTEL BOOKING PLATFORM',
      detail:
        'Hostel management system to help in online booking of hostels',
        link: 'https://richardkefa.github.io/hostel-managment/'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
