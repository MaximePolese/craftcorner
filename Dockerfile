# étape de build
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# étape de production
# variante pour FROM nginx:alpine-slim
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./src/components/img /usr/share/nginx/html/src/components/img
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]