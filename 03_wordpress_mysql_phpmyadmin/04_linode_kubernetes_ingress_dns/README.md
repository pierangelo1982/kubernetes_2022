# kubernetes linode - ingress and domain

# example of ingress with host domain on linode

this code is the replica of this article:

(https://www.linode.com/docs/guides/how-to-deploy-nginx-ingress-on-linode-kubernetes-engine/)[https://www.linode.com/docs/guides/how-to-deploy-nginx-ingress-on-linode-kubernetes-engine/]

connect yout kubectl to linode cluster

### linode connection

download the confoguration yaml file from linode:
and set the env varialble:

`export KUBECONFIG=~/Scaricati/demo-kubernetes-kubeconfig.yaml`

### ingress nginx

install with helm:

`helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx`

`helm repo update`

`helm install ingress-nginx ingress-nginx/ingress-nginx`

get ip:

`kubectl --namespace default get services -o wide -w ingress-nginx-controller`

and point your dns on the ip:

### launch configuration:

`kubectl apply -k ./`

### delete configuration

`kubectl delete -k ./`

### ****************************************************************************** ###
general-ingress.yaml manage the domain ingress: wordpress.p82.it phpmyadmin.p82.it

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
