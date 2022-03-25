- mysql-secret
- mysql-storage
- mysql-deployment

### deploy
kubectl apply -f mysql-secret.yaml

kubectl apply -f mysql-storage.yaml

kubectl apply -f mysql-deployment.yaml

oppure:

kubectl apply -k ./


### enter in mysql
kubectl exec --stdin --tty mysql-xxxxx -- /bin/bash



### remove
kubectl delete deployment,svc mysql

kubectl delete pvc mysql-pv-claim

kubectl delete pv mysql-pv-volume

kubectl delete secret mysql-secret

kubectl delete -k ./
