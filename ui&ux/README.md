# HR Platform — Document Mô Tả Thiết Kế UI/UX Toàn Diện (UI/UX Specification)

Document này mô tả chi tiết và toàn diện hệ thống giao diện người dùng (UI), trải nghiệm người dùng (UX), cấu trúc trang (Page Architecture), hệ thống thành phần thiết kế (Design System Components), và luồng tương tác (User Flows) của ứng dụng **Web HR Platform**.

---

## 📐 1. Hệ Thống Thiết Kế Core (Design System & Foundation)

### 1.1 Palette Màu Sắc (Color Palette)
- **Primary Brand (Blue Sapphire):** `#2563EB` (Primary), `#1D4ED8` (Hover), `#EFF6FF` (Light Background).
- **Secondary Accent (Teal/Emerald):** `#0D9488` (Teal), `#16A34A` (Success/Active Green).
- **Warning & Caution (Amber/Orange):** `#D97706` (Amber Warning), `#EA580C` (Orange Accent).
- **Danger & Alert (Crimson Red):** `#DC2626` (Danger/Error), `#FEF2F2` (Red Surface).
- **Neutral Dark (Dark Slate):** `#0F172A` (Text Base), `#1E293B` (Sub-text), `#334155` (Borders).
- **Neutral Light (Pure Slate/White):** `#FFFFFF` (Surface Card), `#F8FAFC` (App Background), `#F1F5F9` (Hover Neutral).

### 1.2 Hệ Font Chữ & Typography Scale
- **Font Family:** `Inter`, `Roboto`, `system-ui`, sans-serif.
- **Display Header:** 32px / SemiBold / Line-height 1.2.
- **H1 Page Title:** 24px / Bold / Line-height 1.3.
- **H2 Section Title:** 18px / SemiBold / Line-height 1.4.
- **H3 Card Header:** 16px / Medium / Line-height 1.4.
- **Body Regular:** 14px / Regular / Line-height 1.5.
- **Body Small / Caption:** 12px / Regular / Line-height 1.5.

### 1.3 Layout Skeleton Chuẩn (Global Layout Structure)
Mọi trang trên Web HR Platform tuân thủ cấu trúc khung 4 vùng cố định:
1. **Top Bar Header (Chiều cao 64px):**
   - Logo doanh nghiệp & Module Selector Dropdown.
   - Thanh tìm kiếm toàn hệ thống (Global Command Palette `Ctrl + K`).
   - Notification Bell (Trung tâm thông báo có đếm số Badge).
   - Theme Switcher (Light / Dark Mode toggle).
   - User Profile Menu (Avatar, Name, Role Badge, Settings, Logout).
2. **Left Navigation Sidebar (Độ rộng 256px, có thể thu gọn gọn 64px):**
   - Danh sách 10 Module chính với Icon SVG nguyên bản & nhãn tiếng Việt/Anh.
   - Highlight màu Primary cho Module đang active.
3. **Main Workspace Canvas (Vùng nội dung động):**
   - Padding `24px`.
   - Contextual Breadcrumbs & Title Bar.
   - Vùng hiển thị Widget KPI, Data Tables, Charts, Form Panels.
4. **Right Slide-over Drawer / Modal Container:**
   - Dùng cho các tác vụ xem chi tiết nhanh, xem hồ sơ, chỉnh sửa Form mà không cần chuyển trang.

---

## 🌐 2. Danh Mục 36 Trang Web Theo 10 Phân Hệ Layer 1

Hệ thống Web HR Platform gồm **36 Trang Web chính** được chia thành 10 Phân hệ chính:

