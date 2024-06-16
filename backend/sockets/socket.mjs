import { Message } from '../DB/models/message.mjs';


export const configureSocket = (io) => {
    io.on('connection', async (socket) => {
        console.log('a user connected');


        socket.on('new message', async ({ userId, trainerId, message }) => {
            console.log('New message: ', message);
            const newMessage = await Message.create({ userId, trainerId, message });
            io.emit('new message', newMessage);
        });


        socket.on('load messages', async ({ userId, trainerId }) => {
            const messages = await Message.findAll({
                where: {
                    userId,
                    trainerId
                },
                order: [['timestamp', 'ASC']]
            });
            socket.emit('load messages', messages);
        });


        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
};