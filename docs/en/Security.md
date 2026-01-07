# Cyber Security Overview of Leonardo Cloud Everywhere

The security of the Leonardo Cloud Everywhere (LCE) network infrastructure and cloud services is managed by Leonardo’s **Global Cybersecurity Center (GCC)**, which serves as the central cybersecurity services provider.

The GCC has been operating for more than twenty years and operates through dedicated European-based facilities, including Italy (Chieti) and Belgium, ensuring continuity, resilience, and **full alignment with European regulatory and jurisdictional requirements**.

The GCC provides end-to-end security for Leonardo Cloud Everywhere covering the NIST Cybersecurity Framework (Govern, Identify, Protect, Detect, Respond, Recover). These services are delivered within a certified management framework compliant with internationally recognized standards, including **ISO/IEC 27001, ISO/IEC 27002, ISO/IEC 27017, ISO/IEC 27018, ISO 22301, ISO 9001** and in accordance with **AICPA SOC 2® framework** and **GDPR requirements** for the protection of personal data.

All security services of the LCE infrastructure are delivered through the **GCC Platform**, which is natively designed **around Zero Trust principles** and **multi-agent artificial intelligence** to ensure **Cyber Mission Assurance**. The GCC Platform is conceptually grounded in the **NIST Cybersecurity Framework (CSF) 2.0** and the **MITRE ATT&CK framework** and implements dedicated cybersecurity capabilities through its agents.

[![](assets/images/extract/media/security_1.png)](assets/images/extract/media/security_1.png)

The platform consolidates Leonardo’s proprietary solutions and third-party technologies into a federated ecosystem that ensures interoperability. 

Its building blocks are **Smart View** (intelligent interfaces that centralize governance of the cyber domain and provide real-time monitoring of the LCE’s cybersecurity posture), **AI Multi Agentic System** (specialized agents operating across the different NIST functions), **Use Cases** (operational use cases that provide intelligent integration and automation of data, processes, and technologies) and **Cyber Platforming** (the seamless integration of both Leonardo proprietary products and trusted third-party solutions).

Through this platform, security events and telemetry related exclusively to the **LCE infrastructure** are centralized, correlated, and analysed, providing a unified and measurable view of the platform security posture and significantly enhancing **cyber observability** and **incident response capabilities at infrastructure level**.

[![](assets/images/extract/media/security_2.png)](assets/images/extract/media/security_2.png)

All activities are performed by **Italian qualified personnel** operating **under European Union jurisdiction**, ensuring that security monitoring, analysis, and decision-making functions for the LCE infrastructure remain under full European control.

Leonardo’s **Computer Security Incident Response Team (CSIRT)** is responsible for handling cybersecurity incidents affecting the LCE infrastructure, through defined processes, dedicated tools, and specialized Italian staff.

For the **LCE infrastructure**, the CSIRT carries out proactive activities such as threat analysis, vulnerability assessment, and anomaly detection, supporting the continuous improvement of the platform’s security posture. In the event of a security incident impacting LCE, the **CSIRT coordinates containment and mitigation actions** and supports timely service recovery **to ensure operational continuity**.

## Encryption management

The Data at Rest Encryption requirement—i.e., ensuring the confidentiality of data stored on the infrastructure’s disks through encryption—is fulfilled by integrating the storage solutions, for both block storage and object storage, with a centralized Key Management System (KMS).  

Specifically, for block storage, the confidentiality of data within Persistent Volumes (PV) created on the Kubernetes cluster infrastructure is ensured through the Ceph storage solution, which supports volume encryption. The enablement and configuration of the integration with the external KMS is performed at the storage class level, using the Key Management Interoperability Protocol (KMIP).  

For object storage, the confidentiality of stored data is guaranteed through the native integration provided by the storage application solution (MinIO) with the KMS. MinIO supports automated SSE-KMS encryption for all objects written to a bucket, using a specific external key (EK) stored in the external KMS. MinIO encrypts stored data using a unique key retrieved from the KMS. The KMS is responsible for storing and managing the master key used to protect the data-encryption key utilized by the MinIO system.  

All data-transmission communications are secured in accordance with the Data in Transit Encryption requirement. Protection is ensured through the mandatory use of the Transport Layer Security (TLS) protocol across all network channels. TLS provides confidentiality, integrity, and authentication for data exchanged between system components.

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