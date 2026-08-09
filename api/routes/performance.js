/**
 * Module 6: Performance Reviews, OKRs & Peer Kudos REST API Routes
 * 100% English Specification & Express Router
 */

const express = require('express');
const router = express.Router();

// GET /api/v1/performance/okrs - Retrieve OKRs Tree & Progress
router.get('/okrs', (req, res) => {
  res.json({
    success: true,
    okrPeriod: "Q3/2026",
    keyResults: [
      { id: "KR-101", title: "Complete HR Platform Design System Refactor", progressPercentage: 85 },
      { id: "KR-102", title: "Optimize Page Loading Speed below 1.2s", progressPercentage: 60 }
    ]
  });
});

// PUT /api/v1/performance/okrs/:id - Update Key Result Progress Percentage
router.put('/okrs/:id', (req, res) => {
  const { progressPercentage } = req.body;
  res.json({
    success: true,
    message: `OKR ${req.params.id} progress updated to ${progressPercentage}%.`,
    data: { id: req.params.id, progressPercentage: Number(progressPercentage), updatedAt: new Date().toISOString() }
  });
});

// POST /api/v1/performance/kudos - Send Peer Kudos Recognition
router.post('/kudos', (req, res) => {
  const { recipientName, badgeType, message } = req.body;
  if (!recipientName || !message) {
    return res.status(400).json({ success: false, error: "recipientName and message are required." });
  }
  res.status(201).json({
    success: true,
    message: "Kudos sent successfully!",
    data: { id: "KUD-882", recipientName, badgeType: badgeType || "Team Player", message, sentAt: new Date().toISOString() }
  });
});

module.exports = router;
