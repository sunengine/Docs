(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{224:function(t,e,n){"use strict";n.r(e);var s=n(28),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"запуск-на-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#запуск-на-nginx"}},[t._v("#")]),t._v(" Запуск на Nginx")]),t._v(" "),n("p",[t._v("Серверная и клиентская части запускаются на разных конечных точках, например клиентская часть "),n("code",[t._v("mysite.site")]),t._v(", серверная часть "),n("code",[t._v("mysite.site/api")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"http2-https"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http2-https"}},[t._v("#")]),t._v(" HTTP2 + HTTPS")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('server {\n    listen 443 http2;         # https port\n    listen [::]:443 http2;    # IP v6\n\n    server_name mysite.site;  # домен\n\n    charset utf-8;\n\n    ssl on;    # включаем ssl\n    ssl_certificate /etc/ssl/mysite.site/mysite.ite.srt;         # Путь к ssl сертификату\n    ssl_certificate_key /etc/ssl/mysite.site/mysite.site.key;    # Путь к ключу сертификата \n    gzip on;   # включаем gzip архивацию потока данных\n\n    gzip_buffers 16 8k;\n    gzip_comp_level 6;\n    gzip_http_version 1.1;\n    gzip_min_length 256;\n    gzip_proxied any;\n    gzip_vary on;\n    gzip_types text/xml application/atom+xml application/rss+xml application/xhtml+xml text/javascript application/javascript\n    application/x-javascript text/x-json application/json application/x-web-app-manifest+json text/css text/plain\n    text/html font/opentype application/x-font-ttf image/x-icon image/svg+xml;\n    gzip_disable "msie6";\n\n    add_header X-Frame-Options "SAMEORIGIN";\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Content-Type-Options "nosniff";\n\n    # Endpoint для клиентской части\n    location / {   \n       root /site/mysite.site/wwwroot;\n       try_files $uri $uri/ /index.html;   # если файл не найден - возвращаем index.html\n\n       open_file_cache max=1000 inactive=20s; # кеширование файлов клиента на сервере\n       open_file_cache_valid 30s;\n       open_file_cache_min_uses 2;\n       open_file_cache_errors on;\n\n       # кеширование в браузере\n       location ~ \\.(js|json|css|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|jpg|jpeg|gif|png)$ {\n           expires 14d; # хранить кеш 14 дней\n       }\n    }\n    # Endpoint для серверной части. Работает как reverse proxy отправляя запросы в Kestrel работающим отдельным процессом.\n    location /api/ {   \n           proxy_pass http://localhost:5000/; # Порт должен соответствовать настройкам kestrel в SunEngine.json\n           client_max_body_size 11M;  # максимальный размер тела запроса, который допускает Nginx ~= максимальный размер для upload файла\n    }\n\nserver {  # редирект в случае входа через http\n    listen 80;\n    listen [::]:80;\n\n    server_name mysite.site;\n    return 301 https://$host$request_uri;\n}\n')])])]),n("p",[t._v("Для работы необходимо запустить "),n("code",[t._v("Kestrel")]),t._v(" сервис отдельным процессом.")]),t._v(" "),n("p",[t._v("Инструкция в "),n("a",{attrs:{href:"https://kimsereyblog.blogspot.com/2018/05/manage-kestrel-process-with-systemd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("статье"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("Порт Kestrel в "),n("code",[t._v("/Config/SunEngine.json")]),t._v(" должен совпадать с портом конфигурации в "),n("code",[t._v("nginx")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),n("p",[t._v("Использовать только для целей разработки или тестирования. Не использовать на "),n("code",[t._v("production")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('server {\n    listen 80; # http порт\n    listen [::]:80;\n\n    server_name mysite.site; # домен\n         \n    add_header X-Frame-Options "SAMEORIGIN";\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Content-Type-Options "nosniff";\n     \n    charset utf-8;\n         \n    # Endpoint для клиентской части\n    location / {   \n       root /site/mysite.site/wwwroot;\n       try_files $uri $uri/ /index.html;   # если файл не найден - возвращаем index.html\n     }\n\n    # Endpoint для серверной части. Работает как  reverse proxy отправляя запросы в Kestrel работающий отдельным процессом.  \n    location /api/ {   \n       proxy_pass  http://localhost:5000/;   # Порт должен соответствовать настройкам kestrel в "/Config/SunEngine.json"\n            \n       client_max_body_size 11M;  # максимальный размер тела запроса, который допускает Nginx ~= максимальный размер для upload файла  \n    }\n}\n')])])])])}),[],!1,null,null,null);e.default=i.exports}}]);