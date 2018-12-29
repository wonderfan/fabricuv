var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);

client.get("string key", function(err, reply) {
    console.log(reply);
    if(err) console.error(err);
});

setTimeout(function() {
    client.quit();
},2000);
