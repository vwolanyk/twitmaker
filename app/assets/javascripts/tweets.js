// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(){



  $(new_tweet).on( "submit", function( event ) {
  event.preventDefault();

  $.ajax({
    url:$(this).attr('action'),
    method:$(this).attr('method'),
    data: $(this).serialize(),
    dataType: '',

  }).done(function(responseData){
    $(tweetList).prepend(responseData);
    console.log(responseData);


  })

});





  // END OF DOM CONTENT
})
