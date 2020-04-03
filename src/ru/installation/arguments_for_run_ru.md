# Аргументы запуска SunEngine.dll

## Команды

```
server                  запусить серверный API используя kestrel
config:<path>           путь к директории конфигурации, 'Config' по умолчанию. Суффикс '.Config' может быть опущен.
migrate                 создание или обновлений всех таблиц базы данных и их структуры
init                    заполнить таблицы пользователей, ролей и категории данными из 'Config'
test-db-con             проверка работоспособности подключения к базе данных                    
version                 показать версию SunEngine
nologo                  не показывать логотип при старте
help                    показать все команды 
```


## Команды заполения денными для тестов 

```
seed:<CategoryName>:<mCount>:<cCount>      
                        seed category and all subcategories with materials and comments
                        mCount - materials count, default if skipped
                        cCount - comments count, default if skipped
                        example - seed:SomeCategory:20:10
                        
append-cat-name         add category name to material titles on 'seed'
```


## Примеры

```
dotnet SunEngine.dll server
dotnet SunEngine.dll server config:local.MySite
dotnet SunEngine.dll migrate init seed
dotnet SunEngine.dll migrate init seed config:local.MySite
dotnet SunEngine.dll seed:Forum:10:10
```
