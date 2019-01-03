const amqp = require('amqplib');
const uuid = require('uuid/v4');
(async function(){
    try {
        let connection = await amqp.connect('amqp://localhost');
        let channel = await connection.createChannel();
        let queue = 'tasks';
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(uuid() + ':this is jia he'));
        await channel.close();
        connection.close();
    }catch(err){
        console.error(err);
    }finally{
        console.log(">>> close statement");
    }
})();