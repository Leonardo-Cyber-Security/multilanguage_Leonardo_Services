# Platform as a Service (PaaS)

The following table lists the services included in the Platform as a Service (PaaS) category.

| FAMILY                               | LIST OF SERVICES                                            |
| ------------------------------------ | ----------------------------------------------------------- |
| Compute                              | Functions as a Service                                      |
| Security                             | Identity & Access Management Service                        |
| Security                             | Key Vault as a Service - Standard                           |
| Security                             | SIEM As A Service                                           |
| Middleware                           | PaaS API Management                                         |
| Middleware                           | Jboss as a Service                                          |
| Middleware                           | Spring boot as a Service                                    |
| Middleware                           | PaaS Business Process as a Service                          |
| Middleware                           | PaaS CMS as a Service                                       |
| Middleware                           | PaaS ETL - Batch / Real Time Processing - 1 worker          |
| Infra & Ops Platform                 | Multicloud Management Platform                              |
| Infra & Ops Platform                 | Control Room as a Service                                   |
| Infra & Ops Platform                 | IT infrastructure Service Operations (Logging & Monitoring) |
| Infra & Ops Platform                 | PaaS Ticket Management Service                              |
| DevSecOps                            | Configuration Manager                                       |
| DevSecOps                            | Test Automation                                             |
| DevSecOps                            | Quality Code Analysis                                       |
| DevSecOps                            | DevSecOps As A Service                                      |
| DevSecOps                            | Qualizer DevSecOps                                          |
| Big Data                             | Data Lake - 1TB                                             |
| Big Data                             | Data Lakehouse                                              |
| Big Data                             | Business Intelligence Platform                              |
| Big Data                             | Batch/Real time Processing - 1 Worker                       |
| Big Data                             | Event Message - 1 Worker                                    |
| Big Data                             | Data Governance                                             |
| Artificial Intelligence (AI)         | Speech to Text                                              |
| Artificial Intelligence (AI)         | PaaS - AI Audio & Video Analytics                           |
| Artificial Intelligence (AI)         | OCR                                                         |
| Artificial Intelligence (AI)         | Text Analytics                                              |
| Artificial Intelligence (AI)         | Translation                                                 |
| Artificial Intelligence (AI)         | AI Search - RAG                                             |
| Artificial Intelligence (AI)         | PaaS - AI Platform                                          |
| Artificial Intelligence (AI)         | PaaS - Semantic Knowledge Search                            |
| Artificial Intelligence (AI)         | AI SLM/LLM                                                  |
| Artificial Intelligence (AI)         | AI workflow                                                 |
| Artificial Intelligence (AI)         | Vector DB                                                   |
| Virtual Desktop Infrastructure (VDI) | VDI                                                         |
| Virtual Desktop Infrastructure (VDI) | VDI with GPU support                                        |
| Collaboration                        | Instant Messaging                                           |
| Database                             | PaaS SQL PostgreSQL                                         |
| Database                             | PaaS SQL Server                                             |
| Database                             | PaaS MongoDB                                                |
| Database                             | PaaS Redis                                                  |
| Database                             | PaaS Graph DB                                               |
| Network                              | PaaS CDN (Content Delivery Network)                         |
| Network                              | PaaS Domain Name System (DNS)                               |
| Network                              | PaaS WAF (Web Application Firewall)                         |
| Network                              | PaaS VPN                                                    |
| Storage                              | Block Storage (1000 GB) - High Density                      |
<figcaption>List of families and related PaaS services</figcaption>

## Compute Family

Below is the list of services belonging to the Compute family:

- Functions as a Service

### Functions as a Service

![Functions as a Service](assets/images/extract/media/FaaS.png)

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

- Identity & Access Management Service
- Key Vault as a Service

### Identity & Access Management Service

![Identity & Access Management Service](assets/images/extract/media/IaM.png)

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

The service offers the following advantages:

