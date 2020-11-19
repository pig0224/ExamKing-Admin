FROM nginx:alpine

# 镜像信息
LABEL author="pig224" email="xiaomo_0258@icloud.com"

COPY ./docker/nginx/logs /var/log/nginx

COPY ./docker/nginx/vhost /etc/nginx/conf.d/

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf