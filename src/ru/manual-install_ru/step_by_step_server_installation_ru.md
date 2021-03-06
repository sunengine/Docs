# Пошаговое руководство по установке на Ubuntu сервер

## Устанавливаем Asp.Net Core Runtime

[Ссылка](https://docs.microsoft.com/ru-ru/dotnet/core/install/linux-package-manager-ubuntu-1804#install-the-aspnet-core-runtime) на инструкцию.

### Добавляем репозиторий

```
wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

sudo dpkg -i packages-microsoft-prod.deb
```


### Устанавливаем

```
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install aspnetcore-runtime-3.1
```


## Устанавливаем PostgreSql

[Ссылка](https://www.postgresql.org/download/linux/ubuntu/) на инструкцию.


### Устанавливаем

```
sudo apt-get install postgresql-11
```

### Устанавливаем пароль для пользователя postgres

#### Открывается консоль `postgres`

```
sudo -u postgres psql
```

#### Задаём пароль пользовател

```
ALTER USER postgres PASSWORD 'postgres_user_password';
```

Вместо `postgres_user_password` необходимо задать пароль

### Cоздаём базу данных 

```
CREATE DATABASE my_site.com;
```

`my_site.com` - имя базы

## Собираем проект локально и записываем на сервер

Скачиваем с [репозитория](https://github.com/sunengine/SunEngine) код `SunEngine` на локальный компьютер.

Все скрипты сборки и публикации находятся в директории `Scripts/`

В директории `Scripts/` копируем файл `PUBLISH.template` в `PUBLISH` и редактируем его, настраивая все параметры

Собираем проект выполнив скрипт - `build.sh` (появится папка `build` в корневом каталоге проекта)

Создаём на сервере папку `/site/my_site.com`. Путь может быть любым.

Выкладываем `build` на сервер, запуская скрипт `publi.sh`

На сервере редактируем файлы настроек в директории  `/site/my_site.com/Config`



## Настройки подключения

В файле `/Config/DataBaseConnection.json` необходимо указать имя базы данных, пользователя postgres и пароль.

```
{
 "DataBaseConnection": {   
    "Linq2dbProvider": "PostgreSQL.9.5",
    "FluentMigratorProvider": "Postgres",
    "ConnectionString": "Host=localhost;Database=my_site.com;Username=postgres;Password=postgres_user_password"
  }
}
```


## Заполняем базу данных начальными данными

В папке `/site/my_site.com/Server` запускаем

```
dotnet SunEngine.dll init migrate
```

Эта команда создаёт таблицы и другие структуры в базе данных и заполняет начальными данными.

Подробнее о командах `dotnet SunEngine.dll` в [статье](/src/ru/manual-install_ru/arguments_for_run_ru.html).

## Создаём kestrel сервис на systemd

[Ссылка](https://kimsereyblog.blogspot.com/2018/05/manage-kestrel-process-with-systemd.html) на инструкцию.

`systemd` позволяет после старта сервера постоянно держать необходимые процессы запущенными, и перезапускать, если они вынужденно выключаются.


Создаём файл `my_site.com.service` в папке `/etc/systemd/system`

```
  [Unit]
  Description=SunEngine my_site.com

  [Service]
  WorkingDirectory=/site/my_site.com
  ExecStart=/usr/bin/dotnet /site/my_site.com/Server/SunEngine.dll server
  SyslogIdentifier=my_site.com
  User=www-data
  Restart=always
  RestartSec=10
  KillSignal=SIGINT
  Environment=ASPNETCORE_ENVIRONMENT=Production

  [Install]
  WantedBy=multi-user.target
```

### Включаем systemd сервис 

```
systemctl enable my_site.com
```

### Команды которые могут пригодиться

#### Посмотреть логи systemd процессв

```
journalctl -fxeu my_site.com
```

#### Перезапуск процесса systemd

```
systemctl restart my_site.com
```

## Конфигурация Nginx веб сервера

[Ссылка](https://kimsereyblog.blogspot.com/2018/06/asp-net-core-with-nginx.html) на инструкцию.

### Устанавливаем `Nginx`

```
sudo apt-get update
sudo apt-get install nginx
```

### Создание `Nginx` конфигурации

Создаём файл `/etc/nginx/sites-available/my_site.com`

```
server {
    listen 443 http2; # https port
    listen [::]:443 http2; # IP v6

    server_name my_site.site; # домен

    charset utf-8;

    ssl on; # включаем ssl
    ssl_certificate /etc/ssl/mysite.site/my_site.com.crt; # Путь к ssl сертификату
    ssl_certificate_key /etc/ssl/mysite.site/my_site.com.key; # Путь к ключу сертификата

    gzip on; # включаем gzip архивацию потока данных
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

    location / { # Endpoint для клиентской части
        root /site/my_site.com/wwwroot;
        try_files $uri $uri/ /index.html; # если файл не найден - возвращаем index.html

        open_file_cache max=1000 inactive=20s; # кеширование файлов клиента на сервере
        open_file_cache_valid 30s;
        open_file_cache_min_uses 2;
        open_file_cache_errors on;
    }

    location ~ \.(js|json|css|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|jpg|jpeg|gif|png)$ {     # кеширование в браузере
        expires 14d; # хранить кеш 14 дней
    }

    location /api/ { # Endpoint для серверной части. Работает как reverse proxy отправляя запросы в Kestrel работающим отдельным процессом.
        proxy_pass http://localhost:5000/; # Порт должен соответствовать настройкам kestrel в "Config/SunEngine.json"
        client_max_body_size 11M; # максимальный размер тела запроса, который допускает Nginx ~= максимальный размер для upload файла
    }
}

server { # редирект в случае входа через http
    listen 80;
    listen [::]:80;
    server_name mysite.site;
    return 301 https://$host$request_uri;
}
```


### Активизируем настройки my_site.com

```
sudo ln -s /etc/nginx/sites-available/my_site.com /etc/nginx/sites-enabled/my_site.com
```


### Перезагружаем настройки Nginx

```
sudo systemctl reload nginx
```

