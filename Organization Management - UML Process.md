## Organization Management – UML Process

## Các chức năng chính

```text
Organization
├── Organization Chart
├── Departments
├── Teams
├── Positions
├── Reporting Lines
└── Employee Movements
    ├── Transfers
    ├── Promotions
    ├── Position Changes
    ├── Manager Changes
    └── Movement History
```

### Organization Chart

Hiển thị cơ cấu công ty dựa trên:

```text
Departments và Teams
+ Positions
+ Employee Assignments
+ Reporting Lines
```

Organization Chart được hệ thống tự tạo, HR không cần vẽ hoặc nhập thủ công.

### Departments và Teams

HR có thể:

- Tạo và cập nhật phòng ban hoặc team
- Chọn đơn vị cha
- Gán trưởng phòng hoặc team lead
- Xem thành viên
- Vô hiệu hóa đơn vị

### Positions

HR có thể:

- Tạo vị trí
- Gán vị trí vào department hoặc team
- Chọn job title và level
- Xác định position cấp trên
- Gán nhân viên vào position
- Theo dõi vị trí trống

### Reporting Lines

Quản lý:

- Direct Manager
- Direct Reports
- Reporting hierarchy
- Manager changes

Hệ thống phải ngăn:

- Nhân viên quản lý chính mình
- Quan hệ quản lý vòng lặp
- Manager không còn hoạt động

### Employee Movements

Bao gồm:

- Chuyển phòng ban hoặc team
- Thăng chức
- Đổi vị trí
- Đổi manager

Mỗi movement cần có:

```text
Employee
Current Assignment
New Assignment
Movement Type
Reason
Effective Date
Approval Status
```

## Nguồn dữ liệu

### Employee data

Dữ liệu nhân viên được lấy từ:

```text
Onboarding Management
        ↓
Employee Profile
        ↓
Organization Management
```

Organization chỉ sử dụng hồ sơ nhân viên đã tồn tại, không tạo Employee Profile mới.

### Organization data

Organization Management là nguồn dữ liệu chính cho:

```text
Departments
Teams
Positions
Employee Assignments
Reporting Lines
Employee Movements
```

### Employee Assignment

Đây là dữ liệu liên kết nhân viên với cơ cấu tổ chức:

```text
Employee
├── Department
├── Team
├── Position
├── Direct Manager
├── Work Location
└── Effective Date
```

## Dataflow

### Luồng xem Organization Chart

```text
HR opens Organization Chart
        ↓
System loads departments and teams
        ↓
Loads positions
        ↓
Loads employee assignments
        ↓
Loads reporting lines
        ↓
Builds organization hierarchy
        ↓
Displays organization chart
```

### Luồng thay đổi Organization

```text
HR creates organization change
        ↓
System validates data
        ↓
HR Manager approves if required
        ↓
System applies change on effective date
        ↓
Updates employee assignment
        ↓
Updates Employee Profile
        ↓
Records movement history and audit log
        ↓
Refreshes Organization Chart
```

## Tích hợp bên ngoài

Có thể tích hợp với:

- Identity hoặc Active Directory: cập nhật manager, group và quyền truy cập
- Payroll: cập nhật department, position và level
- Attendance: cập nhật team, location và work schedule
- Leave Management: xác định manager duyệt nghỉ phép
- Recruitment: sử dụng vacant positions
- Onboarding: gán nhân viên mới vào position
- Offboarding: giải phóng position và chuyển direct reports
- Microsoft Teams hoặc Slack: cập nhật team và channel

Luồng tích hợp:

```text
Organization change applied
        ↓
System publishes Organization Changed event
        ↓
External systems receive changes
        ↓
Synchronization result is recorded
```

## Các dữ liệu cốt lõi

```text
OrganizationUnit
Position
EmployeeAssignment
ReportingRelationship
EmployeeMovement
MovementHistory
AuditLog
```

## Nguyên tắc thiết kế

- Organization Management là nguồn chính cho cơ cấu tổ chức.
- Organization Chart được tạo tự động từ dữ liệu, không lưu như hình vẽ thủ công.
- Các thay đổi quan trọng cần có ngày hiệu lực.
- Không ghi đè lịch sử cũ.
- Thay đổi nội bộ phải được lưu thành công trước khi đồng bộ hệ thống bên ngoài.
- Mọi thay đổi cần có Audit Log.