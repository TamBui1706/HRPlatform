## HR Platform Feature Mindmap

```mermaid
flowchart LR

    %% =========================
    %% CENTER MODULE
    %% =========================
    HR["HR Platform"]

    %% =========================
    %% LEFT MAIN MODULES
    %% =========================
    PLATFORM["Platform Services"]
    COMPLIANCE["Compliance & Security"]
    ANALYTICS["Analytics & BI"]
    PAYROLL["Payroll & Benefits"]
    PROJECTS["Projects & Resources"]

    PLATFORM --- HR
    COMPLIANCE --- HR
    ANALYTICS --- HR
    PAYROLL --- HR
    PROJECTS --- HR

    %% Platform features
    Integration["Integration API"] --- PLATFORM
    Authentication["Authentication & IAM"] --- PLATFORM
    Mobile["Mobile Portal"] --- PLATFORM
    Notifications["Notifications Engine"] --- PLATFORM

    %% Compliance features
    ComplianceFeature["Regulatory Compliance"] --- COMPLIANCE
    Governance["Corporate Governance"] --- COMPLIANCE
    Security["Data Privacy & Security"] --- COMPLIANCE

    %% Analytics features
    Reporting["Reporting Engine"] --- ANALYTICS
    Dashboards["Executive Dashboards"] --- ANALYTICS
    AnalyticsFeature["Predictive Analytics"] --- ANALYTICS

    %% Payroll features
    PayrollFeature["Payroll Engine"] --- PAYROLL
    Benefits["Benefits Admin"] --- PAYROLL
    Compensation["Compensation Matrix"] --- PAYROLL

    %% Projects features
    ProjectManagement["Project Lifecycle"] --- PROJECTS
    ResourceManagement["Resource Capacity"] --- PROJECTS
    FinancialControl["Financial Cost Control"] --- PROJECTS

    %% =========================
    %% RIGHT MAIN MODULES
    %% =========================
    CORE["Core HR"]
    RECRUITMENT["Recruitment"]
    TIME["Time & Attendance"]
    TRACKING["Workforce Tracking"]
    PERFORMANCE["Performance & Growth"]

    HR --- CORE
    HR --- RECRUITMENT
    HR --- TIME
    HR --- TRACKING
    HR --- PERFORMANCE

    %% Core HR features (HIGHLIGHTED CORE MODULE)
    CORE --- Employee["Employee Directory"]
    CORE --- Documents["Document Vault"]
    CORE --- Organization["Org Architecture"]
    CORE --- EmployeeExperience["Talent Engagement"]

    %% Recruitment features
    RECRUITMENT --- Hiring["Recruitment Pipeline"]
    RECRUITMENT --- Communication["Candidate Connect"]
    RECRUITMENT --- Onboarding["Onboarding Hub"]

    %% Time features
    TIME --- Attendance["Attendance Engine"]
    TIME --- TimeManagement["Timesheet Hub"]
    TIME --- Scheduling["Shift Rostering"]
    TIME --- Leave["Absence & Leave"]

    %% Workforce Tracking features (HIGHLIGHTED CORE MODULE)
    TRACKING --- ActivityMonitoring["Activity Telemetry"]
    TRACKING --- ComputerMonitoring["Desktop Audit"]
    TRACKING --- LocationTracking["Geo-Tracking"]
    TRACKING --- FieldOperations["Field Operations"]

    %% Performance features
    PERFORMANCE --- Reviews["360 Reviews"]
    PERFORMANCE --- Goals["Goals & OKRs"]
    PERFORMANCE --- Coaching["1-on-1 Coaching"]
    PERFORMANCE --- Recognition["Rewards & Kudos"]
    PERFORMANCE --- Insights["Talent Analytics"]

    %% =========================
    %% STYLES & VIBRANT PALETTE
    %% =========================
    classDef center fill:#2563eb,stroke:#1d4ed8,stroke-width:3px,color:#ffffff,font-weight:bold;
    
    %% Bold Vibrant Main Module Styles
    classDef platform fill:#0d9488,stroke:#0f766e,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef compliance fill:#059669,stroke:#047857,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef analytics fill:#d97706,stroke:#b45309,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef payroll fill:#dc2626,stroke:#b91c1c,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef projects fill:#7c3aed,stroke:#6d28d9,stroke-width:2px,color:#ffffff,font-weight:bold;

    classDef recruitment fill:#ea580c,stroke:#c2410c,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef time fill:#16a34a,stroke:#15803d,stroke-width:2px,color:#ffffff,font-weight:bold;
    classDef performance fill:#0284c7,stroke:#0369a1,stroke-width:2px,color:#ffffff,font-weight:bold;

    %% DISTINCT HIGHLIGHT STYLE FOR MODIFIED / KEY CORE MODULES (Yellow fill + dashed red border)
    classDef highlight fill:#fef08a,stroke:#dc2626,stroke-width:4px,color:#991b1b,font-weight:bold,stroke-dasharray: 6 6;

    %% Sub-feature Leaf Nodes
    classDef feature fill:#ffffff,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a,font-weight:bold;

    class HR center;

    class PLATFORM platform;
    class COMPLIANCE compliance;
    class ANALYTICS analytics;
    class PAYROLL payroll;
    class PROJECTS projects;

    class CORE highlight;
    class RECRUITMENT recruitment;
    class TIME time;
    class TRACKING highlight;
    class PERFORMANCE performance;

    class Integration,Authentication,Mobile,Notifications feature;
    class ComplianceFeature,Governance,Security feature;
    class Reporting,Dashboards,AnalyticsFeature feature;
    class PayrollFeature,Benefits,Compensation feature;
    class ProjectManagement,ResourceManagement,FinancialControl feature;

    class Employee,Documents,Organization,EmployeeExperience feature;
    class Hiring,Communication,Onboarding feature;
    class Attendance,TimeManagement,Scheduling,Leave feature;
    class ActivityMonitoring,ComputerMonitoring,LocationTracking,FieldOperations feature;
    class Reviews,Goals,Coaching,Recognition,Insights feature;
```