| STT | Phân Hệ Layer 1 | Mã Trang | Tên Trang Web (Page Name) | Đường Dẫn URL |
|---|---|---|---|---|
| **1** | **Core HR** | `PAGE-01` | Dashboard & Executive Portal | `/dashboard` |
| | | `PAGE-02` | Employee Directory & Staff Search | `/employees` |
| | | `PAGE-03` | Employee Master Profile & Details | `/employees/:id` |
| | | `PAGE-04` | Document Vault & File Archival | `/documents` |
| | | `PAGE-05` | Organization Tree & Department Chart | `/org-chart` |
| **2** | **Workforce Tracking** | `PAGE-06` | Workstation Telemetry & Active Logs | `/workforce/activity` |
| | | `PAGE-07` | Desktop App & Web URL Usage Audit | `/workforce/app-usage` |
| | | `PAGE-08` | Desktop Screenshot Audit Gallery | `/workforce/screenshots` |
| | | `PAGE-09` | GPS Live Map & Field Dispatch Hub | `/workforce/field-map` |
| **3** | **Recruitment ATS** | `PAGE-10` | Job Requisitions & Headcount Plan | `/recruitment/requisitions` |
| | | `PAGE-11` | Kanban Applicant Pipeline (ATS) | `/recruitment/pipeline` |
| | | `PAGE-12` | Candidate Profile & Interview Scorecard| `/recruitment/candidates/:id`|
| | | `PAGE-13` | New-Hire Onboarding Roadmap | `/recruitment/onboarding` |
| **4** | **Time & Attendance** | `PAGE-14` | Daily Attendance Punch & Time Logs | `/attendance/clock-in` |
| | | `PAGE-15` | Timesheet Hub & Weekly Approval Grid | `/attendance/timesheets` |
| | | `PAGE-16` | Shift Rostering & Roster Calendar | `/attendance/shifts` |
| | | `PAGE-17` | Absence & Paid Leave Management | `/attendance/leave` |
| **5** | **Payroll & Benefits** | `PAGE-18` | Monthly Payroll Computation Engine | `/payroll/calculate` |
| | | `PAGE-19` | Master Payroll Audit & Disbursement | `/payroll/disburse` |
| | | `PAGE-20` | Employee Confidential Payslip Portal | `/payroll/payslips` |
| | | `PAGE-21` | Flexible Benefits & Healthcare Admin | `/payroll/benefits` |
| **6** | **Performance & Growth**| `PAGE-22` | Strategic Goals & OKRs Cascade | `/performance/okrs` |
| | | `PAGE-23` | 360-Degree Review & Self Appraisal | `/performance/reviews` |
| | | `PAGE-24` | 1-on-1 Coaching & Meeting Notes | `/performance/coaching` |
| | | `PAGE-25` | Peer Kudos & Wall of Fame | `/performance/kudos` |
| **7** | **Platform Services** | `PAGE-26` | Single Sign-On (SSO) & MFA Login | `/auth/login` |
| | | `PAGE-27` | Role-Based Access Control (RBAC) Admin| `/settings/roles` |
| | | `PAGE-28` | System Integration & Webhook Gateway | `/settings/integrations` |
| **8** | **Compliance & Security**| `PAGE-29` | Regulatory Compliance & Policy Hub | `/compliance/policies` |
| | | `PAGE-30` | Security Audit Trails & Anomaly Logs | `/compliance/audit-log` |
| | | `PAGE-31` | PII Data Masking & Privacy Rules | `/compliance/privacy` |
| **9** | **Analytics & BI** | `PAGE-32` | Executive BI Dashboard & Analytics | `/analytics/dashboards` |
| | | `PAGE-33` | Custom Report Builder & Data Exporter | `/analytics/reports` |
| **10**| **Projects & Resources** | `PAGE-34` | Project Workspace & Member Capacity | `/projects/workspaces` |
| | | `PAGE-35` | Billable Timesheets & Resource Rates | `/projects/timesheets` |
| | | `PAGE-36` | Project Labor Cost & Invoicing Hub | `/projects/financials` |

---

## 🧩 3. Thư Thư Viện 20 Component Reusable Chi Tiết

1. **`COMP-01: Top Navigation Bar`** — Header 64px chứa logo, thanh search Ctrl+K, notification bell, profile menu.
2. **`COMP-02: Left Collapsible Sidebar`** — Sidebar chứa 10 menu module chính với icon SVG & badge thông báo.
3. **`COMP-03: KPI Stat Summary Card`** — Card hiển thị chỉ số (Tổng nhân sự, Tỉ lệ nghỉ việc, Ngân sách), kèm sparkline chart & chỉ số % tăng giảm.
4. **`COMP-04: Master Data Table Grid`** — Bảng dữ liệu chuẩn có checkbox chọn nhiều, sắp xếp cột (Sorting), bộ lọc nâng cao (Filtering), phân trang (Pagination), nút Export Excel.
5. **`COMP-05: Kanban Pipeline Board`** — Bảng kéo thả các cột trạng thái (Ứng tuyển -> Phỏng vấn -> Offer -> Hired) với card thông tin ứng viên.
6. **`COMP-06: Status Badge Indicator`** — Nhãn trạng thái màu sắc (`Active` - Xanh lá, `Pending` - Vàng, `Rejected` - Đỏ, `Draft` - Xám).
7. **`COMP-07: Slide-over Context Drawer`** — Panel trượt từ bên phải sang (width 480px hoặc 640px) để xem nhanh hồ sơ/chỉnh sửa mà không reload trang.
8. **`COMP-08: Modal Dialog Container`** — Hộp thoại xác nhận thao tác quan trọng (Xóa, Ký duyệt, Khóa sổ).
9. **`COMP-09: Filter & Search Action Bar`** — Thanh chứa ô tìm kiếm nhanh, dropdown lọc phòng ban, date range picker, nút Reset.
10. **`COMP-10: Interactive Org Tree Chart`** — Sơ đồ cây thư mục phòng ban và sơ đồ báo cáo quản lý có thể zoom in/out và collapse/expand node.
11. **`COMP-11: Desktop Screenshot Grid Gallery`** — Lưới ảnh chụp màn hình audit có thumbnail, bộ lọc timestamp, tag idle/active và modal phóng to ảnh full resolution.
12. **`COMP-12: GPS Interactive Live Map`** — Bản đồ Leaflet/Mapbox hiển thị vị trí nhân viên di động, tuyến đường di chuyển và geofence radius.
13. **`COMP-13: E-Signature Canvas Panel`** — Ô ký tên điện tử trên màn hình cảm ứng / chuột dùng khi duyệt hợp đồng hoặc nghiệm thu dịch vụ.
14. **`COMP-14: Timesheet Matrix Grid`** — Bảng lưới nhập giờ làm việc theo ngày và theo dự án/nhiệm vụ.
15. **`COMP-15: 360 Competency Radar Chart`** — Biểu đồ nhện đánh giá năng lực cá nhân so với trung bình phòng ban.
16. **`COMP-16: Toast Notification System`** — Alert popup góc phải màn hình (`Success`, `Error`, `Warning`, `Info`) tự tắt sau 4 giây.
17. **`COMP-17: Confidential Password-Protected Payslip View`** — Giao diện xem phiếu lương có nút che/hiện số tiền và ô nhập PIN/OTP bảo mật.
18. **`COMP-18: Date Range & Time Picker`** — Bộ chọn mốc thời gian từ ngày đến ngày kèm shortcut chọn nhanh (Hôm nay, Tuần này, Tháng này).
19. **`COMP-19: File Drag-and-Drop Dropzone`** — Vùng kéo thả file tài liệu (PDF, DOCX, PNG) hỗ trợ hiển thị tiến độ upload % và preview thumbnail.
20. **`COMP-20: Audit Timeline Activity Feed`** — Feed thời gian theo chiều dọc ghi lại chi tiết lịch sử thao tác hệ thống (Ai đã sửa gì, lúc mấy giờ, IP nào).

