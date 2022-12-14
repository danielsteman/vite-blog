FROM node:16.15.1 AS builder
ARG PAT
ENV VITE_GITHUB_TOKEN=$PAT
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
