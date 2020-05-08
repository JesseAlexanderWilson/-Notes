```
# BEGIN Redirect
# Redirect HTTPS to HTTP
RewriteEngine On
RewriteCond %{HTTP:X-Forwarded-Proto} =https
RewriteRule ^(.*)$ http://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
# END Redirect
```
