## Launch for development

### Create a database

If there is no "Config" directory, copy it from "Config.template".
Create a database <data_base_name> on any compatible subdirectory and register the settings and connection string in the file "/SunEngine/Config/DataBaseConnection.json".

### Launch from the console

In the folder "SunEngine / Server / SunEngine.Cli".
Fill the database with the initial data "dotnet run migrate init seed" (if not done).
We start the server "dotnet run server".
In the folder "SunEngine / Client".
Install npm modules "yarn install" or "npm install" (if not done).
We start the client "quasar dev" - the browser with the site will open.

### Launch from Rider IDE

At the first start, it is necessary to perform paragraphs 1,2,4,7 (see above).
The server part is launched by the start of the project "/Server/SunEngine.Cli".
Adding a client to the Solution explorer panel:
Right-click on SunEngine Solution -> "Add" -> "Attach Existing Folder" -> select the folder "SunEngine / Client".

### Open the npm menu:

On "package.json", right-click -> "Tools" -> "Show npm Scripts".
The client part is launched through the npm script "dev run".

### Tags:

dev

dev run

run

launch


Dmitry Oceanij

05/30/2019 13:39