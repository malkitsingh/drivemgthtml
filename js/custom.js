

$(document).ready(function () {
  $('#toggle-btn').click(function () {
    $('body').toggleClass('active');
  });
  $('.job-rest-block .job-rest-list').click(function () {
    $(this).parent().toggleClass('active');
    $('.job-rest-body').slideToggle();
  });

  $('.collapsible').collapsible();

  $('ul.tabs').tabs();

  $('select').material_select();

  $('.modal').modal();

  $('.coordinator-details-head').click(function () {
    $(this).toggleClass('active');
    $('.coordinator-details-area').slideToggle();
  });

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

  $(' .stu-filter').click(function () {
    $('.sidebar-toggle4').addClass('active');
    $('.custom-overlay').addClass('active');
  });

  $('.sidebar-toggle4 .close').click(function () {
    $('.sidebar-toggle4').removeClass('active');
    $('.custom-overlay').removeClass('active');
  });





  $(' .header-section  .add-more .contact-add ').click(function () {
    $('.sidebar-toggle .add-contact').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.icons2').click(function () {
    $('.sidebar-toggle1').addClass('active');
    $('.custom-overlay').addClass('active');
  });



  $('.icons3').click(function () {
    $('.sidebar-toggle2').addClass('active');
    $('.custom-overlay').addClass('active');
  });

  $('.icons').click(function () {
    $('.sidebar').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.sidebar .close').click(function () {
    $('.sidebar').removeClass('active');
    $('.custom-overlay').removeClass('active');
  });
  $('.icons5').click(function () {
    $('.sidebar5').addClass('active');
    $('.custom-overlay').addClass('active');
  });
  $('.sidebar5 .close').click(function () {
    $('.sidebar5').removeClass('active');
    $('.custom-overlay').removeClass('active');
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


  $('.dropdown-button ').click(function () {
    $('.custom-overlay').toggleClass('active');
  });


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $(function () {
    $("#sortable1, #sortable2").sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });


});


window.onload = function () {

  $('.custom-loader').addClass('hide');
}
$(document).ready(function()
{
       var slider = document.getElementById('test-slider1');
        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 100
            },
            format: wNumb({
                decimals: 0
            })
        });
        var slider = document.getElementById('test-slider2');
        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 100
            },
            format: wNumb({
                decimals: 0
            })
        });
        var slider = document.getElementById('test-slider3');
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 100
            },
            format: wNumb({
                decimals: 0
            })
        });
        var slider = document.getElementById('test-slider4');
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 100
            },
            format: wNumb({
                decimals: 0
            })
        });
        var slider = document.getElementById('test-slider5');
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 100
            },
            format: wNumb({
                decimals: 0
            })
        })
});