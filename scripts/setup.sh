#!/usr/bin/env bash

# services

docker pull redis
docker run --name redis --restart always -d -p 6379:6379 redis

docker run -d --name rabbitmq -p 5672:5672 rabbitmq

# node environment

nvm install v8.9.0


