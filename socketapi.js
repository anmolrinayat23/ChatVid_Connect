const io = require("socket.io")();
const socketapi = {
    io:io
};

// Add your socket.io logic here!
io.on( "connection", function(socket) {
    socket.on('join-room',(roomId,userId)=>{
        socket.join(roomId); 
        // socket.to(roomId).broadcast.emit('user-connected')
        socket.to(roomId).emit("user-connected",userId);
        socket.on('message',message =>{
            io.to(roomId).emit('createMessage',message)
        })
    })

    console.log( "A user connected" );


    });


module.exports = socketapi;
