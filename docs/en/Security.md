# Cyber Security Services

This section lists the Cyber Security specifications and services provided by Leonardo Security Operation Centre (SOC).

## Security services for detection

### Real time Security Monitoring (RTSM)

Real time security incident management services provided by Leonardo Security Operation Centre (SOC)   assure real time notifications about security alarms, behaviour anomalies and potential threats, leveraging best of breed detection platforms capabilities and Leonardo SOC analysts’ skills and knowledge base.

**Services’ Deliverable**

- Security alarms real time	notification.
- Periodical reports for misconfigurations and low severity security evidences.
- Tuning process support.
- First	level analysis and support in security incidents.

**Services Included**

- *Real Time Security Monitoring (RTSM)* → delivers continuous monitoring of customer security devices/systems logs in order to quickly identify potentially harmful resources or events. 
- *Managed Endpoint Detection & Response (MDR)* → to provide customers with fast and effective	protection for their endpoints,	leveraging Endpoint Detection and Response cloud-based technologies.

**Benefits**
 
- Increases cyber situational awareness	and	faster identification of compromise	whenit occurs.
- Reduce the impact of security incidents through quicker more informed	response.
- Continuous monitoring	of endpoints’ events and activities	through	advanced analysis.

### Threat Intelligence

The Threat Intelligence Services monitor and analyse large amounts of data, both open source and on the deep and dark web, to identify ongoing cyber-attacks or those being planned.  
The service also identifies cyber threat actors’ activities and information illegally stolen and published on the web.  
The solution also provides a comprehensive overview on brand or event sentiment, and guidance on the prevention of cyber frauds.


**Services’ Deliverable**

- Periodical or	event-based	threat	intelligence reports.
- Tailored Investigation reports on	customer request.

**Services Included**

- *Data breach* → detects any data loss relating to a specific target of information through real-time monitoring of the network, including scanning of the deep and dark Web. 
- *Black market monitoring* → analyses large quantities of information  from open sources, deep and dark Web, in real time, to promptly identify new black markets  and illegal activities on specific  issues of interest. 
- *Pre-planned attack* → allows you to identify and predict possible new cyber-attacks more effectively, through real-time analysis of large quantities of information from open sources and    the deep and darknet. 
- *Identity fraud detection* → detects unauthorised use of a person’s digital  dentity to carry out illegal activities and/or defamatory actions without the knowledge of, and to the detriment of the  individual.
- *Anti-phishing* → manages the detection of ongoing phishing attacks against the customer, the real-time identification of ongoing fra udtowards their brand and the protection of online reputation.

**Benefits**

- Increases cyber situational prevention of company-owned data loss. 
- Sentiment analysis. 
- Black market related illegal activities identification.
- Prevention against new planned cyber-attacks. 
- Protection of VIPs’ and Company online reputation. 
- Customer digital identity protection / identity theft identification. 
- Real time detection of cyber frauds and phishing attacks identification.

## Security services for responding

### Computer Security Incident Response Team Services

The Computer Security Incident Response Team Services (CSIRT) identify and analyse the most advanced cyber threats capable of bypassing traditional automatic defensive measures, through the identification of root cause, attacker behaviour, relevant artefacts, and compromised assets within the monitored infrastructures.  
The CSIRT services deeply analyse and react to security incidents, minimising the operational and economic impacts of the security incident as effectively as possible, through the definition of the most rapid and effective incident response strategy. 

**Services’ Deliverable**

- Artifacts analysis and reports.
- Containment and mitigation activities.
- Incident response reports.
- Remediation and restoration technical support.
- Security evidences and artifacts.
- Compromise assessment report 

**Services Included**

- *Incident Response* → combines specialist capability in incident management and investigation to deliver comprehensive advice and technical analysis in response to any cyber security attack or breach. 
- *Malware Analysis* → acquires and classifies suspected malicious files (samples), provides hash control, comparison with known malware, behaviour analysis in order to identify any indicators of compromise and any containment actions to put in place. 
- *Threat Hunting* → proactively identifies, isolates and neutralises the most advanced cyber threats that are capable of bypassing traditional automatic defensive measures before they can cause real damage to the organization. 
- *Compromise Assessment* → provides the customer with a complete view of the current situation in terms of potential threats or ongoing malicious activities leveraging the capabilities of an Endpoint Detection & Response (EDR) solution.

**Benefits**

- Identification of Indicators of Compromise and any containment actions to put in place.
- Capability to isolate systems while preserving evidences. 
- Specialised support to carry out the remediation and restoration of systems. 
- Indications regarding the actions needed to mitigate future incidents.

## Penetration Testing Offering Policy for Managed Services

This policy defines guidelines, requirements, responsibilities, and constraints for performing penetration testing on environments managed by the provider under the following service models:

- IaaS – Infrastructure as a Service
- PaaS – Platform as a Service
- CaaS – Container as a Service
- Hybrid – on-premise + cloud environments

The objective is to ensure a controlled, safe, and authorized approach to offensive security activities without compromising service availability or violating cloud governance rules.

### General Principles

