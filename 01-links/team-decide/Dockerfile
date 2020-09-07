FROM ubuntu:latest

USER root

RUN apt-get update
RUN apt-get install -y nginx nodejs

RUN rm -v /etc/nginx/nginx.conf

ADD ./docker/nginx.conf /etc/nginx

ADD ./web /usr/share/nginx/html/
ADD ./web /var/www/html/

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 90

CMD service nginx start

# docker build . -t 1-team-decide
# docker run -p 90:90 1-team-decide
