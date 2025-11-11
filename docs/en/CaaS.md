# Container as a Service (CaaS)

The following table lists the services included in the Container as a Service (CaaS) category.

| FAMILY  | LIST OF SERVICES                  |
| ------- | --------------------------------- |
| Compute | [Kubernetes (Confidential)](#kubernetes)|
<figcaption>List of families and related CaaS services</figcaption>

## Compute Family

Below is the list of services belonging to the Compute family:

- [Kubernetes (Confidential)](#kubernetes)

<a id="kubernetes"></a>

### Kubernetes (Confidential) Service

![Kubernetes (Confidential) Service](assets/images/extract/media/K8Sprivate.png)

#### Services Description

This service provides a platform for orchestrating private and secure containers, designed to manage containerized applications in highly regulated environments or with confidentiality requirements.  
It offers a secure and controlled Kubernetes environment where security is a key aspect of the solution.  
The operating system on which the solution is based is hardened to minimize the attack surface and potential vulnerabilities.  
The solution's architectural components utilize mechanisms that ensure data security, including during communication (via encryption mechanisms applied by default to communications between platform components) and for data stored within the platform itself.
The platform can be customized to adapt to the specific needs of each organization, ensuring integration with existing enterprise systems and applications.

#### Features and Advantages

Implementation requires a combination of hardware certified for Confidential Computing, a private, security-hardened Kubernetes infrastructure, and a suite of observability and governance tools to maintain complete control over the container lifecycle.

Features included:

- *Data protection* → The operating system is configured to ensure protection at all stages: data in memory, through full disk encryption and key rotation; data in transit, using secure and encrypted communication protocols; and data in use, adopting Confidential Computing practices and secure execution environments.
- *Secure enclaves* → Enforces isolation and encryption, ensuring that only authorized parties can access data.
- *Trusted execution environments (TEEs)* → Adds a secure computing environment, protecting data from external threats.
- As a managed Kubernetes solution, the customer does not have to worry about managing the infrastructure and its complexity, as the infrastructure layer is managed by Leonardo throughout the service lifecycle.

The service offers the following advantages:

- *Security and confidentiality of containerized applications* → end-to-end encryption, confidential computing for workloads, container isolation on dedicated nodes with hardware-based protection, integrated security policies, and advanced RBAC.
- *Centralized cluster control and governance*.
- *Scalability and flexibility*.
- *Integration with multicloud and legacy environments*.