---

## Actor Relationships Diagram

![Actor Relationships Diagram](ActRelation.png)

---

## Swimlane Diagrams


### Core HR

**Description:** End-to-end employee lifecycle workflow covering Profile Registration, Document Verification, IT Account Provisioning, Probationary Assessment, and Offboarding.

![Employee Lifecycle & Profile Management Workflow](swimlane/employee-lifecycle.png)

---

### Workforce Tracking

**Description:** Workforce telemetry workflow covering Workstation Agent Logging, Idle Time Detection, GPS Geofenced Clock-in, Field Service Dispatch, and E-Sign Audit.

![Workstation Activity & Geofenced Field Operations Workflow](swimlane/workforce.png)

---

### Recruitment

**Description:** Talent acquisition workflow covering Job Requisition Approval, Automated CV Parsing, Technical Interview Scorecards, Digital Offer Letters, and Pre-Hire Setup.

![Recruitment Requisition, CV Screening & Hiring Workflow](swimlane/recruitment-hiring.png)

---

### Time & Attendance

**Description:** Time management workflow covering Daily Clock-in/out, Overtime & Leave Requests, Manager Approvals, and Monthly Timesheet Verification.

![Attendance Punching, Timesheet Approval & Leave Request Workflow](swimlane/attendance-leave.png)

---

### Payroll & Benefits

**Description:** Payroll administration workflow covering Timesheet Import, Gross-to-Net Computation, Tax/BHXH Deductions, HR Audit, and Direct Bank Deposit Batch File Generation.

![Monthly Payroll Computation & Direct Deposit Disbursement Workflow](swimlane/payroll.png)

---

### Performance

**Description:** Strategic talent appraisal workflow covering Corporate OKR Cascade, 360-Degree Feedback & Self-Appraisal, Manager 1-on-1 Coaching, Executive Calibration, and Bonus Distribution.

![360 Performance Appraisal & OKR Calibration Workflow](swimlane/performance.png)

---

### Platform

