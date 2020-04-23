# Ubuntu server walkthrough

## Installing Asp.Net Core Runtime

[Link](https://docs.microsoft.com/ru-ru/dotnet/core/install/linux-package-manager-ubuntu-1804#install-the-aspnet-core-runtime) to instruction.

### Add repository

```
wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

sudo dpkg -i packages-microsoft-prod.deb
```


### Install packages

```
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install aspnetcore-runtime-3.1
```


## Install PostgreSql

[Link](https://www.postgresql.org/download/linux/ubuntu/) to manual.


### PostgreSql one more package

```
sudo apt-get install postgresql-11
```

### Set password for postgres user

#### Postgres console opening

```
sudo -u postgres psql
```

#### Set user password

```
ALTER USER postgres PASSWORD 'postgres_user_password';
```

Enter the password instead `postgres_user_password`

### Create a database

```
CREATE DATABASE my_site.com;
```

`my_site.com` - database name

## We collect the project locally and write to the server

Clone the sources of `SunEngine` from official [repository](https://github.com/sunengine/SunEngine) to your computer.

All build and publication scripts are located in the `Scripts/` directory

In the `Scripts/` directory, copy the file `PUBLISH.template` to` PUBLISH` and edit it, setting all the parameters

We assemble the project by executing the script - `build.sh` (the folder` build` appears in the root directory of the project)

Create the `/site/my_site.com` folder on the server. The path can be any.

We put `build` on the server, running the script` publi.sh`

On the server, edit the configuration files in the directory `/site/my_site.com/Config`



## Connection settings

In the file `/Config/DataBaseConnection.json` you must specify the database name, user postgres and password.

```
{
 "DataBaseConnection": {   
    "Linq2dbProvider": "PostgreSQL.9.5",
    "FluentMigratorProvider": "Postgres",
    "ConnectionString": "Host=localhost;Database=my_site.com;Username=postgres;Password=postgres_user_password"
  }
}
```


## Fill the database with initial data

In the directory `/site/my_site.com/Server` run

```
dotnet SunEngine.dll init migrate
```

This commandline creates tables and other structures in the database and fills with the initial data.

Read more about the `dotnet SunEngine.dll` commands in this article.


## Create a kestrel service on systemd

[Link](https://kimsereyblog.blogspot.com/2018/05/manage-kestrel-process-with-systemd.html) to instruction.

`systemd` allows after the server starts to constantly keep the necessary processes running, and restart if they are forced to turn off.


Create the file `my_site.com.service` in `/etc/systemd/system` directory

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

### Enable systemd service

```
systemctl enable my_site.com
```

### Commandlines to hack

#### Check the systemd process logs

```
journalctl -fxeu my_site.com
```

#### Restart systemd process

```
systemctl restart my_site.com
```

## Configuration Nginx

[Link](https://kimsereyblog.blogspot.com/2018/06/asp-net-core-with-nginx.html) to instruction.

### Installing Nginx 

```
sudo apt update && sudo apt full-upgrade
sudo apt install nginx
```

### Creating configuration of Nginx

First create the file `/etc/nginx/sites-available/my_site.com` and fill it with

```
server {
    listen 443 http2; # https port
    listen [::]:443 http2; # IP v6

    server_name my_site.site; # domen

    charset utf-8;

    ssl on; # turn on ssl
    ssl_certificate /etc/ssl/mysite.site/my_site.com.crt; # path to ssl sertificate
    ssl_certificate_key /etc/ssl/mysite.site/my_site.com.key; # path to ssl sertificates key

    gzip on; # enable gzip flow archiving
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

    location / { # Endpoint to frontend
        root /site/my_site.com/wwwroot;
        try_files $uri $uri/ /index.html; # if the file is not found return index.html

        open_file_cache max=1000 inactive=20s; # caching client files on the server
        open_file_cache_valid 30s;
        open_file_cache_min_uses 2;
        open_file_cache_errors on;
    }

    location ~ \.(js|json|css|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|jpg|jpeg|gif|png)$ { # browser caching
        expires 14d; # keep cache for 14 days
    }

    location /api/ { # Endpoint to backend. Works as a reverse proxy by sending requests to Kestrel as a separate process.
        proxy_pass http://localhost:5000/; # The port must match the settings kestrel in "Config/SunEngine.json"
        client_max_body_size 11M; # maximum request body size that Nginx allows ~= maximum size for upload file
    }
}

server { # redirect in case of login via http
    listen 80;
    listen [::]:80;
    server_name mysite.site;
    return 301 https://$host$request_uri;
}
```


### Activate my_site.com settings

```
sudo ln -s /etc/nginx/sites-available/my_site.com /etc/nginx/sites-enabled/my_site.com
```


### Reload Nginx Settings

```
sudo systemctl reload nginx
```

