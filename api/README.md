# HR Platform — Enterprise RESTful API Specification

This directory contains the official **v1.0 Enterprise RESTful API Specification & Server Implementation** for the HR Platform. It provides full coverage for all 10 core modules using JSON API standards, Bearer JWT Authentication, RBAC Authorization, and Rate Limiting.

---

## 🔒 1. Authentication & API Security Standards

### 1.1 HTTP Headers
All API requests sent to the HR Platform Gateway must include the following headers:
```http
Content-Type: application/json
Authorization: Bearer <YOUR_JWT_ACCESS_TOKEN>
X-Tenant-ID: <TENANT_UUID>
X-Request-ID: <UUID_V4>
```

### 1.2 HTTP Status Codes
- `200 OK`: Request succeeded.
- `201 Created`: Entity successfully created (e.g., Employee, Requisition, Leave Request).
- `400 Bad Request`: Input validation failed or missing required fields.
- `401 Unauthorized`: Invalid or expired JWT Token.
- `403 Forbidden`: RBAC permission denied for user role.
- `404 Not Found`: Requested resource does not exist.
- `429 Too Many Requests`: Rate limit exceeded (100 requests / min).
- `500 Internal Server Error`: Server runtime failure.

---

## 🌐 2. API Routes Matrix across 10 Core Modules

| # | Module | Route Prefix | Handler File |
|---|---|---|---|
| 1 | **Core HR & Profiles** | `/api/v1/employees` | `routes/core_hr.js` |
| 2 | **Workforce Telemetry** | `/api/v1/workforce` | `routes/workforce.js` |
| 3 | **AI Recruitment ATS** | `/api/v1/recruitment` | `routes/recruitment.js` |
| 4 | **Time & Attendance** | `/api/v1/attendance` | `routes/attendance.js` |
| 5 | **Payroll & Benefits** | `/api/v1/payroll` | `routes/payroll.js` |
| 6 | **Performance & OKRs** | `/api/v1/performance` | `routes/performance.js` |
| 7 | **Platform RBAC** | `/api/v1/auth` & `/api/v1/settings` | `routes/platform.js` |
| 8 | **Governance & Audit** | `/api/v1/compliance` | `routes/governance.js` |
| 9 | **Projects & Resources**| `/api/v1/projects` | `routes/projects.js` |
| 10| **Enterprise Analytics**| `/api/v1/analytics` | `routes/projects.js` |
