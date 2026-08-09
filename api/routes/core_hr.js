/**
 * Module 1: Core HR & Employee Profile REST API Routes
 * 100% English Specification & Express Router
 */

const express = require('express');
const router = express.Router();

// GET /api/v1/employees - Search & Filter Employee Directory
router.get('/', (req, res) => {
  const { search, department, status, page = 1, limit = 10 } = req.query;
  res.json({
    success: true,
    total: 1248,
    page: Number(page),
    limit: Number(limit),
    data: [
      {
        id: "EMP-001",
        fullName: "Tran Thanh Tam",
        department: "Human Resources",
        jobTitle: "HR Director",
        email: "tam.tran@enterprise.com",
        phone: "+84 988 123 456",
        startDate: "2021-01-15",
        status: "Active"
      },
      {
        id: "EMP-002",
        fullName: "Nguyen Van Minh",
        department: "Information Technology",
        jobTitle: "Lead Software Architect",
        email: "minh.nguyen@enterprise.com",
        phone: "+84 912 345 678",
        startDate: "2022-03-01",
        status: "Active"
      }
    ]
  });
});

// GET /api/v1/employees/:id - Retrieve 360 Master Employee Profile
router.get('/:id', (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.params.id,
      fullName: "Tran Thanh Tam",
      personalInfo: {
        dateOfBirth: "1992-06-17",
        gender: "Female",
        nationalId: "035192008899",
        maritalStatus: "Single"
      },
      employmentInfo: {
        department: "Human Resources",
        position: "HR Director",
        directManager: "CEO Executive Board",
        contractType: "Indefinite Term",
        workLocation: "Ho Chi Minh HQ"
      }
    }
  });
});

// POST /api/v1/employees - Create New Employee Record
router.post('/', (req, res) => {
  const { fullName, email, department, jobTitle } = req.body;
  if (!fullName || !email) {
    return res.status(400).json({ success: false, error: "fullName and email are required fields." });
  }
  res.status(201).json({
    success: true,
    message: "Employee profile created successfully.",
    data: { id: "EMP-003", fullName, email, department, jobTitle, status: "Probation" }
  });
});

module.exports = router;
