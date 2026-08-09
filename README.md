figma: https://www.figma.com/design/D35Ut0x0TXeRGMjvLaNiIt/PeopleManagement?node-id=26-2&t=LPOmQNg069LG4KMY-0
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

## Information Architecture (IA)

Link to access this IA: https://octopus.do/p62nekzuyam
```mermaid
flowchart LR

    HR["HR Platform"]

    %% =========================
    %% Dashboard
    %% =========================
    HR --> Dashboard["Dashboard Overview"]

    Dashboard --> DashSummary["Executive Metrics"]
    Dashboard --> TeamAnalytics["Team Overview"]
    Dashboard --> BIInsights["Executive Insights"]

    %% =========================
    %% People & Organization
    %% =========================
    HR --> People["People & Org Architecture"]

    People --> StaffDirectory["Employee Directory"]
    StaffDirectory --> StaffProfile["Master Employee Profile"]

    People --> OrgChart["Dynamic Org Chart"]
    People --> Depts["Departments & Teams"]
    People --> Roles["Job Titles & Positions"]
    People --> VaultDocs["Secure Documents Vault"]
    People --> Governance["Corporate Governance"]

    %% =========================
    %% Smart AI Recruitment
    %% =========================
    HR --> Recruitment["Smart AI Recruitment ATS"]

    Recruitment --> RecruitMgmt["Recruitment Pipeline"]

    RecruitMgmt --> Requisitions["Requisition Management"]
    Requisitions --> AddRequisitionModal["Create Requisition"]

    RecruitMgmt --> AIPublicJob["AI Job Posting Portal"]

    RecruitMgmt --> AIGenerateJD["AI JD Generator Engine"]

    RecruitMgmt --> ApplicantHub["Applicant Management"]
    ApplicantHub --> AIAutoFilter["AI Smart Candidate Screener"]
    ApplicantHub --> TransformCV["CV-to-Application Converter"]

    RecruitMgmt --> InterviewSchedule["Interview Scheduler"]
    InterviewSchedule --> AddInterviewSlot["Book Interview Slot"]

    RecruitMgmt --> InterviewAudit["Candidate Evaluation"]
    InterviewAudit --> ApproveCandidate["Approve Candidate"]
    InterviewAudit --> DeclineCandidate["Reject Candidate"]

    RecruitMgmt --> ProcessCV["CV Document Extractor"]

    Recruitment --> TemplateRepo["Template Repository"]
    TemplateRepo --> EmailTemplate["Add Email Template"]
    TemplateRepo --> JDTemplate["Add JD Template"]

    Recruitment --> Integrations["Job Board Integrations"]
    Integrations --> ConfigAPI["Config Connector API"]

    Recruitment --> HiringProgress["Hiring Progress Tracker"]

    HiringProgress --> OfferAdmin["Digital Offer Management"]
    OfferAdmin --> DispatchOffer["Send Offer Letter"]
    OfferAdmin --> OfferAcceptance["Get Candidate Acceptance"]

    HiringProgress --> OnboardingHub["New-Hire Onboarding Engine"]
    OnboardingHub --> SendOnboard["Send Onboarding Package"]

    Recruitment --> RecruiterAccount["Recruiter Account Settings"]
    RecruiterAccount --> UpdateRecruiterProfile["Update Recruiter Info"]

    %% =========================
    %% Time & Attendance
    %% =========================
    HR --> Time["Time & Attendance Engine"]

    Time --> AttendanceDash["Attendance Dashboard"]
    Time --> AttendanceLog["Daily Punch Logs"]
    Time --> LeaveRequests["Leave Workflow"]
    Time --> LeaveBalance["Leave Accruals"]
    Time --> ShiftSchedule["Shift Roster Calendar"]
    Time --> ClockInOut["Web & Mobile Clock In/Out"]

    %% =========================
    %% Tracking & Audit
    %% =========================
    HR --> Tracking["Workforce Telemetry & Audit"]

    Tracking --> TimeTracking["Workstation Time Tracker"]
    Tracking --> Timesheets["Weekly Timesheets"]
    Tracking --> ActivityMonitoring["App & URL Usage Audit"]
    Tracking --> Screenshots["Desktop Screenshots Vault"]
    Tracking --> ProductivityReport["Productivity Scorecards"]
    Tracking --> GPSTracking["GPS Field Geofence Tracking"]

    %% =========================
    %% Projects & Cost Control
    %% =========================
    HR --> Projects["Project Resource & Cost Control"]

    Projects --> ProjectList["Project Workspace Directory"]
    ProjectList --> ProjectDetails["Project Work Breakdown"]

    Projects --> TaskBoard["Kanban Task Board"]
    Projects --> MyTasks["My Allocated Tasks"]
    Projects --> TimesheetApproval["Billable Timesheet Approvals"]
    Projects --> ProjectReports["Project Financial Reports"]

    %% =========================
    %% Performance & Talent
    %% =========================
    HR --> Performance["Performance & Talent Growth"]

    Performance --> Goals["Goals & OKRs Cascade"]
    Performance --> PerformanceReviews["360 Appraisal Reviews"]
    Performance --> GiveFeedback["Peer Feedback & Kudos Wall"]
    Performance --> OneOnOne["1-on-1 Coaching Sessions"]
    Performance --> PerformanceInsights["Talent Matrix Analytics"]

    %% =========================
    %% Payroll & Benefits
    %% =========================
    HR --> Payroll["Payroll & Benefits Admin"]

    Payroll --> PayrollRun["Automated Payroll Run"]
    Payroll --> Payslips["Encrypted Digital Payslips"]
    Payroll --> Benefits["Corporate Benefits & Insurance"]
    Payroll --> PayrollReports["Tax & Statutory Reports"]

    %% =========================
    %% Reports & Analytics
    %% =========================
    HR --> Reports["Enterprise BI & Analytics"]

    Reports --> ReportsCenter["Custom Report Builder"]
    Reports --> AnalyticsDashboard["Executive BI Dashboards"]

    %% =========================
    %% Account & Settings
    %% =========================
    HR --> Account["System Security & Settings"]

    Account --> MyProfile["My Profile Settings"]
    Account --> SecuritySettings["RBAC & Security Config"]

    %% =========================
    %% STYLES
    %% =========================
    classDef root fill:#0F172A,color:#FFFFFF,stroke:#0284C7,stroke-width:3px,font-weight:bold;

    classDef module fill:#1E40AF,color:#FFFFFF,stroke:#3B82F6,stroke-width:2px,font-weight:bold;

    classDef mainScreen fill:#065F46,color:#FFFFFF,stroke:#10B981,stroke-width:2px,font-weight:bold;

    classDef subScreen fill:#FEF3C7,color:#78350F,stroke:#D97706,stroke-width:1.5px,font-weight:bold;

    classDef popup fill:#FFF1F2,color:#9F1239,stroke:#F43F5E,stroke-width:1px,stroke-dasharray:4 3;

    classDef detail fill:#FFFFFF,color:#0F172A,stroke:#64748B,stroke-width:1.5px;

    class HR root;

    class Dashboard,People,Recruitment,Time,Tracking,Projects,Performance,Payroll,Reports,Account module;

    %% Dashboard
    class DashSummary,TeamAnalytics,BIInsights subScreen;

    %% People
    class StaffDirectory,OrgChart,Depts,Roles,VaultDocs,Governance subScreen;
    class StaffProfile detail;

    %% Recruitment Main Screens
    class RecruitMgmt,TemplateRepo,Integrations,HiringProgress mainScreen;

    %% Recruitment Sub Screens
    class Requisitions,AIPublicJob,AIGenerateJD,ApplicantHub,InterviewSchedule,InterviewAudit,ProcessCV subScreen;

    class OfferAdmin,OnboardingHub,RecruiterAccount subScreen;

    %% Recruitment Popups
    class AddRequisitionModal,AIAutoFilter,TransformCV,AddInterviewSlot,ApproveCandidate,DeclineCandidate popup;

    class EmailTemplate,JDTemplate,ConfigAPI popup;

    class DispatchOffer,OfferAcceptance,SendOnboard,UpdateRecruiterProfile popup;

    %% Time & Attendance
    class AttendanceDash,AttendanceLog,LeaveRequests,LeaveBalance,ShiftSchedule,ClockInOut subScreen;

    %% Tracking
    class TimeTracking,Timesheets,ActivityMonitoring,Screenshots,ProductivityReport,GPSTracking subScreen;

    %% Projects
    class ProjectList,TaskBoard,MyTasks,TimesheetApproval,ProjectReports subScreen;
    class ProjectDetails detail;

    %% Performance
    class Goals,PerformanceReviews,GiveFeedback,OneOnOne,PerformanceInsights subScreen;

    %% Payroll
    class PayrollRun,Payslips,Benefits,PayrollReports subScreen;

    %% Reports
    class ReportsCenter,AnalyticsDashboard subScreen;

    %% Account
    class MyProfile,SecuritySettings subScreen;
```

