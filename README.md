Области хранения данных

-   БД на json server
-   BFF
-   редас стор

Сущности приложения

-   пользователь: БД (список)б BFF(current session), redux store (rendering)
-   роль пользователя: БД (список ролей), BFF(user session), redux store(отображение на клиенте)
-   сталья: БД (список)б стор(дл\ отображения)
-   комментарий : БД (список), стор(для отображения)

Таблицы БД

-   пользователи - users: id, login, password, registed_at, role_id
-   роли - roles: id, name
-   posts: id, title,image_url, content, published_at
-   comments: id, author_id, post_id, content

Схема состояний на BFF:

-   current user session: login, password, role_id

Схема для redux store (на клиенте):

-   user: id, login, role_id
-   posts: array post: id, title, imageUr, publishedAt, commentsCount
-   post: id, title, imageUr, content, comments:(id author, publishedAt) publishedAt,
    -users array user:id, login, registeredAt , role
