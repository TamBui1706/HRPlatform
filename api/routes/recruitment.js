/**
 * Module 3: AI Recruitment ATS & Applicant Pipeline REST API Routes
 * 100% English Specification & Express Router
 */

const express = require('express');
const router = express.Router();

// GET /api/v1/recruitment/requisitions - Job Headcount Requisitions
router.get('/requisitions', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: "REQ-01", jobTitle: "Senior Frontend Engineer", department: "Engineering", headcount: 2, status: "Approved" },
      { id: "REQ-02", jobTitle: "UI/UX Designer", department: "Product", headcount: 1, status: "Pending Approval" }
    ]
  });
});

// POST /api/v1/recruitment/ai-parse-cv - Extract CV Data & Score Candidate Match
router.post('/ai-parse-cv', (req, res) => {
  res.json({
    success: true,
    data: {
      candidateName: "Pham Hoang Long",
      email: "long.pham@email.com",
      yearsOfExperience: 5,
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      aiMatchScorePercentage: 95,
      recommendation: "Strongly Recommended for Technical Interview"
    }
  });
});

// GET /api/v1/recruitment/pipeline - Retrieve Kanban ATS Candidate Stages
router.get('/pipeline', (req, res) => {
  res.json({
    success: true,
    pipeline: {
      applied: [{ id: "CAN-101", name: "Pham Hoang Long", role: "Senior Frontend Engineer", matchScore: 95 }],
      interviewing: [{ id: "CAN-102", name: "Dang My Linh", role: "UI/UX Designer", interviewSlot: "2026-08-10T14:00:00Z" }],
      offered: [{ id: "CAN-103", name: "Vu Quoc Anh", role: "DevOps Specialist", offerStatus: "Sent" }]
    }
  });
});

module.exports = router;
