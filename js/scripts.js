// Still needs work
// mis-match of diplay flex and display block
// It functions, but it is not ideal

window.onresize = function() {
    var menu = document.getElementById('navLinks');
    if (window.innerWidth >= 700)
      { menu.style.display = '' }
}


function navExpand() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block")
    { x.style.display = "none" }
  else
    { x.style.display = "block" }
}
