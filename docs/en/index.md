# Leonardo Cloud Everywhere Overview

Leonardo Cloud Everywhere is a **Full-Stack Cloud Services Platform** with a focus on security and privacy.

The Cloud offering, grouped into [Infrastructure as a Service (IaaS)](IaaS.md), [Container as a Service (CaaS)](CaaS.md), [Platform as a Service (PaaS)](PaaS.md) and [Hybrid Services](Hybrid.md), covers the entire spectrum of self-provisioned cloud infrastructure. 

These services are described in detail in the various sections, which you can access via the menu on the left.

By consulting the left-hand menu of the site you can also access the other specific sections of Leonardo Cloud Everywhere.

## Distinctive features of Leonardo Cloud Everywhere

### Full-Stack Cloud offering with a focus on security and confidentiality

Leonardo Cloud Everywhere presents itself as a “complete cloud” but with a strong focus on **confidentiality/confidential computing**, reducing the attack surface.

Among the IaaS/CaaS offerings, the [Confidental Private IaaS](IaaS.md#pool-confidential-services) and [Confidential Shared-IaaS (VMs)](IaaS.md#VMs) segments stand out, as well as a [Kubernetes Confidential Computing](CaaS.md#kubernetes) service for containers.  

At the PaaS/management level, services include [Identity & Access Management (IAM) Service](PaaS.md#IAM), [Key Vault as a Service - Standard](PaaS.md#key-vault), [PAM (Privileged Access Management)](PaaS.md#PAM), [Endpoint Protection](PaaS.md#endpoint), [Intrusion Prevention System (IPS)](PaaS.md#IPS),[NGFW Platform](PaaS.md#ngfw),[IT infrastructure Service Operations (Logging & Monitoring)](PaaS.md#ITops), [PaaS Operations Management](PaaS.md#operations), [Backup Platform](PaaS.md#backup), [Data Governance](PaaS.md#governance), [Big Data Platforms](PaaS.md#big-data-family), [Databases](PaaS.md#database-family), [AI](PaaS.md#artificial-intelligence-family), etc. — a very comprehensive set, not just "VMs + storage."  

### Data sovereignty and the "European/Italian supply chain"

The cloud services are delivered "through a completely Italian supply chain".  

The services are hosted in data centers located in Italy, not on "global" servers scattered around the world. This means that data and metadata never leave Italy or Europe, guaranteeing internal/in-EU sovereignty and control.

This approach aims to offer a "sovereign" alternative to foreign hyperscalers, mitigating legal and regulatory risks associated with extraterritorial laws such as the CLOUD Act or FISA. As analyses on the European cloud also explain, using an EU-based provider, with EU data centers and local jurisdiction, simplifies **compliance and control**.

### European regulatory compliance: GDPR, cybersecurity requirements, readiness for regulations such as NIS2

The cloud offering ensures **compliance with the GDPR** and the "National Cyber ​​Security Perimeter" for public administration, defense, and critical infrastructure.

Since Leonardo is also active in cybersecurity and defense, this allows it to offer **managed security services**, real-time incident detection, vulnerability management, crisis management, and "secure by design" applications.  

In the current European context, with the new NIS2 Directive (entering into force for many member states in 2024/2025) imposing stringent requirements on cybersecurity, resilience, and incident reporting for essential service operators and digital service providers, having a "sovereign" cloud with robust security controls represents a competitive and regulatory advantage.

### “Confidential/Zero-Trust” approach

Leonardo recently strengthened its cyber portfolio by focusing on a "zero trust" model at the European level.  
It acquired a significant stake in SSH Communications Security Corporation, a leading European company in cybersecurity, PAM, and quantum-safe encryption solutions for clouds and critical infrastructures. It also acquired Axiomatics for ABAC solutions.  

Leonardo offers more than just "Cloud + Proprietary Datacenters," but also aims to ensure **strong protection, controlled access, encryption, and advanced defense** to respond to modern threats and high-privacy requirements (e.g., public administration, defense, critical infrastructures).

### Comparison with other solutions

The major hyperscalers offer global scale, a vast ecosystem, and numerous services (AI, machine learning, globally distributed services, CDNs, networking across multiple continents, etc.).  
Companies that operate globally or require massive scalability and an international presence often prefer them.  
This is partly recognized by the European market as well: according to European cloud sources, US hyperscalers continue to hold the majority of the market.  

However, if the company/organization's priority is **data sovereignty, European regulatory compliance, privacy protection, and minimal exposure to extraterritorial laws (CLOUD Act, FISA, etc.)**, then a European cloud like Leonardo Cloud Everywhere can offer an **interesting trade-off**: perhaps less "global reach/ecosystem" than AWS/Azure, but with greater control, transparency, and legal guarantees. This is a well-known theme: many "private/European" providers are seen as having advantages, especially in terms of regulatory compliance, privacy, and sovereignty.  

Another aspect is that many "sovereign cloud" infrastructures (European or national) still struggle to offer **all the advanced services** they require. They still represent the majority of the European market in terms of capacity and speed of innovation, and lack self-provisioning capabilities.

In summary: choosing Leonardo Cloud Everywhere offers **greater sovereignty, security, compliance, and reduced legal/jurisdictional risk, and lays the foundation for national and European digital independence**.

## The logical categories of Leonardo Cloud Everywhere

### Infrastructure as a Service (IaaS)

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY  | LIST OF SERVICES                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| Compute | [Confidental Private IaaS](IaaS.md#pool-confidential-services)|
| Compute | [Confidential Shared-IaaS (VMs)](IaaS.md#VMs)|
<figcaption>List of families and related IaaS services</figcaption>

### Container as a Service (CaaS)

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY  | LIST OF SERVICES                  |
| ------- | --------------------------------- |
| Compute | [Kubernetes Confidential Computing](CaaS.md#kubernetes)|
<figcaption>List of families and related CaaS services</figcaption>

### Platform as a Service (PaaS)

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY                               | LIST OF SERVICES                                            |
| ------------------------------------ | ----------------------------------------------------------- |                            
| Security                             | [Identity & Access Management (IAM) Service](PaaS.md#IAM)|
| Security                             | [Key Vault as a Service - Standard](PaaS.md#key-vault)                           |
| Security                             | [Endpoint Protection](PaaS.md#endpoint)                                           |
| Security                             | [NGFW Platform](PaaS.md#ngfw)                                           |
| Security                             | [PAM (Privileged Access Management)](PaaS.md#PAM)                                           |
| Security                             | [Intrusion Prevention System (IPS)](PaaS.md#IPS)                                           |
| Middleware                           | [PaaS API Management](PaaS.md#API)                                         |
| Middleware                           | [Functions As A Service (FAAS)](PaaS.md#faas)                                |       
| Middleware                           | [Jboss as a Service](PaaS.md#Jboss)                                          |
| Middleware                           | [Spring boot as a Service](PaaS.md#spring-boot)                                    |
| Middleware                           | [PaaS Business Process as a Service](PaaS.md#BPM)                          |
| Middleware                           | [PaaS CMS as a Service](PaaS.md#CMS)                                       |
| Middleware                           | [Semantic Knowledge Search](PaaS.md#semantic-search)                            |
| Data Protection                      | [Backup Platform](PaaS.md#backup)                            |
| Infra & Ops Platform                 | [Multicloud Management Platform](PaaS.md#SCMP)                              |
| Infra & Ops Platform                 | [IT infrastructure Service Operations (Logging & Monitoring)](PaaS.md#ITops)|
| Infra & Ops Platform                 | [PaaS Ticket Management Service](PaaS.md#ITSM)                              |
| Infra & Ops Platform                 | [PaaS Operations Management](PaaS.md#operations)                              |
| DevSecOps                            | [Configuration Manager](PaaS.md#config)                                       |
| DevSecOps                            | [Test Automation](PaaS.md#test)                                             |
| DevSecOps                            | [Quality Code Analysis](PaaS.md#quality)                                       |
| DevSecOps                            | [DevSecOps As A Service](PaaS.md#devsecops)                                      |
| DevSecOps                            | [Qualizer DevSecOps](PaaS.md#qualizer)                                          |
| Big Data                             | [Data Lake](PaaS.md#datalake)                                             |
| Big Data                             | [Data Lake-Cold](PaaS.md#datalake-cold)                                             |
| Big Data                             | [Business Intelligence Platform](PaaS.md#BI)                              |
| Big Data                             | [PaaS ETL Batch/Real time Processing](PaaS.md#processing)                       |
| Big Data                             | [Event Message](PaaS.md#event-message)                                    |
| Big Data                             | [Data Governance](PaaS.md#governance)                                             |
| Artificial Intelligence (AI)         | [Speech to Text](PaaS.md#speech-to-text)                                              |
| Artificial Intelligence (AI)         | [PaaS - AI Audio & Video Analytics](PaaS.md#AI-audio-video)                           |
| Artificial Intelligence (AI)         | [OCR](PaaS.md#AI-OCR)                                                          |
| Artificial Intelligence (AI)         | [Text Analytics/NLP](PaaS.md#AI-text)                                              |
| Artificial Intelligence (AI)         | [Translation](PaaS.md#AI-translation)                                                 |
| Artificial Intelligence (AI)         | [AI Search - RAG](PaaS.md#AI-search)                                             |
| Artificial Intelligence (AI)         | [AI Platform](PaaS.md#AI-platform)                                          |
| Artificial Intelligence (AI)         | [AI SLM/LLM](PaaS.md#AI-SLM-LLM)                                                  |
| Collaboration                        | [Instant Messaging](PaaS.md#messaging)                                           |
| Database                             | [PaaS SQL - PostgreSQL](PaaS.md#postgres)                                         |
| Database                             | [PaaS SQL - MariaDB](PaaS.md#mariaDB)                                             |
| Database                             | [PaaS SQL - MS SQL Server EE](PaaS.md#sqlserver)                                                |
| Database                             | [PaaS SQL - MS SQL Server EE (BYOL)](PaaS.md#sqlserver-byol)                                                  |
| Database                             | [PaaS GraphDB](PaaS.md#graphDB)                                               |
| Database                             | [PaaS NoSQL - MongoDB](PaaS.md#mongoDB)                                               |
| Database                             | [PaaS In Memory - Redis](PaaS.md#redis)                                               |
| Networking                           | [PaaS CDN (Content Delivery Network)](PaaS.md#CDN)                         |
| Networking                           | [PaaS Domain Name System (DNS)](PaaS.md#DNS)                               |
| Networking                           | [Single public IP](#IP)                         |
| Networking                           | [L7 Load Balancer (regional)](PaaS.md#L7)                                                    |
| Networking                           | [Cloud connected Service](PaaS.md#gold)                                                    |
| Storage                              | [Block Storage-High Density](PaaS.md#block-storage)                      |
| Storage                              | [Archive Storage](PaaS.md#archive-storage)                      |                    
<figcaption>List of families and related PaaS services</figcaption>

### Hybrid Services

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY  | LIST OF SERVICES                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| Hybrid | [Edge Location - Pool Small (Confidential)](Hybrid.md#edge)|
| Hybrid | [Bulk Data Transfer](Hybrid.md#bulk)|
<figcaption>List of families and related Hybrid services</figcaption>