# postgres - pgadmin kubernetes

`kubectl apply -k ./`

`kubectl delete -k ./`

### NB: HOST in pgadmin-configmap.yaml has the name of the service postgres, in this case postgres

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: pgadmin-config
data:
  servers.json: |
    {
        "Servers": {
          "1": {
            "Name": "PostgreSQL DB",
            "Group": "Servers",
            "Port": 5432,
            "Username": "postgres",
            "Host": "postgres.domain.com",
            "SSLMode": "prefer",
            "MaintenanceDB": "postgres"
          }
        }
    }
```
## postgres

deploy:

`kubectl apply -f postgres-secret.yaml`

`kubectl apply -f postgres-storage.yaml`

`kubectl apply -f postgres-deployment.yaml`

delete:

`kubectl delete deployment,svc postgres`

`kubectl delete pvc postgres-pv-claim`

`kubectl delete pv postgres-pv-volume`

`kubectl delete secret postgres-secret`


enter to operate in the pod:

`kubectl exec --stdin --tty postgres-xxxxx -- /bin/bash`


## pgadmin4

deploy:

`kubectl apply -f pgadmin-secret.yaml`

`kubectl apply -f pgadmin-storage.yaml`

`kubectl apply -f pgadmin-configmap.yaml`

`kubectl apply -f pgadmin-deployment.yaml`


