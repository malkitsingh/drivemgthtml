  $(document).ready(function(){
     $('.collapsible').collapsible();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.coordinator-details-head').click(function(){
      $(this).toggleClass('active');
      $('.coordinator-details-area').slideToggle();
    });
      $('ul.tabs').tabs();
      $('select').material_select();
      $('.search-list').mouseenter(function(){
           $(' .search-list .search-field').addClass('active');
      });
          $('.drop-arrow').click(function(){
            $(this).parent().parent().toggleClass('active');
             $(this).parent().parent().next()
          })
           
  });

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
 
        