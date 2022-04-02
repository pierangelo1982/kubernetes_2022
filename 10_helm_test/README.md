# some experiment and basic command with 10_helm

Initialize a Helm Chart Repository

`helm repo add bitnami https://charts.bitnami.com/bitnami`

update repo

`helm repo update`

if not work, connet to your kubernetes with:

`kubectl config view --raw >~/.kube/config`

example:

`helm install bitnami/mysql --generate-name`

### doc

[01 - mysql](./mysql.md)

[02 - postgresql](./postgresql.md)