**Description:** Platform security workflow covering User Login Request, SSO Identity Verification, Multi-Factor Authentication (MFA), and Fine-Grained Role Permission Enforcement.

![Single Sign-On (SSO) & Role-Based Access Control (RBAC) Workflow](swimlane/user-access.png)

---

### Compliance

**Description:** Compliance management workflow covering Policy Definition, Mandatory Staff Sign-off, PII Data Masking, Real-time Security Event Detection, and Audit Trail Reporting.

![Corporate Governance & Security Audit Trail Workflow](swimlane/compliance.png)

---

### Analytics

**Description:** Analytics workflow covering Drag-and-Drop Filter Selection, Database Aggregation, Dynamic Chart Rendering, Executive Metric Auditing, and Automated PDF/Excel Delivery.

![Executive Dashboard & Custom BI Report Generation Workflow](swimlane/analyze-report.png)

---

### Projects

**Description:** Project management workflow covering Project Creation, Member Capacity Allocation, Billable Timesheet Logging, Labor Cost Analysis, and Client Invoicing.

![Project Resource Allocation & Labor Cost Tracking Workflow](swimlane/project-management.png)

---


## 60 Detailed Use Case Diagrams (UC01 - UC60)


# Module: Core HR & Employee Management

### UC01: Register New Employee Profile
**Description:** Register a new employee profile with personal particulars, job classification, and emergency contacts.

![UC01: Register New Employee Profile](usecase_images/module_01_core_hr/UC01.png)

---

### UC02: Maintain Employee Personal Directory
**Description:** Access and review personal employee profile information, academic records, and employment history.

![UC02: Maintain Employee Personal Directory](usecase_images/module_01_core_hr/UC02.png)

---

### UC03: Request Profile Data Update
**Description:** Submit updates for residential address, contact number, bank account details, and dependent info.

![UC03: Request Profile Data Update](usecase_images/module_01_core_hr/UC03.png)

---

### UC04: Upload Personnel Contract Document
**Description:** Upload employment contracts, degree certificates, and tax registration documents to document vault.

![UC04: Upload Personnel Contract Document](usecase_images/module_01_core_hr/UC04.png)

---

### UC05: Access Confidential Document Vault
**Description:** Inspect, verify, and retrieve archived employment agreements and legal records.

![UC05: Access Confidential Document Vault](usecase_images/module_01_core_hr/UC05.png)

---

### UC06: Configure Organizational Department Structure
**Description:** Establish new business units, department branches, and parent-child organizational trees.

![UC06: Configure Organizational Department Structure](usecase_images/module_01_core_hr/UC06.png)

---

### UC07: Define Job Positions & Salary Bands
**Description:** Define job titles, seniority levels, responsibilities, and associated pay grade ranges.

![UC07: Define Job Positions & Salary Bands](usecase_images/module_01_core_hr/UC07.png)

---

### UC08: Visualize Company Organization Chart
**Description:** Render interactive graphical organizational chart showing manager reporting lines and team structure.

![UC08: Visualize Company Organization Chart](usecase_images/module_01_core_hr/UC08.png)

---

### UC09: Publish Internal Communication Announcement
**Description:** Broadcast corporate announcements, policy revisions, and news notifications across company portal.

![UC09: Publish Internal Communication Announcement](usecase_images/module_01_core_hr/UC09.png)

---

### UC10: Search Corporate Staff Directory
**Description:** Search colleague contact details, job roles, office extensions, and work locations.

![UC10: Search Corporate Staff Directory](usecase_images/module_01_core_hr/UC10.png)

---


# Module: Workforce Activity & Location Audit

### UC11: Initialize Workstation Activity Tracking
**Description:** Start background workstation timer to measure active working hours and task effort.

![UC11: Initialize Workstation Activity Tracking](usecase_images/module_02_workforce_tracking/UC11.png)

---

### UC12: Audit Staff Productivity Metrics
**Description:** Analyze team daily productivity scores, active keyboard/mouse ratios, and idle time summaries.

![UC12: Audit Staff Productivity Metrics](usecase_images/module_02_workforce_tracking/UC12.png)

---

