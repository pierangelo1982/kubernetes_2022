# install openwhisk with Helm

[https://github.com/apache/openwhisk-deploy-kube#initial-setup](https://github.com/apache/openwhisk-deploy-kube#initial-setup)
install with helm:

create a file named: mycluster.yaml

you can find some example here: [https://github.com/apache/openwhisk-deploy-kube/tree/master/deploy](https://github.com/apache/openwhisk-deploy-kube/tree/master/deploy)

change localhost with ip your machine
```
whisk:
  ingress:
    type: NodePort
    apiHostName: localhost
    apiHostPort: 31001
    useInternally: false

nginx:
  httpsNodePort: 31001

# disable affinity
affinity:
  enabled: false
toleration:
  enabled: false
invoker:
  options: "-Dwhisk.kubernetes.user-pod-node-affinity.enabled=false"
  # must use KCF as kind uses containerd as its container runtime
  containerFactory:
    impl: "kubernetes"
```

`helm repo add openwhisk https://openwhisk.apache.org/charts`

`helm repo update`

`helm install owdev openwhisk/openwhisk -n openwhisk --create-namespace -f mycluster.yaml`

after the installation you get this message and important info for conenct to openwhisk:

```
NAME: owdev
LAST DEPLOYED: Wed Apr  6 19:40:39 2022
NAMESPACE: openwhisk
STATUS: deployed
REVISION: 1
NOTES:
Apache OpenWhisk
Copyright 2016-2020 The Apache Software Foundation

This product includes software developed at
The Apache Software Foundation (http://www.apache.org/).

To configure your wsk cli to connect to it, set the apihost property
using the command below:

  $ wsk property set --apihost localhost:31001

Your release is named owdev.

To learn more about the release, try:

  $ helm status owdev
  $ helm get owdev

Once the 'owdev-install-packages' Pod is in the Completed state, your OpenWhisk deployment is ready to be used.

Once the deployment is ready, you can verify it using:

  $ helm test owdev --cleanup
```

uninstall

`helm uninstall owdev -n openwhisk`