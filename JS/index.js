
window.onscroll = function (){scrollFunction()};

function scrollFunction() {
  if(document.documentElement.scrollTop > 20){
    document.getElementById("nav-top").classList.add("sticky");
    document.getElementById("nav-top").style.transition = "background-color 1s ease-in-out";
  }else{
    document.getElementById("nav-top").classList.remove("sticky");
    document.getElementById("nav-top").style.transition = "background-color 1s ease-out";
  }
}
function transition(){
    document.getElementById("formbtn").style.transition = "background-color 0.5s linear";
}
