FROM node:latest

# 镜像信息
LABEL author="pig224" email="xiaomo_0258@icloud.com"

# 切换项目目录
WORKDIR /home/examking
COPY ./ ./

# 编译项目
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
  && npm install \
  && npm run build:prod