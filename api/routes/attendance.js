/**
 * Module 4: Time, Attendance & Shift Rostering REST API Routes
 * 100% English Specification & Express Router
 */

const express = require('express');
const router = express.Router();

// POST /api/v1/attendance/clock-in - Daily Web / Biometric Clock In
router.post('/clock-in', (req, res) => {
  const { employeeId, locationGps, deviceType } = req.body;
  res.json({
    success: true,
    message: "Clock In recorded successfully.",
    data: { employeeId, clockInTime: new Date().toISOString(), locationGps, status: "On Time" }
  });
});

// POST /api/v1/attendance/clock-out - Daily Clock Out
router.post('/clock-out', (req, res) => {
  const { employeeId } = req.body;
  res.json({
    success: true,
    message: "Clock Out recorded successfully.",
    data: { employeeId, clockOutTime: new Date().toISOString(), totalHoursWorked: 8.5 }
  });
});

// GET /api/v1/attendance/timesheets - Weekly Timesheet Grid
router.get('/timesheets', (req, res) => {
  res.json({
    success: true,
    data: [
      { employeeId: "EMP-001", fullName: "Tran Thanh Tam", monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8.5, totalWeeklyHours: 40.5 }
    ]
  });
});

// POST /api/v1/attendance/leave-requests - Submit Paid Leave Application
router.post('/leave-requests', (req, res) => {
  const { leaveType, startDate, endDate, reason } = req.body;
  res.status(201).json({
    success: true,
    message: "Leave request submitted for manager approval.",
    data: { id: "LV-992", leaveType, startDate, endDate, reason, status: "Pending Manager Approval" }
  });
});

module.exports = router;
