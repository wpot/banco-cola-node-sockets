////comando para establecer la coneccion


var socket = io();


var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log('conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('desconectado del servidor')

});


//estado actual

socket.on('estadoActual', function(res) {

    label.text(res.actual);

});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    })


});