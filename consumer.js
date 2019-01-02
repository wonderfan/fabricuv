const amqp = require('amqplib');

(async function(){
    try {
        let connection = await amqp.connect('amqp://localhost');
        let channel = await connection.createChannel();
        let queue = 'tasks';
        await channel.assertQueue(queue);
        channel.consume(queue, function(msg) {
          if (msg !== null) {
            console.log(msg.content.toString());
            channel.ack(msg);
          }
        });
    }catch(err){
        console.error(err);
    }
})();