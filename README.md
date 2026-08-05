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

## 10 Core Layer 1 Use Case Diagrams

### 1. Core HR & Employee Management
**Description:** Use Case Diagram covering Employment Information, Employee Records, Document Vault, Org Architecture, Employee Profile, and Talent Engagement.

![1. Core HR & Employee Management](use/1.png)

---

### 2. Workforce Tracking & Activity Audit
**Description:** Use Case Diagram covering Activity Telemetry, Desktop Computer Audit, Screenshot Audit, Location Tracking, and Field Operations.

![2. Workforce Tracking & Activity Audit](use/2.png)

---

### 3. Recruitment & Talent Acquisition
**Description:** Use Case Diagram covering Job Requisitions, Recruitment Pipeline, Job Openings, Candidate Connect, Candidate Screening, and Onboarding.

![3. Recruitment & Talent Acquisition](use/3.png)

---

### 4. Time, Attendance & Leave Management
**Description:** Use Case Diagram covering Attendance Engine, Daily Punch Clock, Timesheet Hub, Shift Rostering, Absence & Leave, and Overtime Requests.

![4. Time, Attendance & Leave Management](use/4.png)

---

### 5. Payroll Processing & Benefits Admin
**Description:** Use Case Diagram covering Payroll Engine, Direct Bank Batch Disbursement, Digital Payslips, Benefits Admin, Flex Claims, and Compensation Matrix.

![5. Payroll Processing & Benefits Admin](use/5.png)

---

### 6. Performance, OKRs & Talent Growth
**Description:** Use Case Diagram covering 360 Reviews, Self Appraisal, Goals & OKRs, 1-on-1 Coaching, Rewards & Kudos, and Talent Analytics.

![6. Performance, OKRs & Talent Growth](use/6.png)

---

### 7. Platform Infrastructure & Access Control
**Description:** Use Case Diagram covering Integration API, API Gateway, Authentication & IAM, Role Permissions (RBAC), Mobile Portal, and Notifications.

![7. Platform Infrastructure & Access Control](use/7.png)

---

### 8. Corporate Governance & Security Audit
**Description:** Use Case Diagram covering Regulatory Compliance, Policy Acknowledgment, Corporate Governance, Data Privacy & Security, UI Masking, and Audit Trail.

![8. Corporate Governance & Security Audit](use/8.png)

---

### 9. HR Analytics & BI Reporting
**Description:** Use Case Diagram covering Reporting Engine, Custom Reports, Executive Dashboards, Headcount Dashboards, Predictive Analytics, and Turnover Analytics.

![9. HR Analytics & BI Reporting](use/9.png)

---

### 10. Project Resource & Cost Control
**Description:** Use Case Diagram covering Project Lifecycle, Project Creation, Resource Capacity, Team Allocations, Financial Cost Control, and Billing Invoices.

![10. Project Resource & Cost Control](use/10.png)

---
