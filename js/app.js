(function () {
  function writeToStorage() {
    if(navigator.onLine) {
      localStorage.setItem('lastUpdate', (new Date()).toString());
    }
    document.getElementsByClassName('content')[0].innerHTML = "Last Update: " + localStorage.getItem('lastUpdate');
  }
  window.setInterval(writeToStorage, 1000);
  writeToStorage();
}());
