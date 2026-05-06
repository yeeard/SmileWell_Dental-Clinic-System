const express = require("express");
const router = express.Router();

router.get("/appointments", (req, res) => {
    res.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" }
    ]);
});

router.get("/dashboard", (req, res) => {
    res.json({
        "totalPatients": 120,
        "totalAppointments": 45,
        "totalStaff": 8,
        "upcomingVisits": 12
    })
});

module.exports = router;