1. Penetration testing activities must be **pre-authorized** by the provider and conducted in compliance with applicable laws and contractual conditions.  
2. Customers must restrict testing to **resources they fully own or administer**.  
3. Activities must not compromise the stability of the provider’s core services nor affect other customers.  
4. The policy follows the guiding principle: "Test only what you own and only in ways that don’t impact other tenants"

### Penetration Testing Scope

#### IaaS Services

*Allowed:*
- Vulnerability assessments and penetration testing on:  
  - Virtual machines, OS configurations, hosted applications  
  - Virtual network configurations (NSG, firewall, routing)  
  - Storage, databases, and customer-installed components  
- Authentication, authorization, and remote access testing on VMs  

*Not Allowed / Restricted:*

- Real or simulated DoS/DDoS without explicit agreement  
- Stress testing shared IaaS platforms  
- Targeting physical infrastructure, hypervisors, or fabric-level services

#### PaaS Services

*Allowed:*

- Testing applications and data deployed by the customer  
- Security configuration and identity-related tests  
- API, endpoint, permission, and customer-managed storage validation  

*Not Allowed / Restricted:*

- Attacks on the underlying provider-managed PaaS infrastructure  
- Attempts to bypass tenant isolation  
- Tests that may degrade service SLAs

#### CaaS (Container / Kubernetes) Services

*Allowed:*

- Analysis of customer-owned container images  
- Testing workloads, microservices, ingress, API, and application-level RBAC  
- Validation of customer-managed cluster networking  
- Testing secrets, config maps, and identity integrations  

*Not Allowed / Restricted:*

- Container escape attempts targeting physical nodes  
- Attacks on the control plane if provider-managed  
- Testing shared provider-managed components (API server, etc.)

#### Hybrid Services

*Allowed:*

- Testing customer-owned on-prem components connected to the cloud  
- End-to-end testing of hybrid integrations (VPN, DirectConnect, ExpressRoute)  
- Identity, SSO, and cross-domain security validation  

*Not Allowed / Restricted:*

- Saturation or intentional overload of hybrid links  
- Attacks on cloud infrastructure or provider-managed appliances  

### Types of Tests Allowed

*Allowed (with authorization):*

- Black-box, grey-box, and white-box testing  
- Authenticated / unauthenticated vulnerability scanning  
- Application security testing (OWASP Top 10)  
- Lateral movement testing within customer-owned assets  
- Privilege escalation and configuration testing  
- Phishing/social engineering simulations (if contracted)

*Prohibited:*

- Real DoS/DDoS  
- High-volume port scans  
- Attacks on physical infrastructure, hypervisors, or shared services  
- Deployment of active malware in production  
- Attempts to evade billing or resource management controls  

### Request and Approval Process

Customers must submit a request at least **10 business days** in advance, including:
1. Test scope (assets + service model)  
2. Techniques and methodologies  
3. Testing window  
4. Customer security team contacts  
5. Business-related risks  

The provider confirms or denies within 5 business days.

### Responsibilities

#### Customer

- Ensure tested assets are owned/administered  
- Restrict testing to the authorized scope  
- Ensure testing tools do not degrade services  
- Provide test reports if requested  

#### Leonardo

- Validate and authorize the test scope  
- Monitor infrastructure for unexpected impact  
- Guarantee tenant isolation  
- Suspend tests if critical risks arise  
- Provide SOC/NOC contact during the test window  

### Test Suspension Terms

The provider may suspend testing if:

- Unexpected impacts occur  
- The customer exceeds authorized scope  
- Risks emerge for other tenants or infrastructure  

### Reporting

Customers must provide, upon request:

- Executive Summary  
- List of vulnerabilities  
- Methods and tools used  
- Proofs of Concept (PoCs)  
- Remediation recommendations  

## Red Team Exercises

Leonardo provides Red Team exercises on a dedicated infrastructure for each customer.  
These activities are managed by Leonardo's internal SOC.

For any further information, please contact us by opening a support request here: <a href="mailto:lce.support@leonardo.com?subject=Red Team Exercises request%20for%20<Insert your customer name>&body=Insert%20your%20specific%20requests%20">Send an email</a>

## Vulnerability assessments

Leonardo provides Vulnerability assessments on a dedicated infrastructure for each customer, where the methods and type of execution will be defined. 
These activities are managed by Leonardo's internal SOC.

For any further information, please contact us by opening a support request here: <a href="mailto:lce.support@leonardo.com?subject=Vulnerability assessments request%20for%20<Insert your customer name>&body=Insert%20your%20specific%20requests%20">Send an email</a>

## Vulnerability disclosure program and policy

Regarding disclosure of vulnerabilities discovered by Leonardo, its behavior depends on the context in which they occur.  
Specifically:

- If the vulnerabilities found affect its own infrastructure used to provide services, Leonardo will promptly inform the designated Italian Computer Security Incident Response Team (CSIRT).
- If the vulnerabilities found affect customer workloads, Leonardo will provide vulnerability assessments on a dedicated infrastructure for each customer, where the methods and type of execution will be defined.  
For this point, please see the section above regarding the Vulnerability Assessments process.