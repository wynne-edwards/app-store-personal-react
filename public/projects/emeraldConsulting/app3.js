// document.getElementById("navID").style.height = "50px";
window.onscroll = function() {scrollFunction()}; //When nav bar is at top change to big when not make it small

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navID").style.height = "50px";
    document.getElementById("home").style.paddingTop = "20px";
    document.getElementById("products").style.paddingTop = "20px"
    document.getElementById("services").style.paddingTop = "20px"
    document.getElementById("about").style.paddingTop = "20px";
    document.getElementById("contact").style.paddingTop = "20px";
    document.getElementById("logo").style.transform = "scale(0.8)";
    document.getElementById("logo").style.paddingTop = "10px";
  } else {
    document.getElementById("navID").style.height = "80px";
    document.getElementById("home").style.paddingTop = "35px";
    document.getElementById("products").style.paddingTop = "35px";
    document.getElementById("services").style.paddingTop = "35px";
    document.getElementById("about").style.paddingTop = "35px";
    document.getElementById("contact").style.paddingTop = "35px";
    document.getElementById("home").style.fontSize = "15px";
    document.getElementById("products").style.fontSize = "15px";
    document.getElementById("services").style.fontSize = "15px";
    document.getElementById("about").style.fontSize = "15px";
    document.getElementById("contact").style.fontSize = "15px";
    document.getElementById("logo").style.transform = "scale(1)";
    document.getElementById("logo").style.paddingTop = "20px";
  }
}