- *Improved overall security* → Centralizing authentication reduces the risk of vulnerabilities distributed across applications.
- *Reduced maintenance and development costs* → A single, centralized platform reduces the complexity and duplication of authentication code across applications.
- *Agility and Scalability* → Increased speed of onboarding new applications thanks to the use of standard protocols (OIDC, SAML, OAuth2).
- *Maintainability and Standardization* → Use of standard protocols (OIDC, SAML, OAuth2) that eliminate proprietary implementations and facilitate interoperability.

### Key Vault as a Service

![Key Vault as a Service](assets/images/extract/media/KeyVault.png)

#### Services Description

The service provides a secure cloud repository (Vault) for storing and managing credentials and passwords used by cloud applications without having to manually install and manage dedicated IaaS machines. 
The service consists of a software platform that enables centralized and automated management of encryption keys, secrets, and certificates, with access controlled by identity-based authentication and authorization methods.  
It also allows organizations to significantly simplify key lifecycle management, ensuring centralized control while leveraging the native cryptographic capabilities of KMS providers.

#### Features and Advantages

The main features and functionalities of the service are:

- *Secure Secret Storage* → Key/value secrets are stored in Key Vault As A Service in encrypted form, ensuring their integrity in the event of unauthorized access to raw storage.
- *Dynamic Secrets* → Key Vault As A Service can generate secrets on demand to allow users and/or applications to access different systems.
- *Data Encryption* → Key Vault As A Service can encrypt and decrypt workloads running on the PA infrastructure without archiving them, managing the entire lifecycle of the cryptographic material used in the encryption process.
- *Leasing and Renewal* → Key Vault As A Service associates a lease with each key or secret managed, which will result in its automatic revocation upon expiration and which can be renewed by clients through the integrated APIs provided by the platform.
- *Revocation* → Key Vault As A Service has integrated support for revoking keys and secrets, which can be revoked individually or in bulk (e.g., all keys of a specific user), for example in case of compromise.

The service is provided using Hashicorp Vault technology. 
The service offers high availability and geographic replication.  
The main workflow of Key Vault as a Service consists of four phases:

- *Authentication* → The process by which a client provides information that Key Vault as a Service uses to determine the authenticity of the requester. Once the client is authenticated, the system generates a token that is associated with the relevant policy.
- *Validation* → Validation occurs through trusted third-party sources, such as Active Directory, LDAP, and Okta.
- *Authorization* → The client is then associated with the Key Vault as a Service security policy, which consists of a set of rules that define which API endpoints a user, machine, or application is allowed or denied access to with its token.
- *Access* → Key Vault as a Service then grants access to keys and encryption features, secrets, and certificates.

The service offers the following advantages:

- *Risk reduction* → thanks to automatic key rotation and secret lifecycle management, it increases the protection of sensitive data, simplifies regulatory compliance and reduces the risk of human errors.
- *Operational efficiency and cost reduction* → less internal management, automation and standardization, scalability without hardware investment.
- *Optimized time-to-market* → developers focus on code, not key management; also enables secure applications to be delivered faster, improving agility and innovation.
- *Improved trust and reputation* → audit and traceability to demonstrate secure secret management to stakeholders or customers.
- *Cryptographic and standardized compliance* → can be configured to use FIPS (Federal Information Processing Standards) validated cryptographic modules, ensuring that all encryption, signing, HMAC and key derivation operations comply with the standards.

## Middleware Family

Below is the list of services belonging to the Middleware family:

- PaaS API Management
- Jboss as a Service
- Spring boot as a Service
- PaaS Business Process as a Service
- PaaS CMS as a Service
- PaaS ETL - Batch / Real Time Processing - 1 worker

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

The service offers the following advantages:

