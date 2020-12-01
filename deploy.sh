#!/bin/bash

# 项目名称
export COMPOSE_PROJECT_NAME="ek_admin_web"
export COMPOSE_FILE="./docker/docker-compose.yml"

# 部署版本号
if [ x"$2" = x ]; then 
  export VERSIONTAG="latest"
else
  export VERSIONTAG=$2
fi

# 容器服务
services=("ek_admin_web")

version(){
  tips "项目名称:${COMPOSE_PROJECT_NAME}  版本号：${VERSIONTAG}"
}

start(){
  tips "正在运行服务"
  docker-compose up -d --force-recreate
  tips "完成运行服务"
}

down(){
  tips "正在移除服务"
  for i in ${services[@]}  
  do 
  docker ps -a | grep "${i}" | awk '{print $1}' | xargs docker rm -f 
  docker images | grep "${i}" | awk '{print $1":"$2}' | xargs docker rmi -f
  done
  tips "完成移除服务"
}

stop(){
  tips "正在停止服务"
  docker-compose stop
  tips "完成停止服务"
}

restart(){
  tips "正在重启服务"
  docker-compose restart
  tips "完成重启服务"
}

usage(){
    echo "Usage: deploy.sh [start|stop|down|restart|version] [version]"
    exit 1
}

tips(){
  echo "======== ${1} ========"
}
case "$1" in
    "start")
      version
      start
      ;;
    "stop")
      version
      stop
      ;;
    "down")
      version
      down
      ;;
    "restart")
      version
      restart
      ;;
    "version")
      version
      ;;
    *)
      usage
      ;;
esac