# Note
Here respect the main setup n root 03_wordpress_mysql_phpmyadmin I chaged the service of phpmyadmin from nodeport to loadbalancer-

I add phpmyadmin-service.yaml and removed phpmyadmin-ingress.yaml

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

`kubectl apply -f phpmyadmin-service.yml`

### delete

`kubectl delete deployment,svc phpmyadmin`

`kubectl delete ingress ingress.yml`

# wordpress
`kubectl apply -f wordpress-storage.yaml`

`kubectl apply -f wordpress-deployment.yaml`

`kubectl delete deployment wordpress`

`kubectl delete service wordpress`

`kubectl delete pvc wp-pv-claim`

# KUSTOMIZATION

Complete deployment using kustomization.yml:

`kubectl apply -k ./`

Complete delete using kustomization.yml:

`kubectl delete -k ./`


### On minikube find address here:

show ip: `minikube service list`
