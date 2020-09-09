FROM ubuntu:latest

USER root

RUN apt-get update

RUN apt-get install -y nginx

RUN rm -v /etc/nginx/nginx.conf

ADD ./docker/nginx.conf /etc/nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 3000

CMD service nginx start
