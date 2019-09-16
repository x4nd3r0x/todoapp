$(document).ready(function(){
    $('#additem').on('click', additem);
    $('#todos').on('change','.completeitem', completeitem);
    $('#todos').on('click','.deleteitem', deleteitem);

    function additem(){
        var newTodotext = $('#newTodo').val();
        $('#todos').append('<li><input class="completeitem" type="checkbox">' + newTodotext  + '<span class="glyphicon glyphicon-trash deleteitem"></span></li>');
        $('#newTodo').val("");
    }

    function deleteitem(){
        $(this).parent().remove();
    }

    function completeitem(){
        $(this).parent().toggleClass('done');
    }
});