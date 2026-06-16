# Infrastructure as a Service (IaaS)

## General features

### Internal Cloud Network

Our cloud platform integrates a Software-Defined Networking (SDN) solution that allows customers to design and manage virtual networks directly from the management console.  
Clients can define complex topologies, segment traffic, and configure IP addressing without interacting with physical infrastructure.

| FEATURE | DESCRIPTION |
|----------|----------|
| **Virtual Network Creation** | Create virtual bridges and dedicated network segments to isolate environments (e.g., production, testing) and ensure traffic separation. |
| **Dual-Stack IPv4/IPv6 Support** | Each network can be configured with IPv4 and IPv6 addresses, with options to set dedicated gateways and custom subnets.<br><br>• IPv4: static or DHCP configuration.<br>• IPv6: support for static addresses and DHCPv6. |
| **IP and Routing Management** | Define IP ranges, gateways, and internal routing rules between subnets through the management console, without address translation functions. |
| **Advanced Segmentation** | Support for VLAN tagging and isolated networks to ensure security and compliance.<br><br>• Configurable VLAN IDs for each bridge.<br>• Options for private and public networks. |
| **Scalability and Performance** | Architecture optimized for low latency and high throughput, with the ability to add new networks and nodes without downtime. |

*Example Scenario*

A customer can:
1.	Create a private network with IPv4 (e.g., 10.0.0.0/24) and IPv6 (e.g., fd00::/64).
2.	Connect multiple VMs and containers to the network via virtual bridges.
3.	Define internal routing rules between subnets.
4.	Add a VLAN to separate test traffic from production traffic.

Benefits:

- Self-Service: Everything managed from the console, no manual intervention.
- Flexibility: Custom configurations for each project.
- Compatibility: Full IPv4/IPv6 support.
- Integrated Security

## List of Services

The following table lists the services included in the *Infrastructure as a Service (IaaS)* category.

