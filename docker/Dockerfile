FROM nginx:stable-alpine

COPY ./docker/rootfs /
COPY ./dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]