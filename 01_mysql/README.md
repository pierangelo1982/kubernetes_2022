File:

- mysql-secret
- mysql-storage
- mysql-deployment

### deploy

`kubectl apply -f mysql-secret.yaml`

`kubectl apply -f mysql-storage.yaml`

`kubectl apply -f mysql-deployment.yaml`

Complete deployment using kustomization.yml:

`kubectl apply -k ./`

### enter in mysql

`kubectl exec --stdin --tty mysql-xxxxx -- /bin/bash`

`mysql -u root -p`

### delete

`kubectl delete deployment,svc mysql`

`kubectl delete pvc mysql-pv-claim`

`kubectl delete pv mysql-pv-volume`

`kubectl delete secret mysql-secret`

Complete delete using kustomization.yml:

`kubectl delete -k ./`
