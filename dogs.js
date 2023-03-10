$(document).ready(function() {
    var img = new Image();
    img.src = "./images/dog-run.gif";
  
    var div = $('<div>');
    div.css({
      position: "absolute",
      top: "100px",
      left: "-200px",
    });
  
    $(img).appendTo(div);
  $('body').append(div);
  
    $(div).animate({ left: "+=2000px" }, 5000);
  });
  
 
  