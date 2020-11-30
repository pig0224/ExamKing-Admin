# build
FROM node:latest AS builder

# 切换编译目录
WORKDIR /build
COPY ./ ./
# 编译项目
RUN yarn config set registry https://registry.npm.taobao.org/ \
  && yarn install \
  && yarn run build:prod

# web
FROM nginx:alpine

# 镜像信息
LABEL author="pig224" email="xiaomo_0258@icloud.com"
# 时区
RUN sed -i "s@http://dl-cdn.alpinelinux.org/@https://repo.huaweicloud.com/@g" repositories  \
  && apk --no-cache add tzdata \
  && ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo 'Asia/Shanghai' > /etc/timezone

COPY ./docker/nginx/logs /var/log/nginx
COPY ./docker/nginx/vhost /etc/nginx/conf.d/
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

# 拷贝项目
COPY --from=builder /build/dist/ /var/www/html

EXPOSE 80