FROM node:16.15.1 AS builder
WORKDIR /usr/src/app
COPY .. .
RUN npm install && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