---

## 🖥️ 4. Mô Tả Thành Phần Chi Tiết Cho Từng Trang Web (36 Pages Detailed Breakdowns)

---

### 🟢 Phân Hệ 1: Core HR & Employee Management

#### `PAGE-01`: Dashboard & Executive Portal (`/dashboard`)
- **Mục đích:** Màn hình trang chủ tổng quan dành cho Ban giám đốc & Quản lý HR.
- **Bố cục UI & Thành phần:**
  - *Header Bar:* Chào mừng người dùng, thời gian thực, shortcut "Tạo hồ sơ mới".
  - *Hàng 1 (4 KPI Cards - `COMP-03`):* Tổng nhân sự (`1,248`), Nhân sự mới tháng này (`+18`), Tỉ lệ đi làm hôm nay (`96.4%`), Chi phí lương tháng dự kiến (`$340,000`).
  - *Hàng 2 (Cột trái 60%):* Biểu đồ biến động nhân sự 12 tháng (`Chart.js` Line Chart).
  - *Hàng 2 (Cột phải 40%):* Widget sinh nhật nhân viên & Kỷ niệm ngày làm việc trong tuần.
  - *Hàng 3 (Full Width):* Bảng "Yêu cầu cần phê duyệt gấp" (Duyệt nghỉ phép, Duyệt tăng lương, Duyệt hợp đồng).
- **Phân quyền:** HR Manager, Department Manager, System Admin.

#### `PAGE-02`: Employee Directory & Staff Search (`/employees`)
- **Mục đích:** Tra cứu, tìm kiếm và quản lý danh sách toàn bộ nhân sự công ty.
- **Bố cục UI & Thành me:**
  - *Action Bar (`COMP-09`):* Search bar theo tên/mã NV, Filter theo Phòng ban, Chức danh, Trạng thái (Đang làm việc / Đã nghỉ việc). Nút "Thêm Nhân Viên Mới".
  - *Data Table Grid (`COMP-04`):*
    - Cột: Avatar + Họ tên, Mã NV, Phòng ban, Chức danh, Email/SĐT, Ngày vào làm, Trạng thái (`COMP-06`), Hành động (Xem, Sửa, Đổi trạng thái).
  - *View Switcher:* Nút chuyển giữa dạng Bảng (Table View) và dạng Thẻ (Grid Card View).
  - *Slide-over Drawer (`COMP-07`):* Khi nhấp vào 1 dòng, mở nhanh Drawer bên phải xem tóm tắt thông tin nhân viên.

#### `PAGE-03`: Employee Master Profile & Details (`/employees/:id`)
- **Mục đích:** Hồ sơ chi tiết 360 độ của một nhân viên cụ thể.
- **Bố cục UI & Thành phần:**
  - *Header Banner:* Ảnh cover, Avatar đại diện, Họ tên, Chức danh, Mã NV, Badge trạng thái.
  - *Navigation Tabs:*
    - Tab 1: *Thông tin cá nhân* (Ngày sinh, CCCD, Địa chỉ, Số tài khoản ngân hàng, Người phụ thuộc).
    - Tab 2: *Thông tin công việc* (Hợp đồng lao động, Lịch sử thăng tiến, Lương cơ bản, Quản lý trực tiếp).
    - Tab 3: *Bằng cấp & Chứng chỉ* (Bảng lưu bằng đại học, chứng chỉ ngoại ngữ).
    - Tab 4: *Lịch sử nghỉ phép & Điểm danh*.
    - Tab 5: *Nhật ký đánh giá hiệu suất & OKR*.
  - *Action Floating Menu:* Nút "In hồ sơ", "Chỉnh sửa thông tin", "Gửi email trực tiếp".

