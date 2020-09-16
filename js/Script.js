$(function(){

  var buttonDisableScroll = document.getElementById('disableScroll');
  buttonDisableScroll.onclick= disableScroll;

  var buttonEnableScroll = document.getElementById('enableScroll');
  buttonEnableScroll.onclick= enableScroll;
});

function disableScroll(){
  $('html, body, header, main, footer').on('mousewheel',function(){
    return false;
  });
}

function enableScroll(){
  $('html, body, header, main, footer').off('mousewheel');
}
