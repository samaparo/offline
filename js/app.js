(function () {
  var colors = ['blue', 'green', 'red'];
  var content = document.getElementsByClassName('content')[0];
  var i = 0;
  window.setInterval(function () {
    content.classList.remove('blue', 'green', 'red');
    content.classList.add(colors[i]);
    i = i < 2 ? i + 1 : 0;
  }, 1000);
}());