- *Reduced time to market* → APIs can be published and managed quickly without building the infrastructure from scratch.
- *Flexibility and scalability* → the platform grows with business needs, supporting traffic spikes or new integrations without disruption.
- Reduced operating costs → no hardware or maintenance investments: infrastructure management is delegated to the PaaS provider.
- *API monetization* → ability to create API-driven business models (e.g., exposing APIs to partners or customers with pricing plans).
- *Enhanced security and compliance* → secure management of APIs and traffic between services, with authentication, authorization, and rate limiting policies, protecting the infrastructure from unauthorized access.
- *Open ecosystem* → Facilitates partnerships and innovation thanks to an API-ready and standardized infrastructure.

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
- *Back-end* → the server core manages application execution, request processing, resource management (datasources, JMS queues, batch, etc.), and integration with external systems via resource adapters and connectors.
- *Database* → integrates with relational and NoSQL databases via configurable datasources, used by applications for data persistence.
- *Security and Authentication* → offers an advanced security subsystem for authentication, authorization, encryption, and auditing. It supports authentication via LDAP, Kerberos, SSO, and integration with external identity providers, ensuring secure access that complies with corporate standards.

The service offers the following advantages:

- *Reduced time to market* → application lifecycle automation, centralized management, and easy integration with DevOps pipelines reduce development and release times, accelerating response to market needs.
- *Reduced operating costs* → centralized resource management and the platform's modularity optimize the use of existing infrastructure, reducing waste and operating costs.
- *Security posture* → security policies can be defined and applied consistently across all applications, reducing risk and ensuring regulatory compliance.
- *Faster innovation* → management tools (CLI, Web Console, REST API) and automated deployment and configuration processes reduce the operational burden on IT teams.
- *DevOps integration* → integrated CI/CD pipelines for build and deployment.

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

The service offers the following advantages:

- *Reduced time to market* → Deployment automation and simplified environment management allow applications to be brought into production more quickly.
- *Reduced operating costs* → No hardware or maintenance investments: infrastructure management is handled for the customer.
- *Observability and monitoring* → Preconfigured tools to track performance, errors, and response times.
- *Guaranteed security* → Automatic patch and update management.
- *Environment consistency* → Same environments for development, testing, and production.
- *Microservices support* → Simplified management of distributed architectures.

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
- Process Portal → User portal for receiving, executing, or approving tasks.
- *Performance Data Warehouse (PDW)* → Performance collection and analysis system, stores process execution data and enables historical analysis and real-time monitoring.

The service offers the following advantages:

- * Operational efficiency and cost reduction* → automation and reduction of manual and repetitive tasks, resulting in reduced personnel costs, errors, and inefficiencies.
- *Transparency and control* → end-to-end visibility. Each process is tracked in real time. Increases accountability and control.
- *Quality and standardization* → consistent and compliant processes. Ensures processes are always executed consistently, reducing deviations and variability.
- *Compliance and auditability* → complete traceability for audits and regulatory compliance. Every step and decision is documented, facilitating internal controls and regulatory compliance
- *Monitoring and observability* → integrated dashboards and analytics.

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

The service offers the following advantages:

- *Accelerated time to market* → rapid launch of websites and apps.
- *Reduced operating costs* → no servers or internal maintenance. High availability and resilience.
- *Support for omnichannel strategies* (web, mobile, e-commerce, IoT).
- *Ability to operate in multiple markets* with multilingual websites.
- *Simplified collaboration* for distributed teams.
- *Continuous innovation at no additional cost* → new features released by the provider.
- *Native integration with cloud services* (CRM, analytics, AI, CDN).
- *Front-end/back-end separation* → freedom to use modern frameworks (React, Vue, Angular, etc.).

### PaaS ETL - Batch / Real Time Processing

![PaaS ETL - Batch / Real Time Processing](assets/images/extract/media/ETL.png)

#### Services Description

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

The service offers the following advantages:

- *Support for data-driven strategies, faster and more informed decisions* → centralized data for service customization (e.g., real-time analytics for marketing, IoT, e-commerce, etc.) and ready-to-use pipelines without complex development. 
- *Greater focus on core business* → development and IT teams do not have to worry about technical maintenance, as it is managed.
-* Reduced operating costs and service scalability* → no infrastructure to manage; support for large data volumes (batch) or continuous flows (streaming); automation of extraction, transformation, and loading processes with real-time scheduling or triggers; same framework for historical data and real-time flows.
- *Integration with cloud ecosystem* (data warehouse, data lake, BI, AI/ML).
- *Guaranteed security and compliance* (encryption, access, audit logs).
- *Integrated monitoring* → metrics, alerts, and centralized logging for ETL pipelines.

