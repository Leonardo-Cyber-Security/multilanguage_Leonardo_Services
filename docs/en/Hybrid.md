# Hybrid Services

## General features

### Supply Chain for Storage Hardware

The supply chain for the specialized storage hardware used in the context of this service is a meticulously orchestrated ecosystem designed to ensure reliability, scalability, and compliance with stringent enterprise standards.  

The hardware components—primarily high-capacity storage appliances equipped with solid-state drives (SSD) or hybrid storage configurations—are sourced through a vetted network of global manufacturers and distributors, emphasizing compatibility, resilience, and sustained performance under demanding operational conditions.  

Raw materials and core electronic components typically originate from certified suppliers with strict quality controls and compliance certifications, encompassing ISO standards for manufacturing and environmental responsibility. These parts undergo assembly and rigorous quality assurance testing in strategically located manufacturing centers equipped with state-of-the-art fabrication and diagnostics tools to meet the exacting requirements of enterprise-grade data transfer solutions.  

The finished appliances are then integrated with proprietary firmware and security modules before being provisioned at distribution hubs. These hubs serve as staging areas where customization—such as encryption key injection, network configuration, and audit logging setup—is applied in accordance with customer-specific parameters and security policies. From there, logistics chains involve carefully coordinated transportation utilizing trusted carriers capable of maintaining chain-of-custody protocols, tamper-proof packaging, and real-time tracking until delivery to the client site. 

This layered, end‑to‑end supply chain ensures that hardware is not only performant but also secure and fully traceable throughout its lifecycle, from component sourcing to customer deployment and eventual return for data ingestion and secure sanitization.

### Software Architecture and Development

The software underpinning the service is architected and developed by a dedicated specialized team comprising systems architects, software engineers, and security experts. This team typically operates within a corporate research and development environment with a focus on distributed storage systems, secure data transfer protocols, and device management frameworks. 

System architecture is designed to be modular, supporting scalability and interoperability with diverse enterprise environments and cloud storage backends. Software modules encompass embedded device firmware, secure boot and attestation layers, transfer orchestration engines, encryption key management subsystems, and centralized portals for device tracking, logging, and audit reporting.  
Development activities are governed by agile methodologies, emphasizing iterative testing, continuous integration/continuous deployment (CI/CD) pipelines, and strict adherence to internal coding standards as well as external compliance frameworks such as SOC 2, ISO/IEC 27001, and GDPR where applicable.  

Cross-functional teams collaborate closely with supply chain, security, and operations units to ensure that software updates are rigorously validated for reliability and security before full deployment.

### Software Licensing, Transparency, and Adaptability

The software components of the service embody a balanced approach to licensing and intellectual property protection, combining proprietary elements with open-source frameworks to facilitate transparency, security scrutiny, and adaptability.

Core platform components leverage mature open-source libraries and protocols vetted by the community for security and performance, enabling rights for the client or partners to audit, adapt, and extend functionalities within defined license parameters (such as Apache 2.0, MIT, or similar permissive licenses).  

For proprietary modules—particularly those dealing with encryption, device attestation, and logistics orchestration—customers and regulatory auditors are granted access to source code under non-disclosure agreements or via escrow arrangements to meet compliance and due diligence requirements. This ensures trust in the software stack’s integrity, fosters collaborative innovation in extended use cases, and mitigates vendor lock-in risks.

### Security Patch Management Capabilities Independent of Non-EU Vendors

To address geopolitical and regulatory concerns, the service provider maintains a robust local capability for developing, testing, and applying security patches independently of non-European Union (EU) vendors.  

This strategy encompasses a dedicated European-based security engineering team integrated within the broader development organization, empowered to rapidly respond to emerging vulnerabilities and compliance directives. The team employs advanced vulnerability scanning, static and dynamic code analysis, and threat modeling tools supported by incident response program.  

Patch development follows a rigorous lifecycle: discovery, analysis, coding remediation, multi-environment testing—including integration and regression—and staged rollout guided by well-defined risk criteria and communication protocols with customers.  

This autonomous ecosystem reduces dependency on foreign-sourced software updates for critical security components, minimizes patching latency, and aligns with EU data sovereignty frameworks, reinforcing trust and operational continuity for customers with stringent data protection and audit requirements.

## List of Services

The following table lists the services included in the *Hybrid* category.