### UC13: Monitor Software Application & Web Usage
**Description:** Track software tools, web browser URLs, and active desktop windows used during working hours.

![UC13: Monitor Software Application & Web Usage](usecase_images/module_02_workforce_tracking/UC13.png)

---

### UC14: Inspect Workstation Desktop Screenshots
**Description:** Inspect automated periodic desktop screenshots captured during active working sessions.

![UC14: Inspect Workstation Desktop Screenshots](usecase_images/module_02_workforce_tracking/UC14.png)

---

### UC15: Activate GPS Geofenced Location Tracking
**Description:** Enable mobile GPS location breadcrumbs during field client visits and travel assignments.

![UC15: Activate GPS Geofenced Location Tracking](usecase_images/module_02_workforce_tracking/UC15.png)

---

### UC16: Monitor Field Staff Live Location Map
**Description:** View live map displaying current GPS positions and travel routes of field personnel.

![UC16: Monitor Field Staff Live Location Map](usecase_images/module_02_workforce_tracking/UC16.png)

---

### UC17: Dispatch Field Operations Work Order
**Description:** Dispatch client visit tasks, service job orders, and schedule assignments to field personnel.

![UC17: Dispatch Field Operations Work Order](usecase_images/module_02_workforce_tracking/UC17.png)

---

### UC18: Submit Field Completion Report
**Description:** Submit field service completion report, client e-signatures, and site status photographs.

![UC18: Submit Field Completion Report](usecase_images/module_02_workforce_tracking/UC18.png)

---


# Module: Recruitment & Talent Acquisition ATS

### UC19: Submit Job Opening Requisition
**Description:** Draft job requisition requesting open headcount budget approval from department management.

![UC19: Submit Job Opening Requisition](usecase_images/module_03_recruitment/UC19.png)

---

### UC20: Publish Job Posting to Career Portal
**Description:** Post approved job vacancy on corporate career site and external employment portals.

![UC20: Publish Job Posting to Career Portal](usecase_images/module_03_recruitment/UC20.png)

---

### UC21: Screen & Score Candidate Applications
**Description:** Parse candidate CV resumes, score qualification criteria, and shortlist top applicants.

![UC21: Screen & Score Candidate Applications](usecase_images/module_03_recruitment/UC21.png)

---

### UC22: Generate Candidate Job Offer Letter
**Description:** Prepare formal job offer agreement including compensation details, starting date, and conditions.

![UC22: Generate Candidate Job Offer Letter](usecase_images/module_03_recruitment/UC22.png)

---

### UC23: Send Automated Candidate Email
**Description:** Send interview scheduling invitations, application status updates, or regret letters.

![UC23: Send Automated Candidate Email](usecase_images/module_03_recruitment/UC23.png)

---

### UC24: Log Candidate Communication History
**Description:** Record telephone screening notes, email correspondence, and feedback logs in ATS profile.

![UC24: Log Candidate Communication History](usecase_images/module_03_recruitment/UC24.png)

---

### UC25: Draft New-Hire Onboarding Roadmap
**Description:** Prepare orientation task schedule, compliance checklist, and assign buddy mentor for new hire.

![UC25: Draft New-Hire Onboarding Roadmap](usecase_images/module_03_recruitment/UC25.png)

---

### UC26: Complete New-Hire Onboarding Tasks
**Description:** Complete mandatory orientation modules, nộp pre-hire legal forms, and verify account setup.

![UC26: Complete New-Hire Onboarding Tasks](usecase_images/module_03_recruitment/UC26.png)

---


# Module: Time, Attendance & Leave Management

### UC27: Record Daily Attendance Clock-in
**Description:** Log morning arrival work timestamp via web portal, biometrics, or mobile app.

![UC27: Record Daily Attendance Clock-in](usecase_images/module_04_time_attendance/UC27.png)

---

### UC28: Record Daily Attendance Clock-out
**Description:** Log end-of-day departure timestamp and calculate total daily active working duration.

![UC28: Record Daily Attendance Clock-out](usecase_images/module_04_time_attendance/UC28.png)

---

