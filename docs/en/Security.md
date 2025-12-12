# Infrastructure Security Specifications

This section lists the IT security specifications provided by the Leonardo Security Operation Centre (SOC) relating to its Cloud infrastructures on which the services provided are based.

## Encryption 

The Data at Rest Encryption requirement—i.e., ensuring the confidentiality of data stored on the infrastructure’s disks through encryption—is fulfilled by integrating the storage solutions, for both block storage and object storage, with a centralized Key Management System (KMS).  

Specifically, for block storage, the confidentiality of data within Persistent Volumes (PV) created on the Kubernetes cluster infrastructure is ensured through the Ceph storage solution, which supports volume encryption. The enablement and configuration of the integration with the external KMS is performed at the storage class level, using the Key Management Interoperability Protocol (KMIP).  

For object storage, the confidentiality of stored data is guaranteed through the native integration provided by the storage application solution (MinIO) with the KMS. MinIO supports automated SSE-KMS encryption for all objects written to a bucket, using a specific external key (EK) stored in the external KMS. MinIO encrypts stored data using a unique key retrieved from the KMS. The KMS is responsible for storing and managing the master key used to protect the data-encryption key utilized by the MinIO system.  

All data-transmission communications are secured in accordance with the Data in Transit Encryption requirement. Protection is ensured through the mandatory use of the Transport Layer Security (TLS) protocol across all network channels. TLS provides confidentiality, integrity, and authentication for data exchanged between system components.

## Real time Security Monitoring (RTSM)

Leonardo Cloud Everywhere is continuously monitored through its embedded real-time security monitoring service, delivered by the Leonardo Global CyberSec Centre.  
The Leonardo SOC operates in Italy and is staffed by over 400 cyber security specialists holding internationally recognized technical and methodological certifications such as CISSP, CISM, and SANS. Leonardo also operates with consolidated processes and procedures that are closely integrated with the main international quality and safety standards, including ISO 9001, ISO 27001, and ISO 20000, thus ensuring governance, traceability, and continuous improvement.  

The platform is monitored on a 24/7/365 basis and the service continuously observes, collects, and analyzes security-relevant events across networks, systems, cloud environments, enabling the timely detection of cyber threats and anomalous behavior.  
The service is based on advanced Security Information and Event Management (SIEM) platforms which, through sophisticated indexing and correlation mechanisms, provide continuous capabilities for identifying malicious and/or suspicious events. This is further enhanced by the ongoing monitoring performed by the Center’s security analysts, enabling the timely activation of appropriate threat management and response processes.  

The service is also supported by a Managed Detection and Response (MDR) capability, covering the full lifecycle from advanced threat detection through to operational response. The MDR continuously analyzes and validates alerts to reduce false positives, conducts in-depth threat investigations, assesses the potential impact, and promptly activates containment actions such as isolating compromised systems.  

The service improves cyber situational awareness by enabling rapid identification of security compromises at the earliest stage. It helps minimize the impact of incidents through faster and more informed response actions, while ensuring continuous monitoring of endpoint events and activities through advanced analytical capabilities

## Threat Intelligence

To ensure proactive protection of the LCE platform, the Leonardo Global Cybersecurity Center (GCC) provides a proactive threat intelligence service, specifically designed to promptly identify emerging threats and reduce overall risk exposure. The service is built on a high-performance architecture that combines infrastructure, advanced technologies, and specialized expertise. 

From an infrastructural perspective, the Threat Intelligence is supported by High Performance Computing systems equipped with CPU and GPU resources optimized for parallel and vector processing. These capabilities enable large-scale data collection, real-time processing, and normalization of information gathered from surface web, deep web, and dark web sources. High bandwidth and an overall computing power exceeding 400 TFLOPS support continuous, advanced analytical activities on a global scale.

From a technological standpoint, the service leverages Leonardo’s proprietary Cyber Threat Intelligence System (CTIS), which supports the entire threat intelligence lifecycle of the Leonardo Cloud Everiwhere.  
This solution aggregates unstructured data through specialized crawlers and automated connectors, integrating both OSINT sources and commercial intelligence feeds. The collected information is analyzed and correlated within a knowledge base that links threat actors, victims, infrastructures, and operational capabilities. Through syntactic and semantic analysis engines, data is normalized, enriched, and made available to analysts through customizable dashboards, structured reports, and machine-to-machine feeds toward the customer’s main security systems, including SIEM, EDR, and firewalls. The use of open standards such as STIX, MISP, YARA, and SIGMA ensures interoperability and seamless integration with the existing cybersecurity ecosystem.

The human element represents a further distinctive component of the service. Leonardo’s teams include professionals with multidisciplinary expertise spanning technical cybersecurity, operational threat intelligence, geopolitics, socio-economic analysis, and criminology. CTI analysts, malware specialists, data scientists, software engineers, SOC operators, and incident responders work in a coordinated manner to contextualize threats and assess their specific impact on the customer’s perimeter. Internal analysis is further enriched by professional third-party intelligence sources, ensuring a comprehensive and continuously updated view of the threat landscape.

