$(document).ready(function(){

  // need ENV variable for path
  var yesPath = "/Users/jba/wdi/diet/images/yes/";
  var notyetPath = "/Users/jba/wdi/diet/images/notyet/";

  // ToDo: use ajax or php to get full list of image files and file count
  var yesImages = ["brofist.jpg", "linda-gif.gif", "daniel-bryan-gif.gif", "schwing.jpeg", "wooderson.jpg"];
  var notyetImages = ["legday.jpg", "quickly.jpg", "now-later.jpg", "stop-excuses.png", "no-better-time.png"];

  // ToDo: combine button click events, determine path based on button clicked
  $( "#yesbutton" ).on("click", function(){
    var src = yesPath + yesImages[Math.floor(Math.random()*yesImages.length)];
    showImage(src);
  });

  $( "#notyetbutton" ).on("click", function(){
    var src = notyetPath + notyetImages[Math.floor(Math.random()*notyetImages.length)];
    showImage(src);
  });

  function showImage(src){
    $("#imagepreview").attr('src', src); //assign img src to img in modal
    $("#imageModal").modal('show'); //show modal
  }

  $(".dropdown-menu li").click(function(){
    var selText = $(this).text();
    $(this).parents('.dropdown').find('button[data-toggle="dropdown"]').html(selText+' <span class="caret"></span>');
  });

  // open contact modal
  $( "#contactlink" ).on("click", function(){
    $( "#contactModal" ).modal('show');
  })

})
