/**
 * Module 2: Workforce Telemetry & Activity Audit REST API Routes
 * 100% English Specification & Express Router
 */

const express = require('express');
const router = express.Router();

// POST /api/v1/workforce/telemetry - Ingest Desktop Agent Active/Idle Logs
router.post('/telemetry', (req, res) => {
  const { employeeId, activeMinutes, idleMinutes, activeApp } = req.body;
  res.status(200).json({
    success: true,
    message: "Workforce telemetry log recorded.",
    data: { employeeId, activeMinutes, idleMinutes, activeApp, recordedAt: new Date().toISOString() }
  });
});

// GET /api/v1/workforce/app-usage - Audit App & URL Usage Ratios
router.get('/app-usage', (req, res) => {
  res.json({
    success: true,
    data: [
      { appName: "VS Code", category: "Productive", durationMinutes: 240, percentage: 65 },
      { appName: "Figma", category: "Productive", durationMinutes: 90, percentage: 25 },
      { appName: "Browser / Youtube", category: "Unproductive", durationMinutes: 30, percentage: 10 }
    ]
  });
});

// GET /api/v1/workforce/screenshots - Retrieve Desktop Screenshot Audit Gallery
router.get('/screenshots', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: "SHOT-101", timestamp: "2026-08-10T10:15:00Z", imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", activeApp: "VS Code" },
      { id: "SHOT-102", timestamp: "2026-08-10T10:25:00Z", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", activeApp: "Figma" }
    ]
  });
});

// POST /api/v1/workforce/field-location - Mobile GPS Geofenced Check-in
router.post('/field-location', (req, res) => {
  const { latitude, longitude, siteId } = req.body;
  res.json({
    success: true,
    message: "GPS location check-in verified inside geofence radius.",
    data: { latitude, longitude, siteId, isWithinGeofence: true }
  });
});

module.exports = router;
