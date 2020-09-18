$(function(){

  var srcoll=true;

  function disableScroll(){
    scroll = false;
    
    //
      $('body').css({
        'height':'100%',
        'overflow':'hidden'});
    //
    $('html, body, header, main, footer').on('mousewheel',function(){
      return false;
    });
  }

  function enableScroll(){
    scroll=true;
    
    //
      $('body').css({
        'height':'100%',
        'overflow':'hidden'});
    //
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
  
  window.addEventListener("touchmove", preventMotion, false);

  function preventMotion(event)
  {
    if (!scroll) {
      $('html, body').css({'overflow-x': 'hidden'});  
      console.log('yes');
      event = event || window.event;
      window.scrollTo(0, 0);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  
});
