### mysql
install:

`helm install bitnami/mysql --generate-name`

get password

`helm status mysql-xxxxxxx`

user: root

save in env variable:

`MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default mysql-xxxxxxxxxxx -o jsonpath="{.data.mysql-root-password}" | base64 --decode)`

show:

`kubectl get secret --namespace default mysql-1648893314 -o jsonpath="{.data.mysql-root-password}" | base64 --decode`

connect to mysql

`kubectl run mysql-1648893314-client --rm --tty -i --restart='Never' --image  docker.io/bitnami/mysql:8.0.28-debian-10-r52 --namespace default --command -- bash`


`mysql -h mysql-xxxxxx.default.svc.cluster.local -uroot -p"$MYSQL_ROOT_PASSWORD"`