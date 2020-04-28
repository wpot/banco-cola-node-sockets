var socket = io();



var serchParams = new URLSearchParams(window.location.search);


if (!serchParams.has('escritorio')) {

    windows.location = 'index.html';

    throw new Error('El escritorio es necesario');


}

var escritorio = serchParams.get('escritorio');
var label = $('small');
$('h1').text('Escritorio: ' + escritorio);


$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === "no hay tickets") {
            alert(resp);
            return;

        }

        label.text('ticket:' + resp.numero);

    });

});