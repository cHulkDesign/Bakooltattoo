function openbox(url) {
  var box = document.getElementById('box');
  document.getElementById('shadowing').style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.getElementById('header').style.filter = 'blur(0.5rem)';
  document.getElementById('hamburger').style.filter = 'blur(0.3rem)';
  document.getElementById('menu').style.filter = 'blur(0.5rem)';
  document.getElementById('main').style.filter = 'blur(0.5rem)';
  document.getElementById('footer').style.filter = 'blur(0.5rem)';

  var title = document.getElementById('boxtitle');
  title.innerHTML = url;

  var content = document.getElementById('boxcontent');
  content.style.padding = "0";

  content.innerHTML = "<img src=" + url + " />";

  box.style.display = 'block';
}

function closebox() {
  document.getElementById('box').style.display = 'none';
  document.getElementById('shadowing').style.display = 'none';
  document.body.style.overflowY = 'auto';
  document.getElementById('header').style.filter = 'blur(0)';
  document.getElementById('hamburger').style.filter = 'blur(0)';
  document.getElementById('menu').style.filter = 'blur(0)';
  document.getElementById('main').style.filter = 'blur(0)';
  document.getElementById('footer').style.filter = 'blur(0)';
}