# kubernetes microk8s - ingress and domain

### install certbot

`helm repo add jetstack https://charts.jetstack.io`

`helm repo update`

(check the version and update, currently 1.7.3)

`helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.7.2 --set installCRDs=true`

`kubectl config view --raw >~/.kube/config`

`kubectl get Issuers,ClusterIssuers,Certificates,CertificateRequests,Orders,Challenges --all-namespaces`

##
N.B: add nginx-ingress addons in kubernetes ditalocean

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
