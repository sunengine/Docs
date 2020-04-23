# Nginx configuration

The server and client parts are launched at different endpoints, for example, the client part of `mysite.site` and the server part of `mysite.site/api`.

## HTTP2 + HTTPS

```
server {
    listen 443 http2;         # https port
    listen [::]:443 http2;    # IP v6

    server_name mysite.site;  # домен

    charset utf-8;

    ssl on;    # turn on ssl
    ssl_certificate /etc/ssl/mysite.site/mysite.ite.srt;         # Path to ssl sertivicate
    ssl_certificate_key /etc/ssl/mysite.site/mysite.site.key;    # Path to ssl sertivicate's key
    gzip on;   # turn on gzip data flow

    gzip_buffers 16 8k;
    gzip_comp_level 6;
    gzip_http_version 1.1;
    gzip_min_length 256;
    gzip_proxied any;
    gzip_vary on;
    gzip_types text/xml application/atom+xml application/rss+xml application/xhtml+xml text/javascript application/javascript
    application/x-javascript text/x-json application/json application/x-web-app-manifest+json text/css text/plain
    text/html font/opentype application/x-font-ttf image/x-icon image/svg+xml;
    gzip_disable "msie6";

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    # Endpoint for the client
    location / {   
       root /site/mysite.site/wwwroot;
       try_files $uri $uri/ /index.html;   # if the file is not found, return index.html

       open_file_cache max=1000 inactive=20s; # caching client files on the server
       open_file_cache_valid 30s;
       open_file_cache_min_uses 2;
       open_file_cache_errors on;

       # browser caching
       location ~ \.(js|json|css|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|jpg|jpeg|gif|png)$ {
           expires 14d; # keep cache for 14 days
       }
    }
    # Endpoint for the server side. Works as a reverse proxy by sending requests to Kestrel as a separate process.
    location /api/ {   
           proxy_pass http://localhost:5000/; # The port must match the kestrel settings in SunEngine.json
           client_max_body_size 11M;  # maximum request body size that Nginx allows ~ = maximum size for upload file
    }

server {  # redirect in case of login via http
    listen 80;
    listen [::]:80;

    server_name mysite.site;
    return 301 https://$host$request_uri;
}
```


To work, you need to start the `Kestrel` service as a separate process.

[Instructions in the article](https://kimsereyblog.blogspot.com/2018/05/manage-kestrel-process-with-systemd.html).


The Kestrel port in `/Config/SunEngine.json` must match the configuration port in `nginx`.


## HTTP

Use only for development or testing purposes. Do not use on `production`.

```
server {
    listen 80; # http port
    listen [::]:80;

    server_name mysite.site; # domen
         
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
     
    charset utf-8;
         
    # Endpoint for the client
    location / {   
       root /site/mysite.site/wwwroot;
       try_files $uri $uri/ /index.html;   # if the file is not found, return index.html
     }

    #   Endpoint for the server side. Works as a reverse proxy by sending requests to Kestrel running as a separate process.
    location /api/ {   
       proxy_pass  http://localhost:5000/;   # The port must match the kestrel settings in "/Config/SunEngine.json"
            
       client_max_body_size 11M;  #   maximum request body size that Nginx allows ~= maximum size for upload file
    }
}
```
 
