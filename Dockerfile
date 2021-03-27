# Stage 1, Build Angular
FROM node:14.15.5-alpine3.10 as builder

WORKDIR /app

RUN npm i gzipper -g

COPY package*.json ./

RUN npm install && /app/node_modules/.bin/ngcc

COPY . .
# Build the project and copy the files
RUN npm run build --prod

RUN gzipper compress -i js,css,svg --level 4 /app/dist/edlinker

# Stage 2, Build NGINX
FROM nginx:1.19.6

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /app/dist/edlinker /usr/share/nginx/html

# COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf" && nginx -g 'daemon off;'