## Infra & Ops Platform Family

Below is the list of services belonging to the Infra & Ops Platform family:

- Multicloud Management Platform - Leonardo SCMP
- Control Room as Service
- IT infrastructure Service Operations (Logging & Monitoring)
- PaaS Ticket Management Service
- PaaS Ticket Management Service (ITSM)
- PaaS Ticket Management Service (ADD-ON ITOM)

### Multicloud Management Platform - Leonardo Secure Cloud Management Platform (SCMP)

![Multicloud Management Platform - Leonardo Secure Cloud Management Platform (SCMP)](assets/images/extract/media/SCMP.png)

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

The service offers the following advantages:

- *Simplify the management of heterogeneous and complex IT infrastructures* → centralizes resource management across multiple clouds or hybrid infrastructures, simplifying visibility, management, and control of distributed resources.
- *Scalability and flexibility* → identifies the most suitable IT services and resources at the time, continuously adapting to business needs.
- *Cloud expense optimization* → enables constant monitoring and optimization of current and forecasted IT infrastructure expenses.
- *Agility and speed* → on-demand resource allocation and automation of daily operations (e.g., resource management, configuration, scaling) reduces provisioning times and the workload for IT groups.
- *Faster and more informed decisions* → guides IT development strategy with a data-driven approach.
- *Reduced time to market* → reduces the time required to develop and deploy new applications, improving time to market and accelerating response to market needs.
- *Improves the reliability of services and processes *→ governance, security, and compliance policies can be centrally managed, ensuring that Resources are protected and regulations are complied with.
- *IT Operations Support* → can be integrated with IT service management (ITSM) and IT operations automation tools (such as Ansible, Chef, SaltStack), improving service quality and reducing manual errors.

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
- *Shorter problem resolution time *→ thanks to the details provided (tracing, distributed diagnosis, code, database, and network visibility).
- *Automation and artificial intelligence* → automatic recognition of patterns or anomalies (e.g., through video analytics or generative AI), automatic generation of intervention or escalation plans, improving forecasting and response capabilities over time.
- *Traceability and reporting* → complete recording of events, decisions, and actions taken.

### IT infrastructure Service Operations (Logging & Monitoring)

![IT infrastructure Service Operations (Logging & Monitoring)](assets/images/extract/media/ITSO.png)

#### Services Description

This is an Application Performance Monitoring (APM) service that monitors and controls infrastructure performance supporting applications (e.g., latency, errors, service availability) and workloads deployed in the PSN cloud environment.  
It provides centralized collection and analysis across various infrastructure elements: Servers and VMs, Containers and orchestrators, Cloud providers, and Network.  
It provides AI-based analytics to prevent and resolve issues before they impact users.

#### Features and Advantages

The service offers the following main features:

- *Full-stack observability* → connects detected infrastructure metrics with application metrics. For example, if an app slows down, Dynatrace shows whether the cause is a code, database, container, or network issue.
- *AI-based analysis (Davis AI)* → the Davis AI engine automatically analyzes data, detects anomalies, and identifies the root cause, reducing noise (fewer unnecessary alerts) to only relevant events. Predictions on resource saturation and future performance (capacity planning).
- *Real-time monitoring* → Interactive and customizable dashboards. Automatic topology mapping (service map) showing how applications and services are connected to the underlying infrastructure resources.
- *Automation and remediation* → integration with cloud providers (AWS, Azure, GCP, OCI), orchestrators (Kubernetes, OpenShift, VMware Tanzu), DevOps tools (Jenkins, Ansible, Terraform, GitOps), and ITSM/ticketing (ServiceNow, Jira). Ability to automate corrective actions, such as scaling containers, restarting services, and applying patches.
- *Multi-cloud and hybrid support* → supports brownfield environments (existing) without requiring code changes.

The main components of the service are:

