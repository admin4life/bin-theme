$(document).ready(function() {
  var star = $("#star");
  var stars = star.data("star");
  for (var i=0;i<5;i++) {
    if(stars <= 0) {
      star.append("<img src='/assets/nostar.png' />");
    }
    else {
      star.append("<img src='/assets/star.png' />");
    }
    stars--;
  }
});
