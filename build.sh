#!/bin/bash

# 项目名称
export COMPOSE_PROJECT_NAME="ek_admin_web"
export COMPOSE_FILE="./docker/docker-compose.yml"
version=`cat VERSION`

# 部署版本号
if [ "$version" = "" ]; then 
  export VERSIONTAG="latest"
else
  export VERSIONTAG=$version
fi

echo "=======项目名称:${COMPOSE_PROJECT_NAME}  版本号：${VERSIONTAG}========"

# 构建镜像
docker-compose build 

# 垃圾回收
docker image prune -f