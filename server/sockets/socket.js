const { io } = require('../server');

io.on('connection', (client) => { // el parametro client, contiene toda la informacion de la computadora o conexion que se establecio

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //broadcast es a todos los usuarios

        // if (mensaje.usuario) {

        //     callback({
        //         ok: true,
        //         respuesta: 'Todo salio bien!'
        //     });

        // } else {
        //     callback({
        //         ok: false,
        //         respuesta: 'Todo salio MAAAAL!'
        //     });
        // }



    })

})