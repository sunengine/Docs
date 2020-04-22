# Organization of service systemd

The `systemd` service in Linux allows you to constantly keep the necessary processes running, and restart if they crash.

## Creating a configuration file for my_site.com in systemd

The setup begins by creating the file `my_site.com.service` in the directory` / etc / systemd / system` and adding the corrected content for it to your situation:

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


## Enabling and starting a service

The service must first be initialized in the system:

`` `systemctl enable my_site.com```

and the next step is to run:

`` `systemctl start my_site.com```

Now the `SunEngine.dll server` will work in continuous mode. If the server operating system is restarted, the service will start when it is restarted.


## Existing problems

Service reboot during update.


## systemd commands

So, to work with a serviv you just need to master these commands:

To enable (initialize) the start process of `my_site.com` when the operating system boots:

```systemctl enable my_site.com```

View Logs:

```journalctl -fxeu my_site.com```

Process start:

```systemctl start my_site.com```

Process stop:

```systemctl stop my_site.com```

Process restart:

```systemctl restart my_site.com```

Disabling the launch of `"my_site.com"` at system startup:

```systemctl disable my_site.com```

