$(document).ready(function () {
    $('#botao-limpar').click(function () {
        $('#nova-tarefa').val('');
    })

    $('form').on('submit', function (e) {

        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();

        const novoItem = $('<li class="space_top"></li>');

        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $("li").click(function (){
            $(this).addClass('link_riscar');
        })
        $('#nova-tarefa').val('');

    })
})
