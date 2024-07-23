#!/bin/sh

# Exécuter le script de substitution des variables d'environnement
/bin/sh /docker-entrypoint.d/substitute_environment_variables.sh

# Démarrer Nginx
nginx -g 'daemon off;'
