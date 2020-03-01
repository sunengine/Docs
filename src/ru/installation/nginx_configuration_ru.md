## Запуск на Nginx

Серверная и клиентская части запускаются на разных конечных точках, например клиентская часть "mysite.site", серверная часть "mysite.site/api".

### HTTPS

server {
       listen 443 http2;      # https port
       listen [::]:443 http2; # IP v6

       server_name mysite.site; # домен

       charset utf-8;

       ssl on;  # включаем ssl
       ssl_certificate /etc/ssl/mysite.site/mysite.site.crt;        # Путь к ssl сертификату
       ssl_certificate_key /etc/ssl/mysite.site/mysite.site.key;    # Путь к ключу сертификата gzip on; # включаем gzip архивацию потока данных

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

       location / {    # Endpoint для клиентской части
              root /site/mysite.site/wwwroot;
              try_files $uri $uri/ /index.html;   # если файл не найден - возвращаем index.html

              open_file_cache max=1000 inactive=20s; # кеширование файлов клиента на сервере
              open_file_cache_valid 30s;
              open_file_cache_min_uses 2;
              open_file_cache_errors on;

              # кеширование в браузере
              location ~ \.(js|json|css|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|jpg|jpeg|gif|png)$ {
                     expires 14d; # хранить кеш 14 дней
              }
       }

       location /api/ {    # Endpoint для серверной части. Работает как reverse proxy отправляя запросы в Kestrel работающим отдельным процессом.
              proxy_pass http://localhost:5000/; # Порт должен соответствовать настройкам kestrel в SunEngine.json
              client_max_body_size 11M;  # максимальный размер тела запроса, который допускает Nginx ~= максимальный размер для upload файла
       }

server {  # редирект в случае входа через http
       listen 80;
       listen [::]:80;

       server_name mysite.site;
       return 301 https://$host$request_uri;
}



Для работы необходимо запустить Kestrel сервис отдельным процессом. 
Инструкция в статье.
Порт Kestrel в "/Config/SunEngine.json" должен совпадать с портом  конфигурации в nginx.

### HTTP

Использовать только для целей разработки или тестирования. Не использовать на production.

server {
     listen 80; # http порт
     listen [::]:80;

     server_name mysite.site; # домен
         
     add_header X-Frame-Options "SAMEORIGIN";
     add_header X-XSS-Protection "1; mode=block";
     add_header X-Content-Type-Options "nosniff";
     
     charset utf-8;
         
     location / {    # Endpoint для клиентской части
        root /site/mysite.site/wwwroot;
        try_files $uri $uri/ /index.html;   # если файл не найден - возвращаем index.html
     }
         
     location /api/ {    # Endpoint для серверной части. Работает как reverse proxy отправляя запросы в Kestrel работающий отдельным процессом.
        proxy_pass  http://localhost:5000/;   # Порт должен соответствовать настройкам kestrel в "/Config/SunEngine.json"
            
        client_max_body_size 11M;  # максимальный размер тела запроса, который допускает Nginx ~= максимальный размер для upload файла  
     }
}

### Метки:

deploy

http

https

nginx

production

server 