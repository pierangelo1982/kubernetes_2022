### test busybox for testing loadbalancer

here I add a ingress for enter thought digitalocean nginx.ingress loadbalancer

### linode connection

`export KUBECONFIG=~/Scaricati/demo-kubernetes-kubeconfig.yaml`

check nodes:

` kubectl get nodes`

`kubectl get pods -A`

### helm ngninx ingress installation:

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx

