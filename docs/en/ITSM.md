# IT Service Management (ITSM)

The IT Service Management (ITSM) defines the process of the activities, responsibilities, and controls required to manage customer support requests in a structured, timely, and traceable manner.  
It applies to all types of tickets submitted by customers, including:

- Incidents (service disruptions or malfunctions).
- Service Requests (standard operational requests).
- Access Requests.
- Information Requests.
- Change-related inquiries.
- Other support needs requiring tracking and resolution.

The objective is to ensure consistent quality of service, reduce resolution times, improve resource coordination, and maintain complete traceability of customer interactions  
Each phase includes defined roles, expected outputs, and quality criteria.  
Leonardo's methodology for delivering and supporting its services is inspired by ITIL®.
The ITIL® framework has been used as a reference for delivering and improving services, particularly in the areas of Service Operation and Service Transition.

## Process steps

This section lists the process sequences for customer support requests.

1) **Ticket Intake**  
The customer sends a request via email to the support address listed here: <a href="mailto:lce.support@leonardo.com?subject=Request support%20for%20....&body=Insert%20your%20specific%20requests%20following%20the%20instrucions%20">Send an email</a>

Upon receipt, the Service Desk (or designated support function) performs:

- Logging of the request into the ticketing system.
- Attribution of a unique ticket ID.
- Initial verification of provided information.

All tickets are timestamped and stored for auditability.

2) **Classification and Prioritization**  
The Service Desk categorizes the ticket into one of the predefined classes (Incident, Request, Access, etc.).  
Priority is determined using criteria such as:

- Impact (number of users/services affected).
- Urgency (time sensitivity of the issue).
- Service criticality (business relevance of the affected system).

This ensures coherent treatment of tickets and alignment with Service Level Agreements (SLAs).

3) **Assignment**  
After classification, the ticket is routed to the appropriate resolver group (e.g., Infrastructure, Application Support, Network Operations, Security, Service Delivery).  
Assignment criteria include:

- Required technical expertise.
- Workload distribution.
- Escalation rules.
- Operational hours and on-call availability.

The resolver group assumes ownership of the ticket until resolution.

4) **Investigation and Resolution**  
The assigned team performs root-cause investigation, corrective actions, or fulfillment activities depending on the ticket type.  
Typical activities include:

- System checks and diagnostics.
- Configuration adjustments.
- User guidance or remote assistance.
- Deployment of fixes or patches.
- Coordination with third-party vendors when applicable.

Progress is continuously updated in the ticketing system.

5) **Customer Communication**  
The customer is informed throughout the lifecycle of the ticket, including:

- Acknowledgement of receipt
- Status updates (especially for high-priority issues)
- Request for additional information
- Notification upon resolution

Communication follows predefined templates and response-time commitments.

6) **Ticket Closure**  
A ticket is closed only when:

- The solution has been delivered and validated.
- The customer has been informed.
- Documentation of actions taken is complete.
- Linked tickets (if any) have been updated.

Quality controls ensure closure accuracy and SLA compliance.

## Escalation management

Escalations ensure that prolonged or high-impact issues receive timely attention.  
They include:

- Functional escalation to more specialized teams.
- Hierarchical escalation to management when SLA breaches or major impacts are imminent.
- Vendor escalation for third-party system dependencies.
- Escalation paths and thresholds are predefined within the support framework.

##  Monitoring and quality assurance

Performance of the Ticket Management Process is monitored through KPIs such as:

- Ticket resolution time
- SLA compliance rate
- First Contact Resolution rate
- Backlog volume and aging
- Customer satisfaction feedback

Periodic reviews identify improvement opportunities and ensure adherence to service standards.

##  Roles and responsibilities

This section defines the roles, responsibilities, and operational boundaries for managing cloud services in accordance with a Shared Responsibility Model.  
The goal is to establish a clear framework that enables the secure, compliant, and efficient adoption of cloud services within the organization.  
The principles described here apply to all services offered and described in this documentation.

