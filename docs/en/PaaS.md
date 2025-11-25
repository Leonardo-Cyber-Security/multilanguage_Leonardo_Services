# Platform as a Service (PaaS)

The following table lists the services included in the *Platform as a Service (PaaS)* category.

| FAMILY                               | LIST OF SERVICES                                            |
| ------------------------------------ | ----------------------------------------------------------- |
| Compute                              | [Functions As A Service (FAAS)](#faas)                                |                                   
| Security                             | [Identity & Access Management (IAM) Service](#IAM)|
| Security                             | [Key Vault as a Service - Standard](#key-vault)                           |
| Security                             | [Endpoint Protection](#endpoint)                                           |
| Security                             | [Advanced security and protection service for files and data](#file-data)                                           |
| Security                             | [Automated Penetration Testing Services](#PT)                                           |
| Security                             | [Mail security & ransomware protection service](#mail)                                           |
| Security                             | [DSPM (Data Security Posture Management)](#posture)                                           |
| Security                             | [NGFW platform](#ngfw)                                           |
| Security                             | [PAM (Privileged Access Management)](#PAM)                                           |
| Security                             | [Perimeter Security Intelligence](#PSI)                                           |
| Security                             | [Intrusion Prevention System (IPS)](#IPS)                                           |
| Middleware                           | [PaaS API Management](#API)                                         |
| Middleware                           | [Jboss as a Service](#Jboss)                                          |
| Middleware                           | [Red Hat Runtime Subscription](#RT-runtime)                                          |
| Middleware                           | [Spring boot as a Service](#spring-boot)                                    |
| Middleware                           | [PaaS Business Process as a Service](#BPM)                          |
| Middleware                           | [PaaS CMS as a Service](#CMS)                                       |
| Middleware                           | [Semantic Knowledge Search - 1 worker](#semantic-search)                            |
|  Data Protection                          | [Backup - PLATFORM](#backup)                            |
| Infra & Ops Platform                 | [Multicloud Management Platform](#SCMP)                              |
| Infra & Ops Platform                 | [Control Room as a Service](#control-room)                                   |
| Infra & Ops Platform                 | [IT infrastructure Service Operations (Logging & Monitoring)](#ITops) |
| Infra & Ops Platform                 | [PaaS Ticket Management Service](#ITSM)                              |
| Infra & Ops Platform                 | [PaaS Operations Management](#operations)                              |
| DevSecOps                            | [Configuration Manager](#config)                                       |
| DevSecOps                            | [Test Automation](#test)                                             |
| DevSecOps                            | [Quality Code Analysis](#quality)                                       |
| DevSecOps                            | [DevSecOps As A Service](#devsecops)                                      |
| DevSecOps                            | [Qualizer DevSecOps](#qualizer)                                          |
| Big Data                             | [Data Lake - 1TB](#datalake)                                             |
| Big Data                             | [Data Lakehouse](#datalakehouse)                                              |
| Big Data                             | [Business Intelligence Platform](#BI)                              |
| Big Data                             | [PaaS ETL Batch/Real time Processing - 1 Worker](#processing)                       |
| Big Data                             | [Event Message - 1 Worker](#event-message)                                    |
| Big Data                             | [Data Governance](#governance)                                             |
| Artificial Intelligence (AI)         | [Speech to Text](#speech-to-text)                                              |
| Artificial Intelligence (AI)         | [PaaS - AI Audio & Video Analytics](#AI-audio-video)                           |
| Artificial Intelligence (AI)         | [OCR](#AI-OCR)                                                          |
| Artificial Intelligence (AI)         | [Text Analytics/NLP    ](#AI-text)                                              |
| Artificial Intelligence (AI)         | [Translation](#AI-translation)                                                 |
| Artificial Intelligence (AI)         | [AI Search - RAG](#AI-search)                                             |
| Artificial Intelligence (AI)         | [PaaS - AI Platform](#AI-platform)                                          |
| Artificial Intelligence (AI)         | [AI SLM/LLM](#AI-SLM-LLM)                                                  |
| Artificial Intelligence (AI)         | [AI workflow](#AI-workflow)                                                 |
| Artificial Intelligence (AI)         | [AI Vector DB](#AI-vectorDB)                                                   |
| Virtual Desktop Infrastructure (VDI) | [VDI](#VDI)                                                         |
| Virtual Desktop Infrastructure (VDI) | [VDI with GPU support](#VDI-GPU)                                        |
| Collaboration                        | [Instant Messaging](#messaging)                                           |
| Database                             | [PaaS SQL - PostgreSQL](#postgres)                                         |
| Database                             | [PaaS SQL - MariaDB](#mariaDB)                                             |
| Database                             | [PaaS SQL - MS SQL Server EE](#sqlserver)                                                |
| Database                             | [PaaS SQL - MS SQL Server EE (BYOL)](#sqlserver-byol)                                                  |
| Database                             | [PaaS GraphDB](#graphDB)                                               |
| Database                             | [PaaS NoSQL - MongoDB](#mongoDB)                                               |
| Database                             | [PaaS In Memory - Redis](#redis)                                               |
| Networking                           | [PaaS CDN (Content Delivery Network)](#CDN)                         |
| Networking                           | [PaaS Domain Name System (DNS)](#DNS)                               |
| Networking                           | [Single public IP](#IP)                         |
| Networking                           | [L7 Load Balancer (regional)](#L7)                                                    |
| Networking                           | [Cloud interconnect Gold SW (10 Gbps max throughput)](#gold)                                                    |
| Storage                              | [Block Storage (1000 GB) - High Density](#block-storage)                      |
| Storage                              | [Archive Storage (1000 GB)](#archive-storage)                      |                    
<figcaption>List of families and related PaaS services</figcaption>

## Compute Family

Below is the list of services belonging to the Compute family:

- [Functions As a Service (FAAS)](#faas)

<a id="faas"></a>

### Functions as a Service

![Functions As a Service (FAAS) Interface](assets/images/extract/media/FaaS.png)

#### Services Description

FaaS (Function as a Service) is an event-driven system design model running on stateless containers, where developers create, deploy, and execute small, independent functions to perform specific tasks without worrying about the underlying infrastructure.  
Adopting FaaS allows for standardization of application development and execution by centralizing cross-functional capabilities such as orchestration, automatic provisioning, monitoring, integrated service management, and event-driven flow control. 

It offers tools to:

- centrally manage serverless functions;
- automate component lifecycle management;
- enable multi-cloud and hybrid cloud portability;
- support innovation with GPU runtimes and dedicated AI tools.   

The FaaS platform provisions and scales the underlying resources based on demand. It is ideal for highly dynamic scenarios with variable workloads and integrates seamlessly with microservices and event-based architectures.

#### Features and Advantages

The service goes beyond simply providing an execution engine; it also offers a complete ecosystem, consisting of:

- Serverless execution → stateless functions and event-driven workflows, scalable and available in various programming languages.
- Portability and independence → can run on any Kubernetes cluster, across multiple environments, without lock-in constraints.
- Security and compliance → data protection and centralized access management.
- The solution enables organizations to adopt a modern and flexible model, reducing operational complexity and benefiting from a standardized and easily accessible service.

The service is delivered through Apache OpenServerless, an open-source, cloud-agnostic serverless platform based on Apache OpenWhisk as a Function-as-a-Service (FaaS) engine.

The service is offered with the following metrics: *100 VCPUs*.

The service offers the following advantages:

- *Reduced operating costs* → you only pay for the actual use of features.
- *Flexibility and scalability* → resources adapt to demand.
- *Operational efficiency* → eliminating the need to directly manage servers, patches, and updates.
- *High availability* → built-in redundancy and fault tolerance, ensuring high availability of features even in the event of hardware failures or other interruptions.
- *Accelerated time-to-market* → rapid release of new features without worrying about the infrastructure.
- *Agile development* → focus on code and business logic, not server management.
- *Continuous innovation* → rapid experimentation with new, low-cost services.
Competitive advantage in cost and speed compared to traditional hosting models.

## Security Family

Below is the list of services belonging to the Security family:

- [Identity & Access Management Service](#IAM)
- [Key Vault as a Service - Standard](#key-vault)
- [End point protection](#endpoint)
- [Advanced security and protection service for files and data](#file-data)
- [Automated Penetration Testing Services](#PT)
- [Mail security & ransomware protection service](#mail)
- [DSPM (Data Security Posture Management)](#posture)
- [NGFW platform](#ngfw)
- [PAM (Privileged Access Management)](#PAM)
- [Perimeter Security Intelligence](#PSI)
- [Intrusion Prevention System (IPS)](#IPS)

<a id="IAM"></a>

### Identity & Access Management (IAM) Service

![Identity & Access Management Service (IAM) Overview](assets/images/extract/media/IAM.png)

#### Services Description

The Service provides an essential level of security for identity and access management, ensuring basic protection against unauthorized access.  
It manages single sign-on access to guarantee access to all protected resources with a single authentication. It supports standard OIDC/OAUTH and SAML protocols for easy integration with applications and products.  
It enables first-level authentication with username/password and second-level authentication with multi-factor authentication based on Time-based One-Time Password (TOTP) protocols.  
It manages access authorization to system-protected resources only for users with rights to use them according to the Role-based Access Control (RBAC) and Attribute-based Access Control (ABAC) paradigms. Integration with external user repositories (LDAP or Active Directory) is also available.  
It manages the user lifecycle and related authorizations via the console.

#### Features and Advantages

The main features and functionalities of the service are:

- *Identity Management*
    - User Management → creation, modification, and deletion of users; management of user profiles (name, email, custom attributes, roles, etc.); import/export of users from external directories (LDAP, Active Directory).

    - Identity Federation → integration with external providers via LDAP or Active Directory; two-way or one-way synchronization of users and roles.
    - Account Management UI → self-service portal for users to update profiles and passwords, manage devices and active sessions, and view permissions.

- *Access Management*
    - Single Sign-On (SSO) / Single Logout (SLO).
    - Multi-Factor Authentication (MFA).
    - Delegated Authentication (Identity Brokering).
    - Role-Based Authorization (RBAC) and policies.

- *Protocol and Integration*
    - Support for standard protocols, such as OpenID Connect (OIDC), OAuth 2.0, and SAML 2.0.
    - Official adapters for Java, Spring Boot, WildFly, Node.js, and other applications.
    - Ability to integrate  with API Gateways, microservices, and web frontends.

- *Security and Management*
    - Session and Token Management.
    - Password Policies.
    - Events and Auditing.
    - Scalability and High Availability → distributed architecture, with support for clustering and replication.

- *Extensibility*
    - REST API for automated user, role, and client management.
    - SPI (Service Provider Interfaces) for extending authentication, validation, or provisioning capabilities.
    - Ability to implement custom authenticators or connect to external systems.
    
The service is offered with the following unit metric: *100 users*.

The service offers the following advantages:

- *Improved overall security* → Centralizing authentication reduces the risk of vulnerabilities distributed across applications.
- *Reduced maintenance and development costs* → A single, centralized platform reduces the complexity and duplication of authentication code across applications.
- *Agility and Scalability* → Increased speed of onboarding new applications thanks to the use of standard protocols (OIDC, SAML, OAuth2).
- *Maintainability and Standardization* → Use of standard protocols (OIDC, SAML, OAuth2) that eliminate proprietary implementations and facilitate interoperability.

<a id="key-vault"></a>

### Key Vault as a Service - Standard

![Key Vault as a service Overview](assets/images/extract/media/KeyVault.png)

#### Services Description

The service, based on Hashicorp Vault technology, provides a secure cloud repository (Vault) for storing and managing credentials and passwords used by cloud applications without having to manually install and manage dedicated IaaS machines. 
The service consists of a software platform that enables centralized and automated management of encryption keys, secrets, and certificates, with access controlled by identity-based authentication and authorization methods.  
It also allows organizations to significantly simplify key lifecycle management, ensuring centralized control while leveraging the native cryptographic capabilities of KMS providers.

#### Features and Advantages

The main features and functionalities of the service are:

- *Secure Secret Storage* → Key/value secrets are stored in Key Vault As A Service in encrypted form, ensuring their integrity in the event of unauthorized access to raw storage.
- *Dynamic Secrets* → Key Vault As A Service can generate secrets on demand to allow users and/or applications to access different systems.
- *Data Encryption* → Key Vault As A Service can encrypt and decrypt workloads running on the PA infrastructure without archiving them, managing the entire lifecycle of the cryptographic material used in the encryption process.
- *Leasing and Renewal* → Key Vault As A Service associates a lease with each key or secret managed, which will result in its automatic revocation upon expiration and which can be renewed by clients through the integrated APIs provided by the platform.
- *Revocation* → Key Vault As A Service has integrated support for revoking keys and secrets, which can be revoked individually or in bulk (e.g., all keys of a specific user), for example in case of compromise.

The service offers high availability and geographic replication.  
The main workflow of Key Vault as a Service consists of four phases:

- *Authentication* → The process by which a client provides information that Key Vault as a Service uses to determine the authenticity of the requester. Once the client is authenticated, the system generates a token that is associated with the relevant policy.
- *Validation* → Validation occurs through trusted third-party sources, such as Active Directory, LDAP, and Okta.
- *Authorization* → The client is then associated with the Key Vault as a Service security policy, which consists of a set of rules that define which API endpoints a user, machine, or application is allowed or denied access to with its token.
- *Access* → Key Vault as a Service then grants access to keys and encryption features, secrets, and certificates.

The service is offered with the following unit metric: *50 clients*.

The service offers the following advantages:

- *Risk reduction* → thanks to automatic key rotation and secret lifecycle management, it increases the protection of sensitive data, simplifies regulatory compliance and reduces the risk of human errors.
- *Operational efficiency and cost reduction* → less internal management, automation and standardization, scalability without hardware investment.
- *Optimized time-to-market* → developers focus on code, not key management; also enables secure applications to be delivered faster, improving agility and innovation.
- *Improved trust and reputation* → audit and traceability to demonstrate secure secret management to stakeholders or customers.
- *Cryptographic and standardized compliance* → can be configured to use FIPS (Federal Information Processing Standards) validated cryptographic modules, ensuring that all encryption, signing, HMAC and key derivation operations comply with the standards.

<a id="endpoint"></a>

### Endpoint Protection Service

![Endpoint Protection Service Overview](assets/images/extract/media/endpoint.png)

#### Services Description

The Endpoint protection service offers comprehensive protection for endpoint devices against malware, ransomware, and other threats, including antivirus, firewall, and application control capabilities.  
The service aims to provide the customer with an EPP platform for multi-layered protection of their endpoint devices, with capabilities to prevent, detect, and respond to cyber threats targeting those devices, including antivirus, anti-malware, personal firewall, web protection, application control, and patch management.  
The service provides a cloud-delivered, scalable, and centrally managed solution designed to protect customer endpoint devices from a broad spectrum of cyber threats.  
The service is delivered as a managed PaaS solution, offering continuous protection and simplified administration for organizations seeking robust endpoint security without the overhead of managing on-premise security infrastructures.

#### Features and Advantages

The Endpoint Protection service offers a full suite of integrated security functions aimed at ensuring endpoint resilience and threat visibility across the organization:

- *Antivirus and anti-Malware protection* → continuous real-time scanning, heuristic analysis, and signature-based detection to identify and block known and emerging threats.
- *Behavioral and threat analysis* → advanced behavioral monitoring and threat intelligence integration to detect and mitigate unknown or zero-day attacks.
- Personal firewall → endpoint-level firewall providing granular control over inbound and outbound network connections, preventing unauthorized access and lateral movement.
- Web protection and URL filtering → protects users from malicious or fraudulent websites by evaluating URLs and blocking access to unsafe domains.
- *Application control* → allows administrators to define and enforce policies for approved and restricted applications, reducing the risk of untrusted software execution
- Patch and vulnerability management → automates the identification, prioritization, and deployment of patches and updates for operating systems and third-party applications.
- *Centralized management console* → offers unified visibility and control over all protected endpoints, enabling configuration management, alert handling, policy enforcement, and reporting from a single interface.
- *Incident Detection and Response (EDR Integration)* → provides integration capabilities with Endpoint Detection and Response tools to enhance investigation and automated remediation processes.
- *Reporting and compliance monitoring* → delivers customizable reports and dashboards to support compliance with organizational and regulatory security standards.

The main components of the service are:

- *Endpoint Agent* → a lightweight client installed on each endpoint device that performs local threat detection, policy enforcement, and communication with the management server.
*Management and control console* → the central administrative interface, hosted within the PaaS environment, responsible for policy management, configuration, event correlation, and reporting.
- *Threat intelligence service* → continuously updated databases and analytics engines that provide real-time intelligence on emerging threats, indicators of compromise (IoCs), and reputation data.
- *Policy management module* → defines and distributes security configurations and operational rules across endpoint agents, ensuring uniform protection and compliance.
- *Update and Patch Repository* → centralized repository for antivirus signatures, security updates, and software patches, ensuring endpoints are continuously updated with the latest protection mechanisms.
*Event correlation and logging module* → collects and analyzes security events from all endpoints, correlating data to detect anomalies and trigger automated responses when threats are identified.
*Integration and API layer* → enables interoperability with other PSN security services (such as SIEM, SOC, or IAM systems) for advanced monitoring, alerting, and orchestration.

The service is offered with the following unit metric: *100 endpoints*.

The service offers the following advantages:

- *Comprehensive, multi-Layered protection* → combines antivirus, anti-malware, firewall, web protection, and application control for complete endpoint security coverage.
- *Centralized management and visibility* → a unified management console provides real-time visibility across all endpoints, simplifying administration and reducing operational complexity.
- *Continuous updates and threat intelligence* → the service is continuously updated with the latest threat intelligence feeds, ensuring protection against emerging and zero-day threats.
- *Automated patch and vulnerability management* → streamlines the detection and remediation of system vulnerabilities, maintaining secure and compliant endpoint configurations.
- *Advanced detection and Rrsponse capabilities* → integrates with EDR (Endpoint Detection and Response) systems for enhanced detection, investigation, and automated threat remediation.
- *High availability and resilience* → built on a redundant and fault-tolerant cloud infrastructure to ensure uninterrupted protection and service continuity.
- *Rapid incident response and containment* → provides automated isolation and remediation of compromised endpoints, minimizing attack spread and impact.
- *Integration with security ecosystem* → supports API-based integration with SIEM, SOC, and IAM systems for centralized event correlation and coordinated response.
- *Policy standardization across devices* → ensures consistent security policies and enforcement across heterogeneous endpoint environments (Windows, macOS, Linux, mobile).
- *Detailed reporting and analytics* → offers customizable dashboards and reports for compliance, performance monitoring, and trend analysis.

<a id="file-data"></a>

### Advanced security and protection service for files and data

![Advanced security and protection service for files and data Overview](assets/images/extract/media/advanced.png)

#### Services Description

The service offers comprehensive protection against all types of threats, including encryption, content filtering, and AI-based threat detection.  
The service aims to provide organizations with a platform for advanced file and data security and protection.  
In PaaS mode, the service enables the confidentiality, integrity, and availability of their sensitive information through a combination of security technologies and practices designed to protect data, both at rest and in transit, using advanced encryption algorithms or secure protocols, and preventing unauthorized access.  
The service also provides data classifications and security policies, aligned with customer needs and industry regulations, and uses integrated tools for monitoring and threat detection.

#### Features and Advantages

The service provides a comprehensive set of security functionalities designed to ensure end-to-end data protection and governance:

- *Data classification and discovery* → automatically identifies, tags, and categorizes sensitive data based on predefined or customizable policies (e.g., personal data, financial records, intellectual property). Supports data discovery across cloud storage, endpoints, and file repositories.
- *Encryption and key management* → provides strong encryption mechanisms for data at rest and in transit, using industry standards (e.g., AES-256, TLS 1.3). Includes centralized key management with role-based access controls and key rotation policies
- *Data Loss Prevention (DLP)* → monitors, detects, and blocks unauthorized data transfers or exfiltration attempts across endpoints, cloud storage, and collaboration tools Supports policy-based enforcement to prevent data leaks through email, file sharing, or removable media.
- *File Integrity Monitoring (FIM)* → continuously monitors critical files and directories for unauthorized changes, deletions, or tampering. Generates alerts and audit logs for compliance and forensic analysis.
- *Access control and rights management* → enables fine-grained access control based on user roles, device compliance, and contextual attributes (e.g., location, time, application). Supports encryption-based digital rights management (DRM) for document and file access control.
- *Secure file sharing and collaboration* → allows users to securely share files within and outside the organization using encrypted channels and temporary access tokens. Provides audit trails and expiration policies for shared content.
- *Data backup and recovery* → ensures data availability through automated and encrypted backup processes, supporting rapid recovery in case of accidental loss or compromise.
- *Threat Detection and Content Scanning* → uses AI-based threat intelligence and sandboxing to detect malicious content embedded in files or data streams.
Integrates with antivirus and anti-malware engines for real-time scanning.
- *Compliance and audit support* → provides tools for auditing, logging, and reporting aligned with regulatory frameworks such as GDPR, ISO 27001, and NIST.Generates detailed reports for compliance validation and incident response documentation.

The main components of the service are:

- *Data protection engine* → core component responsible for encryption, decryption, classification, and DLP policy enforcement. Handles both structured and unstructured data across multiple repositories.
- *Policy management and orchestration module* → centralized interface for defining, distributing, and enforcing data protection policies across endpoints, cloud storage, and applications.Provides rule-based automation for classification, access, and retention policies.
- *Key Management System (KMS)* → manages cryptographic keys used for data encryption and decryption. Ensures secure key lifecycle management, including generation, rotation, and revocation.
- *File integrity and monitoring service* → continuously monitors file system changes and logs integrity violations for security analysis and incident response.
- *Access and identity integration layer* → integrates with Identity and Access Management (IAM) or federated authentication systems (e.g., SAML, OAuth, OpenID Connect) for user validation and access control.
- *Threat detection and analytics engine* → uses behavioral analysis, machine learning, and sandbox environments to detect anomalous file activities and advanced threats. Correlates events and alerts through integration with Security Information and Event Management (SIEM) systems.
- *Storage and repository connectors* → provides APIs and connectors to integrate with on-premise and cloud-based file systems (e.g., SharePoint, OneDrive, AWS S3, Azure Blob Storage). Ensures consistent protection across hybrid and multi-cloud environments.
- *Audit and compliance dashboard* → centralized reporting and visualization layer offering real-time insights, audit trails, and compliance metrics. Supports customizable dashboards for administrators and compliance officers.
- *Backup and recovery module* → manages encrypted backups, replication, and restoration of critical data with integrity verification mechanisms.

The service is offered with the following unit metric: *Data quantity (GB/day)*.

The service offers the following advantages:

- *Regulatory compliance and data governance *→ ensures alignment with major data protection regulations (GDPR, ISO 27001, NIS2) through built-in auditing, encryption, and access control mechanisms.
- *Reduced risk of data breaches* → proactively mitigates risks of data exposure, loss, or theft by applying multi-layered protection and real-time threat detection.
- *Operational cost reduction* → delivered as a fully managed PaaS, the service removes the need for dedicated on-premise infrastructure and specialized security management teams.
- *Scalability and flexibility* → the cloud-native architecture allows the service to scale seamlessly with the customer’s data volume and storage requirements.
- *Enhanced trust and reputation* → protecting sensitive data strengthens customer and stakeholder confidence, reducing reputational and financial impacts from potential data incidents.
- *Faster compliance reporting and auditing* → automated policy enforcement and centralized dashboards simplify audit preparation and reduce compliance management overhead.
- *End-to-End data protection* → combines classification, encryption, DLP, and integrity monitoring to secure data across its entire lifecycle—creation, storage, sharing, and archiving.
- *Centralized policy and key management* → provides unified control over security policies and cryptographic keys, reducing administrative complexity and ensuring consistent enforcement.
- *Continuous threat detection* → uses AI-driven analytics, sandboxing, and behavior-based detection to identify and neutralize advanced threats targeting data repositories.
- *Seamless integration with existing systems* → supports API-based integration with enterprise IAM, SIEM, SOC, and data storage platforms to enhance visibility and coordination across the security ecosystem.
- *Granular access control and rights management* → implements contextual and role-based access policies to protect sensitive files from unauthorized internal or external access.
- *Secure collaboration enablement* → enables safe file sharing within and beyond the organization while maintaining encryption and auditing of all transactions.
- *Automated patch, update, and policy distribution* → Keeps the protection layer continuously updated with the latest policies, threat definitions, and encryption standards.
- *Comprehensive Logging and Auditability* → offers detailed, immutable logs of all data and file activities, supporting forensic analysis and compliance verification.
- *High availability and fault tolerance* → built on redundant cloud infrastructure to ensure resilience, minimal downtime, and reliable service performance.

<a id="PT"></a>

### Automated Penetration Testing Services

![Automated Penetration Testing Services Overview](assets/images/extract/media/PT.png)

#### Services Description

Automated Penetration Testing services enable the use of automated penetration tests to identify and remediate vulnerabilities in applications and networks, improving the organization's security posture.  
The service aims to provide customers with a platform for delivering automated penetration tests within the configured perimeter, enabling customers to assess the security of their networks, applications, and IT systems through automated penetration tests.  
These services use advanced tools to simulate cyber attacks, identify unique identities, and provide detailed reports on the security weaknesses found, along with recommendations for mitigating risks.

#### Features and Advantages

The main features and functionalities of the service are:

- *Scope definition and test profiles* → predefined test templates (network, web app, API, container, cloud infra, IaC) and fully customizable profiles. Scoped scans with allow/deny lists, IP ranges, application endpoints, credentialed vs. non-credentialed options. Safe-test mode and full-exploit mode distinction (customer controls allowed impact). 
- *Automated reconnaissance* → asset discovery, service/version fingerprinting, open port and service enumeration, subdomain and API surface mapping. Passive and active discovery options to balance coverage vs. impact.
- *Vulnerability detection* → multi-engine detection combining signature-based checks, heuristic/behavioral rules, and proved vulnerability checks. SAST/DAST integration for application source and runtime analysis. Cloud configuration and IaC scanning (e.g., misconfigurations, overly permissive IAM).
- *Safe exploitation & Proof-of-Concept (PoC)* → controlled exploit attempts to validate vulnerability presence where permitted. Non-destructive proof evidence (headers, returned payloads, metadata) and optional sandboxed exploit attempts for confirmation. Automatic rollback and containment to prevent service disruption.
- *Credentialed / authenticated testing* → support for authenticated scans using supplied credentials, OAuth tokens, or ephemeral test accounts to validate business-logic and privilege escalation paths.
- *Attack path & chain analysis* → automated correlation of findings into end-to-end attack chains (e.g., pivoting from a low-severity host to privileged access). Visualization of attack paths and required steps for compromise.
- *Risk scoring & prioritization* → risk scoring combining CVSS, exploitability, business context, asset criticality and threat intelligence. Prioritized remediation lists with targeted recommendations.
- *Continuous / scheduled / on-Demand testing* → flexible scheduling: continuous crawling, daily/weekly/full-cycle scans, pre-release/on-demand scans and CI/CD triggered tests.
- *Regression & Re-test Automation* → automatic re-testing of remediated findings, regression checks after patching or code changes, and delta reporting.
- *Reporting & evidence* → executive summaries, technical findings, remediation playbooks, timelines, and immutable evidence bundles for each validated finding. Exportable formats: PDF, JSON, SARIF (for dev pipelines), and ticket payloads for ITSM.
- *DevSecOps Integration*s → native connectors and APIs for CI/CD systems, ticketing (Jira, ServiceNow), code repositories (Git), container registries, and build pipelines. Pre-commit / pre-deploy hooks and automatic fail/pass gating based on policy.
- *Compliance mapping* → mapping of findings to compliance frameworks (e.g., OWASP Top 10, PCI DSS, NIST, ISO 27001) and automated compliance reports.
- *False positive management & triage* → feedback loop for marking false positives, evidence review workflows, and machine learning to reduce noise over time.
- *Multi-Tenant Management and RBAC* → tenant isolation, role-based access controls, scoped admin views, and least-privilege access for testers and operators.
- *APIs & Webhooks* → full REST APIs and webhooks for automation, event streaming and integration with orchestration systems.
- *Safety, governance & legal controls* → consent and authorization workflows, safe hours scheduling, blast radius controls, throttling, and regulatory/legal guardrails for intrusive tests.

The main components of the service are:

- *Portal / management console* → Web UI for onboarding, scope definition, scheduling, visualization, report generation and policy configuration. Multi-tenant dashboard with role-based views (security team, application owners, auditors).
- *Orchestration & scheduler* → central orchestration engine that schedules jobs, allocates scanner resources, enforces safe-test rules, and manages stateful test workflows (recon → exploit → validation → reporting).
- *Scan engine pool* → a horizontally scalable pool of scanning workers (stateless scanner instances) that execute specific test modules: network scanners, web crawlers, API fuzzers, container/IaC scanners, cloud config scanners. Worker pools can be regionally distributed and scaled based on load and isolation requirements.
- *Exploit Sandbox & Safe Execution Environment* → isolated sandbox environment (containerized or VM-based) used to run controlled exploit attempts and malware samples safely without risking production services. Automatic rollback and containment mechanisms.
- *Asset & discovery repository* → a canonical asset inventory storing discovered hosts, endpoints, services, and application metadata used to maintain scope and historical comparison.
- *Knowledge Base & vulnerability library* → continuously updated repository of signatures, exploitation techniques, CVE mappings, PoC scripts, and mitigation guidance; may include external threat intel feeds.
- *Analytics & correlation engine* → correlates raw scan results into consolidated findings, attack chains, false-positive reductions, risk scoring and trend analysis using ML/heuristics.
- *Findings Database & evidence store* → secure, immutable storage for findings, raw evidence (logs, request/response captures, screenshots), and historical scan artifacts. Encryption-at-rest and access auditing for all stored evidence.
- *API gateway & integration layer* → REST APIs, SDKs and webhooks for integration with CI/CD, ITSM, SIEM, SOAR and other toolchains. Rate limiting, authentication and permissioning for automated workflows.
- *Reporting & compliance module* → report generation engine that produces executive and technical reports, compliance mappings, remediation playbooks and re-test summaries.
- *Identity, Access & Key Management* → IAM integration (SAML, OAuth, OIDC) for user authentication and single sign-on. KMS for managing encryption keys used for evidence and credentials storage.
- *Audit logging & monitoring* → central audit log capturing all user actions, job executions and administrative changes; integrates with SIEM for real-time monitoring and alerts.
- *Tenant Isolation & Resource Governance* → logical separation of tenant data and scan resources, quota enforcement, billing metrics and metering.
- *Policy & safety engine* → central ruleset enforcing legal constraints, safe-hours, impact thresholds, throttling and auto-pause on anomalous behavior.
- *Storage & Backup* → durable object storage for artifacts and backups; retention and purge policies configurable per tenant and per compliance requirements.

The service is offered with the following unit metric: *500 Targets (IP/URL)*.

The service offers the following advantages:

- *Continuous security validation* → enables ongoing assessment of the organization’s security posture rather than relying solely on periodic, manual penetration tests. This supports a proactive rather than reactive security strategy.
-*Reduced costs and resource optimization* → lowers operational costs by automating repetitive and time-consuming manual testing tasks, reducing dependency on external penetration testing teams.
- *Faster time-to-remediation* → automated detection and prioritized reporting allow organizations to identify and fix vulnerabilities faster, minimizing exposure windows.
Improved compliance and audit readiness → provides continuous documentation, evidence, and compliance mapping (e.g., ISO 27001, NIS2, PCI-DSS, OWASP Top 10), simplifying audits and compliance reporting.
- *Risk reduction and business continuity* → identifies exploitable vulnerabilities before attackers do, reducing the likelihood of breaches and service disruptions.
- *Scalability and flexibility* → the cloud-based PaaS architecture allows organizations to scale testing activities across multiple environments—applications, networks, and cloud workloads—without increasing infrastructure complexity.
- *Consistent and repeatable testing* → ensures uniform methodologies and consistent results across different environments and timeframes, reducing human error and variation.
- *Faster product release cycles* → integration with CI/CD pipelines enables security testing to be embedded in DevOps workflows, supporting faster, more secure software releases.
- *Predictable cost model* → subscription-based pricing provides transparency and predictability compared to traditional per-engagement penetration testing models.
- *Enhanced organizational reputation and trust* → demonstrates commitment to security best practices, strengthening trust among customers, partners, and regulators.
- *Comprehensive, automated coverage* → covers multiple layers — network, application, API, container, and cloud — providing holistic visibility of vulnerabilities across complex hybrid environments.
- *Advanced Vulnerability Detection and Exploitation Validation* → combines multiple testing engines (signature-based, behavioral, AI-driven) to identify, validate, and prioritize vulnerabilities based on exploitability and risk.
- *Safe, Controlled Testing Environment* → built-in sandboxing and safety mechanisms ensure exploit attempts are isolated and non-disruptive to production systems.
Orchestrated and Scalable Architecture → modular microservices and distributed scanner nodes support elastic scaling, parallel test execution, and high availability.
- *Risk-Based Prioritization and Contextual Analysis* → correlates vulnerabilities with business context, CVSS scores, and asset criticality to generate actionable, prioritized remediation plans.
- *Integration with DevSecOps and IT ecosystems* → provides APIs and native integrations with CI/CD, SIEM, SOAR, and ITSM tools, enabling seamless inclusion of automated testing into existing operational workflows.
- *Automated re-testing and verification* → automatically re-tests vulnerabilities after remediation, confirming fix effectiveness and preventing regression issues.
- *Centralized management and reporting* → unified management console with dashboards for test scheduling, result tracking, compliance summaries, and historical trend analysis.
- *Continuous hreat Intelligence updates* → integrates updated CVE databases, exploit repositories, and threat intelligence feeds to ensure detection of the latest vulnerabilities.
- *Comprehensive audit trails and evidence storage* → maintains immutable logs, scan evidence, and report archives for compliance, forensics, and governance requirements.
Multi-Tenancy and Role-Based Access Control (RBAC) → securely supports multiple customers or departments with strict data segregation and fine-grained access permissions.

<a id="mail"></a>

### Mail security & ransomware protection Service

![Mail security & ransomware protection Service Overview](assets/images/extract/media/mail.png)

#### Services Description

The Mail Security & Ransomware Protection service offers advanced email protection against phishing, malware, and ransomware, using advanced analysis techniques and artificial intelligence to block threats before they reach end users.  
The service aims to provide the customer with a mail security & ransomware protection platform to protect email communications from cyber threats such as phishing, malware, ransomware, and other targeted attacks.  
The service must be integrated with the customer's email system and will implement filters to block spam, phishing, and emails containing malware or ransomware, as well as monitoring, email backup, rapid recovery, and reporting on scan results.

#### Features and Advantages

The Mail Security & Ransomware Protection PaaS provides a comprehensive suite of features that address the entire e-mail threat lifecycle — prevention, detection, response, and recovery.

- *Inbound & outbound filtering* → multi-layered scanning for inbound and outbound e-mail traffic. Detects and blocks spam, phishing, malware, ransomware, and spoofed messages before they reach the mailbox. Ensures outbound e-mail compliance by scanning for sensitive data or potential data leaks.
- *Anti-phishing & impersonation defense* → detects spear-phishing and business e-mail compromise (BEC) attempts using AI-based identity and content analysis. Validates sender authenticity through SPF, DKIM, and DMARC enforcement. Identifies display-name spoofing, look-alike domains, and suspicious sender behaviors.
- *Ransomware & malware protection* → advanced sandboxing and machine learning detect and quarantine attachments or URLs containing malicious payloads. Signature-less behavioral detection identifies new ransomware strains and polymorphic threats. URL rewriting and time-of-click protection prevent access to malicious links even after delivery.
- *Spam & graymail filtering* → adaptive filtering based on user behavior and reputation scoring. Automatically categorizes marketing and bulk messages to reduce inbox clutter.
*Data Loss Prevention (DLP)* → monitors outbound e-mails and attachments for sensitive content (PII, financial data, intellectual property). Enforces encryption or blocking policies when confidential data is detected.
- *E-mail encryption* → end-to-end encryption of messages and attachments using S/MIME or TLS 1.3. Policy-based encryption to protect sensitive communications and ensure confidentiality and compliance.
- *Attachment and URL sandboxing* → executes attachments and embedded URLs in isolated virtual sandboxes to detect zero-day exploits and malicious scripts.
- *Threat intelligence integration* → continuous updates from global threat intelligence feeds and internal telemetry. Correlates indicators of compromise (IoCs) and emerging attack patterns to block new threats proactively.
- *User awareness and training integration* → optional integration with phishing simulation and training modules to increase user resilience. Automated user feedback loops for reporting suspicious e-mails.
- *E-mail continuity and archiving* → provides temporary failover e-mail access in case of service outage. Long-term encrypted e-mail archiving with indexing and eDiscovery capabilities.
- *Incident response and quarantine management* → real-time monitoring and centralized quarantine for suspicious or blocked messages. Administrator tools for message release, investigation, and remediation.
- *Reporting and Analytics* → dashboards for threat trends, blocked attacks, user behavior, and policy violations. Exportable reports for compliance, audit, and management review.
- *API and SIEM/SOAR integration* → REST APIs and webhooks for integration with SOC platforms, SIEM systems, and SOAR workflows. Event streaming for threat correlation and centralized monitoring.

The main components of the service are:

- *E-mail security gateway* → core engine that manages inbound and outbound mail flow. Performs message routing, scanning, and enforcement of anti-spam, anti-malware, and DLP policies. Supports both SMTP relay and API-based integration with e-mail providers (e.g., Microsoft 365, Google Workspace).
- *Threat detection engine* → multi-layer detection system combining static analysis, dynamic sandboxing, heuristics, and machine learning models. Analyzes message headers, attachments, URLs, and behavioral patterns for anomalies.
- *Sandboxing and detonation cluster* → isolated virtual environments for executing suspicious attachments and URLs to observe malicious behaviors safely. Supports multiple OS and application profiles for realistic threat emulation.
- *Threat intelligence and reputation database* → continuously updated repository of known malicious IPs, URLs, domains, and file hashes. Aggregates external threat feeds and internal telemetry for adaptive protection.
- *Policy and compliance engine* → centralized configuration module that defines and enforces security, encryption, and DLP rules. Supports policy inheritance, exception handling, and multi-tenant configuration management.
- *Encryption and Key Management Service (KMS)* → manages cryptographic keys for message and attachment encryption. Integrates with hardware security modules (HSMs) for secure key storage.
- *Machine learning & analytics engine* → continuously refines detection accuracy using feedback from quarantines, false positives, and threat outcomes. Performs pattern recognition and anomaly detection across large volumes of e-mail metadata.
- *Management and administration console* → Web-based dashboard for administrators to monitor e-mail flow, review quarantined items, and generate reports. Role-based access control (RBAC) for security and compliance officers, IT admins, and auditors.
- *Logging, monitoring, and audit subsystem* → captures all system and user events for traceability and compliance. Integrates with external SIEM for real-time alerting and correlation.
- *API and integration layer* → provides RESTful APIs and connectors for integration with ticketing systems, SIEM/SOAR platforms, and incident response tools.
- *High availability and load balancer cluster* → ensures redundancy and failover for all e-mail filtering and delivery operations. Supports geo-redundant architecture for resilience and disaster recovery.
- *Storage and archiving repository* → secure, encrypted storage for quarantined e-mails, archived messages, logs, and reports. Complies with data retention and privacy requirements (e.g., GDPR, ISO 27001).
- *IAM and Access Management Integration* → supports SAML, OAuth, and OpenID Connect for single sign-on and centralized authentication. Enforces multi-factor authentication for administrative access.

The service is offered with the following unit metric: *100 mailboxes*.

The service offers the following advantages:

- *Reduced risk of business disruption* → prevents e-mail-based ransomware and phishing attacks that could lead to system downtime, data loss, and financial or reputational damage.
- *Regulatory compliance and data protection* → ensures compliance with major data protection and cybersecurity frameworks (GDPR, ISO 27001, NIS2) through encryption, auditing, and DLP capabilities.
- *Operational cost reduction* → delivered as a managed PaaS, eliminating the need for on-premise infrastructure, maintenance, and manual signature updates, while providing predictable subscription-based costs.
- *Enhanced employee productivity* → reduces the volume of spam and malicious messages reaching users, allowing them to focus on legitimate communications without disruptions.
- *Strengthened customer and partner trust* → protects outgoing communications and ensures authenticity and confidentiality, enhancing the organization’s professional image and credibility.
- *Business continuity and e-mail resilience* → built-in continuity features ensure uninterrupted e-mail access even during attacks or service outages, maintaining business operations without downtime.
- *Scalable and flexible service delivery* → the cloud-native architecture scales automatically with e-mail traffic and user growth, adapting to both SMB and enterprise environments.
- *Accelerated security maturity* → enables organizations to adopt enterprise-grade e-mail protection rapidly, without requiring internal expertise or lengthy deployment cycles.
- *Multi-Layered e-mail protection* → integrates anti-spam, anti-malware, sandboxing, encryption, and DLP technologies for complete e-mail security coverage.
- *AI-powered threat detection* → utilizes artificial intelligence and behavioral analytics to detect sophisticated phishing and ransomware campaigns, including zero-day threats.
- *Advanced sandboxing and time-of-click protection* → isolates suspicious attachments and URLs to prevent execution of malicious code, even after message delivery.
- *Continuous Threat Intelligence Updates* → leverages global intelligence networks for real-time updates on emerging threats, ensuring immediate response to new ransomware variants.
- *Centralized Policy Management* → a unified console allows administrators to configure and enforce organization-wide e-mail security policies, encryption rules, and compliance settings.
- *Comprehensive logging and auditability* → provides detailed audit trails of all messages, policies, and administrative actions to support compliance and forensic analysis.
- *Seamless integration with existing infrastructure* → compatible with major e-mail systems and integrates with SIEM, SOAR, and IAM solutions.
- *Secure and encrypted communication* → supports S/MIME, TLS, and policy-based encryption to protect e-mails in transit and at rest, ensuring confidentiality and integrity.
- *Automated incident response and quarantine management* → real-time monitoring and automated quarantining minimize manual intervention, while administrators can review, release, or delete messages from a centralized dashboard.
- *High availability and redundancy* → deployed on resilient cloud infrastructure with geo-redundant architecture to guarantee uptime, fault tolerance, and disaster recovery capabilities.
- *User Awareness Integration* → optional phishing simulation and user training modules strengthen human defenses and reduce the risk of social engineering attacks.
- *Granular Role-Based Access Control (RBAC)* → ensures secure management operations by defining user roles for administrators, auditors, and compliance officers.

<a id="posture"></a>

### DSPM (Data Security Posture Management) Service

![DSPM (Data Security Posture Management) Service Overview](assets/images/extract/media/posture.png)

#### Services Description

The Data Security Posture Management service is designed to provide organizations with a tool to control how users use their data, with particular attention to sensitive and critical data.  
The service enables full visibility into where sensitive data resides, who can access it, how it is used, and whether it is properly protected in accordance with security policies and compliance frameworks.  
The service leverages new AI and machine learning technologies to automate data discovery and classification and identify operations that are at risk or not in line with the organization's configurable security policies.  By integrating automated data discovery, classification, risk assessment, and remediation, the DSPM PaaS empowers organizations to maintain a strong data security posture and prevent data breaches caused by misconfigurations, overexposure, or insider threats.  
The service can be delivered across hybrid environments and consists of one or more integration components dedicated to the organization's perimeter and a central management and control console.

#### Features and Advantages

The DSPM PaaS delivers end-to-end visibility and control over data security posture, leveraging automation, analytics, and AI to identify, assess, and mitigate risks across distributed data assets.

- *Automated data discovery and classification* → continuously scans structured and unstructured data sources across on-premises, cloud, and SaaS environments. Identifies sensitive, regulated, or confidential data (e.g., PII, PHI, financial information, intellectual property). Uses pattern-based, AI, and machine learning techniques for accurate data classification. Supports integration with data lakes, databases, object storage, and file repositories (e.g., AWS S3, Azure Blob, Google Cloud Storage).
- *Data inventory and mapping* → builds a real-time catalog of all data assets, including metadata, location, ownership, and sensitivity level. Visualizes data lineage and flow between systems, applications, and cloud environments.Tracks data copies, shadow data, and redundant repositories.
- *Risk and exposure assessment* → detects misconfigurations, excessive permissions, open access, and unencrypted repositories. Quantifies data exposure risks by correlating access patterns, user roles, and data sensitivity. Prioritizes remediation based on impact, criticality, and compliance requirements.
- *Policy-based security posture monitoring* → continuously evaluates compliance with internal and external policies (e.g., GDPR, ISO 27001, NIS2, HIPAA). Automatically alerts when data assets violate security baselines or retention policies. Enforces remediation actions through workflow automation or integration with security orchestration platforms.
- *Access governance and entitlement analysis* → monitors who has access to sensitive data and how permissions are granted and used. Detects privilege escalation, dormant accounts, and cross-environment access anomalies. Integrates with IAM and CIEM systems to ensure least-privilege enforcement.
- *Data encryption and protection validation* → validates encryption status, key management configurations, and data masking policies. Monitors compliance with encryption standards (AES-256, TLS 1.3, FIPS 140-2). Detects unencrypted or improperly protected data stores.
- Compliance and audit reporting → provides automated compliance mapping and audit-ready reports for multiple frameworks. Generates dashboards and alerts for non-compliant data assets or policy violations. Supports export of reports for auditors, regulators, or data protection officers.
- *Integration with Security Ecosystem* → connects with SIEM, SOAR, DLP, CSPM, and data protection tools for unified threat detection and response. Exposes APIs and webhooks for data exchange with existing governance and risk platforms. Enables closed-loop remediation workflows through orchestration.
- *Anomaly detection and behavior analytics* → monitors data activity for unusual access or transfer patterns (e.g., data exfiltration or insider misuse). Leverages machine learning to detect deviations from normal usage baselines.Generates contextual risk scores for prioritized investigation.
- *Automated remediation and policy enforcement* → supports policy-driven remediation actions (e.g., revoke access, encrypt data, quarantine repository). Provides guided recommendations for manual or automated corrections. Ensures continuous improvement of the organization’s data security posture.

The main components of the service are:

- *Data discovery and classification engine* → scans data repositories using agents, APIs, and network crawlers. Applies pattern recognition, ML-based classification, and contextual tagging. Supports both structured (SQL, NoSQL) and unstructured (documents, logs, storage) data sources.
- *Data inventory and metadata repository* → centralized catalog storing data asset metadata, classification labels, and sensitivity scores. Enables search, visualization, and reporting through dashboards and APIs.Maintains historical versions for trend and change analysis.
- *Risk and policy engine* → core analytical module evaluating data exposure and policy compliance. Correlates data sensitivity with configuration and access control data. Assigns risk levels and triggers automated alerts and remediation workflows.
- *Access and entitlement analysis module* → integrates with IAM, CIEM, and directory services (LDAP, Azure AD, Okta). Maps user and service account permissions to data assets. Detects anomalies such as excessive privileges, orphaned accounts, and unauthorized access.
- *Encryption and protection monitor* → monitors encryption status and validates data protection mechanisms. Interfaces with Key Management Services (KMS) and Hardware Security Modules (HSMs). Audits encryption configurations and compliance with cryptographic policies.
- *Analytics and correlation layer* → processes data from sensors, logs, and discovery agents using big data analytics. Employs AI/ML models for pattern recognition, anomaly detection, and trend prediction. Correlates posture findings with external threat intelligence and user behavior data.
- *Dashboard and reporting console* → Web-based UI providing visibility into data posture, risk levels, compliance status, and trends. Role-based access control for administrators, auditors, and compliance officers. Customizable reports and visual analytics for executive and technical stakeholders.
- *Integration and API layer* → REST APIs and connectors for integration with external tools (SIEM, SOAR, CSPM, DLP, GRC). Supports event streaming and webhook-based notifications. Enables orchestration of automated remediation workflows.
- *Data storage and retention subsystem* → secure, encrypted repositories for metadata, logs, and historical posture data. Ensures integrity and traceability for compliance and forensic analysis. Supports configurable data retention and anonymization policies.
- *Identity and access management (IAM)* → provides authentication and authorization for all users and system components. Supports SAML, OAuth2.0, and multi-factor authentication. Enforces least-privilege access to DSPM management functions.
- *Monitoring, logging, and audit framework* → collects telemetry and operational metrics across all components. Maintains immutable logs for audit and compliance. Integrates with SOC/SIEM for centralized visibility.

The service is offered with the following unit metric: *100 users*.

The service offers the following advantages:

- *Enhanced data visibility and control* → provides a unified view of all sensitive data across cloud, on-premise, and hybrid environments, allowing organizations to make informed, risk-based decisions.
- *Regulatory compliance and governance* → simplifies adherence to key regulatory frameworks (GDPR, ISO 27001, NIS2, HIPAA) by mapping data to compliance requirements and generating audit-ready reports.
- *Reduced risk of data breaches* → detects and mitigates misconfigurations, overexposed data, and excessive access privileges before they can be exploited by attackers or insiders.
- *Improved business agility* → enables faster and safer adoption of cloud services by continuously monitoring data exposure and security compliance across environments.
- *Operational cost efficiency* → delivered as a PaaS, eliminating the need for complex infrastructure or dedicated in-house data security resources, and reducing manual risk assessments through automation.
- *Improved trust and reputation* → demonstrates commitment to data protection and compliance, reinforcing customer confidence and brand integrity.
- *Data-driven decurity decision making* → provides actionable insights and prioritization of data risks, empowering leadership to allocate resources effectively.
- *Accelerated compliance audits and reporting* → automates evidence collection and reporting, reducing time and effort needed to prepare for regulatory audits and certifications.
- *Strategic risk reduction* → transforms data security from reactive to proactive, helping organizations anticipate vulnerabilities and maintain resilience against evolving threats.
- *Comprehensive data discovery and classification* → continuously identifies and categorizes sensitive data across all storage types, ensuring that no critical information remains unmonitored or unprotected.
- *Real-Time security posture assessment* → monitors configurations, permissions, and encryption status to maintain a dynamic, up-to-date view of data risk posture.
Automated remediation and policy enforcement → executes automated corrective actions—such as revoking access or enforcing encryption—based on predefined security policies and workflows.
- *AI-driven risk prioritization* → uses machine learning and analytics to correlate data sensitivity, user behavior, and configuration issues for intelligent risk scoring and prioritization.
- *Cross-environment data protection* → delivers consistent posture visibility and policy enforcement across multi-cloud, hybrid, and on-premise environments.
- *Integration with Enterprise security scosystem* → seamlessly integrates with SIEM, SOAR, IAM, CSPM, and DLP tools, enabling a unified security operations workflow.
- *Continuous compliance validation* → continuously audits data repositories against regulatory and internal compliance standards, reducing the risk of non-compliance penalties.
- *Centralized Management and Reporting* → provides a single console for visibility, analytics, and reporting, simplifying operational management for administrators and compliance officers.
- *Granular access and entitlement analysis* → detects misaligned access privileges, unused credentials, and policy violations to enforce least-privilege principles.
- *High scalability and availability* → cloud-native architecture ensures performance and resilience, scaling automatically with enterprise data growth and operational demand.
- *Secure data governance lifecycle* → covers all phases of the data lifecycle—from discovery to deletion—ensuring ongoing compliance and protection throughout the process.
- *Auditability and traceability* → maintains immutable logs and versioned posture data for forensic investigation and compliance verification.

<a id="ngfw"></a>

### NGFW platform

![NGFW platform Overview](assets/images/extract/media/firewall.png)

#### Services Description

The Next-Generation Firewall (NGFW) service implements a firewall application system to manage inbound and outbound traffic flows.  
The platform includes all the advanced features of a firewall with additional threat detection capabilities based on artificial intelligence and machine learning.  
The device is also capable of analyzing the content of network packets, down to the application layer (deep packet inspection), and managing rules based on more than just ports and protocols.  
The service delivers intelligent traffic inspection, application-aware control, intrusion prevention, and threat detection across cloud, on-premise, and hybrid infrastructures. Unlike traditional firewalls that rely solely on port and protocol filtering, the NGFW PaaS incorporates deep packet inspection (DPI), machine learning-based threat analysis, and context-aware security policies to identify and mitigate sophisticated attacks, including malware, ransomware, zero-day exploits, and data exfiltration attempts.

#### Features and Advantages

The main features and functionalities of the service are:

- *Advanced traffic inspection* → performs Deep Packet Inspection (DPI) to analyze traffic beyond basic headers. Detects malicious payloads, encrypted threats, and unauthorized applications. Supports full SSL/TLS decryption and inspection with configurable privacy controls.
- *Application awareness and control* → identifies and classifies network traffic by application, not just port or protocol. Enables granular policy enforcement (allow, block, limit, prioritize) based on application type, risk level, and user identity. Prevents the use of unauthorized or high-risk applications (e.g., P2P, anonymizers, unapproved SaaS).
- *Intrusion prevention system (IPS)* → provides signature-based and behavior-based detection to prevent known and unknown exploits. Protects against buffer overflows, SQL injection, cross-site scripting, and command injection attacks. Continuously updated with global threat intelligence feeds.
- *Threat intelligence and malware protection* → integrates with real-time Threat Intelligence Feeds to block malicious IPs, URLs, and domains. Detects and blocks command-and-control (C2) traffic and lateral movement.Employs machine learning to identify zero-day malware and ransomware indicators.
- *User and identity awareness* → integrates with Identity and Access Management (IAM) and directory services. Enforces user-based policies and logs actions for compliance and audit. Enables role-based access control (RBAC) for network usage and policy management.
- *Secure Web filtering and URL categorization* → filters web traffic by category (e.g., malware, phishing, adult, social media). Blocks or restricts access based on organization-defined policies. Protects users from malicious or compromised websites.
- *Network segmentation and microsegmentation* → enables logical separation of networks and workloads using VLANs, VPNs, or SDN policies. Implements Zero Trust segmentation to minimize lateral movement of threats.Supports east-west traffic control within cloud and virtualized environments.
- *Virtual Private Network (VPN) and secure remote access* → provides site-to-site and remote access VPN with AES-256 encryption. Supports IPsec, SSL, and hybrid VPN tunnels for secure communication. Integrates with multi-factor authentication (MFA) for secure user access.
- *Sandboxing and threat emulation* → suspicious files and payloads are executed in isolated virtual sandboxes. Detects advanced malware and zero-day exploits through behavioral analysis. Feeds findings back into the threat intelligence ecosystem for continuous learning.
- *Policy automation and orchestration* → centralized management of firewall rules, security policies, and compliance templates. Automates policy updates and synchronization across distributed environments. Provides versioning, rollback, and change tracking for policy lifecycle management.
- *Logging, monitoring, and analytics* → real-time visibility into network traffic, user activity, and threat events. Integrated dashboards and customizable reports for compliance and auditing. Supports integration with SIEM/SOAR platforms for advanced analytics and incident response.
- *High availability and scalability* → redundant architecture ensuring failover, session synchronization, and minimal downtime. Auto-scaling capabilities to handle fluctuating workloads and peak network demand. Supports multi-zone and multi-region deployment for resilience and disaster recovery.

The main components of the service are:

- *Firewall enforcement nodes* → core data-plane components responsible for packet inspection, policy enforcement, and threat prevention. Deployed in a scalable cluster across multiple cloud availability zones or on-premise gateways. Supports virtual, containerized, or hardware-accelerated form factors.
- *Control and management plane* → provides centralized configuration, orchestration, and lifecycle management of all NGFW instances. Supports multi-tenant environments with granular administrative segmentation. Exposes APIs for automation, integration, and third-party control systems.
- *Threat intelligence and analytics engine* → aggregates global threat intelligence feeds and correlates them with real-time traffic telemetry. Employs AI and behavioral analytics for anomaly detection and predictive threat modeling.Updates detection rules and security signatures dynamically across all nodes.
- *Intrusion prevention and detection subsystem (IPS/IDS)* → continuously monitors inbound and outbound traffic for known exploits or attack patterns. Uses signature-based, heuristic, and behavioral analysis to identify advanced threats. Works in conjunction with sandboxing and threat emulation for extended detection.
- *Policy and compliance engine* → stores and enforces security policies across the infrastructure. Supports custom rule sets, templates, and compliance mappings (e.g., ISO 27001, PCI-DSS, NIS2). Provides automated risk scoring and compliance auditing for configurations.
- *Identity and access integration layer* → connects to corporate IAM and SSO platforms to apply identity-aware security policies. Enables per-user or per-role traffic control and logging. Supports MFA and federated authentication mechanisms.
- *Sandboxing and threat emulation cluster* → dedicated virtualized environment for executing suspicious files and payloads. Detects unknown threats without impacting production systems. Integrates with global threat intelligence to enhance protection models.
- *Logging, telemetry, and SIEM integration* → collects and normalizes network logs, flow records, and security events. Integrates with external SIEM systems for centralized visibility and correlation. Supports syslog, REST API, and streaming telemetry protocols.
- *API gateway and orchestration layer* → enables integration with CSPM, SOAR, and automation platforms. Provides RESTful APIs and SDKs for policy management, provisioning, and analytics. Facilitates policy synchronization and automation in hybrid environments.
- *High availability and load balancing layer* → distributes traffic across multiple enforcement nodes for optimized performance and reliability. Supports active-active and active-standby configurations. Includes automatic failover, state synchronization, and redundancy at all layers.
- *Monitoring and visualization dashboard* → provides administrators with real-time visibility into network status, threats, and policy compliance. Features interactive analytics, risk scoring, and alert prioritization. Supports customizable widgets for security operations and compliance teams.
- *Data storage and archiving subsystem* → secure storage for logs, events, and configuration snapshots. Encrypted repositories with configurable retention and audit capabilities. Supports integration with cloud object storage or on-prem archival systems.

The service is offered with the following unit metric: *1 Gbps of Throughput*.

The service offers the following advantages:

- *Enhanced cyber resilience* → provides continuous protection against advanced cyber threats, ensuring business continuity and minimizing the risk of network downtime, data loss, or reputational damage.
- *Regulatory compliance and risk reduction* → simplifies compliance with major cybersecurity frameworks by enforcing standardized policies, secure configurations, and comprehensive audit logging.
- *Operational efficiency and cost optimization* → delivered as a managed PaaS, the service eliminates the need for dedicated hardware, manual updates, and specialized maintenance, significantly reducing operational costs.
- *Scalable and flexible network protection* → cloud-native design enables dynamic scaling according to traffic demand, ensuring consistent performance across hybrid and multi-cloud environments.
- *Accelerated security modernization* → enables organizations to transition from legacy firewalls to a modern, intelligent, and centrally managed security platform without downtime or complex migrations.
- *Improved Visibility and Governance* → consolidates monitoring and policy control across distributed environments into a single interface, empowering governance, risk, and compliance teams.
- *Faster incident response* → automated detection and orchestration reduce the time to identify and mitigate attacks, minimizing business impact and resource overhead.
- *Business continuity and resilience* → redundant and geo-distributed infrastructure ensures uninterrupted protection and service availability even during outages or attacks.
Support for digital transformation initiatives → enables secure adoption of cloud services, remote access, and IoT solutions by integrating network security directly into cloud workflows.
- *Comprehensive layered protection* → combines firewall, intrusion prevention, antivirus, web filtering, and sandboxing into a unified, multi-layered security stack.
Application and user awareness → identifies and controls applications and users regardless of port, protocol, or encryption, ensuring contextual, identity-based access control.
- *Deep Packet Inspection (DPI)* → examines every packet in real-time to detect encrypted or obfuscated threats, ensuring accurate threat identification and minimal false positives.
- *AI-Driven threat detection and prevention* → uses artificial intelligence, behavioral analytics, and threat intelligence feeds to detect zero-day attacks, ransomware, and polymorphic malware.
- *Centralized Policy Management* → provides unified control of security rules, compliance baselines, and configurations across all NGFW instances through a single management console.
- *Real-Time analytics and reporting* → offers comprehensive visibility into traffic patterns, security events, and policy compliance, with exportable reports for auditing and SOC integration.
- *High availability and elastic scalability* → implements active-active clustering, load balancing, and autoscaling to maintain performance and fault tolerance under varying network loads.
- *Zero Trust and microsegmentation support* → enforces least-privilege access and segmentation at the application, user, and workload level to contain breaches and minimize lateral movement.
- *Integration with security ecosystem* → seamlessly connects with SIEM, SOAR, CSPM, and IAM platforms for unified threat management, incident response, and automation workflows.
- *Secure VPN and remote access* → delivers site-to-site and user-based VPN capabilities with strong encryption and MFA integration for secure remote connectivity.
- *Automated policy enforcement and updates* → automatically distributes updated rules, signatures, and threat intelligence across all firewalls, ensuring continuous protection with minimal manual effort.
- *Robust logging, monitoring, and auditability* → maintains detailed, immutable logs for compliance, forensics, and real-time incident response, ensuring full visibility and traceability.
- *Support for multi-tenant and hybrid environments* → designed for organizations and service providers managing multiple clients or business units with logical separation and delegated administration.

<a id="PAM"></a>

### PAM (Privileged Access Management) Service

![PAM (Privileged Access Management) Service Overview](assets/images/extract/media/ssh.png)

#### Services Description

The Privileged Access Management (PAM) service manages and protects privileged access to critical environments, including credential management, session control, and real-time monitoring.  
PAM allows organizations to activate a privileged access management system. Its purpose is to act as a bridge between users (especially administrators) and the systems they manage, ensuring that administrative credentials are protected within a "vault" and hidden from the administrators themselves.  
Furthermore, the system can rotate administrative credentials or deny access to an administrator on a per-profile basis.  
Privileged accounts — such as system administrators, database managers, and DevOps automation services — represent a primary attack vector for cybercriminals. Compromise of these accounts can lead to severe data breaches, ransomware propagation, or full system takeover.  
The PAM PaaS delivers identity-centric protection and governance for all privileged credentials, sessions, and activities across on-premises, cloud, and hybrid environments.
It enforces the principle of least privilege, enables session monitoring and recording, and automates credential rotation, vaulting, and just-in-time access provisioning to minimize risk exposure.  
Delivered as a managed PaaS, the service eliminates the complexity of deploying and maintaining traditional PAM infrastructure, providing organizations with continuous protection, compliance enforcement, and operational efficiency.

#### Features and Advantages

The PAM PaaS provides a rich set of functionalities to secure and manage privileged accounts, credentials, and access sessions throughout their lifecycle.

- *Centralized credential vaulting* → securely stores and manages privileged credentials (passwords, SSH keys, API tokens, certificates) in an encrypted vault. Eliminates hard-coded or shared credentials across systems. Provides strong encryption, multi-factor authentication, and access auditing.
- *Automated password and key rotation* → enforces automatic, policy-driven rotation of privileged passwords and cryptographic keys.Integrates with directories, databases, network devices, and cloud services. Reduces exposure time in case of credential compromise.
- *Just-in-Time (JIT) privilege elevation* → grants temporary, time-bound privileged access based on contextual approval workflows. Automatically revokes privileges after task completion. Minimizes standing privileges and insider threat exposure.
- *Session management and monitoring* → records, monitors, and audits all privileged sessions (SSH, RDP, SQL, web consoles). Enables real-time session oversight and automated termination on policy violation. Provides full playback for forensic investigation and compliance.
- *Multi-Factor Authentication (MFA) and adaptive access* → enforces MFA for all privileged access events. Supports adaptive authentication based on device, geolocation, and behavioral risk scoring. Integrates with corporate identity providers (Azure AD, LDAP, SAML, OIDC).
- *Role-Based Access Control (RBAC)* → assigns privileges based on predefined roles, ensuring least-privilege enforcement. Supports fine-grained policies that define who can access what, when, and how. Facilitates separation of duties for compliance with ISO 27001 and NIS2.
- *Command filtering and policy enforcement* → inspects and filters privileged commands during active sessions.Blocks or flags suspicious commands or administrative actions in real time. Supports custom rule sets aligned with compliance and internal security standards.
- *Secure remote access gateway* → provides agentless, browser-based remote access to critical systems without exposing credentials. Supports RDP, SSH, and web management interfaces through encrypted tunnels. Logs all session activity for security and compliance.
- *Integration with SIEM and SOAR platforms* → sends logs, events, and alerts to centralized SIEM/SOAR solutions. Enables automated incident response, anomaly detection, and correlation with threat data. Provides standardized APIs and connectors for integration.
- *Privileged Account Discovery* → scans the environment to identify unmanaged privileged accounts, keys, and secrets. Assesses risk exposure and automates onboarding into the vault. Supports discovery across Active Directory, cloud platforms, databases, and containers.
- *Audit, compliance, and reporting* → provides detailed reports on access requests, approvals, and session activity. Supports compliance with GDPR, ISO 27001, PCI-DSS, HIPAA, and NIS2 directives. Offers customizable dashboards and automated report scheduling.
- *Threat analytics and anomaly detection* → leverages behavioral analytics to identify suspicious privileged user behavior. Detects deviations from normal activity patterns using AI and machine learning models. Generates alerts and can automatically revoke access on detected anomalies.
- *API and DevOps integration* → provides RESTful APIs and SDKs for integrating PAM controls into CI/CD pipelines. Protects privileged secrets in DevOps environments (Jenkins, GitLab, Ansible). Enables machine identity management and service account governance.

The main components of the service are:

- *Credential vault (Secure storage layer)* → core repository for all privileged credentials, keys, and secrets. Implements AES-256 encryption, HSM integration, and strong key management. Enforces access via secure APIs and MFA-protected sessions.
- *Access control and policy engine* → centralized component that enforces RBAC, access approval workflows, and least-privilege rules. Evaluates contextual access conditions (user role, time, device, risk score). Integrates with IAM and directory services for authentication and authorization.
- *Session management and recording subsystem* → manages all privileged session connections, including RDP, SSH, and database access. Captures full video/audio/text logs of user sessions for replay and forensic analysis. Supports live session termination, keystroke logging, and behavioral analytics.
- *Just-in-Time (JIT) access provisioning engine* → automates temporary privilege elevation for approved tasks. Integrates with ITSM systems for request/approval workflows. Ensures access expiration and automatic credential revocation.
- *Discovery and onboarding module* → continuously scans infrastructure to locate unmanaged privileged accounts and secrets. Automatically imports discovered credentials into the vault. Generates visibility reports and risk scores for unprotected assets.
- Multi-Factor Authentication and identity federation layer → connects with enterprise IAM systems for identity verification. Supports SSO, SAML 2.0, OIDC, and FIDO2 standards.Applies adaptive MFA policies based on context and risk posture.
- *Analytics and threat detection engine* → aggregates PAM telemetry to detect abnormal privileged activity. Uses AI-based behavioral baselines for early threat detection. Feeds alerts and analytics to SIEM/SOAR systems for incident correlation.
- *Secure remote access gateway* → provides proxy-based, credential-free access to internal systems. Prevents credential exposure during remote administration. Logs all actions for compliance and traceability.
- *Integration and API gateway* → exposes APIs for integration with ITSM, SIEM, SOAR, DevOps, and IAM tools. Supports automation and policy synchronization across multi-cloud environments. Enables secure machine-to-machine communications.
- *Logging and audit repository* → centralized collection point for all PAM events, access logs, and session data. Ensures immutability and time synchronization for forensic integrity. Supports long-term storage and secure archiving.
- Web management console → provides administrators with a unified interface for configuration, policy management, and monitoring. Offers dashboards, risk indicators, and compliance views. Supports delegated administration and role-based visibility.
- *High availability and scalability layer* → multi-zone deployment with redundant components to ensure continuous availability. Supports horizontal scaling for concurrent session and credential workloads. Implements backup, failover, and disaster recovery capabilities.

The service is offered with the following unit metric: *10 administrative users managed by the Platform*.

The service offers the following advantages:

- *Reduced risk of data dreaches and insider threats* → minimizes the attack surface by enforcing strict control and monitoring of privileged accounts, effectively reducing both external and insider threat vectors.
- *Regulatory and compliance alignment* → simplifies adherence to key cybersecurity and privacy frameworks through standardized access policies, complete audit trails, and automated compliance reporting.
- *Improved security governance and accountability* → centralizes management of all privileged identities and enforces policy consistency across business units, increasing accountability and transparency.
- *Operational efficiency and cost savings* → delivered as a managed PaaS, it eliminates the need for on-premises infrastructure, manual credential management, and complex maintenance tasks, reducing operational overhead and total cost of ownership.
- *Enhanced Business Continuity* → ensures uninterrupted access to critical systems while maintaining full security control, even during infrastructure failures or security incidents.
- *Support for digital transformation and cloud adoption* → enables secure access to hybrid and multi-cloud environments, supporting DevOps pipelines, cloud-native workloads, and remote operations securely and efficiently.
- *Increased organizational agility* → automated workflows and just-in-time access provisioning streamline operational processes and accelerate response to evolving business and security needs.
- *Improved trust and peputation* → demonstrates strong security posture to clients, partners, and regulators by safeguarding the most sensitive access credentials and administrative activities.
- *Comprehensive privileged access lifecycle management* → covers the full lifecycle of privileged credentials — discovery, vaulting, rotation, monitoring, and decommissioning — ensuring continuous protection.
- *Centralized and secure credential vaulting* → uses enterprise-grade encryption and hardware security modules (HSMs) to protect privileged credentials and secrets from unauthorized disclosure.
- *Automated password and key rotation* → reduces credential exposure by automatically rotating and updating passwords, API keys, and certificates according to customizable security policies.
- *Just-in-Time (JIT) access control* → eliminates permanent administrative privileges by providing temporary, task-based elevated access, automatically revoked upon completion.
Real-time session monitoring and recording → enables full visibility into privileged user actions, with live session control, playback, and forensic evidence for investigations.
- *Command filtering and policy enforcement* → prevents misuse of administrative access by blocking unauthorized commands and enforcing predefined policy rules during active sessions.
- *Integration with Enterprise identity and security systems* → seamlessly connects to IAM, SSO, SIEM, SOAR, and DevOps tools to ensure consistent access control and unified threat visibility.
- *Behavioral analytics and anomaly detection* → uses machine learning models to detect suspicious or abnormal privileged activity, triggering automated alerts and responses.
*Strong Authentication and Adaptive Security *→ implements MFA, context-based access control, and adaptive authentication to strengthen access security across all privileged sessions.
- *Secure remote access gateway* → provides agentless, credential-free remote access to internal systems through encrypted channels, reducing the risk of credential theft.
- *Scalable cloud-native architecture* → designed for elastic scaling to accommodate growth in users, systems, and sessions, ensuring consistent performance across large deployments.
- *Continuous compliance and reporting* → generates automated reports and dashboards that meet audit and compliance requirements, ensuring continuous adherence to security policies.
- *Multi-tenant and delegated administration support* → enables secure separation of administrative domains for different departments or customers, ideal for managed service providers or large organizations.
- *Resilient and redundant infrastructure* → built on a high-availability architecture with geographic redundancy, automatic failover, and disaster recovery capabilities.
Extensive API and Automation Capabilities → exposes APIs for integration with orchestration and ITSM systems, enabling policy automation, credential management, and incident response workflows.


<a id="PSI"></a>

### Perimeter Security Intelligence Service

![Perimeter Security Intelligence Service Overview](assets/images/extract/media/alert.png)

#### Services Description

The Perimeter Security Intelligence service offers in-depth analysis of network traffic and perimeter activity, identifying potential threats and vulnerabilities.  
Using advanced data analysis techniques, the service provides a comprehensive and proactive view of an organization's perimeter security. The Perimeter Security Intelligence service is based on the integration of advanced intelligence capabilities with organizations' existing security systems.  
The goal is to provide, through a threat information sharing and reputation assessment platform, reliable feeds and indicators of compromise to other security solutions so they can proactively block threats.

#### Features and Advantages

The main features and functionalities of the service are:

- *Real-time perimeter monitoring* → continuously monitors network traffic at the organization’s edge for signs of malicious activity, intrusions, or policy violations. Provides deep inspection of packets and flow analysis to identify abnormal behaviors and potential attacks. Supports on-premises, cloud, and hybrid network topologies.
- *Threat intelligence integration* → integrates with global and industry-specific threat intelligence feeds to detect known indicators of compromise (iocs). Correlates external threat data with internal events to prioritize risks and anticipate emerging attacks. Automatically updates protection rules and correlation signatures in real time.
- *Intrusion Detection and Prevention (IDS/IPS)* → identifies and blocks unauthorized access attempts, exploit activity, and suspicious network traffic. Utilizes signature-based, heuristic, and behavior-based detection methods.Supports inline (prevention) and passive (detection) deployment modes.
- *Network Behavior Analysis (NBA)* → uses machine learning to baseline normal network activity and detect anomalies, such as lateral movement or data exfiltration. Identifies zero-day attacks and insider threats based on deviation from established patterns. Generates risk scores and automated alerts for anomalous behaviors.
- *Distributed Denial-of-Service (DDOS) protection* → detects and mitigates volumetric, protocol-based, and application-layer DDOS attacks. Utilizes traffic filtering, rate limiting, and intelligent rerouting techniques. Integrates with cloud-based scrubbing centers for high-volume mitigation.
- *Security information correlation and event enrichment* → correlates perimeter data with logs from other security sources (firewalls, vpns, proxies, endpoints). Enriches events with contextual intelligence, user identity, and geolocation data. Provides high-fidelity alerts to reduce noise and false positives.
- *Threat hunting and forensic analysis* → enables proactive investigation of perimeter events and indicators of compromise. Provides historical visibility through log retention and network flow archives. Supports automated forensic reconstruction of attack chains and lateral movement.
- *Adaptive policy enforcement* → dynamically updates firewall, ids/ips, and web filtering rules based on threat intelligence and incident context. Supports automated response actions such as ip blocking, quarantine, or traffic redirection.Integrates with soar platforms for orchestration of complex response workflows.
- *Perimeter access control and network segmentation* → controls external connections through context-aware policies and zero-trust segmentation principles. Limits communication between zones based on sensitivity, trust level, and risk posture. Integrates with identity-based access controls and vpn gateways.
- *Security analytics and visualization* → provides centralized dashboards with real-time metrics on traffic volume, threats, and blocked activity. Supports drill-down analysis by ip, application, or geographic source. Enables customizable reports for soc teams and compliance auditors.
- *Log management and retention* → collects and stores network and security logs in an encrypted, tamper-proof repository. Supports customizable retention policies for compliance and forensic analysis. Integrates with external siem and compliance monitoring tools.
- *Automation and orchestration* → automates threat response and mitigation through integration with soar systems.Supports playbooks for recurring incidents and threat scenarios. Provides apis for custom integrations and policy automation.

The main components of the service are:

- *Data collection and sensor layer* → distributed sensors deployed at network perimeters, gateways, and cloud endpoints. Captures traffic flows, logs, and events for analysis. Supports netflow, sflow, pcap, and syslog formats.
- *Threat detection and correlation engine* → core analysis engine that applies rules, signatures, and behavioral models to incoming data. Correlates events from multiple sensors to identify attack patterns and coordinated campaigns. Continuously updated via global threat intelligence feeds.
- *Machine learning and analytics module* → performs behavioral baselining, anomaly detection, and predictive threat analysis. Identifies previously unseen threats using unsupervised learning algorithms. Generates risk scores and prioritizes alerts based on contextual relevance.
- *Intrusion Detection and Prevention (IDS/IPS)* → inspects packets in real time to detect and block malicious payloads. Supports both inline blocking and passive detection deployments. Uses deep packet inspection (dpi) and heuristic analysis for zero-day detection.
- *Threat intelligence aggregator* → collects, normalizes, and correlates threat data from multiple external sources (cert, isac, vendor feeds). Enriches internal security events with iocs, ip reputation, and malware signatures. Provides adaptive updates to detection and response rules.
- *Security orchestration and response layer* → executes automated or manual response actions based on detected threats. Integrates with soar platforms to trigger remediation workflows. Supports playbooks for dynamic rule updates and containment strategies.
- *Policy and configuration management* → centralized management of firewall, ids/ips, and access control policies. Supports versioning, approval workflows, and compliance validation. Ensures consistent policy enforcement across distributed environments.
- *Visualization and reporting dashboard* → provides operational and executive-level views of perimeter activity, threat trends, and response metrics. Supports customizable widgets and dynamic filtering for soc teams. Offers preconfigured compliance and kpi dashboards.
- *Log storage and archival repository* → encrypted storage for raw and processed perimeter security data. Provides full auditability and supports long-term retention requirements.Enables retrospective analysis for threat hunting and legal investigations.
- *API and integration gateway* → facilitates interoperability with siem, soar, iam, and cspm platforms.Enables data exchange and automation through restful apis. Supports event forwarding, rule synchronization, and analytics export.
- *High availability and scalability layer* → built with redundant components and auto-scaling mechanisms to ensure consistent performance. Supports multi-zone deployment with failover and disaster recovery capabilities. Automatically balances sensor workloads and analysis processing.
- *Security governance and compliance module* → maps policies and controls to industry standards and frameworks. Monitors adherence to compliance baselines and provides deviation alerts. Generates reports aligned with ISO 27001, GDPR, and NIS2 requirements.

The service is offered with the following unit metric: *6 Target integrations in perimeter (e.g. FW)*.

The service offers the following advantages:

- *Enhanced protection of business assets* → safeguards critical data and infrastructure from external cyber threats, reducing the likelihood of data breaches and financial loss. Provides continuous monitoring to ensure business continuity and operational resilience.
- *Reduced total cost of ownership (TCO)* →  eliminates the need for on-premises perimeter security hardware and complex maintenance.
- *Faster incident response and risk mitigation* → automates detection and mitigation processes to minimize downtime and reduce incident impact. Accelerates decision-making through real-time alerts, dashboards, and contextual threat analysis.
- *Increased visibility and control* → provides a unified view of perimeter activity across hybrid and multi-cloud environments. Helps identify emerging risks and vulnerabilities before they impact business operations.
- *Improved regulatory compliance* → supports compliance with industry standards such as ISO 27001, gdpr, and NIS2. Generates audit-ready reports and evidence of continuous monitoring and threat management.
- *Operational efficiency and agility* → reduces manual tasks through automation and orchestration of security workflows.
- *Scalability and flexibility* → adapts to the evolving perimeter of digital enterprises, supporting cloud, remote, and iot environments.
- *Data-driven decision making* → transforms perimeter data into actionable intelligence, improving security strategy alignment with business priorities.Enhances situational awareness through analytics-driven insights and trend analysis.

<a id="IPS"></a>

### Intrusion Prevention System (IPS) Service

![Intrusion Prevention System (IPS) Service Overview](assets/images/extract/media/IPS.png)

#### Services Description

The Intrusion Prevention System (IPS) service actively intercepts network traffic for patterns of malicious or abnormal behavior and automatically and proactively blocks such malicious traffic.  
The Intrusion Prevention System (IPS) service not only detects but also prevents attacks in real time.  
It uses attack signatures and behavioral analysis to identify and block known and unknown threats, protecting the IT infrastructure from potential compromise.
Unlike an IDS, an IPS is integrated into the network architecture, at least for mission-critical network flows.

#### Features and Advantages

The main features and functionalities of the service are:

- *Traffic inspection and analysis* → performs deep packet inspection (dpi) and protocol decoding for inbound, outbound, and east-west traffic. Applies signature-based rules (known attack patterns), anomaly/behavior analysis (baseline deviation), and policy enforcement. Supports real-time blocking of malicious connections and content.
- *Signature and threat intelligence engine* → maintains an updated signature library for known exploits and malicious traffic patterns. Integrates external threat intelligence feeds to identify malicious ips, domains, C2 channels, and exploit kits.
- *Anomaly and behavioral detection* → establishes baseline traffic behavior, then identifies deviations indicating potential threats (e.g., lateral movement, data exfiltration). Applies machine-learning or heuristic engines to supplement rule-based detection.
- *Policy-driven prevention and inline blocking* → automates blocking, connection termination, or traffic modification (e.g., reset, drop) when threats are detected. Policy profiles are configurable by severity, traffic zone, protocol, application, and asset criticality.
- *Encrypted traffic inspection* → supports ssl/tls decryption and re-inspection of encrypted traffic to uncover hidden threats.
- *Zone and network segment enforcement* → inspects traffic crossing defined security zones (e.g., lan → dmz, cloud → on-prem) and enforces segmentation rules.
- *Logging, alerting, and reporting*→ generates detailed logs of detected intrusions, blocked events, and session information. Provides dashboards and reports for monitoring detection/prevention performance, compliance, and trends.
- *Automated remediation and integration* → integrates with soar and automation platforms to trigger containment workflows (e.g., block ip, quarantine host, notify soc). Provides api access and webhooks for external orchestration.
- *Scalable deployment models* → supports virtualized or containerized enforcement points across cloud regions, hybrid sites, and branch networks. Auto-scales to ensure performance under high traffic loads and large session volumes.
- *Continuous update and threat intelligence sync* → automatically delivers new signatures, behavioral models, and threat intelligence to all enforcement nodes to keep protection current.

The main components of the service are:

- *Enforcement / data plane nodes* → high-performance inline sensors (virtual or hardware) that inspect and enforce traffic rules, perform dpi, session tracking, and blocking. Deployed across zones (edge, cloud gateway, internal segment).
- *Control and management plane* → central management console for policy authoring, signature updates, performance monitoring, and enforcement node orchestration. Supports multi-tenancy, role-based access, and delegated administration.
- *Signature and threat intelligence repository* → stores rule sets, malware and attack signatures, reputation data, ip/domain blacklists, and threat feed aggregations.Regularly updated and distributed to enforcement nodes.
- *Behavioral analytics and anomaly detection engine* → performs baseline modeling of network and application traffic, detecting deviations and flagging suspicious activity.Generates risk scores, correlates events, and triggers alerts or preventative actions.
- *Policy engine and configuration repository* → manages configuration of inspection zones, severity thresholds, blocking actions, traffic handling rules, and enforcement workflows.Maintains versioning, audit history, and rollback capabilities.
- *Integration and api gateway* → exposes restful apis and webhooks for integration with siem, soar, orchestration, and other security tools. Supports event export, automation triggers, and third-party tool connectivity.
- *Logging, monitoring, and reporting subsyste*m → collects logs, alerts, session metadata, and traffic flows, storing them in a secure, indexed repository. Provides dashboards, forensic search, export capabilities, and report generation.
- *High availability and scalability infrastructure* → cluster deployment, auto-scaling of enforcement nodes, geographic redundancy, and failover mechanisms. Load-balances traffic across nodes to maintain performance and resilience.
- *Secure storage and archival layer* → provides encrypted storage for historical logs, session data, and evidence for forensic and compliance purposes. It is includes data retention policies, immutable logging, and audit trail support.
- *Encryption and decryption module* → handles ssl/tls decryption, re-inspection, and re-encryption of traffic to ensure visibility into encrypted streams. Integrates with key management and certificate handling systems.

The service is offered with the following unit metric: *1 Gbps of Throughput*.

The service offers the following advantages:

- *Proactive protection against cyber threats* → prevents network intrusions and exploits in real time, reducing the risk of data breaches and business disruption.Continuously analyzes traffic to identify and stop attacks before they escalate.
- *Reduced operational costs* → eliminates the need for dedicated on-premises intrusion prevention appliances and complex management.Delivered as a cloud-based paas with predictable subscription costs and minimal maintenance overhead.
- *Enhanced business continuity* → blocks disruptive and malicious traffic automatically, ensuring uninterrupted operations.Minimizes downtime and revenue loss caused by security incidents.
- *Improved regulatory and compliance posture* → supports adherence to security standard frameworks  Provides continuous monitoring, detailed logs, and auditable reports for compliance verification.
- *Centralized visibility and governance* → provides unified control and visibility over network traffic across cloud, hybrid, and on-premises environments. Simplifies governance and policy enforcement from a single management interface.
- *Scalability and flexibility* → dynamically scales according to traffic load and business needs, adapting to cloud and hybrid deployments.Supports integration with existing soc and siem platforms for extended visibility.
- *Reduced risk exposure and faster incident response* → accelerates threat response through automated blocking and integration with orchestration tools. Shortens mean time to detect (mttd) and mean time to respond (mttr).
- *Improved security posture through continuous updates* → continuously updated with new signatures, threat intelligence, and behavioral models. Ensures up-to-date protection against emerging and zero-day attacks.
- *Advanced detection and prevention capabilities* → combines signature-based, heuristic, and anomaly-based detection techniques for comprehensive threat coverage. Uses deep packet inspection (dpi) for high-precision traffic analysis.
- *Real-time inline prevention* → automatically blocks malicious traffic inline without human intervention. Prevents exploits, denial-of-service attempts, and command-and-control communications in real time.
- *Machine learning and behavioral analytics* → employs machine learning models to identify unknown and evolving threats. Continuously refines detection accuracy through feedback and adaptive learning.
- *Seamless integration with existing infrastructure* → integrates easily with SIEM, SOAR, and SOC systems for centralized monitoring and automated response.Supports api-based integration for custom workflows and automation.
- *High availability and redundancy* → designed for continuous uptime through clustering, failover, and auto-scaling mechanisms. Ensures uninterrupted protection even during maintenance or component failure.
- *Centralized management and policy control* → allows administrators to define, deploy, and manage security policies across distributed environments from a single console. Enables consistent enforcement across multi-cloud and hybrid architectures.
- *Encrypted traffic inspection* → supports ssl/tls decryption and inspection for comprehensive visibility into encrypted traffic streams. Ensures full coverage against hidden or encrypted attacks.
- *Automation and orchestration capabilities* → supports automated remediation workflows for threat containment and isolation. Reduces human workload and response time through integration with orchestration tools.

## Middleware Family

Below is the list of services belonging to the Middleware family:

- [PaaS API Management](#API)
- [Jboss as a Service](#Jboss)
- [Spring boot as a Service](#spring)
- [PaaS Business Process as a Service](#BPM)
- [PaaS CMS as a Service](#CMS)
- [PaaS ETL - Batch / Real Time Processing - 1 worker](#ETL)
- [Semantic Knowledge Search - 1 Worker](#semantic-search)

<a id="API"></a>
### PaaS API Management

![PaaS API Management](assets/images/extract/media/API.png)

#### Services Description

It is a platform of tools and services that facilitates the management, control, monitoring, and protection of APIs (Application Programming Interfaces) without having to manually implement all the components. 
The service typically offers:

- API gateways to route and secure traffic;
- Authentication and authorization: Rate limiting and throttling to control consumption;
- Logging and observability: Integration with security and DevOps systems.

The API manager facilitates API lifecycle management, including aspects such as creation, version management, deprecation, and retirement, to ensure backward compatibility, allowing developers to gradually migrate to new versions without disrupting existing applications.  
The API manager allows you to define and enforce policies, such as usage limits, quota management, custom authentication, data transformations, and caching. These policies allow you to control API behavior and ensure compliance with security requirements and guidelines.  
The API Manager can integrate with other systems and tools, such as identity and access management (IAM) systems, performance monitoring systems, data analytics systems, and security gateways. This integration expands the API Manager's functionality and integrates it into the ecosystem of existing applications and services.

#### Features and Advantages

The main features and functionalities of the service are:

- *API Publishing* → the API Manager offers tools for publishing APIs, allowing developers or authorized users to access them. For optimal use, clear and comprehensive documentation is provided describing how to use the APIs, which endpoints are available, which parameters are requested, and how to interpret the responses.
- *Access Control* → the API Manager manages the authentication and authorization of users who wish to use the APIs. This allows you to control who can access the APIs and with what permission levels. The API Manager can adopt authentication mechanisms such as access tokens, API keys, or digital certificates to ensure API security.
- *Monitoring and Analytics* → the API Manager offers tools for monitoring API performance, such as the number of requests, response times, and errors. This information allows developers and administrators to monitor API usage, identify any performance issues, and take corrective action.

The architecture, based on Kong technology, is divided into several key components that interact to provide comprehensive functionality to users:

- *Front-end* → administration clients and graphical interfaces (Admin GUI, Dev Portal) accessible via browser or dedicated applications, which allow users to configure services, manage users, and monitor metrics in real time.
- *Back-end Kong Control Plane* → manages configurations, policies, plugins, and API orchestration.
- *Back-end Data Plane* → routes user requests to back-end services, applying security rules, transformations, caching, and rate limiting.
-* Database* → stores configurations, users, roles, statistics, and logs. Supports replication and high availability capabilities to ensure resilience and business continuity
- *Integrations* → supports integrations with development tools, CI/CD, monitoring systems, and project management platforms, allowing Kong to be incorporated into existing enterprise workflows.
- *Security and Authentication* → offers advanced security options, including multi-factor authentication, support for enterprise protocols (OIDC, SAML, LDAP), and granular access control, ensuring data protection and compliance with corporate standards.

The service is offered for a *unit size of 500 MB of API requests*.

The service offers the following advantages:

- *Reduced time to market* → APIs can be published and managed quickly without building the infrastructure from scratch.
- *Flexibility and scalability* → the platform grows with business needs, supporting traffic spikes or new integrations without disruption.
- Reduced operating costs → no hardware or maintenance investments: infrastructure management is delegated to the PaaS provider.
- *API monetization* → ability to create API-driven business models (e.g., exposing APIs to partners or customers with pricing plans).
- *Enhanced security and compliance* → secure management of APIs and traffic between services, with authentication, authorization, and rate limiting policies, protecting the infrastructure from unauthorized access.
- *Open ecosystem* → Facilitates partnerships and innovation thanks to an API-ready and standardized infrastructure.

<a id="Jboss"></a>

### Jboss as a Service

![Jboss As A Service](assets/images/extract/media/JBoss.png)

#### Services Description

The service is based on an open source platform for running and managing Enterprise Java applications, designed to offer reliability, scalability, and flexibility in modern environments. 
It allows to run Java EE/Jakarta EE applications and microservices, providing a robust environment for business logic, data persistence, and transaction management.  
It allows to manage the application lifecycle, including deployment, updates, rollbacks, and centralized configuration, ensuring secure and repeatable processes.  
Thanks to its modular architecture, compatibility with cloud environments, and rich integration with automation and security tools, it represents a strategic solution for companies seeking efficiency, innovation, and operational control.

#### Features and Advantages

JBoss offers a robust, high-performance, and secure environment for developing and managing enterprise applications, providing a stable foundation for the growth and evolution of enterprise systems.  
The main features and functionalities of the service are:

- *Security and Compliance* → manages security, authentication, authorization, and data protection.
- *Web Services* → JAX-RS, JAX-WS, creation and management of RESTful and SOAP APIs for service integration.
- *Microservices Management* → MicroProfile, a set of specifications optimized for developing microservices-based applications. Includes features such as configuration, resiliency, monitoring, and metrics.

The architectural components of the service are as follows:

- *Front-end* → administration interfaces (Web Console, CLI) accessible via browser or terminal, which allow administrators to manage configurations, deployment, resources, and monitoring.
- *ack-end* → the server core manages application execution, request processing, resource management (datasources, JMS queues, batch, etc.), and integration with external systems via resource adapters and connectors.
- *Database* → integrates with relational and NoSQL databases via configurable datasources, used by applications for data persistence.
- *Security and Authentication* → offers an advanced security subsystem for authentication, authorization, encryption, and auditing. It supports authentication via LDAP, Kerberos, SSO, and integration with external identity providers, ensuring secure access that complies with corporate standards.

The service is sized per node. Each node consists of:
- 4 VCPUs
- 8 GB of RAM

The service offers the following advantages:

- *Reduced time to market* → application lifecycle automation, centralized management, and easy integration with DevOps pipelines reduce development and release times, accelerating response to market needs.
- *Reduced operating costs* → centralized resource management and the platform's modularity optimize the use of existing infrastructure, reducing waste and operating costs.
- *Security posture* → security policies can be defined and applied consistently across all applications, reducing risk and ensuring regulatory compliance.
- *Faster innovation* → management tools (CLI, Web Console, REST API) and automated deployment and configuration processes reduce the operational burden on IT teams.
- *DevOps integration* → integrated CI/CD pipelines for build and deployment.

<a id="RT-runtime"></a>

### Red Hat Runtime Subscription Service

![Red Hat Runtime Subscription Service](assets/images/extract/media/runtime.png)

#### Services Description

The service offers a set of products, tools, and components for developing and managing cloud-native applications (Red Hat Runtimes), providing runtimes and frameworks for distributed cloud architectures based on microservices.  
Red Hat Runtime Subscription is not a standalone service but enables technical support, regular updates, and security patches for other purchased Red Hat products, such as Jboss, and OpenJDK builds for servers/workstations.  
It should be purchased if you are opting for the Red Hat technology stack for your solution and intend to receive support, especially in production environments.

#### Features and Advantages

The main features and functionalities of the service are:

- *Enterprise runtimes and middleware* → provides access to a curated suite of Red Hat runtimes, such as: Red Hat JBoss EAP (Enterprise Application Platform), Red Hat Quarkus for Java microservices, Red Hat Spring Boot support, Red Hat Single Sign-On (Keycloak-based), Red Hat Data Grid / Infinispan, Red Hat AMQ (messaging and event streaming). Enables deployment of modern and legacy applications using certified, tested environments.
- *Managed licensing and subscriptions* → provider handles subscription activation, renewal, compliance, and updates. No need to purchase or maintain Red Hat subscription keys. On-demand allocation based on runtime consumption.
- *Automated updates, patches, and security fixes* → the platform applies security patches, CVE fixes, and bug updates. Ensures runtimes remain compliant with Red Hat lifecycle policies. Reduces operational risk and vulnerability exposure.
- *Integration with cloud platforms* → fully compatible with: Kubernetes / OpenShift, VMs & compute instances, CI/CD pipelines, service meshes and cloud networking. Ensures smooth deployment of hybrid cloud applications.
- *Performance and scalability* → runtimes automatically scale with underlying cloud infrastructure. Suitable for enterprise workloads, microservices, and high-throughput applications.
- *Enterprise support* → access to Red Hat enterprise support channels via the provider. Error diagnostics, best-practice guidance, and runtime optimization. Correlated support across cloud resources and runtimes.
- *Compatibility and certification* → ensures applications run on Red Hat-certified stacks. Guarantees compatibility with Java specifications, APIs, and Red Hat ecosystems.
- *Monitoring and observability* → runtime metrics, logs, and traces integrated into cloud monitoring tools. Helps diagnose performance issues and optimize applications.
- *Zero infrastructure management* → no need to provision runtime servers manually. Platform handles provisioning, configuration, scaling, and lifecycle management.

The architectural components of the service are as follows:

- *Runtime delivery platform* → central system that deploys and manages Red Hat runtimes. Handles dependency resolution, versioning, and configuration templates.
- *Subscription management layer* → integrates with Red Hat subscription services. Tracks usage, entitlements, and compliance. Fully automated lifecycle (activation to renewal).
- *Cloud-native execution environment* → supports runtime execution on: containers (Kubernetes/OpenShift), virtual machines, PaaS compute platforms. Provides isolation, scaling, and security boundaries.
- *Security & compliance layer* → applies Red Hat-certified security baselines. Ensures compliance with enterprise and regulatory standards. Integrates with identity and access management systems.
- *Control plane* → It manages: deployment configurations, runtime policies, scaling rules, patch rollout, integration with CI/CD pipelines
- *Data plane* → It executes application workloads: microservices, transactional applications, messaging and event-driven systems, data grids and caching services, Optimized for high throughput and low latency.
- *Monitoring & logging layer* → centralized metrics and log collection. Health monitoring of runtimes and containers/instances. Alerting and diagnostics tools.

The service is sized for single subscriptions.

The service offers the following advantages:

- *Reduced complexity and operational burden* → no need to manage Red Hat subscriptions manually. Automated runtime provisioning, updates, and patches.
- *Enterprise-grade security and compliance* → guaranteed access to certified runtimes with continuous security fixes. Reduces vulnerability exposure and compliance risks.
- *Faster development and deployment* → ready-to-use, standardized runtime environments. Developers focus on applications, not runtime configuration.
- *Cost efficiency* → eliminates upfront licensing costs and overprovisioning.
- *High performance and scalability* → runtimes scale automatically with cloud infrastructure- Optimized for enterprise workloads and microservices.
- *Consistency across environments* → uniform runtime versions across dev/test/prod environments. Reduces errors caused by environment drift.
- *Access to enterprise support* → Red Hat-backed support ensures stability and reliability. Faster issue resolution and expert guidance.
- *Improved application reliability* → certified runtime stacks with automated health checks. Reduces downtime and improves service continuity.
- *Modernization of legacy applications* → allows migration from traditional application servers to cloud-native runtimes. Supports Java EE/Jakarta EE and modern microservices frameworks.
- *Accelerated hybrid and multi-cloud adoption* → consistent runtime environment across cloud and on-prem systems. Simplifies application portability and modernization strategies.

<a id="spring-boot"></a>

### Spring boot as a Service

![Spring boot as a Service](assets/images/extract/media/Spring.png)

#### Services Description

This service allows you to use Spring Boot, an open-source framework for Java application development, as a managed service.  
It is designed to simplify the development of production-ready Java applications by providing a platform that eliminates much of the manual configuration required by the traditional Spring framework and reduces the need for server provisioning and dependency management.  
With a preconfigured environment optimized for the Spring Boot framework, the service allows teams to focus on developing business features, reducing release times and costs.  
It integrates with DevOps tools and leading cloud services, offering scalability, managed updates, and continuous monitoring.

#### Features and Advantages

The main features and functionalities of the service are:

- *Automatic environment provisioning* → automatic configuration of Java runtime (JDK), integrated application server, and Spring Boot framework. No need to manually configure build environments or containers.
Simplified deployment → ability to directly upload a JAR or source code (e.g., via Git, API, or CI/CD pipeline).
- *Scalability* → horizontal (replication) and vertical (CPU/RAM resources) scaling managed by the PaaS based on load.
- *Integrated monitoring and logging* → access to runtime metrics (CPU, memory, latency, throughput); centralized logs (stdout/stderr) accessible via console or API; integration with BI tools (Prometheus, Grafana, etc.).
- *Configuration and secret management* → centralized configuration (environment variables, Spring Cloud Config, or Vault); secure management of credentials, tokens, and keys.
Integrated support services → easy connection to managed databases (PostgreSQL, MySQL, MongoDB); support for messaging (RabbitMQ, Kafka), caching (Redis), and storage; automatic service binding via environment variables or injection.
- *DevOps integration* → support for CI/CD pipelines; continuous deployment (Continuous Deployment) and automatic rollbacks; compatibility with tools such as GitHub Actions, Jenkins, GitLab CI.
- *Security and isolation* → each application is isolated (namespace, container, or dedicated VM); HTTPS/TLS by default, identity management, and integration with authentication systems (OAuth2, SSO).

The solution is based on the following architectural layers:

- *Infrastructure layer* → provides the hardware and virtual resources needed to run application containers (Compute nodes, Storage, Networking, Security layer); automatic provisioning via IaC (Infrastructure as Code).
- *Orchestration layer* (Platform Runtime) → manages the lifecycle of Spring Boot containers, from deployment to monitoring, ensuring availability, replication, and load balancing
- *Application layer* (Spring Boot Runtime) → Spring Boot runs within a container; supports Actuator endpoints for health checks and metrics; exposes HTTP/REST APIs on predefined and configurable ports
- *Management layer and PaaS services* → web dashboard or CLI to manage applications, versions, and resources. REST API for automation (deployment, scale, logs, metrics). Integration with external logging and monitoring systems.

The service is sized for single containers. Each container has 16 GB of storage.

The service offers the following advantages:

- *Reduced time to market* → Deployment automation and simplified environment management allow applications to be brought into production more quickly.
- *Reduced operating costs* → No hardware or maintenance investments: infrastructure management is handled for the customer.
- *Observability and monitoring* → Preconfigured tools to track performance, errors, and response times.
- *Guaranteed security* → Automatic patch and update management.
- *Environment consistency* → Same environments for development, testing, and production.
- *Microservices support* → Simplified management of distributed architectures.

<a id="BPM"></a>

### Business Process as a Service

![Business Process as a Service](assets/images/extract/media/BPM.png)

#### Services Description

It is a comprehensive Business Process Management (BPM) platform that helps companies model and automate complex processes, improve productivity and service quality, and ensure control, traceability, and flexibility in an integrated and scalable environment.  
It combines workflow automation, application integration, and performance monitoring in a single solution. The goal is to improve operational efficiency, reduce execution times, and ensure process consistency across the organization.  
It facilitates collaboration between business users and IT during the creation, management, validation, and deployment of customized process and decision automation solutions. Business users can modify business logic and business processes without requiring assistance from IT staff.

#### Features and Advantages

The main features and functionalities of the service are:

- *Process Modeling & Simulation* → allows business analysts and developers to collaborate on process definition using a standard language (BPMN 2.0) with drag-and-drop tools.
- *Process Automation & Orchestration* → allows for the automation of repetitive tasks and decision rules.
- *Human Workflow Management* → automatic assignment of tasks based on roles, priorities, and workloads. Intuitive user portal for completing, delegating, or commenting on tasks.
- *Monitoring, Reporting & Optimization* → real-time dashboard for performance analysis based on KPIs and SLAs, reporting, optimization recommendations through predictive analytics, and historical data.
- *Security & Governance* → integrated authentication with LDAP/Active Directory. Granular roles for users and groups (process owner, approver, admin). Complete audit trail for compliance and traceability. Version control and approvals prior to deployment.
- *Cloud & DevOps Integration* → offered as a managed cloud service. Integration with CI/CD pipelines and DevOps tools.

The service, based on IBM technology, is organized into the following integrated modules that cover the entire process lifecycle—from modeling to performance measurement.

- *Process Designer* → Visual process modeling tool.
- *Process Center* → Centralized repository and collaborative environment, allows you to manage multiple versions of processes, reuse common components, and collaborate across multiple teams.
- *Process Server* → Process execution engine. Manages both human and automated tasks.
- *Process Portal* → User portal for receiving, executing, or approving tasks.
- *Performance Data Warehouse (PDW)* → Performance collection and analysis system, stores process execution data and enables historical analysis and real-time monitoring.

The service is sized for each 8 cores.

The service offers the following advantages:

- * Operational efficiency and cost reduction* → automation and reduction of manual and repetitive tasks, resulting in reduced personnel costs, errors, and inefficiencies.
- *Transparency and control* → end-to-end visibility. Each process is tracked in real time. Increases accountability and control.
- *Quality and standardization* → consistent and compliant processes. Ensures processes are always executed consistently, reducing deviations and variability.
- *Compliance and auditability* → complete traceability for audits and regulatory compliance. Every step and decision is documented, facilitating internal controls and regulatory compliance
- *Monitoring and observability* → integrated dashboards and analytics.

<a id="CMS"></a>

### Content Management Systems (CMS) as a Service

![Content Management Systems (CMS) as a Service](assets/images/extract/media/CMS.png)

#### Services Description

The service, based on Wordpress, provides comprehensive and versatile tools for creating and managing websites and blogs based on CMS (Content Management System) solutions, which are cloud-based Content Management Systems (CMS) delivered as a service, without having to install or maintain software on your own server.  
It offers a centralized system that allows for scalable, integrable, and multi-channel content management, with consumption-based costs and no infrastructure overhead.  
This allows users to focus solely on content creation and management, while the platform handles hosting, maintenance, and updates.

#### Features and Advantages

The main features and functionalities of the service are:

- *Website creation* → content publishing.
- *Content management (CMS)* → ability to create, edit, and delete content.
- *Intuitive user interface* → easy content access.
- *Customization via themes and plugins* → layout management and use of plugins for customization
- *SEO-friendly* → search engine visibility.
- *Flexibility and scalability* → adaptability based on needs.
- *Open Source and Community* → collaboration with the online community.
- *Accessibility* → tools to improve readability, contrast, keyboard navigation, and compliance with accessibility standards for users with disabilities.

The service is offered for license unit. Each license consists of 1000 users.

The service offers the following advantages:

- *Accelerated time to market* → rapid launch of websites and apps.
- *Reduced operating costs* → no servers or internal maintenance. High availability and resilience.
- *Support for omnichannel strategies* (web, mobile, e-commerce, IoT).
- *Ability to operate in multiple markets* with multilingual websites.
- *Simplified collaboration* for distributed teams.
- *Continuous innovation at no additional cost* → new features released by the provider.
- *Native integration with cloud services* (CRM, analytics, AI, CDN).
- *Front-end/back-end separation* → freedom to use modern frameworks (React, Vue, Angular, etc.).

<a id="semantic-search"></a>

### Semantic Knowledge Search - 1 Worker

![Semantic Knowledge Search Service](assets/images/extract/media/Semantic.png)

#### Services Description

A service developed by Leonardo that provides a ready-to-use platform that makes information contained within the information assets easily accessible, using a semantic search engine capable of interpreting natural language queries in different languages.  
It considers the search context, word variations, and synonyms to find relevant results from a semantic database for a given domain based on a user's natural language query.  
The service allows for the management of content in various formats (Word documents, PDFs, PowerPoint presentations, emails, images, etc.) through an upload service capable of inferring and processing the document type.  
The tool is able to filter and select the most relevant information for the user through the use of an NLP (Natural Language Processing) model, also allowing complete navigation of the indexed document. The services are designed to ensure digital sovereignty through deployment on a secure national infrastructure, with a particular focus on latency and optimization of computational resources.  
It allows users to enter feedback on individual results returned by the search engine, in order to take into account domain knowledge to better refine the results provided by the system.

#### Features and Advantages

The platform bases its semantic search methodology on a database of carefully selected internal information sources, as well as on feedback from system users.  
This way, the results produced will prove significantly more effective, as the output of an IT tool will be combined with the assessments of domain experts.  
The platform will allow users to:

- Submit natural language queries in different languages.
- Reduce information search times, which will no longer be based on manual consultation of documentation, but will instead benefit from the efficiency of AI
- Optimize the tool and share the experiences of individual operators through the feedback system.

The main components of the service are:

- *Client App* → user-friendly frontend through which users can interact to submit questions in different languages, find documents relevant to the question, narrow the search field through relevant metadata, submit feedback, and index their documents by uploading one or more files.
- *FastAPI Framework* → modern, fast (high-performance) web framework for creating APIs with Python, based on the OpenAPI and JSON Schema standards.
- *Bidirectional Encoder Representations from Transformers* → pre-trained deep learning models that provide a foundation upon which to build custom versions to address a wide range of tasks. Examples include sentiment analysis, named entity recognition, text engagement (i.e., next sentence prediction), semantic role labeling, text classification, and coreference resolution.
- *Apache Tika* → Software for data extraction, language identification, and content analysis. It can find and extract text and metadata from over a thousand file formats.
- *OpenSearch* → A distributed search engine that provides extremely fast full-text search capabilities and high-performance indexing of all data types. Interaction with the search engine occurs via REST API technology.

Each unit consists of a 26-core 2.70 Ghz physical processor with a 1:2 virtualization ratio - SSD disk.

The service offers the following advantages:

- *Faster and more informed decisions* → teams have easier access to corporate knowledge, reducing analysis and decision-making time.
- *Better use of information assets* → implicit or distributed knowledge within corporate silos (documents, emails, databases, CRM, etc.) is made searchable and semantically linked, reducing the loss of know-how or information dispersion.
- *Reduced operating costs* → PaaS eliminates the need to manage proprietary infrastructure for indexing, NLP, and data linking.
- *Innovation and competitive advantag*e → differentiate products and services with a more intelligent user experience.
- Accelerated time to market → PaaS services are ready to use and easily integrated via API, allowing for the rapid development of new knowledge-driven applications.
- *Simplified scalability and management* → manage provisioning, updates, load balancing, and fault tolerance.
- *Access to advanced AI/NLP technologies* → semantic engines based on embeddings, ontologies, graph search, and machine learning without having to implement them internally. - Continuous updates with the latest developments.
- *Multi-source integration* → Semantic Knowledge Search PaaS allows you to connect structured and unstructured data from multiple sources and supports standard connectors (REST API).
- *Managed security and compliance* → authentication, authorization, and encryption are integrated into the service.

## Data Protection Family

Below is the list of services belonging to Data Protection family:

- [Backup - PLATFORM](#backup)

<a id="backup"></a>

### Backup - PLATFORM Service

![Backup - PLATFORM Service](assets/images/extract/media/backup.png)

#### Services Description

The PaaS Backup (Veeam-based solution) is a fully managed platform service that provides automated, secure, and reliable data protection for virtual machines, cloud workloads, and application data.  
The service ensures consistent backups, rapid restores, and long-term retention without requiring customers to deploy or maintain backup servers, storage repositories, or complex scheduling policies.  
The solution is designed for enterprise-grade data protection, offering backup automation, disaster recovery enablement, policy-based lifecycle management, and secure multi-tenant separation within cloud environments.

#### Features and Advantages

The service offers the following key features:

- *Automated VM and cloud resource backup* → Protects: virtual machines, cloud instances, application data, OS and configuration states. Supports image-level and incremental backups for optimal efficiency.
- *Policy-based backup management* → Create backup policies defining: scheduling, retention periods, backup types (full, incremental, differential), storage tiers. Ensures consistent and compliant protection across environments.
- *Application-consistent backups* → supports VSS-based and application-aware backups for: databases (SQL, Oracle, etc.), Active Directory, file systems, transactional workloads. Guarantees recoverability and data integrity.
- *Multiple restore options* → Full VM restore, instant recovery to cloud infrastructure, file-level recovery, application or database item-level restore, cross-region or cross-environment recovery
- *Backup storage flexibility* → uses managed backup repositories within the cloud. Tiers include: performance storage (for fast restore), capacity storage (for long-term retention), archival storage (optional)
- *Immutable and secure backups* → optional immutability features for ransomware protection. Write-once, read-many (WORM) retention policies. Encrypted transport and encrypted-at-rest repositories.
- *Monitoring and reporting* → dashboards for job success, failures, and SLA compliance. Alerts for - *Disaster recovery integration* → supports replication features for DR strategy. Enables fast failover to cloud environments. Provides restore testing and verification tools.
- *Zero infrastructure management* → No need to deploy backup servers or agents manually. Provider handles: scaling, patching, repository management, backup infrastructure health.

The main components of the service are:

*Backup management cluster* → centralized system orchestrating all backup operations. Handles scheduling, job execution, and policy enforcement. Highly available and fully managed by the provider.
- *Backup proxies and data movers* → distributed components that handle data transfer. Optimize performance by offloading backup/restore workloads. Integrated with cloud virtualization platforms.
- *Backup repository layer* → Multi-tier repository infrastructure for: short-term storage, long-term retention, immutable storage. Redundant and scalable for large data volumes.
- *Control plane* →  Manages: backup policies, job configurations, user permissions and multi-tenancy, SLA definitions, reporting and analytics, API-driven automation.à
- *Data plane* → responsible for: VM snapshot creation, data extraction and compression, transport - *Security & compliance layer* → encryption in transit and at rest. Tenant isolation at storage and management layers. Compliance with data protection standards (GDPR, ISO, etc.).
- *Observability & alerting layer* → real-time monitoring of backup/restore jobs. Alerts on job failures, capacity issues, and SLA violations. Audit logs for operations and access tracking.

The service is offered for single TB sizing.

The service offers the following advantages:

- *Reliable and consistent data protection* → ensures all virtual machines and data are continuously protected. Reduces risk of data loss and improves operational resilience. 
- *Simplified backup management* → fully managed service eliminates infrastructure complexity Policy-based automation ensures compliance and consistency.
- *Fast and flexible recovery* → instant VM recovery dramatically reduces downtime. Granular restore options improve operational efficiency.
- *Ransomware resistance* → immutable backups prevent malicious modification or deletion. Secure repository design strengthens recovery posture.
- *Cost efficiency* → no need to purchase backup servers, licenses, or storage hardware.
- *High scalability* → handles growing workloads and storage needs. Suitable for expanding cloud environments and hybrid infrastructures.
- *Improved compliance and governance* → detailed reporting supports audits, SLA measurement, and regulatory compliance. Centralized retention policies ensure consistent data handling.
- *Unified protection across hybrid environments* → protects both cloud and on-prem workloads (if extended). Supports modernization and migration scenarios.
- *Reduced operational overhead* → provider manages infrastructure, maintenance, patching, and upgrades. IT teams focus on core applications instead of backup operations.
- *Business continuity enablement* → integrates with replication and DR features. Supports failover during incidents or migrations.

## Infra & Ops Platform Family

Below is the list of services belonging to the Infra & Ops Platform family:

- [Multicloud Management Platform](#SCMP)
- [Control Room as Service](#control-room)
- [IT infrastructure Service Operations (Logging & Monitoring)](#ITops)
- [PaaS Ticket Management Service](#ITSM)

<a id="SCMP"></a>

### Multicloud Management Platform

![Leonardo Secure Cloud Management Platform (SCMP)](assets/images/extract/media/SCMP.png)

#### Services Description

Secure Cloud Management Platform (SCMP) is a Multicloud management software platform, designed by Leonardo, for governance, lifecycle management, brokering, and resource automation in hybrid and multi-cloud environments.  
It offers a self-service portal with a unified service catalog, governance, and customizable dashboards and reports to monitor infrastructure performance and costs.  
The platform allows to orchestrate, monitor, and control usage, costs, and workflow performance in complex or hybrid multi-cloud environments.  
It integrates seamlessly with leading Enterprise Cloud Service Providers, On-premise resource virtualization and edge computing systems.  
It can also manage self-service provisioning of resources: e.g., virtual machines (VMs), storages, clusters, containers, services, complex applications (such as blueprints), or entire application stacks (IaaS, PaaS, CaaS).  

#### Features and Advantages

The service offers the following key features:

- *High compatibility and integration* → integration with major CSPs (AWS, Azure, GCP, Oracle, etc.), virtualization and on premise vendors and systems (VMware, OpenStack, HPE, Nutanix, Hyper-V, bare metal, PXE provisioning), and container orchestration systems (Kubernetes). Integration with third-party systems (e.g., ERP) to offer process automation.
- *High level of granularity and customization* → the platform offers various graphical views for monitoring and reporting, to meet the needs of each user and team. You can choose whether to have aggregate views and reports by system/subsystem, or by element type or individual element.
- *Performance and cost monitoring* → through integrated, unified, and intuitive dashboards, users can monitor the current and forecasted status of systems, subsystems, and related resources in terms of resource usage and generated costs. Views can be presented in graphical form with custom tables or graphs, or through the creation of reports, which can be exported in various formats or sent to users periodically. The platform manages the monitoring of aggregate and/or resource/team/cloud costs and enables predictive cost analysis (what-if analysis) to identify waste, comply with recommendations (e.g., resizing, rightsizing), implement budget guardrails, etc.
- *Self-Service Catalog and Item Provisioning* → authorized users can create and manage their own catalog to orchestrate and manage the various elements within it. For example, an authorized user can deploy new infrastructure resources (e.g., VMs, storage resources, network resources, etc.) to the desired CSPs, launch or modify standard or custom services, pre-configured environments, and blueprints (both proprietary and IaC).
- *Multicloud security monitoring* → thanks to compatibility with existing security systems and appliances (e.g., SIEM, Key Vaults, Remote attestation for confidential computing, etc.), you can centrally manage your organization's security posture, detecting any vulnerabilities, discrepancies, or non-compliance on the systems or resources monitored by the platform.
- *Data and User Security Management* → the platform does not process customer data, but only the use of CSP services and/or resources. Identity and access management (IAM) mechanisms are foreseen with the implementation of MFA and RBAC authentication logics, compliant with the principle of least privilege, to regulate access to IT resources and related information based on roles, responsibilities and authorization levels.

The main components are:

- Abstraction Layer (ABS) → lowest platform layer that executes operational workflows towards integrated CSPs.
- Resource Layer/Manager (RM) → highest platform layer responsible for executing user requests. It is composed of the following modules:
    - Costs: module responsible for managing and displaying resource costs.
    - Security: module responsible for managing and displaying security policies and resource compliance status.
    - Monitoring: module responsible for managing and displaying resource usage metrics.
    - Inventory and Catalog: modules responsible for managing and displaying all allocated and available resources.
    - Provisioning: module responsible for the automation and provisioning logic of resources and other services.
    Tenant: Module responsible for multi-tenant service management and external operational requests
- Persistence Layer → NoSQL database (MongoDB) used by the RM to store normalized data retrieved from the respective ABS submodules.
- Integration and Communication Layer → facilitates and orchestrates asynchronous information communication between the ABS and RM modules of the system; allows the ABS submodules to interact with the various APIs of the respective CSPs and external systems
- Security and Authentication Layer → access management and encryption of sensitive data from provider systems.

The service is sized and offered based on volumes:
- less than €1.000.000,00 in annual managed resource expenditure for Cloud resources. 
- every 5120 GB of managed RAM for on-premise or hybrid resources.

The service offers the following advantages:

- *Simplify the management of heterogeneous and complex IT infrastructures* → centralizes resource management across multiple clouds or hybrid infrastructures, simplifying visibility, management, and control of distributed resources.
- *Scalability and flexibility* → identifies the most suitable IT services and resources at the time, continuously adapting to business needs.
- *Cloud expense optimization* → enables constant monitoring and optimization of current and forecasted IT infrastructure expenses.
- *Agility and speed* → on-demand resource allocation and automation of daily operations (e.g., resource management, configuration, scaling) reduces provisioning times and the workload for IT groups.
- *Faster and more informed decisions* → guides IT development strategy with a data-driven approach.
- *Reduced time to market* → reduces the time required to develop and deploy new applications, improving time to market and accelerating response to market needs.
- *Improves the reliability of services and processes *→ governance, security, and compliance policies can be centrally managed, ensuring that Resources are protected and regulations are complied with.
- *IT Operations Support* → can be integrated with IT service management (ITSM) and IT operations automation tools (such as Ansible, Chef, SaltStack), improving service quality and reducing manual errors.

<a id="control-room"></a>

### Control Room as Service

![Control Room as Service](assets/images/extract/media/X2030.png)

#### Services Description

The service, developed by Leonardo, involves the adoption of a next-generation platform that aims to provide a comprehensive and innovative response to large urban centers, police forces, large utilities, and organizations that monitor and manage critical infrastructure.  
This platform is a multi-source, multi-environment system for aggregating, analyzing, and processing data in near real time across multiple application domains.  
It can leverage existing and installed sensor networks, such as security cameras, hydrogeological detection systems, or fire prevention systems, integrating data with open sources such as social networks, drone monitoring, and satellite data. It can also utilize artificial intelligence algorithms to produce real-time information.  
This way, operators in the command center and in the field can make decisions quickly and effectively via Leonardo's professional communications networks (DMR, TETRA, and 5G).

#### Features and Advantages

The service offers the following main features:

- *Integration with heterogeneous and multimodal sources* → the platform enables the integration, interaction, and acquisition of data from various heterogeneous and diverse sources, systems, sensors, or other existing and third-party objects (e.g., on-board cameras on air and ground vehicles, satellite images, IoT sensors, social media, applications, etc.), enabling complete and versatile situational awareness.
- *Intelligent processing* → the system integrates various appropriate Big Data and AI algorithms to create a real-time or predictive decision support system.
Georeferencing → The acquired information, once appropriately normalized and processed, can be displayed and localized on different levels of cartographic maps for a unified view of the situation.
- *Simplified interaction with operators* → the information and detected events are displayed to control operators in a graphical and personalized manner (e.g., alert and notification management), enabling intuitive and simplified interaction.
- *Coordination with Communication systems* → allows you to integrate and coordinate field resources by leveraging the radio network (RIM/DMR) or mobile networks (DMR, TETRA, and 5G).
- *Activity tracking* → the tracking system records and archives all detected and displayed activities (maintenance, training, events).

Architecturally, the platform has a microservices software architecture composed of multiple layers:

- *Integration layer* → includes all sensors and subsystems that acquire information from the field and is capable of performing initial processing according to domain-specific logic.
- *Core layer* → the core of the system, where data and events from the integration layer are collected via a microservices infrastructure and made available to the various processing engines to generate the overall situation.
- *Presentation layer* → based on an innovative graphical interface designed to present information to the operator in a simple, comprehensive, and effective manner. The use of a GIS (Geographic Information System) allows for the georeferencing of all information and activities, including interactions with integrated subsystems.

The service offers the following advantages:

- *Improved risk management and business continuity* → reduced response times to incidents and crises, increased overall organizational resilience.
- *Cost optimization* → centralizing monitoring activities reduces the need for distributed resources across the territory and improves planning and resource utilization.
- *Improved image and reputation* → rapid and coordinated response capabilities, more transparent and timely external communication.
- *Data-driven strategic decisions* → continuous collection of spatial data (weather, traffic, IoT sensors, social monitoring), historical and predictive analysis to support long-term investments and planning.
- *Compliance and governance* → Compliance with regulations on safety, civil protection, the environment, or infrastructure management. Complete audit trail and traceability of decisions and interventions.
- *Integrated and real-time monitoring* → Integration of heterogeneous sources, centralized visualization in static or dynamic maps, automatic notifications and configurable alerts for anomalies or critical events.
- *Efficient operational coordination* → can enable multi-agency collaboration (e.g., law enforcement, civil defense, utility companies, etc.) and create standardized procedures for event management.
- *Shorter problem resolution time* → thanks to the details provided (tracing, distributed diagnosis, code, database, and network visibility).
- *Automation and artificial intelligence* → automatic recognition of patterns or anomalies (e.g., through video analytics or generative AI), automatic generation of intervention or escalation plans, improving forecasting and response capabilities over time.
- *Traceability and reporting* → complete recording of events, decisions, and actions taken.

<a id="ITops"></a>

### IT infrastructure Service Operations (Logging & Monitoring)

![IT infrastructure Service Operations (Logging & Monitoring) interface](assets/images/extract/media/ITops.png)

#### Services Description

This is an Application Performance Monitoring (APM) service that monitors and controls infrastructure performance supporting applications (e.g., latency, errors, service availability) and workloads deployed in the Cloud environment.  
It provides centralized collection and analysis across various infrastructure elements: Servers and VMs, Containers and orchestrators, Cloud providers, and Network.  
It provides AI-based analytics to prevent and resolve issues before they impact users.

#### Features and Advantages

The Log & Audit service built on OpenTelemetry provides a unified and vendor-neutral way to collect, process, and export observability data. Its core capabilities include:

The service offers the following main features:

- *Log collection & aggregation* → vaptures application logs, system logs, and security-relevant audit trails. Supports structured logging for consistent and machine-readable data.

- *Audit trail generation* → tracks user actions, configuration changes, and security-sensitive operations. Ensures immutability and integrity through standardized data formats and export pipelines.

- *Distributed tracing* → enables end-to-end traceability across microservices. Helps correlate logs, metrics, and traces for full-context auditability.

- *Metrics and performance data* → collects operational and performance metrics (CPU, memory, network, API latency). Correlates metrics with logs and traces for accurate diagnostics.

- *Policy-driven data processing* → allows filtering, sampling, redaction, and enrichment through OpenTelemetry Collectors. Ensures sensitive information is processed according to compliance policies.

- *Multi-destination export* → exports data to SIEM platforms, log analytics tools, data lakes, or object storage. Supports Elasticsearch, Splunk, Loki, BigQuery, and more.

The main components of the service are:

- *Instrumentation Layer* → applications and services instrumented using OpenTelemetry SDKs and auto-instrumentation agents. Generates logs, metrics, and traces in a standardized OTLP format.

- *OpenTelemetry collector* → central component responsible for: receiving data (logs, metrics, traces); processing/enriching it; exporting it to one or more backends.  
Can run as: a sidecar in Kubernetes, a daemonset on each node, a centralized collector cluster

- *Export & storage layer* → observability and security data is sent to: log storage (Elasticsearch, Loki, Cloud logging platforms); SIEM systems (Elastic SIEM, Splunk, Azure Sentinel); Audit archives (S3, GCS, object storage)

- *Visualization & analytics* → dashboards and visual tools such as: Grafana, Kibana, OpenSearch Dashboards, SIEM dashboards

- Support centralized log analysis, auditing, forensics, and compliance reporting.

The service is offered per package. Each package consists of 80 infra hosts with:

- an average of 32 GB RAM
- 20 apps with an average of 64 GB RAM
- 3 million trx
- standard support

The service offers the following advantages:

- *Improved security & compliance* → centralized audit trails simplify compliance with standards (ISO 27001, SOC2, GDPR). Enhanced visibility into user actions and critical events reduces risk.

- *Reduced vendors Lock-in* → OpenTelemetry is vendor-neutral, enabling freedom to switch backends without re-instrumenting code.

- *Better decision-making* → unified observability data supports data-driven product and business insights. Helps organizations identify usage patterns, performance bottlenecks, and customer-impacting issues.

- *Cost optimization* → policy-driven sampling and data routing help reduce storage and licensing costs. Ability to send different data types to cost-efficient storage tiers.

- *Unified observability pipeline* → Single consistent pipeline for logs, metrics, and traces reduces operational complexity.

- *Improved troubleshooting* → correlation of logs, metrics, and traces dramatically speeds up root cause analysis. Reduces MTTR (Mean Time To Repair).

- *Scalability & flexibility* → the OpenTelemetry Collector can be scaled horizontally to handle high data volumes. Supports multi-cloud and hybrid architectures natively.

- *Standardization across teams* → developers, SREs, and security teams use a common telemetry standard. Simplifies onboarding and reduces friction in cross-team operations.

- *Extensibility* → pluggable components allow integration with new tools or pipelines without redesigning the system.

<a id="ITSM"></a>

### PaaS Ticket Management Service

![Ticket Management Service](assets/images/extract/media/Ticket.png)

#### Services Description

The service offers tools for managing user requests, incidents, related problems, and the entire ticketing cycle.  
Intelligent automation: integrated AI functions (classification, knowledge suggestion, sentiment, and draft generation) reduce manual workload and speed up resolution.  
Self-service and multi-channel: users can open tickets via the portal or email and view their status. This promotes a good user experience.  
Integration with assets, services, and configuration: It can connect to the service catalog, CMDB, and asset management, making ticketing part of a broader IT management ecosystem.

#### Features and Advantages

The service, based on Matrix42, features a modular architecture, with components covering the user interface, workflow/automation engine, integration with external systems, databases, and reporting. It offers the following main features:

- *Incident and Service Request Management* → allows for the logging, classification, and resolution of incidents and service requests via a portal, email robot, or Service Desk agent.
- *Self-Service Portal and Service Catalog* → the portal allows users to request services, check ticket status, view announcements, and view knowledge/FAQs.
Workflow, Automation, and Low-Code Platform → offers a visual workflow builder (drag & drop) with no coding required to automate processes such as approvals, escalations, and ticket assignment.
- *Integrated Artificial Intelligence* → the "AI Assist" module automatically suggests ticket category, impact, and urgency, analyzes user sentiment ("user mood"), and suggests knowledge base articles or similar tickets ("resolution helper").
- *SLA Monitoring, Reporting, and Dashboards* → analyzes support processes, KPIs, and provides visibility into service desk performance.
- *Customization, Roles, and Permissions* → Supports the definition of user roles, granular permissions, filters, custom views, and dedicated dashboards. agents/managers.

The main components of the service are:

- *UUX (Unified User Experience)*: the platform's UI component, which unifies the web interface ("low-code solution") for users, agents, and administrators.
- SolutionBuilder: A low-code/"no-code" module for configuring/modifying layouts, views, data models, and interfaces. Allows interface and data customization without (much) code.
-* Workflow Studio / Designer / Worker Engine*: components for defining, managing, and executing workflows and automations.
- Database and storage: the platform uses multiple databases (e.g., "Master" database for operational data, "Data Warehouse" for analysis/reporting, "History Database" for logs and change history), typically on Microsoft SQL Server + Analysis Services + Reporting Services.
- *Integration / API / Data providers*: the platform supports integration with Active Directory/Azure AD, external databases, REST API, SOAP, flat files, and SQL for reading/writing.
- *Flexible deployment*: it can be delivered on-premise, in a public cloud, a private cloud, or a hybrid ("Cloud your way") to adapt to compliance, scalability, and geographic requirements.

The service is offered for a number of Service Desk operators. Each subscription is for 50 operators.

The service offers the following advantages:

- *Reduced operating costs* → thanks to process automation and a reduction in manual tasks, fewer repetitive interventions and a lower cost per ticket.
Increased support team productivity → thanks to workflow automation, the use of AI (for automatic classification, suggestions, pre-populated responses), and self-remediation, the manual burden on IT operators is reduced. The self-service portal and knowledge base enable self-resolution of many user issues.
- *Support for business decisions* → integrated reports and dashboards provide KPIs on average response times, resolution, ticket volumes by category, and seasonal trends.
- *Improved user experience* → users can open tickets, monitor status, and find solutions independently, reducing frustration and wait times. Furthermore, it fosters a collaborative and efficient environment between users and support teams, with agents viewing the same status in real time.
- *Improved control and governance of IT services* → provides a comprehensive view of assets, users, and services, supporting regulatory compliance and service level agreement (SLA) monitoring in a documented and traceable manner.
- *Native integration with the IT ecosystem* → possible integrations with SSO systems (e.g., Active Directory/Azure AD), UEM, Asset Management, Change Management, IT monitoring, HR systems, and others via API, reducing information silos and improving data quality.

<a id="operations"></a>

### PaaS Operations Management

![PaaS Operations Management Overview](assets/images/extract/media/operations.png)

#### Services Description

The PaaS Operations Management service provides a fully managed platform for monitoring, observability, incident detection, and operational oversight of IT infrastructures and applications.  
Based on Zabbix and NetEye, the service delivers enterprise-grade monitoring capabilities—such as telemetry collection, alerting, performance analytics, and event correlation—without requiring customers to deploy or maintain monitoring servers, databases, or agents.  
Designed for hybrid and cloud-native environments, the service centralizes monitoring for compute, network, storage, security, and application layers, ensuring full visibility and operational continuity.

#### Features and Advantages

The service offers the following main features:

- *Comprehensive infrastructure & application monitoring* → tracks the health and performance of: VMs, containers, hosts, and cloud resources, networks, firewalls, and load balancers, storage systems and databases, application services and APIs. Supports agent-based and agentless checks.
- *Centralized metrics, logs, and telemetry collection* → consolidates metrics, ping checks, SNMP data, application logs, and custom KPIs. Ensures unified observability across heterogeneous environments. Retains historical data for trend analysis.
- *Intelligent alerting & notifications* → event-driven alerts based on thresholds, anomalies, or dependency rules. Multi-channel notifications (email, SMS, webhook, ITSM integration). Avoids alert noise through suppression, deduplication, and escalation rules.
- *Event correlation and root cause analysis* → NetEye’s correlation engine groups related events. Identifies probable root causes across interconnected systems. Reduces mean time to detect (MTTD) and mean time to repair (MTTR).
- *Dashboards and visualization* → customizable dashboards for operations, NOC screens, and business KPIs. Visual representations of system health, topology maps, and SLA views.
- *SLA monitoring and reporting* → tracks service availability against SLA targets. Generates performance, capacity, and downtime reports. Supports compliance audits and service management.
- *Automated discovery* → auto-detects new cloud resources, VMs, hosts, network devices, and services. Automatically assigns monitoring templates. Keeps monitoring configuration aligned with dynamic environments.
- *Integration with ITSM and automation tools* → supports integration with ticketing systems (ServiceNow, Jira, etc.). Exposes APIs for orchestration and automated remediation workflows.
- *Zero infrastructure management* → no monitoring servers, databases, or scaling logic to manage. The provider handlespatching, backup, capacity, and high-availability.

The main components of the service are:

- *Zabbix monitoring cluster* → distributed monitoring cluster for data collection and event processing. Supports high availability and horizontal scaling. Responsible for metrics ingestion, - *NetEye observability and correlation layer* → enhances Zabbix data with event correlation and analytics. Adds long-term storage, dashboards, reporting, and advanced alerts. Integrates with log management and SIEM modules if required.
- *Data collection layer* → supports multiple collection methods: Zabbix agents, SNMP collector, API polling, log ingestion, push gateway metrics, cloud-native exporters. Ensures flexibility across heterogeneous environments.
- *Storage layer* → time-series storage for metrics (TSDB). Log and event indexing engines. Redundant and scalable architecture for long-term data retention.
- *Control plane* → manages: template management, alert rules, agent policies, discovery rules, user and permissions configuration, integrations and webhooks
- *Data plane* → collects telemetry from monitored systems. Processes events, evaluates triggers, and generates alerts. Streams metrics to dashboards and correlation modules.
- Visualization & reporting layer → provides dashboards, SLA reports, historical charts, and heatmaps. UI tailored for NOC operations and technical teams.
- *Security & multitenancy* → segregated monitoring domains per tenant or project. Secure role-based access controls (RBAC). Encrypted communication between monitoring agents and servers.

The service is offered and sized for every 25 simultaneous users.

The service offers the following advantages:

- *End-to-end visibility* → unified monitoring across cloud, on-prem, and hybrid environments. Central view of all operational metrics and services.
- *Faster detection and resolution* → intelligent alerts and event correlation reduce noise and improve detection. Lower MTTR thanks to root cause analysis and detailed telemetry.
- *No Infrastructure to manage* → fully managed service—no servers, DBs, or upgrades to maintain. Reduces operational burden on IT and DevOps teams.
- *Enhanced reliability and SLA compliance* → continuous monitoring ensures proactive issue identification. Supports SLA tracking and reporting for internal/external services.
- *Scalability and performance* → handles thousands of checks per second. Automatically adapts to growing or dynamic infrastructures.
- *Cost efficiency* → avoids the cost of deploying, licensing, and maintaining monitoring platforms.
- *Enterprise-grade security* → isolated tenant environments. Encrypted agent communications and secure data storage.
- *Improved operations and governance* → supports audit requirements with historical logs and performance reports. Ensures transparency and accountability in service operations.
- *Integration with ITSM and automation* → automatic ticket creation for incidents. Enables self-healing workflows and auto-remediation.
- *Better user and customer experience* → early detection prevents service degradation. Ensures smooth, predictable operation of business-critical applications.

##  DevSecOps Family

Below is the list of services belonging to the  DevSecOps family:

- [Configuration Manager](#config)
- [Test Automation](#test)
- [Quality Code Analysis](#quality)
- [DevSecOps As A Service](#devsecops)
- [Qualizer DevSecOps](#qualizer)

<a id="config"></a>

### Configuration Manager

![Configuration Manager Service](assets/images/extract/media/Config.png)

#### Services Description

The service, based on Red Hat Ansible Automation Platform, is a comprehensive automation solution for managing IT infrastructure, simplifying operations, and accelerating development and deployment processes.  
It is a platform that acts as a powerful and flexible configuration manager, helping organizations automate repetitive or manual tasks, implement complex configurations, and orchestrate workflows centrally and securely through a declarative and automated approach, ensuring consistency and improving overall operational efficiency and compliance.

#### Features and Advantages

The service offers the following main features:

- *Declarative automation* → use of playbooks to clearly describe the desired state of resources. Support for role-based automation, reuse, and modular configurations.
- *Centralized execution management* → task orchestration via Ansible Controller with scheduling, auditing, and notifications. Dashboards and reporting for real-time monitoring of automations.
- *Integration with DevOps pipelines* → support for CI/CD tools (Jenkins, GitLab, GitHub Actions, OpenShift Pipelines). Automatic execution of playbooks in response to events or code commits. Credential and secret management. Integration with Red Hat Ansible Vault, CyberArk, HashiCorp Vault, and other secret managers.
- *Scalability and multi-tenancy* → support for multi-organization environments with role and access segregation. Distributed execution via containerized Automation Execution Environments.
- *Compliance and security * → full operation logging and Role-Based Access Control (RBAC)-based access control. Compliance with corporate and regulatory security standards.

The service uses an agentless architecture and YAML-based playbooks to define, deploy, and maintain desired system states across various infrastructure components, including servers, networks, storage, and cloud resources. The main components of the service are:

- *Automation Controller* → Web interface and REST API for centralized automation management. Orchestration engine that coordinates playbook execution.
- *Automation Execution Environments (EE)* → standardized containers containing the Ansible runtime, modules, plugins, and specific dependencies. They enable portability and consistency of execution across different environments.
- *Automation Hub* → private repository for distributing content collections (modules, roles, plugins). It promotes reuse and version control of Ansible content.
- *Automation Mesh* → distributed architecture for scalable job execution on remote nodes or in the cloud. Ensures reliability and load balancing of automations
- *Inventory and Credential Store* → defines target systems (servers, VMs, containers, network devices, cloud services). Securely manages access credentials for each target or environment.
*APIs and Integrations* → RESTful API for integration with external monitoring, ticketing, or orchestration systems.

The service is offered and sized in units of 25 nodes each.

The service offers the following advantages:

- *Reduced operating costs* → automating repetitive and manual tasks reduces the time spent on system management and maintenance.
- *Increased reliability and service quality* → standardized and automated configurations reduce inconsistencies between environments (dev, test, prod).
- *Scalability of IT business* → the platform grows with the organization, managing hundreds or thousands of nodes without linear staff growth.
- *Improved IT compliance and governance* → all changes are tracked and documented, ensuring transparency and compliance with regulations and corporate policies.
- *Increased productivity and collaboration* → DevOps, IT Operations, and Security teams can work on a single shared platform, reducing organizational silos.
- *End-to-end automation* → from operating system configuration to application deployment, patch management, and ongoing maintenance.
- *Standardization and repeatability* → playbooks ensure consistent configurations and easy reuse of automation code.
- *Centralized and secure management* → a single interface (Controller) for orchestrating jobs, managing inventories, credentials, and access policies (RBAC). Secure management of credentials and secrets (Vault), centralized auditing, and support for enterprise authentication (LDAP, SSO, OAuth).
- *Distributed scalability* → job execution can be distributed across multiple nodes, improving performance and resilience.
- *Complete visibility and traceability* → dashboards and analytical reports allow you to monitor the effectiveness of automations and resource usage.

<a id="test"></a>

### Test Automation

![Test Automation Service](assets/images/extract/media/Test.png)

#### Services Description

The service is designed to automate software testing activities, with the goal of improving quality, reducing release times, and increasing development process efficiency.  
The solution uses the UiPath RPA (Robotic Process Automation) platform to automate software testing (functional, regression, API, user interface).  
It was created to support both IT and business teams in the continuous validation of applications, digital processes, and RPA robots to increase testing efficiency and ensure software integrity.  
It supports Agile and DevOps approaches with Continuous Testing to ensure code changes do not introduce new defects.  
Centralized monitoring: Test results are collected and displayed in a single interface, facilitating monitoring and analysis via UiPath Test Manager and extensible with dashboards on UiPath Insights.

#### Features and Advantages

The service offers the following main features:

- *Test automation for applications* → test automation for web, desktop, mobile, and API applications. Support for cross-browser and cross-platform testing.
Reuse of RPA components → automations developed in UiPath Studio can be reused as test cases. This reduces test creation time and costs.
- *Test Manager* → centralized tool for planning, executing, and monitoring tests. Dashboard with KPIs and integrated reporting.
- *DevOps Integration* → integration with CI/CD tools (Azure DevOps, Jenkins, GitLab, etc.). Ability to run tests in software release pipelines.
- *Scalability* → tests can be deployed to UiPath robots in parallel, reducing execution times.
- *Automated Continuous Testing* → "Shift-left" approach: quality is validated from the early stages of development. Ensures fewer bugs in production.

The main components of the service are:

- *Studio / Studio Pr*o → Development environment (IDE) for creating automated tests, similar to creating RPA workflows.
- *Orchestrator* → for scheduling, deploying, and running tests at scale.
- *Test Manager* → for managing requirements, organizing test suites, collecting metrics and reporting.
- *Robotic Test Execution* → UiPath robots become "digital testers," running tests autonomously.
- *Testing Robots* → Specialized test execution robots; support testing frameworks such as NUnit, MSTest, and Junit.
- *Insights *→ Manages the creation of dashboards for monitoring various testing processes; allows you to calculate the return on investment of initiatives.

The service is sized and offered per user units. Each unit is consists of: 1 tester, 10 automation users and 5 robots.

The service offers the following advantages:

- *Reduced software release times* → thanks to faster and more continuous testing cycles.
- *Improved software quality* → fewer bugs in production and reduced maintenance costs.
- *Reduced manual testing costs *→ less time spent on manual testing and more focus on strategic testing.
- *High Return on Investment (ROI)* → thanks to a single automation and testing platform.
- *IT-business alignment* → greater reliability and traceability of results.
- *Support for Agile and DevOps CI/CD approaches* with continuous validation.
- *Reduced risk of regressions* → more confident release of new features.
- *Multi-level test automation* (UI, API, mobile, desktop, SAP, Salesforce).
- *Controlled scalability* → assigned resources can be scaled horizontally or vertically to meet performance and operational needs.
- *Multi-platform support* (Web, Mobile, Mainframe, API, Enterprise systems).

<a id="quality"></a>

### Quality Code Analysis

![Quality Code Analysis Service](assets/images/extract/media/Quality.png)

#### Services Description

The service, based on SonarQube, offers public administrations a robust static code analysis tool, supporting software quality and integration into CI/CD processes.  
Thanks to its architecture and ability to integrate into the continuous development and analysis cycle, it enables the development of high-quality software and fully supports DevSecOps initiatives. The service also enables in-depth source code security analysis, detecting known vulnerabilities, injections, poor cryptographic practices, uncontrolled access, and potential exploits.  
Integrating directly into CI/CD pipelines or through supported DevOps platforms, it analyzes source code against a broad set of quality rules, covering aspects such as code maintainability, software reliability, and application security.

#### Features and Advantages

The service offers the following main features:

- *Static code analysis* → automatically scans source code with over 5,000 predefined or customizable rules. Supports over 30 languages.
- *Quality gates* → defines minimum quality thresholds (e.g., zero critical bugs, zero vulnerabilities, code coverage > 80%). If the code does not meet the criteria, the build is blocked, preventing the release of "dirty" software.
- *Bug and vulnerability Detection* → highlights issues that could cause runtime errors or security risks. Integration with OWASP Top 10, CWE, and SANS security rules.
- *Code smells & debt* → identify development practices that reduce readability or increase technical debt. Calculates an indicator of the time required to "clean up" the code.
- *Test coverage* → measures the percentage of code covered by unit tests. Helps identify critical untested areas.
- *DevOps integration* → can be integrated into CI/CD processes. Provides immediate feedback to developers throughout the development cycle
- *Reporting and dashboards* → interactive dashboards with KPIs on quality, security, and maintainability. Historical trends to monitor code quality evolution over time
- *Multi-branch & Pull request analysis* → analysis of specific branches and pull requests for immediate feedback before merging.

The main components of the service are:

- *SonarQube server* → core module of the service, responsible for running analyses, applying static verification rules, and centralized results management. It includes: analysis engine, quality gate engine, rule repository, user and permissions management, and RESTful APIs.
- *Database* → stores analysis results, active rules, and project history. Supports PostgreSQL, Oracle, SQL Server, and MySQL.
- *SonarScanner* → code analysis tool. It can be run locally by developers or integrated into CI/CD pipelines.
- *CI/CD Integration* → plugins and APIs available for Jenkins, Azure DevOps, GitLab CI, GitHub Actions, Bamboo, and TeamCity.
- *Security and Governance* → Authentication via LDAP, Active Directory, SAML, and OAuth. Granular roles (Admin, Project Admin, Developer, and Viewer).
- *Web portal* → browser-accessible user interface that allows developers, QA, team leaders, and analysts to view detailed project metrics and quality indicators, consult and manage Quality Gates, and view aggregated dashboards and reports at the project portfolio level. The portal is secure, multi-user, and configurable via granular roles and permissions.

The service is offered per unit of line of codes. Each unit consists of 1 million lines of codes.

The service offers the following advantages:

- *Lower risk of bugs in production and reduced maintenance costs* → more reliable and stable software, cleaner and more maintainable code.
- Compliance with security standards → regulatory and audit support.
- *Increased customer/stakeholder trust* → software perceived as more secure and robust.
- *Long-term Return On Investment (ROI)* → less time and resources spent on late fixes.
- *Increased team productivity* → less rework, more focus on new features.
- *Support for Agile and DevOps approaches* → the service enables the Clean as You Code approach and automates quality and security checks, reducing time to remediation thanks to immediate feedback to developers.
- *Improved software quality* → through the systematic application of quality rules, the service helps improve code maintainability and readability.
Technical debt management → estimate the time to fix issues.

<a id="devsecops"></a>

### DevSecOps As A Service

![DevSecOps As A Service](assets/images/extract/media/DevSecOps.png)

#### Services Description

The service, based on Gitlab, offers an integrated environment for the complete management of the software development lifecycle according to the DevSecOps approach and practices, providing the tools needed for collaboration, development, testing, security, and software release in a single integrated environment.  
The service aims to support organizations in introducing application development, release, and management processes characterized by automation, security, and compliance, thus promoting the creation of reliable digital solutions aligned with required quality standards.  
It allows you to manage projects and repositories, control source code versions, automate CI/CD pipelines, and collaborate efficiently with development teams.

#### Features and Advantages

The service offers the following main features:

- *Git repositories* → represent the collection point for source code. They enable versioning, change tracking, and collaboration across multiple development teams.
- *CI/CD pipeline* → automation of build, test, and release phases. They reduce manual errors, speed delivery times, and ensure process repeatability.
- *Security Integration (DevSecOps)* → automatic scans of code (SAST), dependencies (SCA), container images, and infrastructure configurations. Early identification of vulnerabilities and tracking of remediation directly within development workflows.
- *Artifact and Container Management* → centralized storage of build artifacts and container images. Support for secure and controlled deployment across the various phases of the environment (development, testing, production).
- *Monitoring and governance* → dashboards to view code quality, security, and project status. Role-based access controls and integration with identity management systems to ensure compliance and accountability.

The main components of the service are:

- *GitLab core platform* → this is the core of the platform and encompasses its main features: a web interface, API, database, and team collaboration tools.
- *Git repository* → a service dedicated to managing Git repositories. It handles code versioning and timely tracking of all changes.
- *CI/CD Engine GitLab Runner* → a service responsible for executing CI/CD jobs defined within pipelines, automating build, test, and deployment processes.
- *Artifact registry* → a module dedicated to managing and archiving artifacts generated during CI/CD pipelines, such as packages, container images, and libraries. It ensures traceability, security, and reuse of software components.
- *Test Management* → a component that supports the structured management of testing activities, enabling the planning, execution, and monitoring of test cases to ensure software quality throughout the development lifecycle.

The service is offered per user unit. Each unit consists of 100 users.

The service offers the following advantages:

- *Reduced time to market* → thanks to automation and integrated pipelines.
- *Reduced operating costs* → a single platform instead of multiple separate tools.
- *Increased team productivity* → thanks to centralized collaboration. 
- *High Return On Investment (ROI)* → reduced rework and post-release remediation.
- *Increased stakeholder trust* → more secure code and faster releases.
- *Native security integration* → integrated DevSecOps capabilities. Ensures compliance with corporate and regulatory policies.
- *Integrate project management with native tools* (issue boards, milestones, etc.).
- *Centralize source code and CI/CD pipeline management*.
- *Foster collaboration between technical and project teams*.
- *Increase team productivity* through process automation.

<a id="qualizer"></a>

### Qualizer DevSecOps

![Qualizer DevSecOps Service](assets/images/extract/media/Qualizer.png)

#### Services Description

Leonardo's Qualizer service is a platform designed to meet the needs for visibility, control, and continuous improvement of the software lifecycle throughout the development cycle, in accordance with the DevSecOps and Agile approach.  
It offers a centralized tool for analyzing, observability, and governance of software quality.  
The service allows you to aggregate data from various sources, security, monitoring, and testing tools, integrating them into a user dashboard (portal) that clearly and graphically displays various interactive metrics and insights.

#### Features and Advantages

The service offers the following main features:

- *Ingestion* → automatically collects data from the main tools used in development processes, such as code management systems, continuous integration tools, and software quality and security analysis. The collected data is processed and made available for consultation and analysis.
- *Data processing* → processes the data collected by the ingestion module, normalizes it, and extracts key metrics. The data is structured and made highly accessible via dashboards.
- *Project management* → this module allows you to configure and organize projects within the service. It allows organizations to specify which products, pipelines, and tools they wish to monitor and associate useful information for navigation and management with each project.
- *Analytics engine* → the service provides summary and analytical views that aggregate the collected information and present it clearly and understandably (e.g., DevOps performance metrics; code security status; code quality; number of tests performed; percentage of tests passed).
- *Presentation layer* → data is made available through dashboards that allow for the analysis and continuous monitoring of key metrics.

The Qualizer service is cloud-native and based on a containerized microservices system. This architecture allows Qualizer to be flexible, resilient and secure, with the ability to adapt to different technological scenarios.  
At a logical level, the architecture is divided into the following main components:

- *Core modules* → each service module (e.g., ingestion, project management, data processing) is implemented as an independent microservice, orchestrated in a Kubernetes/OpenShift environment to ensure high availability and functional isolation.
- *Database for storing collected data* → data acquired from external systems is stored in a centralized database, which is then processed and normalized to support efficient metrics processing, interactive consultation, and dashboard generation.
- *Integration via REST API* → the service interacts with external platforms through standard APIs, enabling continuous data collection.
- *Messaging broker* → the service uses a Kafka-based messaging system to ensure decoupling between modules, support high event loads, and facilitate horizontal scalability.

The service is sized and offered per project unit. Each unit consists of 10 projects included.

The service offers the following advantages:

- *Reduced time to market* → thanks to automation and integrated pipelines.
- *Reduced operating costs* → a single platform instead of multiple separate tools.
- *Increased team productivity* → thanks to collaboration between developers and security specialists, aligning objectives and timelines.
- *High Return On Investment (ROI)* → reduced rework and post-release remediation.
- *Increased stakeholder trust* → more secure code and faster releases.
- *Centralized security management* → vulnerabilities detected by various scanning tools are collected, normalized, and tracked in a single location, facilitating the work of security teams and reducing the risk of omissions.
- *Reduced remediation time* → thanks to immediate visibility of vulnerabilities, Qualizer accelerates the process of taking charge and resolving issues.
-* Continuous improvement based on collected metrics* → through standardized dashboards and indicators, the service allows you to objectively measure team and project performance.
- *Unified dashboard* for quality, security, and deployment monitoring.

## Big Data Family

Below is the list of services belonging to the Big Data family:

- [Data Lake - 1TB](#datalake)
- [Data Lakehouse](#datalakehouse)
- [Business Intelligence](#BI)
- [Batch/Real time Processing - 1 Worker](#processing)
- [Event Message](#event-message)
- [Data Governance](#governance)

<a id="datalake"></a>

### Data Lake - 1TB

![Data Lake Service](assets/images/extract/media/DataLakeLDO.png)

#### Services Description

It provides a ready-to-use platform developed by Leonardo that has all the features developers, data scientists, and analysts need to easily archive data of all sizes, shapes, and velocities.  
It allows for the ingestion of a wide range of heterogeneous data sources (structured, semi-structured, and unstructured), from various internal and external sources within the organizations (relational databases, files, web applications, cloud, web services, etc.), and of various classification types.  
It integrates with the Processing/ETL module for accessing data and metadata for the necessary processing or normalization, and with the Data Governance module for managing data access and managing data security and protection.

#### Features and Advantages

Data Lake is the foundation for all Big Data services; without it, other services cannot be activated.  
It was designed based on, and with full wire-protocol compatibility with, Amazon's renowned cloud storage product (Simple Storage Service). This enables the scalability needed to manage data volumes in the petabyte range (and beyond) typical of the Big Data world, while ensuring maximum interoperability and compatibility with languages, libraries, and products compatible with the S3 protocol.  
Data Lake's capabilities are based on a horizontally scalable infrastructure, capable of supporting heavy read and write loads, ensuring consistent performance even in scenarios characterized by large amounts of data and intensive throughput.

The development technology is based on MinIO, an object storage solution fully compatible with the S3 protocol.  
The application layer is built on distributed object storage, which in turn relies on an underlying block storage layer, which can be implemented either bare metal or using software-defined solutions.  
The overall architecture is based on containers orchestrated by a resource manager based on an enterprise-class Kubernetes distribution.  
Resource management and container orchestration are based on the Red Hat Openshift platform.  
To meet the most stringent security requirements, data encryption is implemented using keys stored on HSM devices. This will be made possible by interfacing with the KMS module common to all PaaS services.

The service is sized and offered per storage unit. Each unit contains 1 TB.

The service offers the following advantages:

- *Compliance and governance* → supports versioning, auditing, encryption (AES-256), and integration with identity management systems.
- *Flexibility and scalability* → supports horizontal scalability; ideal for companies with rapidly growing data or multi-petabyte storage needs.
- *Rapid time to market* → allows you to quickly deploy new analytical applications or data pipelines without worrying about underlying management.
- *Simplified management* → teams don't need to worry about technical maintenance. There's no need to configure clusters, load balancers, manual replication, or complex monitoring; it offers native monitoring and alerting tools.
- *Reduced operating costs* → the service is built with open source standards and compatible with S3, thus reducing licensing costs compared to proprietary solutions.
- *High availability and resilience* → integrated replication and support for erasure coding ensure data resilience and business continuity.
- *Optimized performance* → designed for high-performance object storage, with high throughput and low latency. Ideal for real-time analytics and intensive ML/AI workloads.
- *Interoperability* → S3 API compatibility allows for easy integration of existing applications. Supports multi-protocol access.
- *Automation and DevOps-friendly* → it enables continuous updates without downtime and simplified backup management.

#### Disaster Recovery (DR) architecture

Data replication within MinIO Object Storage is managed directly at the application level.  
The solution provides Site Replication capabilities that enable native management of data distributed across multiple Data Centers (DCs), synchronizing buckets, objects, access policies, and encryption configurations.  
Typically, data availability and resilience in distributed object storage systems is achieved through deployment across multiple physical locations. In this architecture, MinIO clusters are deployed in geographically separate data centers to provide disaster recovery capabilities. 
Replication between MinIO sites can be configured as either synchronous or asynchronous depending on network characteristics and recovery objectives.  
In this deployment, thanks to the high bandwidth and low latency connections available between data centers, synchronous Site Replication was adopted between clusters, ensuring data consistency across locations.  
Access to the different clusters can be achieved either via direct addressing or through a load balancer, depending on architectural and operational needs.From an internal management perspective, MinIO automatically organizes storage units into erasure sets, which are logical groups that form the foundation of system availability and resilience.  
To ensure uniform distribution, MinIO applies a striping mechanism for erasure sets across the various nodes in the pool, avoiding load concentrations or single points of failure. Objects are then divided into data blocks and parity blocks, which are distributed within the erasure sets, ensuring redundancy, fault tolerance, and operational continuity.

<a id="datalakehouse"></a>

### Data Lakehouse

![Data Lakehouse Service](assets/images/extract/media/DataLakehouse.png)

#### Services Description

The solution, based on Cloudera's Open Data Lakehouse, helps organizations perform rapid analytics on all data, both structured and unstructured, at scale. It eliminates silos and enables teams to collaborate on the same data using their preferred tools.  
It allows for the ingestion of a wide range of heterogeneous data sources (structured, semi-structured, and unstructured), from various internal and external sources within the organizations (relational databases, files, web applications, cloud, web services, etc.), and of various classification types.  
It integrates with the Processing/ETL module for accessing data and metadata for the necessary processing or normalization, and with the Data Governance module for managing data access and managing data security and protection.

#### Features and Advantages

It is composed of three modern data architectures:

- *Open Data Lakehouse* → enables multifunctional analytics on both streaming data and data stored in a cloud-native object store across hybrid and multi-cloud environments.
- *Unified Data Fabric* → centrally orchestrates disparate data sources intelligently and securely.
- *Data Mesh* → helps eliminate data silos by distributing ownership to cross-functional teams while maintaining a common data infrastructure.

The main components of the service are:

- *Shared Data Experience (SDX)* → it combines centralized security, governance, traceability, and enterprise-grade management capabilities with shared metadata and a data catalog.
- *Data HUB* → it allows users to deploy analytics clusters across the entire data lifecycle as elastic IaaS experiences.
- *Data Services* → they are containerized analytical applications through which users can deploy clusters similar to those possible in Data Hub, but with the added benefit of being delivered as a Platform as a Service (PaaS) experience.
- *Cloudera Data Warehouse (CDW)* → it uses the combination of Apache Impala and Apache Iceberg to offer broader coverage than traditional data warehouses (it stores both data and metadata in the data lake, leading to a range of benefits).
- *Cloudera Machine Learning (CML)* → a machine learning workflow solution that supports the entire data science lifecycle, designed to use containers for efficient data engineering and machine learning tasks.
- *Data Catalog* → it offers a centralized and scalable way to democratize data access across the entire Data Lakehouse.
Management Console → provides a single interface to support the operation of users, environments, and analytical services that support each Data Lakehouse.

The service is sized and offered per storage unit. Each unit contains 1 TB.

The service offers the following advantages:

- *Compliance and governance* → supports versioning, auditing, encryption (AES-256), and integration with identity management systems.
- *Flexibility and scalability* → supports horizontal scalability; ideal for companies with rapidly growing data or multi-petabyte storage needs.
- *Rapid time to market* → allows you to quickly deploy new analytical applications or data pipelines without worrying about underlying management.
- *Simplified management* → teams don't need to worry about technical maintenance. There's no need to configure clusters, load balancers, manual replication, or complex monitoring; it offers native monitoring and alerting tools.
- *Reduced operating costs* → the service is built with open source standards and compatible with S3, thus reducing licensing costs compared to proprietary solutions.
- *High availability and resilience* → integrated replication and support for erasure coding ensure data resilience and business continuity.
- *Optimized performance* → designed for high-performance object storage, with high throughput and low latency. Ideal for real-time analytics and intensive ML/AI workloads.
- *Interoperability* → S3 API compatibility allows for easy integration of existing applications. Supports multi-protocol access.
- *Automation and DevOps-friendly* → it enables continuous updates without downtime and simplified backup management.

<a id="BI"></a>

### Business Intelligence

![Business Intelligence Service](assets/images/extract/media/BI.png)

#### Services Description

The solution offers a platform with a suite of Business Intelligence tools based on Microsoft's Power BI, enabling organizations to analyze and visualize data to gain strategic insights.  
It transforms raw data into interactive reports and visually appealing dashboards, facilitating data-driven decision-making. Users can connect to a wide range of data sources, including SQL and NoSQL databases, files, cloud services like Azure, and many others.  
It supports integration with other Microsoft products, such as Office 365 and SharePoint, improving collaboration and information sharing within the organization.  
Useful for:
- centralizing business data from heterogeneous sources (ERP, CRM, databases, Excel, cloud services).
- analyzing and visualizing data through interactive dashboards and dynamic reports.
- enabling data-driven decision-making at all levels of the organization.
- automating report updates and distribution without manual intervention.
- ensuring security and governance of analytical data in a controlled environment.
- facilitating collaboration between analysts, managers, and end users through online sharing.

#### Features and Advantages

The service offers the following main features:

- *Data collection and integration* → over 500 connectors for databases (SQL, Oracle, SAP, etc.), cloud services (Azure, Salesforce, Google Analytics, etc.), and local files.
- *Data transformation (ETL)* → allows you to extract, clean, and transform data before loading it into the analytical model.
- *Data modeling* → creation of relational models and complex calculations using the DAX (Data Analysis Expressions) language.
- *Analysis and visualization* → customizable charts, KPIs, maps, and visuals, with automatic data updates.
- *Collaboration and sharing* → publishing and sharing of reports and dashboards via web or mobile app.
- *Automation and refresh* → automatic updating of datasets, even in real time.
- *Security and governance* → centralized management of users, roles, and access based on Azure Active Directory.
- *AI and advanced analytics* → integrated generative AI capabilities and automatic analysis of trends or anomalies.
- *Microsoft 365 integration* → reports can be integrated directly into enterprise collaboration apps.
- *Cloud scalability (PaaS)* → managed and scalable infrastructure.

The main components of the service are:

- *Gateway* → it enables secure connections between on-premises data and Power BI cloud services. It supports integration with numerous identity providers (e.g., Azure AD) and manages connections and queries to on-premises data.
- *Service* → it manages the creation, publishing, and sharing of reports and dashboards, data refresh, and querying data stored in the cloud.
- *Report Server* → it offers similar functionality to Power BI Service, allowing users to publish, share, and view reports within their on-premises environment.
- *Dataflows* → they allow you to create and manage ETL (Extract, Transform, Load) data pipelines directly within Power BI. These dataflows support the integration and transformation of data from numerous sources to create consolidated data models.
- *Desktop* → it is the client application used for creating reports and data models. Available for Windows, it allows users to connect to numerous data sources, run queries, and create advanced visualizations.

The service is sized and offered per user unit. Each unit consists of 50 users.

The service offers the following advantages:

- *Faster and better decisions* → real-time or near-real-time access to data, intuitive visualizations, and drill-down into information, enabling more informed decisions.
- *Increased productivity and speed of insight* → automated creation/reporting, self-service dashboards, and easy sharing enable business users to act faster.
- *Reduced total cost of ownership (TCO) and lower costs* → managed infrastructure and reduced need for on-premise infrastructure reduce overall costs.
- *Increased collaboration and a data-driven culture* → dashboard sharing, integration with other tools, and ease of use promote adoption among non-technical users.
- *Access anywhere and from different devices* → availability via cloud, mobile apps, and remote access allows users to work on the move or from different locations.
- *Extensive data integration* → support for numerous connectors to on-premise and cloud sources, enabling consolidation of disparate data.
- *Efficient data preparation and modeling* → integrated tools enable ETL, modeling, and complex calculations.
- *Interactive and self-service visualization* → intuitive, drag-and-drop interface and pre-built templates allow non-technical users to build reports independently.
- *Security, governance, and compliance* → Features such as encryption and auditing support access control and compliance.
Infrastructure scalability and flexibility.

<a id="processing"></a>

### PaaS ETL - Batch/Real time Processing - 1 Worker

![PaaS ETL - Batch/Real time Processing](assets/images/extract/media/Processing.png)

##### Services Description

It is a platform that provides a set of tools for processing, integrating, quality-checking, and preparing data from heterogeneous sources stored in the Data Lake, both in real time and in batch mode.  
It offers a user-friendly graphical interface for designing and implementing data integration workflows using a visual approach, following the ETL (Extract – Transform – Load) approach. This reduces the complexity of data integration and allows users to focus on business logic rather than programming code.  
It supports a wide range of data sources, including relational databases, files, web applications, cloud, web services, and more. This makes it extremely flexible for data integration in a variety of contexts.  
It also offers data quality management tools, allowing users to clean, standardize, and enrich their data to ensure its accuracy and reliability.

#### Features and Advantages

The main features and functionalities of the service are:

- *Heterogeneous and large-scale data processing* → It supports a large number of data sources in batch and streaming mode (for example, datasets stored on HDFS, S3, ADLS Gen2, and GCS in CSV, Parquet, Avro, and other formats, as well as RDBMS via JDBC or all popular NoSQL, Apache Kafka, and more).
- *It is natively integrated* with the Data Lake and Batch/Real-Time Processing PaaS of the Big Data family.
- *It allows to implement complex data pipelines* → leveraging the parallel and distributed computing capacity provided by a Spark cluster.
- *It provides an interactive mode* to debug flows and explore data easily and intuitively.
- *It guarantees the maximum scalability* necessary to meet the needs of organizations of any size, from small businesses to large enterprises.

The main architectural components of the service are as follows:

- *Visual ETL Architecture* → provides various blocks that allow you to visually design an ETL, ELT, and ELL pipeline. It allows you to read, write, and modify data from different sources, interfacing with the Data Lake and Monitoring module, and can use the Processing module for data-intensive processing.
- *Apache Spark* → Open-source parallel processing framework that supports in-memory processing to improve the performance of applications that analyze Big Data.
- *JupyterLab* → Interactive notebook-based development environment designed primarily for working with data, scientific calculations, and machine learning. It supports writing and executing interactive code in languages ​​such as Python, R, or Julia.
- *NodeRed* → Visual, low-code development environment for creating applications that connect devices, web services, APIs, and systems.

The service is sized and offered per worker. Each worker consists of an Apache Spark cluster on a 26-core 2.70 GHz physical processor with a 1:2 virtualization ratio.

The service offers the following advantages:

- *Support for data-driven strategies, faster and more informed decisions* → centralized data for service customization (e.g., real-time analytics for marketing, IoT, e-commerce, etc.) and ready-to-use pipelines without complex development. 
- *Greater focus on core business* → development and IT teams do not have to worry about technical maintenance, as it is managed.
-* Reduced operating costs and service scalability* → no infrastructure to manage; support for large data volumes (batch) or continuous flows (streaming); automation of extraction, transformation, and loading processes with real-time scheduling or triggers; same framework for historical data and real-time flows.
- *Integration with cloud ecosystem* (data warehouse, data lake, BI, AI/ML).
- *Guaranteed security and compliance* (encryption, access, audit logs).
- *Integrated monitoring* → metrics, alerts, and centralized logging for ETL pipelines.

<a id="event-message"></a>

### Event Message

![Event Message Service](assets/images/extract/media/Event.png)

#### Services Description

It provides a platform developed by Leonardo for developing real-time applications and data pipelines and acts as a message broker, providing publish-subscribe functionality.  
It increases the scalability and resilience of existing applications by decoupling architectural components using a reactive approach based on asynchronous interactions.  
The platform can scale horizontally and provide ordered message delivery capabilities. Like other Big Data PaaS modules, the solution is based on containerized resources orchestrated via Kubernetes.  
It enables near-real-time analytical processes through streaming and facilitates the implementation of IoT use cases.

#### Features and Advantages

The service offers the following main features:

- A useful tool for implementing reliable data exchanges between different components.
- Ability to partition messaging workloads as application requirements change.
- Real-time streaming for data processing.
- Native support for data/message playback.
- Integration with the Batch/Stream Processing module.
- Web interface for monitoring: Brokers Topics/Messages, Consumers, ACLs.

The main components of the service are:

- *Apache Kafka-based solution* → publish-subscribe messaging platform built to manage real-time data exchange for streaming, distributed pipelining, and replay of data feeds for fast, scalable operations.
- *Broker-based solution* that operates by maintaining data streams as records within a cluster of servers.
- *Topic* → addressable abstraction used to show interest in a given data stream (series of records/messages).
- *Partitions* → topics can be divided into a series of order queues called partitions. 
- *Persistence* → server clusters that durably maintain records/messages as they are published. 
- *Producers* → defines which topic/partition a given record/message should be published to. 
- *Consumers* → entities that process records/messages.

The service is sized and offered per worker. Each worker consists of an Apache Kafka cluster on a 26-core 2.70 GHz physical processor with a 1:2 virtualization ratio.

The service offers the following advantages:

- *Faster time-to-market* → New applications can be integrated rapidly via events, accelerating the development of new products and features.
- *Greater agility* → Facilitates the creation of modular and scalable services without major changes to the existing system.
- *Reduced risk of operational failures* → PaaS often includes SLAs, monitoring, backup, and redundancy, reducing the risk of downtime or data loss.
- *Faster, more informed decisions* → Real-time analytics for marketing, IoT, and e-commerce.
- *Predictable costs* → Reduces the risk of over-provisioning or unexpected maintenance costs.
- *Scalability* → Support for large event volumes without performance degradation
- *High availability and fault tolerance*
- *Simplified management* → No need to manage clusters, patches, software upgrades, or complex configurations
- *Optimized Performance and Latency* → Compression, batching, and automatic topic management improve performance
- *Security and Compliance* → Authentication, authorization, and encryption in transit and at rest are managed by the provider.

<a id="governance"></a>

### Data Governance

![Data Governance Service](assets/images/extract/media/Governance.png)

#### Services Description

A service developed by Leonardo that provides a platform with a single, secure, and centralized point of reference for data control. Leveraging search and discovery tools and connectors to extract metadata from any data source, it simplifies data protection, analysis, and pipeline management, as well as accelerating ETL processes.  
It allows you to automatically analyze, profile, organize, link, and enrich all metadata, implement algorithms for automatic metadata and relationship extraction, and support regulatory and data privacy compliance with intelligent data lineage tracking and compliance monitoring.  
It simplifies data search and access and verifies its validity before sharing it with other users.  
It enables the production of data quality data (a measure of data condition based on factors such as accuracy, completeness, consistency, and reliability).  
It allows you to oversee data error resolution efforts and maintain compliance with internal audits and external regulations.  
It provides immediate support for the detection and classification of personal data and other sensitive data.

#### Features and Advantages

The service offers the following main features:

- *Data Search & Discovery* → Automatic exploration of Data Lake datasets for (meta)data that can enrich or deepen knowledge of the information held.
- *Data & Metadata Catalog* → Extraction of information that makes the data searchable.
- *Data Lineage* → Tracking the entire data lifecycle, from source to destination.
- *CL/Audit* → Allows for robust granular data access permission management and auditing of data usage (this means being able to answer the question "Who accessed what data and when?" at any time).

The service use a tool of Data Hub that extends the concept of a data catalog by offering data discovery, data observability, and data governance functions.  
It integrates natively with other architecture components, adding all the features that are particularly useful for achieving compliance objectives, such as privacy, security, and process quality management.  
This tool allows you to verify changes made to data within the catalog over time, distinguishing the various sources that have populated the Data Lake, the type of data entered (personal data, financial data, etc.), and identifying data that is sensitive to specific laws or compliance procedures, whether internal or external to the organization.
Data integration within DataHub occurs primarily in two ways:
- PUSH → automatically within third-party applications such as Airflow, Apache Spark, Great Expectations, etc.
- PULL → manually by the developer prior to loading the data into the data lake via dedicated REST APIs.

The service is sized and offered for a single license.

The service offers the following advantages:

- *Improved governance and compliance* → Complete data traceability ("data lineage") to demonstrate compliance with GDPR, ISO, or industry regulations.
- *Increased data trust* → Certainty about the data's provenance, how it has been transformed, and how up-to-date it is. 
- *Reduced risks and operational costs* → Fewer duplications, inconsistencies, and "orphaned" datasets. Reduced time wasted searching or validating data.
- *Accelerating time to market* → Easily discover and reuse existing datasets, reducing reliance on technical teams.
- *Greater focus on core business* → Teams no longer need to worry about technical maintenance.
- *Centralized catalog and metadata* → Provides an active data catalog with technical and operational metadata. Automatically integrate with Big Data systems (Kafka, Hive, Spark, Databricks, etc.).
- *Automated Data Lineage* → Automatically tracks end-to-end data flows from ingestion to transformations, all the way to consumption (dashboard, API, ML).
- *Native APIs and integrations* → Exposes APIs and plugins for continuous integration with orchestration, observability, quality, and security tools.
- *Access and Security Policy Management* → Centralizes access policies based on roles and classifications. Improves data security without fragmenting rules across services.
- *Automation and Self-Service* → Fosters a self-service data discovery model for data engineers and data scientists.
- *Scalability and modern architecture* → Microservices architecture and Metadata Graph.

## Artificial Intelligence (AI) Family

Below is the list of services belonging to the Artificial Intelligence (AI) family:

- [Speech to Text](#speech-to-text)
- [AI Audio & Video Analytics](#AI-audio-video)
- [OCR](#AI-OCR)
- [Text Analytics/NLP](#AI-text)
- [Translation](#AI-translation)
- [AI Search - RAG](#AI-search)
- [PaaS - AI Platform](#AI-platform)
- [AI SLM/LLM](#AI-SLM-LLM)
- [AI workflow](#AI-workflow)
- [Vector DB](#AI-vectorDB)

<a id="speech-to-text"></a>

### Speech to Text

![Speech to Text Service](assets/images/extract/media/STT.png)

#### Services Description

This service provides an advanced speech-to-text model for transcribing audio files into text, trained on a vast dataset of audio and text in various languages ​​using neural AI (deep learning) models specialized in automatic speech recognition (ASR).  
The service is optimized for English transcription, but can also recognize and transcribe speech in other languages, still returning the text in English. Furthermore, it can automatically identify the spoken language and supports automatic speech translation.  
It is useful for automatically transcribing conversations, interviews, meetings, call centers, podcasts, or videos; supporting chatbots and voice assistants, translating voice into text understandable by NLP or AI systems; indexing and analyzing audio content (semantic search, sentiment analysis, data mining); and digitizing voice archives and official minutes, ensuring accuracy and traceability.

#### Features and Advantages

This is a whisper-based service that provides an API layer and an SDK for integration with existing applications. All tasks are represented as a sequence of tokens that the model predicts, unifying and optimizing the speech processing pipeline.

The service offers the following main features:

- *Automatic Speech Recognition (ASR)* → converts speech to text in real time or from audio files (WAV, MP3, MP4, FLAC, etc.). Multilingual support.
*Advanced Neural Accuracy* → uses sequence-to-sequence Transformer models, trained for a wide range of speech processing tasks, such as multilingual speech recognition, speech translation, and language identification.
- *Multilingual Recognition and Machine Translation*
- *Real-time Transcription (Streaming)*
*Batch Processing*
- *Temporal Segmentation* → returns start/end timestamps to synchronize text and audio (useful for subtitles or editing).
- *Text Cleanup and Normalization* → automatically corrects punctuation, capitalization, and formatting.
- *Accent and Ambient Noise Support* → is robust against background noise, poor microphones, and natural (non-studio) speech.

The main components of the service are:

- *Whisper engine (ASR Core)* → transformer neural model trained on millions of hours of audio-text data.
- *Language detection module* → automatically identifies the language of the speech.
- *Post-processing & text normalization* → corrects the transcription, inserts punctuation, and adds consistent formatting.
- *Optional translation layer* → uses a Neural Machine Translation (NMT) model to translate the transcription into another language. 
- *Storage and logging* → stores results, metadata, and logs for auditing and analysis. 
- *Integration layer (API / SDK)* → interface for external apps, dashboards, or AI pipelines.

The service is sized and offered per GPU. Each GPU consists of one NVIDIA H100 partition.

The service offers the following advantages:

- *Reduced operating costs* → automate the transcription of audio, meetings, interviews, and minutes without requiring dedicated staff.
- *Increased staff productivity* → automatic transcription saves hours of work.
- *Accelerated document processes* → minutes, interviews, meetings, or consultations can be transcribed and distributed in real time, improving administrative efficiency.
- *Accessibility and inclusion* → generate subtitles and text from audio/video content, improving accessibility for people with hearing impairments and multilingual communication.
- *Data-driven decisions (Voice Analytics)* → voice transcriptions become analyzeable text data, supporting data-driven decisions.
- *Improved customer experience* → chatbots, contact centers, and digital assistants become more effective by recognizing voice and responding naturally.
- *High linguistic accuracy* → the service, based on Transformer architecture, guarantees more precise transcriptions even in the presence of accents, noise, or natural speech.
- *Structured and interoperable output* → output in standard formats (JSON, TXT, SRT, VTT, DOCX) easily integrated with databases or document workflows.
- *Model updates* → managed and ongoing model updates, improving accuracy and reducing errors over time.
- *High performance and low latency* → processing in milliseconds for live streams, seconds for large files.
- *Multimodal AI support* → can be combined with Text Analytics, Translation, and Text-to-Speech services to create complete speech pipelines (e.g., transcription + translation + synthesis).
- *Service scalability* → allows you to simultaneously manage thousands of speech streams by providing and managing the necessary infrastructure.

<a id="AI-audio-video"></a>

### AI Audio & Video Analytics

![AI Audio & Video Analytics Service](assets/images/extract/media/AudioVideo.png)

#### Services Description

These are two services, separate but integrable when necessary, developed by Leonardo.

The *AI Audio Analytics PaaS* provides a ready-to-use platform that, thanks to AI-based algorithms on audio sources, allows the identification of unique features from audio streams using preloaded AI models. These features allow the identification of a person's voice, noises, and possible anomalies in the monitored environment.  

The *AI Video Analytics PaaS* is a ready-to-use platform with pre-trained algorithms that leverage computer vision techniques, capable of processing and understanding visual information present in two-dimensional images or video sequences.

#### Features and Advantages

The *AI ​​Audio Analytics platform* can work with signals produced in the field from various audio sources, overcoming the "curse of dimensionality" problem caused by the high-dimensionality of the phenomenon through the use of unsupervised and supervised approaches. These approaches dynamically identify an optimal set of features to identify similarities between signals for the same event/process and differences between signals for different events/processes. The output of these processes can then be treated as characteristics in statistical detection methods, but they rely heavily on the analyst's understanding of a possible link between the signal and the process/event being detected.  
The AI ​​Audio Analytics solution is primarily composed of the following tools:
- *Swagger UI* → a collection of HTML, CSS, and JavaScript assets automatically generated from the documentation, which must comply with the OpenAPI standard.
- *ML models* → algorithms for extracting information from audio sources for:
    - Speaker identification: an ML model capable of identifying the speaker using voice characteristics.
    - Audio anomaly insight: an ML model capable of detecting sound anomalies in production or cyclical systems.
    - Environment classification: an ML model capable of identifying and classifying audio tracks.
- *FastAPI framework* → a modern, fast (high-performance) web framework for building APIs with Python.

The *AI ​​Video Analytics* platform includes subsystems: preprocessing, image analysis, and image interpretation. The service can perform video analysis while optimizing computation time through the use of single-pass convoluted networks, which analyze all parts of the image in parallel and simultaneously, eliminating the need for sliding windows.  
The AI ​​Video Analytics solution is primarily composed of the following tools:
- *ML models* → algorithms for extracting information from video sources.
    - Object detector: recognizes and locates people and objects within a given frame by extracting metadata containing classification and spatial location
    - Spacial counter: an extension of the Object Detector model, it can also process a single-shot counting for each object class for each frame
    - Object counter: capable of both locating people and objects and obtaining a count of the detected objects.

The Audio and Video analytics services are sized and offered for single streams. Each audio/video stream consists of 24 x 365G.

The service offers the following advantages:

- *Improved security and compliance* → automatic detection of anomalous behavior, intrusions, or risky situations. Support for compliance policies and audits based on video/audio evidence.
- *Improved customer experience* → analysis of tone of voice, emotions, and wait times for improved quality of service and customer interactions.
- *Reduced operating costs* → automated continuous monitoring of environments, processes, and media flows, resulting in optimized human resources and response times.
- *Data-driven decisions* → media content becomes a source of structured and analyzable data for visual and audio insights that can be integrated into Business Intelligence systems.
- *Innovation and new business models* → enable new services such as retail analytics, behavioral marketing, intelligent security, and event monitoring for competitive advantage and market differentiation.
- *Scalability and simplified management* → management of resources, workloads, and updates.
- *Integrated advanced analytics* → ready-to-use features, e.g. Facial recognition, object detection, speech-to-text, voice sentiment, anomaly detection.
- *Real-time and batch processing* → analysis of live streams or recorded media archives, thanks to the integration of Processing PaaS.
- *Multi-format and multi-source support* → compatibility with various formats (MP4, AVI, WAV, RTSP, etc.) and heterogeneous devices (cameras, microphones, sensors).
- *Integrated security and privacy* → stream encryption, access control.
- *Operational monitoring and insights*.

<a id="AI-OCR"></a>

### Optical Character Recognition (OCR)

![Optical Character Recognition (OCR) Service](assets/images/extract/media/OCR.png)

#### Services Description

The services offer innovative computer vision capabilities, enabling the transformation of visual content containing text into processable digital content.  
It is useful for analyzing images, reading text, and detecting faces with predefined image tagging, text extraction with Optical Character Recognition (OCR), and responsible facial recognition.  
The OCR component (reading printed or handwritten text) is integrated as a REST API or client library that allows you to send images/documents and obtain text extraction from them.  
It is useful in multiple scenarios: automatic text extraction from images and vice versa, document processing (e.g., scanning PDFs, form images, extracting written or printed text), and process automation (e.g., data acquisition from forms, invoices, intelligent archiving, full-text search in image content).  
The service can be offered using two technologies:
- Basic with Google Tesseract OCR.
- Standard with Microsoft AI Azure Vision.

#### Features and Advantages

The main features of the Google Tesseract OCR-based service are:

- *Text recognition* → recognizes printed or written text in over 100 languages
- *Multi-language models *→ can process mixed languages ​​(e.g., English + numbers + symbols)
- *Multiple image input* → supports PNG, JPEG, TIFF, BMP, PDF (via external libraries such as pdfimages).
- *Page layout analysis* → recognizes text blocks, columns, paragraphs, direction, and orientation.
Multiple output formats.
- *Model training & fine-tuning* → ability to train models on specific fonts or languages ​​(with dedicated datasets).
- *Image enhancement* → supports skew correction, binarization, thresholding, and deskewing.

The main components of the Google Tesseract OCR-based service are:

- *API Layer* → Exposes REST endpoints for loading images or URLs.
- *Compute Layer* → Runs the Tesseract engine in scalable containers.
- *Storage Layer* → Stores image input and text output.
- *Processing Layer* → OCR engine and image management.
- *API Layer* → Exposes REST endpoints for loading images or URLs.
- *Monitoring & Logging* → Performance monitoring and call logging.
- *Security Layer* → API and data protection.

The main features of the Azure Vision AI-based service are:

- *Printed and handwritten text extraction* → text is returned in blocks/lines/words with spatial coordinates and confidence scores.
- *Multilingual and mixed script support* → supports numerous international languages ​​and scripts. It can recognize mixed modalities (printed text + handwritten text) in a single image.
-* Different input modalities and APIs* → Input single images (JPEG, PNG, BMP) or documents (PDF, TIFF) up to specific limits. Local execution possible via Docker containers.

The main components of the Azure Vision AI-based service are:

- *Client Layer* → It can be a web app, a microservice, or an automated workflow. It sends images via HTTP POST API or via SDK.
- *API Gateway and Identity Management*.
- *AI Vision Service* → The heart of the system, hosting AI vision models for text recognition; the "Read" OCR engine is optimized for complex documents.
- *Storage and Temporary Pipeline* → During processing, images are temporarily stored. The results are then returned as JSON output or saved to defined resources (e.g., Data Lake, DB, or Cognitive Search).
- *Integration and Automation* → The results can be sent or processed for document workflows, full-text indexing and search, data analysis and Big Data, archiving, notifications, or vertical applications.

The service is offered using two alternative technologies:
- *Tesseract* → container-based sizing. Each container consists of 16 GB of RAM.
- *Microsoft* → page-based sizing. Each page is of 96M.

The service offers the following advantages:

- *Lower document management costs* → fewer staff dedicated to data entry and fewer errors that generate correction costs or disputes.
- *Paperless transformation* → enables the complete digitalization of archives and paper flows, reducing paper consumption and physical space.
- *Faster and more traceable workflows* → Scanned documents become immediately accessible data and can be integrated into management systems.
- *Traceability and compliant archiving* → Facilitates compliant digital archiving, improving compliance management (GDPR, electronic preservation).
- *Extensive support* → Native support for dozens of languages ​​and formats (e.g., PDF, JPEG, PNG, TIFF, scanned documents).
- *Standard formats* → The extracted text is immediately usable in management or analytics systems.
- *Real-time and batch processing* → Analysis of live streaming or recorded multimedia archives, thanks to the integration of Processing PaaS.
- *Managed maintenance and updates* → the infrastructure, security, and updates of AI models are managed.

<a id="AI-text"></a>

### Text Analytics/NLP

![Text Analytics Service](assets/images/extract/media/Text.png)

#### Services Description

The Text Analytics PaaS solution,  developed by Leonardo, provides a ready-to-use NLP (Natural Language Processing) platform capable of extracting structured and interpretable information from unstructured texts, enabling quantitative and qualitative analyses that would be time-consuming and difficult to perform manually.  
The system can identify entities (people, places, organizations, etc.), translations, key concepts, and sentiment from text to identify and extract opinions from text. Multilingual support.

#### Features and Advantages

The solution can perform various types of analysis, including:

- *Entity Extraction (NER)* → recognizes the names of people, companies, places, products, dates, etc.
- *Sentiment analysis* → understands whether the text expresses a positive, negative, or neutral opinion.
- *Theme and Topic detection* → identifies key concepts in the text.
- *Language Detection* → detects the language in which a text was written.

The main components of the service are:

- *Swagger UI* → Collection of HTML, CSS, and JavaScript assets automatically generated from the documentation, which must be compliant with the OpenAPI standard.
- *ML Models* → List of ready-to-use pre-trained models, including:
    - Key Phrase Extraction: extracts salient parts of text.
    - Language Detection: infers language from text.
    - Named Entity Recognition: extracts real-world entities from text, such as the names of people, places, data, companies, etc.
    - Sentiment Analysis: recognizes sentiment from text.

- *FastAPI Framework* → Modern, fast (high-performance) web framework for building APIs with Python.  

Model creation workflow:
1. *Data acquisition* → obtains raw text data from various sources to create a robust dataset for NLP tasks.  
2. *Text preprocessing* → includes several steps to refine the raw text data for meaningful analysis and model training (e.g., text cleaning) Text, tokenization, stopword removal, normalization).  
3. *Feature Engineering* → transforms raw textual data into numerical features that machine learning models can understand and effectively use to capture semantic meaning, contextual information, and word relationships.  
4. *Modeling & Evaluation* → the heart of the pipeline, where models are applied and evaluated using various approaches (heuristics, ML, Deep Learning, etc.) to comprehensively measure model performance from both a technical and practical perspective.  
5. *Deployment* → marks the transition of the developed model from the development environment to a production environment, followed by continuous monitoring and adaptation to ensure lasting performance and relevance.

The service is sized per Inference unit and per page inferences, respectively 60M and 1,2M per page.

The service offers the following advantages:

- *Better understanding for users and service consumers* → analyzes feedback, reviews, chats, and surveys to extract sentiment.
- *Data-driven decisions* → transforms unstructured text into quantifiable insights that can be displayed in dashboards.
- *Reduced operational costs* → automates text comprehension, significantly reducing human overhead.
- *Reduced operational costs* → automates text comprehension, significantly reducing human overhead.
- *Automation and scalability* → analyzes large volumes of text from heterogeneous sources.
- *Faster time to market* → simple integration via API with third-party systems and applications.
- *Multilingualism and semantic support* → understands meanings, synonyms, and context (not just keywords).

<a id="AI-translation"></a>

### Translation

![Text Analytics Service](assets/images/extract/media/Translation.png)

#### Services Description

Multilingual translation service using AI-based machine translation (NMT) technologies to enable rapid and accurate translation of text from the source language to the target language in real time.  
The service draws inspiration from the human brain not only for its neural structure, but also for its ability to adapt, learn from new experiences, and interact with users.  
The result is a so-called human-in-the-loop approach, a cycle in which machine and human continuously support each other, providing exceptional translation quality and process efficiency that surpasses previous approaches.  
The service can be offered in two ways:

- Solution developed by Leonardo.
- Solution developed by Azure.

#### Features and Advantages

The service offers the following main features:

- *Neural Machine Translation (NMT)* → uses deep neural networks for more natural and contextual translations than statistical models.  
- *Real-time translation* → streaming translation for chat, call centers, multilingual apps, or conferences.  
- *Document translation* → translation of complete files (DOCX, PDF, TXT, HTML, etc.) while maintaining layout and formatting.  
- *Custom translation* → training of custom AI models with glossaries and datasets specific to the industry or company.  
- *Automatic language recognition* → automatically detects the source language before translation.

The main components of the service are:

- *Translator REST API* → main endpoint for sending text, receiving translations, or metadata (languages, glossaries).
- *AI NMT Engine* → proprietary neural engine based on Transformer networks (similar to GPT) for contextual translations.
- *Custom Translator* → portal + API for training models with custom datasets.
- *Document translation API* → service dedicated to batch file translation (integration with Blob Storage).

In case of Leonardo's service, it is sized per GPU unit. Each unit consists of two NVIDIA H100 GPUs.  
In case of Azure's service, it is sized per characters and clients units. Each characters unit consists of 4,8 milions; each client unit consists of 10 clients.

The service offers the following advantages:

- *International expansion* → allows you to easily communicate with customers, suppliers, and citizens of different languages, enabling access to new markets or linguistic communities.
- *Reduced translation time and costs* → automates the translation of texts, documents, and communications, reducing reliance on human translators and accelerating publication workflows.
- *Multilingual process automation* → integrates translation directly into digital processes, eliminating manual tasks and downtime.
- *Improved access to information and knowledge* → International content (reports, technical documents, studies) becomes immediately accessible in local languages.
- *Accuracy thanks to neural translation models (NMT)* → Neural translation engines understand context and produce more natural-sounding texts than older statistical models.
- *Multiformat support* → automatic translation of texts, documents (PDF, DOCX, HTML), and data streams in real time.
- *Linguistic customization* → ability to train custom models with glossaries or corporate terminologies for more consistent translations.
- *AI Model Updates* → Constantly updating the included neural models, improving accuracy and language support without manual intervention.

<a id="AI-search"></a>

### AI Search - RAG

![AI Search - RAG Service](assets/images/extract/media/AIsearch.png)

#### Services Description

AI Search-RAG is a system developed by Leonardo for automatically generating answers to user-generated questions using context and information from reliable data sources.
It can be integrated into environments requiring a virtual assistant capable of responding using reliable, contextualized information.
The system generates answers by first searching for relevant information or passages from a reliable external knowledge base using AGENTIC RAG (Retrieval-Augmented Generation) techniques.
This service allows for better contextualization of the search, further improving the quality and accuracy of the generated answers compared to traditional text-based RAGs.
AI Search allows individuals and organizations to quickly access relevant, contextualized information through a simple and intuitive graphical interface built on a chat model, improving efficiency and productivity through advanced intelligent search tools.

#### Features and Advantages

The service offers the following main features:

- *Activation of the Big Data PaaS Data Lake service* → to meet object storage needs.
- *Use of appropriately optimized Large Language Models and Embeddings* → to provide value to specific contexts and for specific users.
- *User authentication* → integrates with existing security protocols.
Understands natural language → provides coherent and complete answers, retrieving multimodal information from knowledge expressed as text and audio.
Supports multilingual models
- *Feedback collection* → after a query is resolved, AI Search collects user feedback
- *Document segmentation by user*

The main components of the service are:

- *Model Repository* → at a minimum, a virtual assistant and an embedding model are required.
- *Vector Database and Search Engine* → it uses a vector database that stores vector representations (embeddings) of the input data, allowing documents and information to be retrieved based on their meaning (semantic search). It also uses a traditional search engine (lexical search) that operates on text and metadata, performing searches based on keywords and structured criteria (e.g., BM25, FT-IDF).
- *Document Manager* → responsible for retrieving documentation from a specific repository and indexing it in the vector database for use in user queries.  
AI Search is composed of three layers:

- *Data layer* → represents the database and the primary source of information.
- *Analysis layer* → responsible for all processing, analysis, and generation of answers to user queries. It includes the Retriever and the Generator, responsible for retrieving the most relevant information and creating coherent and personalized responses, respectively.
- *User layer* → interface through which the user interacts directly with the service, offering the ability to query the knowledge base, view answers with referenced sources, manage documents, and provide feedback.

The service is sized per GPU unit. Each unit consists of one NVIDIA H100 GPU.  

The service offers the following advantages:

- *Access to up-to-date knowledge* → answers always based on the most recent internal and external documents.
- *Reduced operational costs* → less time spent on manual searches and repetitive support.
- *Improved customer/employee experience* → relevant, clear, personalized answers.
- *Increased competitiveness* → leverages proprietary knowledge, not just public knowledge.
- *Risk mitigation* → reduces errors and hallucinations, increasing the relevance of output to user questions.
- *Upgradability without retraining* → simply update the database/document repository, not the LLM.
- *Hybrid vector search* → combines semantic search with traditional text search.
- *Model efficiency* → LLM-based host model oversees activities and decisions and supervises other, simpler agents (LLM).
- *Traceability and transparency* → sources cited to support the answer can be displayed.
- *Bias reduction* → thanks to the indexing of the text on a vector DB, the LLM conductor will receive as input a context relevant to the questions asked by the users.

<a id="AI-platform"></a>

### Paas - AI Platform

![AI Platform Service](assets/images/extract/media/AIplatform.png)

#### Services Description

The AI ​​Platform PaaS service developed by Leonardo uses AI technologies (machine learning and deep learning) to provide domain experts (data scientists, data analysts, and AI engineers) with a collaborative platform to create, track, use, and monitor ML models simply and intuitively, yet reliably and efficiently.  
The service provides a ready-to-use platform capable of easily managing the entire lifecycle of ML models. The solution is certified, managed, and maintained by the provider.  
The platform can be enhanced using, in addition to the Data Lake service, other technologies made available by the Big Data PaaS.  
The services are designed to ensure digital sovereignty through deployment on secure national infrastructure, with a particular focus on latency and optimization of computational resources.

#### Features and Advantages

The platform is capable of managing the lifecycle of ML models through the following phases:

- *Data processing* → which will be optimized if the Big Data PaaS Data Governance and Processing Engine services are activated for the extraction, transformation, and loading of datasets into the AI ​​Platform.
- *Model training and evaluation process* → through a JupyterLab on the AI ​​platform.
-* Model tracking and saving process*. 
- *Model management process* → through the model registry provided by the MLOps tool.
- *Model serving process* → for the creation of Docker images ready for deployment on any target system. These can be tested directly on the platform through the swagger describing the inference service.

The solution is primarily composed of the following custom tools:

- *JupyterLab* → allows the creation and sharing of web scripts in JSON format using a Notebook, which follow a schema and an ordered list of input/output cells. The created Jupyter documents can be exported as HTML, PDF, Markdown, or Python documents.
- *Mlflow* → allows for the lifecycle management of ML models. It simplifies the complex procedures for implementing machine learning. Consisting of:

    - MLflow Tracking: records and tracks metrics and artifacts (models plus their dependencies) of the training process.
    - MLflow Model Registry: stores models in a centralized registry to collaboratively manage the entire model lifecycle.
    - DBMS Metadata: stores all metadata in a relational database to track all development flows of a given ML model.
    - Object Storage: stores all developed models and their dependencies to facilitate the subsequent model serving process in production.

- *Model Serving* → facilitates the deployment of ML models at scale in production environments through the creation of Docker images.

The service is sized per worker. Each worker consists of a Spark/Tensorflow/Keras/scikit 26-core physics processor 2.70 Ghz virtualization ratio 1:2 - Nvidia A100 dedicated.

The service offers the following advantages:

- *Reduced initial and operational costs* → there is no need to invest in hardware infrastructure (GPU, cluster, server, storage, etc.), thus reducing maintenance, upgrade, and security costs.
- *Scalability* → the service can scale compute and storage resources based on model complexity or data volume.
- *Faster time to market* → models can be developed, tested, and deployed much faster thanks to pre-built tools and pipelines.
- *Focus on business value* → domain experts can focus on model research and development, increasing team productivity and efficiency.
- *Easy integration with other services* → trained models can be quickly integrated with other services (API management, Business Intelligence, Data Lake, etc.) to create complete AI-driven solutions.
- *Automated model lifecycle management* → native MLOps support for model versioning, performance monitoring, and automatic retraining.
- *Managed and optimized environment* → the execution environment is preconfigured with ML libraries, with security updates and patches managed by the provider.
- *Integrated monitoring and logging* → training metrics, logs, and results are tracked to easily diagnose convergence or overfitting issues.
- *Simplified deployment* → creating Docker images for model inference allows for simplified deployment to any target system.

<a id="AI-SLM-LLM"></a>

### AI SLM/LLM

![AI SLM/LLM Services](assets/images/extract/media/LLM.png)

#### Services Description

These are Generative AI PaaS developed by Leonardo that provide optimized linguistic inference capabilities. They use predefined linguistic models to understand and generate natural text.  
They allow the use of two types of linguistic models:

- *Small Language Model (SLM)*: small-scale linguistic models that are lighter, more efficient, and specialized in specific domains, offering fast and precise solutions for everyday linguistic needs.
- *Large Language Model (LLM)*: linguistic models with numerous parameters for extremely high linguistic comprehension and generation capabilities, ideal for complex interactions, virtual assistants, semantic search, and automation.
SLMs are suitable for performing specific, less complex applications and tasks (e.g., text autocompletion, short sentence translation, and text classification), where an LLM would be too computationally expensive.

#### Features and Advantages

The service offers the following main features:

- *Tenant isolation* → each customer will have a dedicated Tenant on the PSN infrastructure with complete isolation of data, configurations, and uploaded models.
- *Resource allocation* → each customer will be assigned dedicated infrastructure resources (CPU, GPU, RAM, Storage) to their Tenant, sized appropriately.
- *Auto-scaling* → tenant resources can scale to respond to load variations.
- *Cloud-native deployment* → the service will be deployed in the customer's tenant in cloud-native mode on the OpenShift platform, ensuring portability, resilience, and standardization of operating procedures.
- *Centralized observability* → provides centralized platform monitoring services with log collection, metrics, and alerting for complete observability, audit trails, and advanced troubleshooting.
- *PaaS integration* → uses PSN PaaS components for storage, networking, security, and identity management, ensuring compliance with project requirements and leveraging the economies of scale of shared infrastructure.

Both services feature a modular architecture designed to ensure scalability, flow segregation, and ease of integration into public administration processes.

- *API Layer* → provides access to SLM/LLM services through two main methods: REST API calls for integration with existing systems, or through a Web UI for direct, user-friendly interaction.
- *Inference layer* → this is the heart of the service, where SLM/LLM models reside and execute. It consists of:
- *Inference engine* → runs language models optimized for latency and GPU/CPU resource consumption.
- *Model pool management* → maintains a set of validated and pre-configured models, selectable by the customer. Only one model is active per tenant at any time.
- *Platform layer* → provides cross-functional support services and includes: Resource Management & Scaling: Dynamic allocation of computational resources (CPU, GPU, RAM, storage), load-based auto-scaling, and service lifecycle management.

The services are sized per GPU unit:

- for AI SLM service each unit consists of 1 partition NVIDIA H100 GPU.
- for AI SLM service each unit consists of 3 NVIDIA H100 GPUs.

The service offers the following advantages:

- *Technological accessibility* → access to no-code Generative AI technology solutions.
- *Reduced operating costs* → no upfront investment in hardware infrastructure or proprietary models.
- *Faster time to market* → easier models to integrate into business solutions.
- *Operational efficiency* → automate repetitive tasks, reducing processing times and improving service quality.
- *Flexible adoption* → choose between SLM (small, specialized models) or LLM (generalist models with broader knowledge capabilities) depending on the use case.
- *Risk mitigation* → leverage pre-trained and validated models without the need for specialized ML skills.
- *Easy integration with existing systems* → orchestrate complex processes through microservices and integrated ML pipelines.
- *Performance optimization* → PaaS allows you to combine both advantages: use SLM for simple, targeted tasks, while LLM is used only for tasks that require broader, more generalized linguistic understanding.
- *Fast and simplified model testing* → ready-to-use models thanks to the playground functionality available directly in the interface.
-* Rapid prototyping and DevOps AI* → ready-to-use environment for developing, testing, and deploying applications through standard interfaces.
- *Multi-model and hybrid AI* → ability to combine open source and proprietary models in the same ecosystem.

<a id="AI-workflow"></a>

### AI workflow

![AI workflow Service](assets/images/extract/media/AIworkflow.jpg)

#### Services Description

A service that allows users to create, orchestrate, automate, and deploy visual workflows for data manipulation, analysis, and modeling, without writing code.  
It allows users to add and customize workflow nodes to meet their specific needs. It also supports distributed workflow execution, making it suitable for compute-intensive scenarios.  
Specifically, it allows users to: design AI workflows without writing complex code; run and scale analytics or machine learning processes in the cloud; integrate models, APIs, and heterogeneous data; and automate end-to-end analysis or decision-making pipelines.

#### Features and Advantages

The service offers the following main features:

- *Multiple connectors* → connect to databases, files, REST APIs, cloud storage, web services, IoT systems.
- *Data cleansing and transformation* → drag-and-drop functions to normalize, filter, aggregate, and enrich data.
- *Integrated ML models* → preconfigured nodes for regression, classification, clustering, NLP, and anomaly detection algorithms.
- *Automated execution* → scheduling, event-based triggers, conditional flows, and parallelized jobs.
- *MLOps & Deployment* → publish AI models as REST APIs or containers (Docker/Kubernetes).
- *Collaboration & Governance* → user management, permissions, version control, auditing, and rollback workflows.

The main components of the service are:

- *Analytics platform (Frontend)* → drag-and-drop visual environment for creating AI/ML workflows and data pipelines.
- *Business hub (Backend PaaS)* → heart of the cloud service: manages users, executions, versioning, and deployment.
- *Execution environment (Cluster/Container)* → runs workflows on scalable nodes, on-demand or scheduled.
- *Data Connectors layer* → modules for accessing external data sources.
- *Integration layer* → interface with external languages ​​(or ML frameworks).
- *Monitoring layer* → execution metrics, job status, logging, and error alerts.

The service is sized per Users and vCore per unit, respectively 10 users and 8 vCores per unit.

The service offers the following advantages:

- *Reduced time to market* → analytical workflows and predictive models can be developed, tested, and put into production in a fraction of the time, improving responsiveness compared to competitors.
- *Reduced IT infrastructure costs* → PaaS eliminates the need for dedicated servers, hardware maintenance, and customer-paid software updates.
- *Democratization of AI and Data Science* → The low-code/no-code approach also allows non-technical professionals (analysts, managers) to participate in the construction and optimization of decision-making flows.
- *Greater transparency and traceability of decisions* → each step of the analytical process is visible and documented in the workflow, increasing the reliability and explainability of automated decisions.
- *Optimization of business performance* → AI pipelines improve forecasting, resource allocation, predictive maintenance, customer analytics, and other key areas, generating direct ROI.
- *End-to-end automation of AI flows* → ability to schedule, orchestrate, and automate complete pipelines.
- *Rapid prototyping and reusability* → workflows can be cloned, reused, or shared in centralized repositories to accelerate new projects or variants.
- *Full MLOps support* → model lifecycle management (train, test, deploy, monitor), simplified versioning, and rollback.
- *Automated updates and maintenance* → patch management, version updates, and library dependencies without interrupting active workflows.
- *Reduced deployment complexity* → models and flows can be quickly deployed as microservices or REST APIs, eliminating the need for manual DevOps.

<a id="AI-vectorDB"></a>

### AI Vector DB

![Vector DB Service](assets/images/extract/media/Vector.png)

#### Services Description

Based on a modern, open-source vector database technology (Lance DB) optimized for AI and machine learning, Leonardo's service enables scalable, high-performance storage, indexing, and search of vector data (embeddings), without having to manage the underlying infrastructure.  
It offers persistent storage and efficient indexing of embeddings, enabling fast and scalable searches across large volumes of vector data.  
From a business perspective, it enables semantic search applications, personalized recommendations, intelligent chatbots, and augmented retrieval systems (RAG).  
It reduces infrastructure costs by unifying multimodal data management and simplifying AI/ML workflows. It increases development speed thanks to deployment flexibility.  
It offers scalability and high performance to support production-level AI workloads with complex data flows.

#### Features and Advantages

The service offers the following main features:

- *Unified repository for data and vectors* → the solution allows you to store not only embeddings (vectors) generated by AI models, but also the "original" data (text, images, audio, video) and associated metadata, all in the same environment.
- *Multimodal support* → the solution is designed to work with data from different modalities: text, images, video, audio, point clouds, etc.
- *Vector search* → embedding search functionality: given an embedding query, find the most similar vectors.
- *Advanced vector indexing* → support for indexing algorithms that make searching large datasets efficient.
- *Data versioning and high-performance columnar format* → LanceDB uses a columnar format called "Lance" (open-source), optimized for ML/vector workloads.
-* SQL and analytics integration beyond vector* → Not just similarity search; LanceDB allows SQL/analytics queries on data (metadata, additional columns) in addition to vector operations.
- *Flexible deployment* → serverless managed PaaS (LanceDB Cloud) for production without managing infrastructure.

The main components of the service are:

- *Data ingestion layer* → collects and prepares data from various sources (text, images, audio, video, logs, documents, corporate databases, etc.). FastAPI Framework → Modern, fast (high-performance) web framework for building APIs with Python, based on OpenAPI and JSON Schema standards.
- *Vector storage layer* → efficiently stores vectors and related data.
- *Indexing & Search engine* → enables vector search by similarity (nearest neighbors) and optimized indexing.
- *Query & API layer* → exposes database functionality to developers and applications.
- *Compute & Scaling layer* → manages compute resources, scalability, and service performance.
- *Security & Compliance layer* → ensures data protection and regulatory compliance.
- *Monitoring, logging & observability layer* → provides visibility into system behavior and performance.
- *Developer & Management console* → web interface for administrators and developers for managing datasets and indexes, viewing embeddings and search results, configuring security and access policies, monitoring costs, plans, and usage metrics.

The service is sized for unit queries. Each query consists of 120 QPS queries per second.

The service offers the following advantages:

- *Enhancement of unstructured information assets* → VectorDB allows you to transform this content into searchable and analyzable data thanks to semantic embeddings.
Improved productivity, faster decisions, and reduced search time → by enabling semantic and contextual search, no longer based on keywords. Users can query the knowledge base with natural language.
- *Enabling advanced AI applications* → a key component for solutions such as RAG, recommendation engines, and multimodal analysis, which facilitate integration with LLM models and generative AI tools.
- *Reduced operating costs and increased efficiency* → no investment in hardware or personnel for database management. Optimization of search and document analysis processes.
- *Accelerated time-to-market* → no need to manage infrastructure, configurations, or manual scaling, so developers can integrate semantic search quickly.
- *Scalability and high performance* → Cloud-native architecture with vertical and horizontal autoscaling, ANN indexes (HNSW, IVF_PQ) that enable millisecond searches even on huge datasets.
- *Easy management (fully managed PaaS)* → No need for provisioning, tuning, or software updates. Backup, replication, and high availability managed by the provider.
- *Hybrid and multimodal query support* → combines vector search + structured filters (SQL). Manages text, image, audio, and video embeddings in a single data model.
- *Reliability, security, and compliance* → end-to-end encryption, IAM access control, API tokens, audit logging. Secure management of sensitive data (embedding anonymization).
- *Maintainability and continuous updates* → automatic updates of the LanceDB engine and indexing models. No downtime for patches or upgrades.

## Virtual Desktop Infrastructure (VDI) Family

Below is the list of services belonging to the Virtual Desktop Infrastructure (VDI) family:

- [VDI](#VDI)
- [VDI with GPU support](#VDI-GPU)

<a id="VDI"></a>

### VDI

![VDI Service](assets/images/extract/media/VDI.png)

#### Services Description

Powered by Citrix solution, the Virtual Desktop Infrastructure (VDI) service allows users to access and manage virtual desktops hosted on centralized servers, providing a secure and customizable work environment accessible from any internet-connected device.  
VDI (named or shared) with a predefined set of applications and dedicated storage space for each user.

#### Features and Advantages

The service offers the following main features:

- *Centralized remote access* → users access virtual desktops or applications from any location and device.
- *Optimized user experience* → HDX (High Definition Experience) technology optimizes the user experience even under network conditions with latency or limited bandwidth
- *Advanced security* → data remains in the data center, not on the user's device, through appropriate policies. Multi-factor authentication (MFA), single sign-on (SSO), traffic encryption, data isolation.
- *Centralized management* → updates, patches, and policies distributed centrally from a single console (Citrix Studio/Director).
- *Monitoring and diagnostics* → advanced performance monitoring and troubleshooting tools (Citrix Director, Citrix Analytics).

The main components of the service are:

- *Delivery Controller* → manages user authentication, load balancing, and resource assignment.
- *Database* → a virtual apps or virtual desktops site uses three SQL Server databases (installed on a single DB Server in an HA configuration).
- *Virtual Delivery Agent (VDA)* → installed on virtual desktops, allows the machine to register with the Controller, which in turn makes the virtual machine and the resources it hosts available to users.
- *StoreFront* → portal through which users connect to access virtual apps or desktops.
- *Receiver / Citrix Workspace App* → the client that runs on the user's device and allows access to the remote desktop/app.
- *Studio* → you can manage the virtual desktops deployment using two management consoles: Web Studio (Web BASed) and Studio (Windows client)
- *Director *→ dashboard that allows IT support and helpdesk teams to monitor the environment, resolve issues before they become system-critical and perform end-user support activities.
- *License Server* → manages product licenses. It communicates with the Controller to manage licenses for each user session and with Studio to allocate license files.
- *Hypervisor* → hosts the VMs that make up the infrastructure and virtual desktops.

The service is offered with the following unit metric: *250 concurrent users (8VCPUs, 16GB RAM, 256 GB of Storage)*.

The service offers the following advantages:

- *Reduced operating costs* → optimize operations through centralized management and save device costs through BYOD (Bring Your Own Device) support.
- *Increased security* → data protection through appropriate policies.
- *Increased productivity* → consistent and seamless user experience, regardless of the device used.
- *Business continuity and disaster recovery* → always-on desktops.
- *Centralized management *→ patches, updates, and policies are centrally applied.
- *Scalability* → easily add/remove users and resources as needed.
- *Cross-platform compatibility* → Windows, Linux, macOS, iOS, Android, browsers.

<a id="VDI-GPU"></a>

### VDI with GPU support

![VDI with GPU support Service](assets/images/extract/media/VDI.png)

#### Services Description

It is a more advanced version of the previously described VDI service that supports graphics accelerator (GPU) management for additional graphics acceleration capabilities.

#### Features and Advantages

The service offers the same basic features as the previously described VDI service with the addition of GPU support capabilities.  
VMs can have graphics acceleration features for users who require software such as CAD/CAM (e.g., AutoCAD, SolidWorks), 3D modeling (e.g., Blender, 3ds Max), GIS (e.g., ArcGIS), Scientific rendering and visualization, and video editing (e.g., Adobe Premiere, DaVinci Resolve). Examples of additional features include HDX 3D Pro, GPU virtualization (NVIDIA vGPU, AMD MxGPU), high-performance remote access, multi-monitor and 4K support, and bandwidth and latency optimization.  

The service offers the same components as the previously described VDI service.

The service is offered with the following unit metric: *250 concurrent users (8VCPUs, 16GB RAM, 256 GB of Storage)*.

The service offers the following advantages:

- *Reduced hardware costs* → no need to purchase expensive graphics workstations for each user: GPU computing power is centralized in the cloud.
- Scalability and flexibility → easily increase or decrease GPU/CPU resources based on seasonal or project-specific loads. Suitable for distributed and temporary teams (e.g., consultants, freelancers, partners).
- *Business continuity and disaster recovery* → everything runs on a managed and resilient infrastructure. Automatic backups and failovers ensure business continuity even in the event of local failures.
- *Improved productivity and remote access* → users can access 3D, CAD, or data science applications from any device, with the same performance as a local machine. Ideal for remote working and global collaboration.
- *GPU acceleration* → support for graphics-intensive workloads (CAD, BIM, GIS, 3D rendering, simulations, AI/ML). Smooth performance thanks to technologies such as NVIDIA vGPU, AMD MxGPU, etc.
- *Simplified management* → managed platform that reduces IT overhead (automated updates, patches, and provisioning). Directory integration, multifactor authentication, and granular access policies.
- *User experience optimization* → advanced protocols reduce latency and optimize remote rendering. Adaptive streaming: Balanced graphics quality based on available bandwidth.
- *Multi-cloud and hybrid-ready* → deploy virtual desktops across multiple cloud providers or in private data centers. Greater flexibility in managing costs and compliance.
- *Monitoring and analytics* → integrated telemetry and performance monitoring tools optimize user experience and GPU resource usage. Capacity planning automation.
- *Support for DevOps/CI-CD/A*I → GPU VDI environments can be integrated into DevOps workflows for testing graphics applications, 3D modeling, or training ML models.

## Collaboration Family

Below is the list of services belonging to the Collaboration family:

- [Instant Messaging](#messaging)

<a id="messaging"></a>

### Instant Messaging

![Instant Messaging Service](assets/images/extract/media/IM.png)

#### Services Description

It is a messaging and collaboration platform based on the Mattermost solution that offers secure tools for team communication, file sharing, and integration with other applications, supporting productivity in distributed work environments.  
It allows you to organize all team communications in one place via channels. In addition to standard messaging, channels support automation, slash commands, bot integrations, code snippets, and more.  
Suitable for environments with high security, privacy, and control requirements. It supports multi-factor authentication, Active Directory, LDAP, SSO, and more.  
The platform can be customized and extended by integrating it with the tools your team uses daily.

#### Features and Advantages

The service offers the following main features:

- *Playbooks* → playbooks allow you to orchestrate work across tools and teams. They are prescribed workflows that support specific digital operations scenarios.
- *Audio calls* → it offers native audio calls on channels.
- *Integrations and customizations* → support for slash commands, bots, and inbound and outbound webhooks; extensive ecosystem of plugins and integrations; extensive APIs for extending functionality or building custom applications.
- *Accessibility* → cross-platform clients (web, desktop, mobile); Deployable behind firewalls/in private, air-gapped environments.
- *Security, Privacy, and Governance* → support for: encryption (in transit, at rest); Access control (Single Sign-On MFA, granular roles and permissions); Governance, privacy, and compliance; Zero Trust policy.

The main components of the service are:

- *Backend server* → can use MySQL or PostgreSQL as a database) that hosts messages, users, and files.
- *Storage for file attachments, images, etc.* → can be local or cloud-based (S3, MinIO, etc.).
- *WebSocket channels* → for real-time message transmission.
- *Configurable for scalability* → cluster support, high availability, deployment on Kubernetes, isolated networks.

The service is offered with the following unit metric: *1000 users*.

The service offers the following advantages:

- *Complete data control* → useful for regulated sectors (finance, public administration, healthcare).
- *Reduced lock-in* → open source/source-available, no dependency on proprietary vendors.
- *Compliance and governance* → audit trail, retention policy, exports for legal and regulatory controls
- *Support for secure remote working* → mobile/desktop access with encryption and strong authentication.
- *Adaptable to different sectors* (legal, manufacturing, public administration, tech) thanks to customization options.
- *Extensive APIs and plugins* → extensive integration options with DevOps, CI/CD, ticketing, monitoring.
- *Advanced security* → SSO (SAML, LDAP, OIDC), MFA, encryption in transit and at rest
Scalability → clustering, load balancing, support for enterprise and mission-critical environments.

## Database Family

Below is the list of services belonging to the Database family:

- [PaaS SQL - PostgreSQL](#postgres)
- [PaaS SQL - MariaDB](#mariaDB)
- [PaaS SQL - MS SQL Server EE](#sqlserver)
- [PaaS SQL - MS SQL Server EE (BYOL)](#sqlserver-byol)
- [PaaS GraphDB](#graphDB)
- [PaaS NoSQL - MongoDB](#mongoDB)
- [PaaS In Memory - Redis](#redis)

<a id="postgres"></a>

### PaaS SQL - PostgreSQL

![PostgreSQL client interface](assets/images/extract/media/postgres.png)

#### Services Description

The PaaS SQL – PostgreSQL is a cloud-based managed platform that provides ready-to-use PostgreSQL database instances without requiring the user to install, configure, or maintain the underlying infrastructure.  
In essence, it delivers PostgreSQL “as a service”, allowing developers and organizations to focus on application development and data management instead of database administration.  
PostgreSQL in a highly available configuration is a reliable solution for organizations seeking an open source database with performance, security, and scalability. This service is ideal for applications that require reliability without the costs of commercial database solutions.  

The service could be used to:

- Host and manage relational databases in the cloud.
- Store and query structured data efficiently.
- Support applications that need high availability, scalability, and data integrity.
- Simplify DevOps workflows by automating database management tasks.
- Integrate easily with other cloud services (analytics, AI, APIs, etc.).

#### Features and Advantages

The service offers the following main features:

- *Fully managed service* → semplify provisioning, configuration, patching, and upgrades.
- *Scalability* → vertical and horizontal scaling of compute and storage resources as needed.
- *High availability and reliability* → built-in replication, automatic failover, and multi-zone deployment options.
- *Backup and recovery* → automated backups, point-in-time restore, and disaster recovery capabilities.
- *Security and compliance* → data encryption (in transit and at rest), identity and access management (IAM), network isolation (VPC/Private Link), and compliance certifications (e.g., GDPR, ISO, SOC).
- *Performance optimization* → query optimization, connection pooling, caching, and monitoring tools.
- *Monitoring and alerting* → integration with dashboards and metrics (CPU, memory, I/O, query performance).
*Integration and extensibility* → compatible with PostgreSQL extensions (e.g., PostGIS, pg_partman, pg_stat_statements). API and CLI tools for management and automation.

The main components of the service are:

- *Control Plane* → it is the part of the service that manages the lifecycle and orchestration of database instance. Composed by: API, provisioning, configuration, monitoring
- *Data Plane*  → it is the layer where PostgreSQL instances actually run. Each instance can be isolated in a VM, container, or pod, depending on the implementation
- *HA & Resilience* → it ensures that the service remains available even in the event of hardware or software failures. It implements replications, failovers and backups policies.
- *Security layer* → it ensures data protection and access control for respecting of the protection & compliance policies: authN/AuthZ, encryption, firewalls, auditing
- *Observability Layer* → It provides visibility and continuous management of the service, offrering monitoring & operations like metrics, logging, auto-patching.

The service is offered per DB instance. Each instance consists of: 

- 4 vCPUs
- 16 GB of RAM
- 500 GB of Storage (with replication).

The service offers the following advantages:

- *Cost Efficiency* → no hardware or infrastructure investment. Reduced operational costs: no need for DBA teams to handle maintenance, patching, or scaling manually.
- *Faster Time-to-Market* → database instances can be provisioned quickly through a web interface or API. Ideal for rapid development, prototyping, and product launches. Reduces dependency on infrastructure provisioning cycles.
- *Business agility and scalability* → elastic scaling of resources (CPU, RAM, storage) without downtime. Easily adapts to varying workloads and seasonal demand. Enables agile business models, including microservices and cloud-native architectures.
- *Increased reliability and availability* → High Availability (HA) and automated failover mechanisms ensure continuous uptime. Built-in replication and backup policies protect against data loss. Improves business continuity and reduces downtime risk.
- *Focus on Core Business* → the organization focuses on application development and innovation, not on database administration. Simplifies the technology stack and reduces management overhead.
- *Compliance and Risk Reduction* → the service provider ensures security, patching, and compliance with standards. Reduces risk of configuration errors or unpatched vulnerabilities.
- *Standardization and portability* → based on open-source PostgreSQL, ensuring compatibility and avoiding vendor lock-in. Databases can be exported or migrated easily to other PostgreSQL environments. Supports extensions and features like PostGIS, JSONB, and logical replication.

<a id="mariaDB"></a>

### PaaS SQL - MariaDB

![MariaDB client interface](assets/images/extract/media/mariaDB.jpg)

#### Services Description

The PaaS SQL – MariaDB is a managed Database-as-a-Service (DBaaS) offering that provides fully managed MariaDB database instances in the cloud.  
It abstracts away the complexity of infrastructure, deployment, and database administration, allowing users to focus on application development rather than operational maintenance.  
The service handles provisioning, configuration, patching, backups, scaling, monitoring, and high availability of MariaDB databases.  
The PaaS SQL – MariaDB service is designed to support:

- Web applications and enterprise systems that require a relational SQL database.
- Developers who need quick and consistent access to production-ready databases without managing servers.
- Organizations aiming to reduce database maintenance overhead and improve performance, reliability, and security.

Typical use cases:

- Backend databases for web portals, CMS, ERP, CRM, or e-commerce systems.
- Data storage for microservices or APIs.
- Development and testing environments.
- Data analytics and reporting using SQL queries.

#### Features and Advantages

The service offers the following main features:

- *Fully managed lifecycle* → automated provisioning, configuration, updates, and patching. Backups and restores scheduled and managed by the platform. Monitoring and alerting for performance and availability.
- *High availability & reliability* → native MariaDB replication for redundancy. Automatic failover between primary and replica nodes in case of failure. Point-In-Time Recovery (PITR) for data protection. Backups stored on redundant storage systems.
- *Scalability* → vertical scaling: increase CPU, memory, or storage capacity dynamically. Horizontal scaling: optional read replicas for load distribution. Elastic scaling with minimal downtime.
- *Security* → data encryption at rest and in transit (SSL/TLS). Authentication and authorization with role-based access control. Network isolation via virtual private networks (VPC/VNet). Audit logging for security and compliance.
- *Performance optimization* → built-in query optimization and caching. Configurable parameters (buffers, thread pools) based on service tiers. SSD-backed storage for low-latency I/O. Connection pooling and resource limits to prevent overload.
- *Monitoring and integration* → real-time metrics and dashboards (CPU, I/O, connections, slow queries). Integration with external tools like Prometheus, Grafana, or APM systems. REST API and CLI for automation and DevOps pipelines.

The PaaS SQL MariaDB service is organized into multiple logical layers, each responsible for specific functions within the system.

- *Control plane (Management Layer)* → this layer manages the lifecycle and orchestration of MariaDB instances.
- *Data Plane (Execution Layer)* → this layer hosts and executes the actual MariaDB database workloads.
- *HA & resilience layer* → ensures fault tolerance and continuity of service.
- *Security & Access layer* → provides protection, compliance, and controlled access.
- *Observability & operations layer* → provides visibility, maintenance, and automation tools for both provider and customer.

The service is offered per DB instance. Each instance consists of: 

- 4 vCPUs
- 16 GB of RAM
- 500 GB of Storage (with replication).

The service offers the following advantages:

- *Cost efficiency* → no hardware or infrastructure investment. Reduced operational costs: no need for DBA teams to handle maintenance, patching, or scaling manually.
- *Faster Time-to-Market* → database instances can be provisioned quickly through a web interface or API. Ideal for rapid development, prototyping, and product launches. Reduces dependency on infrastructure provisioning cycles.
- *Business agility and scalability* → elastic scaling of resources (CPU, RAM, storage) without downtime. Easily adapts to varying workloads and seasonal demand. Enables agile business models, including microservices and cloud-native architectures.
- *Increased reliability and availability* → High Availability (HA) and automated failover mechanisms ensure continuous uptime. Built-in replication and backup policies protect against data loss. Improves business continuity and reduces downtime risk.
- *Focus on core business* → the organization focuses on application development and innovation, not on database administration. Simplifies the technology stack and reduces management overhead.
- *Compliance and risk reduction* → the service provider ensures security, patching, and compliance with standards. Reduces risk of configuration errors or unpatched vulnerabilities.
- *Standardization and portability* → based on open-source PostgreSQL, ensuring compatibility and avoiding vendor lock-in. Databases can be exported or migrated easily to other MariaDB environments.

<a id="sqlserver"></a>

### PaaS SQL - MS SQL Server EE

![SQL Server EE client interface](assets/images/extract/media/sqlserver.png)

#### Services Description

The PaaS SQL – Microsoft SQL Server Enterprise Edition (EE) service is a fully managed relational database platform that delivers the capabilities of Microsoft SQL Server EE in a cloud-based, Platform-as-a-Service (PaaS) model.  
It provides users with dedicated or shared SQL Server instances, managed and operated by the service provider, while abstracting away all infrastructure management tasks such as provisioning, patching, scaling, backup, and high availability.  
The service offers enterprise-grade database performance, security, and resilience, optimized for mission-critical workloads and advanced analytics.  
This service is designed to support enterprise and business-critical applications that require reliable, scalable, and high-performance SQL database functionality without the operational overhead of managing on-premises infrastructure. Typical use cases include:

- Core enterprise systems (ERP, CRM, SCM).
- Business intelligence (BI) and data warehousing workloads.
- Transactional applications (OLTP) and mixed OLAP/OLTP environments.
- Data integration and analytics pipelines using SQL Server Integration Services (SSIS) or Analysis Services (SSAS).
- Applications requiring high availability, disaster recovery, and compliance assurance.

#### Features and Advantages

The service offers the following main features:

- *Fully managed service* → managing of provisioning, patching, configuration, version upgrades, monitoring, maintenance, and optimization. Integration with management portals and APIs for self-service database operations.
- *High availability and disaster recovery *→ always on Availability Groups (AG) for real-time replication and automatic failover. Built-in geo-replication and multi-zone deployment for business continuity Point-In-Time Restore (PITR) from continuous transaction log backups.
- *Scalability and elasticity* → vertical scaling: adjust compute, memory, and storage resources dynamically. Read replicas: enable workload offloading for reporting or analytics. Elastic pools for cost-effective management of multiple databases with variable load patterns.
- *Enterprise performance and optimization* → advanced query optimization via Query Store, Adaptive Query Processing, and Columnstore Indexes. In-Memory OLTP and Buffer Pool Extension for high-performance transactions. SSD or NVMe-backed storage for low-latency I/O. Intelligent workload tuning and automatic statistics maintenance.
- *Security and compliance* →  Transparent Data Encryption (TDE) and always encrypted. Integration with Active Directory (AD) and Azure AD for identity and role management. Row-Level Security, Dynamic Data Masking, and Auditing. Compliance with cyber security standards.
- *Analytics and integration* → support for SQL Server Analysis Services (SSAS) for OLAP cubes and data modeling. SQL Server Integration Services (SSIS) for ETL and data movement. SQL Server Reporting Services (SSRS) for enterprise reporting. Integration with Power BI, Azure Synapse, and other analytics ecosystems.
- *Monitoring and automation* → integrated dashboard and alerting system with real-time metrics on performance, connections, and query activity. Full API and CLI support for automation and DevOps integration. Logs and metrics exportable to external observability tools.

The main components of the service are:

- *Control plane (Management layer)* → it is responsible for orchestration, automation, and lifecycle management of SQL Server instances.  
Key Components: Management API / Portal, Provisioning engine, Configuration manager, Monitoring & metrics collector, Billing & subscription manager.
- *Data plane (Execution layer)* → it hosts the actual Microsoft SQL Server EE instances where user databases reside and operate.  
Key Components: SQL Server instances, Storage subsystem, Networking layer, Backup and recovery service.
- *High Availability & Resilience layer* → ensures the database service remains available and fault-tolerant.   
Key Components: Always On Availability Groups (AG), Failover controller, Geo-replication manager, Backup orchestrator.
- *Security & Access layer* → provides protection, compliance, and controlled access to data and administrative functions.  
Key Components: Authentication & authorization (integration with AD/Azure AD, support for MFA), Encryption Services (TDE, SSL/TLS, and Always Encrypted for data protection), Network Security.
- *Observability & Operations layer* → ensures visibility, performance optimization, and operational maintenance.  
Key Components: Performance monitoring, Alerting & incident management, Auto-patching System, Maintenance scheduler, Logging system.

The service is offered per DB instance. Each instance consists of: 

- 8 vCPUs
- 16 GB of RAM
- 500 GB of Storage

The service offers the following advantages:

- *Reduced Total Cost of Ownership (TCO)* → eliminates capital expenses for hardware, networking, and software licensing.
- *Faster Time-to-Market* → databases can be provisioned quickly. Preconfigured and optimized SQL Server templates accelerate development and deployment cycles. Ideal for agile, DevOps, and CI/CD environments where rapid iteration is required.
- *Enterprise-grade reliability and availability* → built on SQL Server Enterprise Edition features such as Always On Availability Groups and In-Memory OLTP. Ensures continuous service availability with automatic failover and disaster recovery. Meets strict SLA targets for uptime and data durability.
- *Business agility and scalability* → scale compute, memory, and storage resources up or down without downtime. Supports variable workloads — from transactional processing to analytics — under a single service model. Allows businesses to expand globally through geo-replication and multi-region deployments.
- *Focus on core business Value* → offloads infrastructure management and DBA operations to the service provider. Frees internal teams to focus on data strategy, analytics, and business intelligence. Accelerates digital transformation by integrating seamlessly with enterprise and cloud ecosystems (e.g., Power BI, Azure, SAP).
- *Compliance and Governance* → enterprise-grade auditing, encryption, and access control meet global compliance standards. Provider-managed patching and updates reduce security and compliance risks. Supports fine-grained access policies and role-based authorization for regulated industries.

<a id="sqlserver-byol"></a>

### PaaS SQL - MS SQL Server EE (BYOL)

![SQL Server EE client interface](assets/images/extract/media/sqlserver.png)

#### Services Description

This service allows organizations to utilize their own licenses for MS SQL Server Enterprise Edition, reducing licensing costs while benefiting from fully managed and optimized management in the cloud.  

For all the details , please refer to the [PaaS SQL - MS SQL Server EE](#sqlserver).

#### Features and Advantages

For all the details , please refer to the [PaaS SQL - MS SQL Server EE](#sqlserver).

The service is offered per DB instance. Each instance consists of: 

- 8 vCPUs
- 16 GB of RAM
- 500 GB of Storage

<a id="graphDB"></a>

### PaaS GraphDB

![GraphDB client interface](assets/images/extract/media/graphDB.png)

#### Services Description

The PaaS Graph Database (GraphDB) service is a fully managed, cloud-based graph database platform designed to store, query, and analyze data based on complex relationships and interconnected structures.  
Unlike traditional relational databases that rely on tables and joins, a GraphDB represents data as nodes (entities) and edges (relationships), allowing for efficient traversal and querying of complex networks — such as social connections, knowledge graphs, fraud detection systems, and recommendation engines.  
As a Platform-as-a-Service (PaaS) offering, the GraphDB service automates all operational tasks, including provisioning, configuration, scaling, patching, backups, and monitoring, enabling developers and data scientists to focus solely on building graph-powered applications without managing the underlying infrastructure.  
The PaaS is intended for organizations and developers that need to manage and query highly connected data with low latency and high flexibility.  
It provides native graph storage and querying capabilities optimized for real-time relationship exploration, graph analytics, and pattern matching across large datasets. Common use cases include:

- Social networks: modeling user interactions, followers, and communities.
- Recommendation systems: deriving product, content, or connection suggestions based on relationships.
- Fraud detection: identifying suspicious transaction patterns and entity links.
- Knowledge graphs: semantic search, ontology management, and enterprise metadata modeling.
- Network and IT operations: modeling dependencies and topology in complex infrastructures.
- Master Data Management (MDM): representing relationships between people, organizations, and assets.

#### Features and Advantages

The service offers the following main features:

- *Fully managed service* → managing of provisioning, configuration, patching, and scaling of graph database clusters. Continuous monitoring and proactive maintenance. Built-in backup, restore, and snapshot management with defined retention policies.
- *Native graph model support* → supports both property graphs (e.g., Neo4j-compatible) and RDF graphs (semantic web standards). Enables flexible schema or schema-less design, allowing dynamic evolution of data models. Optimized for deep traversal queries, shortest-path calculations, and pattern matching.
- *High performance and scalability* → distributed architecture for horizontal scaling across multiple nodes.In-memory caching and optimized graph storage for high-speed traversals. Load balancing across query engines and replicas to ensure consistent performance. Low-latency graph query execution for complex relationship analysis.
- *High availability and fault tolerance* → clustered deployment with data replication across nodes or availability zones. Automatic failover and leader election for continuous service operation. Configurable consistency levels for balancing performance and data safety. Backup and Point-In-Time Recovery (PITR) options.
- *Advanced Querying and Analytics* → native support for graph query languages such as Cypher, Gremlin, SPARQL, or GraphQL extensions. Integration with graph analytics engines for algorithms like PageRank, community detection, and pathfinding. Full-text search and indexing capabilities for metadata and relationship attributes. Support for APIs and drivers in multiple languages (Python, Java, Node.js, Go).
- *Security and compliance* → encryption of data at rest and in transit (TLS/SSL). Authentication and authorization via IAM integration, role-based access control (RBAC), and fine-grained permissions. Network isolation with private endpoints, firewall rules, and VPC/VNet integration. Audit logging, compliance with GDPR, ISO 27001, and SOC 2 standards.
- *Integration and interoperability* → connectors and APIs for integration with data pipelines, ETL tools, and machine learning platforms. REST, GraphQL, or Bolt endpoints for application access. Integration with BI tools and data visualization frameworks for relationship exploration. Support for data federation and linking external data sources (SQL, NoSQL, RDF stores).

The main components of the service are:

*Control plane (Management and orchestration layer)* → this layer provides centralized control over the provisioning, configuration, and lifecycle management of GraphDB clusters.  
Key Components: Management API / Portal; Provisioning engine for automates deployment of graph database clusters across compute nodes; Configuration manager; Metrics & monitoring collector; Billing & quota manager for tracks usage (storage, query operations, nodes) and enforces subscription limits.
- *Data Plane (Execution layer)* → this layer hosts the actual graph databases and query processing engines that execute user workloads.  
Key Components: Graph Database engine nodes for executing queries and maintain graph data structures, Storage layer; Query engine that interprets and executes graph query languages (Cypher, SPARQL, Gremlin); Replication layer that synchronizes data across nodes for high availability and consistency; Networking Layer for secure communication via private endpoints and load balancers.
- *High availability and resilience layer* → ensures service continuity, fault tolerance, and disaster recovery.  
Key Components: Cluster Manager for coordinating replication, partitioning, and failover across graph nodes; Backup & Recovery Manager that schedules automated backups and handles restoration processes; Failover controller; Geo-replication service that replicates graph data across regions or availability zones for disaster recovery.
- *Security & Access layer* → responsible for user authentication, authorization, encryption, and compliance management.  
Key Components: Identity and Access Management (IAM); Encryption services; Access control policies; Audit logging system
- *Observability & Operations layer* → provides visibility, automation, and operational maintenance for both administrators and users.  
Key Components: Monitoring system; Alerting & incident management; Logging Service; Auto-patching & Upgrades; Maintenance scheduler that orchestrates backup, cleanup, and optimization tasks.

The service is offered per DB instance. Each instance consists of: 

- 4 vCPUs
- 16 GB of RAM
- 500 GB of Storage

The service offers the following advantages:

- *Accelerated Time-to-Value* → rapid deployment of fully managed GraphDB clusters without infrastructure setup. Developers can focus on building relationship-driven applications rather than managing database servers. Preconfigured environments and APIs shorten time-to-market for data-intensive projects.
- *Reduced Total Cost of Ownership (TCO)* → eliminates hardware, networking, and software licensing costs. No need for in-house database administration or maintenance. Reduces hidden operational costs associated with upgrades, backups, and monitoring.
- *Business agility and innovation* → enables rapid experimentation with data relationships, graph analytics, and knowledge models. Scales on demand to handle growth in connected datasets. Supports new business capabilities such as recommendation systems, fraud detection, and semantic search without large upfront investment.
- *Improved decision-making and insight discovery* → provides a 360-degree view of data relationships across entities (customers, products, assets, etc.). Supports advanced analytics, predictive modeling, and data visualization. Helps uncover patterns, correlations, and dependencies that are invisible in traditional relational models.
- *High reliability and continuity* → built-in redundancy and replication ensure continuous service availability. Automated backups, failover, and point-in-time recovery minimize downtime and data loss. Meets enterprise-grade SLAs for uptime and durability.
- *Governance, security, and compliance* → managed security, encryption, and audit logging reduce compliance risks. Role-based access and data isolation protect sensitive relationships and metadata. Provider-managed patching and updates ensure continuous compliance with standards.

<a id="mongoDB"></a>

### PaaS NoSQL - MongoDB

![MongoDB client interface](assets/images/extract/media/mongoDB.png)

#### Services Description

The PaaS NoSQL MongoDB service provides a fully managed, cloud-native document database platform designed to handle large volumes of unstructured and semi-structured data.  
It enables organizations to deploy and operate MongoDB clusters without managing infrastructure, scaling, or administrative overhead.  
Built on the MongoDB engine, the service offers high flexibility in data modeling, seamless horizontal scalability, and advanced features such as replication, sharding, automated backups, and high availability.  
The service is designed to support modern, data-driven applications requiring high performance, flexibility, and scalability. It is particularly suited for:

- Web and mobile applications that require dynamic schemas.
- IoT and telemetry systems generating high-volume JSON data.
- Real-time analytics and event processing.
- Content management systems (CMS) and e-commerce platforms.
- Big data pipelines and data lakes needing schema evolution and rapid ingestion.

#### Features and Advantages

The service offers the following main features:

- *Fully managed environment* → managing of provisioning, configuration, and maintenance of MongoDB clusters. Continuous patching, upgrades, and resource optimization.Service managed via web console, CLI, or API for full lifecycle operations.
- *Flexible data model* → document-oriented schema using JSON/BSON structures. Supports hierarchical and nested data with dynamic schema evolution. Allows storage of complex data without the rigidity of relational tables. Ideal for agile development and microservices architectures.
- *High performance and scalability* → horizontal scaling through automatic sharding across multiple nodes. Vertical scaling by dynamically increasing compute and memory resources. Built-in read/write replication for high throughput and low latency. Intelligent indexing (single field, compound, geospatial, text, wildcard).
- *High availability and resilience* → replication via Replica Sets for automatic failover and self-healing. Multi-zone deployment for fault tolerance and disaster recovery. Point-in-Time Recovery (PITR) and incremental backups ensure data integrity.
- *Security and compliance* → encryption at rest and in transit.Role-Based Access Control (RBAC) and fine-grained permissions.Integration with enterprise Identity and Access Management (IAM) systems. Auditing, logging, and monitoring for compliance.
- *Monitoring and observability* → real-time dashboards for performance, resource utilization, and query profiling. Automated alerts and anomaly detection for proactive issue resolution. Integration with observability tools (e.g., Prometheus, Grafana, ELK Stack).
- *Developer tools and integration* → native support for MongoDB Query Language (MQL). APIs, SDKs, and drivers for major programming languages (Java, Python, Node.js, Go, etc.). Integration with CI/CD pipelines and Infrastructure-as-Code tools (Terraform, Ansible). Support for analytics and visualization via BI connectors and data APIs.
- *Backup, restore, and disaster recovery* → scheduled and on-demand backups with retention policies.Point-in-time recovery to mitigate data loss from logical errors. Geo-redundant replication across regions for disaster recovery.

The main components of the service are:

- *Control plane* → manages the provisioning, orchestration, scaling, and lifecycle of MongoDB clusters. Handles user authentication, access control, and billing integration. Provides APIs and UI for tenant management, monitoring, and configuration.
- *Data Plane* (MongoDB cluster layer) → comprises Replica Sets for high availability and Shards for distributed data storage. Each shard consists of multiple replica nodes (primary and secondaries). Mongos routers distribute queries intelligently across shards. Ensures horizontal scalability and automatic data balancing.
- *Storage Layer* → based on high-performance SSD or NVMe storage. Supports data encryption, snapshotting, and incremental backup mechanisms. Abstracted via cloud block storage for elasticity and redundancy.
- *Network and security layer* → implements network isolation via Virtual Private Cloud (VPC) or private endpoints. Firewall rules, IP whitelisting, and security groups restrict access. TLS-based encryption secures data in transit between components and clients.
-* Management and monitoring layer* → provides observability, metrics collection, and alerting. Automated performance tuning and resource optimization. Integrates with logging and monitoring frameworks.
- *Backup and disaster recovery layer* → handles snapshot-based backups, replication, and PITR mechanisms. Automated restore operations from cloud object storage. Supports cross-region replication for business continuity.

The service is offered per DB instance. Each instance consists of: 

- 4 vCPUs
- 16 GB of RAM
- 500 GB of Storage

The service offers the following advantages:

- *Reduced Total Cost of Ownership (TCO)* → eliminates capital investments in servers, storage, and licenses. Shifts database management from internal teams to the provider’s managed service. Reduces operational costs through automation of scaling, patching, and backups.
- *Faster Time-to-Market* → fully managed environment allows databases to be provisioned in minutes. Dynamic schema flexibility accelerates application development. Enables rapid prototyping and iteration, ideal for agile and DevOps workflows.
- *High agility and flexibility* → schema-less document model adapts easily to evolving application requirements. Ideal for businesses managing heterogeneous or semi-structured data sources. Supports frequent data model changes without downtime or migration overhead.
- *Business continuity and reliability* → enterprise-grade high availability with built-in replication and automatic failover.Continuous backups and geo-redundant disaster recovery ensure data resilience. Meets stringent SLAs for uptime and data durability.
- *Scalability and growth enablement* → seamless horizontal scaling allows the service to handle growing data volumes and workloads. Supports global deployments with low latency through distributed clusters. Enables new data-intensive use cases (IoT, analytics, personalization) without redesigning architecture.
- *Compliance and data governance* → managed patching, auditing, and encryption ensure continuous compliance. Data isolation and access control simplify adherence to european laws. Facilitates transparent governance with built-in monitoring and reporting tools.
- *Focus on core business* → frees internal teams from database management and operational complexity. Allows developers to focus on innovation, application features, and user experience. Accelerates delivery of digital services and customer-facing applications.

<a id="redis"></a>

### PaaS In Memory- Redis

![Redis client interface](assets/images/extract/media/redis.png)

#### Services Description

It is a PaaS DB based on Redis technology (Remote Dictionary Server) that exposes a high-performance in-memory database, primarily used as a cache and database for web and real-time applications.  
Redis is a widely used database due to its flexibility and ability to handle a wide range of data types with low latency.  
The service delivers sub-millisecond data access, advanced caching, session management, message streaming, and data persistence capabilities.  
As a Platform-as-a-Service (PaaS) offering, it abstracts away the operational complexity of managing Redis clusters — including provisioning, scaling, patching, failover, and monitoring — while ensuring enterprise-grade reliability, security, and performance.  

The PaaS Redis service is designed for applications that require extremely fast data access, real-time analytics, and low-latency transactions. Typical use cases include:

- Application caching to reduce latency and offload backend databases.
- Session storage for web and mobile applications.
- Real-time analytics and leaderboards (e.g., gaming, ad tech, telemetry).
- Message queues and event streaming for distributed systems.
- Geospatial data processing and time-series data handling.
- Rate limiting and token management in API gateways.

#### Features and Advantages

The main features of the Paas In Memory Redis are:

- *In-memory* → data is stored in RAM, ensurig extremely fast access;
- *Persistence* → supports data persistence on disk, preventing data loss in the event of a system reboot;
- *Data type* → variety of data types, allowing for modeling different types of information;
- *Pub/Sub *→ supports the publish/subscribe model for real-time communication between applications.
- *Fully managed platform* → managing of provisioning, patching, scaling, and maintenance. High availability clusters with zero-downtime updates. Self-healing orchestration to ensure continuous service delivery. Management via API, CLI, or Web Console.
- *High performance and low latency* → entire dataset stored in-memory for sub-millisecond access. Optimized for real-time operations requiring microsecond response times. Supports high throughput (millions of operations per second). Persistent storage optional for durability.
- *Flexible data structures* → rich data model beyond simple key-value pairs: strings, hashes, lists, sets, sorted sets. Bitmaps, HyperLogLogs, Streams, and Geospatial Indexes. Ideal for complex operations such as counters, queues, and pub/sub messaging.
- *High Availability and disaster recovery* → native Redis Sentinel or Cluster Mode for automatic failover and fault tolerance. Multi-AZ deployment to ensure continuous uptime. Backup and restore capabilities for data persistence and recovery. Optional geo-replication across regions for disaster recovery.
- *Persistence options* → RDB (Redis Database Backup): Snapshot-based persistence for periodic backups. AOF (Append-Only File): Logs every operation for durability and recovery. Hybrid mode combining both mechanisms for balance between speed and reliability.
- *Scalability and elasticity* → horizontal scaling through Redis Cluster sharding. Vertical scaling with dynamic memory and compute adjustments. Linear scalability for both read and write operations. Automatic rebalancing of data across nodes.
- *Security and compliance* → encryption in transit (TLS) and encryption at rest. Role-Based Access Control (RBAC) and user authentication. Integration with Identity and Access Management (IAM) systems. Continuous auditing, logging, and compliance monitoring.
- *Monitoring and observability* → real-time metrics on throughput, latency, and memory usage. Proactive alerts and anomaly detection. Integration with monitoring stacks (Prometheus, Grafana, ELK). Logging for audit trails and performance tuning.
- *Developer Integration and APIs* → compatible with standard Redis clients and libraries. REST and gRPC APIs for automation and DevOps workflows. Integration with CI/CD pipelines and Infrastructure-as-Code tools (Terraform, Ansible). Supports Redis modules (e.g., RedisJSON, RediSearch, RedisGraph, RedisTimeSeries).


The logical architecture of the PaaS Redis service consists of multiple layers designed for automation, scalability, and resilience.

- *Control plane* → responsible for service orchestration, cluster provisioning, scaling, and lifecycle management. Manages authentication, authorization, metering, and billing. Provides APIs, CLI, and web-based UI for service management.
- *Data Plane (Redis cluster layer)* → Core component that hosts user data in memory. Composed of multiple Redis instances organized as: Master nodes; Replica nodes; Implements sharding for horizontal scalability; Ensures high throughput and low latency for data operations.
- *Storage and persistence layer* → provides optional durable storage for backup and disaster recovery. Utilizes RDB snapshots and AOF logs stored on encrypted block or object storage. Supports automated retention policies and scheduled backups.
- *Networking and security layer* → virtual network isolation using VPC/VNet configurations. TLS-based encryption for client-to-server and inter-node communication. Security groups, IP whitelisting, and firewall rules for controlled access. Optional private endpoints for secure integration with internal systems.
- *Monitoring and Management layer* → aggregates telemetry and performance metrics. Implements logging, tracing, and alerting via monitoring systems. Provides dashboards for capacity planning and SLA tracking.
- *High availability and failover layer* → monitors node health and automatically triggers failover in case of node or zone failure. Uses Redis Sentinel or internal control mechanisms for cluster coordination. Supports synchronous or asynchronous replication for HA and DR.

The service is offered per DB instance. Each instance consists of: 

- 4 vCPUs
- 16 GB of RAM
- 500 GB of Storage

The service offers the following advantages:

- *Reduced Total Cost of Ownership (TCO)* → no capital investment in hardware, software, or cluster management. Reduces operational overhead by automating deployment, scaling, and maintenance. Eliminates the need for specialized in-house Redis administration skills.
- *Faster Time-to-Market* → instant provisioning of Redis clusters enables rapid development and testing. Ready-to-use configurations optimize caching and real-time processing use cases. Enables teams to integrate low-latency data layers into applications in minutes. Accelerates delivery of digital services requiring immediate responsiveness.
- Improved application performance and user experience → sub-millisecond response times improve customer satisfaction and engagement. Reduces load on backend databases and APIs through caching and data offloading. Ensures consistent performance during traffic spikes or seasonal demand peaks.
- *Business agility and scalability* → easily scales up or down to accommodate fluctuating workloads. Enables dynamic adaptation to new business requirements without architectural redesign. Supports real-time analytics and streaming for modern, data-intensive applications.
- *Reliability and continuity* → built-in replication and failover mechanisms ensure continuous availability. Automated backups and geo-redundancy support robust disaster recovery. Meets enterprise-grade SLA commitments for uptime and data durability.
- *Compliance and security* → provider-managed encryption, patching, and access control ensure compliance with data security standards. Role-based access and network isolation protect sensitive data in-memory and at rest. Reduces compliance risks through centralized governance and auditing tools.
- *Focus on core business innovation* → frees developers and operations teams from managing infrastructure and cluster administration. Allows organizations to focus on value creation, product innovation, and user experience. Enables integration of Redis-based caching and real-time logic into cloud-native architectures effortlessly.

## Networking Family

Below is the list of services belonging to the Networking family:

- [Paas CDN (Content Delivery Network)](#CDN)
- [PaaS DNS (Domain Name System)](#DNS)
- [Single public IP](#IP)
- [L7 Load Balancer (regional)](#L7)
- [Cloud interconnect Gold SW (10 Gbps max throughput)](#gold)

<a id="CDN"></a>

### PaaS CDN (Content Delivery Network)

![PaaS CDN (Content Delivery Network) interface](assets/images/extract/media/CDN.png)

#### Services Description

A PaaS CDN (Content Delivery Network) is a platform that accelerates the delivery of digital content by distributing it across a decentralized, global network of edge servers.  
As a PaaS service, it abstracts infrastructure management, allowing organizations to utilize CDN capabilities through configuration, APIs, and integrations without having to worry about hardware, deployment, or low-level operations.  
A CDN stores and serves content from geographically distributed edge nodes. When a user requests an asset (image, script, video, webpage, API response), the CDN automatically selects the closest or most optimal node, minimizing latency, bandwidth usage, load on origin servers.  
By serving content from the closest edge location, a CDN improves: page load speed, Core Web Vitals, user experience.

#### Features and Advantages

The main features of the service are:

- *Content caching & distribution* → stores static and dynamic content in edge nodes.Reduces latency by serving content from the nearest node. Supports cache policies (TTL, no-store, versioning).
- *Global load balancing* → intelligently routes traffic across multiple PoPs (Points of Presence). Selects the most efficient network path. Provides automatic failover when nodes are unavailable.
- *Security services* → managed TLS/HTTPS (certificate lifecycle handled by the platform). Built-in DDoS mitigation. WAF (Web Application Firewall) for application protection. Access control via signed URLs, tokens, ACLs.
- *Edge compute* → serverless functions executed at the edge. Request/response rewriting. Image optimization and on-the-fly transformations.
- *API acceleration* → API response caching. Request coalescing (prevents duplicate backend calls). Protocol optimization (HTTP/2, HTTP/3/QUIC).
- *Content optimization* → Dynamic compression. Resource minification. Video streaming optimization (HLS/DASH delivery).
- *Observability & analytics* → Real-time monitoring. Full request logging. Metrics for hit/miss, throughput, latency, and threats.
- *Zero infrastructure management* → as a PaaS, it eliminates the need for: server provisioning, network management, software patches and upgrades

The main components of the service are:

- *Edge Network Layer (PoP Layer)* → a global network of geographically distributed edge nodes. Each node includes: local cache, edge compute processors, security engines, network accelerators. Function: handle most traffic without contacting the origin.
- *Origin Services Layer* → a logical layer that manages interaction with origin servers. It includes: origin selection, failover between origins, health checks, multi-origin load balancing (active-active or active-passive).
- *Global traffic management layer* → the intelligence controlling request routing. It uses: anycast routing, Software-Defined Networking (SDN), real-time performance telemetry. Function: determine the optimal PoP for each request.
- *Distributed cache management system* → a scalable system handling: cache invalidation, TTL and cache rules, content versioning, smart synchronization between PoPs. Designed for high performance and distributed consistency.
- *Security layer* → embedded into every edge node. It is includes: distributed L7 firewall, DDoS detection, bot mitigation, TLS termination, API protection mechanisms. Filtering at the edge reduces malicious traffic early.
- *Edge compute runtime* → ey characteristics: lightweight serverless runtime (JS/TS or WebAssembly), executes close to end-users, sandboxed for isolation, globally distributed deployments. Used for personalization and content transformation at the edge.
- *Control plane* → the logical management console of the CDN. It handles: APIs and configuration interfaces, certificate management, rule distribution to all PoPs, deployment orchestration, global configuration synchronization. The Control Plane does not handle user traffic.
- *Monitoring & analytics layer* → It is includes: real-time metrics, distributed logging, anomaly detection, dashboards and analysis tools. Architecturally independent for scalability.

The service is offered with the following unit metric: *10 Gbps of throughput (inbound & Outbound)*.

The service offers the following advantages:

- *Improved performance and lower latency* → content is delivered from edge nodes close to end users. Faster page loads, reduced round-trip time, better user experience. Enhanced performance for both static assets and dynamic/API responses.
- *Scalability without infrastructure management* → automatically scales to handle traffic spikes, peak loads, or global audiences.No need to provision or maintain servers, network appliances, or caching layers.
- *Reduced load on origin servers* → edge caching absorbs the majority of traffic.Backend systems experience fewer requests, improving stability and reducing costs.
- *Ehanced reliability and availability* → built-in redundancy across distributed PoPs. Automatic failover if an edge node or origin becomes unavailable. Improved resilience during outages or network congestion.
- *Integrated security capabilities* → protection against DDoS attacks. Built-in WAF to block malicious requests. Managed TLS certificates and secure HTTPS delivery. Access control tools such as token-based authentication or signed URLs.
- *Cost optimization* → lower bandwidth consumption from origin servers. Reduced infrastructure investment.
- *Edge compute for custom logic* → ability to run serverless code close to users. Real-time content manipulation, personalization, or request filtering. Reduced latency and improved performance for dynamic processing.
- *Streamlined DevOps and faster deployment* → centralized configuration via APIs or dashboards. Rapid global propagation of rules and updates.Simplified CI/CD integration.
- *Better observability and analytics* → real-time insights into traffic, performance, and threats. Detailed logs for diagnostics and optimization. Metrics for cache hits, latency, throughput, and security events.
- *Consistent user experience worldwide* → uniform content delivery performance regardless of geographic region. Improved responsiveness for international users.

<a id="DNS"></a>

### PaaS DNS (Domain Name System)

![PaaS DNS (Domain Name System) interface](assets/images/extract/media/DNS.png)

#### Services Description

The PaaS DNS service is a platform that manages domain name resolution and related DNS operations without requiring organizations to maintain DNS servers or networking infrastructure.  
This is a DNS service that allows organizations to define their own DNS configurations for resolving names to IP addresses in their application environment.  
The service can also be configured as a public DNS forwarder for resolving Internet domains.
It is a managed service, similar to PaaS (Paid as a Service), where the customer can self-manage the service through a dedicated console or a manual process.  
As a PaaS offering, it provides high availability, global distribution, automation, and advanced DNS features through an abstracted, fully managed platform.

#### Features and Advantages

The main features of the service are:

- *Authoritative DNS resolution* → hosts authoritative DNS zones and responds to DNS queries for registered domains. Ensures fast and accurate mapping of domain names to IP addresses. Supports all standard DNS record types.
- *Global traffic distribution and load balancing* → routes users to different endpoints based on geographic location, latency, or availability. Supports features such as: Geo-DNS, latency-based routing, multi-origin or multi-region distribution. Helps applications deliver consistent performance globally.
- *High availability and resilience* → ensures continuous DNS operation across globally distributed servers. Offers redundancy across multiple regions and networks. Protects against DNS outages and service disruption.
- *Scalability* → handles large volumes of DNS queries. No need for organizations to manage DNS server capacity or scaling. Suitable for small websites up to high-traffic global platforms.
- *Advanced DNS management* → provides APIs and dashboards for: creating and editing DNS zones, managing DNS records, automating DNS updates. Supports versioning, rollback, and audit trails.
- *DNSSEC Support* → offers DNS Security Extensions to prevent DNS spoofing or tampering. Handles key management and signing automatically. Ensures secure, authenticated DNS responses.
- *Traffic steering and failover* → automatically redirects users if a primary endpoint fails. Allows health checks for web servers, APIs, or other services. Ensures higher availability and reliability of applications.
- *Observability and analytics* → orovides logging, metrics, and monitoring for: query count, response times, geographic distribution, errors and anomalies. Helps diagnose DNS issues quickly.
- *Zero infrastructure management* → as a PaaS service, it eliminates the need to manage: DNS server software, redundancy and failover, global replication, network provisioning or tuning

The main components of the service are:

- *Global anycast DNS Network* → distributed global DNS servers reachable via Anycast addresses. Ensures users are answered by the closest and fastest DNS node. Provides natural DDoS resistance - - *Authoritative zone storage layer* → a distributed, replicated storage system that stores domain zones and DNS records; ensures consistency across global DNS nodes; supports versioning, atomic changes, and secure propagation.
- *Zone distribution and replication system* → propagates DNS zone updates across the entire global network.Ensures near real-time consistency while maintaining high availability. Uses secure channels and integrity checks.
- *Traffic management and routing engine* → implements advanced DNS logic such as: geo-routing, latency-based routing, proximity-based routing, failover routing. Utilizes real-time global telemetry to guide DNS decision-making.
- *Health checking and availability layer* → continuously monitors configured endpoints (web servers, load balancers, APIs). Automatically adjusts DNS responses based on health signals. Prevents directing users to failed or degraded services.
- *Security layer* → It's provides: DNSSEC signing and validation, DDoS mitigation, query rate limiting, response integrity verification. Security is typically implemented across all global DNS nodes.
- *Control plane* → the centralized management system used by administrators and APIs. Responsible for: creating and modifying DNS zones, propagating configurations globall, certificate and key management (for DNSSEC), authentication, RBAC, and access governance. Does not participate in DNS query resolution.
- *Monitoring & analytics layer* → it's includes: real-time logs, query analytics, performance metrics. 
- *Threat detection indicators* → operates independently from the data plane for scalability and reliability.

The service is offered for each DNS Instance unit. 

The service offers the following advantages:

- Higher performance and faster DNS resolution → query responses are served from globally distributed Anycast DNS servers. Reduces lookup latency and improves overall application responsiveness → ensures fast domain resolution for users anywhere in the world.
- Built-in high availability and resilience → redundant DNS servers across multiple regions. Automatic failover if a node becomes unreachable. Protects against outages in single data centers or networks.
- Scalability → handles millions or billions of DNS queries without capacity planning. No need to manage servers, compute resources, or network provisioning. Ideal for both small and large-scale platforms.
- Simplified management through APIs and dashboards → easy creation and modification of DNS zones and records. Automation of DNS workflows (CI/CD updates, dynamic record creation). Versioning, change history, and rollback capabilities.
- Improved reliability through traffic steering → support for geo-location routing, latency-based routing, and weighted routing. Directs users to the best available endpoint for performance and availability. Helps deliver consistent global user experience.
- Enhanced security → built-in DNSSEC for authenticated, tamper-proof responses. DDoS protection at the DNS layer. Query rate-limiting and anomaly detection. Protection against DNS spoofing and cache poisoning.
- Reduced operational overhead → eliminates the need to run and patch DNS servers. No maintenance of BIND, NSD, Unbound, or other DNS software. No management of global replication or zone distribution.
- Cost efficiency → reduced need for dedicated networking and operations teams. Lower infrastructure and bandwidth expenses.
- Real-Time monitoring and analytics → insight into query volume, record usage, performance, and errors. Faster troubleshooting with detailed logs. Better planning for traffic patterns and capacity.
- Improved application reliability → supports health checks and automated failover at the DNS level. Prevents users from being routed to offline or degraded services. Enhances uptime and service continuity.

<a id="IP"></a>

### Single public IP Service

#### Services Description

A PaaS Single Public IP service is a managed cloud networking offering that provides a dedicated, globally reachable public IP address for workloads hosted in the provider’s cloud environment.  
In this implementation the service enables customers to expose virtual machines, containers, load balancers, or platform services to the Internet using a stable, provider-managed public IP, without requiring them to manage networking infrastructure or routing complexity.

#### Features and Advantages

The main features of the service are:

- *Dedicated public IP assignment* → provides one unique and persistent public IPv4 or IPv6 address. The IP can be assigned to VMs, network interfaces, or load balancers within the cloud environment Ensures stable reachability even if the underlying infrastructure changes.
-  *Managed routing and NAT* → the platform automatically manages inbound and outbound routing. Supports 1:1 NAT, DNAT, or SNAT depending on configuration. Simplifies network exposure of private resources, with no need to operate firewalls or routers.
- *High availability and redundancy* → public IPs are served through a highly redundant provider network. Automatic failover ensures continuity even if the underlying host or zone fails. Supports attaching the IP to different resources without service interruption.
- *Flexible binding to cloud resources* → the same public IP can be detached and reattached to: virtual machines, virtual network interfaces, load balancers, application gateways. Enables quick recovery, migrations, and architecture evolution.
- *Integrated security controls* → configurable security groups, ACLs, and firewall rules. Traffic filtering and connection control managed through the cloud portal. Protection against common network threats through provider-level safeguards.
- *Simplified internet exposure* → ideal for publishing: web applications, APIs, VPN gateways, remote management endpoints. No need to configure BGP, DNS routing, or physical network appliances.
- *Monitoring & logging* → platform dashboards show: traffic flows, connection statistics, security events. Useful for troubleshooting and capacity planning.

The main components of the service are:

- *Provider-managed edge network* → the public IP is routed through Aruba’s redundant edge infrastructure. Anycast or geographically optimized routing ensures low latency and high availability. Backbone interconnects with major Internet exchange points.
- *Virtualized networking layer* → based on SDN-enabled virtual switches and routers. The public IP is associated to a virtual NIC via cloud networking APIs. Provides isolation between tenants and secure segmentation.
- *NAT & Firewall gateway cluster* → a cluster of virtual gateways manages: NAT operations, packet inspection, stateful firewalling, traffic shaping, Fully redundant and automatically scaled by the platform.
- *Control plane* → centralized management system allowing: creation and deletion of public IPs, binding/unbinding to resources, firewall rule management, configuration propagation across zones. Does not handle traffic directly but orchestrates network behavior.
- *Data plane* → distributed packet-processing nodes handle the real traffic. Designed for high throughput, low latency, and multi-zone resilience. Built to ensure performance even under heavy load.
- *Integration with DNS and load balancers* → the public IP can be connected to: DNS A/AAAA records, cloud load balancers, reverse proxies. Enables scalable and flexible application publishing.

The service is offered *per number of public IP addresses*.

The service offers the following advantages:

- *Simplified internet exposure* → easily expose VMs, applications, or services to the public Internet. No need to configure routers, gateways, or complex network infrastructure.
- *High availability and resilience* → public IPs are served through a redundant cloud network. Automatic failover ensures continuity if the underlying instance or zone fails. The IP remains reachable even when moving resources.
- *Flexibilty and portability* → the same IP can be detached and reattached to different cloud resources. Enables seamless migration, maintenance, and architecture changes. Supports disaster - - *Zero infrastructure management* → no need to deploy or maintain firewalls, NAT appliances, or BGP routers. Managing of routing, redundancy, and capacity at the network edge.
- *Integrated security* → built-in firewall rules, security groups, and access control lists Centralized management through the cloud portal or APIs. Provider-level protection against common network attacks.
- *Cost efficiency* → eliminates the need for purchasing and managing public IP blocks. Reduces operational overhead and network administration costs.
- *Consistent and stable reachability* → the public IP remains persistent, even if internal infrastructure changes. Guarantees stable endpoints for DNS records, APIs, and external integrations.
- *Improved operational agility* → fast provisioning of new public IPs on demand. Immediate configuration changes via self-service interface. Accelerates deployment pipelines and DevOps workflows.
- *Traffic monitoring and visibility* → built-in dashboards and logs for tracking inbound/outbound traffic. Useful for troubleshooting, auditing, and performance optimization.
- *Secure and scalable foundation for cloud services* → works seamlessly with load balancers, DNS records, VPN gateways, and edge services. Supports both small applications and large-scale enterprise architectures.

<a id="L7"></a>

### L7 Load Balancer (regional) Service

![L7 Load Balancer (regional) Service Overview](assets/images/extract/media/L7.png)

#### Services Description
 
A PaaS L7 Load Balancer (Regional) is a fully managed platform service that distributes HTTP/HTTPS traffic across backend services (VMs, containers, or applications) within a specific cloud region.  
It consists of a listener that receives requests on behalf of a set of backend pools and distributes them based on criteria based on application data, thus determining which pools serve a given request. The application infrastructure can therefore be specifically tuned and optimized to serve specific types of content.  
Based on an OPNsense-like architecture, it provides advanced Layer 7 capabilities such as content-aware routing, SSL offloading, traffic inspection, and application firewalling—without requiring customers to deploy, monitor, or maintain any load-balancing infrastructure.  

#### Features and Advantages

The main features of the service are:

- *Layer 7 application-aware routing* → inspects and routes traffic based on HTTP/HTTPS attributes: URL paths, hostnames, headers, cookies, query parameters, Enables fine-grained control and intelligent traffic distribution.
- *SSL/TLS termination and management* → offloads TLS/SSL handshake from backend servers. Centralized management of certificates (upload, renewal, rotation). Supports HTTPS redirection, HSTS, and modern cipher suites.
- *Backend load distribution* → supports several load-balancing algorithms: round-robin, least connections, IP hash, weighted distribution. Ensures efficient traffic handling and smooth scaling of applications.
- *Health checks and failover* → performs L7 health checks on backend services (HTTP codes, response payloads). Automatically excludes unhealthy instances and restores them when available. Prevents routing user requests to failed or degraded services.
- *Web Application Firewall (WAF)* → integrated OPNsense-compatible WAF engine. Protects against OWASP Top 10 and common web attacks. Provides rule sets, anomaly scoring, and traffic filtering.
- *URL rewriting and traffic transformation* → rewrite URLs, headers, or cookies. Inject or remove headers for security or routing logic. Useful for legacy system integration or microservices migration.
- *Regional scope* → traffic is handled within a specific cloud region for: predictable latency, compliance requirements, locality of data and workloads. Ideal for regional failover patterns.
- *Logging, monitoring, and metrics* → provides: request/response logs, traffic and error statistics, performance metrics, WAF alerts. Enables effective debugging and performance optimization.
- *Zero infrastructure management* → no need to deploy virtual appliances, firewalls, or proxies. The platform maintains: high availability, patching, upgrades, scaling, failover

The main components of the service are:

- *Regional load balancing cluster* → a distributed cluster of L7 processing nodes within the chosen region.Provides high availability (active-active or active-standby) → automatically scales horizontally based on traffic load.
- *OPNsense-based application proxy layer* → built on top of an OPNsense-like architecture: HAProxy or NGINX engine, integrated WAF, layer 7 parsing and filtering. Provides flexibility and robust application-level control.
- *Virtualized networking layer* → integrates with the cloud network fabric. Supports private and public endpoints. Ensures tenant isolation and secure routing to backends.
- *Control plane* → It's coordinates: configuration of listeners, rules, routes, and backends, certificate management, policy updates and propagation, versioning and rollback, API- and UI-based management. Does not handle traffic.
- *Data plane* → processes all HTTP/HTTPS requests. Terminates TLS, applies routing logic, executes WAF rules. Ensures high throughput and low latency.
- *Health check and failover engine* → continuously monitors backend endpoints. Maintains a dynamic view of backend availability. Ensures failover rules are applied in real time.
- *Logging & analytics layer* → collects request logs, WAF events, metrics, and anomalies. Provides dashboards and monitoring tools. Works independently from the data plane to ensure performance.

The service is offered *per each balancer instance*.

The service offers the following advantages:

- *Improved application availability* → automatic failover prevents downtime. Faulty backends are bypassed instantly.
- *Better performance and lower latency* → efficient L7 traffic distribution within the same region. TLS offloading improves backend performance.
- *Strong security posture* → built-in WAF protects against common web threats. TLS best practices and centralized certificate management.
- *Simplified operations* → fully managed service—no appliance deployment or patching. Easy configuration from UI or APIs. Reduces operational and networking overhead.
- High flexibility in routing → content-based routing for modern microservices architectures. Easy to map multiple applications under the same IP/hostname.
- *Cost efficiency* → eliminates need for dedicated load balancer appliances.
- Consistent user experience → evenly balances traffic to healthy backends. Ensures predictable application responsiveness.
- *Enhanced observability* → access to detailed logs, metrics, and WAF events. Faster troubleshooting and monitoring.
- *Compliance and regional data control* → all traffic processing remains within a specific geographic region. Helps meet regulatory and data residency requirements.
- *Rapid deployment and DevOps integration* → instant provisioning with minimal configuration. API-driven automation for CI/CD pipelines.

<a id="gold"></a>

### Cloud interconnect Gold SW (10 Gbps max throughput)

#### Services Description

The PaaS Cloud interconnect gold SW service provides a high-quality, software-defined, private connectivity between a customer’s on-premises infrastructure (or external data centers) and the Aruba cloud environment.  
It offers dedicated bandwidth tiers, enhanced SLA guarantees, secure routing, and enterprise-grade performance, enabling customers to build hybrid or multi-cloud architectures without deploying physical network appliances or managing complex routing setups.  
The “Gold” tier represents the highest level of availability, performance, and support, while the “SW” component refers to software-based interconnect provisioning, ensuring flexibility, fast activation, and seamless scalability.  
This service, delivered via hardware or software, is designed to simplify customer application migration with minimal impact on users and workloads.  
It enables granularity down to the individual IP address during migration, increasing security and minimizing rollback times, if necessary.  

#### Features and Advantages

The main features of the service are:

- *Private and secure network connectivity* → ensures a private, non-public connection between customer networks and cloud resources. Traffic does not traverse the public Internet, reducing risk and improving performance. Ideal for workloads requiring compliance, isolation, or predictable latency.
-* Software-defined provisioning (SW)* → fully software-based interconnect setup with no physical circuits required.On-demand provisioning via web console or API. Rapid activation (minutes instead of days or weeks). Flexible reconfiguration without service interruption.
- *High SLA & guaranteed bandwidth (Gold tier)* → provides defined bandwidth tiers with guaranteed throughput. Includes enhanced SLA for: availability, packet loss, latency, jitter. Suitable for mission-critical enterprise applications.
- *Multi-site and multi-zone connectivity* → supports connectivity to multiple Aruba regions or availability zones. Enables redundant hybrid cloud architectures. Facilitates interconnection of distributed workloads.
- *Routing integration* → supports dynamic routing (BGP) or static routing. Automatically adapts to network topology changes. Enables flexible hybrid cloud traffic engineering.
- *Segmentation and isolation* → allows creation of multiple isolated virtual circuits or VLANs. Ideal for separating environments: production, staging, development, partner networks
- *End-to-end encryption* → traffic can be encrypted at the network edge using IPsec or provider-managed encryption. Ensures compliance with data protection standards.
- *Monitoring, logs, and telemetry* → real-time monitoring of: bandwidth usage, packet loss and latency, connection health. Exportable logs for SIEM and analytics systems.
- *No Physical hardware required* → provider manages the entire connectivity layer. No need for physical circuits, routers, or carrier contracts. Reduces complexity and deployment time.

The main components of the service are:

- *Software-defined interconnect fabric* → centralized SDN layer orchestrating virtual connections. Provides flexible, scalable, multi-tenant connectivity. Allows rapid deployment and reconfiguration.
- *Regional interconnect gateways* → high-availability routing gateways located in Aruba cloud regions. Serve as entry/exit points for private customer traffic. Architected for redundancy and failover.
- *Cloud backbone network* → high-capacity fiber backbone interconnecting Aruba data centers. Ensures low-latency east-west traffic across regions. Supports both primary and backup routes.
-  *Security & isolation layer* → strict tenant isolation enforced at: network virtualization layer, routing control plane, traffic segmentation policies. Ensures no cross-tenant visibility.
- *Control plane* → It manages: provisioning of interconnects, routing updates, bandwidth allocation, policy enforcement. Exposed through UI and APIs.
- *Data plane* → handles the actual traffic flow with: guaranteed QoS, deterministic routing, optimized latency paths. Decoupled from monitoring and control tasks.
- *Monitoring & observability layer* → aggregates telemetry from gateways and SDN controllers. Provides dashboards and alerting for performance and reliability.

The service is offered with the following unit metric: *10 Gbps of throughput*.

The service offers the following advantages:

- *Enhanced security* → private connection avoids exposure to the public Internet. Supports encrypted tunnels and isolated routing domains.
- *Predictable and high performance* → guaranteed bandwidth and low latency. Stable connectivity ideal for enterprise workloads.
- *Rapid deployment* → software-defined provisioning reduces setup from weeks to minutes. No physical circuits or carrier coordination required.
- *High availability and reliability (Gold SLA)* → redundant gateways, paths, and failover mechanisms built in. Suitable for mission-critical connectivity.
- *Cost efficiency* → eliminates the need for physical interconnects or MPLS lines.
- Improved hybrid cloud architecture → seamlessly integrates on-prem infrastructure with cloud workloads. Supports migration, DR, and inter-site communication.
- *Scalability on demand* → quickly adjust bandwidth tiers or add new interconnects. Ideal for growing or fluctuating workloads.
- *Simplified network operations* → centralized management via API/portal. Automated routing and monitoring reduce operational overhead.
- *Better compliance and data governance* → private, regional connectivity supports regulatory requirements. Data paths remain under predictable network control.
- *Optimized application experience* → reduced jitter and packet loss improve performance for: databases, real-time apps, VoIP/UC, latency-sensitive services.

## Storage Family

Below is the list of services belonging to the Storage family:

- [Block Storage (1000 GB) - High Density](#block-storage)
- [Archive Storage (1000 GB)](#archive-storage)

<a id="block-storage"></a>

### Block Storage (1000 GB) - High Density Service

![Block Storage (1000 GB) - High Density Service interface](assets/images/extract/media/storage.png)

#### Services Description

The PaaS Block Storage (1000 GB) – High Density service provides enterprise-grade, fully managed block storage volumes designed for virtual machines and cloud workloads hosted on Proxmox platforms.  
The storage layer is powered by Ceph, a distributed, fault-tolerant, and scalable SDS (Software-Defined Storage) technology that ensures durability, high availability, and efficient capacity utilization.  
This service offers 1000 GB of high-density block storage, ideal for workloads that require large capacity at optimized cost while still benefiting from redundancy, resiliency, and seamless integration into virtualized cloud environments.

#### Features and Advantages

The main features of the service are:

- *Managed block storage volumes (1000 GB)* → provides fully provisioned 1000 GB block devices. Can be attached to Proxmox-based virtual machines. Supports OS disks, application data, databases, and file systems.
- *High-density storage tier* → optimized for workloads requiring large capacity. Uses cost-efficient high-density disks while maintaining reliability. Suitable for: archival data, moderately I/O-intensive applications, backup staging, large datasets that don’t require ultra-high performance
- *Ceph RBD (RADOS Block Device) integration* → volumes are exposed as Ceph RBD devices. Features:, thin provisioning, snapshot support, cloning capabilities, striping for balanced performance
- *High availability and data replication* → data is replicated across multiple Ceph nodes. Ensures durability even in case of disk or node failure. Automatic recovery and self-healing functions enhance resilience.
- *Persistent and Reliable Storage* → volumes maintain data integrity across VM reboots, migrations, or failovers. Ideal for persistent disks in virtualized infrastructures.
- Seamless VM integration → managed directly through the Proxmox interface/API. It supports: VM disk attachments and detachments, live migration with attached volumes, dynamic resizing
- *Performance optimization for large-capacity workloads* → balanced read/write response designed for high-density environments. Ceph intelligently distributes I/O across cluster nodes.
- *Managed service* → No need to manage Ceph clusters, disks, or replicating policies. Handling of: monitoring, maintenance, scaling, upgrades, fault resolution

The main components of the service are:

- *Ceph storage cluster* → distributed architecture composed of: multiple OSD nodes (Object Storage Daemons), MON nodes for cluster coordination, MGR nodes for cluster insight and APIs. Ensures high availability and horizontal scalability.
- *Proxmox integration layer* → proxmox integrates directly with Ceph RBDs. Provides unified API and management interface for VMs and storage. Allows dynamic allocation of block devices to VMs.
- *Replicated storage pools* → storage pools configured with replication (e.g., 3 replicas). Ensures redundancy across multiple disks and hosts. Prevents data loss from node or disk failures.
- *Data plane* → handles all I/O operations, including: data striping, replication, rebalancing, recovery, snapshot management. Designed for reliability and optimized throughput.
- *Control plane* → Manages: Ceph cluster coordination, health monitoring, volume lifecycle, config policies, Proxmox integration.
- *Monitoring and observability* → continuous monitoring of: storage utilization, disk health, replication status, I/O performance. Automated alerts ensure proactive issue resolution.
- *Security and isolation* → tenant isolation at storage pool and access level. Encrypted communication between Ceph and Proxmox nodes. Optional disk encryption at rest depending on policy.

The service is offered with the following metrics: *1000 GB for each unit*.

The service offers the following advantages:

- *High capacity at optimized cost* → designed for workloads needing large data volume without paying for premium performance tiers.
- *High udrability and fault tolerance* → multi-node replication ensures data remains safe even if disks or machines fail.
- *Fully managed storage infrastructure* → eliminates the need to configure, maintain, or troubleshoot Ceph clusters.
- *Scalable and flexible* → storage grows horizontally without downtime. Additional capacity or block volumes can be provisioned on demand.
- *Seamless integration with Proxmox VM environments* → easy attachment to VMs, live migration support, and simplified administration.
- *Improved operational efficiency* → snapshots, cloning, and thin provisioning speed up development and operations workflows.
- *Consistent performance for high-density workloads* → balanced I/O distribution with predictable storage behavior.
- *Enhanced data protection* → built-in replication, self-healing, and monitoring reduce risk of data loss.
- *Simplified backup and recovery* → volume snapshots enable fast backup operations. Easy rollback to previous storage states.
- *Enterprise-grade reliability* → Ceph’s distributed architecture provides continuous service availability and resilience.

#### Disaster Recovery Process

The PaaS Block Storage service is delivered on a high-density storage architecture powered by Proxmox VE and a Ceph distributed storage cluster.  
Ceph provides native replication, self-healing and strong data durability.  
Disaster Recovery (DR) ensures service continuity, data integrity and rapid restoration in case of partial or full site failure.

**Disaster Recovery (DR) Objectives**

- RPO (Recovery Point Objective): Typically near-zero, because Ceph writes are synchronously replicated across multiple OSDs and nodes before acknowledgment.
- RTO (Recovery Time Objective): Designed to be minimal. Recovery depends on the nature of the failure (node, rack, or site).

**DR Protection Levels**

- Node-Level Failure
    - Ceph automatically marks failed OSDs or nodes as “out”
    - Data is automatically re-replicated to healthy nodes to restore the predefined replication level
    - Proxmox migrates VMs/volumes to healthy nodes via HA framework

- Rack-Level or Power Domain Failure
    - If the CRUSH map is configured with rack-awareness, Ceph ensures that: No dataset has all its replicas in the same rack/power domain
    - Failover is automatic and transparent

- Full Site Failure (Multi-site DR) (Applicable only when a second Ceph site or stretch-cluster is deployed)
    
    - Block volumes are replicated to a secondary Ceph cluster through asynchronous multi-site Ceph replication, or RBD mirroring (journal-based)
    - In case of complete primary site outage, the secondary site can promote replicated RBD images and restore service

**DR Process Workflow**

- Step 1 – Failure Detection

    - Continuous monitoring of Ceph MONs, OSDs, Proxmox nodes and cluster health status.
    - Automatic alerts for: Disk or node failures, Network disruption, Replication degradation, Cluster reaching “HEALTH_WARN” or “HEALTH_ERR”

- Step 2 – Automatic Failover (Local Cluster)

    - Ceph redistributes I/O across available OSDs
    - Proxmox HA automatically restarts workloads on healthy nodes
    - No manual intervention is typically required

- Step 3 – Data Re-Replication

    - Ceph restores the replication level (e.g. 3 copies) by copying missing replicas to healthy OSDs
    - The process is throttled to avoid performance degradation.

- Step 4 – Activation of Secondary Site

    - If the failure affects the entire primary site:
        - Administrators promote mirrored RBD images on the secondary Ceph cluster
        - Proxmox compute nodes at the DR site attach the promoted RBDs
        - Services are restarted according to the failover plan.

- Step 5 – Service Validation

    - Verification that Block Storage volumes are consistent and available
    - Checks of application logs and integrity validation.

- Step 6 – Failback (Post-Recovery)

    - Once the primary site is restored:
        - Data is synchronized back (reverse RBD mirroring)
        - Primary Ceph cluster is reintroduced into production
        - Normal operations resume

<a id="archive-storage"></a>

### Archive Storage (1000 GB) Service

![Archive Storage (1000 GB) Service interface](assets/images/extract/media/storage.png)

#### Services Description

The service provides a scalable, low-cost, long-retention storage environment designed for infrequently accessed data. It is built on Proxmox Virtual Environment (PVE) with Ceph as the underlying distributed storage layer. The service enables organizations to store large volumes of archival datasets—such as logs, backups, compliance records, media assets, or scientific data—while ensuring durability, fault tolerance, and controlled retrieval performance.

#### Features and Advantages

The main features of the service are:

- Long-term data retention with policies tailored for infrequently accessed objects or files
- Distributed, reliable storage through Ceph’s replication or erasure coding.
- Scalable capacity expansion by adding nodes or OSDs without service interruption.
- Multi-protocol access via CephFS, RBD, or S3-compatible gateways, depending on deployment.
- Automated data placement and self-healing mechanisms inherent to Ceph.
- Role-based access control and integration with existing identity systems (via Proxmox and optional gateways).
- Monitoring and lifecycle management through Proxmox’s UI and Ceph dashboards.
- Optional tiering by combining faster Ceph pools with lower-cost archival pools.

The main components of the service are:

- Proxmox VE Cluster: Management layer for nodes, resources, authentication, and integration with Ceph; offers UI, automation tools, and API endpoints.
- Ceph Cluster:
    - OSD Nodes: Storage servers providing replicated or erasure-coded archival pools.
    - MON/MGR Nodes: Ceph Monitors and Managers responsible for cluster coordination, state tracking, and health management.
    - CephFS / RBD / RGW: Optional access interfaces to expose archival storage as a filesystem, block device, or S3-compatible object store.
- Networking Layer: High-bandwidth, redundant network for internal Ceph traffic (public and cluster networks) to ensure consistency and performance.
- Monitoring and Logging Tools: Proxmox and Ceph dashboards, Prometheus, and alerting integrations.

Cost-efficient retention: Lower TCO for storing large datasets compared to high-performance primary storage.

High durability and fault tolerance: Data is protected through Ceph replication or erasure coding, reducing risk of data loss.

Horizontal scalability: Capacity and performance can grow incrementally without downtime, supporting evolving storage needs.

Vendor independence: Based on open technologies, minimizing lock-in and enabling custom tailoring.

Operational simplicity: Unified management from Proxmox with integrated monitoring, lifecycle management, and automation.

Flexible access models: Filesystem, block, or object interfaces allow integration with backup systems, archival workflows, and data management tools.

Resilience and self-healing: Ceph automatically redistributes and recovers data in case of disk or node failures, reducing administrative overhead.

Compliance support: Suitable for long-term preservation and regulatory retention requirements.

The service is offered with the following metrics: *1000 GB for each unit*.

The service offers the following advantages:

- Cost-efficient retention: Lower TCO for storing large datasets compared to high-performance primary storage.
- High durability and fault tolerance: Data is protected through Ceph replication or erasure coding, reducing risk of data loss.
- Horizontal scalability: Capacity and performance can grow incrementally without downtime, supporting evolving storage needs.
- Vendor independence: Based on open technologies, minimizing lock-in and enabling custom tailoring.
- Operational simplicity: Unified management from Proxmox with integrated monitoring, lifecycle management, and automation.
- Flexible access models: Filesystem, block, or object interfaces allow integration with backup systems, archival workflows, and data management tools.
- Resilience and self-healing: Ceph automatically redistributes and recovers data in case of disk or node failures, reducing administrative overhead.
- Compliance support: Suitable for long-term preservation and regulatory retention requirements.