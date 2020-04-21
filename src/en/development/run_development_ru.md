# Launch for development

## Create a database

If there is no `Config` directory in the project root, you need to copy it from` Config.dev.template`. In other words, it is necessary to create a `Config` directory in the project root with the same contents as` Config.dev.template` in the project root.

Create the database `<data_base_name>` on any compatible subdirectory and write the settings and connection string to the file `/ SunEngine / Config / DataBaseConnection.json`.


## Launch from the console

In the directory `SunEngine / Server / SunEngine.Cli`.

Fill the database with the initial data `dotnet run migrate init seed` (if not done).

We start the server with the `dotnet run server` command in the` SunEngine / Client` directory.

Install the * npm * modules `yarn install` or` npm install` (if not done).

We start the client `quasar dev` - the browser with the site will open.


## Launch from Rider IDE

At the first start, it is necessary to carry out the items `1`,` 2`, `4`,` 7` (see above).

The server part is started by the start of the `/ Server / SunEngine.Cli` project.

To start the client part, you need to perform the “Add client to the panel” `Solution explorer` by right-clicking on the` SunEngine Solution -> Add -> Attach Existing Folder -> `select the directory` SunEngine / Client`.

Next, open the `npm` menu and execute:
- on the file `package.json`, right-click on the mouse` Tools -> Show npm Scripts`;
- the client part is launched through the * npm * script `dev run`.

