### namespaces:

`kubectl create namespace my-namespace`

`kubectl delete namespace my-namespace`

`kubectl get pod --all-namespaces`

secrets not can be shared between different namespaces....

- for connect two pods in two different namespace you must call the name-service followed by namespace:

example: name-service.namespace
