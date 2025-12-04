#  Reference Architecture

##  Kubernetes Reference Architecture

### Overview

This reference architecture describes the recommended baseline design for running containerized applications on **Leonardo Kubernetes Service (LKS)**. It provides a secure, scalable, production-ready foundation aligned with cloud best practices for networking, identity, security, observability, DevOps, and resilience.

This baseline architecture is suitable for most production workloads and is the recommended starting point for any Kubernetes deployment on Leonardo Cloud.

### Architecture Components

#### Leonardo Kubernetes Service (LKS)

LKS provides a fully managed Kubernetes control plane offering:

- High-availability master nodes
- Automatic patching and upgrades
- Secure API endpoints integrated with Leonardo Cloud IAM
- Managed certificates and control-plane hardening
- Unified lifecycle management (create, scale, upgrade, delete)

Customers interact only with the Kubernetes API; Leonardo Cloud operates and secures the control plane.

#### Node Pools

Node pools provide the compute layer and support:

- System node pool → hosts core Kubernetes components
- Multiple pool types (CPU-optimized, RAM-optimized, GPU-backed)
- Auto-healing nodes
- Manual or automatic scaling
- Managed node image lifecycle
    
### Network Architecture

#### Virtual Networks

LKS clusters are deployed into a **customer-managed Virtual Network (VNet)**. The recommended configuration includes:

- SubnetDescription → Control-plane subnet
- Restricted subnet for accessing the Kubernetes API (managed by Leonardo Cloud) → Node subnet(s)
- Hosts system and user node pools
- Ingress subnet
- Load-balanced entrypoints (public or private) → Private services subnet
- Internal services such as databases, caches, message brokers

Pod CIDR and service CIDR must not overlap with customer VNets.

#### Pod and Service Networking

Leonardo Cloud LKS uses a cloud-integrated CNI supporting:

- Stable pod IP allocation
- Network policy enforcement
- Native routing within the VNet
- Egress governance & logging

Service CIDRs provide stable virtual IPs for Kubernetes services.

#### Ingress & Load Balancing

Customers can expose applications via:

- *Layer-7 ingress* with managed controllers 
- *Private internal load balancers*
- Public load balancers*, optionally fronted by a WAF
    
Ingress provides TLS termination, routing rules, and isolation between environments.

### Identity & Access Control

#### Leonardo Cloud IAM Integration

LKS authentication is fully integrated with **Leonardo Cloud Identity and Access Management (IAM)**:

- SSO integration with enterprise identity providers
- Multifactor authentication
- Workload identities and service principals
- Role-based API access to cluster endpoints

Authorization uses Kubernetes RBAC and supports fine-grained controls.

#### Recommended RBAC Model

Typical baseline roles:
- *Cluster Admins* → full administrative access
- *Namespace Operators* → developer teams isolated by namespace
- *Service Accounts* → least-privilege identities for workloads

Quota policies and network policies help enforce multi-tenancy boundaries.

### Security Best Practices

#### Control Plane Security

- Fully isolated, managed, and hardened control plane
- Encrypted API traffic
- Optional **private-only cluster endpoints**
- Automated certificate rotation
    
#### Node and Runtime Security

- Leonardo Cloud hardened node OS image
- Automatic security and kernel patching
- Enforcement of Kubernetes Pod Security Standards
- Optional OPA/Gatekeeper policies
- Encrypted secrets using KMS integration
    
#### Network Security

- Built-in Kubernetes Network Policies
- Per-namespace ingress/egress control
- Integration with Leonardo Cloud Firewall
- Optional WAF for HTTP(S) ingress
    
#### Image Security

- Scanning in Leonardo Cloud Container Registry
- Support for image signing & attestation
- Policy-based enforcement for trusted registries
    
### Resilience & Business Continuity

#### High Availability

- Multi-zone support for node pools (when available)
- Multiple replicas for control-plane components
- Pod anti-affinity & topology spread constraints
- Recommended use of Pod Disruption Budgets (PDBs)
    
#### Backups

Customers should:

- Use **Velero** for application-level backups
- Use Leonardo Cloud Storage snapshots for persistent volumes
- Perform regular recovery validation
    
#### Disaster Recovery

For mission-critical applications:

- Deploy across multiple clusters or regions
- Store manifests in Git for reproducible redeployment
- Use replicated or multi-zone storage classes
- Enable cross-region backup replication
    
### Observability

#### Native Observability Integration

Leonardo Cloud LKS integrates with the **Leonardo Cloud Monitor** service, supporting:

- Node and pod metrics
- Container and system logs
- Alerts & dashboards
- Optional distributed tracing
    
Observability agents are automatically deployed in the system pool.

#### Customer Observability Options

You may deploy:

- Prometheus + Grafana
- Loki / Elasticsearch for logs
- Jaeger or Tempo for distributed tracing
    
All can ship logs and metrics to Leonardo Cloud Monitor.

### DevOps & GitOps

#### Continuous Deployment

LKS supports:

- GitOps (Argo CD, Flux CD)
- CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins, Azure DevOps, etc.)
- Helm + OCI registry integration
- Kustomize manifests
    
#### Recommended Practices

- Store manifests in Git (declarative infrastructure)
-  Use GitOps for automated reconciliation
- Enforce policy-as-code in CI/CD pipelines
- Separate environments (dev, test, prod) with isolated namespaces and networks
    
### Storage Architecture

#### Storage Classes

Leonardo Cloud provides multiple storage classes:

- *General Purpose SSD*
- *High-Performance NVMe*
- *Replicated Storage* for high availability
    
All support:

- Dynamic provisioning
- Persistent Volume (PV) expansion
- Snapshots and cloning