#### `PAGE-04`: Document Vault & File Archival (`/documents`)
- **Mục đích:** Khai thác và quản lý kho tài liệu, hợp đồng pháp lý của nhân sự.
- **Bố cục UI & Thành phần:**
  - *Tree Folder Sidebar:* Thư mục Hợp đồng lao động, Thư mục CCCD/Hộ chiếu, Thư mục Bằng cấp, Thư mục Quyết định thăng chức.
  - *Dropzone Upload (`COMP-19`):* Kéo thả file PDF/DOCX để upload hàng loạt vào hồ sơ nhân viên.
  - *File Viewer Grid:* Hiển thị xem trước trang đầu tài liệu, kích thước file, ngày upload, người upload.
  - *Security Masking:* Ẩn bớt số CCCD và mức lương trên bản xem trước tài liệu công khai.

#### `PAGE-05`: Organization Tree & Department Chart (`/org-chart`)
- **Mục đích:** Trực quan hóa sơ đồ tổ chức công ty và cây báo cáo quản lý.
- **Bố cục UI & Thành phần:**
  - *Interactive Tree Canvas (`COMP-10`):* Sơ đồ cây mở rộng từ Ban Giám Đốc -> Khối -> Phòng Ban -> Nhóm -> Nhân Viên.
  - *Control Toolbar:* Zoom In, Zoom Out, Fit to Screen, Export PDF Sơ Đồ.
  - *Node Details Popover:* Rê chuột vào mỗi Node để xem Tên Trưởng phòng, Số lượng nhân sự bên dưới, Chi phí lương nhóm.

---

### 🟡 Phân Hệ 2: Workforce Tracking & Activity Audit

#### `PAGE-06`: Workstation Telemetry & Active Logs (`/workforce/activity`)
- **Mục đích:** Theo dõi thời gian làm việc thực tế và tỉ lệ active/idle trên máy tính nhân viên.
- **Bố cục UI & Thành phần:**
  - *Filter Bar:* Ngày theo dõi, Phòng ban, Tên nhân viên.
  - *Summary Widget:* Tổng giờ Active hôm nay, Tổng giờ Idle (rảnh rỗi), Tỉ lệ năng suất trung bình (%).
  - *Timeline Chart:* Thanh timeline 24 giờ màu sắc (Xanh: Active, Vàng: Idle, Đỏ: Offline).
  - *Telemetry Table:* Danh sách máy tính kết nối, địa chỉ IP, hệ điều hành, thời điểm bắt đầu/thắt ca.

#### `PAGE-07`: Desktop App & Web URL Usage Audit (`/workforce/app-usage`)
- **Mục đích:** Kiểm toán phần mềm desktop và địa chỉ website được sử dụng trong giờ làm việc.
- **Bố cục UI & Thành phần:**
  - *Category Pie Chart:* Tỉ lệ ứng dụng Năng suất (VS Code, Excel, Figma) vs Giải trí/Mạng xã hội (Facebook, Youtube).
  - *Top Applications Table:* Tên ứng dụng, Thời gian sử dụng (giờ/phút), Tỉ lệ %, Phân loại (Productive / Unproductive).
  - *URL Log Detail Table:* Địa chỉ trang web chi tiết, tiêu đề cửa sổ window, thời gian truy cập.

#### `PAGE-08`: Desktop Screenshot Audit Gallery (`/workforce/screenshots`)
- **Mục đích:** Duyệt và kiểm tra ảnh chụp màn hình định kỳ từ ứng dụng giám sát desktop.
- **Bố cục UI & Thành phần:**
  - *Gallery Grid (`COMP-11`):* Lưới ảnh chụp màn hình tự động (mỗi 10 phút/ảnh).
  - *Time Filter:* Chọn mốc khung giờ (ví dụ: 09:00 - 10:00 AM).
  - *Photo Modal Lightbox:* Nhấp vào ảnh để phóng to full màn hình, hiển thị mức độ nhấp chuột/bàn phím tại thời điểm chụp ảnh.
  - *Privacy Blur Overlay:* Tự động làm mờ các vùng thông tin nhạy cảm trên màn hình cá nhân.

#### `PAGE-09`: GPS Live Map & Field Dispatch Hub (`/workforce/field-map`)
- **Mục đích:** Giám sát nhân viên thị trường/đi tuyến trên bản đồ GPS thời gian thực.
- **Bố cục UI & Thành phần:**
  - *Interactive Map (`COMP-12`):* Bản đồ vệ tinh/giao thông hiển thị marker vị trí nhân viên di động.
  - *Left Staff Panel:* Danh sách nhân viên thị trường, trạng thái kết nối GPS, mức pin điện thoại.
  - *Geofence Radius Alert:* Cảnh báo khi nhân viên di chuyển ra ngoài vùng geofence đăng ký.
  - *Dispatch Work Order Modal:* Giao tác vụ ghé thăm khách hàng trực tiếp trên tọa độ bản đồ.

