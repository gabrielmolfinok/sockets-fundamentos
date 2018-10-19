var socket = io()

// Escuchar
socket.on( 'connect', () => console.log('Conectado al servidor') )

socket.on( 'disconnect', () => console.log('Perdimos conexión con el servidor') )

// Enviar informacion
socket.emit( 'enviarMensaje', {

    usuario: 'Gabriel',
    mensaje: 'Hola mundo'

}, (resp) => console.log('Respuesta server: ', resp) )

// Escuchar información
socket.on( 'enviarMensaje', (mensaje) => console.log('Servidor: ', mensaje) )
