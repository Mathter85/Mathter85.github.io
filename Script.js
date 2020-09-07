$(function(){
  function changeFontColor()
  {
      $('#container').toggleClass('newStyle');
  }
  $('#changeColor').on('click', function(){
    changeFontColor();
  });
});
