# Deploy

All `.sh` scripts is in `Scripts/`


To deploy to the server you must perform the following steps:

- Run `build.sh` script.
- Prepare the parameters for the `publi.sh` script by renaming` PUBLISH.template` to `PUBLISH` and edit the settings in the file.
- Run `publi.sh` script.


## Creating Build

### build.sh script

The script works out of the box.

After starting the whole project is going to the `build` directory.

The client part is placed in `build/wwwroot`.

The default file is `BUILD`, or specify the settings file with the first argument

```
"build.sh /path/to/BUILD_VARS"
```


## BUILD Script Settings

- `PROJECT_NAME="SunEngine"`             - the name of the project, used to display in the console
- `PROJECT_ROOT="auto"`                  - path to the project root directory  
The value of `auto`: the current directory or the directory above is determined by the contents in the directory of the `.SunEngineRoot` file  
- `SERVER_PATH="${PROJECT_ROOT}/Server"` - path to the server part of the project (DotNet solution)
- `CLIENT_PATH="${PROJECT_ROOT}/Client"` - the path to the client part of the project (Quasar project)
- `CONFIG_PATH="${PROJECT_ROOT}/Config"` - the path to the directory with the project configuration
- `BUILD_PATH="${PROJECT_ROOT}/build"`   - the path to which the resulting project assembly will be placed
- `NPM_UTIL="yarn"`                      - installer of npm packages (yarn or npm)


## Installation on the server

### Script publi.sh

Before starting, you need to edit the parameters in the `PUBLISH` script settings file.

The `publi.sh` script writes the` build` directory to the server, overwriting all the files, and the `Config` directory writes only if it is not already on the server.

The default file is `PUBLISH`, or specify the settings file with the first argument

```
"publi.sh /path/to/PUBLISH_VARS"
```

In order for the script to be able to fully work out the user `username` on the server (under which the script runs), add `www-data`, `systemd-journal`,` systemd-network`, `systemd-network`, `systemd -resolve`. This can be done by editing the file `/etc/group`.


## PUBLISH script settings

- `PROJECT_NAME="SunEngineDemo"`            - the name of the project, used to display in the console
- `LOCAL_BUILD_PATH="/path/to/local/build"` - the path to the build directory of the project, must match the `BUILD_PATH` from the file `BUILD`
- `REMOTE_USER="username"`                  - username under which the connection to the server will be made
- `REMOTE_HOST="111.111.111.111"`           - IP or domain of the server host
- `REMOTE_DIRECTORY="/remote/dir/path"`     - the path to the directory on the server where the download will be performed
- `REMOTE_DIRECTORY_OWNER="www-data"`       - the user who owns `REMOTE_DIRECTORY` on the server
- `REMOTE_DIRECTORY_GROUP="www-data"`       - the group of which belongs to `REMOTE_DIRECTORY` on the server
- `REMOTE_SYSTEMD_SERVICE_NAME="demo.sunengine.site"` - the name of the service `systemd` to restart after loading


## Writing configuration files

After building `build.sh` and publishing `publi.sh`, you need to configure the server to edit the files in the `Config` directory on the server, this is done once.
It is necessary to register the correct database settings in `DataBaseConnection.json`

Other settings as needed.

The `Config/Init` directory is used to start initializing the site database - the `dotnet SunEngine.dll init migrate` command.

## Upgrading `SunEngine` on the server to the latest version from the` GitHub` repository

### Script: update.sh

The script works out of the box provided the `publi.sh` script is configured.

The script takes the latest version from the master branch of the repository, overwriting everything that was before except for `Config`

And sequentially runs `build.sh` and `publi.sh` scripts.


## UPDATE script settings

- `PROJECT_NAME="SunEngineDemo"`     - the name of the project, used to display in the console
- `PROJECT_ROOT="auto"`              - the path to the root directory of the project
The value of `auto`: the current directory or the directory above is determined by the contents in the directory of the `.SunEngineRoot` file.  
- `BUILD_SCRIPT_PATH="./build.sh"`   - the path to the build script
- `PUBLISH_SCRIPT_PATH="./publi.sh"` - the path to the publication script

