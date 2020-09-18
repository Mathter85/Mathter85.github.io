$(function(){
  $('.antc-text-button').on('click',function(){
    //console.log($('.antc-text-nameNewTask').val());
    //console.log($('.antc-text-descriptonNewTask').val());
      if (($('.antc-text-nameNewTask').val()!='') & ($('.antc-text-descriptonNewTask').val()!=''))
      {
        //удаляем Список пуст
        $('.ltc-emptylist').remove();

        //Добавляем задачу
        $('.list-tasks-column').append(
          '<div class="ltc-task">'+
            '<div class="ltc-nameTask">'+ $('.antc-text-nameNewTask').val() +'</div>'+
            '<button class="button-deleteTask" type="button" name="deleteTask"><img src="img/del-button.png" alt="delete"></button>'+
            '<button class="button-rowDown" type="button" name="rowDown"></button>'+
          '</div>'+
          '<div class="ltc-descriptionTask">'+
            $('.antc-text-descriptonNewTask').val()+
          '</div>');

        } else {
          alert('Не заполнены все обязательные поля!');
        }
  });

  $(document).on('click','.button-deleteTask',function() {
    if (($(this).parent().next().next().text()=='') & (($(this).parent().prev().text()=='Список дел:')))
    {
      //доавляем список пуст, если будем удалять последнее дело
      $('.list-tasks-column').append(
        '<div class="ltc-emptylist">Список пуст...</div>'
      );
    }
    $(this).parent().next().remove();
    $(this).parent().remove();
  });
});