---

### 🟠 Phân Hệ 3: Recruitment & Talent Acquisition ATS

#### `PAGE-10`: Job Requisitions & Headcount Plan (`/recruitment/requisitions`)
- **Mục đích:** Quản lý đề xuất tuyển dụng và ngân sách định biên nhân sự.
- **Bố cục UI & Thành phần:**
  - *Requisition Data Table:* Mã đề xuất, Vi trí tuyển, Phòng ban yêu cầu, Số lượng tuyển, Mức lương đề xuất, Trạng thái duyệt.
  - *Approval Status Steps:* Quy trình duyệt 3 cấp (Quản lý phòng -> HR Manager -> Giám đốc tài chính).
  - *Create Requisition Form Modal:* Form đăng ký tuyển dụng mới.

#### `PAGE-11`: Kanban Applicant Pipeline (ATS) (`/recruitment/pipeline`)
- **Mục đích:** Quản lý quy trình phỏng vấn ứng viên dạng bảng kéo thả Kanban.
- **Bố cục UI & Thành phần:**
  - *Kanban Board (`COMP-05`):*
    - Cột 1: *Ứng tuyển mới (Applied)*
    - Cột 2: *Lọc hồ sơ (Screening)*
    - Cột 3: *Phỏng vấn vòng 1 (Interview)*
    - Cột 4: *Gửi Offer (Offer Sent)*
    - Cột 5: *Tuyển dụng thành công (Hired)*
  - *Candidate Card:* Avatar ứng viên, Họ tên, Vị trí ứng tuyển, Điểm CV matching (%), Số ngày lưu trong pipeline.

#### `PAGE-12`: Candidate Profile & Interview Scorecard (`/recruitment/candidates/:id`)
- **Mục đích:** Hồ sơ chi tiết ứng viên và bảng chấm điểm phỏng vấn.
- **Bố cục UI & Thành phần:**
  - *CV Viewer Panel:* Màn hình xem trực tiếp file PDF CV của ứng viên bên trái.
  - *Interview Scorecard Form:* Bảng chấm điểm tiêu chí (Kỹ năng chuyên môn, Giao tiếp, Văn hóa) từ 1-5 sao bên phải.
  - *Communication Timeline:* Nhật ký cuộc gọi, email trao đổi và lịch hẹn phỏng vấn.

#### `PAGE-13`: New-Hire Onboarding Roadmap (`/recruitment/onboarding`)
- **Mục đích:** Theo dõi tiến độ hội nhập và hoàn thành thủ tục của nhân viên mới.
- **Bố cục UI & Thành phần:**
  - *Onboarding Progress Bar:* Tỉ lệ % hoàn thành nhiệm vụ hội nhập.
  - *Checklist Grid:*
    - Nhiệm vụ HR (Nộp hợp đồng, CCCD, Ảnh thẻ).
    - Nhiệm vụ IT (Cấp máy tính, Email, Tài khoản Slack/Jira).
    - Nhiệm vụ Quản lý (Phân công người hướng dẫn Mentor, Giao bài tập tuần 1).

---

### 🔴 Phân Hệ 4: Time, Attendance & Leave Management

#### `PAGE-14`: Daily Attendance Punch & Time Logs (`/attendance/clock-in`)
- **Mục đích:** Màn hình chấm công hàng ngày cho nhân viên và theo dõi lịch sử đi muộn/về sớm.
- **Bố cục UI & Thành phần:**
  - *Digital Clock Widget:* Đồng hồ thời gian thực cỡ lớn, nút "CHẤM CÔNG VÀO (CLOCK IN)" / "CHẤM CÔNG RA (CLOCK OUT)".
  - *Geofence Verification Indicator:* Thẻ xanh báo vị trí hợp lệ / Thẻ đỏ báo ngoài vùng chấm công.
  - *Monthly Calendar Grid:* Lịch chấm công tháng với màu sắc (Xanh: Đúng giờ, Đỏ: Đi muộn, Vàng: Nghỉ phép).

#### `PAGE-15`: Timesheet Hub & Weekly Approval Grid (`/attendance/timesheets`)
- **Mục đích:** Nhập và phê duyệt bảng tổng hợp giờ công hàng tuần.
- **Bố cục UI & Thành phần:**
  - *Timesheet Matrix (`COMP-14`):* Bảng lưới hiển thị giờ làm việc từng ngày trong tuần của cả nhóm.
  - *Anomaly Alert Highlight:* Ô tô đỏ các ngày thiếu giờ công hoặc vượt trần OT chưa duyệt.
  - *Bulk Approval Button:* Nút "Duyệt toàn bộ bảng công tuần" dành cho Quản lý.