| FAMILY | SERVICES |
|----------|----------|
| **Compute** | • [Confidential Private IaaS](IaaS.md#pool-confidential-services)<br>• [Confidential Shared-IaaS (VMs)](#VMs)|
<figcaption>List of families and related IaaS services</figcaption>

## Compute Family

Below is the list of services belonging to the Compute family:
| SERVICE | AVAILABLE SIZES |
|----------|----------|
| [Confidential Private IaaS](#pool-confidential-services) | Pool Small (Confidential)<br>Pool Medium (Confidential)<br>Pool Large (Confidential)<br>Pool X-Large (Confidential) |
| [Confidential Shared-IaaS (VMs)](#VMs) | VM Small (Confidential)<br>VM Medium (Confidential)<br>VM Large (Confidential)<br>VM X-Large (Confidential) |

<a id="pool-confidential-services"></a>

### Confidental Private IaaS

[![Confidental Private IaaS Architecture](assets/images/extract/media/iaasprivate.png)](assets/images/extract/media/iaasprivate.png)

[![Administration of Confidental Private IaaS](assets/images/extract/media/iaas_admin.png)](assets/images/extract/media/iaas_admin.png)

#### Services Description

These services, deveoloped by Leonardo, enable the provision of Private virtual computing environments (IaaS), i.e., on a pool of physical resources, dedicated and isolated for each individual customer, based on the use of bare metal computing instances.  
Data from physical resources is encrypted and kept secure throughout all phases of use (at rest, in transit, and in use), leveraging the Confidential Computing paradigm.  
The Private IaaS (Confidential) services are based on the use of the Proxmox virtualizer, which allows the provision of IaaS services with confidential computing capabilities.  
Depending on the pool of computing resources required for each individual Organization, the most suitable service from the four available types can be selected:

| Type                   | Contained Elements                                |
| -----------------------| ------------------------------------------------- |
| Pool Small (Confidential)   | 3 Hosts (2xCPU 24 Core - 512 GB RAM - 32 TB SSD)  |
| Pool Medium (Confidential)  | 6 Hosts (2xCPU 24 Core - 512 GB RAM - 32 TB SSD)  |
| Pool Large (Confidential)   | 9 Hosts (2xCPU 24 Core - 512 GB RAM - 32 TB SSD)  |
| Pool X-Large (Confidential) | 12 Hosts (2xCPU 24 Core - 512 GB RAM - 32 TB SSD) |
<figcaption>List of elements for each private IaaS pool </figcaption>

#### Features and Advantages

Private Cloud resources are dedicated exclusively to each customer.  
The services use secure enclaves based on Trusted Execution Environments (TEEs) based on Confidential Hardware, which offer an advanced level of security for data in use, protecting it during processing.  
They support advanced encryption of data at rest, in transit, and in use.  
They use advanced remote attestation systems to verify the correctness of the TEE environment, isolating virtual machine memory from the host operating system and other malicious guests.

The services offer the following advantages:

| FEATURE | DESCRIPTION |
|----------|----------|
| **Multi-Layer Security** | Data security and confidentiality in dedicated environments through workload isolation enabled by advanced virtualization technologies.<br><br>• Dedicated firewalls<br>• Network micro-segmentation |
| **Faster Time-to-Market** | Automated provisioning and rapid resource management accelerate deployment and operational readiness. |
| **Comprehensive Control and Centralized Governance** | Centralized monitoring, auditing, and governance capabilities provide full visibility, operational control, and traceability across the environment. |
| **Business Continuity** | Built-in backup, snapshot, and High Availability (HA) features ensure service continuity in case of hardware failures and minimize operational risks for critical applications. |

<a id="VMs"></a>

### Confidential Shared-IaaS (VMs)

[![How to create a VM - Step 1](assets/images/extract/media/VM_create.png)](assets/images/extract/media/VM_create.png)

[![How to create a VM - Step 2](assets/images/extract/media/VM_create02.png)](assets/images/extract/media/VM_create02.png)

[![How to manage a VM](assets/images/extract/media/VM_view.png)](assets/images/extract/media/VM_view.png)

#### Services Description

These services, deveoloped by Leonardo, enable organizations or individuals to deploy and manage Virtual Machines (VMs) without the need to maintain their own physical servers. 
They provide users with virtualized computing resources—such as CPU, memory, storage, and networking—hosted on a managed and shared physical infrastructure.  
The services are implemented using the Proxmox virtualizer, with a customized version offering Confidential Computing capabilities. Each user operates in a logically isolated environment, sharing the underlying hardware with other tenants. Data from physical resources is encrypted and kept secure during all phases of use (at rest, in transit, and in use), leveraging the Confidential Computing paradigm.  
Depending on the resource pool required by each individual organization, the most suitable service can be selected from the four available types:

| Type        | Contained Elements |
| ---------- | ------------------ |
| VM Small (Confidential)  | 2 Vcpu 4 GB RAM    |
| VM Medium (Confidential) | 4 Vcpu 8 GB RAM    |
| VM Large (Confidential)  | 8 Vcpu 16 GB RAM   |
| VM X-Large (Confidential)| 16 Vcpu 32 GB RAM  |
<figcaption>List of elements for each VMs type </figcaption>

#### Features and Advantages

The services offer the following features:

| FEATURE | DESCRIPTION |
|----------|----------|
| **High Availability (HA)** | Automatic VM failover in the event of a node failure when High Availability (HA) is enabled, ensuring service continuity and minimizing downtime. |
| **Backups** | Scheduled full or incremental backups through integration with Proxmox Backup Server, enabling reliable data protection and recovery. |
| **Templates** | Predefined operating system images (e.g., Ubuntu, Debian, CentOS, Windows Server) for rapid and standardized virtual machine deployment. |
| **User Access** | Secure access through a web-based management interface and integrated console technologies (noVNC/SPICE). |
| **Monitoring** | Real-time monitoring of performance metrics and resource utilization across virtual machines and infrastructure components. |
| **Security and Isolation** | Tenant isolation through VLAN-based network segmentation and hypervisor-level separation mechanisms. |
| **Access Control** | Role-Based Access Control (RBAC) to manage permissions and enforce least-privilege access policies. |
| **Data Protection** | Encrypted storage backends and secure backup transfer protocols to protect data at rest and in transit. |
| **Audit Logging** | Comprehensive logging of user and system activities to support compliance, auditing, and troubleshooting requirements. |
| **Provisioning** | Fully automated provisioning and lifecycle management through APIs or the web management interface. |

The service architecture is built on a Proxmox cluster consisting of multiple physical nodes connected via a high-speed network.  
Each node contributes CPU, memory, and storage resources to a shared resource pool managed by Proxmox VE.  
The main components of the service are:

- *Hypervisor* → Proxmox VE with KVM (for full virtualization).
- *Cluster management* → centralized management via Proxmox Cluster Manager with quorum-based consistency.
- *Storage backend* → shared storage using Ceph supporting redundancy, scalability.
- *Networking* → virtual networking implemented through Linux bridges or VLAN tagging, with optional SDN integration for advanced network segmentation.
- *Management interface* → Web-based GUI and REST API for VM lifecycle operations (creation, modification, deletion, migration, snapshot, backup, restore).

The services offer the following advantages:

| FEATURE | DESCRIPTION |
|----------|----------|
| **Cost Reduction** | Eliminates upfront investments in physical hardware, hypervisor licensing, and datacenter infrastructure, reducing capital expenditure and operational complexity. |
| **Flexibility** | Compute, memory, and storage resources can be scaled up or down rapidly to meet changing business and workload requirements. |
| **Faster Time-to-Market** | Virtual environments can be provisioned quickly, making the platform ideal for testing, development, and rapid deployment of new services and applications. This significantly reduces provisioning and approval times within the organization. |
| **Capital and Resource Optimization** | Unused resources are dynamically shared across tenants, maximizing infrastructure utilization and improving capital efficiency compared to underutilized dedicated environments. |
| **Business Continuity** | Integrated backup and High Availability (HA) capabilities ensure service continuity in the event of hardware failures, reducing operational risks for business-critical applications. |