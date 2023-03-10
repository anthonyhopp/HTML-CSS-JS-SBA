$(document).ready(function() {
    var img = new Image();
    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e1d05d3-f3e3-4998-8935-82d3fe674258/d92oy6o-cd55b5b0-8fcc-4c74-95aa-5ae590812736.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVlMWQwNWQzLWYzZTMtNDk5OC04OTM1LTgyZDNmZTY3NDI1OFwvZDkyb3k2by1jZDU1YjViMC04ZmNjLTRjNzQtOTVhYS01YWU1OTA4MTI3MzYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uLhWtMjJeaY007kG7FHZYqOrSuTmcshRnu4mGAK8p18";
  
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
  
 
  