Core activities include Vulnerability Intelligence, focused on the early identification of vulnerabilities affecting the Leonardo Cloud Everywhere, with particular attention to active exploitation and operational risk. Breach Intelligence is instead dedicated to identifying credential leaks, data exposures, and sensitive information disclosure, as well as monitoring hacktivism campaigns and ransomware operations targeting the customer or its supply chain. The continuous integration of technology, human analysis, and automation enables the delivery of a targeted, timely threat intelligence service fully aligned with the protection needs of the LCE platform.

## Computer Security Incident Response Team Services (CSIRT)

Within the Leonardo Cloud Everywhere ecosystem, CSIRT services are designed to identify and analyze advanced cyber threats capable of bypassing traditional automated defense mechanisms. Through in-depth investigation of root causes, attacker behaviors, digital artifacts, and compromised assets across the monitored infrastructure, the CSIRT supports the full incident management lifecycle. The service ensures a rapid and effective response to security incidents, with the objective of minimizing both operational disruption and economic impact through the definition and execution of the most appropriate incident response strategy. 

The service integrates advanced Incident Response capabilities that combine specialized expertise in incident handling and forensic investigation to provide technical analysis and operational guidance during cyber attacks or breaches. Malware Analysis activities enable the acquisition and classification of suspicious files through hash verification, comparison with known malware families, and behavioral analysis aimed at identifying indicators of compromise and defining appropriate containment measures. Threat Hunting activities are performed proactively to detect, isolate, and neutralize advanced threats that may evade traditional security controls before they can cause tangible damage to the LCE environment. Compromise Assessment capabilities provide a continuous view of the security posture by identifying potential threats and active malicious behaviors through the use of Endpoint Detection and Response technologies.

The CSIRT service for LCE enables the identification of indicators of compromise and the related containment actions, supports the isolation of affected systems while preserving forensic evidence, provides specialized assistance for system remediation and restoration, and delivers actionable guidance to mitigate and prevent future security incidents.

## Vulnerability Assessment and Penetration Testing

Leonardo Cloud Everywhere is regularly subjected to Vulnerability Assessment (VA) and Penetration Testing (PT) activities. The VA service supports the identification of security vulnerabilities within systems and the definition of appropriate remediation plans, with patching actions prioritized according to the criticality of the identified issues. Penetration Testing is conducted through controlled intrusion attempts against applications and infrastructures, simulating realistic attack scenarios by exploiting known vulnerabilities. These activities, performed using both automated tools and manual techniques, are intended to assess the actual exposure of the LCE environment to cyber threats and to verify the effectiveness of the security measures in place.

## Perimeter Security Management

Leonardo Cloud Everywhere is supported by a dedicated team of cybersecurity specialists responsible for the routine and extraordinary management of perimeter security platforms, including Firewalls, Next Generation Firewalls, Web Application Firewalls, Network Security Groups, and Application Gateways. The service is centered on the governance of configuration and change management, as well as problem and incident management processes, delivered according to high standards of quality and security in alignment with ITIL best practices and the recommendations of ISO/IEC 20000.

## Certification Authority

The Certification Authority (CA) provides centralized services for issuing, managing, and revoking digital certificates used for system authentication and encrypted data exchange over public or private endpoints.

### Services covered

The CA can issue certificates for:

**Internal IT Infrastructure**

- Servers, virtual machines, and application services.
- Administrative portals and management interfaces.
- Endpoints requiring TLS/SSL or certificate-based authentication.

**Security Components**

Data security, network security, and endpoint protection systems.
- Identity and access management solutions.
- Monitoring, logging, and incident response services.

**Services Exposed via Secure Protocols**

- Web servers and APIs.
- Services requiring mutual TLS (mTLS).
- Devices and appliances supporting X.509 certificates.

### Integration with Services

The CA integrates with infrastructure services through:

**AD/LDAP Integration (Enterprise CA)**

- Certificate Templates.
- Auto-enrollment for automated certificate issuance and renewal.
- Centralized policy and lifecycle management.

**Standard Communication Protocols**

- RPC (TCP/135), SMB (TCP/445/139), dynamic TCP ports (1024–65535).
- Native support for operating system enrollment mechanisms.

**Hardware Security Module (HSM) Key Protection**

- Secure storage of CA private keys.
- Replication of HSM partitions for high availability and continuity.
- Support for Root CA and SubCA certificate renewal processes.

**CRL Publication**

- Dedicated web servers publishing CRLs over HTTP.
- Redundancy and load balancing for high CRL availability.

**Logging and Monitoring**

- Forwarding of security and audit logs to SIEM platforms via secure channels.
- Full traceability of issuance, renewal, and revocation operations.

**Secure Administrative Management**

- Privileged Access Workstations (PAWs) with RSAT tools.
- Integration with Privileged Access Management (PAM) systems to control administrative permissions.