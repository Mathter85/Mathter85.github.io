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
            '<button class="button-rowDown" type="button" name="rowDown"><img src="img/rect-down.png" alt="hide"></button>'+
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

//обработка кнопки сворачивания описания задачи;
  $(document).on('click','.button-rowDown',function() {
    if ($(this).parent().next().is(':visible')==true){ //блок описания виден
      $(this).parent().next().hide(); //блок описания удалить
      $(this).parent().css({'margin-bottom':'20px'}); //добавить после блока с названимем отступ снизу
      $(this).children().css({'transform':'rotate(-90deg)'});
    } else {
      $(this).parent().next().show();
      $(this).parent().css({'margin-bottom':''});
      $(this).children().css({'transform':'rotate(0deg)'});
    }

  });

});
