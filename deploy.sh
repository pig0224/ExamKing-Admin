#!/bin/bash

# 项目名称
export COMPOSE_PROJECT_NAME="ek_admin_web"

# 获取短版本号
GITCOMMITHASH=`git rev-parse --short HEAD`
export GITHASH=${GITCOMMITHASH}

# 容器服务
services=("admin_web")

version(){
  echo "=======项目名称:${COMPOSE_PROJECT_NAME}  版本号：${GITHASH}========"
}

start(){
  version
  echo "======== 正在构建docer-compose ========"
  docker-compose up --build -d
  # 垃圾回收
  docker image prune -f
  echo "==== 完成 docker-compose 构建与运行 ===="
}

stop(){
  version
  echo "======== 正在停止docer-compose ========"
  for i in ${services[@]}  
  do  
  docker ps | grep "${i}" | awk '{print $1}' | xargs docker stop && docker ps -a | grep "${i}" | awk '{print $1}' | xargs docker rm && docker images | grep "${i}" | awk '{print $1":"$2}' | xargs docker rmi -f
  done
  echo "======== 完成docer-compose停止 ========"
}

restart(){
  stop
  start
}

usage(){
    echo "Usage: deploy.sh [start|stop|restart|version]"
    exit 1
}

case "$1" in
    "start")
      start
      ;;
    "stop")
      stop
      ;;
    "restart")
      restart
      ;;
    "version")
      version
      ;;
    *)
      usage
      ;;
esac