#### `PAGE-16`: Shift Rostering & Roster Calendar (`/attendance/shifts`)
- **Mục đích:** Xếp ca làm việc, xoay ca và phân lịch làm việc cho các bộ phận.
- **Bố cục UI & Thành phần:**
  - *Shift Roster Calendar:* Lịch biểu xếp ca (Ca sáng: 08:00-16:00, Ca chiều: 14:00-22:00, Ca đêm: 22:00-06:00).
  - *Drag-and-Drop Shift Assignment:* Kéo ca làm việc thả vào tên nhân viên.
  - *Shift Exchange Modal:* Form đăng ký đổi ca giữa 2 nhân viên.

#### `PAGE-17`: Absence & Paid Leave Management (`/attendance/leave`)
- **Mục đích:** Gửi đơn xin nghỉ phép, duyệt đơn và quản lý quỹ phép năm.
- **Bố cục UI & Thành phần:**
  - *Leave Quota Widget:* Số ngày phép năm còn lại (12/12 ngày), Phép thâm niên, Phép bù.
  - *Leave Application Form Modal:* Chọn loại phép (Phép năm, Nghỉ ốm, Nghỉ thai sản), Chọn từ ngày -> đến ngày, Lý do nghỉ.
  - *Leave Approval Workflow Table:* Danh sách đơn xin nghỉ phép chờ Quản lý ký duyệt.

---

### 🟣 Phân Hệ 5: Payroll Processing & Benefits Admin

#### `PAGE-18`: Monthly Payroll Computation Engine (`/payroll/calculate`)
- **Mục đích:** Chạy công thức tính lương tự động hàng tháng từ bảng công đã khóa.
- **Bố cục UI & Thành phần:**
  - *Payroll Run Configuration:* Chọn tháng tính lương, Chọn danh sách phòng ban.
  - *Calculation Formula Progress Bar:* Tiến trình chạy tính Lương Gross -> Giảm trừ gia cảnh -> BHXH/BHYT -> Thuế TNCN -> Lương Net.
  - *Payroll Master Summary Table:* Bảng tổng hợp chi tiết lương từng nhân viên trước khi chốt.

#### `PAGE-19`: Master Payroll Audit & Disbursement (`/payroll/disburse`)
- **Mục đích:** Kiểm toán bảng lương tổng hợp và xuất file chuyển khoản ngân hàng.
- **Bố cục UI & Thành phần:**
  - *Variance Comparison Widget:* So sánh tổng quỹ lương tháng này với tháng trước (Tăng/Giảm bao nhiêu %).
  - *Bank Batch Export Button:* Nút xuất file Excel/CSV định dạng chuẩn chuyển khoản ngân hàng (Vietcombank, Techcombank, VPBank,...).
  - *E-Signature Sign-off:* Ô ký điện tử phê duyệt lương của Trưởng phòng HR & Giám đốc tài chính.

#### `PAGE-20`: Employee Confidential Payslip Portal (`/payroll/payslips`)
- **Mục đích:** Trang xem phiếu lương cá nhân bảo mật của nhân viên.
- **Bố cục UI & Thành phần:**
  - *Security PIN Overlay (`COMP-17`):* Nhập mã PIN 6 số hoặc OTP để mở khóa phiếu lương.
  - *Payslip Card Breakdown:*
    - Khoản thu nhập (Lương chính, Phụ cấp, Lương OT, Thưởng).
    - Khoản khấu trừ (Thuế TNCN, BHXH 10.5%, Tạm ứng).
    - Lương Thực Nhận (NET).
  - *Download Encrypted PDF Button:* Nút tải file phiếu lương PDF có đặt mật khẩu opening.

#### `PAGE-21`: Flexible Benefits & Healthcare Admin (`/payroll/benefits`)
- **Mục đích:** Quản lý gói bảo hiểm sức khỏe tự nguyện và chế độ phúc lợi doanh nghiệp.
- **Bố cục UI & Thành phần:**
  - *Benefit Plan Cards:* Thẻ gói Bảo hiểm Bao Viet/PVI, Gói khám sức khỏe định kỳ, Gói tập Gym.
  - *Dependent Enrollment Form:* Form đăng ký người phụ thuộc tham gia bảo hiểm cùng nhân viên.
  - *Claims Management Table:* Lịch sử nộp hóa đơn thanh toán bảo hiểm và trạng thái giải ngân.

---

### 🔵 Phân Hệ 6: Performance, OKRs & Talent Growth

#### `PAGE-22`: Strategic Goals & OKRs Cascade (`/performance/okrs`)
- **Mục đích:** Thiết lập và quản lý cây mục tiêu OKRs từ công ty xuống cá nhân.
- **Bố cục UI & Thành phần:**
  - *OKR Tree View:* Mục tiêu Công ty -> Mục tiêu Phòng ban -> Mục tiêu Cá nhân.
  - *Key Result Progress Slider:* Thanh trượt cập nhật tiến độ hoàn thành chỉ số KRs (%).
  - *Alignment Connector:* Đường nối thể hiện sự đóng góp của OKR cá nhân vào OKR chung.

