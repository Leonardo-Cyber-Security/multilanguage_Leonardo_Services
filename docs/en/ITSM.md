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

The customer starts a request via email to the support address listed here: <a href="mailto:lce.support@leonardo.com?subject=Request support%20for%20....&body=Insert%20your%20specific%20requests%20following%20the%20instrucions%20">Send an email</a>

### Ticket Management Process

```text
Customer submits request
            │
            ▼
Ticket Intake
- Request logged in the ticketing system
- Unique ticket ID assigned
- Initial information verification
            │
            ▼
Classification & Prioritization
- Ticket categorization
  (Incident, Request, Access, etc.)
- Priority assessment based on:
  • Impact
  • Urgency
  • Service criticality
            │
            ▼
Assignment
- Routing to the appropriate resolver group
- Assignment based on:
  • Technical expertise
  • Workload distribution
  • Escalation rules
  • Operational availability
            │
            ▼
Investigation & Resolution
- Diagnostics and root-cause analysis
- Corrective actions or request fulfillment
- Fix deployment and vendor coordination
- Progress tracked in the ticketing system
            │
            ▼
Customer Communication
- Acknowledgement of receipt
- Status updates
- Information requests
- Resolution notification
            │
            ▼
Ticket Closure
- Resolution validated
- Customer informed
- Documentation completed
- Related tickets updated
            │
            ▼
Quality Review & SLA Verification
```
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

| ROLE | RESPONSIBILITIES |
|----------|----------|
| *Platform/Cloud Team* | Responsible for the design, implementation, and operation of the core cloud infrastructure, including networking, platform security baselines, monitoring frameworks, and compliance with organizational technical standards. |
| *Workload/Application Team* | Responsible for the design, deployment, security, and lifecycle management of cloud-hosted applications and workloads, including application configurations, secure development practices, and data protection requirements. |
| *Security & Compliance Team* | Defines and enforces security policies, compliance standards, identity and access management requirements, encryption controls, and risk management activities across cloud environments. |
| *Governance & Risk Management Team* | Maintains the cloud governance framework and shared responsibility model, ensuring alignment with legal, regulatory, and organizational requirements through audits and compliance reviews. |
| *Operations & Incident Response Team* | Provides operational support, monitoring, incident management, remediation activities, and change management processes to ensure service continuity and operational resilience. |

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

The organization adopts a shared management operating model:

- The Platform Team provides standardized and secure environments and security barriers.
- The Workload Teams manage their solutions within these constraints.  
- The Security and Governance Teams define mandatory controls and oversee compliance.


| PROCESS AREA | RESPONSIBILITY MODEL |
|----------|----------|
| *Environment Management* | The Platform Team provides standardized and secure cloud environments, while Workload Teams operate their solutions within the established technical and security boundaries. Security and Governance Teams define mandatory controls and oversee compliance. |
| *Identity & Access Management* | The organization retains responsibility for identity governance, implementing least-privilege principles, RBAC, and secure authentication. Leonardo provides the identity platform, while users, groups, and permissions are managed by the organization. |
| *Data Protection* | Workload Teams are responsible for data classification and the implementation of protection measures, including encryption, retention, and deletion policies. The Platform Team provides the underlying capabilities for encryption, secure storage, and backup. |
| *Monitoring & Security Operations* | Monitoring activities are shared. Leonardo monitors the underlying cloud platform, while the organization monitors workloads, user activities, configuration changes, and potential threats through security tools and logs. |
| *Incident Management* | Responsibility is divided by domain. Infrastructure-related incidents may involve Leonardo, while incidents affecting data, identities, workloads, or configurations remain under the responsibility of the organization. Escalation paths and communication procedures are governed by a coordinated response plan. |
| *Change Management* | All cloud resource changes must follow organizational change control procedures. Platform-level changes require coordination with the Platform Team, while workload-level changes are managed by Application Teams in accordance with Security and Governance policies. |
| *Continuous Improvement* | The governance framework is periodically reviewed to ensure alignment with organizational, regulatory, and operational requirements. Updates may be required when new services are introduced, roles evolve, regulations change, or audits and incidents identify improvement opportunities. |