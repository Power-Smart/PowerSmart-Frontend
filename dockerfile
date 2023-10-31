# Use an official Node.js runtime as the base image
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN vite build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
