# Arguments to start SunEngine.dll

## Options for commandlines

`server`        - run server API using kestrel  
`config:<path>` - path to the configuration directory, `'Config'` by default. The suffix `'.Config'` may be omitted  
`migrate`       - creation or updates of all database tables and their structure  
`init`          - fill user role and category tables with data from `'Config'`  
`test-db-con`   - Checking database connectivity  
`version`       - show SunEngine version  
`nologo`        - do not show logo at startup  
`help`          - show help page


##  Data Fill Commandlines for Tests

`seed:<category>:<materials>:<comments>` - seed category and all subcategories with materials and comments
- `<category>`  - category name
- `<materials>` - materials count, default if skipped
- `<comments>`  - comments count, default if skipped

example
- `seed:SomeCategory:20:10`
                        
- `append-cat-name` - add category name to material titles on `'seed'`


## Exaples

`dotnet SunEngine.dll server`
`dotnet SunEngine.dll server config:local.MySite`
`dotnet SunEngine.dll migrate init seed`
`dotnet SunEngine.dll migrate init seed config:local.MySite`
`dotnet SunEngine.dll seed:Forum:10:10`
