# Configuration files


## Contents of the configuration directory

Permanent settings

- `DataBaseConnection.json` - connection to the database
- `SunEngine.json` - engine settings
- `ServerInfo.json` - server information (name, version, description and others)
- `LogConfig.json` - setting up logs


## Directory `MailTemplates`

Email templates for user registration and other situations.

`layout.html` - a wrapper for all mail templates.

`email-change.html`,` private-message.html`, `register.html`,` reset-password.html` are email message templates.

Directory `Init`. Only for starting initialization of the site database.

Used only in the command - `dotnet SunEngine.dll init`:

`Init / Avatars` - user avatars

`Init / Categories` - creating and configuring categories, then on the working server the categories are configured through the admin panel.

`Init / Sections` - creating and configuring components: activity and posts.

`Init / Materials` - the creation of materials.

`Init / Menu` - creation and configuration of the site menu, only for the init command, then on the working server the menus are configured through the admin panel.

`Init / Avatars` - set user avatars when filling the database, the file name must match the user name

`SeedTemplates` - lines for filling materials in test mode.

`Init / Config.json` - initial configurationItems settings from the` Configuration` admin section.

`Init / Users.json` - creating users.

`Init / Roles.json` - creating user roles and their rights.


## Using the configuration directory

By default, the `Config` directory is used to host the configuration files.

There is no this directory in the project repository - you need to create it by copying from:
- `Config.dev.template` in case of launch for development purposes;
- `Config.server.template` if launched on the server.

Also, a non-standard configuration directory can be specified explicitly - the option `config: <AbsoluteOrRelativePath>` serves for this.

Please note that the name of the configuration directory must either be `Config` or end with` .Config`.


### Examples

`dotnet SunEngine.dll server` - start with the default directory` Config`, in this case the system will search the directory tree from the up

`dotnet SunEngine.dll server config: MySite` - start with the directory` MySite.Config` (suffix `.Config` is added automatically)

`dotnet SunEngine.dll server config: MySite.Config` - an example similar to` MySite.Config`

The `config` command works the same for all other commands:` init, migrate, seed` ..., for example:

`dotnet SunEngine.dll migrate init seed config: MySite`.