- *OneAgent* → installed software agent for automatic metric collection (CPU, RAM, I/O, network, storage), end-to-end transaction tracing between services, log and runtime event capture, process monitoring, and automatic dependency detection.
- *ActiveGate* → manages secure communication between OneAgent and the Dynatrace platform for data compression and encryption, reducing network load in distributed environments, and integration with cloud environments (AWS, Azure, GCP) and external APIs.
- *Dynatrace Cluster* → receives, stores, and processes data from OneAgents, applies analysis and correlation algorithms, ensures scalability, and provides APIs and integration tools (ITSM, CI/CD, DevOps tools).
- *Davis AI* → AI engine for real-time anomaly analysis, automatic root cause analysis, capacity and performance forecasting, and reduced false positive alerts.
- *Dynatrace Web UI / Mobile App / API* → interfaces for user interaction, providing: dashboards. Customizable; topological views (Smartscape); dynamic dependency maps between hosts, services, and applications; access via REST API and SDK for integration with DevOps pipelines, ITSM, and automation tools.
- *Extensions and Integrations* → connect Dynatrace to third-party services and tools

The service offers the following advantages:

- *Reduced operating costs* → thanks to automation and the ability to prevent outages
Improved user experience → user session monitoring, frontend/backend performance analysis, and continuous optimization.
- *Increased productivity for development, operations, and DevOps teams* → thanks to clear insights, automatic root cause analysis, and less time spent diagnosing problems.
- *Improved decision-making for management* → visibility into application KPIs, business metrics, and customer impact, enabling more targeted investments.
- *Support for sustainability goals* → measurement and optimization of cloud resource usage, reducing infrastructure waste.
- *Full-stack observability* → metrics, traces, logs, user sessions; Correlation between frontend/backend/infrastructure components.
- *Automatic detection of dependencies and dynamic topologies* (services, hosts, containers, microservices) through automatic discovery.
- *Shorter time to resolution* → thanks to the details provided (tracing, distributed diagnosis, code, database, network visibility).
- *Continuous infrastructure monitoring*
- *Built-in governance and security capabilities* → policies, vulnerability visibility, runtime monitoring, compliance.
- *Scalability and high availability* → resilient infrastructure, automatic failovers, and multi-zone deployment in secure clouds to ensure always-on reliability.

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

The service offers the following advantages:

- *Reduced operating costs* → thanks to process automation and a reduction in manual tasks, fewer repetitive interventions and a lower cost per ticket.
Increased support team productivity → thanks to workflow automation, the use of AI (for automatic classification, suggestions, pre-populated responses), and self-remediation, the manual burden on IT operators is reduced. The self-service portal and knowledge base enable self-resolution of many user issues.
- *Support for business decisions* → integrated reports and dashboards provide KPIs on average response times, resolution, ticket volumes by category, and seasonal trends.
- *Improved user experience* → users can open tickets, monitor status, and find solutions independently, reducing frustration and wait times. Furthermore, it fosters a collaborative and efficient environment between users and support teams, with agents viewing the same status in real time.
- *Improved control and governance of IT services* → provides a comprehensive view of assets, users, and services, supporting regulatory compliance and service level agreement (SLA) monitoring in a documented and traceable manner.
- *Native integration with the IT ecosystem* → possible integrations with SSO systems (e.g., Active Directory/Azure AD), UEM, Asset Management, Change Management, IT monitoring, HR systems, and others via API, reducing information silos and improving data quality.

##  DevSecOps Family

Below is the list of services belonging to the  DevSecOps family:

- Configuration Manager
- Test Automation
- Quality Code Analysis
- DevSecOps As A Service
- Qualizer DevSecOps

### Configuration Manager

![Configuration Manager Service)](assets/images/extract/media/Config.png)

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

### Test Automation

![Test Automation Service)](assets/images/extract/media/Test.png)

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

### Quality Code Analysis

![Quality Code Analysis Service)](assets/images/extract/media/Quality.png)

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

The service offers the following advantages:

