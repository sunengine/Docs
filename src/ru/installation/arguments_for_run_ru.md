### Аргументы запуска SunEngine.dll

## Commands:

    server                      host server api with kestrel
    config:<path>               path to config directory, if none 'Config' is default, '.Config' suffix at the end of the path can be skipped               
    migrate                     make initial database table structure and migrations in existing database
    init                        initialize users, roles and categories tables from config directory
    test-db-con                 check is data base connection is working                     
    version                     print SunEngine version
    help                        show this help   
    
## Seed test data commands:    

    seed:<CategoryName>:<mCount>:<cCount>      
                                seed category and all subcategories with materials and comments
                                mCount - materials count, default if skipped
                                cCount - comments count, default if skipped
                                example - seed:SomeCategory:20:10
                                
    append-cat-name             add category name to material titles on 'seed'

## Examples:

  dotnet SunEngine.dll server
  dotnet SunEngine.dll server config:local.MySite
  dotnet SunEngine.dll migrate init seed
  dotnet SunEngine.dll migrate init seed config:local.MySite
  dotnet SunEngine.dll seed:Forum:10:10

## Метки:

cli

sunengine.dll