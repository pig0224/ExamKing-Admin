# build
FROM node:latest AS builder
# 切换编译目录
WORKDIR /build
COPY ./ ./
# 编译项目
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
  && cnpm install \
  && cnpm run build:prod

# web
FROM nginx:alpine
# 镜像信息
LABEL author="pig224" email="xiaomo_0258@icloud.com"
# 时区
ENV TZ=Asia/Shanghai

COPY ./docker/nginx/logs /var/log/nginx
COPY ./docker/nginx/vhost /etc/nginx/conf.d/
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

# 拷贝项目
COPY --from=builder /build/dist/ /var/www/html