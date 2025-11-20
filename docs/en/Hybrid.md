# Hybrid Services

The following table lists the services included in the *Hybrid* category.

| FAMILY  | LIST OF SERVICES                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| Hybrid | [Edge Location - Pool Small (Confidential)](#edge)|
<figcaption>List of families and related Hybrid services</figcaption>

## Hybrid Family

Below is the list of services belonging to the Hybrid Edge family:

- [Edge Location - Pool Small (Confidential](#edge)

<a id="edge"></a>

### Edge Location - Pool Small (Confidential)

![Edge Location - Pool Small (Confidential) Overview](assets/images/extract/media/edge.png)

#### Services Description

The Edge Location Service provides a localized computing platform delivered across distributed edge locations, designed to offer low-latency processing, high availability, and centralized management.  
Built on Proxmox Virtual Environment as the core virtualization layer and integrated with a Leonardo Secure Cloud Management Platform (SCMP) for orchestration, automation, and governance, the service enables customers to deploy, manage, and scale applications and workloads directly at the edge, close to the point of data generation or consumption.  
The edge infrastructure operates as an extension of the corporate or hybrid cloud environment, maintaining consistent operational standards, security policies, and automation capabilities.

#### Features and Advantages

The main functional capabilities of the service are:

- *Application Hosting* → execution of container-based or virtual machine–based applications. Support for real-time workloads, IoT scenarios, and local data processing. Automated provisioning of application environments via CMP orchestration.
- Multi-tenant resource management → logical segmentation of resources for tenants or business units. Quota-based allocation of CPU, memory, storage, and network resources. Role-based access and differentiated permissions.
- *Automation & orchestration* → automated provisioning of VMs, containers, and PaaS components. Standardized deployment workflows. Full lifecycle management of workloads (creation, update, decommissioning).
- *Governance & security* → integration with Identity & Access Management (IAM) systems. Enforcement of compliance and security policies. Centralized logging, audit trail capabilities, and continuous monitoring
-  *High availability & resilience* → Proxmox high-availability clustering with automated failover. Fault isolation and hardware resilience. Integrated backup and restore capabilities

The Architectural components are: 

- *Edge Compute Layer (Proxmox VE)* → KVM hypervisor and LXC container virtualization. Proxmox clusters with distributed resource management. Local or distributed storage (Ceph, ZFS, or shared storage systems). Virtual networking using bridges, VLANs, and SDN capabilities
- *Secure Cloud Management Platform (SCMP)* → Central orchestration system managing all edge locations. Self-service portal for tenants and administrators. Policy engine for governance, permissions, and compliance enforcement. Monitoring, metering, and alerting functionalities. PIs for integration with external systems (CI/CD, ITSM, ERP)
-* Networking & connectivity* → secure connectivity between edge locations and datacenters (VPN, SD-WAN, MPLS). Network segmentation via virtualization technologies. Support for public and private addressing of workloads
- *Integration with enterprise systems* → integration with corporate authentication systems (LDAP, AD, SSO). Optional integration with Kubernetes for container-native workloads. Interoperability with public cloud platforms as part of a hybrid cloud model.

The service is sized in host unit. A single unit is composed by 3 Hosts, with the following settings: 2x 24 Core CPU - 512 GB RAM - 32 TB SSD.

The service offers the following advantages:

- *Reduced latency* → processing occurs closer to the data source, improving performance for IoT, analytics, and real-time applications.
- *Operational continuity* → edge sites remain functional even in the event of connectivity loss to the central datacenter.
- *Local data compliance* → data remains within specific geographic boundaries, enabling regulatory adherence.
- *Accelerated innovation* → new services can be deployed rapidly across multiple sites using centralized orchestration.
- *Unified management* → a single platform controls all edge and cloud resources. Lower operational costs through automation of provisioning and routine maintenance.
- *Modular scalability* → the edge infrastructure can be expanded quickly with new nodes. Enhanced security through consistent policies and centralized logging.
- *Architectural flexibility* → support for VM-based, containerized, and mixed workloads.
- *Operational efficiency* → standardized processes for deployment, updates, and governance.