## Use Case Diagrams

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

## Swimlane Diagrams

### 1. Core HR & Employee Management Workflow
**Description:** End-to-end employee lifecycle swimlane process covering Profile Registration, Document Verification, IT Account Provisioning, Probationary Assessment, and Offboarding.

![1. Core HR & Employee Management Workflow](swimlane/1.png)

---

### 2. Workforce Tracking & Activity Audit Workflow
**Description:** Workforce telemetry swimlane process covering Workstation Agent Logging, Idle Time Detection, GPS Geofenced Clock-in, Field Service Dispatch, and E-Sign Audit.

![2. Workforce Tracking & Activity Audit Workflow](swimlane/2.png)

---

### 3. Recruitment & Talent Acquisition Workflow
**Description:** Talent acquisition swimlane process covering Job Requisition Approval, Automated CV Parsing, Technical Interview Scorecards, Digital Offer Letters, and Pre-Hire Setup.

![3. Recruitment & Talent Acquisition Workflow](swimlane/3.png)

---

### 4. Time, Attendance & Leave Management Workflow
**Description:** Time management swimlane process covering Daily Clock-in/out, Overtime & Leave Requests, Manager Approvals, and Monthly Timesheet Verification.

![4. Time, Attendance & Leave Management Workflow](swimlane/4.png)

