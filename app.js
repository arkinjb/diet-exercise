$(document).ready(function(){

  var yesPath = "/Users/jba/wdi/diet/images/yes/";
  var notyetPath = "/Users/jba/wdi/diet/images/notyet/";

  var yesImages = ["brofist.jpg", "linda-gif.gif", "daniel-bryan-gif.gif", "schwing.jpeg", "wooderson.jpg"];
  var notyetImages = ["legday.jpg", "quickly.jpg", "now-later,jpg", "stop-excuses.png", "no-better-time.png"];

  $( "#yesbutton" ).on("click", function(){
    console.log("yes clicked");
    var src = yesImages[Math.floor(Math.random()*yesImages.length)];
    $( "#newimage" ).append('<img src="' + yesPath + src + '">');
  });

  $( "#notyetbutton" ).on("click", function(){
    console.log("not yet clicked");
    var src = notyetImages[Math.floor(Math.random()*notyetImages.length)];
    $( "#newimage" ).append('<img src="' + notyetPath + src + '">');
  });

  $(".dropdown-menu li").click(function(){
    var selText = $(this).text();
    $(this).parents('.dropdown').find('button[data-toggle="dropdown"]').html(selText+' <span class="caret"></span>');
  });

})