### UC29: Review Personal Attendance History
**Description:** Access monthly attendance calendar logs, check lateness flags, and review work hours.

![UC29: Review Personal Attendance History](usecase_images/module_04_time_attendance/UC29.png)

---

### UC30: Submit Weekly Work Timesheet
**Description:** Fill out weekly work timesheet allocating project task hours and submit for manager approval.

![UC30: Submit Weekly Work Timesheet](usecase_images/module_04_time_attendance/UC30.png)

---

### UC31: Approve Department Weekly Timesheets
**Description:** Review team members' weekly timesheets, resolve anomalies, and lock data for payroll.

![UC31: Approve Department Weekly Timesheets](usecase_images/module_04_time_attendance/UC31.png)

---

### UC32: Configure Department Shift Rosters
**Description:** Define shift working hours, break schedules, rotational shifts, and overtime thresholds.

![UC32: Configure Department Shift Rosters](usecase_images/module_04_time_attendance/UC32.png)

---

### UC33: Assign Work Shift Schedule
**Description:** Assign weekly work shifts to staff members and publish team roster schedule.

![UC33: Assign Work Shift Schedule](usecase_images/module_04_time_attendance/UC33.png)

---

### UC34: Submit Paid Leave Application
**Description:** Apply for annual leave, sick leave, or maternity leave and route for manager review.

![UC34: Submit Paid Leave Application](usecase_images/module_04_time_attendance/UC34.png)

---

### UC35: Approve Employee Leave Application
**Description:** Review employee leave requests, check department shift coverage, and sign off time-off.

![UC35: Approve Employee Leave Application](usecase_images/module_04_time_attendance/UC35.png)

---

### UC36: Track Leave Quotas & Accruals
**Description:** View real-time paid leave balance, accrued sick days, and historical time-off usage.

![UC36: Track Leave Quotas & Accruals](usecase_images/module_04_time_attendance/UC36.png)

---


# Module: Payroll Processing & Benefits Admin

### UC37: Execute Monthly Payroll Computation
**Description:** Run automated gross-to-net salary calculations including tax withholding, BHXH insurance, and allowances.

![UC37: Execute Monthly Payroll Computation](usecase_images/module_05_payroll_benefits/UC37.png)

---

### UC38: Approve Monthly Payroll Disbursement
**Description:** Audit monthly master payroll summary sheet and authorize bank transfer disbursement.

![UC38: Approve Monthly Payroll Disbursement](usecase_images/module_05_payroll_benefits/UC38.png)

---

### UC39: Distribute Digital Confidential Payslips
**Description:** Generate password-protected encrypted PDF payslips and email them securely to staff.

![UC39: Distribute Digital Confidential Payslips](usecase_images/module_05_payroll_benefits/UC39.png)

---

### UC40: Configure Corporate Benefit Plans
**Description:** Configure employee healthcare insurance, wellness programs, and flexible benefit rules.

![UC40: Configure Corporate Benefit Plans](usecase_images/module_05_payroll_benefits/UC40.png)

---

### UC41: Enroll in Flexible Benefit Scheme
**Description:** Enroll in annual corporate health insurance and select flexible benefit options.

![UC41: Enroll in Flexible Benefit Scheme](usecase_images/module_05_payroll_benefits/UC41.png)

---

### UC42: Define Organizational Salary Architecture
**Description:** Establish base salary grade bands, allowance structures, and overtime pay formulas.

![UC42: Define Organizational Salary Architecture](usecase_images/module_05_payroll_benefits/UC42.png)

---

### UC43: Create Annual Compensation Increase Scheme
**Description:** Create annual merit salary revision budgets and performance bonus allocation matrices.

![UC43: Create Annual Compensation Increase Scheme](usecase_images/module_05_payroll_benefits/UC43.png)

---

### UC44: Approve Employee Salary Adjustment
**Description:** Review individual promotion proposals or merit salary adjustments for approval.

![UC44: Approve Employee Salary Adjustment](usecase_images/module_05_payroll_benefits/UC44.png)

---


# Module: Performance, OKRs & Talent Growth

