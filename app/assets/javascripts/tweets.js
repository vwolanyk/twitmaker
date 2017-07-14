// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(){



  $(new_tweet).on( "submit", function( event ) {
  event.preventDefault();

  $.ajax({
    url:$(this).attr('action'),
    method:$(this).attr('method'),
    data: $(this).serialize(),
    dataType: 'json',

  }).done(function(responseData){
    var listItem = document.createElement("li");
    listItem.className = 'tweet'
    var p  = document.createElement("p");
    var time  = document.createElement("time");
    var message = responseData.message;
    var createdAt = responseData.created_at
    p.innerHTML = message;
    var date = new Date(responseData.created_at);

    time.innerHTML = date.toDateString();
    listItem.append(p);
    listItem.append(time);
    tweetList.prepend(listItem);
    console.log(responseData.message);


  })

});





  // END OF DOM CONTENT
})