| FAMILY  | LIST OF SERVICES                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| Hybrid | [Edge Location - Pool Small (Confidential)](#edge)|
| Hybrid | [Bulk Data Transfer](#bulk)|
<figcaption>List of families and related Hybrid services</figcaption>

<a id="edge"></a>

### Edge Location - Pool Small (Confidential)

[![Edge Location - Pool Small (Confidential) Interface](assets/images/extract/media/edge.png)](assets/images/extract/media/edge.png)

#### Services Description

The Edge Location Service provides a localized computing platform delivered across distributed edge locations, designed to offer low-latency processing, high availability, and centralized management.  
Built on Proxmox Virtual Environment as the core virtualization layer and integrated with a Leonardo Secure Cloud Management Platform (SCMP) for orchestration, automation, and governance, the service enables customers to deploy, manage, and scale applications and workloads directly at the edge, close to the point of data generation or consumption.  
The edge infrastructure operates as an extension of the corporate or hybrid cloud environment, maintaining consistent operational standards, security policies, and automation capabilities.

The service is sized in host unit. A single unit is composed by 3 Hosts, with the following settings: 2x 24 Core CPU - 512 GB RAM - 32 TB SSD.

#### Features and Advantages

The main functional capabilities of the service are:

- *Application Hosting* → execution of container-based or virtual machine–based applications. Support for real-time workloads, IoT scenarios, and local data processing. Automated provisioning of application environments via CMP orchestration.
- *Multi-tenant resource management* → logical segmentation of resources for tenants or business units. Quota-based allocation of CPU, memory, storage, and network resources. Role-based access and differentiated permissions.
- *Automation & orchestration* → automated provisioning of VMs, containers, and PaaS components. Standardized deployment workflows. Full lifecycle management of workloads (creation, update, decommissioning).
- *Governance & security* → integration with Identity & Access Management (IAM) systems. Enforcement of compliance and security policies. Centralized logging, audit trail capabilities, and continuous monitoring
-  *High availability & resilience* → Proxmox high-availability clustering with automated failover. Fault isolation and hardware resilience. Integrated backup and restore capabilities.

The Architectural components are: 

- *Edge Compute Layer (Proxmox VE)* → KVM hypervisor and LXC container virtualization. Proxmox clusters with distributed resource management. Local or distributed storage (Ceph, ZFS, or shared storage systems). Virtual networking using bridges, VLANs, and SDN capabilities
- *Secure Cloud Management Platform (SCMP)* → Central orchestration system managing all edge locations. Self-service portal for tenants and administrators. Policy engine for governance, permissions, and compliance enforcement. Monitoring, metering, and alerting functionalities. PIs for integration with external systems (CI/CD, ITSM, ERP)
-* Networking & connectivity* → secure connectivity between edge locations and datacenters (VPN, SD-WAN, MPLS). Network segmentation via virtualization technologies. Support for public and private addressing of workloads
- *Integration with enterprise systems* → integration with corporate authentication systems (LDAP, AD, SSO). Optional integration with Kubernetes for container-native workloads. Interoperability with public cloud platforms as part of a hybrid cloud model.

Below are the technical and infrastructural requirements of cloud physical appliances
that have been taken into consideration for the design of the technological solution for the services:

- *Size and layout* → the data center must have sufficient space to accommodate the necessary racks, with standard sizes (42U, 45U, or 48U) and configurations that allow easy access for maintenance and component management.
- *Cabling* → an organized and optimized cabling system is essential, with cables labeled and routed to minimize interference and facilitate technical interventions.
- *Ventilation and cooling* → racks must be located in spaces with adequate ventilation and cooling systems to prevent overheating and keep electronic components at optimal operating temperatures.
- *Physical security* → rack spaces must be protected from unauthorized access with physical security systems such as locks, biometric access controls, and continuous video surveillance.
- *Power capacity* → the data center must have adequate power to support expected workloads. This includes assessing the power required for each rack and planning the total capacity required.
- *Redundant power supply* → to ensure business continuity, it is necessary to provide redundant power systems such as uninterruptible power supplies (UPS) and emergency generators that can intervene in the event of a primary power outage.
- *Power management* → implement tools and technologies to monitor and manage energy consumption, optimizing resource use and reducing operating costs.
- *Energy efficiency* → use energy-efficient equipment and infrastructure to minimize consumption and environmental impact, adhering to best practices for data center energy management.

[![Rack energy power output](assets/images/extract/media/energy.png)](assets/images/extract/media/energy.png)

[![Power and BTU of appliances](assets/images/extract/media/power.png)](assets/images/extract/media/power.png)

The service offers the following advantages:

- *Reduced latency* → processing occurs closer to the data source, improving performance for IoT, analytics, and real-time applications.
- *Operational continuity* → edge sites remain functional even in the event of connectivity loss to the central datacenter.
- *Local data compliance* → data remains within specific geographic boundaries, enabling regulatory adherence.
- *Accelerated innovation* → new services can be deployed rapidly across multiple sites using centralized orchestration.
- *Unified management* → a single platform controls all edge and cloud resources. Lower operational costs through automation of provisioning and routine maintenance.
- *Modular scalability* → the edge infrastructure can be expanded quickly with new nodes. Enhanced security through consistent policies and centralized logging.
- *Architectural flexibility* → support for VM-based, containerized, and mixed workloads.
- *Operational efficiency* → standardized processes for deployment, updates, and governance.

<a id="bulk"></a>

### Bulk Data Transfer

#### Service Description

The Bulk Data Transfer service provides a managed solution for transferring large volumes of data using specialized high-capacity storage hardware and a secure, audited delivery process.  
The service is designed as a full-lifecycle, enterprise-grade data transfer mechanism: from sourcing and provisioning storage appliances to secure transport, data ingestion, and integration with the customer’s infrastructure. It is aimed at scenarios where massive datasets need to be moved reliably and according to strict compliance and security requirements.

#### Features and Advantages

Key Features:

- *Specialized high-capacity storage appliances* → the service uses purpose-built storage hardware (SSDs or hybrid drives), selected through a vetted supply chain of certified manufacturers and distributors.
- *Secure hardware supply chain and lifecycle* → fincludes careful sourcing of raw materials, assembly under quality control, firmware & security module integration, and tamper-proof packaging and chain-of-custody during transport.
- *Flexible and modular software architecture* → the service relies on a modular software stack — including device firmware, secure-boot and attestation mechanisms, transfer orchestration engines, encryption key management, and centralized portals for device tracking, logging, and auditing.
- *Compliance-oriented licensing and transparency* → score components use open-source libraries under permissive licences (e.g. Apache 2.0, MIT) to enable auditability and adaptability; proprietary modules (encryption, attestation, logistics orchestration) are made available under NDA or escrow to satisfy compliance and due-diligence requirements.
- *Autonomous security patch management within EU* → security patches for critical components are developed, tested, and deployed by a European-based security engineering team — avoiding dependencies on non-EU vendors — to align with data sovereignty and regulatory demands.

Main Components:

- *Storage Hardware Appliances* → high-capacity storage devices (SSD/hybrid) procured via a certified global supply chain, assembled and tested before deployment.
- *Firmware & Security Modules* → each appliance is provisioned with firmware and security layers (secure-boot, attestation, encryption key injection) according to customer-specific policies.
- *Transfer Orchestration Engine + Management Portal* → a centralized system that manages data transfer workflows, tracks devices, handles logging/audit, and exposes interfaces for provisioning and status monitoring.
- *Compliance & Governance Subsystems* → licensing and audit tools, security-patching infrastructure, and governance frameworks that ensure transparency, adaptability, and regulatory compliance (e.g. GDPR, security standards). 
- *Logistics & Delivery Chain* → a controlled logistics process for transporting physical storage appliances — including tamper-proof packaging, chain-of-custody protocols, and real-time tracking until delivery at client site.

Key Advantages:

- *Enterprise-grade reliability and trustworthiness* → through a rigorously controlled supply-chain and full auditability, customers get a secure, traceable and compliant channel for massive data transfer.
- *Avoidance of vendor lock-in and maximum transparency* → using a hybrid of open-source and audited proprietary modules makes the solution adaptable, auditable, and not tied to a single closed platform vendor.
- *Regulatory & compliance readiness* → the EU-based security patch lifecycle and compliance-oriented architecture enable easier adherence to data-protection laws and industry standards.
- *Scalability and flexibility* → the modular architecture and hardware supply-chain approach allow for scaling capacity and adapting the solution to different business needs and volumes, even very large ones.
- *Reduced operational burden for clients* → clients don’t need to manage hardware sourcing, logistics,secure transport, firmware/security provisioning.