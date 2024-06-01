FROM nginx

RUN apt-get update && apt-get install -y curl && mkdir -p www/data/static

COPY /nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY /nginx/config/settings/proxy.conf /etc/nginx/proxy.conf
COPY /nginx/config/settings/mime.types /etc/nginx/conf/mime.types
COPY /nginx/config/servers /etc/nginx/servers

EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]