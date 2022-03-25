File:

- mysql-secret
- mysql-storage
- mysql-deployment

# MYSQL

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

# phpmyadmin

### deploy

`kubectl apply -f phpmyadmin-deployment.yaml`

`kubectl apply -f ingress.yml`

### delete

`kubectl delete deployment,svc phpmyadmin`

`kubectl delete ingress ingress.yml`

# KUSTOMIZATION

Complete deployment using kustomization.yml:

`kubectl apply -k ./`

Complete delete using kustomization.yml:

`kubectl delete -k ./`


### On minikube find address here:

show ip: `minikube service list`
