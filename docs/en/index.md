# Leonardo Cloud Everywhere Overview

Leonardo Cloud Everywhere (LCE) is a **Full-Stack Cloud Services Platform** with a focus on security and privacy.

The Cloud offering, grouped into [Infrastructure as a Service (IaaS)](IaaS.md), [Container as a Service (CaaS)](CaaS.md), [Platform as a Service (PaaS)](PaaS.md) and [Hybrid Services](Hybrid.md), covers the entire spectrum of self-provisioned cloud infrastructure. 

These services are described in detail in the various sections, which you can access via the menu on the left.

By consulting the left-hand menu of the site you can also access the other specific sections of Leonardo Cloud Everywhere.

## Distinctive features of Leonardo Cloud Everywhere

### Full-Stack Cloud offering with a focus on security and confidentiality

Leonardo Cloud Everywhere presents itself as a “complete cloud” but with a strong focus on **confidentiality/confidential computing**, reducing the attack surface.

Among the IaaS services offered, notable offerings include [Confidential Private IaaS](IaaS.md#pool-confidential-services) and [Confidential Shared-IaaS (VMs)](IaaS.md#VMs).

Among the CaaS services offered, you can find [Kubernetes](CaaS.md#kubernetes) and [Kubernetes Confidential Computing](CaaS.md#kubernetes-conf) container orchestrators.

Among the PaaS services offered, there are services in the following areas: [Security](PaaS.md#security-family), [Middleware](PaaS.md#middleware-family), [Infra & Ops Platform](PaaS.md#infra-ops-platform-family), [DevSecOps](PaaS.md#devsecops-family), [Data Platform](PaaS.md#big-data-family), [AI](PaaS.md#ai-family), [Database](PaaS.md#database-family), and [Networking](PaaS.md#networking-family).

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

However, if the company/organization's priority is **data sovereignty, European regulatory compliance, privacy protection, and minimal exposure to extraterritorial laws (CLOUD Act, FISA, etc.)**, then a European cloud like Leonardo Cloud Everywhere can offer an **interesting trade-off**: perhaps a less global "reach/ecosystem" than global hyperscalers, but with greater control, transparency, and legal guarantees. This is a well-known theme: many "private/European" providers are seen as having advantages, especially in terms of regulatory compliance, privacy, and sovereignty.  

Another aspect is that many "sovereign cloud" infrastructures (European or national) still struggle to offer **all the advanced services** they require. They still represent the majority of the European market in terms of capacity and speed of innovation, and lack self-provisioning capabilities.

In summary: choosing Leonardo Cloud Everywhere offers **greater sovereignty, security, compliance, and reduced legal/jurisdictional risk, and lays the foundation for national and European digital independence**.

## The four logical categories of the offering

### Infrastructure as a Service (IaaS)

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY | SERVICES |
|----------|----------|
| **Compute** | • [Confidential Private IaaS](IaaS.md#pool-confidential-services)<br>• [Confidential Shared-IaaS (VMs)](IaaS.md#VMs) |
<figcaption>List of families and related IaaS services</figcaption>

### Container as a Service (CaaS)

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY | SERVICES |
|----------|----------|
| **Compute** | • [Kubernetes](CaaS.md#kubernetes)<br>• [Kubernetes Confidential Computing](CaaS.md#kubernetes.conf) |

<figcaption>List of families and related CaaS services</figcaption>

### Platform as a Service (PaaS)

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY | SERVICES |
|----------|----------|
| **Security** | • [Identity & Access Management (IAM) Service](PaaS.md#IAM)<br>• [Key Vault as a Service - Standard](PaaS.md#key-vault)<br>• [Endpoint Protection](PaaS.md#endpoint)<br>• [NGFW Platform](PaaS.md#ngfw) |
| **Middleware** | • [PaaS API Management](PaaS.md#API)<br>• [Functions As A Service (FAAS)](PaaS.md#faas) |
| **Infra & Ops Platform** | • [IT Infrastructure Service Operations (Logging & Monitoring)](PaaS.md#ITops) |
| **DevSecOps** | • [DevSecOps As A Service](PaaS.md#devsecops)<br>• [Qualizer DevSecOps](PaaS.md#qualizer) |
| **Big Data** | • [Data Lake](PaaS.md#datalake)<br>• [Data Platform](PaaS.md#dataplatform)<br>• [Business Intelligence Platform](PaaS.md#BI)<br>• [Event Message](PaaS.md#event-message) |
| **Artificial Intelligence (AI)** | • [AI Platform](PaaS.md#AI-platform) |
| **Database** | • [PaaS SQL - PostgreSQL](PaaS.md#postgres)<br>• [PaaS In Memory - Redis](PaaS.md#redis) |
| **Networking** | • [PaaS Domain Name System (DNS)](PaaS.md#DNS) |
<figcaption>List of families and related PaaS services</figcaption>

### Hybrid Services

Below is a list of services included in this category.  
For details on each service, please see the dedicated section. 

| FAMILY | SERVICES |
|----------|----------|
| **Hybrid** | • [Edge Location - Pool Small (Confidential)](Hybrid.md#edge)<br>• [Bulk Data Transfer](Hybrid.md#bulk)|
<figcaption>List of families and related Hybrid services</figcaption>