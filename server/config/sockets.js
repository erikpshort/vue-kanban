var io = require('socket.io')



export default {
    on: function (socket) {
        socket.emit('CONNECTED', {
            socket: socket.id,
            message: 'Welcome to the Jungle'
        })

        socket.on('update', function (data) {
            console.log(data)
        })
    },

}