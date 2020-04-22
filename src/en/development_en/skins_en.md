# Themes

## Themes

The theme (`Skin`) is a` zip` -archive containing files:
- `styles.css` - the main theme file; the only file connected to the site;
- `info.json` - meta-information about the design theme (topic name, author, author’s contacts, version, link to the source, description);
- `preview.png` - Preview the skin in a specific format;
- `readme.md` - Information about the skin;
- `styles. [scss | sass], *. [scss | sass]` The sources of the scss or sass styles.

Image files [if necessary].

Font files [if necessary].

Underlined font indicates required files.

## Example theme source Default

Theme repository - https://github.com/sunengine/SunEngine.Skins.

To set the skin, you need to archive all the files in the directory (without the directory itself) in the `` zip '' archive and upload it using the download dialog in the admin panel.

`preview.png`

Screenshot of Demo site screen:

- resolution 1200 x 600 px
- home page of the demo site
- all site content - standard, including menu
- logged in as **Admin**.

`info.json`

```
{
"Name": "SkinName", // name of the skin (eng)
   "Author": "AuthorName", // author name
   "Contacts": [// contacts of the author, there can be any lines, links or email addresses
     "https://t.me/AuthorName",
     "skype: AuthorSkype",
     "author@email.com",
   ],
   "Version": 2.2, // Theme version
   "SourceUrl": "https://github.com/sunengine/SunEngine.Skins/tree/master/TestSkin", // Link to the topic repository
   "Description": "Description of SkinName" // Topic description
}
```


## Partial Themes

An arbitrary number of partial design themes can be installed on the site.

These themes stylize any particular site components or set of components.

For example, it may be a website logo and other branding elements.

A partial theme may contain css selectors that are needed for custom styling and site design.


A partial theme (`PartialSkins`) is a zip archive containing files:

Mandatory:

`styles.css` - the main skin file. The only file to connect to the site.

`info.json` - meta-information about the design theme (topic name, author, author’s contacts, version, link to the source, description).

...and others that are not mandatory.

The file `info.json` has the same structure, only the name field is required. The remaining fields can be omitted if this is not necessary.
