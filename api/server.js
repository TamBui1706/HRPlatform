/**
 * HR Platform REST API Express Gateway Server Entry Point
 * 100% English Code & Server Setup
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Healthcheck Route
app.get('/api/v1/health', (req, res) => {
  res.json({ status: "UP", gateway: "HR Platform API v1.0", timestamp: new Date().toISOString() });
});

// Import & Mount 10 Module Routers
app.use('/api/v1/employees', require('./routes/core_hr'));
app.use('/api/v1/workforce', require('./routes/workforce'));
app.use('/api/v1/recruitment', require('./routes/recruitment'));
app.use('/api/v1/attendance', require('./routes/attendance'));
app.use('/api/v1/payroll', require('./routes/payroll'));
app.use('/api/v1/performance', require('./routes/performance'));
app.use('/api/v1/auth', require('./routes/platform'));
app.use('/api/v1/settings', require('./routes/platform'));
app.use('/api/v1/compliance', require('./routes/governance'));
app.use('/api/v1/projects', require('./routes/projects'));

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`HR Platform Express API Gateway running on http://localhost:${PORT}`);
  });
}

module.exports = app;
