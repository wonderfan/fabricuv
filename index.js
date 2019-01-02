const amqp = require('amqplib');

(async function(){
    try {
        let connection = await amqp.connect('amqp://localhost');
        let channel = await connection.createChannel();
        let queue = 'tasks';
        await channel.assertQueue(queue);
        await channel.sendToQueue(queue, Buffer.from('this is jia he test'));
        await connection.close();
    }catch(err){
        console.error(err);
    }
})();