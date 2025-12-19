# Security

## Security Governance for Leonardo Cloud Everywhere 

The security of the Leonardo Cloud Everywhere network infrastructure and cloud services is managed by Leonardo’s **Global Cybersecurity Center (GCC)**, which serves as the central entity for cybersecurity governance and coordination.

The GCC has been operating for more than twenty years and operates through dedicated European-based facilities, including Italy (Chieti, Genoa) and Belgium, ensuring continuity, resilience, and **full alignment with European regulatory and jurisdictional requirements**.

The GCC delivers real-time security monitoring and provides end-to-end security for Leonardo Cloud Everywhere covering the NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover).
These services are delivered within a certified management framework compliant with internationally recognized standards, including **ISO/IEC 27001, ISO/IEC 27002, ISO/IEC 27017, ISO/IEC 27018, ISO 22301, and ISO 9001**, and in accordance with **GDPR requirements** for the protection of personal data.

All the security services are delivered through the **GCC Platform**, natively designed around **Zero Trust principles** and **multi-agent artificial intelligence**.

Through this platform, security events and telemetry collected from LCE environments are centralized, correlated, and continuously analyzed, enabling a unified and measurable view of the security posture and significantly enhancing cyber observability and incident response capabilities.

All activities are performed by Italian qualified **personnel operating under European Union jurisdiction**, ensuring that security monitoring, analysis, and decision-making functions remain under full European control.

Furthermore, Leonardo’s **Computer Security Incident Response Team (CSIRT)** is responsible for handling cybersecurity incidents through defined processes, dedicated tools, and specialized Italian staff.  
The CSIRT performs proactive activities such as threat analysis, vulnerability assessment, and the identification of anomalous behavior, supporting the continuous improvement of the security posture.
In the event of a security incident, the CSIRT coordinates response activities, defining appropriate containment and mitigation actions and supporting timely service recovery to ensure operational continuity.

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