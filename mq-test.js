const RabbitClient = require("./mqclient");
const uuid = require('uuid/v4');
var config = {
  rabbitmq: 'amqp://localhost:5672'
};
const rabbitClient = new RabbitClient(config);
const fabricQueue = "fabric";
var uniqueId = uuid();

async function sendMessage(){
    var params = JSON.stringify({test:"abc"})
    rabbitClient._channel.sendToQueue(fabricQueue, new Buffer(params), {
    persistent: true,
    correlationId: uniqueId
  });
}

async function pullMessage(){
    let channel = rabbitClient._channel;
    channel.assertQueue(fabricQueue);
    channel.consume(fabricQueue, function(msg) {
      if (msg !== null) {
        console.log(msg.content.toString());
        channel.ack(msg);
      }
    });
}

(async function(){
    await rabbitClient.configureClient(2);
    await sendMessage();
    await pullMessage();
    await rabbitClient.stop();
})();