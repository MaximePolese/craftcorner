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

# Copier les scripts
COPY ./substitute_environment_variables.sh /docker-entrypoint.d/substitute_environment_variables.sh
COPY ./start.sh /start.sh

# Ajouter les permissions d'exécution aux scripts
RUN chmod +x /docker-entrypoint.d/substitute_environment_variables.sh
RUN chmod +x /start.sh

EXPOSE 80

# Utiliser le script d'entrée personnalisé
CMD ["/start.sh"]