# traefik

install with helm:

`helm repo add traefik https://helm.traefik.io/traefik`

`helm repo update`

`helm install traefik traefik/traefik`

exposing traefik dashboad:

`kubectl port-forward $(kubectl get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000`