---

### 5. Payroll Processing & Benefits Admin Workflow
**Description:** Payroll administration swimlane process covering Timesheet Import, Gross-to-Net Computation, Tax/BHXH Deductions, HR Audit, and Direct Bank Deposit Batch File Generation.

![5. Payroll Processing & Benefits Admin Workflow](swimlane/5.png)

---

### 6. Performance, OKRs & Talent Growth Workflow
**Description:** Strategic talent appraisal swimlane process covering Corporate OKR Cascade, 360-Degree Feedback , Manager 1-on-1 Coaching.

![6. Performance, OKRs & Talent Growth Workflow](swimlane/6.png)

---

### 7. Platform Infrastructure & Access Control Workflow
**Description:** Platform security swimlane process covering User Login Request, SSO Identity Verification, Multi-Factor Authentication (MFA), and Fine-Grained Role Permission Enforcement.

![7. Platform Infrastructure & Access Control Workflow](swimlane/7.png)

---

### 8. Corporate Governance & Security Audit Workflow
**Description:** Compliance management swimlane process covering Policy Definition, Mandatory Staff Sign-off, PII Data Masking, Real-time Security Event Detection, and Audit Trail Reporting.

![8. Corporate Governance & Security Audit Workflow](swimlane/8.png)

---

### 9. HR Analytics & BI Reporting Workflow
**Description:** Analytics swimlane process covering Drag-and-Drop Filter Selection, Database Aggregation, Dynamic Chart Rendering, Executive Metric Auditing, and Automated PDF/Excel Delivery.

![9. HR Analytics & BI Reporting Workflow](swimlane/9.png)

---

### 10. Project Resource & Cost Control Workflow
**Description:** Project management swimlane process covering Project Creation, Member Capacity Allocation, Billable Timesheet Logging, Labor Cost Analysis, and Client Invoicing.

![10. Project Resource & Cost Control Workflow](swimlane/10.png)

---

