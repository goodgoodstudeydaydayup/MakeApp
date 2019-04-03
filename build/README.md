this file is about the build evrn tips

steps:
1. 
#install the docker on your host . you can install the lastest verison 
#https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac

2.   download the MI(machine image)
2.1    docker build -t mysql8 . (run this command after "CD 8.0")   
       docker pull  phpmyadmin
2.2    docker pull node:8.0


3.  startup MI 
3.1  开启mysql 数据库 ，phpmyadmin 是为了浏览和监控 mysql数据库
docker run --name mysql2 -p 12346:3306 -e MYSQL_ROOT_PASSWORD=123456  -d mysql8
docker run --name myadmin -d --link mysql2:db -p 8080:80 phpmyadmin/phpmyadmin
3.2   开启 nodjs 服务
docker run --name nodeserver -v /Users/tonylei/Documents/post/postcode/src/backend:/home/node -p 8081:8080 -it node:8.0  /bin/bash

#docker run --name nodeserver -v /Users/tonylei/Documents/post/postcode/src:/usr/server -p 8081:8080 -d node:8.0
