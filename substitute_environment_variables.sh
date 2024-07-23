#!/bin/sh
ROOT_DIR=/usr/share/nginx/html/assets
# Replace env vars in files served by NGINX
for file in $ROOT_DIR/*.js*;
do
  sed -i 's|VITE_API_URL_PLACEHOLDER|'${VITE_API_URL}'|g' $file
  # Your other variables here...
done

# Let container execution proceed
exec "$@"