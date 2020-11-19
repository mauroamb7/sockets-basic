let socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

// Escuchar informacion
socket.on('disconnect', () => {
    console.log('perdimos conexion con el servidor');
})

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Mauro',
    mensaje: 'Hola mundo'
}, (res) => {
    console.log('Respuesta server: ', res);
});

// Escuchar informacion
socket.on('enviarMensaje', (res) => {
    console.log('Servidor', res);
});