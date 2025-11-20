# Data Centers Description

## General architecture

The Cloud Services described in the relevant categories are hosted within 9 Data Centers distributed throughout Italy and spread across 3 Regions (A, B, and C), each redundant with three highly reliable Availability Zones.

![Data Center Architecture and Interconnection](assets/images/extract/media/DC_design.png)  

The infrastructure configuration is fully redundant thanks to the division of each of the three Regions, whose maximum distance exceeds 400 km.
Each Region is composed of three Availability Zones (AZs), three Data Centers configured for business continuity, separated as the crow flies by tens of kilometers.

Specifically, the following table shows the DC association for each region:

| Region   | List of Data Centers |
| -------- | ----------- |
| Region A | [DC MI 1 Bergamo](#MI1)       |
| Region A | [DC MI 2 Basiglio](#MI2)       |
| Region A | [DC MI 3 Siziano](#MI3)
| Region B | [DC GE 1 Fiumara](#GE1)       |
| Region B | [DC GE 2 Puccini](#GE2)       |
| Region B | [DC GE 3](#GE3)       |
| Region C | [DC RM 1 Rome](#RM1)        |
| Region C | [DC RM 2 Acilia](#RM2)        |
| Region C | [DC RM 3 Pomezia](#RM3)       |
<figcaption>Nomenclature of DCs for each Region</figcaption>

Below are the distances between each Region and between the DCs of each Region.

- Region A - Region B: distance more than 200 km
- Region A - Region C: distance more than 400 km
- Region B - Region C: distance more than 500 km

- DC MI 1 Bergamo - DC MI 2 Basiglio: approximate distance 53 km
- DC MI 1 Bergamo - DC MI 3 Siziano: approximate distance 54 km
- DC MI 2 Basiglio - DC MI 3 Siziano: approximate distance 10 km

- DC GE 1 Fiumara - DC GE 2 Puccini: approximate distance 10 Km
- DC GE 1 Fiumara - DC GE 3: approximate distance 15 Km
- DC GE 2 Puccini - DC GE 3: approximate distance 15 Km

- DC RM 1 Rome - DC RM 2 Acilia: approximate distance 30 km
- DC RM 1 Rome - DC RM 3 Pomezia: approximate distance 30 km
- DC RM 2 Acilia - DC RM 3 Pomezia: approximate distance 15 km

All data centers are equipped with all the technical and technological infrastructure necessary to ensure the highest quality standards in terms of reliability, availability, and physical security.

The three Availability Zones are interconnected via a dedicated regional backbone, which guarantees complete redundancy, negligible latency, and priority connectivity, logically characterizing the Regions as a single virtual Data Center (Software Defined Data Center).

The Regions are also interconnected via dedicated and reserved interregional backbones with IP/MPLS network transmission, enabling a flexible, software-defined logical network architecture, ensuring the mobility of application loads and the inherent high reliability of Cloud solutions.
Within an Availability Zone, workloads are transparently distributed, and the HA (High Availability) configuration enables infrastructure service continuity (Business Continuity) between the three Data Centers in the same Region.

Thanks to this basic configuration, the Cloud platform will also provide data distribution between the three zones of each Region. This configuration is possible thanks to the distribution of storage space (identified with the best Storage Array technologies available on the IT market) within the three AZs and, therefore, thanks to the continuous replication of data for the service chosen by each individual organization. Therefore, if an individual organization decides to leverage the full redundancy of its infrastructure (physical or virtual), it can leverage the Cloud platform's HA configuration and create DR/BC solutions.  

The unique nature of the Cloud platform, thanks to the backbone interconnecting the three AZs that make up each Region, will enable synchronous and asynchronous data replication between the Storage Array systems that make up the Storage Tier. In this operational context, the individual organization will benefit from the Cloud platform's inherent ability to reactivate workloads within one of the three AZs or in a different Region. Restarting workloads protected by the activated DR/BC solution will therefore allow the individual organization to independently manage the restart of each application, based on its own DR or BC plans.

## Network description

The network is structured around three main components: Data Center Interconnection, Wide Area Network, and Local Area Network.

### Data Center Interconnection (DCI)

Interconnection between the Data Centers relies on a high-capacity transport infrastructure built to ensure minimal latency, fault tolerance, and uninterrupted service.  
Key elements include:

- IP/MPLS backbone, fully redundant and optimized for reliable, resilient routing.
- DWDM (Dense Wavelength Division Multiplexing) technology supporting high-capacity optical transmission with very low latency.
- VLAN-based segmentation, ensuring logical isolation of traffic domains and multi-tenant environments for different Organizations.
- Traffic management policies to regulate routing, priorities, and bandwidth allocation.  

The DCI enables operation in a multi-region configuration with three Availability Zones, essential for high availability, synchronous/asynchronous replication, and business continuity.

### Wide Area Network (WAN) 

The WAN provides secure, high-performance connectivity to external networks, supporting access to the services.  
It includes:

- Shared Internet connectivity, offering controlled access to the services.
- Traffic profiling tools for bandwidth management, flow optimization, and congestion prevention.
- IDS and APM systems, ensuring threat detection and performance monitoring.
- Additional services, such as:

    - Dedicated line aggregation.
    - VPN connectivity.
    - Special-purpose links for data migration.
    - Hosting of termination routers directly within the facilities.

The WAN ensures each Organization has isolated, secure channels for interacting with the infrastructure while maintaining high security and reliability.

### Local Area Network (LAN) 

The LAN infrastructure within each data center adopts a modular and redundant design with two possible configurations:

- Shared network devices used and distributed across one or more DCs.
- Dedicated devices, also deployable in single-site or dual-site mode.

The LAN is designed to ensure:

- High availability
- Strong segmentation of customer environments
- Horizontal scalability

It forms the communication backbone between processing, storage, cloud platforms, and security services within the service delivery environment.

## Data Centers characteristics and technical specification

This section lists the general characteristics and technical specifications of the Data Center.

### General requirements and site criteria

The architecture is designed to meet high standards for security, resilience, and sustainability, aligned with TIER III certifications and current regulatory requirements.  
The Data Centers are selected and designed to reduce environmental and external risks:

- Located in seismic zones classified as zone ≥3.
- Sited away from coasts, major rivers, and heavily trafficked areas.
- Positioned near metropolitan zones while maintaining low risk.
- Equipped with independent power feeds, not derived from the same medium/high-voltage substation.

Compliance with key regulations is ensured.

### Technical specifications

This section lists the technical specifications for each Data Center.

#### The Region A Data Centers 

<a id="MI1"></a>

##### DC MI 1 Bergamo

**General specifications**

- Total surface area: 17.600 m2 
- Data hall surface area: 8.050 m2  
- Number of independent data rooms: 10
- Secure location in terms of earthquakes
- Secure location in terms of hydro-geological risks

**Building** 

- Height of the data hall: 3,5 m 
- Height of upper plenum: 2,5 m 
- Height of lower plenum: 2 m 
- Load capacity of the floating floor : 2.000kg/m²(distributed load) 1.000 kg/m² (concentrated load in one place) 
- External firewalls: REI 240 
- Internal firewalls: REI 120

    - Double insulation with defrost system 
    - Double loading bay

**Certifications and compliance** 

- ANSI/TIA 942-B-2017 Rating 4 (formerly Tier 4)
- GO - Guarantee of Energy Origin
- Code of Conduct for Data Center Energy Efficiency 
- ISO 9001 - Quality of services offered 
- ISO 14001 - Environmental management system
- ISO 22237 - Data centre facilities and infrastructure
- ISO 27001 - IT security 
- ISO 50001 - Energy management system
- ISO/IEC 27017 – Cloud security controls
- ISO/IEC 27018 – Managing personal data on the Cloud
- ISO/IEC 27035 – Managing security incidents and events

**Connectivity** 

- Point of entrance: 4 
- Entrance Room: 2 
- Main Distribution Area (MDA): 2

    - Carrier neutral data center
    - Provision of managed connectivity
    - Dual transmission system to Milan Internet eXchange (MIX)

**Energy** 

- Connection points to utilities: 2 
- Total power: 12 MW IT 2N (redundant) 
- UPS redundancy: 2N+1 
- UPS type: double conversion static 
- Individual UPS power: 500kVA 
- UPS run time: 15 minutes at full power on single module in emergency conditions - 40 minutes in standard conditions 
- Generator redundancy: 2N 
- Generator type: diesel generator units 
- Full load run time: 26h in emergency conditions, 52h in standard conditions

**Cooling** 

- Cooling type: Chilled water - - water to water - water to air system 
- Normal mode: Ground water cooling system 
- Redundancy of heat exchangers: 2N 
- Groundwater extraction wells: 5 
- Emergency mode: air/water chiller 
- CRAH redundancy: 2N

**Security** 

- CCTV
- 24/7/365 security
- Separate parking for employees/visitors
- Vehicle bollards
- Separate entrance gates for visitors/goods
- Mantrap for visitors and goods with anti-tailgating and antipiggybacking systems
- Network Operations Center (NOC)
- Security Operations Center (SOC)
- Facility Operations Center (FOC)
- Building Management System (BMS)

**Fire prevention system** 

- Air replacement: 2vol/h 
- Extinguishing system: inert gas 
- Extinguishing gas: IG-541 
- Redundancy of extinguishing cylinders: 2N
- Highly sensitive smoke detection system
- Liquid loss detection system
- Fire detection and extinguishing system in each single module
- Standalone system on every generator unit

<a id="MI2"></a>

##### DC MI 2 Basiglio

**General specifications**

- Colocation Space: 2.380 m². 
- Global uptime average of >99,999%
- Energy: covered by 100% renewable energy

**Building** 

- Building type: 4-floor concrete structure
- Floor type: Raised floor
- Floor load capacity: 1.500 kg/m² 
- Parking: Adjacent to building (free)
- Seismic design: low seismic category. 
- Flood zone: not applicable

**Certifications and compliance** 

ISO Standards:
- ISO 9001
- ISO 22301
- ISO 27001
- ISO 45001
- ISO 14001
- ISO 50001

Other Certifications:
- Cyber Essentials
- PCI DSS
- SOC 1 Type II
- SOC 2 Type II
- EU Code of Conduct

**Connectivity** 

- Access to 30+ carriers across the Milan metro ecosystem 
- Direct peering through Equinix Internet Exchange™. 
- Direct connectivity via Equinix Fabric® to distributed digital infrastructure
- Access to MIX, TOP-IX and other interconnections at Via Caldera, Milan

**Energy** 

- Utility feeders: 1 × 3 MVA electrical feed
- PS configuration: N+N
- UPS redundancy: N+1
- Standby power configuration:

    - 2 × 1,900 kVA diesel generators (mechanical load)
    - 4 × 1,400 kVA diesel generators (IT load)

- Standby power redundancy: N+N. 
- Power density: 1.0–7.0 kVA per cabinet

**Cooling** 

- Cooling configuration: Chilled water system
- Cooling redundancy: N+1

**Security** 

Physical Security:

- Mantrap entry
- Proximity access card + PIN

Human Security:

- 24/7 on-site security officers

Electronic Security:

- PIN and card readers
- Optional biometric readers for customer cages
- CCTV with 7-day video retention
- Motion detection

**Fire prevention system** 

Detection:

- VESDA
- HSSD (High Sensitivity Smoke Detection)
- Visual and audio alarms
- Double-knock activation

Suppression agents:

- Novec
- FM200
- Argon

<a id="MI3"></a>

##### DC MI 3 Siziano

**General specifications**

- The campus in Siziano (PV) hosts all hosting and cloud infrastructure used by CoreTech
- Designed according to Tier IV multi-tenant data center standards offering unmatched connectivity
- Located within a 100.000 m² campus, hosting Italy’s largest and most advanced data center
- Building footprint is 42.000 m²
- Designed for 100% Power & Cooling guaranteed uptime
- Highly focused on energy efficiency, using advanced cooling and climatization technologies.

**Building** 

- Constructed according to NTC anti-seismic regulations (D.M. 14/01/2008)
- Double roof resistant to winds up to 280 km/h
- Intumescent-coated metal structure for fire resistance
- Perimeter walls of the technical area built to REI120 standards 
- Flood-mitigation measures:

    - 3 m-high perimeter wall, waterproofed up to 1,5 m
    - Building elevation +1 m above primary urban level
    - Rain-water balance basin for extreme weather events
- No water pipes inside the DC (air-based cooling)

- Infrastructure benefits from 218 patented technologies (granted or pending)

**Certifications and compliance** 

- ISO 9001:2015 – Quality Management
- ISO 14001:2015 – Environmental Management
- OHSAS 18001 – Health & Safety Management
- ISO 27001:2013 – Information Security Management
- ISO 50001:2011 – Energy Management
- ANSI/TIA-942-B:2017 – Rating 4 (Tier IV)

**Connectivity** 

- 100 fiber pairs with diversified routes in multi-carrier configuration provide connectivity to each data hall
- All structured cabling (fiber, copper, electrical) runs through dedicated overhead trays

**Energy** 

- Campus powered by a redundant 132 kV high-voltage line, supporting up to 40 MW at full capacity 
- Tri-redundant UPS system ensuring 100% availability
- Electrical system engineered for Tier IV “system + system” (2N+1) requirements

    - Two completely independent electrical systems
    - Each capable of supporting the full facility load
    - Includes independent UPS, Bypass Modules, PDUs, RPPs

- Racks receive dual power feeds (Feed A + Feed B), each from separate electrical systems.

**Cooling** 

- Cooling system based on modular AHUs (Air Handling Units)
- Utilizes indirect evaporative cooling, with air-to-air heat exchangers cooled by external water systems
- Designed to achieve PUE < 1.4 (estimated)
- Steel infrastructure under the T-SCIF serves as a thermal flywheel to increase resilience

**Security** 

Physical Security:

- Multilevel badge + numeric code access control
- 24/7/365 security personnel and anti-intrusion systems. 
- CCTV video surveillance with digital archiving (privacy-compliant)

Data Hall Security:

- 4 data halls (expandable to 6), up to 1,056 racks per hall 
- Racks organized into T-SCIF islands (Thermal Separate Compartment in Facility)

    - Complete separation of hot and cold airflows
    - Cage-protected
    - Maximizes density and thermal efficien

**Fire prevention system** 

- Intumescent paint on metal structures
- REI120 fire-resistant perimeter walls around technical areas 
- Part of the electrical and environmental risk-mitigation strategy includes fire-resistant compartmentalization

#### The Region B Data Centers 

<a id="GE1"></a>

##### DC GE 1 Fiumara

**General specifications**

**Building** 

**Certifications and compliance** 

**Connectivity** 

**Energy**

**Cooling** 

**Security** 

**Fire prevention system** 

<a id="GE2"></a>

##### DC GE 2 Puccini

**General specifications**

**Building** 

**Certifications and compliance** 

**Connectivity** 

**Energy**

**Cooling** 

**Security** 

**Fire prevention system** **

<a id="GE3"></a>

##### DC GE 3 

**General specifications**

**Building** 

**Certifications and compliance** 

- Multiple ISO certifications, including: ISO 9001, ISO 14001, ISO 45001, and ISO 27001

**Connectivity** 

- Submarine cables: the facility supports or plans to support multiple undersea cable systems, including BlueMed, Blue & Raman, and Unitirreno.
- Backbone integration: The site is part of Sparkle’s Tier-1 Seabone backbone, offering IP transit and interconnection.
- Interconnection / IX: The landing hub provides access to local IX ecosystems and supports peering; it is aligned with the local Ge-DIX Internet Exchange.

**Energy**

**Cooling** 

**Security**

- Digital security: Sparkle’s corporate commitment includes security management aligned with ISO 27001.
- Services offered (security layer): the site supports DDoS protection and virtual NAP capabilities.

**Fire prevention system** 

#### The Region C Data Centers 

<a id="RM1"></a>

##### DC RM 1 Rome

**General specifications**

- Total surface area: 10.730 m² 
- Data hall surface area: 3.120 m² 
- Number of independent data rooms: 6 
- Floors on which the server rooms are distributed: 3
- Secure location in terms of earthquakes
- Secure location in terms of hydro-geological risks

**Building** 

- Height of the data hall: 3,5 m 
- Height of upper plenum: 1,4 m 
- Height of lower plenum:  1,95 m 
- Load capacity of the floating floor: 2.000 kg/m² (distributed load) - 1.000 kg/m² (concentrated load in one place) 
- External firewalls:  REI 240 
- Internal firewalls: REI 120
- Double insulation with defrost system
- Double loading bay

**Certifications and compliance** 

- ANSI/TIA 942-C-2024 Rating 4 (formerly Tier 4)
- ISO 9001 - Quality of services offered
- ISO 14001 - Environmental management system 
- ISO 22237 - Data Center Lifecycle Management
- ISO 27001 - IT security 
- ISO 45001- Workplace health and safety management system
- ISO 22301 - Business Continuity management system
- ISO 20000-1 - IT services management

**Connectivity** 

- Point of entrance: 6 
- Entrance Room: 2 
- Main Distribution Area (MDA): 2 

    - Carrier neutral data center
    - Provision of managed connectivity

**Energy** 

- Total power: 6 MW IT 2N (redundant) 
- UPS redundancy: 2N+1 
- UPS type: double conversion static 
- Individual UPS power: 500 kVA 
- UPS run time: 15 minutes at full power on single module in emergency conditions - 30 minutes in standard conditions 
- Generator redundancy: 2N 
- Generator type: diesel generator units  
- Full load run time: 24h in emergency conditions,  48h in standard conditions, refill within 12h

**Cooling** 

- Cooling type: Chilled water  - water to air system 
- Normal mode: air/water chiller to indirect free cooling 
- Chiller redundancy: 2N 
- CRAH redundancy: 2N

**Security** 

- CCTV
- 24/7/365 security
- Separate parking for employees/visitors
- Vehicle bollards
- Separate entrance gates for visitors/goods
- Mantrap for visitors and goods with anti-tailgating
- Network Operations Center (NOC) 24/7/365
- Security Operations Center (SOC) 24/7/365
- Facility Operations Center (FOC) 24/7/365
- Building Management System (BMS)

**Fire prevention system** 

- Air exchange: 2vol/h 
- Extinguishing system: inert gas  Extinguishing gas: IG-541 
- Redundancy of extinguishing cylinders: 2N 

    - Highly sensitive smoke detection system
    - Underfloor liquid loss detection system
    - Fire detection and extinguishing system in each single module
    - Standalone system on every generator unit

<a id="RM2"></a>

##### DC RM 2 Acilia

**General specifications**

- Total surface area: 8.000 m²
- Powered by two separate medium-voltage lines, each coming from distinct ACEA substations, ensuring electrical redundance

**Certifications and compliance** 

- Certified at Tier IV level, the highest standard for redundancy and uptime
- It holds ANSI/TIA-942 Rating 4 for facility design
- Management and operations standards include:

    - ISO 50001 (energy management) 
    - ISO 14001 (environmental management) 
    - ISO 27001 (information security) 
    - ISO 20000-1 (IT service management) and ISO 22301 (business continuity) 
    - ISO 9001 (quality management) 

- The facility adheres to the European Data Center Code of Conduct for energy efficiency.

**Connectivity** 

- It uses dual-ring fiber connectivity via two distinct Points of Entry (POEs), connecting to an optical backbone through POPs both located in Rome. 
- The internal campus distribution ensures physically separate fiber paths between POEs and the meet-me rooms / data halls. 
- The three AZs in Region A are interconnected via DWDM (Dense Wavelength Division Multiplexing) links, at high capacity, with a proprietary backbone for redundancy and low-latency.

**Energy** 

- It is powered with 100% renewable energy, aligning with TIM’s sustainability targets. 
- An onsite photovoltaic installation providing up to 75,000 W (75 kW) capacity. 
- Energy management systems are real-time: the infrastructure monitors electrical and thermal parameters to drive predictive maintenance and efficiency optimizations.

**Cooling** 

- The cooling architecture uses air delivered via raised floor systems, with return air collected in alternating ceiling plenums. 
- It includes free-cooling, using external air when conditions allow, to reduce the energy used by mechanical refrigeration. 
- Geothermal heat exchangers (ground-based dispersers) are used for heat rejection from chillers when needed. 
- A Building Management System (BMS) monitors temperature, humidity, and airflow to optimize when and how cooling is deployed

**Security** 

- External and internal fencing, with anti-climb perimeter protection. 
- Armed security guard presence. 
- Video surveillance (CCTV) throughout the site. 
- Pedestrian access is controlled by security mantraps / turnstiles. 
- Intrusion detection systems (perimeter alarms) and corner / glass protection: the windows are blast-resistant / reinforced. 
- Internal security patrols / rounds. 
- Access to critical system rooms (data halls) is through security airlocks (bussole) and requires badge-based dual authentication. 
- Cybersecurity: the infrastructure is monitored by a Security Operation Center (SOC), providing continuous threat detection. 
- The facility complies with the PSN’s Technical Security Measures (MTMS), which define guidelines for logical segmentation, risk management, and protection

**Fire prevention system** 

- The Data Center is equipped with Very Early Smoke Detection Apparatus (VESDA) or similarly sensitive smoke detection systems to detect fire in its early stages
- The fire suppression uses 3M Novec 1230 as the extinguishing agent: it's electrically non-conductive, volume-expanding, and designed to absorb heat to inhibit the combustion reaction. 
- The fire suppression system has redundancy to provide 2N (fully redundant) coverage and ensure reliability in case of activation

<a id="RM3"></a>

##### DC RM 3 Pomezia

**General specifications**

- The campus comprises a total area of ~51.000 m², with 13 system-rooms and 6 telecom rooms

**Building** 

- The PISP building within Pomezia is elevated and built with a 0.9 m raised floor, offering enhanced protection in case of flooding
- Power is provided via two separate 20 kV medium-voltage lines from an ACEA substation, giving high reliability and redundancy
- The primary electrical distribution is designed with redundancy: primary distribution uses an N+1 logic, while secondary distribution is a+b (or N+1) with dual radial path

**Certifications and compliance** 

- The data center meets Uptime Institute Tier III standard
- It has ANSI/TIA-942 Rating 3 certification for facility design
- The system is compliant with multiple ISO standards: ISO 50001 (energy management), ISO 14001 (environmental management), ISO 9001 (quality), ISO 27001 (information security), ISO 22301 (business continuity)

**Connectivity** 

- Connected via a dual-fiber ring: two independent paths link it to main ISP'score network via the POPs both located in Rome
- The internal campus network ensures physically separate fiber routes between Points of Entry (POEs), meet-me rooms, and system rooms for redundancy

**Energy** 

- The electrical supply uses redundant medium-voltage (20 kV) lines, ensuring high availability
- It uses two diesel generators plus two DRUPS (UPS + generator combo) for backup power
- Fuel storage: there are two 15,000-litre double-walled diesel tanks with leak detection, strictly for emergency use
- It aims for sustainability: adhere to green energy standards.

**Cooling** 

- The cooling system is built with dual-loop refrigerant circulation (two independent loops) to remove heat efficiently across the campus
- On the rooftop, there are redundant chillers (N+1), ensuring that if one fails, thermal rejection can continue without service interruption
- Inside the system rooms, there are approximately 120 air-conditioning units to manage local heat load

**Security** 

- Physical security is multilayered: perimeter protection, intrusion detection, surveillance, and access control
- Access to sensitive rooms is controlled through security airlocks (“mantraps”) and requires badge-based authentication
- Cybersecurity is managed through a Security Operation Center (SOC), with continuous monitoring, threat detection, and incident response

**Fire prevention system** 

- The security manual (MTMS) mandates very early smoke detection systems to detect fire risk promptly
- Fire suppression likely uses inert, clean agents suitable for data centers, to avoid damaging sensitive IT gear
- The fire protection architecture is designed with redundancy, according to high-availability and resilience standards
