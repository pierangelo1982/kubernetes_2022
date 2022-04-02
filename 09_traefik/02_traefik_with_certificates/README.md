# traefik

[https://www.cloudsavvyit.com/14069/how-to-install-kubernetes-cert-manager-and-configure-lets-encrypt/](https://www.cloudsavvyit.com/14069/how-to-install-kubernetes-cert-manager-and-configure-lets-encrypt/)

install with helm:

`helm repo add traefik https://helm.traefik.io/traefik`

`helm repo update`

`helm install traefik traefik/traefik`

exposing traefik dashboad:

`kubectl port-forward $(kubectl get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000`

### install certbot

`helm repo add jetstack https://charts.jetstack.io`

`helm repo update`

(check the version and update, currently 1.7.3)

`helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.7.2 --set installCRDs=true`

`kubectl config view --raw >~/.kube/config`

`kubectl get Issuers,ClusterIssuers,Certificates,CertificateRequests,Orders,Challenges --all-namespaces`
