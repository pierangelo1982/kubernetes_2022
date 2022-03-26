# postgres - pgadmin kubernetes

`kubectl apply -k ./`

`kubectl delete -k ./`

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

