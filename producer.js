const amqp = require('amqplib');
const uuid = require('uuid/v4');
(async function(){
    try {
        let connection = await amqp.connect('amqp://localhost');
        let channel = await connection.createChannel();
        let queue = 'tasks';
        await channel.assertQueue(queue);
        await channel.sendToQueue(queue, Buffer.from(uuid() + ':this is jia he'));
        await connection.close();
    }catch(err){
        console.error(err);
    }
})();