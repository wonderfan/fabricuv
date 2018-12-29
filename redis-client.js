const RedisClustr = require('redis-clustr');

var redis = new RedisClustr({
  servers: [
    {
      host: '127.0.0.1',
      port: 6379
    }
  ]
});

redis.set("abc","def");

setTimeout(function(){
    redis.quit();
},2000);


