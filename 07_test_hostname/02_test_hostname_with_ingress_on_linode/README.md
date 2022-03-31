# example of ingress with host domain on linode

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