Cloud security is a joint commitment between Leonardo, as a cloud service provider, and the organization, as a customer.  
Leonardo is responsible for cloud security, including physical infrastructure, network control layers, and platform services.  
The organization is responsible for cloud security, including data protection, identity and access management, workload configuration, and governance.  

The distribution of responsibilities varies depending on the service model. As the organization adopts higher-level services (from IaaS to PaaS), Leonardo assumes a greater share of operational responsibility, while the organization retains responsibility for data, identity, and access governance.

###  Organizational roles

To ensure effective management of shared responsibilities, the following internal roles are established:

*A) Platform/Cloud team*

Dedicated to the design, implementation, and management of the core cloud infrastructure.  
- Implements shared technical controls, including network configurations, platform security baselines, and monitoring frameworks.
- Ennsures that Cloud environments comply with the organization's policies and technical standards.

*B) Workload/Application team*

Owns the design, security, and operation of specific workloads hosted in the cloud.  
- Manages application configurations, secure coding practices, updates, and lifecycle management.
- Ensures appropriate data classification, protection, retention, and deletion practices.

*C) Security and compliance team*

Defines organizational security policies, standards, and regulatory controls.

- Conducts risk assessments and oversees compliance across cloud deployments.
- Implements identity and access management policies, encryption standards, and mandatory security controls.

*D) Governance and risk management*

Maintains the cloud governance framework, including the shared responsibility matrix.

- Ensures that cloud operations remain aligned with legal, regulatory, and organizational requirements.
- Coordinates reviews and audits to validate compliance and role execution.

*E) Operations and incident response team*

Provides monitoring and operational support for cloud environments and deployed workloads.

- Manages incident response procedures, including triage, remediation, and coordination with Microsoft where required.
- Ensures proper execution of change management policies.

###  Responsibility matrix

A responsibility matrix is ​​maintained to explicitly document which responsibilities fall to Leonardo, which to the organization, and which are shared.  

[![Division of responsibilities](assets/images/extract/media/shared_resp.png)](assets/images/extract/media/shared_resp.png)

The matrix includes, but is not limited to, the following domains:

- Data protection and classification
- Identity and access management
- Security monitoring and threat detection
- Network and host security
- Application configuration and secure development
- Backup, restore, and recovery
- Compliance, auditing, and reporting

This matrix is reviewed regularly and updated whenever service models, technologies, or organizational structures change.

###  Operational processes

The organization adopts a shared management operating model.
The Platform Team provides standardized and secure environments and security barriers; the Workload Teams manage their solutions within these constraints.
The Security and Governance Teams define mandatory controls and oversee compliance.

Identity governance remains the organization's responsibility.
The principles of least privilege, role-based access control (RBAC), and secure authentication must be implemented.
Microsoft provides the identity platform, while the organization manages users, groups, and access permissions.

The Workload Teams are responsible for ensuring the correct data classification and implementing the necessary protections, such as encryption, retention controls, and deletion policies.

The Platform Team provides the technical capabilities for encryption, secure storage, and backup.

Monitoring activities are shared:

- Leonardo monitors the security of the underlying cloud platform.
- The organization monitors workload behavior, user activity, configuration changes, and potential threats using security tools and logs.

Incident responsibilities are divided by domain:

- Cloud infrastructure-related incidents may involve Leonardo.
- Incidents involving data, identities, workloads, or configurations fall within the responsibility of internal teams.  
A coordinated response plan ensures that escalation paths, communication channels, and reporting requirements are clearly defined.

All changes to cloud resources must comply with the organization's change control procedures.
Platform-level changes require coordination with the platform team; workload-level changes must be approved by the application teams, while remaining aligned with established Security and Governance policies.

This framework is reviewed on a periodic basis to ensure continued relevance.  
Updates may be required when:

- new cloud services are introduced,
- organizational roles evolve,
- regulatory obligations change, or lessons learned from audits and incidents highlight areas for improvement.

Continuous improvement is essential to maintaining a secure and well-governed cloud environment.