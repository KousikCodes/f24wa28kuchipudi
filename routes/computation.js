const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Use query parameter 'x' if provided; otherwise, generate a random value
    let x = req.query.x ? parseFloat(req.query.x) : Math.random();

    // Apply Math functions
    let atanResult = Math.atan(x);
    let expResult = Math.exp(x);
    let expm1Result = Math.expm1(x);

    // Construct response with each result
    res.send(`
        <h2>Computation Results</h2>
        <p>Math.atan applied to ${x} is: ${atanResult}</p>
        <p>Math.exp applied to ${x} is: ${expResult}</p>
        <p>Math.expm1 applied to ${x} is: ${expm1Result}</p>
    `);
});

module.exports = router;
