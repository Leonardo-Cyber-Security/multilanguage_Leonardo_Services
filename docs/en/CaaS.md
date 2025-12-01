# Container as a Service (CaaS)

The following table lists the services included in the *Container as a Service (CaaS)* category.

| FAMILY  | LIST OF SERVICES                  |
| ------- | --------------------------------- |
| Compute | [Kubernetes Confidential Computing](#kubernetes)|
<figcaption>List of families and related CaaS services</figcaption>

## Compute Family

Below is the list of services belonging to the Compute family:

- [Kubernetes Confidential Computing](#kubernetes)

<a id="kubernetes"></a>

### Kubernetes Confidential Computing Service

![Kubernetes Confidential Computing Overview](assets/images/extract/media/K8S.png)

#### Service Description

This service, deveoloped by Leonardo, provides an automated Kubernetes platform for orchestrating private and secure containers, designed to manage containerized applications in highly regulated environments or with confidentiality requirements.  
The platform ensures automation of node scaling, monitoring, and high availability management, without requiring any operational activities on the customer's part.  
The cluster capacity can be increased or decreased through automated scaling mechanisms based on predefined node block increments, in line with the proposed SKU sizing.  
This approach ensures architectural consistency, predictable performance, and alignment with the design constraints of the underlying infrastructure.

| Type               | Contained Elements                   |
| -------------------| -------------------------------------|
| Kubernetes cluster | 15 node workers with 8 GB RAM for each unit |
<figcaption>Contained Elements for the Kubernetes Confidential Computing Service</figcaption>

#### Features and Advantages

Implementation requires a combination of hardware certified for Confidential Computing, a private, security-hardened Kubernetes infrastructure, and a suite of observability and governance tools to maintain complete control over the container lifecycle.

Features included:

- *Data protection* → The operating system is configured to ensure protection at all stages: data in memory, through full disk encryption; data in transit, using secure and encrypted communication protocols; and data in use, adopting Confidential Computing practices and secure execution environments.
- *Secure enclaves* → Enforces isolation and encryption, ensuring that only authorized parties can access data.
- *Trusted execution environments (TEEs)* → Adds a secure computing environment, protecting data from external threats.
- As a managed Kubernetes solution, the customer does not have to worry about managing the infrastructure and its complexity, as the infrastructure layer is managed by Leonardo throughout the service lifecycle.

The service includes a comprehensive set of security tools and services designed to ensure the secure usage of containers running on the Managed Service for Containers.  
It implements a multilayered infrastructure security model that safeguards the entire container lifecycle—from image creation to runtime execution—ensuring platform integrity, operational compliance, and consistent protection of containerized workloads. 

Platform security:

- Real-time security monitoring and vulnerability scanning are implemented through the use of StackRox, providing continuous assessment of container images and runtime workloads. The platform enables automated detection of CVEs, policy violations, and security threats ensuring a secure, compliant, and monitored environment without operational intervention.
- Host-level malware and virus detection to secure container nodes with EDR provided by Bitdefender
- Kernel-level hardening and enforcement of mandatory security profiles to isolate workloads (by design)

Access Security:

- Identity-based access controls (RBAC) and integration with centralized identity management systems.

Compliance, Monitoring, and Auditing:

- Centralized logging and security-related events are forwarded directly to the SOC team SIEM, enabling correlation, alerting, and continuous security monitoring.

The service offers the following advantages:

- *Security and confidentiality of containerized applications* → end-to-end encryption, confidential computing for workloads, container isolation on dedicated nodes with hardware-based protection, integrated security policies, and advanced RBAC.
- *Centralized cluster control and governance*.
- *Scalability and flexibility*.
- *Integration with multicloud and legacy environments*.