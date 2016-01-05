$( "#yesbutton" ).on("click", function(){
  console.log("yes clicked");
});

$( "#notyetbutton" ).on("click", function(){
  console.log("not yet clicked");
});

$(".dropdown-menu li").click(function(){
  var selText = $(this).text();
  $(this).parents('.dropdown').find('button[data-toggle="dropdown"]').html(selText+' <span class="caret"></span>');
});
