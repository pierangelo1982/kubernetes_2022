### kubernetes on AWS and


### eksctl
download and install EKS (eksctl):
 
[https://github.com/weaveworks/eksctl](https://github.com/weaveworks/eksctl)

test:

`eksctl -h`

### create a cluster:

`eksctl create cluster`

or better:
```
eksctl create cluster \
    --name test-cluster \
    --version 1.21.5 \
    --region eu-central-1 \
    --nodegroup-name linux-nodes \
    --node-type t2.micro \
    --nodes 2
```

### delete a cluster

`eksctl delete cluster --name  name-of-the-cluster`

eksctl delete cluster --name hilarious-mushroom-1648324759