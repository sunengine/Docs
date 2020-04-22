# Directory structure

## Source code directory structure

- `bin /` building a server project when starting from the IDE
  ...
- `build /` build with build.sh
  ...
- `Server / DotNet project server source code
  ...

- `Client /` Quasar client source code

  - `src / statics /` static Quasar files
    - `skins /` site themes
    - `PartialSkins /` partial site themes
    ...
  - `config.js` file of the client config; at server startup, it is overwritten every time
  - `custom.js` file of custom scripts on the site, you can edit it through the admin panel
  - `custom.css` custom css file, can be edited through the admin panel

- `Config /` configuration directory
  - `Init /` initial initialization of the project
  - `MailTemplates /` mailing templates
  - `DataBaseConnection.json` database connection settings
  - `LogConfig.json` server logging settings
  - `SunEngine.json` project path settings, and other project start-up settings
  - `ServerInfo.json` server information to display on the information page in the admin panel
- `Config.dev.template /` configuration template for developers
  ...
- `Config.server.template /` configuration template for application on the server
  ...
- `Resources /` server resource files
  ...
- `Scripts /` Bash scripts for assembly and publication
  - `BUILD` Script build.sh settings
  - `build.sh` project build script
  - `PUBLISH` settings publi.sh script
  - `PUBLISH.template` template settings publi.sh script
  - `publi.sh` project publishing script
  - `UPDATE` script update.sh settings
  - `update.sh` update script from the official repository, all data will be overwritten
    ...
- `SunEngine.md` file defining the project root directory


## After the build script build.sh

Standard build directory of the `build` project

Obtained using the `build.sh` script with the default settings.

- `Server /` DotNet project server code
  - `SunEngine.dll` project startup file
  ...

- `wwwroot /` Quasar client and static files are distributed as static on the nginx web server
  - `statics /` Quasar static files
    - `skins /` site themes
    - `PartialSkins /` partial site themes
    - `index.html` client launch file
    ...
    - `config.js` file of the client config, it is recreated automatically when the server is restarted
    - `custom.js` file of custom scripts on the site, you can edit it through the admin panel
    - `custom.css` custom css file, can be edited through the admin panel
    ...  

- `Config /` configuration directory
   - `Init /` start directory initialization of the project
   - `MailTemplates /` mailing templates
   - `DataBaseConnection.json` database connection settings
   - `LogConfig.json` server logging settings
   - `SunEngine.json` project path settings and other project startup settings
   - `ServerInfo.json` server information to display on the information page in the admin panel
  
- `Resources /` server resources
     ...
- `SunEngine.md` file defining the project root directory
