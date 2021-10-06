//navbar
var navbar = document.querySelector('.navbar');
var navBtn = document.querySelector('#nav-btn');

navBtn.onclick = function() {
  navbar.classList.toggle('active')
}

var header1 = document.querySelector('.header-1');
window.onscroll = function() {
  if(window.scrollY > 25) {
    header1.classList.add('active');
  }
  else {
    header1.classList.remove('active');
  }
}