#### `PAGE-23`: 360-Degree Review & Self Appraisal (`/performance/reviews`)
- **Mục đích:** Đánh giá hiệu suất 360 độ (Tự đánh giá, Quản lý đánh giá, Đồng nghiệp đánh giá).
- **Bố cục UI & Thành phần:**
  - *Evaluation Form:* Bảng câu hỏi đánh giá theo khung năng lực (Core Competencies).
  - *Radar Competency Chart (`COMP-15`):* Biểu đồ nhện so sánh điểm Tự đánh giá vs Điểm Quản lý chấm.
  - *Bell Curve Calibration:* Đường cong phân bổ xếp loại hiệu suất công ty (Xuất sắc, Tốt, Đạt, Cần cải thiện).

#### `PAGE-24`: 1-on-1 Coaching & Meeting Notes (`/performance/coaching`)
- **Mục đích:** Quản lý các buổi họp 1-on-1 định kỳ giữa Quản lý và Nhân viên.
- **Bố cục UI & Thành phần:**
  - *Meeting Calendar & Scheduler:* Đặt lịch họp 1-on-1.
  - *Shared Agenda Builder:* Danh sách các chủ đề cần thảo luận (Khó khăn hiện tại, Định hướng sự nghiệp, Đề xuất hỗ trợ).
  - *Action Items Checklist:* Danh sách các việc cần làm sau buổi họp kèm deadline.

#### `PAGE-25`: Peer Kudos & Wall of Fame (`/performance/kudos`)
- **Mục đích:** Mạng xã hội nội bộ ghi nhận và khen thưởng đồng nghiệp.
- **Bố cục UI & Thành phần:**
  - *Kudos Feed Wall:* Bảng tin hiển thị lời cảm ơn, vinh danh kèm Huy hiệu (Badge: `Team Player`, `Problem Solver`, `Innovation`).
  - *Send Kudos Modal:* Form gửi lời khen và tặng điểm thưởng Kudos Point cho đồng nghiệp.
  - *Leaderboard Widget:* Bảng xếp hạng Top nhân viên nhận được nhiều Kudos nhất tháng.

---

### 🟤 Phân Hệ 7: Platform Infrastructure & Access Control

#### `PAGE-26`: Single Sign-On (SSO) & MFA Login (`/auth/login`)
- **Mục đích:** Trang đăng nhập bảo mật hỗ trợ SSO và MFA 2 lớp.
- **Bố cục UI & Thành phần:**
  - *Login Card:* Ô nhập Username/Password, Nút "Đăng nhập bằng Google / Microsoft SSO".
  - *MFA Verification Step:* Màn hình nhập mã OTP 6 số từ Google Authenticator.
  - *Forgot Password / SSO Help Links.*

#### `PAGE-27`: Role-Based Access Control (RBAC) Admin (`/settings/roles`)
- **Mục đích:** Cấu hình vai trò và phân quyền chi tiết (RBAC) cho người dùng.
- **Bố cục UI & Thành phần:**
  - *Role List Sidebar:* Admin, HR Manager, Finance Manager, Department Manager, Employee.
  - *Permission Matrix Table:* Bảng tích chọn quyền (Xem, Thêm, Sửa, Xóa, Export) trên từng Module và từng Trang.
  - *User Assignment Modal:* Phân vai trò cho danh sách tài khoản nhân viên.

#### `PAGE-28`: System Integration & Webhook Gateway (`/settings/integrations`)
- **Mục đích:** Quản lý kết nối API với các hệ thống bên ngoài (Slack, Jira, Ngân hàng, Máy chấm công).
- **Bố cục UI & Thành phần:**
  - *Integration Cards Grid:* Thẻ kết nối Slack, Microsoft Teams, Google Workspace, Máy chấm công Ronald Jack, Ngân hàng VCB.
  - *API Key Management:* Tạo và thu hồi Token API Key.
  - *Webhook Event Logs:* Lịch sử gửi/nhận webhook thời gian thực.

---

### ⚪ Phân Hệ 8: Corporate Governance & Security Audit

#### `PAGE-29`: Regulatory Compliance & Policy Hub (`/compliance/policies`)
- **Mục đích:** Ban hành và quản lý việc ký xác nhận quy định, nội quy công ty.
- **Bố cục UI & Thành phần:**
  - *Policy Document Library:* Danh sách Nội quy lao động, Quy định bảo mật thông tin, Chính sách An toàn dữ liệu.
  - *Acknowledgment Status Tracker:* Tỉ lệ % nhân viên đã đọc và ký xác nhận quy định.
  - *Digital Sign-off Panel:* Ô ký tên điện tử cam kết tuân thủ quy định.

