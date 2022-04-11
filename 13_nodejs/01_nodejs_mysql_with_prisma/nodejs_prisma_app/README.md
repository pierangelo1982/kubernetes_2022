# sample nodejs + mysql with prisma orm

install dependency:

`npm install`

start app:

`npm start`

N.B: for test the app locally rename env-example file in .env and set your parameters

### Prisma

`npm install prisma --save-dev`

`npm install @prisma/client --save`

`npx prisma init`

migration:

`npx prisma migrate dev --name init `


## dockerize

`docker build . -t pierangelo1982/demo-node-prisma-mysql`

test docker creating conteiner:

```
docker run --name demo-node-prisma-mysql \
    -p 3000:3000 \
    -e NODE_PORT=3000 \
    -e NODE_ADDRESS=0.0.0.0 \
    --link docker-mysql:db \
    -e DATABASE_URL="mysql://root:alnitek82@db:3306/demo" \
    -d pierangelo1982/demo-node-prisma-mysql
```
