$(document).ready(function(){
 var typed = new typed(".typing", {
        strings: ["Welcome to my personal website",""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    
});
window.onload = function () {
    var preloader = document.getElementsByClassName('preloader')[0];
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 1000);
  };
