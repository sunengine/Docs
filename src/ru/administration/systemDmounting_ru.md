# Организация сервиса systemd

Сервис `systemd` в Linux позволяет постоянно держать необходимые процессы запущенными, и перезапускать, если они аварийно выключаются.

## Создание конфигурационного файла для my_site.com в systemd

Настройка начинается с создания файла `"my_site.com.service"` в директории `"/etc/systemd/system"` и внесением в него такого контента скорректорованного под вашу ситуацию:

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


## Включение и запуск сервиса

Сервис сначала необходимо проинициализировть в системе:

```systemctl enable my_site.com```

и следующим шагом - запустить:

```systemctl start my_site.com```

Теперь `"SunEngine.dll server"` будет работать в постоянном режиме. Если операционная система сервера будет перезагружена, сервис запустится при её новом запуске.


## Существующие проблемы

Перезагрузка сервиса при обновлении.


## Команды работы с systemd

Итак, для работы с сервивом вам достаточно освоить эти команды:

Включение (инициализация) процесса запуска `"my_site.com"` при загрузке операционной системы:

```systemctl enable my_site.com```

Просмотр логов:

```journalctl -fxeu my_site.com```

Запуск процесса:

```systemctl start my_site.com```

Остановка процесса:

```systemctl stop my_site.com```

Перезапуск процесса:

```systemctl restart my_site.com```

Отключение запуска `"my_site.com"` при загрузке системы:

```systemctl disable my_site.com```

