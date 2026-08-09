/**
 * Module 9 & 10: Projects Capacity Heatmap & Enterprise BI Analytics Routes
 * 100% English Specification & Express Router
 */

const express = require('express');
const router = express.Router();

// GET /api/v1/projects/capacity-heatmap - Resource Workload Capacity Heatmap
router.get('/capacity-heatmap', (req, res) => {
  res.json({
    success: true,
    data: [
      { employeeId: "EMP-002", name: "Nguyen Van Minh", project: "HR Platform", workloadPercentage: 120, status: "OVERLOADED" },
      { employeeId: "EMP-001", name: "Tran Thanh Tam", project: "ERP Mobile", workloadPercentage: 85, status: "OPTIMAL" }
    ]
  });
});

// POST /api/v1/projects/billable-hours - Log Project Billable Hours
router.post('/billable-hours', (req, res) => {
  const { projectId, hoursLogged, hourlyRateUSD } = req.body;
  res.status(201).json({
    success: true,
    message: "Billable project hours recorded.",
    data: { projectId, hoursLogged, hourlyRateUSD, calculatedRevenueUSD: hoursLogged * hourlyRateUSD }
  });
});

module.exports = router;
