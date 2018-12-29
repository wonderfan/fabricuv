#!/usr/bin/env bash

# services

docker pull redis
docker run --name redis --restart always -d -p 6379:6379 redis

# node environment

