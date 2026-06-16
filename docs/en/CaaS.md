# Container as a Service (CaaS)

The following table lists the services included in the *Container as a Service (CaaS)* category.

| FAMILY | SERVICES |
|----------|----------|
| **Compute** | • [Kubernetes](#kubernetes)<br>• [Kubernetes Confidential Computing](#kubernetes-conf)|
<figcaption>List of families and related CaaS services</figcaption>

## Compute Family

Below is the list of services belonging to the Compute family:

- [Kubernetes](#kubernetes)
- [Kubernetes Confidential Computing](#kubernetes-conf)

<a id="kubernetes"></a>

### Kubernetes Service

[![Kubernetes Service overview](assets/images/extract/media/K8S.png)](assets/images/extract/media/K8S.png)

This service provides an automated Kubernetes platform for container orchestration, designed to manage containerized applications in enterprise environments requiring high levels of reliability, scalability, and security.  
The platform ensures automation of node scaling, monitoring, and high availability management, without requiring any operational activities on the customer's part.  
The cluster capacity can be increased or decreased through automated scaling mechanisms based on predefined node block increments, in line with the proposed SKU sizing.  
This approach ensures architectural consistency, predictable performance, and alignment with the design constraints of the underlying infrastructure.

| Type               | Contained Elements                   |
| -------------------| -------------------------------------|
| Kubernetes cluster | 15 node workers with 8 GB RAM for each unit |
<figcaption>Contained elements for the Kubernetes Service</figcaption>

#### Features and Advantages

The implementation is based on a private and secure Kubernetes infrastructure, integrated with advanced observability, automation, and governance tools to ensure complete control over the entire container lifecycle.

Features included:

| FEATURE | DESCRIPTION |
|----------|----------|
| **Automated container orchestration** | Automated deployment, management, scaling, and lifecycle operations of containerized applications through Kubernetes orchestration. |
| **High Availability** | Architecture designed to provide resilience and service continuity, ensuring workloads remain available even in the event of infrastructure failures. |
| **Auto-scaling** | Dynamic allocation and adjustment of compute resources based on workload demands and application requirements, optimizing performance and resource utilization. |
| **Simplified management** | Fully managed Kubernetes service where Leonardo operates and maintains the underlying infrastructure, reducing operational complexity and allowing customers to focus on application development and business objectives. |

The service includes a comprehensive set of security tools and services designed to ensure the secure operation of containers running on the managed Kubernetes platform.  
It implements a multilayered infrastructure security model that safeguards the entire container lifecycle—from image creation to runtime execution—ensuring platform integrity, operational compliance, and consistent protection of containerized workloads.

| SECURITY DOMAIN | DESCRIPTION |
|----------|----------|
| **Platform security** | • Real-time security monitoring and vulnerability scanning through StackRox, providing continuous assessment of container images and runtime workloads. Automated detection of CVEs, policy violations, and security threats ensures a secure, compliant, and continuously monitored environment.<br><br>• Host-level malware and virus detection through Bitdefender EDR solutions to protect container nodes.<br><br>• Kernel-level hardening and enforcement of mandatory security profiles to isolate workloads and implement a security-by-design approach. |
| **Access security** | • Identity-based access controls through Role-Based Access Control (RBAC).<br><br>• Integration with centralized Identity and Access Management (IAM) systems. |
| **Compliance, monitoring & auditing** | • Centralized logging and forwarding of security-related events to the SOC team's SIEM platform for event correlation, alerting, auditing, and continuous security monitoring. |

The service offers the following advantages:

| FEATURE | DESCRIPTION |
|----------|----------|
| **Secure management of containerized applications** | Integrated security policies, continuous monitoring, advanced Role-Based Access Control (RBAC), and multilayer protection mechanisms for containerized workloads. |
| **Centralized cluster control and governance** | Centralized management, governance, and policy enforcement across Kubernetes clusters, ensuring operational consistency and compliance. |
| **Scalability and flexibility** | Ability to dynamically scale resources and workloads according to business and application requirements while maintaining operational efficiency. |
| **Reduced operational complexity** | Fully managed service delivery by Leonardo, including platform operations, maintenance, updates, and lifecycle management, allowing customers to focus on application development. |
| **Integration with multicloud and legacy environments** | Seamless integration with multicloud architectures and existing legacy systems, enabling hybrid deployment models and workload portability. |

<a id="kubernetes-conf"></a>

### Kubernetes Confidential Computing Service

[![Kubernetes Confidential Computing service overview](assets/images/extract/media/K8S.png)](assets/images/extract/media/K8S.png)

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
| FEATURE | DESCRIPTION |
|----------|----------|
| **Data protection** | The operating system is configured to protect data throughout its lifecycle: data at rest through full disk encryption, data in transit through secure and encrypted communication protocols, and data in use through Confidential Computing technologies and secure execution environments. |
| **Secure enclaves** | Hardware-based isolation and encryption mechanisms ensure that sensitive data can only be accessed by authorized parties, reducing exposure to unauthorized access and insider threats. |
| **Trusted Execution Environments (TEEs)** | Dedicated secure execution environments protect applications and data from external threats, even in scenarios where the underlying infrastructure could be compromised. |
| **Simplified management** | Fully managed Kubernetes service where Leonardo operates and maintains the infrastructure layer throughout the service lifecycle, reducing operational complexity and allowing customers to focus on their applications and business workloads. |

The service includes a comprehensive set of security tools and services designed to ensure the secure usage of containers running on the Managed Service for Containers.  
It implements a multilayered infrastructure security model that safeguards the entire container lifecycle—from image creation to runtime execution—ensuring platform integrity, operational compliance, and consistent protection of containerized workloads. 

| SECURITY DOMAIN | DESCRIPTION |
|----------|----------|
| **Platform Security** | • Real-time security monitoring and vulnerability scanning through StackRox, providing continuous assessment of container images and runtime workloads. Automated detection of CVEs, policy violations, and security threats ensures a secure, compliant, and continuously monitored environment.<br><br>• Host-level malware and virus detection for container nodes through Endpoint Detection and Response (EDR) solutions.<br><br>• Kernel-level hardening and enforcement of mandatory security profiles to isolate workloads and implement a security-by-design approach. |
| **Access Security** | • Identity-based access controls through Role-Based Access Control (RBAC).<br><br>• Integration with centralized Identity and Access Management (IAM) systems. |
| **Compliance, Monitoring & Auditing** | • Centralized logging and forwarding of security-related events to the SOC team's SIEM platform, enabling event correlation, alerting, auditing, and continuous security monitoring. |

The service offers the following advantages:

| FEATURE | DESCRIPTION |
|----------|----------|
| **Security and confidentiality** | End-to-end encryption, Confidential Computing technologies for workloads, container isolation on dedicated nodes with hardware-based protection, integrated security policies, and advanced Role-Based Access Control (RBAC) mechanisms ensure a secure and trusted execution environment. |
| **Centralized cluster control and governance** | Centralized management, governance, and policy enforcement across Kubernetes clusters, ensuring operational consistency, visibility, and compliance. |
| **Scalability and flexibility** | Dynamic scaling of resources and workloads according to business and application requirements, enabling efficient resource utilization and operational agility. |
| **Integration with multicloud and legacy environments** | Seamless integration with multicloud architectures and existing legacy systems, supporting hybrid deployment models and workload portability. |