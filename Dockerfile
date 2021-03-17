# Stage 1, Build Angular
FROM node:14.15.5-alpine3.10 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install && /app/node_modules/.bin/ngcc

COPY . .
# Build the project and copy the files
RUN npm run build --prod

# Stage 2, Build NGINX
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
