const router = require('express').Router();
const { Measurement } = require('../models/measurements.model');

router.get('/api/measurements', async (req, res) => {
    const measurements = await Measurement.find({}).sort({unix_timestamp: -1}).limit(5);
    res.send(measurements);
});

exports.router = router;