### UC45: Initiate 360 Performance Review Cycle
**Description:** Launch company-wide 360-degree performance evaluation cycles involving self and manager forms.

![UC45: Initiate 360 Performance Review Cycle](usecase_images/module_06_performance/UC45.png)

---

### UC46: Submit Employee Self-Appraisal Form
**Description:** Complete self-appraisal form rating key competencies, accomplishments, and goals.

![UC46: Submit Employee Self-Appraisal Form](usecase_images/module_06_performance/UC46.png)

---

### UC47: Submit Manager Performance Scorecard
**Description:** Evaluate subordinate employee performance, score core competencies, and assign final rating.

![UC47: Submit Manager Performance Scorecard](usecase_images/module_06_performance/UC47.png)

---

### UC48: Establish Strategic Goals & OKRs
**Description:** Set individual SMART goals and key results aligned with department objectives.

![UC48: Establish Strategic Goals & OKRs](usecase_images/module_06_performance/UC48.png)

---

### UC49: Update Key Result Progress Status
**Description:** Update OKR key result completion percentages and log milestone progress notes.

![UC49: Update Key Result Progress Status](usecase_images/module_06_performance/UC49.png)

---

### UC50: Review & Verify Goal Accomplishments
**Description:** Audit employee OKR deliverables, verify key result metrics, and sign off goal status.

![UC50: Review & Verify Goal Accomplishments](usecase_images/module_06_performance/UC50.png)

---

### UC51: Schedule 1-on-1 Coaching Session
**Description:** Schedule regular 1-on-1 performance coaching and career development meetings.

![UC51: Schedule 1-on-1 Coaching Session](usecase_images/module_06_performance/UC51.png)

---

### UC52: Draft Individual Development Plan (IDP)
**Description:** Formulate personal career growth plan, skill improvement milestones, and training targets.

![UC52: Draft Individual Development Plan (IDP)](usecase_images/module_06_performance/UC52.png)

---

### UC53: Send Peer Recognition Kudos Badge
**Description:** Send public appreciation badges and kudos points to colleagues on corporate feed.

![UC53: Send Peer Recognition Kudos Badge](usecase_images/module_06_performance/UC53.png)

---

### UC54: Monitor Company Performance Analytics
**Description:** View company-wide rating distribution curves, bell curve calibration, and talent matrix graphs.

![UC54: Monitor Company Performance Analytics](usecase_images/module_06_performance/UC54.png)

---


# Module: Platform Infrastructure & Access Control

### UC55: Authenticate System User Session
**Description:** Authenticate user credentials via Single Sign-On (SSO) and initialize secure active session.

![UC55: Authenticate System User Session](usecase_images/module_07_platform/UC55.png)

---

### UC56: Configure Role-Based Access Control (RBAC)
**Description:** Define user roles, module permissions, and fine-grained data visibility boundaries.

![UC56: Configure Role-Based Access Control (RBAC)](usecase_images/module_07_platform/UC56.png)

---


# Module: Corporate Governance & Security Audit

### UC57: Establish Regulatory Compliance Policy
**Description:** Configure labor compliance rules, GDPR data retention limits, and corporate governance policies.

![UC57: Establish Regulatory Compliance Policy](usecase_images/module_08_compliance/UC57.png)

---

### UC58: Audit System Security Logs
**Description:** Inspect real-time system audit trails, access permission logs, and security anomaly events.

![UC58: Audit System Security Logs](usecase_images/module_08_compliance/UC58.png)

---


# Module: HR Analytics & BI Reporting

### UC59: Build & Export Custom HR Reports
**Description:** Design custom tabular reports, apply data filters, and export to Excel/CSV files.

![UC59: Build & Export Custom HR Reports](usecase_images/module_09_analytics/UC59.png)

---


# Module: Project Resource & Cost Control

### UC60: Manage Project Allocations & Cost Tracking
**Description:** Create project workspace, assign team member capacities, and monitor project labor budget.

![UC60: Manage Project Allocations & Cost Tracking](usecase_images/module_10_projects/UC60.png)

---