- *Lower risk of bugs in production and reduced maintenance costs* → more reliable and stable software, cleaner and more maintainable code.
- Compliance with security standards → regulatory and audit support.
- *Increased customer/stakeholder trust* → software perceived as more secure and robust.
- *Long-term Return On Investment (ROI)* → less time and resources spent on late fixes.
- *Increased team productivity* → less rework, more focus on new features.
- *Support for Agile and DevOps approaches* → the service enables the Clean as You Code approach and automates quality and security checks, reducing time to remediation thanks to immediate feedback to developers.
- *Improved software quality* → through the systematic application of quality rules, the service helps improve code maintainability and readability.
Technical debt management → estimate the time to fix issues.

### DevSecOps As A Service

![DevSecOps As A Service)](assets/images/extract/media/DevSecOps.png)

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

### Qualizer DevSecOps

![DevSecOps As A Service)](assets/images/extract/media/Qualizer.png)

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

- Data Lake - 1TB
- Data Lakehouse
- Business Intelligence
- Batch/Real time Processing - 1 Worker
- Event Message
- Data Governance

### Data Lake - 1TB

![Data Lake Service)](assets/images/extract/media/DataLakeLDO.png)

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

### Data Lakehouse

![Data Lake Service)](assets/images/extract/media/DataLakehouse.png)

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

### Business Intelligence

![Data Lakehouse Service)](assets/images/extract/media/BI.png)

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

### Batch/Real time Processing - 1 Worker

![Batch/Real time Processing Service)](assets/images/extract/media/Processing.png)

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

The service offers the following advantages:

- *Support for data-driven strategies, faster and more informed decisions* → centralized data for service customization (e.g., real-time analytics for marketing, IoT, e-commerce, etc.) and ready-to-use pipelines without complex development. 
- *Greater focus on core business* → development and IT teams do not have to worry about technical maintenance, as it is managed.
-* Reduced operating costs and service scalability* → no infrastructure to manage; support for large data volumes (batch) or continuous flows (streaming); automation of extraction, transformation, and loading processes with real-time scheduling or triggers; same framework for historical data and real-time flows.
- *Integration with cloud ecosystem* (data warehouse, data lake, BI, AI/ML).
- *Guaranteed security and compliance* (encryption, access, audit logs).
- *Integrated monitoring* → metrics, alerts, and centralized logging for ETL pipelines.

### Event Message

![Event Message Service)](assets/images/extract/media/Event.png)

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
- *Consumers* → entities that process records/messages

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

### Data Governance

![Data Governance Service)](assets/images/extract/media/Governance.png)

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

- Speech to Text
- AI Audio & Video Analytics
- OCR
- Text Analytics
- Text Translation
- AI Search - RAG
- AI Platform
- Semantic Knowledge Search
- AI SLM/LLM
- AI workflow
- Vector DB

### Speech to Text

![Speech to Text Service)](assets/images/extract/media/STT.png)

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

### AI Audio & Video Analytics

![AI Audio & Video Analytics Service)](assets/images/extract/media/AudioVideo.png)

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

### Optical Character Recognition (OCR)

![Optical Character Recognition (OCR) Service)](assets/images/extract/media/OCR.png)

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

The service offers the following advantages:

- *Lower document management costs* → fewer staff dedicated to data entry and fewer errors that generate correction costs or disputes.
- *Paperless transformation* → enables the complete digitalization of archives and paper flows, reducing paper consumption and physical space.
- *Faster and more traceable workflows* → Scanned documents become immediately accessible data and can be integrated into management systems.
- *Traceability and compliant archiving* → Facilitates compliant digital archiving, improving compliance management (GDPR, electronic preservation).
- *Extensive support* → Native support for dozens of languages ​​and formats (e.g., PDF, JPEG, PNG, TIFF, scanned documents).
- *Standard formats* → The extracted text is immediately usable in management or analytics systems.
- *Real-time and batch processing* → Analysis of live streaming or recorded multimedia archives, thanks to the integration of Processing PaaS.
- *Managed maintenance and updates* → the infrastructure, security, and updates of AI models are managed.

### Text Analytics

![Text Analytics Service)](assets/images/extract/media/Text.png)

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

