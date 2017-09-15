
$(document).ready(function () {
  $('.job-rest-block .job-rest-list').click(function () {
    $(this).parent().toggleClass('active');
    $('.job-rest-body').slideToggle();
  });
  $('.collapsible').collapsible();
  $('ul.tabs').tabs();
  $('select').material_select();
  $('.coordinator-details-head').click(function () {
    $(this).toggleClass('active');
    $('.coordinator-details-area').slideToggle();
  });
  $('ul.tabs').tabs();
  $('select').material_select();
  $('.drive-time').click(function () {
    $(this).parent().toggleClass('active');
    $(this).next('.panel').slideToggle();
  });
  $('.search-list').mouseenter(function () {
    $(' .search-list .search-field').addClass('active');
  });
  $('.drop-arrow').click(function () {
    $(this).parent().parent().toggleClass('active');
    $(this).parent().parent().next()
  })
  $('.modal').modal();
  $('ul.tabs').tabs();
  $(' .header-section  .add-more ').click(function () {
    $('.sidebar-toggle').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.sidebar-toggle .close').click(function () {
    $('.sidebar-toggle').removeClass('active');
    $('.custom-overlay').removeClass('active');
  });
  $('.add_comp_cat').click(function () {
    $('.sidebar-toggle').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.academic-head').click(function () {
    $(this).toggleClass('active');
    $(this).next('.academics-details-body').slideToggle();
  });
  $("body").niceScroll({ cursorcolor: "#000", cursoropacitymax: 0.7, boxzoom: true, touchbehavior: true });  // This is an IFrame (iPad compatible)
  $(".nice-scroll").niceScroll({ cursorcolor: "#0097d5", cursoropacitymax: 0.7, boxzoom: true, touchbehavior: true });  // This is an IFrame (iPad compatible)



  $('.collapsible').collapsible();
  $('ul.tabs').tabs();
  $('select').material_select();
  $('.coordinator-details-head').click(function () {
    $(this).toggleClass('active');
    $('.coordinator-details-area').slideToggle();
  });
  $('ul.tabs').tabs();
  $('select').material_select();
  $('.drive-time').click(function () {
    $(this).parent().toggleClass('active');
    $(this).next('.panel').slideToggle();
  });
  $('.search-list').mouseenter(function () {
    $(' .search-list .search-field').addClass('active');
  });
  $('.drop-arrow').click(function () {
    $(this).parent().parent().toggleClass('active');
    $(this).parent().parent().next()
  })
  $('.modal').modal();
  $('ul.tabs').tabs();
  $(' .header-section  .add-more ').click(function () {
    $('.sidebar-toggle').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $(' .header-section  .add-more .contact-add ').click(function () {
    $('.sidebar-toggle .add-contact').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.icons2').click(function () {
    $('.sidebar-toggle1').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.sidebar-toggle .close').click(function () {
    $('.sidebar-toggle').removeClass('active');
    $('.custom-overlay').removeClass('active');
  });
  $('.icons3').click(function () {
    $('.sidebar-toggle2').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.sidebar-toggle2 .close').click(function () {
    $('.sidebar-toggle2').removeClass('active');
    $('.custom-overlay').removeClass('active');
  });
  $('.sidebar-toggle1 .close').click(function () {
    $('.sidebar-toggle1').removeClass('active');
    $('.custom-overlay').removeClass('active');
  });
  $('.add_comp_cat').click(function () {
    $('.sidebar-toggle').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.academic-head').click(function () {
    $(this).toggleClass('active');
    $(this).next('.academics-details-body').slideToggle();
  });
  $("body").niceScroll({ cursorcolor: "#000", cursoropacitymax: 0.7, boxzoom: true, touchbehavior: true });  // This is an IFrame (iPad compatible)
  $(".nice-scroll").niceScroll({ cursorcolor: "#0097d5", cursoropacitymax: 0.7, boxzoom: true, touchbehavior: true });  // This is an IFrame (iPad compatible)


});


$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

$(document).ready(function () {
  $('ul.tabs').tabs();
  $('.dropdown-button ').click(function () {
    $('.custom-overlay').toggleClass('active');
  });
});