function changeCss () {
    var navElement = document.querySelector("header");
    window.scrollY > 1000 ? navElement.style.backgroundColor = 'black': navElement.style.color = 'black';
    window.scrollY < 1000 ? navElement.style.backgroundColor = 'transparent': navElement.style.color = 'black';
  }
  window.addEventListener("scroll", changeCss , false);