The service offers the following advantages:

- *Better understanding for users and service consumers* → analyzes feedback, reviews, chats, and surveys to extract sentiment.
- *Data-driven decisions* → transforms unstructured text into quantifiable insights that can be displayed in dashboards.
- *Reduced operational costs* → automates text comprehension, significantly reducing human overhead.
- *Reduced operational costs* → automates text comprehension, significantly reducing human overhead.
- *Automation and scalability* → analyzes large volumes of text from heterogeneous sources.
- *Faster time to market* → simple integration via API with third-party systems and applications.
- *Multilingualism and semantic support* → understands meanings, synonyms, and context (not just keywords).

### Text Translation

![Text Analytics Service)](assets/images/extract/media/Translation.png)

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

The service offers the following advantages:

- *International expansion* → allows you to easily communicate with customers, suppliers, and citizens of different languages, enabling access to new markets or linguistic communities.
- *Reduced translation time and costs* → automates the translation of texts, documents, and communications, reducing reliance on human translators and accelerating publication workflows.
- *Multilingual process automation* → integrates translation directly into digital processes, eliminating manual tasks and downtime.
- *Improved access to information and knowledge* → International content (reports, technical documents, studies) becomes immediately accessible in local languages.
- *Accuracy thanks to neural translation models (NMT)* → Neural translation engines understand context and produce more natural-sounding texts than older statistical models.
- *Multiformat support* → automatic translation of texts, documents (PDF, DOCX, HTML), and data streams in real time.
- *Linguistic customization* → ability to train custom models with glossaries or corporate terminologies for more consistent translations.
- *AI Model Updates* → Constantly updating the included neural models, improving accuracy and language support without manual intervention.

### AI Search - RAG

![AI Search - RAG Service)](assets/images/extract/media/AIsearch.png)

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

### AI Platform

![AI Platform Service)](assets/images/extract/media/AIplatform.png)

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

### Semantic Knowledge Search

![Semantic Knowledge Search Service)](assets/images/extract/media/Semantic.png)

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

### AI SLM/LLM

![AI SLM/LLM Services)](assets/images/extract/media/LLM.png)

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

### AI workflow

![AI workflow Service)](assets/images/extract/media/AIworkflow.png)

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

### Vector DB

![Vector DB Service)](assets/images/extract/media/Vector.png)

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

- VDI
- VDI with GPU support

### VDI

![VDI Service)](assets/images/extract/media/VDI.png)

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

The service offers the following advantages:

- *Reduced operating costs* → optimize operations through centralized management and save device costs through BYOD (Bring Your Own Device) support.
- *Increased security* → data protection through appropriate policies.
- *Increased productivity* → consistent and seamless user experience, regardless of the device used.
- *Business continuity and disaster recovery* → always-on desktops.
- *Centralized management *→ patches, updates, and policies are centrally applied.
- *Scalability* → easily add/remove users and resources as needed.
- *Cross-platform compatibility* → Windows, Linux, macOS, iOS, Android, browsers.


### VDI with GPU support

![VDI with GPU support Service)](assets/images/extract/media/VDI.png)

#### Services Description

It is a more advanced version of the previously described VDI service that supports graphics accelerator (GPU) management for additional graphics acceleration capabilities.

#### Features and Advantages

The service offers the same basic features as the previously described VDI service with the addition of GPU support capabilities.  
VMs can have graphics acceleration features for users who require software such as CAD/CAM (e.g., AutoCAD, SolidWorks), 3D modeling (e.g., Blender, 3ds Max), GIS (e.g., ArcGIS), Scientific rendering and visualization, and video editing (e.g., Adobe Premiere, DaVinci Resolve). Examples of additional features include HDX 3D Pro, GPU virtualization (NVIDIA vGPU, AMD MxGPU), high-performance remote access, multi-monitor and 4K support, and bandwidth and latency optimization.  

The service offers the same components as the previously described VDI service.

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

- Instant Messaging

### Instant Messaging

![Instant Messaging Service)](assets/images/extract/media/IM.png)

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