#### `PAGE-30`: Security Audit Trails & Anomaly Logs (`/compliance/audit-log`)
- **Mục đích:** Nhập và tra cứu nhật ký an ninh, cảnh báo truy cập bất thường.
- **Bố cục UI & Thành phần:**
  - *Audit Log Table:* Thời gian, Tài khoản thao tác, Hành động (Đổi lương, Xóa hồ sơ, Export báo cáo), Địa chỉ IP, Trạng thái.
  - *Anomaly Alert Widget:* Cảnh báo tài khoản đăng nhập sai 5 lần hoặc tải dữ liệu khối lượng lớn bất thường.

#### `PAGE-31`: PII Data Masking & Privacy Rules (`/compliance/privacy`)
- **Mục đích:** Cấu hình che mờ dữ liệu cá nhân nhạy cảm (PII) theo GDPR.
- **Bố cục UI & Thành phần:**
  - *PII Masking Rules Table:* Cấu hình che số CCCD (`035******123`), Số điện thoại (`098****456`), Mức lương (`***,000,000 VND`).
  - *Role Visibility Exemption:* Danh sách vai trò được xem dữ liệu giải mã đầy đủ.

---

### 🟧 Phân Hệ 9: HR Analytics & BI Reporting

#### `PAGE-32`: Executive BI Dashboard & Analytics (`/analytics/dashboards`)
- **Mục đích:** Báo cáo phân tích dữ liệu nhân sự nâng cao dành cho Lãnh đạo.
- **Bố cục UI & Thành phần:**
  - *Interactive BI Visuals:*
    - Biểu đồ biến động tỉ lệ nghỉ việc (Turnover Rate %).
    - Biểu đồ tháp tuổi và cơ cấu giới tính nhân sự.
    - Biểu đồ phân bổ chi phí nhân công theo phòng ban.
  - *Drill-down Filter:* Lọc dữ liệu theo Chi nhánh, Năm, Quý, Phòng ban.

#### `PAGE-33`: Custom Report Builder & Data Exporter (`/analytics/reports`)
- **Mục đích:** Công cụ tự thiết kế báo cáo và xuất dữ liệu tùy chỉnh.
- **Bố cục UI & Thành phần:**
  - *Drag-and-Drop Report Field Builder:* Kéo thả các cột thông tin cần xuất báo cáo.
  - *Schedule Automated Report Email:* Đặt lịch tự động gửi báo cáo PDF/Excel vào email sáng thứ 2 hàng tuần.
  - *Export Format Buttons:* Nút xuất file Excel (.xlsx), CSV, PDF.

---

### 🟪 Phân Hệ 10: Projects & Resources

#### `PAGE-34`: Project Workspace & Member Capacity (`/projects/workspaces`)
- **Mục đích:** Quản lý không gian làm việc dự án và tải năng lực của nhân sự.
- **Bố cục UI & Thành phần:**
  - *Project Cards Grid:* Danh sách dự án, Khách hàng, Ngân sách giờ công, Trạng thái (`In Progress`, `Completed`).
  - *Member Capacity Heatmap:* Biểu đồ nhiệt hiển thị mức độ bận rộn của từng nhân sự (Đỏ: Quá tải >100%, Xanh: Hợp lý 80%, Vàng: Rảnh rỗi <50%).

#### `PAGE-35`: Billable Timesheets & Resource Rates (`/projects/timesheets`)
- **Mục đích:** Ghi nhận giờ làm việc billable cho dự án và cấu hình đơn giá giờ công.
- **Bố cục UI & Thành phần:**
  - *Project Timesheet Entry Form:* Chọn dự án, Chọn task, Nhập số giờ làm việc billable.
  - *Resource Billing Rate Matrix:* Bảng cấu hình đơn giá giờ công ($/hr) theo Level nhân sự (Senior, Mid, Junior).

#### `PAGE-36`: Project Labor Cost & Invoicing Hub (`/projects/financials`)
- **Mục đích:** Theo dõi chi phí nhân công dự án và xuất hóa đơn thanh toán cho khách hàng.
- **Bố cục UI & Thành phần:**
  - *Financial Cost vs Revenue Widget:* So sánh tổng chi phí lương nhân công thực tế với Doanh thu billable từ khách hàng.
  - *Draft Invoice Generator:* Tự động tạo hóa đơn nghiệm thu chi phí giờ công gửi cho khách hàng.

---

## 📱 5. Quy Chuẩn Responsive & Tương Thích Thiết Bị

1. **Desktop View (Kích thước >= 1024px):** Hiển thị đầy đủ Sidebar cố định, Topbar, 4-column KPI cards và Data Grid bảng lớn.
2. **Tablet View (Kích thước 768px - 1023px):** Sidebar tự động thu gọn thành Icon Menu, Data Grid hỗ trợ cuộn ngang (Horizontal scroll).
3. **Mobile View (Kích thước < 768px):**
   - Sidebar biến thành Hamburger Drawer.
   - Bảng dữ liệu tự động chuyển đổi thành dạng Thẻ Card dọc (Card List View).
   - Nút chấm công & các tác vụ chính chuyển thành Floating Action Button (FAB) ở góc dưới màn hình.
