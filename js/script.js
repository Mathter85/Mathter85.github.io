$(function(){

  var srcoll=true;

  function disableScroll(){
    scroll = false;
    $('html, body, header, main, footer').on('mousewheel',function(){
      return false;
    });
  }

  function enableScroll(){
    scroll=true;
    $('html, body, header, main, footer').off('mousewheel');
  }

  document.onkeydown = checkKey;
  function checkKey(e) {
      e = e || window.event; // Теперь event - объект события во всех браузерах.
      if ((e.keyCode == '38') || (e.keyCode == '40') || (e.keyCode == '33') || (e.keyCode == '34')){
          // up arrow           down                      PageUp              DownUp
          return scroll;
      }
  }

  var buttonDisableScroll = document.getElementById('disableScroll');
  buttonDisableScroll.onclick= disableScroll;

  var buttonEnableScroll = document.getElementById('enableScroll');
  buttonEnableScroll.onclick= enableScroll;
});
